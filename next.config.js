/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: "http://vps.airlab.id:3000",
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
