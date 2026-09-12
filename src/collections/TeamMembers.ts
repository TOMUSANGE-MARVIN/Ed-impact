import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'category', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'executive',
      options: [
        { label: 'Executive Team', value: 'executive' },
        { label: 'Board of Directors', value: 'board' },
        { label: 'Senior Leadership Team', value: 'senior-leadership' },
      ],
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'linkedinUrl',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first',
      },
    },
    {
      name: 'featuredOnHome',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this person in the homepage executive team preview',
      },
    },
  ],
}
