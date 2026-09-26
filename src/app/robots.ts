import type { MetadataRoute } from 'next'
import { SITE_URL, isIndexable } from '@/lib/seo'

// Read ALLOW_INDEXING at request time rather than freezing it into the build.
export const dynamic = 'force-dynamic'

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
