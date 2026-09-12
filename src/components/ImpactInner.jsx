const defaultStats = {
  teachersReached: "199,856",
  learnersReached: "5,892,477",
  literacyProgramme: "73.1%",
  literacyControl: "57.0%",
  numeracyProgramme: "66.7%",
  numeracyControl: "54.1%",
  socialReturn: "£3.12 for every £1 invested",
};

const outcomes = [
  "Teachers in programme schools reported greater use of varied teaching methods, more student questioning, more peer feedback, and more classroom observation and coaching.",
  "Constructive conflict resolution was reported in 71.7% of programme schools compared with 61.3% in comparison schools, while conflict escalation was lower, 4.6% against 7.5%.",
  "Girls in programme schools achieved literacy results comparable to boys, 73.3% against 72.9%, although a gender gap remains in numeracy.",
  "Programme schools show stronger alignment with government teacher-development priorities, and have begun establishing peer learning, mentoring and network meetings as standard practice.",
  "Schools and districts are visibly taking greater ownership of the model, though limited local financing remains a real threat to sustaining these gains without continued support.",
];

const ImpactInner = ({ stats = defaultStats }) => {
  const s = { ...defaultStats, ...stats };

  const counters = [
    { icon: "icon-education", label: "Teachers Reached", value: s.teachersReached },
    { icon: "icon-user", label: "Learners Reached", value: s.learnersReached },
    { icon: "icon-documents", label: "Secondary LG Coverage", value: "155/176" },
    { icon: "icon-support", label: "Primary LG Coverage", value: "105/176" },
    { icon: "icon-award", label: "Core Teacher Colleges", value: "22/23" },
    { icon: "icon-make-donation", label: "Social Return", value: s.socialReturn },
  ];

  return (
    <>
      <section className='counter' style={{ backgroundColor: "#091f1b" }}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-xl-7'>
              <div
                className='section__header section__header-light text-center mb-60'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-education' />
                  Proof &amp; Outcomes
                </span>
                <h2 className='title-animation_inner'>
                  Our <span>Impact</span> In Numbers
                </h2>
              </div>
            </div>
          </div>
          <div className='counter__inner'>
            {counters.map((item) => (
              <div className='counter__single' key={item.label}>
                <div className='thumb'>
                  <i className={item.icon} />
                </div>
                <h2>{item.value}</h2>
                <h5>{item.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='cause'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-xl-7'>
              <div
                className='section__header text-center mb-60'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-education' />
                  2025 Impact Evaluation
                </span>
                <h2 className='title-animation_inner'>
                  What The <span>Evidence</span> Shows
                </h2>
              </div>
            </div>
          </div>
          <div className='row gutter-30 justify-content-center'>
            <div className='col-12 col-lg-10'>
              <div className='cm-details__list'>
                <ul>
                  {outcomes.map((outcome, i) => (
                    <li key={i}>
                      <i className='icon-circle-check' />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <p className='mt-40'>
                Literacy performance was {s.literacyProgramme} in programme schools compared with{" "}
                {s.literacyControl} in comparison schools, and numeracy performance was {s.numeracyProgramme}{" "}
                compared with {s.numeracyControl}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactInner;
