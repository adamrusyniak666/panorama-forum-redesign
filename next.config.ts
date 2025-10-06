import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/panorama-forum-redesign',
  assetPrefix: '/panorama-forum-redesign/',
};

export default nextConfig;
