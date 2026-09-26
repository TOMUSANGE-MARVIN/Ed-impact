const defaultFaqs = [
  {
    question: "What does Ed Impact Africa Foundation actually do?",
    answer:
      "We partner with governments and communities to strengthen education systems across Africa. Our work centers on four interventions: teacher motivation, continuous professional development, system strengthening, and evidence & research.",
  },
  {
    question: "Is this the same organisation as STIR Education?",
    answer:
      "Yes. Ed Impact Africa Foundation is the local successor to STIR Education Uganda, inheriting its proven theory of change, government relationships and institutional capacity while deepening our work in Uganda and expanding across Africa.",
  },
  {
    question: "How can my organisation or government partner with you?",
    answer:
      "We welcome partnerships with governments, funders and communities. Visit our Partner With Us page to find the option that fits how you'd like to work with us, or reach out directly via our contact page.",
  },
  {
    question: "How do you measure impact?",
    answer:
      "Through rigorous, independent evaluations. Our 2025 impact evaluation showed programme schools significantly outperforming comparison schools in literacy and numeracy, with an estimated social return of £3.12 for every £1 invested.",
  },
];

const FaqOne = ({ faqs = defaultFaqs }) => {
  return (
    <section className='faq'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-8 col-xl-6'>
            <div className='faq__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-education' />
                  Common Questions
                </span>
                <h2 className='title-animation_inner'>
                  Frequently <span>Asked</span>
                  Questions
                </h2>
              </div>
              <div
                className='faq__content-inner cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='accordion' id='accordion'>
                  {faqs.map((faq, index) => {
                    const headingId = `heading-${faq.id || index}`;
                    const collapseId = `collapse-${faq.id || index}`;
                    return (
                      <div className='accordion-item' key={faq.id || index}>
                        <h6 className='accordion-header' id={headingId}>
                          <button
                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={collapseId}
                          >
                            {faq.question}
                          </button>
                        </h6>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                          aria-labelledby={headingId}
                          data-bs-parent='#accordion'
                        >
                          <div className='accordion-body'>
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-xl-5 offset-xl-1'>
            <div className='faq__thumb d-none d-lg-block'>
              <div className='faq__thumb-inner'>
                <div
                  className='thumb-lg'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src='assets/images/faq/thumb-lg.webp' alt='Teacher supporting learners during a lesson' />
                </div>
                <div
                  className='thumb-sm'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <img src='assets/images/faq/thumb-sm.webp' alt='Smiling teacher taking part in continuous professional development' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shape d-none d-lg-block'>
        <img src='assets/images/faq/shape.webp' alt='' />
      </div>
    </section>
  );
};

export default FaqOne;
