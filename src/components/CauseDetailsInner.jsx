import { mediaSrc } from "@/lib/image";
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
  const paragraphs = (program.body || "").split(/\n\s*\n/).filter(Boolean);

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
                <img src={mediaSrc(program.image?.url) || "/assets/images/event/poster.webp"} alt={program.image?.alt || program.title} />
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
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
                    {program.statThreeValue ? (
                      <li>
                        <i className='icon-circle-check' />
                        {program.statThreeLabel}: {program.statThreeValue}
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>
              <div className='cm-img-group cta'>
                <div className='cm-img-single'>
                  <img src='/assets/images/event/pp-one.webp' alt='' />
                </div>
                <div className='cm-img-single'>
                  <img src='/assets/images/event/pp-two.webp' alt='' />
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
                        <Link href={`/programmes/${p.id}`}>
                          <img src={mediaSrc(p.image?.url) || "/assets/images/cause/one.webp"} alt={p.image?.alt || p.title} />
                        </Link>
                      </div>
                      <div className='content'>
                        <p>
                          <i className='fa-solid fa-tags' /> <span>{p.tag}</span>
                        </p>
                        <p>
                          <Link href={`/programmes/${p.id}`}>{p.title}</Link>
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
                  <Link href='/programmes'>{program.tag || defaultProgram.tag}</Link>
                </div>
              </div>
              <div
                className='cm-sidebar-overview'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-logo'>
                  <img src='/assets/images/event/logo.webp' alt='' />
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
