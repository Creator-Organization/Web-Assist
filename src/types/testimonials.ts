// src/types/testimonials.ts

export interface Testimonial {
  id: number;
  clientName: string;
  clientCompany: string;
  clientTitle?: string;
  rating: number; // 1-5 stars
  content: string;
  projectType?: string;
  featured: boolean;
  displayOrder: number;
  createdAt: string;
  isActive: boolean;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
  maxDisplay?: number;
  showFeaturedOnly?: boolean;
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

// API Response types
export interface TestimonialsApiResponse {
  testimonials: Testimonial[];
  total: number;
  featured: number;
  success: boolean;
}

export interface TestimonialApiError {
  success: false;
  error: string;
  code?: string;
}

// Database row type (snake_case from database)
export interface TestimonialRow {
  id: number;
  client_name: string;
  client_company: string;
  client_title?: string;
  rating: number;
  content: string;
  project_type?: string;
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}

// Utility type for creating new testimonials
export type CreateTestimonialData = Omit<Testimonial, 'id' | 'createdAt' | 'displayOrder'>;

// Utility type for updating testimonials
export type UpdateTestimonialData = Partial<Omit<Testimonial, 'id' | 'createdAt'>>;