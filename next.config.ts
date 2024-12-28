import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/personal-portfolio",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
