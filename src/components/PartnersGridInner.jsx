const groupLabels = {
  funding: "Funding & Support Partners",
  research: "Research Partners",
};

const groupOrder = ["funding", "research"];

const PartnersGridInner = ({ partners = [] }) => {
  const groups = groupOrder
    .map((category) => ({
      category,
      label: groupLabels[category],
      items: partners.filter((p) => (p.category || "funding") === category),
    }))
    .filter((group) => group.items.length > 0);

  if (!groups.length) return null;

  return (
    <section className='partners-grid'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-8'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-support' />
                Who Stands With Us
              </span>
              <h2 className='title-animation_inner'>
                Our <span>Partners</span>
              </h2>
            </div>
          </div>
        </div>
        {groups.map((group) => (
          <div className='partners-grid__group' key={group.category}>
            <h5 className='partners-grid__group-title'>{group.label}</h5>
            <div className='row gutter-30 justify-content-center'>
              {group.items.map((partner, index) => (
                <div
                  className='col-6 col-sm-4 col-md-3 col-lg-2'
                  key={partner.id || index}
                >
                  <div
                    className='partners-grid__tile'
                    data-aos='fade-up'
                    data-aos-duration={800}
                    data-aos-delay={(index % 6) * 100}
                  >
                    <img
                      src={partner.logo?.url}
                      alt={partner.name}
                      title={partner.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersGridInner;
