import type { GlobalConfig } from 'payload'

export const CareersPage: GlobalConfig = {
  slug: 'careers-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'whyWorkTitle',
      type: 'text',
      defaultValue: 'Why Work With Us',
    },
    {
      name: 'whyWorkText',
      type: 'textarea',
      defaultValue:
        "At Ed Impact Africa Foundation, you'll work alongside governments, school leaders and teachers to strengthen education systems across Africa, reaching 199,856 teachers and 5,892,477 learners today, with more to come as we scale beyond Uganda.",
    },
    {
      type: 'array',
      name: 'reasons',
      minRows: 1,
      defaultValue: [
        { text: 'Meaningful impact at national scale' },
        { text: 'Work alongside governments, schools and communities' },
        { text: 'Grow with a pan-African organisation' },
        { text: 'A collaborative, Ubuntu-driven culture' },
      ],
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'openPositionsText',
      type: 'textarea',
      defaultValue:
        "We don't have any open positions right now. Check back soon, or send us your CV using the form and we'll reach out when a role matching your experience opens up.",
    },
    {
      name: 'internshipsText',
      type: 'textarea',
      defaultValue:
        "We welcome enquiries from early-career professionals and volunteers interested in education systems reform. Tell us about your interest in the form and we'll get in touch when an opportunity fits.",
    },
    {
      name: 'diversityText',
      type: 'textarea',
      defaultValue:
        'Guided by Ubuntu, we are committed to equal opportunity and inclusive hiring, building a team as diverse as the communities we serve.',
    },
  ],
}
