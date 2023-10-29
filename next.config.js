const pwa = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

const withPWA = pwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: !isProd,
  buildExcludes: [/middleware-manifest.json$/]
})

const nextConfig = withPWA({
  images: {
    domains: [
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
      process.env.NEXT_PUBLIC_WORDPRESS_IMAGES
    ]
  }
})
module.exports = nextConfig
