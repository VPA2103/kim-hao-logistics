module.exports = {
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
  },
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
    appDir: true,
  }
}
