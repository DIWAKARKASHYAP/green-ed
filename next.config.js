/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
          {hostname: "cleantechnica.com"}
        ],
      },
}

module.exports = nextConfig
