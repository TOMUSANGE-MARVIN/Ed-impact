import Link from "next/link";

const EventInner = () => {
  return (
    <section className='event event-alt'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-documents' />
                Insight Production
              </span>
              <h2 className='title-animation_inner'>
                Annual <span>Reports</span> &amp; Updates
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-30'>
          <div className='col-12 col-lg-6 col-xl-7'>
            <div
              className='event__single-wrapper'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='event__single van-tilt'>
                <div className='event__single-thumb'>
                  <img src='assets/images/event/one.png' alt='Image_inner' />
                </div>
                <div className='event__content'>
                  <span>March 2026</span>
                  <h4>
                    <Link href='/event-details'>
                      2025 Impact Evaluation Report: Learning Outcomes Across
                      Programme Schools
                    </Link>
                  </h4>
                  <p>
                    <i className='fa-solid fa-location-dot' /> Uganda
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 col-xl-5'>
            <div
              className='event__single-wrapper'
              data-aos='fade-left'
              data-aos-duration={1000}
            >
              <div className='event__single event-single-alt van-tilt'>
                <div className='event__single-thumb'>
                  <img src='assets/images/event/two.png' alt='Image_inner' />
                </div>
                <div className='event__content'>
                  <span>February 2026</span>
                  <h4>
                    <Link href='/event-details'>
                      Annual Report 2025: Localisation &amp; Scale
                    </Link>
                  </h4>
                  <p>
                    <i className='fa-solid fa-location-dot' /> Uganda
                  </p>
                </div>
              </div>
            </div>
            <div
              className='event__single-wrapper'
              data-aos='fade-left'
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <div className='event__single  event-single-alt van-tilt'>
                <div className='event__single-thumb'>
                  <img src='assets/images/event/three.png' alt='Image_inner' />
                </div>
                <div className='event__content'>
                  <span>January 2026</span>
                  <h4>
                    <Link href='/event-details'>
                      From STIR Education To Ed Impact Africa: A Transition
                      Update
                    </Link>
                  </h4>
                  <p>
                    <i className='fa-solid fa-location-dot' /> Uganda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div
              className='pagination-wrapper'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <ul className='pagination main-pagination'>
                <li>
                  <button>
                    <i className='fa-solid fa-angles-left' />
                  </button>
                </li>
                <li>
                  <Link href='/blog-list'>1</Link>
                </li>
                <li>
                  <Link href='/blog-list' className='active'>
                    2
                  </Link>
                </li>
                <li>
                  <Link href='/blog-list'>3</Link>
                </li>
                <li>
                  <button>
                    <i className='fa-solid fa-angles-right' />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='spade'>
        <img
          src='assets/images/blog/spade-base.png'
          alt='Image_inner'
          className='base-img'
        />
      </div>
    </section>
  );
};

export default EventInner;
