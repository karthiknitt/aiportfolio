import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    mcpServer: true, // Enable built-in MCP server
  },
  reactCompiler: true,
};

export default nextConfig;
