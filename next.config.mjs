/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
      unoptimized: true,
  },
  basePath: '/about-me',
  assetPrefix: '/about-me',
};

export default nextConfig;
