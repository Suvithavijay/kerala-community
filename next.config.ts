import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export settings for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  basePath: '/kerala-community',
  assetPrefix: '/kerala-community',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
