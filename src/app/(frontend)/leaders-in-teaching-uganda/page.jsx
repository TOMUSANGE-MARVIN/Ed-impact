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
  title: "Leaders In Teaching Uganda Programme",
  description:
    "Leaders in Teaching Uganda: a Mastercard Foundation initiative transforming secondary education, with Ed Impact Africa Foundation leading the Motivate pillar on teacher motivation and professional growth.",
  path: "/leaders-in-teaching-uganda",
});

const partners = [
  { name: "Luigi Giussani Foundation", note: "Consortium Lead" },
  { name: "UNICEF", note: "Consortium Co-lead, ICT integration in teaching and learning" },
  { name: "Forum for Education NGOs in Uganda (FENU)", note: null },
  { name: "Teach For Uganda (T4U)", note: null },
  { name: "British Council", note: null },
  { name: "Edukans International Uganda", note: null },
  { name: "Brainwave Careers Uganda", note: null },
  { name: "Promoting Equality in African Schools (PEAS)", note: null },
  { name: "Ed Impact Africa Foundation", note: "formerly STiR Education" },
];

const pillars = [
  {
    name: "Recruit",
    detail: "Led by the Forum for Education NGOs in Uganda (FENU) alongside Teach For Uganda. Advocates for equitable teacher recruitment and pilots the placement and mentoring of young volunteer female STEM graduates as teachers in rural schools.",
  },
  {
    name: "Train",
    detail: "Led by the British Council alongside Edukans International Uganda and Brainwave Careers. Focuses on strengthening competency-based curriculum implementation, advancing gender-responsive pedagogy, and improving career guidance.",
  },
  {
    name: "Lead",
    detail: "Led by VVOB – education for development, alongside Promoting Equality in African Schools (PEAS) Uganda. Supports the development of effective school leadership practices across secondary schools.",
  },
  {
    name: "Motivate",
    detail: "Led by Ed Impact Africa Foundation. Enhances teacher motivation and cultivates a culture of continuous professional growth within schools.",
    highlight: true,
  },
];

const outcomes = [
  "Increased number of qualified and gender-inclusive teachers contributing to improved learning outcomes and equitable access to quality education.",
  "Improved teacher competencies and practices for effective Competency-Based Education delivery in Ugandan secondary schools.",
  "Improved utilisation of effective leadership practices by school leaders for a better teaching and learning environment.",
  "Improved teacher motivation reflected in increased satisfaction, professional growth, and retention enabled by recognition, mentorship, and career development pathways.",
];

const motivateAreas = [
  {
    title: "Scaling the Learning Improvement Cycle",
    detail:
      "To 27 local governments, increasing the reach to all districts, municipalities and cities, targeting school leaders, teachers and students in the Leaders in Teaching programme schools. Network meetings and peer observations are expected to enhance teacher skills, confidence and a sense of professional competence.",
  },
  {
    title: "Teacher continuous professional development certification",
    detail:
      "Annually certify teachers and school leaders within the Leaders in Teaching Program partner schools in the 27 local governments who engage in monthly network meetings and show evidence of applying the strategies discussed, signalling that their skills and knowledge meet recognised standards.",
  },
  {
    title: "Teacher and school leader award and recognition",
    detail:
      "A micro-innovation search within the Leaders in Teaching schools across the 27 local governments, with the best school leaders and teacher innovators showcasing their innovations on regional radio stations to share learning and affirm their contributions.",
  },
  {
    title: "Dissemination of the National Teacher Policy and Rewards and Sanctions Framework",
    detail:
      "Building clarity, trust and fairness so that teachers feel secure and respected, thereby increasing their retention.",
  },
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
        <BreadcrumbOne subtitle='Our Work' title='Leaders In Teaching Uganda Programme' />

        <div className='cm-details'>
          <div className='container'>
            <div className='row gutter-60'>
              <div className='col-12 col-xl-8'>
                <div className='cm-details__content'>
                  <div
                    className='cm-details__poster'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <img src='/assets/images/cause/program-secondary.webp' alt='Secondary school students in a Leaders in Teaching Uganda programme classroom' />
                  </div>

                  <div className='programme-facts'>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-location-dot' /> Uganda
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-calendar-days' /> June 2025 &ndash; July 2030
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-handshake' /> Funded By Mastercard Foundation
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-graduation-cap' /> Secondary Education
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-circle-check' /> Active
                    </span>
                  </div>

                  <div className='cm-group cta'>
                    <p>
                      The Leaders in Teaching Uganda Program is a five-year Mastercard Foundation initiative aimed
                      at transforming secondary education in Uganda. Implemented through a consortium and aligned
                      with the Mastercard Foundation&rsquo;s Young Africa Works strategy to transition youth into
                      dignified and fulfilling work, the programme focuses on improving the quality of teaching and
                      learning in secondary schools while promoting inclusive, gender-responsive, and innovative
                      approaches to education.
                    </p>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Goal</h3>
                    <p>
                      To improve the quality of teaching and learning in secondary schools, so that young people
                      acquire the skills and competencies needed for dignified and fulfilling work.
                    </p>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Programme Objectives</h3>
                    <div className='cm-details__list'>
                      <ul>
                        <li>
                          <i className='icon-circle-check' />
                          Attract and retain teachers, especially in remote, rural regions.
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Support improved pedagogy and delivery of relevant, competency-based curriculum.
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Improve teacher motivation and elevate the status of the teaching profession.
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Create enabling and supportive instructional environments for effective teacher practice.
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Support education leaders in formulating evidence-based policies and plans.
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Support teachers in leveraging technology to enhance teaching and learning.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Project Partners</h3>
                    <div className='cm-details__list'>
                      <ul>
                        {partners.map((partner) => (
                          <li key={partner.name}>
                            <i className='icon-circle-check' />
                            {partner.name}
                            {partner.note ? ` (${partner.note})` : ""}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Approach</h3>
                    <p>
                      The Leaders in Teaching Uganda programme is implemented in a consortium model with oversight
                      and strategic leadership provided by the Ministry of Education and Sports. Implementation is
                      anchored on four core programmatic pillars &ndash; Recruit, Train, Lead, and Motivate &ndash;
                      each led by a specialised partner organisation funded by the Mastercard Foundation.
                    </p>
                    <div className='cm-details__list'>
                      <ul>
                        {pillars.map((pillar) => (
                          <li key={pillar.name} style={pillar.highlight ? { color: "var(--quaternary-color)" } : undefined}>
                            <i className='icon-circle-check' />
                            <span>
                              <strong>{pillar.name} Pillar</strong> &ndash; {pillar.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Strengthening Teacher Motivation And Professional Growth</h3>
                    <p>
                      Under the Leaders in Teaching (LiT) Programme, Ed Impact Africa Foundation leads the Motivate
                      Pillar in close collaboration with the Ministry of Education and Sports (MoES), Directorate of
                      Education Standards and the Association of Secondary School Headteachers in Uganda. The pillar
                      aims to contribute to a motivated and professionally engaged secondary teaching workforce by
                      strengthening teachers&rsquo; intrinsic motivation, professional learning and recognition,
                      focusing on four key areas:
                    </p>
                    <div className='cm-details__list'>
                      <ul>
                        {motivateAreas.map((area) => (
                          <li key={area.title}>
                            <i className='icon-circle-check' />
                            <span>
                              <strong>{area.title}:</strong> {area.detail}
                            </span>
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

              <div className='col-12 col-xl-4'>
                <div className='cm-details__sidebar'>
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
                          Duration: June 2025 &ndash; July 2030
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Funder: Mastercard Foundation
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Sector: Secondary Education
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
                      <h4>Help Us Build A Motivated Teaching Workforce</h4>
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
            </div>
          </div>
        </div>

        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
