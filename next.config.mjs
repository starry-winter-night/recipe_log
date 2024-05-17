/** @type {import('next').NextConfig} */

// next.config.mjs

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/ui/pages/:path*',
      },
    ];
  },
};

export default nextConfig;
