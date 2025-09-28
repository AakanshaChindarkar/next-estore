/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "", // leave empty if default 443
        pathname: "/img/**", // allow all images under /img/
      },
      // You can add more patterns here
    ],
  },
};

export default nextConfig;
