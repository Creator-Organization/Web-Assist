export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600"></div>
        
        {/* Loading text */}
        <h2 className="text-xl font-semibold text-gray-700">Loading WebAssist</h2>
        <p className="mt-2 text-gray-500">Setting up your experience...</p>
      </div>
    </div>
  );
}