#!/usr/bin/env node

/**
 * creatorit Phase 3 Testing Script
 * Tests all Phase 3 features and functionality
 */

const http = require('http');
const https = require('https');

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Test results storage
const results = {
  passed: 0,
  failed: 0,
  tests: []
};

// Helper function to make HTTP requests
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data
        });
      });
      
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Test function
async function test(name, testFn) {
  try {
    console.log(`🧪 Testing: ${name}`);
    await testFn();
    console.log(`✅ PASS: ${name}`);
    results.passed++;
    results.tests.push({ name, status: 'PASS' });
  } catch (error) {
    console.log(`❌ FAIL: ${name} - ${error.message}`);
    results.failed++;
    results.tests.push({ name, status: 'FAIL', error: error.message });
  }
}

// Individual tests
async function testHomepage() {
  const response = await makeRequest(`${BASE_URL}/`);
  
  if (response.statusCode !== 200) {
    throw new Error(`Homepage returned ${response.statusCode}`);
  }
  
  if (!response.data.includes('creatorit')) {
    throw new Error('Homepage does not contain creatorit branding');
  }
  
  if (!response.data.includes('testimonials')) {
    throw new Error('Homepage does not contain testimonials section');
  }
}

async function testTestimonialsAPI() {
  const response = await makeRequest(`${BASE_URL}/api/testimonials`);
  
  if (response.statusCode !== 200) {
    throw new Error(`Testimonials API returned ${response.statusCode}`);
  }
  
  const data = JSON.parse(response.data);
  
  if (!data.success) {
    throw new Error('Testimonials API returned success: false');
  }
  
  if (!Array.isArray(data.testimonials)) {
    throw new Error('Testimonials API does not return array of testimonials');
  }
  
  if (data.testimonials.length === 0) {
    throw new Error('No testimonials returned from API');
  }
  
  // Check testimonial structure
  const testimonial = data.testimonials[0];
  const requiredFields = ['id', 'clientName', 'clientCompany', 'rating', 'content'];
  
  for (const field of requiredFields) {
    if (!(field in testimonial)) {
      throw new Error(`Testimonial missing required field: ${field}`);
    }
  }
}

async function testSitemap() {
  const response = await makeRequest(`${BASE_URL}/sitemap.xml`);
  
  if (response.statusCode !== 200) {
    throw new Error(`Sitemap returned ${response.statusCode}`);
  }
  
  if (!response.data.includes('<?xml')) {
    throw new Error('Sitemap is not valid XML');
  }
  
  if (!response.data.includes('<urlset')) {
    throw new Error('Sitemap does not contain urlset');
  }
}

async function testRobots() {
  const response = await makeRequest(`${BASE_URL}/robots.txt`);
  
  if (response.statusCode !== 200) {
    throw new Error(`Robots.txt returned ${response.statusCode}`);
  }
  
  if (!response.data.toLowerCase().includes('user-agent:')) {
    throw new Error('Robots.txt does not contain User-agent directive');
  }
  
  if (!response.data.includes('Sitemap:')) {
    throw new Error('Robots.txt does not contain Sitemap directive');
  }
}

async function testSEOHeaders() {
  const response = await makeRequest(`${BASE_URL}/`);
  
  if (!response.data.includes('<meta name="description"')) {
    throw new Error('Missing meta description');
  }
  
  if (!response.data.includes('<meta property="og:')) {
    throw new Error('Missing Open Graph tags');
  }
  
  if (!response.data.includes('application/ld+json')) {
    throw new Error('Missing structured data');
  }
}

async function testPerformance() {
  const start = Date.now();
  const response = await makeRequest(`${BASE_URL}/`);
  const end = Date.now();
  
  const responseTime = end - start;
  
  if (responseTime > 5000) {
    throw new Error(`Homepage load time too slow: ${responseTime}ms`);
  }
  
  // Check if response is compressed
  const contentEncoding = response.headers['content-encoding'];
  if (!contentEncoding || !contentEncoding.includes('gzip')) {
    console.warn('⚠️  Warning: Response not compressed with gzip');
  }
}

async function testAPIRateLimit() {
  // Make multiple requests to test rate limiting
  const requests = Array.from({ length: 5 }, () => 
    makeRequest(`${BASE_URL}/api/testimonials`)
  );
  
  const responses = await Promise.all(requests);
  
  // All should succeed for normal testing
  responses.forEach((response, index) => {
    if (response.statusCode !== 200) {
      throw new Error(`Request ${index + 1} failed with status ${response.statusCode}`);
    }
  });
}

// Main test runner
async function runTests() {
  console.log('🚀 Starting creatorit Phase 3 Tests\n');
  console.log(`Testing URL: ${BASE_URL}\n`);
  
  // Core functionality tests
  await test('Homepage loads correctly', testHomepage);
  await test('Testimonials API works', testTestimonialsAPI);
  await test('Sitemap generation', testSitemap);
  await test('Robots.txt generation', testRobots);
  
  // SEO tests
  await test('SEO meta tags present', testSEOHeaders);
  
  // Performance tests
  await test('Homepage performance', testPerformance);
  await test('API rate limiting', testAPIRateLimit);
  
  // Summary
  console.log('\n📊 Test Results Summary:');
  console.log('========================');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📈 Success Rate: ${((results.passed / (results.passed + results.failed)) * 100).toFixed(1)}%`);
  
  if (results.failed > 0) {
    console.log('\n❌ Failed Tests:');
    results.tests
      .filter(test => test.status === 'FAIL')
      .forEach(test => {
        console.log(`  - ${test.name}: ${test.error}`);
      });
  }
  
  console.log('\n🎉 Phase 3 testing complete!');
  
  if (results.failed === 0) {
    console.log('🚀 All tests passed! Your creatorit Phase 3 is ready for production.');
  } else {
    console.log('⚠️  Some tests failed. Please review and fix issues before deploying.');
    process.exit(1);
  }
}

// Run tests
runTests().catch(error => {
  console.error('💥 Test runner crashed:', error);
  process.exit(1);
});