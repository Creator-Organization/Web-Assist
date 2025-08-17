#!/usr/bin/env node

/**
 * WebAssist Testimonials Database Setup Script
 * This script sets up the testimonials table and inserts sample data
 */

require('dotenv').config({ path: '.env.local' });
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function setupTestimonials() {
  let client;
  
  try {
    client = await pool.connect();
    console.log('✅ Connected to database');
    
    // Read and execute the testimonials schema
    const schemaPath = path.join(__dirname, '..', 'database', 'testimonials-schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('📝 Creating testimonials table and inserting sample data...');
    await client.query(schemaSql);
    
    console.log('✅ Testimonials table created successfully');
    
    // Test the setup by querying the testimonials table
    console.log('🧪 Testing testimonials setup...');
    const testResult = await client.query('SELECT COUNT(*) FROM testimonials WHERE is_active = true');
    console.log(`✅ Testimonials table ready. Active testimonials count: ${testResult.rows[0].count}`);
    
    // Show featured testimonials
    const featuredResult = await client.query(`
      SELECT client_name, client_company, rating, featured 
      FROM testimonials 
      WHERE is_active = true 
      ORDER BY featured DESC, display_order ASC
      LIMIT 5
    `);
    
    console.log('\n⭐ Sample testimonials:');
    featuredResult.rows.forEach((row, index) => {
      const stars = '★'.repeat(row.rating) + '☆'.repeat(5 - row.rating);
      const badge = row.featured ? ' 🌟 (Featured)' : '';
      console.log(`  ${index + 1}. ${row.client_name} - ${row.client_company} ${stars}${badge}`);
    });
    
    // Show table structure
    const tableInfo = await client.query(`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_name = 'testimonials'
      ORDER BY ordinal_position
    `);
    
    console.log('\n📋 Testimonials table structure:');
    tableInfo.rows.forEach(row => {
      console.log(`  - ${row.column_name}: ${row.data_type} ${row.is_nullable === 'NO' ? '(required)' : '(optional)'}`);
    });
    
  } catch (error) {
    console.error('❌ Testimonials setup failed:', error.message);
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
  console.log('🚀 Starting WebAssist Testimonials Setup\n');
  
  checkEnvironmentVariables();
  await setupTestimonials();
  
  console.log('\n🎉 Testimonials setup complete!');
  console.log('\nNext steps:');
  console.log('1. Create testimonials components');
  console.log('2. Add testimonials API endpoint');
  console.log('3. Add testimonials section to homepage');
}

main().catch(console.error);