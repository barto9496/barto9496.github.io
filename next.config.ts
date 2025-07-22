import type { NextConfig } from "next";

/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV == "production" ? "production" : "dev";
const nextConfig: NextConfig = {
  basePath: isProd == "production" ? "/personal-portfolio" : "",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // <-- Add this line
  },
};

export default nextConfig;
