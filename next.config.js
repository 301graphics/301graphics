/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: '/contact', destination: '/quote', permanent: true },
      { source: '/portfolio', destination: '/work', permanent: true },
      { source: '/fleet', destination: '/commercial', permanent: true },
    ]
  },
}
module.exports = nextConfig
