/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      images:{
        domains: [ "revistamonet.globo.com"]
      
      },
}

module.exports = nextConfig
