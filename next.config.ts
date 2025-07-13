import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/kerala-community',
  assetPrefix: '/kerala-community',
  images: { unoptimized: true },
  publicRuntimeConfig: {
    basePath: '/kerala-community',
  },
};

export default nextConfig;
