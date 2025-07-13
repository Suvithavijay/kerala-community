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
  // Set environment variables for the build
  env: {
    NEXT_PUBLIC_BASE_PATH: '/kerala-community',
  },
};

export default nextConfig;
