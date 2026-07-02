import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/business-directory/get-listed",
        destination: "/get-listed",
        permanent: true
      },
      {
        source: "/blog",
        destination: "/resources",
        permanent: true
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
