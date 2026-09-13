import type { CollectionConfig } from 'payload'

export const Programs: CollectionConfig = {
  slug: 'programs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'order'],
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
      name: 'tag',
      type: 'text',
      required: true,
      admin: {
        description: 'Short label shown on the card, e.g. "Secondary", "Evidence"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short summary shown on the program card.',
      },
    },
    {
      name: 'body',
      type: 'textarea',
      admin: {
        description: 'Full intervention detail page content. Separate paragraphs with a blank line.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'percent',
      type: 'number',
      defaultValue: 50,
      admin: {
        description: 'Progress bar percentage (0-100)',
      },
    },
    {
      name: 'statOneLabel',
      type: 'text',
      defaultValue: 'Coverage',
    },
    {
      name: 'statOneValue',
      type: 'text',
      defaultValue: '',
    },
    {
      name: 'statTwoLabel',
      type: 'text',
      defaultValue: 'Reach',
    },
    {
      name: 'statTwoValue',
      type: 'text',
      defaultValue: '',
    },
    {
      name: 'statThreeLabel',
      type: 'text',
      defaultValue: '',
    },
    {
      name: 'statThreeValue',
      type: 'text',
      defaultValue: '',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
