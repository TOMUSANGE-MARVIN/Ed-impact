import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "School-Based Teacher Professional Development",
  description:
    "A paid partnership for schools in Uganda: school-based teacher professional development, professional learning communities, peer observation and CPD certificates.",
  path: "/social-enterprise",
});

const offer = [
  {
    title: "Customised training needs assessment",
    detail:
      "We don't believe in one size fits all. Annually, every participating school receives a dedicated assessment to identify the unique professional development needs of your teachers. This ensures every training session is relevant, targeted and impactful.",
  },
  {
    title: "3 Professional Learning Community sessions (2hrs each)",
    detail:
      "Each term, your Deputy and Director of Studies will be empowered to deliver 3 structured, high quality teacher training sessions – one per month. These sessions are designed to be immediately practical, equipping teachers with strategies they can apply in the classroom the very next day.",
  },
  {
    title: "In classroom implementation with peer observation (80 minutes each)",
    detail:
      "Learning doesn't stop in the training room. Every participating teacher applies what they have learned in live classroom lessons, supported by structured peer observation and meaningful feedback. This cycle of learn, apply, reflect is what drives lasting improvement in teaching quality.",
  },
  {
    title: "Annual CPD certification",
    detail:
      "Every teacher and headteacher who completes the program receives a certificate of merit, verified against attendance and implementation records and fully aligned with the National Teacher Policy and the Uganda Teachers Bill.",
  },
  {
    title: "School level monitoring and impact evaluation",
    detail: "Our team conducts ongoing monitoring to ensure you see a tangible return on your investment in classroom quality.",
  },
];

const asks = [
  "Register and enroll your school in the programme.",
  "Champion implementation – ensure every participating teacher applies their learning in the classroom and takes part in peer observation.",
  "Provide leadership oversight – as the headteacher, actively ensure your teachers and learners are gaining full value from the programme.",
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
        <BreadcrumbOne subtitle='Our Work' title='School-Based Teacher Professional Development' />

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
                          Model: Service-for-Pay
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Investment: UGX 1,000,000 Per Term
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Sector: Secondary &amp; Primary Schools
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Status: Enrolling
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
                      <p>Spaces Are Limited</p>
                      <h4>Secure Your School&rsquo;s Place</h4>
                    </div>
                    <div className='cm-cta'>
                      <a
                        href='https://forms.gle/fBBanc5ouGoVh9yC7'
                        target='_blank'
                        rel='noreferrer'
                        className='btn--primary'
                      >
                        Register Your School <i className='fa-solid fa-arrow-right' />
                      </a>
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
                    <img src='/assets/images/banner/banner-four-bg.webp' alt='A teacher coaching students during a classroom lesson' />
                  </div>

                  <div className='programme-facts'>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-location-dot' /> Uganda
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-sack-dollar' /> UGX 1,000,000 Per Term
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-handshake' /> Service-for-Pay Model
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-graduation-cap' /> Secondary &amp; Primary Schools
                    </span>
                    <span className='programme-facts__item'>
                      <i className='fa-solid fa-circle-check' /> Enrolling
                    </span>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Empowering Excellence</h3>
                    <p>
                      <em>Transforming Classrooms. Inspiring Teachers. Delivering Results.</em>
                    </p>
                    <p>
                      Since 2014, STiR Education has been a cornerstone of teacher development in Uganda, partnering
                      with the Ministry of Education and Sports across 155 local governments. As part of our global
                      transition toward localised expertise, STiR Education Uganda is becoming{" "}
                      <strong>Ed Impact Africa Foundation</strong>. While our name is changing, our commitment to
                      intrinsic motivation and pedagogical excellence is stronger than ever.
                    </p>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>The Opportunity &ndash; A Premium Partnership For Visionary Schools</h3>
                    <p>
                      We are inviting a select group of schools to join our exclusive Service-for-Pay Model. This is
                      not just a training programme, it is a commitment to becoming a centre of educational
                      excellence. By joining this cohort, your school takes full ownership of teacher continuous
                      professional development tailored specifically to your unique needs.
                    </p>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Our Exclusive Offer</h3>
                    <p>
                      We provide a comprehensive, data-driven support system designed to turn your teaching staff
                      into changemakers.
                    </p>
                    <div className='cm-details__list'>
                      <ul>
                        {offer.map((item) => (
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
                    <h3 className='title-animation_inner'>What We Ask Of You</h3>
                    <p>
                      Our partnership model is built on shared commitment. To get the most from this programme, we
                      ask that your school:
                    </p>
                    <div className='cm-details__list'>
                      <ul>
                        {asks.map((ask) => (
                          <li key={ask}>
                            <i className='icon-circle-check' />
                            {ask}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      The schools that thrive in this programme are the ones where leadership is engaged, curious
                      and committed to continuous improvement.
                    </p>
                  </div>

                  <div className='programme-outcomes'>
                    <h3>Your Investment In Excellence</h3>
                    <p style={{ color: "var(--white)", opacity: 0.92, marginTop: 0 }}>
                      To maintain the high quality of this specialised service, participating schools contribute{" "}
                      <strong>UGX 1,000,000 per term (UGX 3,000,000 per year)</strong>. This is an investment in your
                      teachers, your learners and your school&rsquo;s reputation for excellence.
                    </p>
                  </div>

                  <div className='cm-group cta' style={{ marginTop: 40 }}>
                    <h3 className='title-animation_inner'>Ready To Join?</h3>
                    <p>
                      Spaces are strictly limited. We encourage you to register early to secure your school&rsquo;s
                      place in this transformative programme.
                    </p>
                    <p>
                      <a
                        href='https://forms.gle/fBBanc5ouGoVh9yC7'
                        target='_blank'
                        rel='noreferrer'
                        className='btn--primary'
                      >
                        Register Your School <i className='fa-solid fa-arrow-right' />
                      </a>
                    </p>
                    <p>
                      For enquiries, contact Oola Lorna Peace Precious on{" "}
                      <a href='mailto:olpprecious@stireducation.org'>olpprecious@stireducation.org</a> or through
                      the phone contact +256 785 084295 / +256 752 686889.
                    </p>
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
