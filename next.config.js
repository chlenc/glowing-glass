const withPWA = require('next-pwa');

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Lampwork Glowing Glass',
    siteDescription: '👋🏻 I am Kateryna\n🔥 Glass jewellery artist\n🚀 Worldwide shipping',
    siteKeywords: 'glass, fruits, fun',
    siteUrl: '',//todo
    siteImagePreviewUrl: '/images/main.jpg',
    twitterHandle: '@'
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
})
