import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'group',
      name: 'background',
      label: 'Background (section 1)',
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: 'Our Background' },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'From STiR Education Uganda To Ed Impact Africa Foundation',
        },
        {
          name: 'intro',
          label: 'Opening paragraph (always visible)',
          type: 'textarea',
          defaultValue:
            "Ed Impact Africa Foundation is a local entity that has been mothered by STiR Education. STiR Education is an INGO (headquartered in the UK) that supports education systems to reignite intrinsic motivation (IM) so that every child, teacher, and official is motivated to learn and improve. Its vision is 'a world where teachers love teaching and children love learning'. STiR Education works towards achieving this through the provision of a system-led teacher Continuous Professional Development program hinged on the principles of intrinsic motivation. Since its inception in 2012, STiR Education has had presence/program operations in Uganda, India, Indonesia and Ethiopia.",
        },
      ],
    },
    {
      type: 'array',
      name: 'backgroundParagraphs',
      label: 'Background — remaining paragraphs (revealed by Read More)',
      defaultValue: [
        {
          text: 'As part of the localisation strategic pivot, STiR Education is localising all its country operations to become local, autonomous entities that are grounded in local realities. This is in response to a gradual strategic pivot that has overtime shifted the decision making power from the UK Office to the local offices, as well as a sectoral shift in favour of localisation and shifting the power to local civil society players. As a result, the India office has successfully localised and transitioned into the Centre for Intrinsic Motivation (CIM), and currently the Uganda and Indonesia entities are in the process of mutating to local entities, with full governance and executive functions brought to the current country offices. The Uganda country office has started on its localisation journey by incorporating and rebranding into Ed Impact Africa Foundation and should be an independent local entity by August 2026.',
        },
        {
          text: 'STiR Education started its first project in Uganda in 2014 and is currently running a system led teacher continuous professional development program in all local governments in the secondary program and about a half of the local governments in the primary program. It has a staff pool of 24 team members who maintain sector relationships from the national to district level.',
        },
        {
          text: 'This strategic plan is therefore coming in at a very critical period of transition, both in the governance and programmatic angles. During this strategic period, there will be a transition from being a branch/country office of the global entity to being an autonomous, local entity with its own brand, board of directors, independent leadership team etc. There will also be a transition from program based work to project based work, and a very strong leaning to the social enterprise model of programming. This is meant to increase the impact and organisational sustainability of the new entity — Ed Impact Africa Foundation — and hence make it a thought leader in the sector across Africa, starting with Uganda and East Africa.',
        },
      ],
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    {
      type: 'group',
      name: 'whoWeAre',
      label: 'Who We Are (section 2)',
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: 'Who We Are' },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'A Pan-African Organisation For Education Equity And Quality',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Ed Impact Africa Foundation is a Pan-African civil society organisation (CSO) focused on education equity and quality. We are headquartered in Uganda and are building on the legacy and achievements of STiR Education Uganda as we deepen programming in Uganda while expanding into new geographies across the continent.',
        },
        {
          name: 'inheritsIntro',
          type: 'text',
          defaultValue: 'As a successor organisation, Ed Impact Africa Foundation inherits:',
        },
      ],
    },
    {
      type: 'array',
      name: 'whoWeAreInherits',
      label: 'Who We Are — what we inherit',
      defaultValue: [
        { text: 'A proven theory of change and education delivery model.' },
        {
          text: 'Strong relationships with education stakeholders and local government structures in Uganda.',
        },
        { text: 'The institutional capability developed through years of implementation.' },
      ],
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    {
      type: 'group',
      name: 'whatWeDo',
      label: 'What We Do (section 4)',
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: 'What We Do' },
        { name: 'title', type: 'text', defaultValue: 'Our Model, Reach And Programme Anchors' },
        {
          name: 'intro',
          type: 'textarea',
          defaultValue:
            'Ed Impact is inheriting the model, program reach in Uganda, the program anchors and theory of change for STiR Education.',
        },
        {
          name: 'explanation',
          label: 'Theory of change explanation',
          type: 'textarea',
          defaultValue:
            'Central to our programming is a child who loves learning and is prepared to thrive in the world after school. But we know that you cannot have a child who loves learning without having a teacher who loves teaching and is intrinsically motivated to teach. We therefore deliver a program that builds the capacity of teachers, hinged on the principles of Intrinsic Motivation — Relationships, Autonomy, Mastery and Purpose. But we also know that a teacher cannot love teaching unless the right conditions have been set at school level by the school leaders. We therefore work through the school leaders to build the capacity of the teachers, and ensure that they are setting the right environment and role modelling the right behaviours for teachers to love teaching. The school leaders also have a direct relationship with district officials — District Education Officers, Inspectors of Schools and others. The relationship that the school leaders have with the district officials will directly impact how the school leaders relate with the teachers, and hence how the teachers relate with the learners. The same applies to the relationship between the district officials and the national education leaders.',
        },
        {
          name: 'anchorsIntro',
          type: 'textarea',
          defaultValue:
            'In our programming therefore, we design, deliver and monitor the program through our five programme anchors:',
        },
      ],
    },
    {
      type: 'array',
      name: 'programAnchors',
      label: 'Programme Anchors',
      defaultValue: [
        {
          title: 'Teacher Intrinsic Motivation',
          text: 'Nurturing a sense of purpose, passion and pride in teaching that drives teachers to inspire and transform learners every day.',
          icon: 'icon-support-heart',
        },
        {
          title: 'Teacher Professional Development Training',
          text: 'Equipping teachers with relevant knowledge, skills and classroom strategies through continuous, practical and high-quality training.',
          icon: 'icon-education',
        },
        {
          title: 'System Led / Strengthening Programming Model',
          text: 'Shifting from direct implementation to collaborative, system-led approaches that build local capacity, strengthen institutions and create lasting change.',
          icon: 'icon-support',
        },
        {
          title: 'Impact Sustainability',
          text: 'Embedding ownership, capacity and systems that ensure results endure and continue to improve long after program support ends.',
          icon: 'icon-heart',
        },
        {
          title: 'National Scale',
          text: 'Expanding proven approaches and evidence-based solutions to reach every classroom, teacher and learner across the country.',
          icon: 'icon-award',
        },
      ],
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea', required: true },
        {
          name: 'icon',
          type: 'select',
          defaultValue: 'icon-education',
          options: [
            'icon-education',
            'icon-support',
            'icon-support-heart',
            'icon-documents',
            'icon-award',
            'icon-heart',
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'visionMission',
      fields: [
        { name: 'subtitle', type: 'text', defaultValue: 'Vision, Mission & Values' },
        {
          name: 'title',
          label: 'Reason/Goal (headline)',
          type: 'text',
          defaultValue: 'Because Education Is The Greatest Socio-Economic Equaliser',
        },
        {
          name: 'reasonGoal',
          label: 'Reason/Goal (supporting text)',
          type: 'textarea',
          defaultValue:
            "As Nelson Mandela is quoted to have said: 'It is through education that the daughter of a peasant can become a doctor, that the son of a mineworker can become the head of the mine; that a child of farm workers can become the president of a great nation'.",
        },
        {
          name: 'mission',
          type: 'textarea',
          defaultValue:
            'Working with existing education systems across Africa, we provide needs based and evidence grounded education equity and quality improvement interventions, based on the principles of sustainability and scalability.',
        },
        {
          name: 'vision',
          type: 'textarea',
          defaultValue: 'Quality, Equitable and relevant education for all children in Africa.',
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
      name: 'coreValues',
      label: 'Core Values',
      minRows: 1,
      defaultValue: [
        {
          title: 'Co-Creation',
          text: 'We acknowledge that we do not have all the answers upfront, but promise to work with everyone that may contribute to making education more impactful for the African child.',
        },
        {
          title: 'Ubuntu',
          text: 'We will promote compassion, respect, dignity, and collective responsibility over individualism, asserting that personal well-being is tied to group wellbeing.',
        },
        {
          title: 'Purpose',
          text: 'We are all united by a shared purpose of making education more relevant, equitable and of high quality for the good of the African child.',
        },
        {
          title: 'Impact',
          text: 'We will promote evidence-based practices that have measurable outcomes on the education system of African nations.',
        },
        {
          title: 'Accountability',
          text: 'We will ensure that we account to all stakeholders, both internal and external for impact and organisational strengthening and sustainability.',
        },
      ],
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea', required: true },
      ],
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
        {
          title: 'Education Equity & Quality Cross-Cutting Issues',
          text: 'Ensure inclusive access to quality professional development so that no teacher, school or official is excluded due to income, geography or institutional capacity; strengthen gender responsive pedagogy and female leadership; and integrate sustainable EdTech and innovation across diverse contexts.',
        },
        {
          title: 'Institutional Development & Sectoral Thought Leadership',
          text: 'Build a strong, credible and sustainable institution that shapes education policy and practice in Uganda through evidence, influence and effective communication — recognised nationally and across East Africa as a go-to voice on education quality, equity and systems performance.',
        },
      ],
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea', required: true },
      ],
    },
  ],
}
