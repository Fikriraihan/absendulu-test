/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/signin",
        destination: "/",
        has: [
          {
            type: "cookie",
            key: "jwt",
          },
        ],
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
