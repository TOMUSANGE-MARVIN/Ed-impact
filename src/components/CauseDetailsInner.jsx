import Link from "next/link";

const defaultProgram = {
  title: "Teacher Motivation",
  tag: "Motivation",
  description: "Instilling autonomy, mastery and purpose so teachers rediscover the love of teaching.",
  statOneLabel: "Reach",
  statOneValue: "199,856 teachers",
  statTwoLabel: "Coverage",
  statTwoValue: "National",
};

const CauseDetailsInner = ({ program: currentProgram, programs = [] }) => {
  const program = currentProgram || programs[0] || defaultProgram;
  const otherPrograms = programs.filter((p) => p.id !== program.id);

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
                <img src={program.image?.url || "/assets/images/event/poster.png"} alt='Image_inner' />
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
                <h3 className='title-animation_inner'>{program.title || defaultProgram.title}</h3>
                <p>{program.description || defaultProgram.description}</p>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>At A Glance</h3>
                <div className='cm-details__list'>
                  <ul>
                    <li>
                      <i className='icon-circle-check' />
                      {program.statOneLabel || defaultProgram.statOneLabel}: {program.statOneValue || defaultProgram.statOneValue}
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      {program.statTwoLabel || defaultProgram.statTwoLabel}: {program.statTwoValue || defaultProgram.statTwoValue}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='cm-img-group cta'>
                <div className='cm-img-single'>
                  <img src='/assets/images/event/pp-one.png' alt='Image_inner' />
                </div>
                <div className='cm-img-single'>
                  <img src='/assets/images/event/pp-two.png' alt='Image_inner' />
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
                  <h5>Other Interventions</h5>
                </div>
                <div className='cm-sidebar-post'>
                  {(otherPrograms.length ? otherPrograms : programs).slice(0, 3).map((p) => (
                    <div className='single-item' key={p.id}>
                      <div className='thumb'>
                        <Link href={`/our-work/${p.id}`}>
                          <img src={p.image?.url || "/assets/images/cause/one.png"} alt='Image_inner' />
                        </Link>
                      </div>
                      <div className='content'>
                        <p>
                          <i className='fa-solid fa-tags' /> <span>{p.tag}</span>
                        </p>
                        <p>
                          <Link href={`/our-work/${p.id}`}>{p.title}</Link>
                        </p>
                      </div>
                    </div>
                  ))}
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
                  <Link href='/our-work'>{program.tag || defaultProgram.tag}</Link>
                </div>
              </div>
              <div
                className='cm-sidebar-overview'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-logo'>
                  <img src='/assets/images/event/logo.png' alt='Image_inner' />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseDetailsInner;
