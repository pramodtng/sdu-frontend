/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    appDir: true,
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: ['res.cloudinary.com', 'img.freepik.com'],
    path: '/_next/image',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
  },
}

module.exports = nextConfig
