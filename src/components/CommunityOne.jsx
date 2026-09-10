"use client";
import Link from "next/link";
import { useState } from "react";

const defaultAudienceSection = {
  subtitle: "Audience Value Propositions",
  title: "Partner With Us, However You Show Up",
  introTitle: "Because Every Partner Plays A Different Role.",
  governmentsText:
    "We strengthen what already exists, aligning with your national policies to ensure scalable, sustainable educational development.",
  fundersText:
    "Your investment translates into measurable, scalable reform, generating a high return on social impact.",
  communitiesText:
    "Your voice shapes the solution, ensuring our programs respect the principle of Ubuntu and reflect local realities.",
};

const CommunityOne = ({ audienceSection = defaultAudienceSection }) => {
  const audiences = {
    governments: { label: "Governments", text: audienceSection.governmentsText },
    funders: { label: "Funders", text: audienceSection.fundersText },
    communities: { label: "Communities", text: audienceSection.communitiesText },
  };
  let [audience, setAudience] = useState("governments");
  return (
    <>
      <section className='community'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8 col-xl-7'>
              <div
                className='section__header'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-education' />
                  {audienceSection.subtitle}
                </span>
                <h2 className='title-animation_inner'>
                  {audienceSection.title}
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div
                className='community-donation'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='community-donation__inner'>
                  <h4>{audienceSection.introTitle}</h4>
                  <div className='donation-form'>
                    <div className='donation-form__single'>
                      <h5>I represent:</h5>
                      <div className='made-amount'>
                        {Object.entries(audiences).map(([key, value]) => (
                          <span
                            key={key}
                            className={`donation-amount ${
                              audience === key ? "active" : ""
                            }`}
                            onClick={() => setAudience(key)}
                          >
                            {value.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className='donation-form__single'>
                      <h5>What This Means For You</h5>
                      <p>{audiences[audience].text}</p>
                    </div>
                    <div className='cta'>
                      <Link
                        href='/donate-us'
                        aria-label='partner with us'
                        title='partner with us'
                        className='btn--primary'
                      >
                        Partner With Us <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className='community__thumb d-none d-lg-block'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                >
                  <img
                    src='/assets/images/community/thumb.png'
                    alt='Image_inner'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='community-bg'>
          <img
            src='/assets/images/community/community-bg.png'
            alt='Image_inner'
          />
        </div>
        <div
          className='gift'
          data-aos='fade-up'
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img src='/assets/images/community/gift.png' alt='Image_inner' />
        </div>
        <div className='spade'>
          <img
            src='/assets/images/community/spade.png'
            alt='Image_inner'
            className='base-img'
          />
        </div>
      </section>
    </>
  );
};

export default CommunityOne;
