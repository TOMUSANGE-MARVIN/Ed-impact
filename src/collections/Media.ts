import path from 'path'
import { fileURLToPath } from 'url'
import type { CollectionConfig } from 'payload'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../public/media'),
    // Every upload (team photos, program/blog images) gets re-encoded to WebP
    // so pages that pull images from the CMS aren't serving raw multi-hundred-KB PNGs.
    formatOptions: {
      format: 'webp',
      options: { quality: 80 },
    },
  },
}
