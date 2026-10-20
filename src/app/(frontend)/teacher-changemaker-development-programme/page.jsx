import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import Link from "next/link";
import { getSiteSettings } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Primary Teacher Changemaker Development Programme (TCMDP)",
  description:
    "TCMDP strengthens teacher motivation, professional practice and education system capacity across 105 districts in Uganda, working through the Ministry of Education and Sports and local governments.",
  path: "/teacher-changemaker-development-programme",
});

const principles = [
  { title: "Relationships", detail: "Learning alongside colleagues who support and challenge each other." },
  { title: "Autonomy", detail: "Teachers owning their development." },
  { title: "Mastery", detail: "The satisfaction of getting better at the craft of teaching." },
  { title: "Purpose", detail: "Seeing how everyday teaching shapes learners’ futures." },
];

const priorities = [
  {
    title: "Scale Learning Improvement Cycles",
    detail: "Expand structured, school-based professional learning, with content shaped by teachers’ identified needs.",
  },
  {
    title: "Strengthen teacher peer networks and classroom practice",
    detail: "Support regular school-based networks, classroom observation and peer feedback so learning translates into practice.",
  },
  {
    title: "Deepen system ownership",
    detail: "Work with MoES, district education departments, inspectors, teacher training institutions and professional networks to embed teacher motivation, professional learning and monitoring in government systems.",
  },
  {
    title: "Generate and use evidence",
    detail: "Track changes in teacher practice and behaviour alongside learner attendance, retention, dropout and academic performance, and use the findings to improve delivery.",
  },
  {
    title: "Keep improving through system alignment",
    detail: "Use district and national platforms to review evidence, name implementation challenges and agree practical next steps for quality and sustainability.",
  },
];

const outcomes = [
  "Motivated and engaged teachers with stronger professional agency, collaboration and commitment to learning and to teaching.",
  "Better teaching with more learner-centred, inclusive and evidence-informed practice that makes classrooms safe, engaging and effective.",
  "Stronger systems with teacher professional development, motivation, monitoring and continuous improvement integrated into MoES, district and school structures.",
  "More children learning shown through better attendance and retention, reduced dropout, and stronger engagement and achievement by the end of Primary Seven.",
];

const partners = [
  "Ministry of Education and Sports (MoES)",
  "Local Governments",
  "National Association of Municipal, District and City Education Officers (NAMUDEO)",
  "Uganda National Inspectors of Schools Association (UNISA)",
  "Teacher Training Institutions and Centre Coordinating Tutors",
  "District and Municipal Education Departments",
];

const page = async () => {
  const settings = await getSiteSettings();

  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
        <CustomCursor />
        <TopBarOne settings={settings} />
        <HeaderOne settings={settings} />
        <BreadcrumbOne subtitle='Our Work' title='Primary Teacher Changemaker Development Programme' />

        <div className='cm-details'>
          <div className='container'>
            <div className='row gutter-60'>
              <div className='col-12 col-xl-4 order-xl-1'>
                <div className='cm-details__sidebar programme-sidebar--sticky'>
                  <div
                    className='cm-sidebar-widget'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <div className='intro'>
                      <h5>At A Glance</h5>
                    </div>
                    <div className='cm-details__list'>
                      <ul>
                        <li>
                          <i className='icon-circle-check' />
                          Country: Uganda
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Reach: 105 Districts
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Level: Primary Education
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Model: Government System-Led
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Status: Active
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className='cm-sidebar-overview'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <div className='cm-content'>
                      <p>Join The Movement</p>
                      <h4>Help Us Build Classrooms Where Every Learner Thrives</h4>
                    </div>
                    <div className='cm-cta'>
                      <Link
                        href='/partner-with-us'
                        aria-label='partner with us'
                        title='partner with us'
                        className='btn--primary'
                      >
                        Partner With Us <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-xl-8 order-xl-2'>
                <div className='cm-details__content'>
                  <div
                    className='cm-details__poster'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <img src='/assets/images/banner/banner-one-bg.webp' alt='A teacher with primary school learners at a Ugandan school' />
                  </div>

                  <div className='programme-facts'>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-location-dot' /> Uganda
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-map' /> 105 Districts
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-child-reaching' /> Primary Education
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-landmark' /> Government System-Led
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-circle-check' /> Active
                    </span>
                  </div>

                  <div className='cm-group cta'>
                    <p>
                      In each classroom, a child&rsquo;s opportunity to learn rests on one person, their teacher.
                      When teachers feel valued, supported and sure of their purpose, they bring curiosity, care and
                      confidence into the room, and learners respond in kind.
                    </p>
                    <p>
                      The Primary Teacher Changemaker Development Programme (TCMDP) helps teachers in Uganda become
                      exactly that &ndash; changemakers. We achieve this by working with the Ministry of Education
                      and Sports (MoES) and local governments, through the systems already in place, so that
                      improvements begin and stay in classrooms.
                    </p>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Goal</h3>
                    <p>
                      To improve learning outcomes for children in Uganda by strengthening teacher motivation,
                      professional practice and education system capacity, so that teachers can create safe,
                      inclusive and engaging classrooms where every learner can thrive.
                    </p>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>How TCMDP Works</h3>
                    <p>
                      At the heart of TCMDP are Learning Improvement Cycles (LICs). In each cycle, teachers and
                      school leaders learn practical, evidence-informed teaching strategies, apply them in their own
                      classrooms, receive feedback from colleagues and leaders, then reflect and improve before
                      beginning the next cycle. School leaders are equipped to nurture a culture of peer
                      collaboration, so professional learning becomes part of everyday school life.
                    </p>
                    <p>TCMDP is grounded in four principles of intrinsic motivation:</p>
                    <div className='cm-details__list'>
                      <ul>
                        {principles.map((item) => (
                          <li key={item.title}>
                            <i className='icon-circle-check' />
                            <span>
                              <strong>{item.title}:</strong> {item.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Working Through Government Systems</h3>
                    <p>
                      TCMDP is embedded in existing government systems across five connected levels so that support
                      reaches the classroom and ownership stays with the system. With the programme now reaching
                      105 districts, Ed Impact Africa Foundation, successor to STiR Education, is focusing on five
                      priorities:
                    </p>
                    <div className='cm-details__list'>
                      <ul>
                        {priorities.map((item) => (
                          <li key={item.title}>
                            <i className='icon-circle-check' />
                            <span>
                              <strong>{item.title}:</strong> {item.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Our Partners</h3>
                    <p>TCMDP is delivered with and through the people and institutions that run Uganda&rsquo;s education system:</p>
                    <div className='cm-details__list'>
                      <ul>
                        {partners.map((partner) => (
                          <li key={partner}>
                            <i className='icon-circle-check' />
                            {partner}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='programme-outcomes'>
                    <h3>By The End Of The Programme</h3>
                    <ol>
                      {outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
