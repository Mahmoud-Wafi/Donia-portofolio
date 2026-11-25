// Static export, so the site can be hosted on GitHub Pages (or any static host).
// For a project page at https://<user>.github.io/<repo>/ set NEXT_PUBLIC_BASE_PATH=/<repo> when building.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
