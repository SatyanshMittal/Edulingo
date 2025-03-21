import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'pbs.twimg.com'],
  },
};

export default nextConfig;
