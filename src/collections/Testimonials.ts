import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Role/title rather than a personal name, e.g. "District Education Officer"',
      },
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      admin: {
        description: 'Where they are based, e.g. "Local Government, Uganda"',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
