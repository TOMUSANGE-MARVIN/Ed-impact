import Link from "next/link";

function EventDetailsInner() {
  return (
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
                <img src='assets/images/event/poster.png' alt='Image_inner' />
              </div>
              <div className='cm-details-meta'>
                <p>
                  <i className='fa-solid fa-calendar-days' />
                  March 2026
                </p>
                <p>
                  <i className='fa-solid fa-location-dot' />
                  Uganda
                </p>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>
                  2025 Impact Evaluation Report
                </h3>
                <p>
                  Our 2025 impact evaluation demonstrates measurable
                  improvements in learning outcomes and instructional
                  practice in programme schools compared with control
                  schools &mdash; evidence that our system-led model works
                  at scale.
                </p>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>Summary</h3>
                <p>
                  Literacy performance was 73.1% in programme schools
                  compared with 57.0% in comparison schools, and numeracy
                  performance was 66.7% compared with 54.1%. Teachers
                  reported greater use of varied teaching methods, student
                  questioning, peer feedback, classroom observation, and
                  coaching. The estimated social return was £3.12 for every
                  £1 invested.
                </p>
                <div className='cm-details__list'>
                  <ul>
                    <li>
                      <i className='icon-circle-check' />
                      Improved Foundational Learning
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Stronger Teaching Practice
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Girls Matching Boys In Literacy
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Greater Government Ownership
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Peer Learning &amp; Mentoring Embedded
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      £3.12 Return Per £1 Invested
                    </li>
                  </ul>
                </div>
              </div>
              <div className='cm-img-group cta'>
                <div className='cm-img-single'>
                  <img src='assets/images/event/pp-one.png' alt='Image_inner' />
                </div>
                <div className='cm-img-single'>
                  <img src='assets/images/event/pp-two.png' alt='Image_inner' />
                </div>
              </div>
              <div className='cm-event cta'>
                <div className='cm-event-single'>
                  <Link href='/'>
                    <i className='fa-brands fa-facebook-f' />
                    Facebook
                    <img src='assets/images/shape-sc.png' alt='Image_inner' />
                  </Link>
                </div>
                <div className='cm-event-single'>
                  <Link href='/'>
                    <i className='fa-brands fa-x-twitter' />
                    Twitter
                    <img src='assets/images/shape-sc.png' alt='Image_inner' />
                  </Link>
                </div>
                <div className='cm-event-single'>
                  <Link href='/'>
                    <i className='fa-brands fa-pinterest' />
                    Pinterest
                    <img src='assets/images/shape-sc.png' alt='Image_inner' />
                  </Link>
                </div>
                <div className='cm-event-single'>
                  <Link href='/'>
                    <i className='fa-brands fa-linkedin-in' />
                    Linkedin
                    <img src='assets/images/shape-sc.png' alt='Image_inner' />
                  </Link>
                </div>
                <div className='cm-event-single'>
                  <Link href='/'>
                    <i className='fa-brands fa-stumbleupon' />
                    Tumblr
                    <img src='assets/images/shape-sc.png' alt='Image_inner' />
                  </Link>
                </div>
              </div>
              <div className='cm-map cta'>
                <iframe
                  src='https://maps.google.com/maps?q=Kampala%2C%20Uganda&output=embed'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='cm-map'
                />
              </div>
              <div
                className='blog-comment'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div
                  className='comment__form'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='comment-header mb-40'>
                    <h4 className='mt-8 fw-6'>Leave A Comment</h4>
                  </div>
                  <form action='#' method='post'>
                    <div className='form-group'>
                      <div className='input-icon'>
                        <input
                          type='text'
                          required=''
                          name='comment-name'
                          id='commentName'
                          placeholder='Your Name'
                        />
                        <i className='fa-solid fa-user' />
                      </div>
                      <div className='input-icon'>
                        <input
                          type='email'
                          required=''
                          name='comment-email'
                          id='commentEmail'
                          placeholder='Enter Email'
                        />
                        <i className='fa-regular fa-envelope' />
                      </div>
                    </div>
                    <div className='input-icon input-icon-alt'>
                      <textarea
                        name='comment-message'
                        id='commentMessage'
                        cols={30}
                        rows={10}
                        placeholder='Type Your Comments...'
                        defaultValue={""}
                      />
                      <i className='fa-regular fa-comments' />
                    </div>
                    <div className='cta mt-40'>
                      <div className='btn-wrapper'>
                        <button type='submit' className='btn--secondary'>
                          Submit Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
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
                  <h5>search here</h5>
                </div>
                <form action='#' method='post'>
                  <input
                    type='text'
                    name='search-product'
                    id='searchProduct'
                    placeholder='Search Here...'
                    required=''
                  />
                  <button type='submit'>
                    <i className='fa-solid fa-magnifying-glass' />
                  </button>
                </form>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Recent Posts</h5>
                </div>
                <div className='cm-sidebar-post'>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/insights'>
                        <img
                          src='assets/images/blog/ph-one.png'
                          alt='Image_inner'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>November 19, 2024</span>
                      </p>
                      <p>
                        <Link href='/insights'>
                          Where Innovation Meets Foundation
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/insights'>
                        <img
                          src='assets/images/blog/ph-two.png'
                          alt='Image_inner'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>November 19, 2024</span>
                      </p>
                      <p>
                        <Link href='/insights'>
                          Where Innovation Meets Foundation
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/insights'>
                        <img
                          src='assets/images/blog/three.png'
                          alt='Image_inner'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>November 22, 2024</span>
                      </p>
                      <p>
                        <Link href='/insights'>
                          Structures That Stand, Dreams That Soar
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Tags</h5>
                </div>
                <div className='tag-wrapper'>
                  <Link href='/data-evidence'>Teacher Motivation</Link>
                  <Link href='/data-evidence'>System Strengthening</Link>
                  <Link href='/data-evidence'>CPD</Link>
                  <Link href='/data-evidence'>Evidence &amp; Research</Link>
                  <Link href='/data-evidence'>Policy</Link>
                  <Link href='/data-evidence'>Ubuntu</Link>
                </div>
              </div>
              <div
                className='cm-sidebar-overview'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-logo'>
                  <img src='assets/images/event/logo.png' alt='Image_inner' />
                </div>
                <div className='cm-content'>
                  <p>Africa's Systems Reform Partner</p>
                  <h4>Because Every Child Deserves A System That Works</h4>
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
                <div
                  className='parallax-image-wrap'
                  style={{ overflow: "hidden" }}
                >
                  <div className='parallax-image-inner'>
                    <img
                      src='assets/images/event/overview.png'
                      alt='Image_inner'
                      className='parallax-image'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsInner;
