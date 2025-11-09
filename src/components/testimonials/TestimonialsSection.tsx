// src/components/testimonials/TestimonialsSection.tsx

'use client';

import { useState, useEffect, useRef } from 'react';
import { TestimonialsSectionProps, Testimonial } from '@/types/testimonials';
import TestimonialCard from './TestimonialCard';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { trackSectionView, trackTestimonialView } from '@/lib/analytics';
import { useIntersectionObserver } from '@/hooks/usePerformance';

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials: propTestimonials,
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it - hear from the businesses we've helped transform their digital presence.",
  maxDisplay = 6,
  showFeaturedOnly = false,
}) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(propTestimonials || []);
  const [loading, setLoading] = useState(!propTestimonials);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track section visibility
  const { hasIntersected } = useIntersectionObserver(sectionRef);

  // Track section view when it becomes visible
  useEffect(() => {
    if (hasIntersected) {
      trackSectionView('testimonials');
    }
  }, [hasIntersected]);

  // Fetch testimonials if not provided via props
  useEffect(() => {
    if (!propTestimonials) {
      fetchTestimonials();
    }
  }, [propTestimonials, showFeaturedOnly, maxDisplay]);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        limit: maxDisplay.toString(),
        stats: 'true',
      });
      
      if (showFeaturedOnly) {
        params.append('featured', 'true');
      }
      
      const response = await fetch(`/api/testimonials?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch testimonials');
      }
      
      setTestimonials(data.testimonials);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setError(err instanceof Error ? err.message : 'Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  };

  // Display testimonials (limit to maxDisplay)
  const displayTestimonials = testimonials.slice(0, maxDisplay);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our customers say
          </h2>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 animate-pulse"
              >
                <div className="space-y-4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
                  <div className="flex space-x-1 mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    ))}
                  </div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600 dark:text-red-400 font-medium">
                {error}
              </p>
              <button
                onClick={fetchTestimonials}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </motion.div>
        )}

        {/* Testimonials Grid */}
        {!loading && !error && displayTestimonials.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {displayTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className={cn(
                  // Featured testimonials get special positioning
                  testimonial.featured && index === 0 && displayTestimonials.length > 3 && "md:col-span-2 lg:col-span-1"
                )}
                onClick={() => trackTestimonialView(testimonial.id)}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && !error && displayTestimonials.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-gray-600 dark:text-gray-400">
                No testimonials available at the moment.
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {!loading && !error && displayTestimonials.length > 0 && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how we can help transform your digital presence.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;