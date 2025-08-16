/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback = {
            fs: false, 
            module: false,   
            path: false  
          };
        }
        return config;
      },
  };
  
  //console.log("Next.js Config Loaded:", nextConfig);
  
  module.exports = nextConfig;
  