/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    URL: "http://vps.airlab.id:3000"
    // URL: "http://localhost:3000"
  },
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "id",
    localeSubpaths: {
      en: "en",
      id: "id",
    },
  },
};

module.exports = nextConfig;
