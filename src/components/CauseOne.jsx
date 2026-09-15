"use client";
import { useRef } from "react";
import Slider from "react-slick";
import ProgressBar from "../helper/ProgressBar";
import Link from "next/link";

const defaultPrograms = [
  {
    image: { url: "/assets/images/cause/one.png" },
    tag: "Secondary",
    title: "National Secondary CPD",
    description: "Delivered with the Association of Secondary School Headteachers of Uganda, reaching secondary schools nationwide.",
    percent: 100,
    statOneLabel: "Coverage",
    statOneValue: "176 LGs",
    statTwoLabel: "Reach",
    statTwoValue: "199,856 teachers",
  },
  {
    image: { url: "/assets/images/cause/two.png" },
    tag: "Primary",
    title: "Primary Teacher Colleges",
    description: "Delivered through 22 of 23 Core Primary Teacher Colleges, with NAMDEO and UNISA strengthening classroom instruction.",
    percent: 96,
    statOneLabel: "Coverage",
    statOneValue: "22/23 PTCs",
    statTwoLabel: "Reach",
    statTwoValue: "105 Local Governments",
  },
  {
    image: { url: "/assets/images/cause/three.png" },
    tag: "Evidence",
    title: "Evidence & Policy Influence",
    description: "Our 2025 impact evaluation shows measurably stronger learning outcomes in programme schools.",
    percent: 73,
    statOneLabel: "Literacy",
    statOneValue: "73.1% programme",
    statTwoLabel: "Comparison",
    statTwoValue: "57.0% control schools",
  },
  {
    image: { url: "/assets/images/cause/four.png" },
    tag: "Systems",
    title: "System Strengthening",
    description: "Building institutional capacity so schools and districts own implementation long after we exit.",
    percent: 67,
    statOneLabel: "Numeracy",
    statOneValue: "66.7% programme",
    statTwoLabel: "Comparison",
    statTwoValue: "54.1% control schools",
  },
];

const CauseOne = ({ programs = defaultPrograms }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: true,

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
          slidesToShow: 3,
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
    <section
      className='cause'
      style={{
        backgroundImage: "url(/assets/images/cause/cause-bg.png)",
      }}
    >
      <div className='container'>
        <div className='row gutter-30 align-items-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header'>
              <span className='sub-title'>
                <i className='icon-education' />
                Program Reach &amp; Impact
              </span>
              <h2 className='title-animation_inner'>
                Where Our <span>Programs</span> Are Delivering Results
              </h2>
            </div>
          </div>
          <div className='col-12 col-md-4 col-xl-5'>
            <div className='slider-navigation'>
              <button
                onClick={() => sliderRef.current.slickPrev()}
                type='button'
                aria-label='prev slide'
                title='prev slide'
                className='prev-cause slider-btn'
              >
                <i className='fa-solid fa-arrow-left' />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                type='button'
                aria-label='next slide'
                title='next slide'
                className='next-cause slider-btn slider-btn-next'
              >
                <i className='fa-solid fa-arrow-right' />
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='cause__slider-wrapper'>
              <div className='cause__slider swiper'>
                <Slider {...settings} ref={sliderRef} className='swiper-wrapper'>
                  {[...programs, ...programs].map((item, index) => (
                    <div className='swiper-slide' key={item.id || index}>
                      <div className='cause__slider-inner'>
                        <div className='cause__slider-single'>
                          <div className='thumb'>
                            <Link href={`/our-work/${item.id}`}>
                              <img
                                src={item.image?.url || "/assets/images/cause/one.png"}
                                alt='Image_inner'
                              />
                            </Link>
                            <div className='tag'>
                              <Link href='/our-work'>{item.tag}</Link>
                            </div>
                          </div>
                          <div className='content'>
                            <h6>
                              <Link href={`/our-work/${item.id}`}>{item.title}</Link>
                            </h6>
                            <p>{item.description}</p>
                          </div>
                          <div className='cause__slider-cta'>
                            <div className='cause__progress progress-bar-single'>
                              <ProgressBar percent={item.percent} label={item.statOneLabel} />
                              <div className='cause-progress__goal'>
                                <p>
                                  {item.statOneLabel}:{" "}
                                  <span className='raised'>{item.statOneValue}</span>
                                </p>
                                <p>
                                  {item.statTwoLabel}:{" "}
                                  <span className='goal'>{item.statTwoValue}</span>
                                </p>
                              </div>
                            </div>
                            <div className='cause__cta'>
                              <Link
                                href={`/our-work/${item.id}`}
                                aria-label='learn more'
                                title='learn more'
                                className='btn--secondary'
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='spade'>
        <img src='/assets/images/help/spade.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default CauseOne;
