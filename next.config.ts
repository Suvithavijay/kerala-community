import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only apply static export settings for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    basePath: '/kerala-community',
    assetPrefix: '/kerala-community',
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
