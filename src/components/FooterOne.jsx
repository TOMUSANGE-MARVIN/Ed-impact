import Link from "next/link";

const FooterOne = ({ settings }) => {
  const logoLightUrl = "/assets/images/logo-icon.png";
  const email = settings?.contact?.email || "info@edimpactafricafoundation.org";
  const phone = settings?.contact?.phoneOne || "+256 414 696609";
  const location = settings?.contact?.location || "Kampala, Uganda";
  const mapQuery = settings?.contact?.mapQuery || location;
  const social = settings?.social || {};
  return (
    <>
      <footer className='footer-two'>
        <div className='container'>
          <div className='row align-items-center gutter-30'>
            <div className='col-12 col-lg-7 col-xxl-6'>
              <div className='footer-two__newsletter-content'>
                <h3 className='title-animation_inner'>
                  Subscribe to Our Newsletter
                </h3>
                <p>Policy briefs, evidence summaries and updates from across Africa</p>
              </div>
            </div>
            <div className='col-12 col-lg-5 col-xxl-5 offset-xxl-1'>
              <div className='footer-two__newsletter-form'>
                <form action='#' method='post'>
                  <input
                    type='email'
                    required=''
                    name='subscribe-email'
                    id='subscribeEmail'
                    placeholder='Enter Email'
                  />
                  <button
                    type='submit'
                    aria-label='subscribe to our newsletter'
                    title='subscribe to our newsletter'
                    className='btn--primary'
                  >
                    {" "}
                    <i className='fa-solid fa-paper-plane' />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <hr className='divider' />
            </div>
          </div>
          <div className='row gutter-60'>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='footer-two__widget-logo'>
                  <Link href='/'>
                    <img src={logoLightUrl} alt='Ed Impact Africa Foundation' />
                  </Link>
                </div>
                <div className='footer-two__widget-content'>
                  <p>
                    Ed Impact Africa Foundation partners with governments and
                    communities to strengthen education systems across
                    Africa &mdash; the successor to STIR Education Uganda.
                  </p>
                  <div className='social'>
                    <Link
                      href={social.facebook || 'https://www.facebook.com'}
                      target='_blank'
                      aria-label='share us on facebook'
                      title='facebook'
                    >
                      <i className='fa-brands fa-facebook-f' />
                    </Link>
                    <Link
                      href={social.youtube || 'https://www.youtube.com'}
                      target='_blank'
                      aria-label='share us on youtube'
                      title='youtube'
                    >
                      <i className='fa-brands fa-youtube' />
                    </Link>
                    <Link
                      href={social.twitterX || 'https://x.com'}
                      target='_blank'
                      aria-label='share us on twitter'
                      title='twitter'
                    >
                      <i className='fa-brands fa-x-twitter' />
                    </Link>
                    <Link
                      href={social.linkedin || 'https://www.linkedin.com'}
                      target='_blank'
                      aria-label='share us on linkedin'
                      title='linkedin'
                    >
                      <i className='fa-brands fa-linkedin-in' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-2 offset-xl-1'>
              <div
                className='footer-two__widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Quick Links</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content'>
                  <ul>
                    <li>
                      <Link href='/about-us'>
                        <i className='fa-solid fa-arrow-right' />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href='/leadership-board'>
                        <i className='fa-solid fa-arrow-right' />
                        Leadership &amp; Board
                      </Link>
                    </li>
                    <li>
                      <Link href='/data-evidence'>
                        <i className='fa-solid fa-arrow-right' />
                        Insights
                      </Link>
                    </li>
                    <li>
                      <Link href='/faq'>
                        <i className='fa-solid fa-arrow-right' />
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href='/careers'>
                        <i className='fa-solid fa-arrow-right' />
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact-us'>
                        <i className='fa-solid fa-arrow-right' />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget footer-two__widget--alternate'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={400}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Our Programs</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content'>
                  <ul>
                    <li>
                      <Link href='/our-work/1'>
                        <i className='fa-solid fa-arrow-right' />
                        National Secondary CPD
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-work/2'>
                        <i className='fa-solid fa-arrow-right' />
                        Primary Teacher Colleges
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-work/3'>
                        <i className='fa-solid fa-arrow-right' />
                        Evidence &amp; Policy Influence
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-work/4'>
                        <i className='fa-solid fa-arrow-right' />
                        System Strengthening
                      </Link>
                    </li>
                    <li>
                      <Link href='/partner-with-us'>
                        <i className='fa-solid fa-arrow-right' />
                        Partner With Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget footer-two__widget--alternate'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Get In Touch</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content footer-two__widget-content--contact'>
                  <ul>
                    <li>
                      <Link
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                        target='_blank'
                      >
                        <i className='fa-solid fa-location-dot' />
                        {location}
                      </Link>
                    </li>
                    <li>
                      <Link href={`tel:${phone.replace(/\s/g, "")}`}>
                        <i className='fa-solid fa-phone' />
                        {phone}
                      </Link>
                    </li>
                    <li>
                      <Link href={`mailto:${email}`}>
                        <i className='fa-regular fa-envelope' />
                        {email}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-two__copyright'>
          <div className='container'>
            <div className='row align-items-center gutter-12'>
              <div className='col-12 col-lg-6'>
                <div className='footer-two__copyright-inner text-center text-lg-start'>
                  <p>
                    Copyright © <span id='copyrightYear' />{" "}
                    <Link href='/'>{settings?.siteName || "Ed Impact Africa Foundation"}</Link>. All rights reserved.
                  </p>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='footer__bottom-left'>
                  <ul className='footer__bottom-list justify-content-center justify-content-lg-end'>
                    <li>
                      <Link href='/terms-conditions'>
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href='/privacy-policy'>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href='/privacy-policy'>Cookie Settings</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sprade' data-aos='zoom-in' data-aos-duration={1000}>
          <img
            src='/assets/images/sprade.png'
            alt='Image_inner'
            className='base-img'
          />
        </div>
        <div
          className='sprade-light'
          data-aos='zoom-in'
          data-aos-duration={1000}
        >
          <img src='/assets/images/sprade-light.png' alt='Image_inner' />
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
