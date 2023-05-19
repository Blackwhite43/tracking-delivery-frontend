/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: "http://vps.airlab.id:3000"
    // URL: "http://localhost:3000"
  }
}

module.exports = nextConfig