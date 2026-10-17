/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // The résumé is a PDF compiled from Ken's Overleaf project. Older links (/Resume.pdf, which an earlier
  // deploy sent to /resume with a cached 308, and the retired /resume page) land on it.
  async redirects() {
    return [
      { source: "/resume", destination: "/Kenneth-Atchon-Resume.pdf", permanent: false },
      { source: "/Resume.pdf", destination: "/Kenneth-Atchon-Resume.pdf", permanent: false },
    ]
  },
}

export default nextConfig
