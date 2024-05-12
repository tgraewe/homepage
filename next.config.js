const {
  withHydrationOverlay,
} = require("@builder.io/react-hydration-overlay/next");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withHydrationOverlay({
  reactStrictMode: true
})(nextConfig);
