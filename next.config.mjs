/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for debugging
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"], // Ensure mongoose is installed
  },
  images: {
    domains: ["lh3.googleusercontent.com"], // Allowed image sources
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true, // Enable top-level await
    };
    return config;
  },
};

export default nextConfig;
