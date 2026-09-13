const defaultApproach = {
  subtitle: "Our Approach",
  title: "Our Theory of Change",
  intro:
    "Strengthening education systems. Advancing child wellbeing and education equity. Transforming lives. Our theory of change maps how motivated education actors, stronger practice and better learning environments connect to improved equity and quality for every learner.",
  impactLabel: "Our Ultimate Impact",
  impactText:
    "A Uganda where all children access, stay in, and experience quality, equitable and relevant education that enables them to thrive and contribute productively to their families, communities and country.",
  outcomeLabel: "Long-Term Outcome",
  outcomeText:
    "Improved education equity and quality for all learners through stronger education systems, motivated education actors, inclusive school environments, evidence-informed practice, and targeted responses to cross-cutting barriers to learning and wellbeing.",
  pathways: [
    {
      title: "Government Ownership & System Sustainability",
      text: "Ministry of Education and Sports provides policy alignment, legitimacy and quality assurance, while district local governments own and sustain school improvement routines.",
    },
    {
      title: "Evidence, Research & Policy Influence",
      text: "We are a research producer focused on education systems strengthening, translating evidence into policy briefs, tools, dashboards and learning products.",
    },
    {
      title: "Institutional Strength & Localisation",
      text: "Local board, leadership and accountability, strong finance, HR and operational systems, local fundraising and brand credibility.",
    },
    {
      title: "Social Enterprise & Financial Sustainability",
      text: "Paid teacher training for interested private and government schools generates unrestricted income, supporting continuity, innovation and scale.",
    },
  ],
  diagramAlt: "Ed Impact Africa Foundation Theory of Change diagram",
};

const ApproachOne = ({ approach = defaultApproach }) => {
  const data = { ...defaultApproach, ...(approach || {}) };
  const pathways = data.pathways?.length ? data.pathways : defaultApproach.pathways;

  return (
    <section className='approach' id='our-approach'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-xl-8'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-education' />
                {data.subtitle}
              </span>
              <h2 className='title-animation_inner'>{data.title}</h2>
              <p>{data.intro}</p>
            </div>
          </div>
        </div>

        <div className='row gutter-30'>
          <div className='col-12 col-lg-6'>
            <div
              className='approach__statement approach__statement--impact'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='approach__statement-label'>{data.impactLabel}</span>
              <p>{data.impactText}</p>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div
              className='approach__statement approach__statement--outcome'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={150}
            >
              <span className='approach__statement-label'>{data.outcomeLabel}</span>
              <p>{data.outcomeText}</p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <figure
              className='approach__diagram'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <img
                src='/assets/images/approach/theory-of-change.webp'
                alt={data.diagramAlt}
              />
              <figcaption>{data.diagramAlt}</figcaption>
            </figure>
          </div>
        </div>

        <div className='row gutter-30'>
          {pathways.map((item, index) => (
            <div className='col-12 col-md-6 col-xl-3' key={index}>
              <div
                className='approach__pathway'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={index * 100}
              >
                <span className='approach__pathway-number'>{index + 1}</span>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachOne;
