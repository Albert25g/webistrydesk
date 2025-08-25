import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'quintagroup.com',
        port: '',
        pathname: '/services/service-images/**',
      },
    ],
  },
};

export default nextConfig;
