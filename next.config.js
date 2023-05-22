/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
