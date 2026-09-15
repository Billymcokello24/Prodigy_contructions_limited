/** @type {import('next').NextConfig} */
import path from "node:path";

const nextConfig = {
  // Fix "Next.js inferred your workspace root" warning when the project is
  // nested inside another repo that has its own package-lock.json.
  outputFileTracingRoot: path.join(import.meta.dirname ?? process.cwd()),
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;