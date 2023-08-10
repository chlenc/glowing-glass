
const withPWA = require('next-pwa');

const settings = {
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Lampwork Glowing Glass',
    siteDescription: '👋🏻 I am Kateryna\n🔥 Glass jewellery artist\n🚀 Worldwide shipping',
    siteKeywords: 'glass, fruits, fun',
    siteUrl: 'www.google.com',//todo
    siteImagePreviewUrl: '/images/main.jpg',
    twitterHandle: '@compolabs'
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
};

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);

// module.exports = withPWA({
//   future: { webpack5: true },
//   pwa: {
//     disable: process.env.NODE_ENV === 'development',
//   },
//   env: {
//     siteTitle: 'Lampwork Glowing Glass',
//     siteDescription: '👋🏻 I am Kateryna\n🔥 Glass jewellery artist\n🚀 Worldwide shipping',
//     siteKeywords: 'glass, fruits, fun',
//     siteUrl: 'www.google.com',//todo
//     siteImagePreviewUrl: '/images/main.jpg',
//     twitterHandle: '@compolabs'
//   },
//   images: {
//     domains: ['cdn.shopify.com'],
//   },
// })
