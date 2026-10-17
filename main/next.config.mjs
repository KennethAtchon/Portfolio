/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // The old static PDF résumé is replaced by the printable /resume page.
  async redirects() {
    return [{ source: "/Resume.pdf", destination: "/resume", permanent: true }]
  },
}

export default nextConfig
