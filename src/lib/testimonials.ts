// src/lib/testimonials.ts

import { Pool } from 'pg';
import { Testimonial, TestimonialRow } from '@/types/testimonials';

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Convert database row to TypeScript object (snake_case to camelCase)
function mapTestimonialRow(row: TestimonialRow): Testimonial {
  return {
    id: row.id,
    clientName: row.client_name,
    clientCompany: row.client_company,
    clientTitle: row.client_title || undefined,
    rating: row.rating,
    content: row.content,
    projectType: row.project_type || undefined,
    featured: row.featured,
    displayOrder: row.display_order,
    createdAt: row.created_at,
    isActive: row.is_active,
  };
}

// Get all active testimonials
export async function getTestimonials(options: {
  featuredOnly?: boolean;
  limit?: number;
  offset?: number;
} = {}): Promise<Testimonial[]> {
  const { featuredOnly = false, limit, offset = 0 } = options;
  
  try {
    let query = `
      SELECT * FROM testimonials 
      WHERE is_active = true
    `;
    
    if (featuredOnly) {
      query += ` AND featured = true`;
    }
    
    query += ` ORDER BY featured DESC, display_order ASC, created_at DESC`;
    
    if (limit) {
      query += ` LIMIT $${featuredOnly ? 1 : 1} OFFSET $${featuredOnly ? 2 : 2}`;
    }
    
    const values = [];
    if (limit) {
      values.push(limit, offset);
    }
    
    const result = await pool.query(query, values);
    return result.rows.map(mapTestimonialRow);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw new Error('Failed to fetch testimonials');
  }
}

// Get featured testimonials only
export async function getFeaturedTestimonials(limit = 3): Promise<Testimonial[]> {
  return getTestimonials({ featuredOnly: true, limit });
}

// Get testimonial by ID
export async function getTestimonialById(id: number): Promise<Testimonial | null> {
  try {
    const result = await pool.query(
      'SELECT * FROM testimonials WHERE id = $1 AND is_active = true',
      [id]
    );
    
    if (result.rows.length === 0) {
      return null;
    }
    
    return mapTestimonialRow(result.rows[0]);
  } catch (error) {
    console.error('Error fetching testimonial by ID:', error);
    throw new Error('Failed to fetch testimonial');
  }
}

// Get testimonials count
export async function getTestimonialsCount(featuredOnly = false): Promise<number> {
  try {
    let query = 'SELECT COUNT(*) FROM testimonials WHERE is_active = true';
    
    if (featuredOnly) {
      query += ' AND featured = true';
    }
    
    const result = await pool.query(query);
    return parseInt(result.rows[0].count);
  } catch (error) {
    console.error('Error counting testimonials:', error);
    throw new Error('Failed to count testimonials');
  }
}

// Get testimonials by project type
export async function getTestimonialsByProjectType(projectType: string): Promise<Testimonial[]> {
  try {
    const result = await pool.query(
      `SELECT * FROM testimonials 
       WHERE is_active = true AND project_type = $1
       ORDER BY featured DESC, display_order ASC, created_at DESC`,
      [projectType]
    );
    
    return result.rows.map(mapTestimonialRow);
  } catch (error) {
    console.error('Error fetching testimonials by project type:', error);
    throw new Error('Failed to fetch testimonials by project type');
  }
}

// Create a new testimonial (for admin use)
export async function createTestimonial(testimonialData: {
  clientName: string;
  clientCompany: string;
  clientTitle?: string;
  rating: number;
  content: string;
  projectType?: string;
  featured?: boolean;
  displayOrder?: number;
}): Promise<Testimonial> {
  try {
    const {
      clientName,
      clientCompany,
      clientTitle,
      rating,
      content,
      projectType,
      featured = false,
      displayOrder = 0,
    } = testimonialData;
    
    const result = await pool.query(
      `INSERT INTO testimonials 
       (client_name, client_company, client_title, rating, content, project_type, featured, display_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [clientName, clientCompany, clientTitle, rating, content, projectType, featured, displayOrder]
    );
    
    return mapTestimonialRow(result.rows[0]);
  } catch (error) {
    console.error('Error creating testimonial:', error);
    throw new Error('Failed to create testimonial');
  }
}

// Test database connection
export async function testTestimonialsConnection(): Promise<boolean> {
  try {
    const result = await pool.query('SELECT COUNT(*) FROM testimonials');
    console.log(`✅ Testimonials connection successful. Count: ${result.rows[0].count}`);
    return true;
  } catch (error) {
    console.error('❌ Testimonials connection failed:', error);
    return false;
  }
}

// Calculate average rating
export async function getAverageRating(): Promise<number> {
  try {
    const result = await pool.query(
      'SELECT AVG(rating) as avg_rating FROM testimonials WHERE is_active = true'
    );
    
    return parseFloat(result.rows[0].avg_rating) || 0;
  } catch (error) {
    console.error('Error calculating average rating:', error);
    return 0;
  }
}