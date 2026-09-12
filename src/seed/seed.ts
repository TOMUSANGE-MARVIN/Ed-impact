import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from '../payload.config.js'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const publicImages = path.resolve(dirname, '../../public/assets/images')

const readFile = (relPath: string) => {
  const filePath = path.join(publicImages, relPath)
  const data = fs.readFileSync(filePath)
  const name = path.basename(filePath)
  const ext = path.extname(filePath).toLowerCase()
  const mimetype = ext === '.png' ? 'image/png' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'application/octet-stream'
  return { data, mimetype, name, size: data.length }
}

async function uploadMedia(payload: any, relPath: string, alt: string) {
  const file = readFile(relPath)
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: file.name } },
    limit: 1,
  })
  if (existing.docs.length) return existing.docs[0]
  return payload.create({
    collection: 'media',
    data: { alt },
    file,
  })
}

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding admin user...')
  const existingUsers = await payload.find({ collection: 'users', limit: 1 })
  if (!existingUsers.docs.length) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@edimpactafricafoundation.org',
        password: 'EdImpact2026!',
      },
    })
    console.log('Created admin user: admin@edimpactafricafoundation.org / EdImpact2026!')
  } else {
    console.log('Admin user already exists, skipping.')
  }

  console.log('Uploading media...')
  const logo = await uploadMedia(payload, 'logo.png', 'Ed Impact Africa Foundation logo')
  const logoLight = await uploadMedia(payload, 'logo-light.png', 'Ed Impact Africa Foundation logo (white)')

  const teamPhotos: Record<string, any> = {}
  for (const [key, file] of Object.entries({
    karema: 'team/one.png',
    birungi: 'team/two.png',
    otika: 'team/three.png',
    namukose: 'team/four.png',
    ezati: 'team/eight.png',
    mugenyi: 'team/nine.png',
    kibeddi: 'team/ten.png',
    lutimba: 'team/eleven.png',
    karyeija: 'team/twelve.png',
    muhwezi: 'team/thirteen.png',
    ngolobe: 'team/fourteen.png',
    placeholder: 'team/placeholder.png',
  })) {
    teamPhotos[key] = await uploadMedia(payload, file, `Photo of ${key}`)
  }

  const programImages: Record<string, any> = {}
  for (const [key, file] of Object.entries({
    secondary: 'cause/program-secondary.png',
    primary: 'cause/program-primary.png',
    evidence: 'cause/program-evidence.png',
    systems: 'cause/program-systems.png',
  })) {
    programImages[key] = await uploadMedia(payload, file, `${key} program photo`)
  }

  const postImages: Record<string, any> = {}
  for (const [key, file] of Object.entries({
    motivation: 'blog/insight-motivation.png',
    impact: 'blog/insight-evidence.png',
    localisation: 'blog/insight-localisation.png',
  })) {
    postImages[key] = await uploadMedia(payload, file, `${key} article image`)
  }

  console.log('Seeding Site Settings...')
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      siteName: 'Ed Impact Africa Foundation',
      tagline: 'Because every African child deserves an education system that unlocks their potential.',
      contact: {
        email: 'info@edimpactafricafoundation.org',
        partnershipsEmail: 'partnerships@edimpactafricafoundation.org',
        phoneOne: '+256 781 064 668',
        phoneTwo: '+256 782 891 322',
        location: 'Kampala, Uganda',
        mapQuery: 'Kampala, Uganda',
      },
      social: {
        facebook: 'https://www.facebook.com',
        twitterX: 'https://x.com',
        linkedin: 'https://www.linkedin.com',
        youtube: 'https://www.youtube.com',
      },
      logo: logo.id,
      logoLight: logoLight.id,
      stats: {
        teachersReached: '199,856',
        learnersReached: '5,892,477',
        literacyProgramme: '73.1%',
        literacyControl: '57.0%',
        numeracyProgramme: '66.7%',
        numeracyControl: '54.1%',
        socialReturn: '£3.12 for every £1 invested',
      },
    },
  })

  console.log('Seeding Home Page...')
  await payload.updateGlobal({
    slug: 'home-page',
    data: {
      heroSlides: [
        {
          subtitle: "Africa's Systems Reform Partner",
          headingBeforeAccent: 'Turning Policy Into',
          headingAccent: 'Belonging',
          headingAfterAccent: '.',
        },
        {
          subtitle: 'Co-Creating Scalable Solutions',
          headingBeforeAccent: 'Every Child Deserves A',
          headingAccent: 'Future',
          headingAfterAccent: '.',
        },
        {
          subtitle: '199,856 Teachers. 5.9M Learners.',
          headingBeforeAccent: 'Strengthening',
          headingAccent: 'Systems',
          headingAfterAccent: ' Across Africa.',
        },
        {
          subtitle: 'Successor To STIR Education Uganda',
          headingBeforeAccent: 'Reigniting The Love Of',
          headingAccent: 'Teaching',
          headingAfterAccent: '.',
        },
      ],
      heroCtaPrimaryLabel: 'Discover Our Work',
      heroCtaSecondaryLabel: 'Invest In Systemic Change',
      modelSection: {
        subtitle: 'How We Create Change',
        title: 'Our Model: Four Interventions',
        description:
          'A child cannot love learning without a teacher who loves teaching. We build the capacity of teachers, school leaders and officials together, so motivation and quality take root and stay embedded in the system.',
      },
      ubuntuSection: {
        subtitle: 'The Ubuntu Philosophy',
        title: 'The well-being of a child is tied to the strength of their community',
        description:
          'Ubuntu means "I am because we are." We act with compassion, respect and collective responsibility, knowing that a child\'s wellbeing is deeply connected to the wellbeing of their teacher, school and community.',
        valueOneTitle: 'Co-Creation',
        valueOneText:
          "We don't have all the answers upfront. We design solutions with educators, communities and learners.",
        valueTwoTitle: 'Shared Purpose',
        valueTwoText:
          'United by one commitment: making education relevant, equitable and high quality for every African child.',
      },
      audienceSection: {
        subtitle: 'Audience Value Propositions',
        title: 'Partner With Us, However You Show Up',
        introTitle: 'Because Every Partner Plays A Different Role.',
        governmentsText:
          'We strengthen what already exists, aligning with your national policies to ensure scalable, sustainable educational development.',
        fundersText:
          'Your investment translates into measurable, scalable reform, generating a high return on social impact.',
        communitiesText:
          'Your voice shapes the solution, ensuring our programs respect the principle of Ubuntu and reflect local realities.',
      },
      ctaSection: {
        careersLabel: 'Careers, internships & volunteering',
        careersTitle: 'Want to join our team?',
        partnerLabel: 'Governments, funders & communities',
        partnerTitle: 'Ready to partner with us?',
      },
    },
  })

  console.log('Seeding About Page...')
  await payload.updateGlobal({
    slug: 'about-page',
    data: {
      background: {
        subtitle: 'Our Background',
        title: 'From STiR Education Uganda To Ed Impact Africa Foundation',
        intro:
          "Ed Impact Africa Foundation is a local entity that has been mothered by STiR Education. STiR Education is an INGO (headquartered in the UK) that supports education systems to reignite intrinsic motivation (IM) so that every child, teacher, and official is motivated to learn and improve. Its vision is 'a world where teachers love teaching and children love learning'. STiR Education works towards achieving this through the provision of a system-led teacher Continuous Professional Development program hinged on the principles of intrinsic motivation. Since its inception in 2012, STiR Education has had presence/program operations in Uganda, India, Indonesia and Ethiopia.",
      },
      backgroundParagraphs: [
        {
          text: 'As part of the localisation strategic pivot, STiR Education is localising all its country operations to become local, autonomous entities that are grounded in local realities. This is in response to a gradual strategic pivot that has overtime shifted the decision making power from the UK Office to the local offices, as well as a sectoral shift in favour of localisation and shifting the power to local civil society players. As a result, the India office has successfully localised and transitioned into the Centre for Intrinsic Motivation (CIM), and currently the Uganda and Indonesia entities are in the process of mutating to local entities, with full governance and executive functions brought to the current country offices. The Uganda country office has started on its localisation journey by incorporating and rebranding into Ed Impact Africa Foundation and should be an independent local entity by August 2026.',
        },
        {
          text: 'STiR Education started its first project in Uganda in 2014 and is currently running a system led teacher continuous professional development program in all local governments in the secondary program and about a half of the local governments in the primary program. It has a staff pool of 24 team members who maintain sector relationships from the national to district level.',
        },
        {
          text: 'This strategic plan is therefore coming in at a very critical period of transition, both in the governance and programmatic angles. During this strategic period, there will be a transition from being a branch/country office of the global entity to being an autonomous, local entity with its own brand, board of directors, independent leadership team etc. There will also be a transition from program based work to project based work, and a very strong leaning to the social enterprise model of programming. This is meant to increase the impact and organisational sustainability of the new entity, Ed Impact Africa Foundation, and hence make it a thought leader in the sector across Africa, starting with Uganda and East Africa.',
        },
      ],
      whoWeAre: {
        subtitle: 'Who We Are',
        title: 'A Pan-African Organisation For Education Equity And Quality',
        description:
          'Ed Impact Africa Foundation is a Pan-African civil society organisation (CSO) focused on education equity and quality. We are headquartered in Uganda and are building on the legacy and achievements of STiR Education Uganda as we deepen programming in Uganda while expanding into new geographies across the continent.',
        inheritsIntro: 'As a successor organisation, Ed Impact Africa Foundation inherits:',
      },
      whoWeAreInherits: [
        { text: 'A proven theory of change and education delivery model.' },
        {
          text: 'Strong relationships with education stakeholders and local government structures in Uganda.',
        },
        { text: 'The institutional capability developed through years of implementation.' },
      ],
      whatWeDo: {
        subtitle: 'What We Do',
        title: 'Our Model, Reach And Programme Anchors',
        intro:
          'Ed Impact is inheriting the model, program reach in Uganda, the program anchors and theory of change for STiR Education.',
        explanation:
          'Central to our programming is a child who loves learning and is prepared to thrive in the world after school. But we know that you cannot have a child who loves learning without having a teacher who loves teaching and is intrinsically motivated to teach. We therefore deliver a program that builds the capacity of teachers, hinged on the principles of Intrinsic Motivation: Relationships, Autonomy, Mastery and Purpose. But we also know that a teacher cannot love teaching unless the right conditions have been set at school level by the school leaders. We therefore work through the school leaders to build the capacity of the teachers, and ensure that they are setting the right environment and role modelling the right behaviours for teachers to love teaching. The school leaders also have a direct relationship with district officials, District Education Officers, Inspectors of Schools and others. The relationship that the school leaders have with the district officials will directly impact how the school leaders relate with the teachers, and hence how the teachers relate with the learners. The same applies to the relationship between the district officials and the national education leaders.',
        anchorsIntro:
          'In our programming therefore, we design, deliver and monitor the program through our five programme anchors:',
      },
      programAnchors: [
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
      visionMission: {
        subtitle: 'Vision, Mission & Values',
        title: 'Because Education Is The Greatest Socio-Economic Equaliser',
        reasonGoal:
          "As Nelson Mandela is quoted to have said: 'It is through education that the daughter of a peasant can become a doctor, that the son of a mineworker can become the head of the mine; that a child of farm workers can become the president of a great nation'.",
        mission:
          'Working with existing education systems across Africa, we provide needs based and evidence grounded education equity and quality improvement interventions, based on the principles of sustainability and scalability.',
        vision: 'Quality, Equitable and relevant education for all children in Africa.',
        brandPromise:
          "Africa's systems reform partner, co-creating scalable solutions that turn policy into belonging.",
      },
      coreValues: [
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
      strategicPriorities: {
        subtitle: '2026-2031 Strategic Plan',
        title: "Where We're Headed",
        intro:
          'Our new strategic direction positions Ed Impact Africa Foundation as a thought leader in education equity and quality, starting with Uganda and East Africa, over the next five years.',
      },
      strategicPriorityItems: [
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
          text: 'Build a strong, credible and sustainable institution that shapes education policy and practice in Uganda through evidence, influence and effective communication, recognised nationally and across East Africa as a go-to voice on education quality, equity and systems performance.',
        },
      ],
    },
  })

  console.log('Seeding Careers Page...')
  await payload.updateGlobal({
    slug: 'careers-page',
    data: {
      whyWorkTitle: 'Why Work With Us',
      whyWorkText:
        "At Ed Impact Africa Foundation, you'll work alongside governments, school leaders and teachers to strengthen education systems across Africa, reaching 199,856 teachers and 5,892,477 learners today, with more to come as we scale beyond Uganda.",
      reasons: [
        { text: 'Meaningful impact at national scale' },
        { text: 'Work alongside governments, schools and communities' },
        { text: 'Grow with a pan-African organisation' },
        { text: 'A collaborative, Ubuntu-driven culture' },
      ],
      openPositionsText:
        "We don't have any open positions right now. Check back soon, or send us your CV using the form and we'll reach out when a role matching your experience opens up.",
      internshipsText:
        "We welcome enquiries from early-career professionals and volunteers interested in education systems reform. Tell us about your interest in the form and we'll get in touch when an opportunity fits.",
      diversityText:
        'Guided by Ubuntu, we are committed to equal opportunity and inclusive hiring, building a team as diverse as the communities we serve.',
    },
  })

  console.log('Seeding Team Members...')
  const teamMembers = [
    { name: 'Modern Karema Musiimenta', role: 'Chief Executive Officer', category: 'executive', photo: teamPhotos.karema, order: 1, featuredOnHome: true },
    { name: 'Wilber Birungi', role: 'Chief Finance Officer', category: 'executive', photo: teamPhotos.birungi, order: 2, featuredOnHome: true },
    { name: 'Brenda Akite Otika', role: 'Chief Program Officer', category: 'executive', photo: teamPhotos.otika, order: 3, featuredOnHome: true },
    { name: 'Janat Namukose', role: 'Chief People Officer', category: 'executive', photo: teamPhotos.namukose, order: 4, featuredOnHome: true },
    { name: 'Prof. Betty Ezati', role: 'Board Chairperson', category: 'board', photo: teamPhotos.ezati, order: 5, featuredOnHome: false },
    { name: 'Dr. Cleophas Mugenyi', role: 'Board Member', category: 'board', photo: teamPhotos.mugenyi, order: 6, featuredOnHome: false },
    { name: 'CPA Fredrick Kibeddi', role: 'Board Member, Finance & Risk', category: 'board', photo: teamPhotos.kibeddi, order: 7, featuredOnHome: false },
    { name: 'CPA Charles Lutimba', role: 'Board Member, Finance & Risk', category: 'board', photo: teamPhotos.lutimba, order: 8, featuredOnHome: false },
    { name: 'Prof. Gerald Karyeija', role: 'Committee Chairperson, Governance, Strategy & HR', category: 'board', photo: teamPhotos.karyeija, order: 9, featuredOnHome: false },
    { name: 'Dr. Martha Muhwezi', role: 'Committee Chairperson, Program Quality Assurance', category: 'board', photo: teamPhotos.muhwezi, order: 10, featuredOnHome: false },
    { name: 'Patrick Ngolobe', role: 'Member, Governance, Strategy & HR Committee', category: 'board', photo: teamPhotos.ngolobe, order: 11, featuredOnHome: false },
    { name: 'Jane Ssebuyungo', role: 'Head, Amplification Services / Pan African Scale', category: 'senior-leadership', photo: teamPhotos.placeholder, order: 12, featuredOnHome: false },
    { name: 'Peace Lorna Precious Oola', role: 'Head, Social Enterprise & Experimentation', category: 'senior-leadership', photo: teamPhotos.placeholder, order: 13, featuredOnHome: false },
    { name: 'Deric Watiti', role: 'Head, Monitoring, Evaluation, Accountability, Research & Learning', category: 'senior-leadership', photo: teamPhotos.placeholder, order: 14, featuredOnHome: false },
    { name: 'Brenda Ayoo', role: 'Senior Manager, Design & Program Readiness', category: 'senior-leadership', photo: teamPhotos.placeholder, order: 15, featuredOnHome: false },
    { name: 'Ephraim Wanyama', role: 'Senior Manager, Program Delivery', category: 'senior-leadership', photo: teamPhotos.placeholder, order: 16, featuredOnHome: false },
  ] as const
  for (const member of teamMembers) {
    const existing = await payload.find({ collection: 'team-members', where: { name: { equals: member.name } }, limit: 1 })
    if (!existing.docs.length) {
      await payload.create({ collection: 'team-members', data: { ...member, photo: member.photo.id } })
    }
  }

  console.log('Seeding Programs...')
  const programs = [
    {
      title: 'National Secondary CPD',
      tag: 'Secondary',
      description: 'Delivered with the Association of Secondary School Headteachers of Uganda, reaching secondary schools nationwide.',
      image: programImages.secondary,
      percent: 100,
      statOneLabel: 'Coverage',
      statOneValue: '155/176 LGs',
      statTwoLabel: 'Reach',
      statTwoValue: '199,856 teachers',
      order: 1,
    },
    {
      title: 'Primary Teacher Colleges',
      tag: 'Primary',
      description: 'Delivered through 22 of 23 Core Primary Teacher Colleges, with NAMDEO and UNISA strengthening classroom instruction.',
      image: programImages.primary,
      percent: 96,
      statOneLabel: 'Coverage',
      statOneValue: '22/23 PTCs',
      statTwoLabel: 'Reach',
      statTwoValue: '105 Local Governments',
      order: 2,
    },
    {
      title: 'Evidence & Policy Influence',
      tag: 'Evidence',
      description: 'Our 2025 impact evaluation shows measurably stronger learning outcomes in programme schools.',
      image: programImages.evidence,
      percent: 73,
      statOneLabel: 'Literacy',
      statOneValue: '73.1% programme',
      statTwoLabel: 'Comparison',
      statTwoValue: '57.0% control schools',
      order: 3,
    },
    {
      title: 'System Strengthening',
      tag: 'Systems',
      description: 'Building institutional capacity so schools and districts own implementation long after we exit.',
      image: programImages.systems,
      percent: 67,
      statOneLabel: 'Numeracy',
      statOneValue: '66.7% programme',
      statTwoLabel: 'Comparison',
      statTwoValue: '54.1% control schools',
      order: 4,
    },
  ]
  for (const program of programs) {
    const existing = await payload.find({ collection: 'programs', where: { title: { equals: program.title } }, limit: 1 })
    if (!existing.docs.length) {
      await payload.create({ collection: 'programs', data: { ...program, image: program.image.id } })
    }
  }

  console.log('Seeding Interventions...')
  const interventions = [
    { title: 'Teacher Motivation', description: 'Instilling autonomy, mastery and purpose so teachers rediscover the love of teaching.', icon: 'icon-support-heart', order: 1 },
    { title: 'System Strengthening', description: 'Working through local government structures to build ownership that outlasts our involvement.', icon: 'icon-support', order: 2 },
    { title: 'Continuous Professional Development', description: 'Peer-led feedback and classroom observation that builds lasting instructional practice.', icon: 'icon-education', order: 3 },
    { title: 'Evidence & Research', description: 'Generating rigorous, locally grounded data that informs policy design and proves what works.', icon: 'icon-documents', order: 4 },
  ] as const
  for (const item of interventions) {
    const existing = await payload.find({ collection: 'interventions', where: { title: { equals: item.title } }, limit: 1 })
    if (!existing.docs.length) {
      await payload.create({ collection: 'interventions', data: item })
    }
  }

  console.log('Seeding Testimonials...')
  const testimonials = [
    {
      quote: "Since the programme began, our teachers observe each other, give feedback, and take pride in their craft. It's motivation, not just training, that changed.",
      name: 'District Education Officer',
      role: 'Local Government, Uganda',
      order: 1,
    },
    {
      quote: 'This is not another donor project that disappears after three years. Ed Impact works through our own structures, so changes stay embedded in the school.',
      name: 'Secondary School Headteacher',
      role: 'ASSHU Member School',
      order: 2,
    },
    {
      quote: 'Because our voice shaped how the programme was designed, it respects how our community works, and that is why the changes we made together have lasted.',
      name: 'School Management Chairperson',
      role: 'Isingiro District',
      order: 3,
    },
  ]
  for (const t of testimonials) {
    const existing = await payload.find({ collection: 'testimonials', where: { name: { equals: t.name } }, limit: 1 })
    if (!existing.docs.length) {
      await payload.create({ collection: 'testimonials', data: t })
    }
  }

  console.log('Seeding Posts...')
  const posts = [
    {
      title: 'Why Teacher Motivation Matters More Than Teacher Training',
      tag: 'Motivation',
      excerpt: 'When teachers feel supported, recognised, and connected to their purpose, motivation grows and classrooms thrive, a shift that outlasts any single training session.',
      body: 'It is tempting to measure success by how many teachers we have trained. But training alone rarely changes what happens in a classroom. What changes it is motivation, a teacher\'s sense of autonomy, mastery and purpose in their own craft.\n\nWhen teachers feel supported, recognised, and connected to their purpose, motivation grows and classrooms thrive. That is why our model is built around role-modelling and peer networks, not one-off workshops.\n\nOver 3,000 teachers are now applying evidence-informed teaching practices, strengthening learning for thousands of children across Uganda.',
      image: postImages.motivation,
      readTime: '5 min read',
    },
    {
      title: 'What The 2025 Impact Evaluation Tells Us About Learning Outcomes',
      tag: 'Evidence',
      excerpt: 'Programme schools significantly outperformed comparison schools in literacy and numeracy, with an estimated social return of £3.12 for every £1 invested.',
      body: 'Our 2025 impact evaluation demonstrates measurable improvements in learning outcomes and instructional practice in programme schools compared with control schools.\n\nLiteracy performance was 73.1% in programme schools compared with 57.0% in comparison schools, and numeracy performance was 66.7% compared with 54.1%. The estimated social return was £3.12 for every £1 invested.',
      image: postImages.impact,
      readTime: '7 min read',
    },
    {
      title: 'Localisation In Practice: From STIR Education To Ed Impact Africa',
      tag: 'Systems',
      excerpt: 'As STIR Education Uganda transitions into a locally governed entity, we explain what changes, what stays the same, and why it matters for sustainable reform.',
      body: 'Ed Impact Africa Foundation is the local successor to STIR Education Uganda, inheriting its proven theory of change, government relationships and institutional capacity while deepening our work in Uganda and expanding across Africa.',
      image: postImages.localisation,
      readTime: '6 min read',
    },
  ]
  for (const post of posts) {
    const existing = await payload.find({ collection: 'posts', where: { title: { equals: post.title } }, limit: 1 })
    if (!existing.docs.length) {
      await payload.create({ collection: 'posts', data: { ...post, image: post.image.id } })
    }
  }

  console.log('Seeding FAQs...')
  const faqs = [
    { question: 'What does Ed Impact Africa Foundation actually do?', answer: 'We partner with governments and communities to strengthen education systems across Africa. Our work centers on four interventions: teacher motivation, continuous professional development, system strengthening, and evidence & research.', page: 'general', order: 1 },
    { question: 'Is this the same organisation as STIR Education?', answer: 'Yes. Ed Impact Africa Foundation is the local successor to STIR Education Uganda, inheriting its proven theory of change, government relationships and institutional capacity while deepening our work in Uganda and expanding across Africa.', page: 'general', order: 2 },
    { question: 'How can my organisation or government partner with you?', answer: "We welcome partnerships with governments, funders and communities. Visit our Partner With Us page to find the option that fits how you'd like to work with us, or reach out directly via our contact page.", page: 'general', order: 3 },
    { question: 'How do you measure impact?', answer: 'Through rigorous, independent evaluations. Our 2025 impact evaluation showed programme schools significantly outperforming comparison schools in literacy and numeracy, with an estimated social return of £3.12 for every £1 invested.', page: 'general', order: 4 },
    { question: "What's the difference between partnering as a government vs a funder?", answer: 'Governments help us scale within existing systems, embedding reform into local government structures. Funders provide the financial and technical resources that enable that scale. Both roles are essential to sustainable reform.', page: 'donate', order: 1 },
    { question: 'Do you accept unrestricted or restricted funding?', answer: 'We welcome both. Unrestricted funding strengthens our core capacity, while restricted funding can support specific interventions such as CPD delivery, evidence generation, or expansion into new geographies.', page: 'donate', order: 2 },
    { question: 'How do communities get a say in how programs are designed?', answer: 'Through Co-Creation. We design solutions with educators, communities and learners rather than imposing them, and School Management Committees play an active role in how programs are delivered in their own schools.', page: 'donate', order: 3 },
    { question: 'What happens after I submit a partnership inquiry?', answer: "Our partnerships team reviews every submission and responds within 5 business days to discuss next steps, whether that's a call, a site visit, or a formal proposal.", page: 'donate', order: 4 },
  ] as const
  for (const faq of faqs) {
    const existing = await payload.find({ collection: 'faqs', where: { question: { equals: faq.question } }, limit: 1 })
    if (!existing.docs.length) {
      await payload.create({ collection: 'faqs', data: faq })
    }
  }

  console.log('Seed complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
