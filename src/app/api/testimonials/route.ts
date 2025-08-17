// src/app/api/testimonials/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getTestimonials, getFeaturedTestimonials, getTestimonialsCount, getAverageRating } from '@/lib/testimonials';
import { TestimonialsApiResponse } from '@/types/testimonials';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parse query parameters
    const featuredOnly = searchParams.get('featured') === 'true';
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0;
    const includeStats = searchParams.get('stats') === 'true';
    
    // Validate limit parameter
    if (limit && (limit < 1 || limit > 50)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Limit must be between 1 and 50' 
        },
        { status: 400 }
      );
    }
    
    // Fetch testimonials based on parameters
    let testimonials;
    if (featuredOnly) {
      testimonials = await getFeaturedTestimonials(limit || 3);
    } else {
      testimonials = await getTestimonials({ limit, offset });
    }
    
    // Prepare response
    const response: TestimonialsApiResponse & { 
      offset?: number;
      limit?: number;
      averageRating?: number;
    } = {
      testimonials,
      total: testimonials.length,
      featured: testimonials.filter(t => t.featured).length,
      success: true,
    };
    
    // Add pagination info if limit was specified
    if (limit) {
      response.limit = limit;
      response.offset = offset;
    }
    
    // Add stats if requested
    if (includeStats) {
      const [totalCount, featuredCount, averageRating] = await Promise.all([
        getTestimonialsCount(false),
        getTestimonialsCount(true),
        getAverageRating(),
      ]);
      
      response.total = totalCount;
      response.featured = featuredCount;
      response.averageRating = Math.round(averageRating * 10) / 10; // Round to 1 decimal
    }
    
    // Set cache headers for better performance
    const headers = new Headers();
    headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600'); // 5 min cache, 10 min stale
    
    return NextResponse.json(response, { 
      status: 200,
      headers 
    });
    
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch testimonials',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}