"use client";
import { useState } from "react";

const defaultBackground = {
  subtitle: "Our Background",
  title: "From STiR Education Uganda To Ed Impact Africa Foundation",
  intro:
    "Ed Impact Africa Foundation is a local entity that has been mothered by STiR Education. STiR Education is an INGO (headquartered in the UK) that supports education systems to reignite intrinsic motivation (IM) so that every child, teacher, and official is motivated to learn and improve. Its vision is 'a world where teachers love teaching and children love learning'. STiR Education works towards achieving this through the provision of a system-led teacher Continuous Professional Development program hinged on the principles of intrinsic motivation. Since its inception in 2012, STiR Education has had presence/program operations in Uganda, India, Indonesia and Ethiopia.",
};

const defaultParagraphs = [
  {
    text: "As part of the localisation strategic pivot, STiR Education is localising all its country operations to become local, autonomous entities that are grounded in local realities. This is in response to a gradual strategic pivot that has overtime shifted the decision making power from the UK Office to the local offices, as well as a sectoral shift in favour of localisation and shifting the power to local civil society players. As a result, the India office has successfully localised and transitioned into the Centre for Intrinsic Motivation (CIM), and currently the Uganda and Indonesia entities are in the process of mutating to local entities, with full governance and executive functions brought to the current country offices. The Uganda country office has started on its localisation journey by incorporating and rebranding into Ed Impact Africa Foundation and should be an independent local entity by August 2026.",
  },
  {
    text: "STiR Education started its first project in Uganda in 2014 and is currently running a system led teacher continuous professional development program in all local governments in the secondary program and about a half of the local governments in the primary program. It has a staff pool of 24 team members who maintain sector relationships from the national to district level.",
  },
  {
    text: "This strategic plan is therefore coming in at a very critical period of transition, both in the governance and programmatic angles. During this strategic period, there will be a transition from being a branch/country office of the global entity to being an autonomous, local entity with its own brand, board of directors, independent leadership team etc. There will also be a transition from program based work to project based work, and a very strong leaning to the social enterprise model of programming. This is meant to increase the impact and organisational sustainability of the new entity, Ed Impact Africa Foundation, and hence make it a thought leader in the sector across Africa, starting with Uganda and East Africa.",
  },
];

const AboutBackground = ({ background, backgroundParagraphs }) => {
  const [expanded, setExpanded] = useState(false);

  const data = { ...defaultBackground, ...(background || {}) };
  const paragraphs = backgroundParagraphs?.length
    ? backgroundParagraphs
    : defaultParagraphs;

  return (
    <section className='about-background'>
      <div className='container'>
        <div className='row gutter-40 align-items-center'>
          <div className='col-12 col-lg-6'>
            <div
              className='about-background__thumb'
              data-aos='fade-right'
              data-aos-duration={1000}
            >
              <img
                src='/assets/images/about/uganda-coverage-map.webp'
                alt='Ed Impact Africa Foundation programme coverage across Uganda'
              />
            </div>
          </div>

          <div className='col-12 col-lg-6'>
            <div
              className='about-background__content'
              data-aos='fade-left'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-education' />
                {data.subtitle}
              </span>
              <h2 className='title-animation_inner'>{data.title}</h2>
              <p>{data.intro}</p>

              <div
                className={`about-background__more ${
                  expanded ? "is-open" : ""
                }`}
                id='background-full'
              >
                <div className='about-background__more-inner'>
                  {paragraphs.map((item, index) => (
                    <p key={index}>{item.text}</p>
                  ))}
                </div>
              </div>

              <button
                type='button'
                className='btn--primary about-background__toggle'
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                aria-controls='background-full'
              >
                {expanded ? "Read Less" : "Read More"}
                <i
                  className={`fa-solid ${
                    expanded ? "fa-arrow-up" : "fa-arrow-right"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBackground;
