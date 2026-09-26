import type { MetadataRoute } from 'next'
import { getPosts, getPrograms, getReports, getTeamMembers } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'

// Built from the CMS on each request, so new programmes, insights and reports
// appear without a redeploy (the build has no populated database).
export const dynamic = 'force-dynamic'

const staticRoutes: Array<[string, number, MetadataRoute.Sitemap[number]['changeFrequency']]> = [
  ['/', 1, 'weekly'],
  ['/our-work', 0.9, 'monthly'],
  ['/programmes', 0.9, 'monthly'],
  ['/impact', 0.9, 'monthly'],
  ['/data-evidence', 0.8, 'weekly'],
  ['/blogs', 0.8, 'weekly'],
  ['/reports-updates', 0.8, 'weekly'],
  ['/about-us', 0.8, 'monthly'],
  ['/partner-with-us', 0.8, 'monthly'],
  ['/social-enterprise', 0.7, 'monthly'],
  ['/leadership-board', 0.6, 'monthly'],
  ['/legacy-documents', 0.6, 'yearly'],
  ['/faq', 0.5, 'monthly'],
  ['/careers', 0.5, 'monthly'],
  ['/contact-us', 0.5, 'yearly'],
  ['/privacy-policy', 0.1, 'yearly'],
  ['/terms-conditions', 0.1, 'yearly'],
]

const lastModified = (doc: { updatedAt?: string }) => (doc.updatedAt ? new Date(doc.updatedAt) : undefined)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [programs, posts, reports, team] = await Promise.all([
    getPrograms(),
    getPosts(),
    getReports(),
    getTeamMembers(),
  ])

  return [
    ...staticRoutes.map(([path, priority, changeFrequency]) => ({
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      changeFrequency,
      priority,
    })),
    ...programs.map((p: any) => ({ url: `${SITE_URL}/programmes/${p.id}`, lastModified: lastModified(p), priority: 0.8 })),
    ...posts.map((p: any) => ({ url: `${SITE_URL}/insights/${p.id}`, lastModified: lastModified(p), priority: 0.7 })),
    ...reports.map((r: any) => ({ url: `${SITE_URL}/reports-updates/${r.id}`, lastModified: lastModified(r), priority: 0.7 })),
    ...team.map((m: any) => ({ url: `${SITE_URL}/leadership-board/${m.id}`, lastModified: lastModified(m), priority: 0.4 })),
  ]
}
