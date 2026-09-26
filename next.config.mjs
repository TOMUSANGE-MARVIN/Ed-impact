import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // Payload uploads are optimized on the fly via src/lib/image.js.
    localPatterns: [{ pathname: '/api/media/file/**', search: '' }],
    // A replaced upload can keep its filename, so don't hold optimized copies
    // much longer than a day.
    minimumCacheTTL: 60 * 60 * 24,
  },
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
