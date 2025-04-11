// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scanwelllogistics.vn',
        port: '',
        pathname: '/public/filemanager/userfiles/**',
      },
      {
        protocol: 'https',
        hostname: 'amg-vietnam.com',
        port: '',
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        '@/*': ['./src/*']
      }
    },
    reactRoot: true,
    concurrentFeatures: true
  },
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
    pagesBufferLength: 5
  }
};

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

export default nextConfig;
