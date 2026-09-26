const defaultDocuments = [
  {
    title: "Securing the 21st Century Teacher Workforce",
    description: "Global perspectives on teacher motivation and retention.",
    source: "STiR Education, 2018",
    file: { url: "#" },
  },
  {
    title: "STiR Uganda Impact Evaluation - Year 1 Visual Report",
    description: "Findings of STiR Education's programme in Uganda.",
    source: "STiR Education, 2020",
    file: { url: "#" },
  },
];

const LegacyDocumentsInner = ({ documents = defaultDocuments }) => {
  return (
    <section className='legacy-documents'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-8 col-xl-6'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-documents' />
                Our History
              </span>
              <h2 className='title-animation_inner'>
                STIR <span>Legacy</span> Documents
              </h2>
              <p>
                Teacher motivation research, impact evaluations and reports
                from our journey as STIR Education Uganda, the organisation
                Ed Impact Africa Foundation continues and builds on.
              </p>
            </div>
          </div>
        </div>
        <div className='row gutter-30 justify-content-center'>
          {documents.map((doc, index) => (
            <div className='col-12 col-md-6 col-lg-4' key={doc.id || index}>
              <div
                className='legacy-documents__single'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={(index % 3) * 200}
              >
                <div className='legacy-documents__icon'>
                  <i className='icon-documents' />
                </div>
                <div className='legacy-documents__content'>
                  <h5>{doc.title}</h5>
                  {doc.source && <span className='source'>{doc.source}</span>}
                  {doc.description && <p>{doc.description}</p>}
                </div>
                <div className='legacy-documents__cta'>
                  <a
                    href={doc.file?.url || "#"}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={`download ${doc.title}`}
                    title={doc.title}
                    className='btn--secondary'
                  >
                    View PDF <i className='fa-solid fa-arrow-right' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyDocumentsInner;
