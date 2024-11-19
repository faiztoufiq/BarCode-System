const nextConfig = {
  reactStrictMode: true,
  env: {
    CONNECTION: process.env.CONNECTION,
    JWT_SECRET: process.env.JWT_SECRET,
    NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
