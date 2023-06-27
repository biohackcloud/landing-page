/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.PAGES_BASE_URL || "",
  assetPrefix: (process.env.PAGES_BASE_URL || "") + "/",
};

module.exports = nextConfig;
