/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config options ...
  
  async redirects() {
    return [
      {
        source: '/badge',
        destination: '/',
        permanent: true,
      },
      {
        source: '/badge/',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig