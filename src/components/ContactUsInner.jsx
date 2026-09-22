const ContactUsInner = ({ settings }) => {
  const email = settings?.contact?.email || "info@edimpactafrica.org";
  const partnershipsEmail = settings?.contact?.partnershipsEmail || "partnerships@edimpactafrica.org";
  const phoneOne = settings?.contact?.phoneOne || "+256 781 064 668";
  const phoneTwo = settings?.contact?.phoneTwo || "+256 414 696609";
  const location = settings?.contact?.location || "Kampala, Uganda";
  const mapQuery = settings?.contact?.mapQuery || location;
  const social = settings?.social || {};

  return (
    <section className='contact-main volunteer'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-6'>
            <div className='contact__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-education' /> Get In Touch
                </span>
                <h2 className='title-animation_inner'>Contact Us</h2>
                <p>
                  We'd love to hear from you &mdash; reach out for
                  partnerships, inquiries, or support.
                </p>
              </div>
              <div className='contact-main__inner cta'>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='content'>
                    <h6>Location</h6>
                    <p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {location}
                      </a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='content'>
                    <h6>Phone</h6>
                    <p>
                      <a href={`tel:${phoneOne.replace(/\s/g, "")}`}>{phoneOne}</a>
                    </p>
                    <p>
                      <a href={`tel:${phoneTwo.replace(/\s/g, "")}`}>{phoneTwo}</a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-envelope' />
                  </div>
                  <div className='content'>
                    <h6>Email</h6>
                    <p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                    <p>
                      <a href={`mailto:${partnershipsEmail}`}>{partnershipsEmail}</a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-share-nodes' />
                  </div>
                  <div className='content'>
                    <h6>Social</h6>
                    <div className='social'>
                      <a
                        href={social.facebook || 'https://www.facebook.com/'}
                        target='_blank'
                        aria-label='share us on facebook'
                        title='facebook'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-facebook-f' />
                      </a>
                      <a
                        href={social.youtube || 'https://www.youtube.com/'}
                        target='_blank'
                        aria-label='share us on youtube'
                        title='youtube'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-youtube' />
                      </a>
                      <a
                        href={social.twitterX || 'https://x.com/'}
                        target='_blank'
                        aria-label='share us on twitter'
                        title='twitter'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-x-twitter' />
                      </a>
                      <a
                        href={social.linkedin || 'https://www.linkedin.com/'}
                        target='_blank'
                        aria-label='share us on linkedin'
                        title='linkedin'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-linkedin-in' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact-main__thumb cta' style={{ overflow: "hidden", borderRadius: "16px" }}>
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                  style={{ border: 0, width: "100%", minHeight: "280px" }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Ed Impact Africa Foundation location'
                />
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6'>
            <div
              className='contact__form volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='volunteer__form-content'>
                <h4 className='title-animation_inner'>Fill Up The Form</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form action='#' method='post' className='cta'>
                <div className='input-single'>
                  <input
                    type='text'
                    name='full-name'
                    id='fullName'
                    placeholder='Enter Name'
                    required=''
                  />
                  <i className='fa-solid fa-user' />
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
                <div className='input-single'>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    required=''
                  />
                  <i className='fa-solid fa-heading' />
                </div>
                <div className='input-single alter-input'>
                  <textarea
                    name='contact-message'
                    id='contactMessage'
                    placeholder='Your Message...'
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
                    Send Message <i className='fa-solid fa-arrow-right' />
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

export default ContactUsInner;
