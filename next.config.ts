import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // basePath: "/next-js-all-countries",
  reactStrictMode: true,
  images: {
    domains: ["localhost", "flagcdn.com", "upload.wikimedia.org"],
    unoptimized: true,
  },
};

export default nextConfig;
