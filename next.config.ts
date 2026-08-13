import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root — a stray lockfile in ~/ otherwise wins the inference.
  turbopack: { root: import.meta.dirname },
  // Emits a fully static `out/` directory — what Firebase Hosting serves.
  output: "export",
  // No image optimisation server exists on static hosting.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
