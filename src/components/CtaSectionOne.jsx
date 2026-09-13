"use client";
import Link from "next/link";
import { useState } from "react";
import VideoModal from "./VideoModal";
const defaultCta = {
  careersLabel: "Careers, internships & volunteering",
  careersTitle: "Want to join our team?",
  partnerLabel: "Governments, funders & communities",
  partnerTitle: "Ready to partner with us?",
};

const CtaSectionOne = ({ ctaSection = defaultCta }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className='cta-section'>
        <div className='container-fluid'>
          <div className='row gutter-40'>
            <div className='col-12 col-xxl-4'>
              <div className='cta-section__first cta-section__single'>
                <div
                  className='cta-section__group'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <div className='thumb'>
                    <i className='icon-spread-love' />
                  </div>
                  <div className='content'>
                    <span>{ctaSection.careersLabel}</span>
                    <h3 className='title-animation_inner'>
                      {ctaSection.careersTitle}
                    </h3>
                  </div>
                  <div className='cta-s'>
                    <Link
                      href='/careers'
                      aria-label='become a volunteer'
                      title='become a volunteer'
                      className='btn--tertiary'
                    >
                      Contact Now
                    </Link>
                  </div>
                </div>
                <div className='cta-img'>
                  <img src='assets/images/cta/one.png' alt='Image_inner' />
                </div>
              </div>
            </div>
            <div className='col-12 col-xxl-4'>
              <div className='cta-section__center cta-section__single'>
                <div className='video-btn-wrapper'>
                  <button
                    onClick={() => setIsOpen(true)}
                    title='video Player'
                    className='open-video-popup'
                  >
                    <i className='icon-play' />
                  </button>
                </div>
                <div className='cta-img'>
                  <img
                    src='assets/images/cta/two.png'
                    alt='Image_inner'
                    className='parallax-image'
                  />
                </div>
              </div>
            </div>
            <div className='col-12 col-xxl-4'>
              <div className='cta-section__last cta-section__single'>
                <div
                  className='cta-section__group'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <div className='thumb'>
                    <i className='icon-spread-love' />
                  </div>
                  <div className='content'>
                    <span>{ctaSection.partnerLabel}</span>
                    <h3 className='title-animation_inner'>
                      {ctaSection.partnerTitle}
                    </h3>
                  </div>
                  <div className='cta-s'>
                    <Link
                      href='/partner-with-us'
                      aria-label='partner with us'
                      title='partner with us'
                      className='btn--primary'
                    >
                      Get Involved
                    </Link>
                  </div>
                </div>
                <div className='cta-img'>
                  <img src='assets/images/cta/three.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <VideoModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          src='/assets/videos/commissioner.mp4'
          poster='/assets/images/cta/two.png'
        />
      </section>
    </>
  );
};

export default CtaSectionOne;
