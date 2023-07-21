/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    env: {
        NEXT_RAPID_API_KEY: process.env.NEXT_RAPID_API_KEY,
      },
}

module.exports = nextConfig