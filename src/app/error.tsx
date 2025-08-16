'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 px-4">
      <div className="w-full max-w-md text-center">
        {/* Error icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <AlertCircle className="h-8 w-8 text-red-600" />
        </div>
        
        {/* Error content */}
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          Oops! Something went wrong
        </h1>
        
        <p className="mb-6 text-gray-600">
          We encountered an unexpected error. This has been logged and we'll look into it.
        </p>
        
        {/* Action buttons */}
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Try again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Go to homepage
          </button>
        </div>
        
        {/* Error details for development */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Technical details
            </summary>
            <pre className="mt-2 overflow-auto rounded bg-gray-100 p-3 text-xs text-red-600">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}