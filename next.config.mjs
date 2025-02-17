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
      {
        protocol: "https",
        hostname: "admin.laptop-rental.com.au",
        pathname: "/uploads/**/*",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/laptop-rental",
        destination: "/laptop-hire",
        permanent: true,
      },
      {
        source: "/laptop-rental/:slug*",
        destination: "/laptop-hire/:slug*",
        permanent: true,
      },
      {
        source: "/contactus",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/eventrental",
        destination: "/event-rental",
        permanent: true,
      },
      {
        source: "/eventrental/:slug*",
        destination: "/event-rental/:slug*",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/location",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
