import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'default',
    path: '/kerala-community',
  },
  assetPrefix: "/kerala-community",
  basePath: "/kerala-community",
};

export default nextConfig;
