import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'group',
      name: 'visionMission',
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: 'Vision, Mission & Values' },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Because Every Child Deserves A System That Works',
        },
        {
          name: 'mission',
          type: 'textarea',
          defaultValue:
            'Working with existing education systems across Africa, we provide needs-based and evidence-grounded education equity and quality improvement interventions, based on the principles of sustainability and scalability.',
        },
        {
          name: 'vision',
          type: 'textarea',
          defaultValue: 'An Africa where every learner thrives through quality, equitable and relevant education.',
        },
        {
          name: 'brandPromise',
          type: 'textarea',
          defaultValue:
            "Africa's systems reform partner, co-creating scalable solutions that turn policy into belonging.",
        },
      ],
    },
    {
      type: 'array',
      name: 'missionBullets',
      minRows: 1,
      defaultValue: [
        { text: 'Partnering with governments to strengthen existing systems, not replace them' },
        { text: 'Reaching 199,856 teachers across Uganda through system-led CPD' },
        { text: 'Building sustainable, locally owned education reform' },
      ],
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      type: 'array',
      name: 'visionBullets',
      minRows: 1,
      defaultValue: [
        { text: 'An Africa where every learner thrives through quality, equitable and relevant education' },
        { text: 'Reigniting the intrinsic motivation of teachers, learners and officials' },
        { text: 'Scaling proven solutions from Uganda across East Africa' },
      ],
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      type: 'array',
      name: 'valuesBullets',
      minRows: 1,
      defaultValue: [
        { text: "Co-Creation: we don't have all the answers upfront" },
        { text: 'Ubuntu: personal wellbeing is tied to collective wellbeing' },
        { text: 'Accountability: transparent to all our stakeholders' },
      ],
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      type: 'group',
      name: 'strategicPriorities',
      label: "Where We're Headed (2026-2031 Strategic Plan)",
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: '2026-2031 Strategic Plan' },
        { name: 'title', type: 'text', defaultValue: "Where We're Headed" },
        {
          name: 'intro',
          type: 'textarea',
          defaultValue:
            'Our new strategic direction positions Ed Impact Africa Foundation as a thought leader in education equity and quality, starting with Uganda and East Africa, over the next five years.',
        },
      ],
    },
    {
      type: 'array',
      name: 'strategicPriorityItems',
      minRows: 1,
      defaultValue: [
        {
          title: 'Research & Evidence',
          text: 'Deepen our evidence base and insight production, so that our data informs policy design and establishes us as a credible, cited voice on education systems reform.',
        },
        {
          title: 'Localisation & Social Entrepreneurship',
          text: 'Fully localise into a legally registered, financially independent Ugandan NGO with diversified domestic revenue, and build a sustainable social enterprise offering paid teacher and leadership training.',
        },
      ],
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea', required: true },
      ],
    },
  ],
}
