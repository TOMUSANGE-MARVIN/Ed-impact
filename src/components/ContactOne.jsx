const ContactOne = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='row justify-content-end'>
          <div className='col-12 col-md-10 col-xl-7'>
            <div className='contact__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-education' />
                  We'd Love To Hear From You
                </span>
                <h2 className='title-animation_inner'>
                  Send Us A <span>Message</span>
                </h2>
              </div>
              <div
                className='contact__form cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <form action='#' method='post'>
                  <div className='input-group'>
                    <div className='input-single'>
                      <input
                        type='text'
                        name='contact-name'
                        id='contactName'
                        placeholder='your name...'
                      />
                      <i className='fa-solid fa-user' />
                    </div>
                    <div className='input-single'>
                      <input
                        type='email'
                        name='contact-email'
                        id='contactEmail'
                        placeholder='your email...'
                      />
                      <i className='fa-solid fa-paper-plane' />
                    </div>
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='contact-subject'
                      id='contactSubject'
                      placeholder='subject...'
                    />
                    <i className='fa-solid fa-heading' />
                  </div>
                  <div className='input-single alter-input'>
                    <textarea
                      name='contact-message'
                      id='contactMessage'
                      placeholder='your message...'
                      defaultValue={""}
                    />
                    <i className='fa-solid fa-envelope' />
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
      </div>
      <div className='contact-bg'>
        <img
          src='assets/images/contact/contact-bg.webp'
          alt=''
          className='parallax-image'
        />
      </div>
      <div
        className='shape-left'
        data-aos='fade-down'
        data-aos-duration={1000}
        data-aos-delay={300}
      >
        <img
          src='assets/images/cta/shape-left.webp'
          alt=''
          className='base-img'
        />
      </div>
    </section>
  );
};

export default ContactOne;
