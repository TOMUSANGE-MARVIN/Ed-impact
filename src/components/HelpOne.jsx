"use client";
import Link from "next/link";
import { useState } from "react";
import VideoModal from "./VideoModal";

const HelpOne = ({ ubuntu, stats, phone = "+256 414 696609" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const subtitle = ubuntu?.subtitle || "The Ubuntu Philosophy";
  const title = ubuntu?.title || "The well-being of a child is tied to the strength of their community";
  const description =
    ubuntu?.description ||
    'Ubuntu means "I am because we are." We act with compassion, respect and collective responsibility, knowing that a child\'s wellbeing is deeply connected to the wellbeing of their teacher, school and community.';
  const valueOneTitle = ubuntu?.valueOneTitle || "Co-Creation";
  const valueOneText =
    ubuntu?.valueOneText ||
    "We don't have all the answers upfront, we design solutions with educators, communities and learners.";
  const valueTwoTitle = ubuntu?.valueTwoTitle || "Shared Purpose";
  const valueTwoText =
    ubuntu?.valueTwoText ||
    "United by one commitment: making education relevant, equitable and high quality for every African child.";

  const teachersReached = stats?.teachersReached || "199,856";
  const learnersReached = stats?.learnersReached || "5,892,477";

  // Split "well-being of a child is tied to the strength of their community" style title so the last word gets the accent span
  const titleWords = title.split(" ");
  const lastWord = titleWords.pop();
  const titleLead = titleWords.join(" ");

  return (
    <>
      <section className='help'>
        <div className='container'>
          <div className='row align-items-center gutter-40'>
            <div className='col-12 col-lg-5 col-xxl-6 d-none d-lg-block'>
              <div className='help__thumb'>
                <div className='help__thumb-inner'>
                  <div className='thumb-top thumb'>
                    <img
                      src='/assets/images/help/thumb-top.png'
                      alt='Image_inner'
                    />
                  </div>
                  <div
                    className='thumb-lg thumb'
                    data-aos='fade-left'
                    data-aos-duration={1000}
                  >
                    <img
                      src='/assets/images/help/thumb-lg.png'
                      alt='Image_inner'
                    />
                    <div className='video-btn-wrapper'>
                      <span
                        onClick={() => setIsOpen(true)}
                        className='open-video-popup'
                      >
                        <i className='icon-play' />
                      </span>
                    </div>
                  </div>
                  <div className='thumb thumb-bottom'>
                    <img
                      src='/assets/images/help/thumb-bottom.png'
                      alt='Image_inner'
                    />
                  </div>
                  <div className='line'>
                    <img src='/assets/images/help/line.png' alt='Image_inner' />
                  </div>
                  <div className='grid-line'>
                    <img
                      src='/assets/images/help/grid.png'
                      alt='Image_inner'
                      className='base-img'
                    />
                  </div>
                  <div className='vertical-text'>
                    <h5>
                      We Believe In <span>Ubuntu</span>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-7 col-xxl-6'>
              <div className='help__content'>
                <span className='sub-title'>
                  <i className='icon-education' />
                  {subtitle}
                </span>
                <h2 className='title-animation_inner'>
                  {titleLead} <span>{lastWord}</span>
                </h2>
                <p>{description}</p>
                <div className='help__content-icon-group'>
                  <div className='help__content-icon'>
                    <div className='thumb'>
                      <i className='icon-make-donation' />
                    </div>
                    <div className='content'>
                      <h6>{valueOneTitle}</h6>
                      <p>{valueOneText}</p>
                    </div>
                  </div>
                  <div className='help__content-icon'>
                    <div className='thumb'>
                      <i className='icon-support-heart' />
                    </div>
                    <div className='content'>
                      <h6>{valueTwoTitle}</h6>
                      <p>{valueTwoText}</p>
                    </div>
                  </div>
                </div>
                <div className='help__content-list'>
                  <ul>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Reaching{" "}
                      {teachersReached} teachers across Uganda through system-led CPD.
                    </li>
                    <li>
                      <i className='fa-solid fa-circle-check' /> {learnersReached}{" "}
                      learners benefiting from stronger education systems.
                    </li>
                    <li>
                      <i className='fa-solid fa-circle-check' /> National
                      scale across all local governments in secondary
                      education.
                    </li>
                  </ul>
                </div>
                <div className='help__content-cta cta'>
                  <Link
                    href='/about-us'
                    aria-label='more about us'
                    title='about us'
                    className='btn--primary'
                  >
                    More About Us
                  </Link>
                  <div className='contact-btn'>
                    <div className='contact-icon'>
                      <i className='icon-phone' />
                    </div>
                    <div className='contact-content'>
                      <p>Phone</p>
                      <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hand'>
          <img src='/assets/images/help/hand.png' alt='Image_inner' />
        </div>
        <div className='parasuit'>
          <img src='/assets/images/parasuit.png' alt='Image_inner' />
        </div>
        <div className='spade'>
          <img src='/assets/images/help/spade.png' alt='Image_inner' />
        </div>

        <VideoModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          src='/assets/videos/learner.mp4'
          poster='/assets/images/help/thumb-lg.png'
        />
      </section>
    </>
  );
};

export default HelpOne;
