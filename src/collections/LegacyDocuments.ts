import type { CollectionConfig } from 'payload'

export const LegacyDocuments: CollectionConfig = {
  slug: 'legacy-documents',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'source', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Short summary shown on the documents page.',
      },
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'source',
      type: 'text',
      admin: {
        description: 'e.g. "STiR Education, 2018"',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
