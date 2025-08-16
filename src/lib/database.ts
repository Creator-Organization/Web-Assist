import { Pool, PoolClient } from 'pg';
import { ContactFormData, DatabaseContact } from '@/types/contact';

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
});

// Database connection helper
export async function getDbClient(): Promise<PoolClient> {
  try {
    const client = await pool.connect();
    return client;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to database');
  }
}

// Test database connection
export async function testConnection(): Promise<boolean> {
  let client: PoolClient | null = null;
  try {
    client = await getDbClient();
    const result = await client.query('SELECT NOW()');
    console.log('Database connected successfully:', result.rows[0]);
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  } finally {
    if (client) {
      client.release();
    }
  }
}

// Contact-related database operations
export class ContactRepository {
  // Create a new contact
  static async create(contactData: ContactFormData): Promise<DatabaseContact> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      
      const query = `
        INSERT INTO contacts (
          name, email, phone, company, project_type, 
          preferred_stack, budget_range, project_description, timeline
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *
      `;
      
      const values = [
        contactData.name,
        contactData.email,
        contactData.phone || null,
        contactData.company || null,
        contactData.projectType,
        contactData.preferredStack || null,
        contactData.budgetRange,
        contactData.projectDescription,
        contactData.timeline,
      ];
      
      const result = await client.query(query, values);
      return this.mapRowToContact(result.rows[0]);
    } catch (error) {
      console.error('Error creating contact:', error);
      throw new Error('Failed to save contact information');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  // Get contact by ID
  static async getById(id: number): Promise<DatabaseContact | null> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      
      const query = 'SELECT * FROM contacts WHERE id = $1';
      const result = await client.query(query, [id]);
      
      if (result.rows.length === 0) {
        return null;
      }
      
      return this.mapRowToContact(result.rows[0]);
    } catch (error) {
      console.error('Error fetching contact:', error);
      throw new Error('Failed to fetch contact');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  // Get all contacts with pagination
  static async getAll(
    page: number = 1,
    limit: number = 10,
    status?: string
  ): Promise<{ contacts: DatabaseContact[]; total: number }> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      
      const offset = (page - 1) * limit;
      
      let whereClause = '';
      let queryParams: any[] = [limit, offset];
      
      if (status) {
        whereClause = 'WHERE status = $3';
        queryParams.push(status);
      }
      
      // Get contacts
      const contactsQuery = `
        SELECT * FROM contacts 
        ${whereClause}
        ORDER BY created_at DESC 
        LIMIT $1 OFFSET $2
      `;
      
      // Get total count
      const countQuery = `
        SELECT COUNT(*) as total FROM contacts ${whereClause}
      `;
      
      const [contactsResult, countResult] = await Promise.all([
        client.query(contactsQuery, queryParams),
        client.query(countQuery, status ? [status] : []),
      ]);
      
      const contacts = contactsResult.rows.map(this.mapRowToContact);
      const total = parseInt(countResult.rows[0].total);
      
      return { contacts, total };
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw new Error('Failed to fetch contacts');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  // Update contact status
  static async updateStatus(
    id: number,
    status: DatabaseContact['status']
  ): Promise<DatabaseContact | null> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      
      const query = `
        UPDATE contacts 
        SET status = $1, updated_at = CURRENT_TIMESTAMP 
        WHERE id = $2 
        RETURNING *
      `;
      
      const result = await client.query(query, [status, id]);
      
      if (result.rows.length === 0) {
        return null;
      }
      
      return this.mapRowToContact(result.rows[0]);
    } catch (error) {
      console.error('Error updating contact status:', error);
      throw new Error('Failed to update contact status');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  // Check if email already exists
  static async emailExists(email: string): Promise<boolean> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      
      const query = 'SELECT id FROM contacts WHERE email = $1 LIMIT 1';
      const result = await client.query(query, [email]);
      
      return result.rows.length > 0;
    } catch (error) {
      console.error('Error checking email existence:', error);
      return false; // Assume email doesn't exist on error
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  // Delete contact (soft delete by updating status)
  static async delete(id: number): Promise<boolean> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      
      const query = 'UPDATE contacts SET status = $1 WHERE id = $2';
      const result = await client.query(query, ['cancelled', id]);
      
      return result.rowCount !== null && result.rowCount > 0;
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw new Error('Failed to delete contact');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  // Helper method to map database row to Contact object
  private static mapRowToContact(row: any): DatabaseContact {
    return {
      id: row.id,
      name: row.name,
      email: row.email,
      phone: row.phone,
      company: row.company,
      projectType: row.project_type,
      preferredStack: row.preferred_stack,
      budgetRange: row.budget_range,
      projectDescription: row.project_description,
      timeline: row.timeline,
      createdAt: new Date(row.created_at),
      status: row.status,
    };
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Closing database pool...');
  await pool.end();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Closing database pool...');
  await pool.end();
  process.exit(0);
});

export default pool;