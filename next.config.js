/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tina-psychologist.icu'],
    unoptimized: process.env.NODE_ENV === 'development'
  }
};

module.exports = nextConfig;
