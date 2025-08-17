#!/usr/bin/env node

/**
 * Fix WebAssist Testimonials Database Setup
 * This script fixes the testimonials table creation issue
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

async function fixTestimonials() {
  let client;
  
  try {
    client = await pool.connect();
    console.log('✅ Connected to database');
    
    // Read and execute the fix schema
    const schemaPath = path.join(__dirname, '..', 'database', 'fix-testimonials.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('🔧 Fixing testimonials table...');
    await client.query(schemaSql);
    
    console.log('✅ Testimonials table fixed successfully');
    
    // Test the setup
    console.log('🧪 Testing testimonials setup...');
    const testResult = await client.query('SELECT COUNT(*) FROM testimonials WHERE is_active = true');
    console.log(`✅ Active testimonials count: ${testResult.rows[0].count}`);
    
    // Show sample testimonials
    const sampleResult = await client.query(`
      SELECT client_name, client_company, rating, featured 
      FROM testimonials 
      WHERE is_active = true 
      ORDER BY featured DESC, display_order ASC
      LIMIT 3
    `);
    
    console.log('\n⭐ Sample testimonials:');
    sampleResult.rows.forEach((row, index) => {
      const stars = '★'.repeat(row.rating) + '☆'.repeat(5 - row.rating);
      const badge = row.featured ? ' 🌟' : '';
      console.log(`  ${index + 1}. ${row.client_name} - ${row.client_company} ${stars}${badge}`);
    });
    
  } catch (error) {
    console.error('❌ Fix testimonials failed:', error.message);
    process.exit(1);
  } finally {
    if (client) {
      client.release();
    }
    await pool.end();
  }
}

// Main execution
async function main() {
  console.log('🔧 Fixing WebAssist Testimonials Setup\n');
  
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL not found in environment variables');
    console.log('Please ensure .env.local exists with DATABASE_URL');
    process.exit(1);
  }
  
  await fixTestimonials();
  
  console.log('\n🎉 Testimonials fix complete!');
  console.log('\nNext steps:');
  console.log('1. npm run dev');
  console.log('2. Visit http://localhost:3000');
  console.log('3. Check testimonials section');
}

main().catch(console.error);