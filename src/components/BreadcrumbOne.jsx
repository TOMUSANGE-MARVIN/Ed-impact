const BreadcrumbOne = ({
  title,
  subtitle = "Ed Impact Africa Foundation",
  bgImage = "assets/images/banner/banner-bg.webp",
}) => {
  return (
    <section className='common-banner'>
      <div className='container'>
        <div className='row'>
          <div className='common-banner__content text-center'>
            <span className='sub-title'>
              <i className='icon-education' />
              {subtitle}
            </span>
            <h1 className='title-animation_inner'>{title}</h1>
          </div>
        </div>
      </div>
      <div className='banner-bg'>
        <img src={bgImage} alt='' />
      </div>
      <div className='shape'>
        <img src='/assets/images/shape.webp' alt='' />
      </div>
      <div className='sprade' data-aos='zoom-in' data-aos-duration={1000}>
        <img
          src='/assets/images/sprade-base.webp'
          alt=''
          className='base-img'
        />
      </div>
    </section>
  );
};

export default BreadcrumbOne;
