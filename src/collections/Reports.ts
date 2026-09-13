import type { CollectionConfig } from 'payload'

export const Reports: CollectionConfig = {
  slug: 'reports',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedDate', 'location'],
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
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short summary shown on the report card.',
      },
    },
    {
      name: 'body',
      type: 'textarea',
      admin: {
        description: 'Full report detail page content. Separate paragraphs with a blank line.',
      },
    },
    {
      name: 'highlights',
      type: 'array',
      admin: {
        description: 'Key findings checklist shown on the detail page.',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Uganda',
    },
    {
      name: 'tags',
      type: 'text',
      admin: {
        description: 'Comma-separated tags, e.g. "Evidence, Systems Strengthening"',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
