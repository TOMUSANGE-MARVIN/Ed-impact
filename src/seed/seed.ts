import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from '../payload.config.js'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const publicImages = path.resolve(dirname, '../../public/assets/images')
const publicDocuments = path.resolve(dirname, '../../public/assets/documents')

const mimetypeFor = (filePath: string) => {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.png') return 'image/png'
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg'
  if (ext === '.pdf') return 'application/pdf'
  return 'application/octet-stream'
}

const readFile = (relPath: string, baseDir: string = publicImages) => {
  const filePath = path.join(baseDir, relPath)
  const data = fs.readFileSync(filePath)
  const name = path.basename(filePath)
  const mimetype = mimetypeFor(filePath)
  return { data, mimetype, name, size: data.length }
}

async function uploadMedia(payload: any, relPath: string, alt: string, baseDir: string = publicImages) {
  const file = readFile(relPath, baseDir)
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
        email: 'admin@edimpactafrica.org',
        password: 'EdImpact2026!',
      },
    })
    console.log('Created admin user: admin@edimpactafrica.org / EdImpact2026!')
  } else {
    console.log('Admin user already exists, skipping.')
  }

  console.log('Uploading media...')
  const logo = await uploadMedia(payload, 'logo.png', 'Ed Impact Africa Foundation logo')
  const logoLight = await uploadMedia(payload, 'logo-light.png', 'Ed Impact Africa Foundation logo (white)')

  const teamPhotos: Record<string, any> = {}
  for (const [key, file] of Object.entries({
    karema: 'team/exec-karema-2026.jpg',
    birungi: 'team/exec-birungi-2026.jpg',
    otika: 'team/exec-otika-2026.jpg',
    namukose: 'team/exec-namukose-2026.jpg',
    ezati: 'team/board-ezati-2026.jpg',
    mugenyi: 'team/board-mugenyi-2026.jpg',
    kibeddi: 'team/board-kibeddi-2026.jpg',
    lutimba: 'team/board-lutimba-2026.jpg',
    karyeija: 'team/board-karyeija-2026.jpg',
    muhwezi: 'team/board-muhwezi-2026.jpg',
    ngolobe: 'team/board-ngolobe-2026.jpg',
    watiti: 'team/senior-watiti-2026.jpg',
    oola: 'team/senior-oola-2026.jpg',
    wanyama: 'team/senior-wanyama-2026.jpg',
    agwang: 'team/staff-agwang-2026.jpg',
    odeke: 'team/staff-odeke-2026.jpg',
    oroma: 'team/staff-oroma-2026.jpg',
    bako: 'team/staff-bako-2026.jpg',
    kinyera: 'team/staff-kinyera-2026.jpg',
    natukunda: 'team/staff-natukunda-2026.jpg',
    atria: 'team/staff-atria-2026.jpg',
    atim: 'team/staff-atim-2026.jpg',
    kirungi: 'team/staff-kirungi-2026.jpg',
    nantaba: 'team/staff-nantaba-2026.jpg',
    nabugasha: 'team/staff-nabugasha-2026.jpg',
    kasozi: 'team/staff-kasozi-2026.jpg',
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
        email: 'info@edimpactafrica.org',
        partnershipsEmail: 'partnerships@edimpactafrica.org',
        phoneOne: '+256 781 064 668',
        phoneTwo: '+256 414 696609',
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
      heroCtaPrimaryLabel: 'Discover Our Work',
      heroCtaSecondaryLabel: 'Invest In Systemic Change',
      modelSection: {
        subtitle: 'How We Create Change',
        title: 'Our Model: Four Interventions',
        description:
          'A child cannot love learning without a teacher who loves teaching. We build the capacity of teachers, school leaders and officials together across both primary and secondary education, so motivation and quality take root and stay embedded in the system.',
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
        knowledgePartnerText:
          'Your research and technical expertise strengthen the evidence behind our work, co-authoring studies, shaping policy dialogue, and helping translate evidence into practice across Africa.',
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
        "We don't have any open positions right now. Check back soon, or email us your CV and we'll reach out when a role matching your experience opens up.",
      internshipsText:
        "We welcome enquiries from early-career professionals and volunteers interested in education systems reform. Get in touch and we'll reach out when an opportunity fits.",
      diversityText:
        'Guided by Ubuntu, we are committed to equal opportunity and inclusive hiring, building a team as diverse as the communities we serve.',
    },
  })

  console.log('Seeding Team Members...')
  const teamMembers = [
    { name: 'Modern Karema Musiimenta', role: 'Chief Executive Officer', category: 'executive', photo: teamPhotos.karema, order: 1, featuredOnHome: true, linkedinUrl: 'https://www.linkedin.com/in/modern-karema-musiimenta-mba-960543180/', bio: "Modern Karema Musiimenta is the Chief Executive Officer ED Impact Africa Foundation. In his previous roles, he was the Uganda Country Director for STIR Education-the precursor to ED Impact Africa Foundation. STIR Education is an International NGO headquartered in the UK, working in Uganda, India, Indonesia and Ethiopia, delivering a teacher training and continuous professional development program with the respective ministries of education, hinged on the principles of Intrinsic Motivation. In this role, he heads the country leadership team and is mainly in charge of country program strategy, government relations and strategic partnerships, and people and culture. He is also the founder of the MENTA Leadership Academy-an advisory services firm incorporated in Uganda, providing end to end leadership and organisational development consultancy services to Impact & Mission-driven organisations across East Africa. This includes (but is not limited to) organisational strategy formulation & review, program strategy & review, as well as people and organisational capacity assessment and development trainings on broad themes.\n\nIn his previous roles, he was the head of national programs at Educate! Uganda, Head of Program Implementation at Educate! Rwanda, Program Manager at Educate! Uganda, General Manager at Jobconnect and Branch Operations Manager at the National Social Security Fund. This is over an 18year period.\n\nHe also serves at various Boards at district, national and regional bodies, among others, serving as Chairman School Management Committee for Birere Mixed Primary School-his former primary school, member of the Board of Directors for Mbarara Community Hospital, and Evelyn Health Training Institute, and the Regional Educational Learning Initiative (RELI AFRICA) where he serves as a Board member and Chair of the Membership Management Committee.\n\nModern is a management professional with a Master of Business Administration, specialising in Project Planning and Management, and an Honors Bachelor's degree in Social Sciences-both from Makerere University." },
    { name: 'Wilber Birungi', role: 'Chief Finance Officer', category: 'executive', photo: teamPhotos.birungi, order: 2, featuredOnHome: true, bio: "As Chief Finance Officer, Wilber leads Ed Impact Africa Foundation's financial strategy and sustainability planning, ensuring resources are managed transparently and accountably across all our education system strengthening programmes." },
    { name: 'Brenda Akite Otika', role: 'Chief Program Officer', category: 'executive', photo: teamPhotos.otika, order: 3, featuredOnHome: true, bio: "As Chief Program Officer, Brenda oversees the design and delivery of Ed Impact Africa Foundation's teacher motivation, continuous professional development and system strengthening programmes across Uganda." },
    { name: 'Janat Namukose', role: 'Chief People Officer', category: 'executive', photo: teamPhotos.namukose, order: 4, featuredOnHome: true, bio: "As Chief People Officer, Janat leads the people, culture and talent strategy that enables Ed Impact Africa Foundation's team to deliver its education reform mission across Uganda." },
    { name: 'Prof. Betty Ezati', role: 'Board Chairperson', category: 'board', photo: teamPhotos.ezati, order: 5, featuredOnHome: false, bio: "As Board Chairperson, Professor Ezati provides strategic oversight and governance leadership for Ed Impact Africa Foundation's Board of Directors." },
    { name: 'Dr. Cleophas Mugenyi', role: 'Board Member', category: 'board', photo: teamPhotos.mugenyi, order: 6, featuredOnHome: false, bio: "As a Board Member, Dr. Mugenyi contributes to the governance and strategic direction of Ed Impact Africa Foundation." },
    { name: 'CPA Fredrick Kibeddi', role: 'Chairperson, Finance & Risk', category: 'board', photo: teamPhotos.kibeddi, order: 7, featuredOnHome: false, bio: "As Chairperson for Finance & Risk, Fredrick leads the financial governance and risk oversight that keep Ed Impact Africa Foundation's programmes accountable and sustainable." },
    { name: 'CPA Charles Lutimba', role: 'Board Member, Finance & Risk', category: 'board', photo: teamPhotos.lutimba, order: 8, featuredOnHome: false, bio: "As a Board Member for Finance & Risk, Charles supports the financial governance and risk oversight that keep Ed Impact Africa Foundation's programmes accountable and sustainable." },
    { name: 'Prof. Gerald Karyeija', role: 'Committee Chairperson, Governance, Strategy & HR', category: 'board', photo: teamPhotos.karyeija, order: 9, featuredOnHome: false, bio: "As Chairperson of the Governance, Strategy & HR Committee, Professor Karyeija guides the Board's oversight of institutional strengthening and organisational strategy as the Foundation grows into an autonomous Ugandan institution." },
    { name: 'Dr. Martha Muhwezi', role: 'Committee Chairperson, Program Quality Assurance', category: 'board', photo: teamPhotos.muhwezi, order: 10, featuredOnHome: false, bio: "As Chairperson of the Program Quality Assurance Committee, Dr. Muhwezi oversees the standards and evidence that ensure Ed Impact Africa Foundation's education system strengthening work delivers measurable learning outcomes." },
    { name: 'Patrick Ngolobe', role: 'Member, Governance, Strategy & HR Committee', category: 'board', photo: teamPhotos.ngolobe, order: 11, featuredOnHome: false, bio: "As a Member of the Governance, Strategy & HR Committee, Patrick supports the Board's oversight of institutional strengthening and organisational strategy." },
    { name: 'Jane Ssebuyungo', role: 'Head, Amplification Services / Pan African Scale', category: 'senior-leadership', photo: teamPhotos.placeholder, order: 12, featuredOnHome: false, bio: "As Head of Amplification Services and Pan-African Scale, Jane leads efforts to extend Ed Impact Africa Foundation's education system strengthening model to new countries across Africa." },
    { name: 'Peace Lorna Precious Oola', role: 'Head, Social Enterprise & Experimentation', category: 'senior-leadership', photo: teamPhotos.oola, order: 13, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/lorna-peace-b989191a3/', bio: "Oola Lorna Peace Precious is an education and programme development professional with over 15 years of experience working across education, governance, programme management and community development. Her work has focused on strengthening education systems by supporting teachers, school leaders, local governments and other education stakeholders to translate policies and programmes into practical change at school and community level. She brings experience in programme design and delivery, teacher professional development, stakeholder engagement, monitoring, evaluation and learning, research, partnership coordination, and supporting teams to deliver programmes effectively across diverse contexts.\n\nIn her current role, Lorna supports programme planning, implementation, quality assurance and learning, while working closely with government and education partners to strengthen the systems that enable teachers and school leaders to thrive. She is particularly passionate about locally led approaches to education, continuous professional learning, evidence-informed decision-making and creating opportunities for practitioners to learn from one another. She believes that sustainable change is built through strong relationships, listening to those closest to the work, and giving people the confidence and support to lead change themselves.\n\nWhat motivates Lorna most is seeing good ideas move beyond paper and become meaningful changes in classrooms and communities. She is inspired by the commitment of teachers and education leaders who continue to find solutions despite challenging circumstances, and she enjoys creating spaces where people can reflect, learn, collaborate and improve. Her academic background in Public Administration and Management, Conflict Transformation and Peace Studies, Governance and Ethics, and Project Management complements her practical experience and continues to shape her commitment to building education systems that are more responsive, inclusive and able to give every learner a genuine opportunity to succeed." },
    { name: 'Deric Watiti', role: 'Head, Monitoring, Evaluation, Accountability, Research & Learning', category: 'senior-leadership', photo: teamPhotos.watiti, order: 14, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/dericwatiti/', bio: "Deric Watiti is a monitoring, evaluation, research and learning professional with extensive experience strengthening evidence systems for education and development programmes. As Head of Monitoring, Evaluation, Accountability, Research and Learning, he leads the organisation's approach to programme measurement, learning, accountability and the use of evidence in decision-making.\n\nHis experience spans programme monitoring, evaluation design, research, data quality assurance, digital data collection systems, learning assessments, proposal writing and evidence synthesis. He has supported large scale education programmes working across schools, districts and government systems, with particular experience in measuring changes in teacher practice, stakeholder behaviour and learner outcomes.\n\nBefore joining STIR Education, Deric held monitoring and evaluation roles in which he designed monitoring frameworks and data collection tools, led field research and verification exercises, strengthened programme reporting systems and supported teams to translate data into practical programme improvements.\n\nHis work is grounded in a simple principle, evidence is most valuable when it leads to better decisions. He therefore focuses on building systems that go beyond reporting requirements to help organisations understand implementation quality, identify gaps, test assumptions and continuously improve their programmes.\n\nHis professional interests include education systems strengthening, behavioural measurement, teacher motivation, programme evaluation, research, digital data systems and organisational learning.\n\nDeric leads Monitoring, Evaluation, Research and Learning at STiR Education Uganda, overseeing the systems, research and evidence processes that help the organisation understand programme performance and strengthen implementation. He leads the design and continuous improvement of monitoring systems, data collection processes and technology enabled solutions that support timely, reliable and practical use of data across programmes.\n\nHis role includes leading evaluations and research studies, coordinating internal and third-party research, strengthening data quality and analysis, and translating evidence into practical insights for programme teams, leadership, partners and donors. He also builds the capacity of teams to use data and dashboards in decision-making and works closely with programme teams and government stakeholders to strengthen monitoring approaches and learning. As part of the Uganda leadership team, Deric contributes to organisational strategy while supporting the development of a strong, collaborative and evidence driven M&E function." },
    { name: 'Brenda Ayoo', role: 'Senior Manager, Design & Program Readiness', category: 'senior-leadership', photo: teamPhotos.placeholder, order: 15, featuredOnHome: false, bio: "As Senior Manager for Design & Program Readiness, Brenda leads the design and preparation of new interventions before they reach schools and government partners." },
    { name: 'Ephraim Wanyama', role: 'Senior Manager, Program Delivery', category: 'senior-leadership', photo: teamPhotos.wanyama, order: 16, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/wanyama-ephraim-465980165/', bio: "Wanyama Ephraim is a Senior Manager – Program Delivery at STiR Education Uganda, with over seven years of experience in education programme implementation, teacher professional development, and stakeholder engagement. He leads the Mastercard Foundation-funded Leaders in Teaching initiative across 13 regions, providing strategic oversight of regional delivery, Supporting Programme Leads, strengthening reporting systems, and building partnerships with government and education stakeholders to advance the Teacher Changemaker Development Programme. Ephraim also leads capacity-building initiatives that equip district education leaders with the skills and confidence to independently facilitate and sustain professional development programmes.\n\nHe is motivated by a commitment to strengthening education systems and ensuring that every learner has access to quality education. His work focuses on empowering teachers and education leaders with the tools, knowledge, and support they need to improve teaching and learning outcomes." },

    // Our Wider Team - ordered per client instruction: Principal titles, then Program Leads, then Coordinators, then Officers/Assistants, then those awaiting title confirmation
    { name: 'Agnes Jane Agwang', role: 'Principal Finance Executive', category: 'staff', photo: teamPhotos.agwang, order: 17, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/agnes-agwang-0601411a2/', bio: "Agnes Jane Agwang is a Principal Finance Executive at STiR Education with over 20 years of experience in accounting and financial management across the NGO sector. She brings extensive experience in financial operations, compliance and administrative support, ensuring that teams have the resources and systems they need to deliver effectively.\n\nIn her role at STiR, Agnes oversees key finance and support functions, including staff facilitation, per diems, fuel management, vendor payments and compliance with organisational and stakeholder requirements. She works closely with teams and partners to ensure financial processes are timely, transparent and well coordinated.\n\nAgnes is motivated by bringing clarity to financial matters and enabling others to succeed. She takes pride in being a dependable partner to programme teams, helping resolve financial challenges and ensuring that staff have the support they need to deliver STiR's work effectively." },
    { name: 'Odeke Alfred', role: 'Principal Finance Executive', category: 'staff', photo: teamPhotos.odeke, order: 18, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/alfred-odeke-969442173/', bio: "Odeke Alfred is a finance and accounting professional with more than 10 years of experience in accountancy and financial management, with expertise in budget development and management, financial forecasting, and grant reporting.\n\nHe holds a Bachelor's Degree in Business Administration, Accounting Option, from Makerere University. In his role at STiR Education, Alfred oversees financial management systems that respond to the needs of both internal and external stakeholders while supporting the effective implementation of the organisation's programmes.\n\nAlfred is committed to promoting sound financial management, accountability and value for money, ensuring that resources are used responsibly to support meaningful impact in the education sector and improve the lives of children." },
    { name: 'Fiona Oroma', role: 'Principal Program Lead', category: 'staff', photo: teamPhotos.oroma, order: 20, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/fiona-oroma-7484291a/', bio: "Ms. Oroma Fiona is a Principal Program Lead at STiR Education, where she provides strategic and operational leadership to strengthen public education systems across Uganda by building intrinsic motivation, collaborative leadership, and deep local government ownership. Since joining STiR in September 2017, she has supported programmes across Busoga, West Nile, Teso, Lango and Acholi, working closely with local governments, education leaders and schools to strengthen teacher motivation, collaborative leadership and evidence-informed practice.\n\nOver her career at STiR, Fiona has progressed from District Lead in Busoga to Senior Program Manager for West Nile and now Principal Program Lead. She brings extensive experience in programme leadership, stakeholder engagement, systems strengthening, data use and team development, with a strong focus on translating local insights into practical improvements in education delivery. She also bridges regional field insights with STiR's National design, M&E, Finance, and People teams to ensure high-quality program implementation, sound financial stewardship, and strong cross-functional synergy.\n\nFiona is driven by a belief that sustainable education change is built on trust, continuous learning and shared accountability. She is committed to developing local leadership and strengthening education systems so that teachers and education leaders are better supported to create positive learning experiences for every child." },
    { name: 'Christine Bako', role: 'Program Lead', category: 'staff', photo: teamPhotos.bako, order: 25, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/christine-bako-5598a732a/', bio: "Christine Bako is an education professional with several years of experience in teaching, teacher development, and education program implementation. She currently serves as a Program Lead where she supports the implementation of education programmes across the regions of West Nile and Bunyoro, working closely with teachers, school leaders and other stakeholders to strengthen teaching and learning. Her role involves program coordination, stakeholder engagement, monitoring implementation, coaching and support, and contributing to data-driven decision-making.\n\nBefore joining STiR Education, she worked with Jesuit Refugee Service (JRS) as an English Instructor. She also has extensive classroom teaching experience, having taught English Language at St. Charles Lwanga International School, Sacred Heart SS, Gulu High School, Gulu Army SS, and Gulu College School. These experiences have given her a strong understanding of classroom practice, teacher needs, learner development, and the realities faced by education in different school settings.\n\nChristine is motivated by a strong passion for education and its power to transform lives and communities. She is particularly inspired by opportunities to support teachers to grow professionally and create learning environments where learners can thrive. Her commitment is driven by the belief that meaningful improvements in education begin with empowered teachers, strong school leadership, and a shared commitment to better outcomes for every learner." },
    { name: 'Denis Kinyera', role: 'Program Lead', category: 'staff', photo: teamPhotos.kinyera, order: 24, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/kinyera-denis/', bio: "Denis Kinyera is an education and development professional with 12 years of experience in development and livelihoods programming, with expertise in teacher development, education leadership and systems strengthening.\n\nHe holds a Bachelor's degree in Business Studies with Education from Kyambogo University and is currently pursuing a Master of Education in Curriculum Studies at Uganda Christian University.\n\nThroughout his career, Denis has worked with Te-Kworo Foundation, Educate! as a Program Officer, Teach For Uganda as a Leadership Development Officer, and STiR Education as a Program Lead. These roles have provided him with extensive experience in classroom practice, leadership development, teacher support and programme implementation.\n\nDenis is passionate about teacher education, coaching and mentorship, particularly supporting teachers and education leaders to build confidence, ownership and agency. His work focuses on strengthening education systems through effective programme implementation, collaborative learning and continuous professional development, with a strong interest in translating evidence and ideas into practical improvements in teaching and learning." },
    { name: 'Kasozi Osbon', role: 'Program Lead', category: 'staff', photo: teamPhotos.kasozi, order: 23, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/osbon-kasozi-2532b119b/', bio: "Kasozi Osbon is a Program Lead at STiR Education Uganda, with over 10 years of experience in programme management, education systems strengthening, stakeholder engagement, programme strategy, and implementation across Uganda. In his current role, he provides strategic and operational leadership for the Social Initiative Special Project, working closely with the Ministry of Education and Sports, local government officials, donors, partners, and education leaders to strengthen programme quality, accountability, and sustainable impact. His work spans teacher professional development, intrinsic motivation, leadership, data-informed decision-making, and systems-led approaches to improving teaching and learning.\n\nAt STiR Education, Osbon has played a key role in documenting impact, strengthening programme delivery, stakeholder partnerships, monitoring and learning, and adaptive implementation. He has contributed to initiatives across multiple regions such as Ankole, Kigezi, Acholi, Lango, Teso, and Karamoja, supporting education stakeholders to use data and local evidence to improve programme implementation.\n\nPrior to STiR, he served as District Systems Strengthening Coordinator with Mott MacDonald/Cambridge Education under the SESIL program, Future Africa as Program Coordinator, Save the Children as Program Officer Education and Child Protection, and Comboni Samaritans of Gulu as Program Supervisor.\n\nOsbon brings a strong combination of programme leadership, systems thinking, partnership development, resource mobilisation, monitoring and evaluation, and team development. He holds a Master of Public Health from Cavendish University, a Bachelor of Arts in Social Sciences from Kyambogo University, and a Diploma in Education from Uganda Martyrs University. He is motivated by building education systems that are locally owned, evidence-informed and capable of delivering lasting improvements for teachers and learners." },
    { name: 'Alison Natukunda', role: 'Administration Coordinator – Procurement & Administration', category: 'staff', photo: teamPhotos.natukunda, order: 27, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/natukunda-alison-962a052b3/', bio: "Alison Natukunda is an Administration Coordinator supporting procurement and administration, with over seven years of experience in procurement, logistics, administration, and operational support within the international development sector. In her role, she coordinates end-to-end procurement processes, including procurement planning, sourcing, supplier due diligence, quotation and bid processes, contract administration, and supplier relationship management. She also supports logistics, asset and inventory management, office administration, and compliance with organisational policies and donor requirements.\n\nAlison is passionate about creating efficient, transparent, and well-organised systems that enable teams to focus on delivering meaningful programme outcomes. She is particularly motivated by ensuring that resources are managed responsibly, processes are accountable, and programme teams receive timely and effective operational support. Her approach is grounded in integrity, attention to detail, collaboration, value for money, and continuous improvement.\n\nAlison holds a Bachelor of Commerce (B. Com) from Makerere University and a Postgraduate Diploma in Business Administration (PGD BA) from Uganda Management Institute. She is also CIPS Level 5 qualified, reflecting her continued commitment to professional development in procurement and supply chain management." },
    { name: 'Atria Simon', role: 'M&E Coordinator', category: 'staff', photo: teamPhotos.atria, order: 28, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/atria-simon-814277162/', bio: "Atria Simon is a Monitoring, Evaluation and Learning (MEL) professional with 5 years of experience designing systems that measure program processes and turn data into actionable results. As M&E Coordinator, Atria leads the collection, analysis, and presentation of program data to strengthen learning outcomes and guide strategic decisions.\n\nAtria has strong expertise in designing and deploying tools, drawing on a multidisciplinary background in Education, Monitoring and Evaluation, ICT, and Project Planning and Management to adapt systems to diverse program needs.\n\nDriven by a commitment to evidence-based impact, Atria values constructive feedback, ethical practice, and a results-oriented approach and continually working to ensure data translates into real improvements for the people programs are meant to serve." },
    { name: 'Stellah Atim', role: 'Principal Administration Assistant', category: 'staff', photo: teamPhotos.atim, order: 19, featuredOnHome: false, linkedinUrl: 'https://www.linkedin.com/in/atimstellah/', bio: "Atim Stellah is an Administration Assistant with six years of experience supporting effective office operations and organisational administration. Her areas of expertise include communication and correspondence, document and data preparation, calendar and schedule coordination, records management, and office administration.\n\nIn her role, Stellah provides administrative support to the team, coordinates official communication, maintains departmental records and filing systems, manages office supplies and equipment, supports inventory management, and coordinates venues and logistics for meetings and other organisational activities.\n\nStellah is motivated by STiR's culture of humility and the example set by its leaders. She is committed to serving with integrity, professionalism and dedication, while ensuring that the team has the administrative support needed to deliver its work effectively." },
    { name: 'Trevor Kirungi', role: 'Program Lead', category: 'staff', photo: teamPhotos.kirungi, order: 26, featuredOnHome: false, bio: undefined as string | undefined },
    { name: 'Annet Nantaba', role: 'Team Member', category: 'staff', photo: teamPhotos.nantaba, order: 21, featuredOnHome: false, bio: undefined as string | undefined },
    { name: 'Doris Nabugasha', role: 'Team Member', category: 'staff', photo: teamPhotos.nabugasha, order: 22, featuredOnHome: false, bio: undefined as string | undefined },
  ]
  for (const member of teamMembers) {
    const existing = await payload.find({ collection: 'team-members', where: { name: { equals: member.name } }, limit: 1 })
    if (!existing.docs.length) {
      await payload.create({ collection: 'team-members', data: { ...member, photo: member.photo.id } })
      continue
    }
    const current = existing.docs[0]
    const updateData: Record<string, unknown> = {}
    const currentPhotoId = typeof current.photo === 'object' ? current.photo?.id : current.photo
    if (member.photo?.id && currentPhotoId !== member.photo.id) updateData.photo = member.photo.id
    if (member.bio && member.bio !== current.bio) updateData.bio = member.bio
    if (member.role && member.role !== current.role) updateData.role = member.role
    if (typeof member.order === 'number' && member.order !== current.order) updateData.order = member.order
    if ((member as any).linkedinUrl && (member as any).linkedinUrl !== current.linkedinUrl) {
      updateData.linkedinUrl = (member as any).linkedinUrl
    }
    if (Object.keys(updateData).length) {
      await payload.update({ collection: 'team-members', id: current.id, data: updateData })
    }
  }

  console.log('Seeding Programs...')
  const programs = [
    {
      title: 'National Secondary CPD',
      tag: 'Secondary',
      description: 'Delivered with the Association of Secondary School Headteachers of Uganda, reaching secondary schools nationwide.',
      body: 'We deliver this programme in partnership with the Association of Secondary School Headteachers of Uganda (ASSHU), reaching secondary schools across all local governments in the secondary education subsector nationally.\n\nThe programme is built around five interconnected anchors: teacher intrinsic motivation, continuous professional development training, a system-led programming model, impact sustainability, and national scale. Rather than one-off workshops, it runs through peer networks and role-modelling, so teachers build the skills and confidence to keep improving their own practice long after any single training session ends.\n\nOur 2025 impact evaluation found that teachers in programme schools reported a greater use of varied teaching methods, more student questioning, more peer feedback, and more classroom observation and coaching, evidence that the model changes what actually happens inside the classroom, not just what teachers know.',
      image: programImages.secondary,
      percent: 100,
      statOneLabel: 'Coverage',
      statOneValue: '176 LGs',
      statTwoLabel: 'Reach',
      statTwoValue: '199,856 teachers',
      statThreeLabel: 'Delivery Partner',
      statThreeValue: 'ASSHU',
      order: 1,
    },
    {
      title: 'Primary Teacher Colleges',
      tag: 'Primary',
      description: 'Delivered through 22 of 23 Core Primary Teacher Colleges, with NAMDEO and UNISA strengthening classroom instruction.',
      body: "This intervention is delivered through 22 of Uganda's 23 Core Primary Teacher Colleges, in partnership with the National Association of Municipal, District and City Education Officers (NAMDEO) and the Uganda National Inspectors of Schools Association (UNISA).\n\nWorking at the teacher-college level means we reach primary teachers earlier, before they enter the classroom, embedding the same principles of intrinsic motivation and reflective practice that anchor our secondary work. It also builds a direct line between teacher colleges and the district officials who inspect and support schools day to day.\n\nAcross the primary education subsector, our programming currently reaches more than half of Uganda's local governments, with district education officers and inspectors of schools acting as key partners in sustaining what is taught at college level once teachers reach real classrooms.",
      image: programImages.primary,
      percent: 96,
      statOneLabel: 'Coverage',
      statOneValue: '22/23 PTCs',
      statTwoLabel: 'Reach',
      statTwoValue: '105 Local Governments',
      statThreeLabel: 'Partners',
      statThreeValue: 'NAMDEO & UNISA',
      order: 2,
    },
    {
      title: 'Evidence & Policy Influence',
      tag: 'Evidence',
      description: 'Our 2025 impact evaluation shows measurably stronger learning outcomes in programme schools.',
      body: 'Evidence is not an afterthought in our model, it is one of our four core program anchors. Our 2025 impact evaluation compared programme schools directly against comparison schools that had not yet received the intervention.\n\nLiteracy performance was 73.1% in programme schools compared with 57.0% in comparison schools, and numeracy performance was 66.7% compared with 54.1%. Girls in programme schools achieved literacy results comparable to boys, 73.3% against 72.9%, though a gender gap remains in numeracy, a finding that is now shaping how we design gender-responsive pedagogy.\n\nBeyond test scores, programme schools reported stronger alignment with government teacher-development priorities and had begun establishing peer learning, mentoring and network meetings as standard practice. The estimated social return on this work is £3.12 for every £1 invested, evidence we use to inform policy dialogue with the Ministry of Education and Sports and our funding partners.',
      image: programImages.evidence,
      percent: 73,
      statOneLabel: 'Literacy',
      statOneValue: '73.1% programme',
      statTwoLabel: 'Comparison',
      statTwoValue: '57.0% control schools',
      statThreeLabel: 'Social Return',
      statThreeValue: '£3.12 per £1',
      order: 3,
    },
    {
      title: 'System Strengthening',
      tag: 'Systems',
      description: 'Building institutional capacity so schools and districts own implementation long after we exit.',
      body: 'Our approach is deliberately system-led rather than project-led. Instead of running programmes in parallel to government structures, we work through them, with school leaders, District Education Officers, Centre Coordinating Tutors and national officials, so that improvements are owned locally rather than dependent on our continued presence.\n\nThis means embedding routines into official systems already in use: school leaders creating the conditions for teacher practice improvement, district local governments owning and sustaining those improvements, and national policy, such as the National Teachers Policy and the roll-out of Competence Based Education, providing the framework everything else aligns to.\n\nSchools and districts are visibly taking greater ownership of the model as a result, though we are candid that limited local financing remains a real risk to sustaining these gains without continued support, which is part of why our strategic plan includes building a social enterprise arm to fund this work locally over time.',
      image: programImages.systems,
      percent: 67,
      statOneLabel: 'Numeracy',
      statOneValue: '66.7% programme',
      statTwoLabel: 'Comparison',
      statTwoValue: '54.1% control schools',
      statThreeLabel: 'Guided By',
      statThreeValue: 'National Teachers Policy 2019',
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
      name: 'DEO',
      role: 'District Education Officer, Uganda',
      order: 1,
    },
    {
      quote: "This isn't a donor project that disappears after three years. Ed Impact works through our structures, changes stay embedded in the school.",
      name: 'Headteacher',
      role: 'ASSHU Member School',
      order: 2,
    },
    {
      quote: 'Because our voice shaped how the programme was designed, it respects how our community works, and that is why the changes we made together have lasted.',
      name: 'SMC Chair',
      role: 'SMC, Isingiro',
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
      body: 'It is tempting to measure success by how many teachers we have trained. But training alone rarely changes what happens in a classroom. What changes it is motivation, a teacher\'s sense of autonomy, mastery and purpose in their own craft.\n\nOur theory of change starts with this idea: a child cannot love learning without a teacher who loves teaching. We build that love of teaching through role-modelling and peer networks rather than one-off workshops, hinged on the principles of intrinsic motivation. A motivated teacher then needs the right conditions at school level, so we work through school leaders to build their capacity to set that environment. Those school leaders, in turn, have a direct relationship with district education officials, and the same chain of influence runs all the way up to national education leaders.\n\nOur 2025 impact evaluation shows this chain actually working. Teachers in programme schools reported a greater use of varied teaching methods, more student questioning, more peer feedback, and more classroom observation and coaching, all signs of a profession that feels supported rather than simply instructed. Classrooms also became calmer: constructive conflict resolution was reported by 71.7% of programme schools compared with 61.3% in comparison schools, while conflict escalation was lower, 4.6% against 7.5%.\n\nWhen teachers feel supported, recognised, and connected to their purpose, motivation grows and classrooms thrive. That is a shift that outlasts any single training session, and it is why over 3,000 teachers are now applying evidence-informed teaching practices, strengthening learning for thousands of children across Uganda.',
      image: postImages.motivation,
      readTime: '5 min read',
    },
    {
      title: 'What The 2025 Impact Evaluation Tells Us About Learning Outcomes',
      tag: 'Evidence',
      excerpt: 'Programme schools significantly outperformed comparison schools in literacy and numeracy, with an estimated social return of £3.12 for every £1 invested.',
      body: 'Our 2025 impact evaluation demonstrates measurable improvements in learning outcomes and instructional practice in programme schools compared with control schools.\n\nLiteracy performance was 73.1% in programme schools compared with 57.0% in comparison schools, and numeracy performance was 66.7% compared with 54.1%. Girls in programme schools achieved literacy results comparable to boys, 73.3% against 72.9%, although a gender gap remains in numeracy, a finding that will shape how we design gender-responsive pedagogy going forward.\n\nThe evaluation also looked beyond test scores. Programme schools reported stronger alignment with government teacher-development priorities, and had begun establishing peer learning, mentoring, and network meetings as standard professional-development practice rather than a one-off intervention. Schools and districts are visibly taking greater ownership of the model, though limited local financing remains a real threat to sustaining these gains without continued support.\n\nThe headline figure for funders and government partners is the estimated social return: £3.12 for every £1 invested. But the more important number, to us, is what sits behind it, over 3,000 teachers now applying evidence-informed teaching practices in their own classrooms, and a system that is starting to sustain that shift on its own.',
      image: postImages.impact,
      readTime: '7 min read',
    },
    {
      title: 'Localisation In Practice: From STIR Education To Ed Impact Africa Foundation',
      tag: 'Systems',
      excerpt: 'As STIR Education Uganda transitions into a locally governed entity, we explain what changes, what stays the same, and why it matters for sustainable reform.',
      body: 'STIR Education is an international NGO, headquartered in the UK, that has worked since 2012 to help education systems reignite intrinsic motivation, so that every child, teacher and official is motivated to learn and improve. Over that time it built country programmes in Uganda, India, Ethiopia and Indonesia, and supported further education interventions in Ghana, Brazil and Kenya, learning and adapting its model across very different contexts.\n\nAs part of a deliberate localisation strategy, STIR Education has spent the last several years helping its country chapters become independent, locally governed entities. STIR Education India localised first, becoming the Centre for Intrinsic Motivation in 2024. STIR Education Uganda started its own localisation journey in January 2026 to become Ed Impact Africa Foundation, and STIR Education Indonesia is scheduled to begin its transition in 2027.\n\nEd Impact Africa Foundation inherits STIR Education Uganda\'s theory of change, its national-scale programme reach, and the government and school relationships built over a decade of implementation. Concretely, that means a footprint across all local governments in the secondary education subsector and more than half of local governments in the primary subsector, delivered through our partnership with the Association of Secondary School Headteachers of Uganda for secondary schools, and through the National Association of Municipal, District and City Education Officers and the Uganda National Inspectors of Schools Association for primary, reaching 22 of Uganda\'s 23 core Primary Teacher Colleges.\n\nWhat changes is governance, not substance. We are moving from being a branch office of a global entity to an autonomous local organisation with our own board of directors and leadership team, and from programme-based work to a stronger social enterprise model that can sustain this work locally. What stays the same is the commitment behind it: 199,856 teachers and 5,892,477 learners already reached, and a model built to keep working long after any single programme cycle ends.',
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

  console.log('Seeding Reports...')
  const reports = [
    {
      title: '2025 Impact Evaluation Report: Learning Outcomes Across Programme Schools',
      excerpt: 'Our 2025 impact evaluation demonstrates measurable improvements in learning outcomes and instructional practice in programme schools compared with control schools, evidence that our system-led model works at scale.',
      body: 'This report presents the findings of our independent 2025 impact evaluation, comparing learning outcomes and teaching practice in programme schools against a matched set of comparison schools that had not yet received the intervention.\n\nLiteracy performance was 73.1% in programme schools compared with 57.0% in comparison schools, and numeracy performance was 66.7% compared with 54.1%. Girls in programme schools achieved literacy results comparable to boys, 73.3% against 72.9%, although a gender gap remains in numeracy that will inform how we design gender-responsive pedagogy going forward.\n\nBeyond test scores, the evaluation found classrooms in programme schools becoming calmer and more collaborative: constructive conflict resolution was reported by 71.7% of programme schools compared with 61.3% in comparison schools, while conflict escalation was lower, 4.6% against 7.5%. Teachers reported greater use of varied teaching methods, more student questioning, more peer feedback, and more classroom observation and coaching.\n\nThe estimated social return on this work is £3.12 for every £1 invested. More importantly to us, over 3,000 teachers are now applying evidence-informed teaching practices in their own classrooms, strengthening learning for thousands of children across Uganda.',
      highlights: [
        { text: 'Improved Foundational Learning' },
        { text: 'Stronger Teaching Practice' },
        { text: 'Girls Matching Boys In Literacy' },
        { text: 'Greater Government Ownership' },
        { text: 'Peer Learning & Mentoring Embedded' },
        { text: '£3.12 Return Per £1 Invested' },
      ],
      tags: 'Evidence, Learning Outcomes, Impact Evaluation',
      image: postImages.impact,
      publishedDate: '2026-03-01',
      order: 1,
    },
    {
      title: 'Annual Report 2025: Localisation & Scale',
      excerpt: 'A look back at a defining year: our transition toward a locally governed entity, and continued national-scale delivery across Uganda\'s education system.',
      body: '2025 was a year of consolidation and preparation. Our programme reached 199,856 teachers and 5,892,477 learners across Uganda, sustaining a footprint across all local governments in the secondary education subsector and more than half of local governments in the primary subsector.\n\nWe deepened delivery partnerships that make this scale possible: with the Association of Secondary School Headteachers of Uganda for secondary schools, and with the National Association of Municipal, District and City Education Officers and the Uganda National Inspectors of Schools Association for primary, reaching 22 of Uganda\'s 23 core Primary Teacher Colleges.\n\nAlongside delivery, we laid the groundwork for localisation, building the governance structures, local board, and financial independence needed to transition from a branch office of a global NGO into an autonomous Ugandan institution. This report sets out that scale of delivery and the foundation built for the transition completed in early 2026.',
      highlights: [
        { text: '199,856 Teachers Reached' },
        { text: '5,892,477 Learners Reached' },
        { text: 'National Secondary Coverage' },
        { text: '22 of 23 Core Primary Teacher Colleges' },
        { text: 'Localisation Governance Structures Established' },
      ],
      tags: 'Systems Strengthening, Localisation, Scale',
      image: postImages.localisation,
      publishedDate: '2026-02-01',
      order: 2,
    },
    {
      title: 'From STIR Education To Ed Impact Africa Foundation: A Transition Update',
      excerpt: 'As STIR Education Uganda transitions into a locally governed entity, we explain what changes, what stays the same, and why it matters for sustainable reform.',
      body: 'STIR Education is an international NGO, headquartered in the UK, that has worked since 2012 to help education systems reignite intrinsic motivation, so that every child, teacher and official is motivated to learn and improve. Over that time it built country programmes in Uganda, India, Ethiopia and Indonesia, and supported further education interventions in Ghana, Brazil and Kenya.\n\nAs part of a deliberate localisation strategy, STIR Education has spent the last several years helping its country chapters become independent, locally governed entities. STIR Education India localised first, becoming the Centre for Intrinsic Motivation in 2024. STIR Education Uganda started its own localisation journey in January 2026 to become Ed Impact Africa Foundation, and STIR Education Indonesia is scheduled to begin its transition in 2027.\n\nEd Impact Africa Foundation inherits STIR Education Uganda\'s theory of change, its national-scale programme reach, and the government and school relationships built over a decade of implementation. What changes is governance, not substance: we are moving from being a branch office of a global entity to an autonomous local organisation with our own board of directors and leadership team, and from programme-based work to a stronger social enterprise model that can sustain this work locally. What stays the same is the commitment behind it, teachers and learners already reached, and a model built to keep working long after any single programme cycle ends.',
      highlights: [
        { text: 'Locally Registered Ugandan NGO' },
        { text: 'Own Board Of Directors & Leadership Team' },
        { text: 'Same Theory Of Change, Local Governance' },
        { text: 'Decade Of Government Relationships Retained' },
        { text: 'Moving Toward A Sustainable Social Enterprise Model' },
      ],
      tags: 'Systems Strengthening, Localisation',
      image: postImages.motivation,
      publishedDate: '2026-01-01',
      order: 3,
    },
  ]
  for (const report of reports) {
    const existing = await payload.find({ collection: 'reports', where: { title: { equals: report.title } }, limit: 1 })
    if (!existing.docs.length) {
      await payload.create({ collection: 'reports', data: { ...report, image: report.image.id } })
    }
  }

  console.log('Seeding Legacy Documents...')
  const legacyFiles: Record<string, any> = {}
  for (const [key, file] of Object.entries({
    teacherWorkforce: 'teacher-workforce-2018.pdf',
    ugandaYear1: 'uganda-year1-impact-2020.pdf',
    ugandaFinalEvaluation: 'uganda-final-impact-evaluation-2025.pdf',
  })) {
    legacyFiles[key] = await uploadMedia(payload, file, `${key} legacy document`, publicDocuments)
  }
  const legacyDocuments = [
    {
      title: 'Securing the 21st Century Teacher Workforce',
      description: 'Global perspectives on teacher motivation and retention.',
      source: 'STiR Education, 2018',
      file: legacyFiles.teacherWorkforce,
      order: 1,
    },
    {
      title: 'STiR Uganda Impact Evaluation - Year 1 Visual Report',
      description: "Findings of STiR Education's programme in Uganda.",
      source: 'STiR Education, 2020',
      file: legacyFiles.ugandaYear1,
      order: 2,
    },
    {
      title: 'STiR Education Uganda - Final Impact Evaluation Report',
      description: 'Independent final impact evaluation of the Uganda programme.',
      source: 'Deloitte Touche Tohmatsu India LLP, 2025',
      file: legacyFiles.ugandaFinalEvaluation,
      order: 3,
    },
  ]
  for (const doc of legacyDocuments) {
    const existing = await payload.find({ collection: 'legacy-documents', where: { title: { equals: doc.title } }, limit: 1 })
    if (!existing.docs.length) {
      await payload.create({ collection: 'legacy-documents', data: { ...doc, file: doc.file.id } })
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
