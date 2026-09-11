const defaultWhoWeAre = {
  subtitle: "Who We Are",
  title: "A Pan-African Organisation For Education Equity And Quality",
  description:
    "Ed Impact Africa Foundation is a Pan-African civil society organisation (CSO) focused on education equity and quality. We are headquartered in Uganda and are building on the legacy and achievements of STiR Education Uganda as we deepen programming in Uganda while expanding into new geographies across the continent.",
  inheritsIntro: "As a successor organisation, Ed Impact Africa Foundation inherits:",
};

const defaultInherits = [
  { text: "A proven theory of change and education delivery model." },
  {
    text: "Strong relationships with education stakeholders and local government structures in Uganda.",
  },
  { text: "The institutional capability developed through years of implementation." },
];

const WhoWeAre = ({ whoWeAre, whoWeAreInherits }) => {
  const data = { ...defaultWhoWeAre, ...(whoWeAre || {}) };
  const inherits = whoWeAreInherits?.length ? whoWeAreInherits : defaultInherits;

  return (
    <section className='who-we-are'>
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
              <p>{data.description}</p>
            </div>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-12 col-xl-10'>
            <div
              className='who-we-are__inherits'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <h5>{data.inheritsIntro}</h5>
              <div className='row gutter-30'>
                {inherits.map((item, index) => (
                  <div className='col-12 col-md-4' key={index}>
                    <div className='who-we-are__card'>
                      <span className='who-we-are__card-number'>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
