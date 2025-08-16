import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 px-4">
      <div className="w-full max-w-md text-center">
        {/* 404 visual */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-200">404</h1>
          <div className="relative -mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-2xl font-bold text-transparent">
              Page Not Found
            </div>
          </div>
        </div>
        
        {/* Content */}
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Looks like you've wandered off
        </h2>
        
        <p className="mb-8 text-gray-600">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        {/* Action buttons */}
        <div className="space-y-3">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <Home className="h-4 w-4" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
        
        {/* Help section */}
        <div className="mt-12 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-2 font-semibold text-gray-900">Need help?</h3>
          <p className="text-sm text-gray-600">
            If you believe this is an error, please{' '}
            <Link
              href="/#contact"
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              contact us
            </Link>{' '}
            and let us know what you were looking for.
          </p>
        </div>
      </div>
    </div>
  );
}