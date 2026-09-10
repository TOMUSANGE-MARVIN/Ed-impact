import type { CollectionConfig } from 'payload'

export const Interventions: CollectionConfig = {
  slug: 'interventions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'icon', 'order'],
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
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      defaultValue: 'icon-education',
      options: [
        { label: 'Education', value: 'icon-education' },
        { label: 'Support', value: 'icon-support' },
        { label: 'Support Heart', value: 'icon-support-heart' },
        { label: 'Documents', value: 'icon-documents' },
        { label: 'Award', value: 'icon-award' },
        { label: 'Heart', value: 'icon-heart' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
