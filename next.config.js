module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scanwelllogistics.vn',
        port: '',
        pathname: '/public/filemanager/userfiles/**',
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
}
