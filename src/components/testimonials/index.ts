// src/components/testimonials/index.ts

export { default as TestimonialsSection } from './TestimonialsSection';
export { default as TestimonialCard, CompactTestimonialCard } from './TestimonialCard';
export { default as StarRating, SimpleStars } from './StarRating';


// Re-export types for convenience
export type {
  Testimonial,
  TestimonialCardProps,
  StarRatingProps,
  TestimonialsSectionProps,
  TestimonialCarouselProps,
  TestimonialsApiResponse,
} from '@/types/testimonials';