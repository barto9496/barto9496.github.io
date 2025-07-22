import type { NextConfig } from "next";

/**
 * @type {import('next').NextConfig}
 */

const nextConfig: NextConfig = {
  basePath: "",             // 🔄 Remove the subpath
  output: "export",         // ✅ Static export
  reactStrictMode: true,
  images: {
    unoptimized: true,      // ✅ Required for static export
  },
};

export default nextConfig;