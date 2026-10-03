import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old project URLs now live under /work, so stale links keep working.
    return [
      { source: "/projects/:slug", destination: "/work/:slug", permanent: false },
    ];
  },
};

export default nextConfig;
