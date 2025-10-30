// src/components/ui/LoadingSpinner.tsx

import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: 'primary' | 'white' | 'gray';
}

export function LoadingSpinner({ 
  size = 'md', 
  className,
  color = 'primary'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'text-blue-600',
    white: 'text-white',
    gray: 'text-gray-600',
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg
        className={cn(
          "animate-spin",
          sizeClasses[size],
          colorClasses[color]
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}

// Skeleton loading component
interface SkeletonProps {
  className?: string;
  lines?: number;
}

export function Skeleton({ className, lines = 1 }: SkeletonProps) {
  return (
    <div className={cn("animate-pulse", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "bg-gray-300 dark:bg-gray-600 rounded",
            i === lines - 1 && lines > 1 ? "w-3/4" : "w-full",
            lines > 1 ? "h-4 mb-2" : "h-4"
          )}
        />
      ))}
    </div>
  );
}

// Page loading component
export function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <h2 className="mt-4 text-xl font-semibold text-gray-700">Loading creatorit</h2>
        <p className="mt-2 text-gray-500">Setting up your experience...</p>
      </div>
    </div>
  );
}