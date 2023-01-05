// eslint-disable-next-line @typescript-eslint/no-var-requires

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: !isProd,
  skipWaiting: true,
  runtimeCaching
})

const nextConfig = withPWA({
  // next config
})
module.exports = nextConfig
