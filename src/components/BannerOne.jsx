"use client";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";

const fallbackBgs = [
  "banner-one-bg.webp",
  "banner-two-bg.webp",
  "banner-three-bg.webp",
  "banner-four-bg.webp",
];

const defaultSlides = [
  {
    subtitle: "Africa's Systems Reform Partner",
    headingBeforeAccent: "Turning Policy Into",
    headingAccent: "Belonging",
    headingAfterAccent: ".",
  },
  {
    subtitle: "Co-Creating Scalable Solutions",
    headingBeforeAccent: "Every Child Deserves A",
    headingAccent: "Future",
    headingAfterAccent: ".",
  },
  {
    subtitle: "199,856 Teachers. 5.9M Learners.",
    headingBeforeAccent: "Strengthening",
    headingAccent: "Systems",
    headingAfterAccent: " Across Africa.",
  },
  {
    subtitle: "Successor To STIR Education Uganda",
    headingBeforeAccent: "Reigniting The Love Of",
    headingAccent: "Teaching",
    headingAfterAccent: ".",
  },
];

const BannerOne = ({
  slides = defaultSlides,
  ctaPrimaryLabel = "Discover Our Work",
  ctaSecondaryLabel = "Invest In Systemic Change",
}) => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <>
      <section className='banner-two'>
        <div className='banner-two__slider swiper'>
          <Slider {...settings} ref={sliderRef} className='swiper-wrapper'>
            {slides.map((slide, index) => (
              <div className='swiper-slide' key={slide.id || index}>
                <div className='banner-two__slider-single'>
                  <div
                    className='banner-two__slider-bg'
                    style={{
                      backgroundImage: `url(${
                        slide.backgroundImage?.url
                          ? slide.backgroundImage.url
                          : `/assets/images/banner/${fallbackBgs[index % fallbackBgs.length]}`
                      })`,
                    }}
                  ></div>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-12 col-md-9 col-lg-7 col-xxl-6'>
                        <div className='banner-two__slider-content'>
                          <span className='sub-title'>
                            <i className='icon-education' />
                            {slide.subtitle}
                          </span>
                          <h1>
                            {slide.headingBeforeAccent}{" "}
                            <span className='bottom-line'>{slide.headingAccent}</span>
                            {slide.headingAfterAccent}
                          </h1>
                          <div className='banner__content-cta cta'>
                            <Link
                              href='/our-work'
                              aria-label='our work'
                              title='our work'
                              className='btn--tertiary'
                            >
                              {ctaPrimaryLabel} <i className='fa-solid fa-arrow-right' />
                            </Link>
                            <Link
                              href='/partner-with-us'
                              aria-label='partner with us'
                              title='partner with us'
                              className='btn--primary'
                            >
                              {ctaSecondaryLabel} <i className='fa-solid fa-arrow-right' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='slider-navigation d-none d-md-flex'>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            type='button'
            aria-label='prev slide'
            title='prev slide'
            className='prev-banner slider-btn'
          >
            <i className='fa-solid fa-arrow-left' />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            type='button'
            aria-label='next slide'
            title='next slide'
            className='next-banner slider-btn slider-btn-next'
          >
            <i className='fa-solid fa-arrow-right' />
          </button>
        </div>
        <div className='shape'>
          <img src='/assets/images/shape.png' alt='Image_inner' />
        </div>
        <div
          className='shape-left'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <img
            src='/assets/images/banner/banner-two-shape.png'
            alt='Image_inner'
          />
        </div>
        <div className='sprade-shape'>
          <img
            src='assets/images/sprade-base.png'
            alt='Image_inner'
            className='base-img'
            data-aos='zoom-in'
            data-aos-duration={1000}
          />
        </div>
        <div className='unity'>
          <img src='/assets/images/unity.png' alt='Image_inner' />
        </div>
      </section>
    </>
  );
};

export default BannerOne;
