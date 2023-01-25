/** @type {import('next').NextConfig} */

require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  
}
module.exports = {
  // Other Next.js configuration options
  experimental: {
    reactRefresh: false
  }
}

const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
  },
});

module.exports = nextConfig
