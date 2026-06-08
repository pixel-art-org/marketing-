/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/pixelart',
  trailingSlash: true,
};

module.exports = nextConfig;
