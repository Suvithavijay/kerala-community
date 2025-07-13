import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export settings for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/kerala-community' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kerala-community' : '',
};

export default nextConfig;
