import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack workspace root to this project so module resolution
  // (e.g. Tailwind) doesn't get confused by stray lockfiles in parent dirs.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
