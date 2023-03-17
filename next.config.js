/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
  /*
  redirects: async () => {
    return [
      {
        source: "/WorkExperience",
        destination: "/construction",
        permanent: false,
      },
    ];
  },
  */
};

module.exports = nextConfig;
