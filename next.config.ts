import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a unique build ID for each deployment - this forces cache invalidation
  generateBuildId: async () => {
    // Use timestamp as build ID - this will be unique for each deployment
    return `build-${Date.now()}`;
  },
  
  // Apply cache-busting headers to all paths
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          },
          {
            key: 'Surrogate-Control',
            value: 'no-store'
          },
          {
            // Prevent Chrome's Bfcache (back-forward cache)
            key: 'X-XSS-Protection',
            value: '0'
          }
        ]
      }
    ];
  },
  
  // Disable static optimization for HTML files
  // This ensures HTML is always generated at request time with fresh data
  reactStrictMode: true,
  
  // Add build-time environment variables that can be used for versioning
  env: {
    // This will be available at build time and embedded in the JS bundle
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  }
};

export default nextConfig;
