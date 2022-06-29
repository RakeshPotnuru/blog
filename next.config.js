/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io', 'res.cloudinary.com']
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
};
