/** @type {import('next').NextConfig} */
// NEXT_DIST_DIR lets a verification build write somewhere other than .next, so running
// `next build` never prunes the chunks a live `next dev` server is serving. Unset in
// normal use and on Vercel, where it falls back to .next.
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
}
export default nextConfig
