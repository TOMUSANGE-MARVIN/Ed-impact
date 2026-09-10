import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'Ed Impact Africa Foundation',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: "Because every African child deserves an education system that unlocks their potential.",
    },
    {
      type: 'group',
      name: 'contact',
      fields: [
        { name: 'email', type: 'text', defaultValue: 'info@edimpactafricafoundation.org' },
        { name: 'partnershipsEmail', type: 'text', defaultValue: 'partnerships@edimpactafricafoundation.org' },
        { name: 'phoneOne', type: 'text', defaultValue: '+256 781 064 668' },
        { name: 'phoneTwo', type: 'text', defaultValue: '+256 782 891 322' },
        { name: 'location', type: 'text', defaultValue: 'Kampala, Uganda' },
        { name: 'mapQuery', type: 'text', defaultValue: 'Kampala, Uganda' },
      ],
    },
    {
      type: 'group',
      name: 'social',
      fields: [
        { name: 'facebook', type: 'text', defaultValue: 'https://www.facebook.com' },
        { name: 'twitterX', type: 'text', defaultValue: 'https://x.com' },
        { name: 'linkedin', type: 'text', defaultValue: 'https://www.linkedin.com' },
        { name: 'youtube', type: 'text', defaultValue: 'https://www.youtube.com' },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'logoLight',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'White/reverse logo used on dark backgrounds (footer)',
      },
    },
    {
      type: 'group',
      name: 'stats',
      label: 'Headline Impact Stats',
      fields: [
        { name: 'teachersReached', type: 'text', defaultValue: '199,856' },
        { name: 'learnersReached', type: 'text', defaultValue: '5,892,477' },
        { name: 'literacyProgramme', type: 'text', defaultValue: '73.1%' },
        { name: 'literacyControl', type: 'text', defaultValue: '57.0%' },
        { name: 'numeracyProgramme', type: 'text', defaultValue: '66.7%' },
        { name: 'numeracyControl', type: 'text', defaultValue: '54.1%' },
        { name: 'socialReturn', type: 'text', defaultValue: '£3.12 for every £1 invested' },
      ],
    },
  ],
}
