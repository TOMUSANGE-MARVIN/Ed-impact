import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'array',
      name: 'heroSlides',
      label: 'Hero Slider',
      minRows: 1,
      fields: [
        { name: 'subtitle', type: 'text', required: true },
        { name: 'headingBeforeAccent', type: 'text', admin: { description: 'Text before the highlighted word, e.g. "Turning Policy Into"' } },
        { name: 'headingAccent', type: 'text', admin: { description: 'The highlighted word, e.g. "Belonging"' } },
        { name: 'headingAfterAccent', type: 'text', defaultValue: '.', admin: { description: 'Text/punctuation after the highlighted word' } },
        { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
      ],
      defaultValue: [
        {
          subtitle: "Africa's Systems Reform Partner",
          headingBeforeAccent: 'Strengthening Education Systems, Building',
          headingAccent: 'Belonging',
          headingAfterAccent: '.',
        },
        {
          subtitle: 'Co-Creating Scalable Solutions',
          headingBeforeAccent: "Better Learning Outcomes For Every Child's",
          headingAccent: 'Future',
          headingAfterAccent: '.',
        },
        {
          subtitle: '199,856 Teachers. 5.9M Learners.',
          headingBeforeAccent: 'Education System Strengthening Across',
          headingAccent: 'Africa',
          headingAfterAccent: '.',
        },
        {
          subtitle: 'Successor To STIR Education Uganda',
          headingBeforeAccent: 'Restoring Teacher Motivation And Joy In',
          headingAccent: 'Teaching',
          headingAfterAccent: '.',
        },
      ],
    },
    {
      name: 'heroCtaPrimaryLabel',
      type: 'text',
      defaultValue: 'Discover Our Work',
    },
    {
      name: 'heroCtaSecondaryLabel',
      type: 'text',
      defaultValue: 'Invest In Systemic Change',
    },
    {
      type: 'group',
      name: 'modelSection',
      label: 'Our Model Section (Interventions)',
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: 'How We Create Change' },
        { name: 'title', type: 'text', defaultValue: 'Our Model: Four Interventions' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'A child cannot love learning without a teacher who loves teaching. We build the capacity of teachers, school leaders and officials together, so motivation and quality take root and stay embedded in the system.',
        },
      ],
    },
    {
      type: 'group',
      name: 'ubuntuSection',
      label: 'Ubuntu / About Section',
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: 'The Ubuntu Philosophy' },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'The well-being of a child is tied to the strength of their community',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Ubuntu means "I am because we are." We act with compassion, respect and collective responsibility, knowing that a child\'s wellbeing is deeply connected to the wellbeing of their teacher, school and community.',
        },
        { name: 'valueOneTitle', type: 'text', defaultValue: 'Co-Creation' },
        {
          name: 'valueOneText',
          type: 'textarea',
          defaultValue:
            "We don't have all the answers upfront. We design solutions with educators, communities and learners.",
        },
        { name: 'valueTwoTitle', type: 'text', defaultValue: 'Shared Purpose' },
        {
          name: 'valueTwoText',
          type: 'textarea',
          defaultValue:
            'United by one commitment: making education relevant, equitable and high quality for every African child.',
        },
      ],
    },
    {
      type: 'group',
      name: 'audienceSection',
      label: 'Partner Audience Selector',
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: 'Audience Value Propositions' },
        { name: 'title', type: 'text', defaultValue: 'Partner With Us, However You Show Up' },
        { name: 'introTitle', type: 'text', defaultValue: 'Because Every Partner Plays A Different Role.' },
        {
          name: 'governmentsText',
          type: 'textarea',
          defaultValue:
            'We strengthen what already exists, aligning with your national policies to ensure scalable, sustainable educational development.',
        },
        {
          name: 'fundersText',
          type: 'textarea',
          defaultValue:
            'Your investment translates into measurable, scalable reform, generating a high return on social impact.',
        },
        {
          name: 'communitiesText',
          type: 'textarea',
          defaultValue:
            'Your voice shapes the solution, ensuring our programs respect the principle of Ubuntu and reflect local realities.',
        },
      ],
    },
    {
      type: 'group',
      name: 'ctaSection',
      label: 'Two-Column CTA Section',
      fields: [
        { name: 'careersLabel', type: 'text', defaultValue: 'Careers, internships & volunteering' },
        { name: 'careersTitle', type: 'text', defaultValue: 'Want to join our team?' },
        { name: 'partnerLabel', type: 'text', defaultValue: 'Governments, funders & communities' },
        { name: 'partnerTitle', type: 'text', defaultValue: 'Ready to partner with us?' },
      ],
    },
  ],
}
