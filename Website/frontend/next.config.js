
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [
      "example.com",
      "www.dropbox.com",
      "dl.dropboxusercontent.com",
    ],
  },
};

module.exports = nextConfig;
