/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;  
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.vercel.store",
      },
    ],
  },
};

module.exports = nextConfig;
