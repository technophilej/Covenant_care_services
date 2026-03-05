/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'qtrypzzcjebvfcihiynt.supabase.co',
      },
    ],
  },
  allowedDevOrigins: ['*.replit.dev', '*.repl.co', '*.kirk.replit.dev', 'localhost'],
}

module.exports = nextConfig
