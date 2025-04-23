import { withNetlify } from "@netlify/next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // if you are not using the image optimization
  },
};

export default withNetlify(nextConfig);
