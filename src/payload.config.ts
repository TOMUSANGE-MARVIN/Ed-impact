import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { TeamMembers } from './collections/TeamMembers'
import { Programs } from './collections/Programs'
import { Interventions } from './collections/Interventions'
import { Testimonials } from './collections/Testimonials'
import { Posts } from './collections/Posts'
import { Faqs } from './collections/Faqs'
import { Reports } from './collections/Reports'
import { LegacyDocuments } from './collections/LegacyDocuments'
import { Partners } from './collections/Partners'
import { SiteSettings } from './globals/SiteSettings'
import { HomePage } from './globals/HomePage'
import { AboutPage } from './globals/AboutPage'
import { CareersPage } from './globals/CareersPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Left unset in production (no NEXT_PUBLIC_SERVER_URL configured), Payload
  // returns relative media/API URLs, which resolve correctly behind any
  // domain or reverse proxy. A hardcoded localhost fallback here would be
  // baked into the production build and break every media URL.
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- Ed Impact Africa Foundation CMS',
    },
  },
  collections: [Users, Media, TeamMembers, Programs, Interventions, Testimonials, Posts, Faqs, Reports, LegacyDocuments, Partners],
  globals: [SiteSettings, HomePage, AboutPage, CareersPage],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
    // Each Vercel serverless invocation can open its own connection; a
    // large per-instance pool quickly exhausts Atlas's free-tier 500
    // connection cap under concurrent traffic. Keep each instance's pool
    // small - Payload/Mongoose still reuses the connection across requests
    // within the same warm instance.
    connectOptions: {
      maxPoolSize: 3,
      minPoolSize: 0,
      maxIdleTimeMS: 30_000,
    },
  }),
  plugins: [
    // Vercel's serverless functions have no persistent local disk, so
    // uploaded media is stored in Vercel Blob instead of /public/media.
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  sharp,
})
