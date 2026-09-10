import Link from "next/link";

const CauseDetailsInner = () => {
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
                  Delivering since 2014
                </p>
                <p>
                  <i className='fa-solid fa-location-dot' />
                  Uganda, expanding across East Africa
                </p>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>
                  Teacher-Led, System-Wide Reform
                </h3>
                <p>
                  A child cannot love learning without a teacher who loves
                  teaching. This intervention builds the capacity of
                  teachers, school leaders and officials together &mdash;
                  hinged on the principles of intrinsic motivation,
                  autonomy, mastery and purpose &mdash; so that gains take
                  root and stay embedded in the system long after our
                  direct involvement ends.
                </p>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>Summary</h3>
                <p>
                  We design, deliver, monitor and quality-assure this
                  intervention through our five program anchors: teacher
                  intrinsic motivation, professional development training,
                  system-led programming, impact sustainability, and
                  national scale &mdash; delivered through government-linked
                  structures and teacher education institutions.
                </p>
                <div className='cm-details__list'>
                  <ul>
                    <li>
                      <i className='icon-circle-check' />
                      Peer-Led Feedback &amp; Reflection
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Classroom Observation Cycles
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      District-Level Ownership
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Evidence-Informed Adjustments
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      National Scale Delivery
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Sustainable, Local Capacity
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
                      <Link href='/blog-details'>
                        <img
                          src='assets/images/blog/ph-one.png'
                          alt='Image_inner'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>March 12, 2026</span>
                      </p>
                      <p>
                        <Link href='/blog-details'>
                          Why Teacher Motivation Matters More Than Teacher
                          Training
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/blog-details'>
                        <img
                          src='assets/images/blog/ph-two.png'
                          alt='Image_inner'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>February 24, 2026</span>
                      </p>
                      <p>
                        <Link href='/blog-details'>
                          What The 2025 Impact Evaluation Tells Us About
                          Learning Outcomes
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/blog-details'>
                        <img
                          src='assets/images/blog/three.png'
                          alt='Image_inner'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>January 30, 2026</span>
                      </p>
                      <p>
                        <Link href='/blog-details'>
                          Localisation In Practice: From STIR Education To
                          Ed Impact Africa
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
                  <Link href='/blog-list'>Teacher Motivation</Link>
                  <Link href='/blog-list'>System Strengthening</Link>
                  <Link href='/blog-list'>CPD</Link>
                  <Link href='/blog-list'>Evidence &amp; Research</Link>
                  <Link href='/blog-list'>Policy</Link>
                  <Link href='/blog-list'>Ubuntu</Link>
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
                    href='/donate-us'
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
};

export default CauseDetailsInner;
