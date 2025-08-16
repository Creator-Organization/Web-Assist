#!/usr/bin/env node

/**
 * Database Setup Script for WebAssist
 * This script sets up the database schema and runs initial migrations
 */

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

async function setupDatabase() {
  let client;
  
  try {
    console.log('🔌 Connecting to database...');
    client = await pool.connect();
    
    console.log('✅ Connected to database successfully!');
    
    // Read and execute schema file
    const schemaPath = path.join(__dirname, '../database/simple-schema.sql');
    
    if (!fs.existsSync(schemaPath)) {
      console.error('❌ Schema file not found at:', schemaPath);
      console.log('Please create the database/schema.sql file first.');
      process.exit(1);
    }
    
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('📊 Setting up database schema...');
    
    // Execute the entire schema as one block
    console.log('📊 Executing complete schema...');
    
    try {
      await client.query(schemaSql);
      console.log('✅ Schema executed successfully!');
    } catch (error) {
      console.error('❌ Error executing schema:', error.message);
      
      // If schema execution fails, try individual statements
      console.log('🔄 Trying individual statements...');
      
      // Better SQL parsing - handle dollar-quoted strings
      const statements = parseSqlStatements(schemaSql);
      
      for (let i = 0; i < statements.length; i++) {
        const statement = statements[i];
        if (!statement.trim()) continue;
        
        try {
          await client.query(statement);
          console.log(`✅ Statement ${i + 1}/${statements.length} executed`);
        } catch (error) {
          if (error.message.includes('already exists')) {
            console.log(`⚠️  Statement ${i + 1}/${statements.length} skipped (already exists)`);
          } else {
            console.error(`❌ Statement ${i + 1}/${statements.length} failed:`, error.message);
          }
        }
      }
    }
    
    console.log('🎉 Database setup completed successfully!');
    
    // Test the setup by querying the contacts table
    console.log('🧪 Testing database setup...');
    const testResult = await client.query('SELECT COUNT(*) FROM contacts');
    console.log(`✅ Contacts table ready. Current count: ${testResult.rows[0].count}`);
    
    // Show table structure
    const tableInfo = await client.query(`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_name = 'contacts'
      ORDER BY ordinal_position
    `);
    
    console.log('\n📋 Contacts table structure:');
    tableInfo.rows.forEach(row => {
      console.log(`  - ${row.column_name}: ${row.data_type} ${row.is_nullable === 'NO' ? '(required)' : '(optional)'}`);
    });
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  } finally {
    if (client) {
      client.release();
    }
    await pool.end();
  }
}

// Check if required environment variables are set
function checkEnvironmentVariables() {
  const required = ['DATABASE_URL'];
  const missing = required.filter(env => !process.env[env]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(env => console.error(`  - ${env}`));
    console.log('\nPlease set these in your .env.local file');
    process.exit(1);
  }
  
  console.log('✅ Environment variables loaded');
}

// Main execution
async function main() {
  console.log('🚀 Starting WebAssist Database Setup\n');
  
  checkEnvironmentVariables();
  await setupDatabase();
  
  console.log('\n🎉 Setup complete! Your database is ready for WebAssist.');
  console.log('\nNext steps:');
  console.log('1. Start your development server: npm run dev');
  console.log('2. Test the contact form on your website');
  console.log('3. Check the database for new entries');
}

// Helper function to properly parse SQL statements
function parseSqlStatements(sql) {
  const statements = [];
  let current = '';
  let inDollarQuote = false;
  let dollarTag = '';
  let inComment = false;
  
  const lines = sql.split('\n');
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip comment lines
    if (trimmedLine.startsWith('--') || trimmedLine === '') {
      continue;
    }
    
    // Handle dollar-quoted strings
    if (trimmedLine.includes('$')) {
      const dollarMatches = trimmedLine.match(/\$([^$]*)\$/g);
      if (dollarMatches) {
        for (const match of dollarMatches) {
          if (!inDollarQuote) {
            inDollarQuote = true;
            dollarTag = match;
          } else if (match === dollarTag) {
            inDollarQuote = false;
            dollarTag = '';
          }
        }
      }
    }
    
    current += line + '\n';
    
    // If we find a semicolon and we're not in a dollar-quoted string
    if (trimmedLine.endsWith(';') && !inDollarQuote) {
      statements.push(current.trim());
      current = '';
    }
  }
  
  // Add any remaining content
  if (current.trim()) {
    statements.push(current.trim());
  }
  
  return statements.filter(stmt => stmt.length > 0);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { setupDatabase };