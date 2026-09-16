"use client";
import { useState } from "react";
import VideoModal from "./VideoModal";

const toPercent = (value, fallback) => {
  const n = parseFloat(String(value || "").replace("%", ""));
  return Number.isFinite(n) ? Math.round(n) : fallback;
};

const defaultAbout = {
  visionMission: {
    subtitle: "Vision, Mission & Values",
    title: "Because Education Is The Greatest Socio-Economic Equaliser",
    reasonGoal:
      "As Nelson Mandela is quoted to have said: 'It is through education that the daughter of a peasant can become a doctor, that the son of a mineworker can become the head of the mine; that a child of farm workers can become the president of a great nation'.",
    mission:
      "Working with existing education systems across Africa, we provide needs based and evidence grounded education equity and quality improvement interventions, based on the principles of sustainability and scalability.",
    vision: "Quality, Equitable and relevant education for all children in Africa.",
  },
  coreValues: [
    {
      title: "Co-Creation",
      text: "We acknowledge that we do not have all the answers upfront, but promise to work with everyone that may contribute to making education more impactful for the African child.",
    },
    {
      title: "Ubuntu",
      text: "We will promote compassion, respect, dignity, and collective responsibility over individualism, asserting that personal well-being is tied to group wellbeing.",
    },
    {
      title: "Purpose",
      text: "We are all united by a shared purpose of making education more relevant, equitable and of high quality for the good of the African child.",
    },
    {
      title: "Impact",
      text: "We will promote evidence-based practices that have measurable outcomes on the education system of African nations.",
    },
    {
      title: "Accountability",
      text: "We will ensure that we account to all stakeholders, both internal and external for impact and organisational strengthening and sustainability.",
    },
  ],
  strategicPriorityItems: [
    {
      title: "Research & Evidence",
      text: "Deepen our evidence base and insight production, so that our data informs policy design and establishes us as a credible, cited voice on education systems reform.",
    },
    {
      title: "Localisation & Social Entrepreneurship",
      text: "Fully localise into a legally registered, financially independent Ugandan NGO with diversified domestic revenue, and build a sustainable social enterprise offering paid teacher and leadership training.",
    },
    {
      title: "Education Equity & Quality Cross-Cutting Issues",
      text: "Ensure inclusive access to quality professional development so that no teacher, school or official is excluded due to income, geography or institutional capacity; strengthen gender responsive pedagogy and female leadership; and integrate sustainable EdTech and innovation across diverse contexts.",
    },
    {
      title: "Institutional Development & Sectoral Thought Leadership",
      text: "Build a strong, credible and sustainable institution that shapes education policy and practice in Uganda through evidence, influence and effective communication, recognised nationally and across East Africa as a go-to voice on education quality, equity and systems performance.",
    },
  ],
};

const defaultStats = {
  literacyProgramme: "73.1%",
  numeracyProgramme: "66.7%",
  teachersReached: "199,856",
  learnersReached: "5,892,477",
};

const DifferenceTwo = ({ about = defaultAbout, stats = defaultStats, showVideo = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  const vm = about?.visionMission || defaultAbout.visionMission;
  const coreValues = about?.coreValues?.length ? about.coreValues : defaultAbout.coreValues;
  const strategicPriorityItems = about?.strategicPriorityItems?.length
    ? about.strategicPriorityItems
    : defaultAbout.strategicPriorityItems;

  const literacyPercent = toPercent(stats?.literacyProgramme, 73);
  const numeracyPercent = toPercent(stats?.numeracyProgramme, 67);
  const teachersReached = stats?.teachersReached || "199,856";
  const learnersReached = stats?.learnersReached || "5,892,477";

  // Split the title so the last word gets the accent span, matching the original design
  const titleWords = (vm.title || "").split(" ");
  const lastWord = titleWords.pop();
  const titleLead = titleWords.join(" ");

  return (
    <>
      <section className='difference-two'>
        <div className='container'>
          <div className='row gutter-40 align-items-center'>
            <div className='col-12 col-lg-4 col-xxl-5 d-none d-lg-block'>
              <div className='difference-two__thumb-wrapper'>
                <div className='difference-two__thumb'>
                  <div
                    className='thumb-lg'
                    data-aos='fade-right'
                    data-aos-duration={1000}
                  >
                    <img
                      src='assets/images/difference/thumb-sm.png'
                      alt='Image_inner'
                    />
                    <div className='grid-line'>
                      <img
                        src='assets/images/help/grid.png'
                        alt='Image_inner'
                        className='base-img'
                      />
                    </div>
                    {showVideo && (
                      <div className='video-btn-wrapper'>
                        <button
                          onClick={() => setIsOpen(true)}
                          className='open-video-popup'
                        >
                          <i className='icon-play' />
                        </button>
                      </div>
                    )}
                  </div>
                  <div
                    className='thumb-sm'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={300}
                  >
                    <img
                      src='assets/images/difference/thumb-lg.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-8 col-xxl-7'>
              <div className='difference-two__tab'>
                <div className='difference-two__content'>
                  <span className='sub-title'>
                    <i className='icon-education' />
                    {vm.subtitle}
                  </span>
                  <h2 className='title-animation_inner'>
                    {titleLead} <span>{lastWord}</span>
                  </h2>
                  <p>{vm.reasonGoal || defaultAbout.visionMission.reasonGoal}</p>

                  <div className='difference-two__inner cta'>
                    <div className='difference-two__inner-content'>
                      {/* TABS */}
                      <div className='difference-two__tab'>
                        <div className='difference-two__tab-btns'>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "mission" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("mission")}
                            aria-label='mission'
                            title='mission'
                          >
                            Our Mission
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "vision" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("vision")}
                            aria-label='vision'
                            title='vision'
                          >
                            Our Vision
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "excellence" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("excellence")}
                            aria-label='values'
                            title='values'
                          >
                            Our Values
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "priorities" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("priorities")}
                            aria-label='where we are headed'
                            title='where we are headed'
                          >
                            Where We're Headed
                          </button>
                        </div>

                        <div className='difference-two__tab-content'>
                          {activeTab === "mission" && (
                            <div
                              className='difference-two__content-single'
                              id='mission'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' />{" "}
                                  {vm.mission || defaultAbout.visionMission.mission}
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "vision" && (
                            <div
                              className='difference-two__content-single'
                              id='vision'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' />{" "}
                                  {vm.vision || defaultAbout.visionMission.vision}
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "excellence" && (
                            <div
                              className='difference-two__content-single'
                              id='excellence'
                            >
                              <ul>
                                {coreValues.map((value, i) => (
                                  <li key={i}>
                                    <i className='fa-solid fa-check' />{" "}
                                    <strong>{value.title}:</strong> {value.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {activeTab === "priorities" && (
                            <div
                              className='difference-two__content-single'
                              id='priorities'
                            >
                              <ul>
                                {strategicPriorityItems.map((item, i) => (
                                  <li key={i}>
                                    <i className='fa-solid fa-check' />{" "}
                                    <strong>{item.title}:</strong> {item.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* PROGRESS */}
                      <div className='difference-two__progress'>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent={`${literacyPercent}%`}
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>{literacyPercent}%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: literacyPercent }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Literacy <br />
                              Improvement
                            </p>
                          </div>
                        </div>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent={`${numeracyPercent}%`}
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>{numeracyPercent}%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: numeracyPercent }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Numeracy <br />
                              Improvement
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD */}
                    <div className='difference-two__card'>
                      <div className='card-group'>
                        <div className='thumb'>
                          <i className='icon-education' />
                        </div>
                        <div className='content'>
                          <h6>Teachers Reached</h6>
                          <p>{teachersReached}</p>
                        </div>
                      </div>
                      <hr />
                      <div className='card-group card-group-alt'>
                        <div className='thumb'>
                          <i className='icon-award' />
                        </div>
                        <div className='content'>
                          <h6>Learners Reached</h6>
                          <p>{learnersReached}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='spade'>
          <img src='assets/images/spade-green-two.png' alt='Image_inner' />
        </div>
      </section>
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        src='/assets/videos/headteacher.mp4'
        poster='/assets/images/difference/thumb-sm.png'
      />
    </>
  );
};

export default DifferenceTwo;
