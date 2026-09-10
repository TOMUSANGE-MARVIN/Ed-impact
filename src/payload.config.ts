import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { TeamMembers } from './collections/TeamMembers'
import { Programs } from './collections/Programs'
import { Interventions } from './collections/Interventions'
import { Testimonials } from './collections/Testimonials'
import { Posts } from './collections/Posts'
import { Faqs } from './collections/Faqs'
import { SiteSettings } from './globals/SiteSettings'
import { HomePage } from './globals/HomePage'
import { AboutPage } from './globals/AboutPage'
import { CareersPage } from './globals/CareersPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- Ed Impact Africa Foundation CMS',
    },
  },
  collections: [Users, Media, TeamMembers, Programs, Interventions, Testimonials, Posts, Faqs],
  globals: [SiteSettings, HomePage, AboutPage, CareersPage],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./ed-impact.db',
    },
  }),
  sharp,
})
