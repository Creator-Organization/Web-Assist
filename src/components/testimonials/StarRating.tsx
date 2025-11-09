// src/components/testimonials/StarRating.tsx

'use client';

import { StarRatingProps } from '@/types/testimonials';
import { cn } from '@/lib/utils';

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showText = false,
}) => {
  // Clamp rating between 0 and maxRating
  const clampedRating = Math.max(0, Math.min(rating, maxRating));
  
  // Size classes
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  
  // Generate stars
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= clampedRating;
    const isPartial = !isFilled && starNumber - 1 < clampedRating && clampedRating < starNumber;
    
    return (
      <div key={starNumber} className="relative">
        {/* Background star (empty) */}
        <svg
          className={cn(
            sizeClasses[size],
            "text-gray-300 dark:text-gray-600"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.158c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.286 3.956c.3.921-.755 1.688-1.54 1.118L10 13.879l-3.368 2.446c-.785.57-1.84-.197-1.54-1.118l1.286-3.956a1 1 0 00-.364-1.118L2.646 9.383c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.95-.69l1.286-3.956z" />
        </svg>
        
        {/* Filled star overlay */}
        {(isFilled || isPartial) && (
          <svg
            className={cn(
              sizeClasses[size],
              "absolute top-0 left-0 text-yellow-400",
              isPartial && "overflow-hidden"
            )}
            style={
              isPartial 
                ? { 
                    clipPath: `inset(0 ${100 - ((clampedRating - (starNumber - 1)) * 100)}% 0 0)` 
                  }
                : undefined
            }
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.158c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.286 3.956c.3.921-.755 1.688-1.54 1.118L10 13.879l-3.368 2.446c-.785.57-1.84-.197-1.54-1.118l1.286-3.956a1 1 0 00-.364-1.118L2.646 9.383c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.95-.69l1.286-3.956z" />
          </svg>
        )}
      </div>
    );
  });
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center space-x-1">
        {stars}
      </div>
      
      {showText && (
        <span className={cn(
          textSizeClasses[size],
          "ml-2 text-gray-600 dark:text-gray-400"
        )}>
          {clampedRating.toFixed(1)} out of {maxRating}
        </span>
      )}
    </div>
  );
};

// Export a simple stars-only version for inline use
export const SimpleStars: React.FC<{ rating: number; className?: string }> = ({ 
  rating, 
  className 
}) => (
  <div className={cn("flex items-center", className)}>
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={cn(
          "w-4 h-4",
          i < rating ? "text-yellow-400" : "text-gray-300"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.158c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.286 3.956c.3.921-.755 1.688-1.54 1.118L10 13.879l-3.368 2.446c-.785.57-1.84-.197-1.54-1.118l1.286-3.956a1 1 0 00-.364-1.118L2.646 9.383c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.95-.69l1.286-3.956z" />
      </svg>
    ))}
  </div>
);

export default StarRating;