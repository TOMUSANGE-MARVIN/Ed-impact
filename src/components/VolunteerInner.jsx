const defaultCareers = {
  whyWorkTitle: "Why Work With Us",
  whyWorkText:
    "At Ed Impact Africa Foundation, you'll work alongside governments, school leaders and teachers to strengthen education systems across Africa — reaching 199,856 teachers and 5,892,477 learners today, with more to come as we scale beyond Uganda.",
  reasons: [
    { text: "Meaningful impact at national scale" },
    { text: "Work alongside governments, schools and communities" },
    { text: "Grow with a pan-African organisation" },
    { text: "A collaborative, Ubuntu-driven culture" },
  ],
  openPositionsText:
    "We don't have any open positions right now. Check back soon, or send us your CV using the form and we'll reach out when a role matching your experience opens up.",
  internshipsText:
    "We welcome enquiries from early-career professionals and volunteers interested in education systems reform. Tell us about your interest in the form and we'll get in touch when an opportunity fits.",
  diversityText:
    "Guided by Ubuntu, we are committed to equal opportunity and inclusive hiring — building a team as diverse as the communities we serve.",
};

const VolunteerInner = ({ careers = defaultCareers }) => {
  const reasons = careers?.reasons?.length ? careers.reasons : defaultCareers.reasons;

  return (
    <section className='volunteer'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-6'>
            <div className='volunteer__content'>
              <div className='section__content'>
                <span className='sub-title'>
                  <i className='icon-education' /> Careers &amp; Volunteering
                </span>
                <h2 className='title-animation_inner'>{careers?.whyWorkTitle || defaultCareers.whyWorkTitle}</h2>
                <p>{careers?.whyWorkText || defaultCareers.whyWorkText}</p>
              </div>
              <div className='team-details__list'>
                <ul>
                  {reasons.map((reason, index) => (
                    <li key={index}>
                      <i className='icon-circle-check' />
                      {reason.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='section__content'>
                <h4 className='title-animation_inner'>Open Positions</h4>
                <p>{careers?.openPositionsText || defaultCareers.openPositionsText}</p>
              </div>
              <div className='section__content'>
                <h4 className='title-animation_inner'>
                  Internships &amp; Volunteering
                </h4>
                <p>{careers?.internshipsText || defaultCareers.internshipsText}</p>
              </div>
              <div className='section__content'>
                <h4 className='title-animation_inner'>
                  Diversity &amp; Inclusion
                </h4>
                <p>{careers?.diversityText || defaultCareers.diversityText}</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6'>
            <div
              className='volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='volunteer__form-content'>
                <h4 className='title-animation_inner'>Express Your Interest</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form action='#' method='post' className='cta'>
                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='c-name'
                      id='cName'
                      placeholder='First Name'
                      required=''
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='c-lastname'
                      id='clastName'
                      placeholder='Last Name'
                      required=''
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                </div>
                <div className='input-single'>
                  <input
                    type='email'
                    name='c-email'
                    id='cEmail'
                    placeholder='Enter Email'
                    required=''
                  />
                  <i className='fa-solid fa-envelope' />
                </div>
                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='phone-number'
                      id='phoneNumber'
                      placeholder='Phone Number'
                      required=''
                    />
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='profession'
                      id='profession'
                      placeholder='Area of Interest'
                      required=''
                    />
                    <i className='fa-solid fa-user-tie' />
                  </div>
                </div>
                <div className='input-single alter-input'>
                  <textarea
                    name='contact-message'
                    id='contactMessage'
                    placeholder='Tell us about your interest or attach a note about your CV...'
                    defaultValue={""}
                  />
                  <i className='fa-solid fa-comments' />
                </div>
                <div className='form-cta'>
                  <button
                    type='submit'
                    aria-label='submit message'
                    title='submit message'
                    className='btn--primary'
                  >
                    Submit Now <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerInner;
