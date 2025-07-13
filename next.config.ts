import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/kerala-community',
  assetPrefix: '/kerala-community',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/kerala-community',
  },
};

export default nextConfig;
