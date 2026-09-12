const defaultWhatWeDo = {
  subtitle: "What We Do",
  title: "Our Model, Reach And Programme Anchors",
  intro:
    "Ed Impact is inheriting the model, program reach in Uganda, the program anchors and theory of change for STiR Education.",
  explanation:
    "Central to our programming is a child who loves learning and is prepared to thrive in the world after school. But we know that you cannot have a child who loves learning without having a teacher who loves teaching and is intrinsically motivated to teach. We therefore deliver a program that builds the capacity of teachers, hinged on the principles of Intrinsic Motivation, Relationships, Autonomy, Mastery and Purpose. But we also know that a teacher cannot love teaching unless the right conditions have been set at school level by the school leaders. We therefore work through the school leaders to build the capacity of the teachers, and ensure that they are setting the right environment and role modelling the right behaviours for teachers to love teaching. The school leaders also have a direct relationship with district officials, District Education Officers, Inspectors of Schools and others. The relationship that the school leaders have with the district officials will directly impact how the school leaders relate with the teachers, and hence how the teachers relate with the learners. The same applies to the relationship between the district officials and the national education leaders.",
  anchorsIntro:
    "In our programming therefore, we design, deliver and monitor the program through our five programme anchors:",
};

const defaultAnchors = [
  {
    title: "Teacher Intrinsic Motivation",
    text: "Nurturing a sense of purpose, passion and pride in teaching that drives teachers to inspire and transform learners every day.",
    icon: "icon-support-heart",
  },
  {
    title: "Teacher Professional Development Training",
    text: "Equipping teachers with relevant knowledge, skills and classroom strategies through continuous, practical and high-quality training.",
    icon: "icon-education",
  },
  {
    title: "System Led / Strengthening Programming Model",
    text: "Shifting from direct implementation to collaborative, system-led approaches that build local capacity, strengthen institutions and create lasting change.",
    icon: "icon-support",
  },
  {
    title: "Impact Sustainability",
    text: "Embedding ownership, capacity and systems that ensure results endure and continue to improve long after program support ends.",
    icon: "icon-heart",
  },
  {
    title: "National Scale",
    text: "Expanding proven approaches and evidence-based solutions to reach every classroom, teacher and learner across the country.",
    icon: "icon-award",
  },
];

const WhatWeDo = ({ whatWeDo, programAnchors }) => {
  const data = { ...defaultWhatWeDo, ...(whatWeDo || {}) };
  const anchors = programAnchors?.length ? programAnchors : defaultAnchors;

  return (
    <section className='what-we-do'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-xl-9'>
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

        <div className='row justify-content-center'>
          <div className='col-12 col-xl-10'>
            <div
              className='what-we-do__explanation'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <p>{data.explanation}</p>
              <p className='what-we-do__anchors-intro'>{data.anchorsIntro}</p>
            </div>
          </div>
        </div>

        <div className='row gutter-30 justify-content-center'>
          {anchors.map((anchor, index) => (
            <div className='col-12 col-sm-6 col-lg-4' key={index}>
              <div
                className='what-we-do__anchor'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={index * 100}
              >
                <div className='what-we-do__anchor-head'>
                  <span className='what-we-do__anchor-icon'>
                    <i className={anchor.icon || defaultAnchors[index % 5].icon} />
                  </span>
                  <span className='what-we-do__anchor-number'>{index + 1}</span>
                </div>
                <h5>{anchor.title}</h5>
                <p>{anchor.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
