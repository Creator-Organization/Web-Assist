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

  // Pastel color variants matching Nextwebi design
  const colorVariants = [
    { bg: 'bg-pink-50', quote: 'text-pink-600' }, // Light pink/red
    { bg: 'bg-blue-50', quote: 'text-blue-600' }, // Light blue
    { bg: 'bg-green-50', quote: 'text-green-600' }, // Light green
  ];

  // Get color based on index or use a default
  const colorIndex = Math.abs((clientName?.charCodeAt(0) || 0) % 3);
  const colors = colorVariants[colorIndex];

  return (
    <div
      className={cn(
        "relative rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300",
        colors.bg,
        className
      )}
    >
      {/* Large Quote icon */}
      <div className="mb-6">
        <svg
          className={cn("w-16 h-16 font-bold", colors.quote)}
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      {/* Content */}
      <div className="mb-6">
        <p className="text-gray-800 leading-relaxed text-base">
          {content}
        </p>
      </div>

      {/* Client info */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 mb-1">
          {clientCompany && (
            <span className="font-bold text-gray-900 text-lg">
              {clientCompany}
            </span>
          )}
        </div>
        <div className="text-gray-700">
          {clientName && (
            <span className="font-semibold">{clientName}</span>
          )}
          {clientTitle && (
            <span className="text-gray-600"> - {clientTitle}</span>
          )}
        </div>
      </div>
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