/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})

module.exports = nextConfig
