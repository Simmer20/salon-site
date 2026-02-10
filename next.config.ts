import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  // For better performance
  swcMinify: true,
  compress: true,
  // Enable React strict mode
  reactStrictMode: true,
}

module.exports = nextConfig