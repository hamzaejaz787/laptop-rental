/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      // {
      //   protocol: "http",
      //   hostname: "20.70.178.42",
      //   port: "1337",
      //   pathname: "/uploads/**/*",
      // },
      {
        protocol: "https",
        hostname: "admin.laptop-rental.com.au",
        pathname: "/uploads/**/*",
      },
    ],
  },
};
export default nextConfig;
