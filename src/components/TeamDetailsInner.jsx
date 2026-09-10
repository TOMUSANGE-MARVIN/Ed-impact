import Link from "next/link";

const TeamDetailsInner = () => {
  return (
    <section className='team-details'>
      <div className='container'>
        <div className='row gutter-40 align-items-center'>
          <div className='col-12 col-lg-6 col-xl-5'>
            <div
              className='team-details__thumb'
              data-aos='zoom-in'
              data-aos-duration={1000}
            >
              <img src='assets/images/team/one.png' alt='Modern Karema Musiimenta' />
            </div>
          </div>
          <div className='col-12 col-lg-6 col-xl-7'>
            <div
              className='team-details__content'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='team-details__meta'>
                <h4 className='title-animation_inner'>Modern Karema Musiimenta</h4>
                <p className='designation'>Chief Executive Officer</p>
                <div className='social'>
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    aria-label='share us on facebook'
                    title='facebook'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-facebook-f' />
                  </a>
                  <a
                    href='https://www.youtube.com/'
                    target='_blank'
                    aria-label='share us on youtube'
                    title='youtube'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-youtube' />
                  </a>
                  <a
                    href='https://x.com/'
                    target='_blank'
                    aria-label='share us on twitter'
                    title='twitter'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-x-twitter' />
                  </a>
                  <a
                    href='https://www.linkedin.com/'
                    target='_blank'
                    aria-label='share us on linkedin'
                    title='linkedin'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-linkedin-in' />
                  </a>
                </div>
                <p>
                  Modern leads Ed Impact Africa Foundation's transition from
                  STIR Education Uganda, drawing on his experience as
                  Uganda Country Director-STIR Education and Head of
                  National Programs. He is a Board Member and Chairperson
                  of the Membership Committee at the Regional Education
                  Learning Initiative (RELI Africa).
                </p>
              </div>
              <div className='my-word'>
                <h5>
                  "We Strengthen What Already Exists, Aligning With
                  National Policy To Ensure Scalable, Sustainable
                  Educational Development."
                </h5>
              </div>
              <div className='progress-wrapper'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <p>Literacy Improvement</p>
                    <div className='progress-bar-wrapper' data-percent='73%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "73%" }}
                        >
                          <span className='percent-value'>73%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <p>Numeracy Improvement</p>
                    <div className='progress-bar-wrapper' data-percent='67%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "67%" }}
                        >
                          <span className='percent-value'>67%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team-details__list'>
                <ul>
                  <li>
                    <i className='icon-circle-check' />
                    Former Uganda Country Director, STIR Education
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Head of National Programs &amp; Strategic Partnerships
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Board Member &amp; Chairperson, RELI Africa
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Chairperson, School Management Committee, Isingiro
                  </li>
                </ul>
              </div>
              <div className='team-details__cta cta'>
                <Link
                  href='/donate-us'
                  aria-label='partner with us'
                  title='partner with us'
                  className='btn--primary'
                >
                  {" "}
                  Partner With Us <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div
              className='about-me'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <h4 className='title-animation_inner'>About Me</h4>
              <p>
                Before joining Ed Impact Africa Foundation, Modern held
                leadership roles across the education and development
                sector in Uganda, including General Manager at Jobconnect
                Ltd and Branch Operations Supervisor at NSSF Uganda. His
                career reflects a consistent thread: building institutions
                that outlast any single project, and putting local
                ownership at the centre of reform. Today, he leads Ed
                Impact Africa Foundation through its transition from a
                country office of a global INGO into an independent,
                locally governed Pan-African organisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsInner;
