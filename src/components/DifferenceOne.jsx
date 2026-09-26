"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const cardStyles = [
  { bg: "bg-one.webp", variant: "difference__single-first" },
  { bg: "bg-two.webp", variant: "difference__single-second" },
  { bg: "bg-three.webp", variant: "difference__single-third" },
  { bg: "bg-four.webp", variant: "difference__single-fourth" },
];

const defaultInterventions = [
  {
    icon: "icon-support-heart",
    title: "Teacher Motivation",
    description: "Building intrinsic motivation through autonomy, mastery and purpose, so teachers rediscover the love of teaching.",
  },
  {
    icon: "icon-support",
    title: "System Strengthening",
    description: "Education system strengthening through local government structures, building ownership that outlasts our involvement.",
  },
  {
    icon: "icon-education",
    title: "Professional Development",
    description: "Continuous professional development for teachers: peer learning, classroom observation and coaching that last.",
  },
  {
    icon: "icon-documents",
    title: "Evidence & Research",
    description: "Rigorous, locally grounded education research and evidence that informs policy and shows what works in education.",
  },
];

const DifferenceOne = ({
  interventions = defaultInterventions,
  subtitle = "How We Create Change",
  title = "Four Interventions That Strengthen Education Systems",
  description = "A child cannot love learning without a teacher who loves teaching. Through teacher motivation and teacher capacity development, we build the capacity of teachers, school leaders and officials together across primary and secondary education, so motivation and education quality take root and stay embedded in the system.",
}) => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className='difference'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-8'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-education' />
                  {subtitle}
                </span>
                <h2 className='title-animation_inner'>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='difference__inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='difference__slider swiper'>
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className='swiper-wrapper'
                  >
                    {[...interventions, ...interventions].map((item, index) => {
                      const style = cardStyles[index % cardStyles.length];
                      return (
                        <div className='swiper-slide px-2' key={item.id || index}>
                          <div className='difference__single-wrapper'>
                            <div
                              className={`difference__single ${style.variant}`}
                              style={{
                                backgroundImage: `url(/assets/images/difference/${style.bg})`,
                              }}
                            >
                              <div className='difference__single-thumb'>
                                <i className={item.icon} />
                              </div>
                              <div className='difference__single-content'>
                                <h5>
                                  <Link href='/our-work'>{item.title}</Link>
                                </h5>
                                <p>{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-navigation'>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              type='button'
              aria-label='prev slide'
              title='prev slide'
              className='prev-difference slider-btn'
            >
              <i className='fa-solid fa-arrow-left' />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              type='button'
              aria-label='next slide'
              title='next slide'
              className='next-difference slider-btn slider-btn-next'
            >
              <i className='fa-solid fa-arrow-right' />
            </button>
          </div>
        </div>
        <div
          className='shape-hand'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <img
            src='/assets/images/difference/shape-hand.webp'
            alt=''
          />
        </div>
      </section>
    </>
  );
};

export default DifferenceOne;
