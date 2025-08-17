// src/components/testimonials/TestimonialCard.tsx

'use client';

import { TestimonialCardProps } from '@/types/testimonials';
import { SimpleStars } from './StarRating';
import { cn } from '@/lib/utils';

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  className 
}) => {
  const {
    clientName,
    clientCompany,
    clientTitle,
    rating,
    content,
    projectType,
    featured
  } = testimonial;

  return (
    <div
      className={cn(
        "relative bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 group",
        featured && "ring-2 ring-blue-500/20 shadow-md",
        className
      )}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            ⭐ Featured
          </div>
        </div>
      )}

      {/* Quote icon */}
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-blue-500/20 group-hover:text-blue-500/30 transition-colors"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      {/* Content */}
      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          "{content}"
        </p>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <SimpleStars rating={rating} className="justify-start" />
      </div>

      {/* Client info */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
            {clientName}
          </h4>
          {projectType && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {projectType}
            </span>
          )}
        </div>
        
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {clientTitle && (
            <span className="font-medium">{clientTitle}</span>
          )}
          {clientTitle && <span className="mx-1">·</span>}
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {clientCompany}
          </span>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

// Compact version for smaller spaces
export const CompactTestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  className 
}) => {
  const { clientName, clientCompany, rating, content } = testimonial;

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <SimpleStars rating={rating} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 line-clamp-3">
            "{content}"
          </p>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            <span className="font-medium">{clientName}</span>
            <span className="mx-1">·</span>
            <span>{clientCompany}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;