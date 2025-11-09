/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Type checking is handled by separate script
    ignoreBuildErrors: false,
  },
  eslint: {
    // Temporarily disable ESLint during builds for deployment
    ignoreDuringBuilds: true,
  },
  images: {
    // Optimize images
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  // Rate limiting will be handled at API level
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'creatorit.vercel.app'],
    },
  },
}

module.exports = nextConfig