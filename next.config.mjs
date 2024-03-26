// /** @type {import('next').NextConfig} */
// const nextConfig = {};

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
    //   NEXT_PUBLIC_API_URL: "https://YOUR_URL",
      NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST
    },
    async headers() {
      return [
        {
          source: '/with-locale',
          headers: [
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload'
            },
          ],
        },
        {
          source: '/with-locale',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
          ],
        },
        {
          source: '/with-locale',
          headers: [
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin'
            },
          ],
        },
      ]
    }
  
  }
  
  export default nextConfig;
  //   module.exports = nextConfig
