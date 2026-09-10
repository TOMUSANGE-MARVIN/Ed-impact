"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const toPercent = (value, fallback) => {
  const n = parseFloat(String(value || "").replace("%", ""));
  return Number.isFinite(n) ? Math.round(n) : fallback;
};

const defaultAbout = {
  visionMission: {
    subtitle: "Vision, Mission & Values",
    title: "Because Every Child Deserves A System That Works",
    mission:
      "We partner with governments and other strategic partners to strengthen education systems across Africa, so that every learner receives equitable, high-quality and relevant teaching and learning to prepare them for the world of work.",
  },
  missionBullets: [
    { text: "Partnering with governments to strengthen existing systems, not replace them" },
    { text: "Reaching 199,856 teachers across Uganda through system-led CPD" },
    { text: "Building sustainable, locally owned education reform" },
  ],
  visionBullets: [
    { text: "An Africa where every learner thrives through quality, equitable and relevant education" },
    { text: "Reigniting the intrinsic motivation of teachers, learners and officials" },
    { text: "Scaling proven solutions from Uganda across East Africa" },
  ],
  valuesBullets: [
    { text: "Co-Creation: we don't have all the answers upfront" },
    { text: "Ubuntu: personal wellbeing is tied to collective wellbeing" },
    { text: "Accountability: transparent to all our stakeholders" },
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
  ],
};

const defaultStats = {
  literacyProgramme: "73.1%",
  numeracyProgramme: "66.7%",
  teachersReached: "199,856",
  learnersReached: "5,892,477",
};

const DifferenceTwo = ({ about = defaultAbout, stats = defaultStats }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  const vm = about?.visionMission || defaultAbout.visionMission;
  const missionBullets = about?.missionBullets?.length ? about.missionBullets : defaultAbout.missionBullets;
  const visionBullets = about?.visionBullets?.length ? about.visionBullets : defaultAbout.visionBullets;
  const valuesBullets = about?.valuesBullets?.length ? about.valuesBullets : defaultAbout.valuesBullets;
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
                    <div className='video-btn-wrapper'>
                      <button
                        onClick={() => setIsOpen(true)}
                        className='open-video-popup'
                      >
                        <i className='icon-play' />
                      </button>
                    </div>
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
                  <p>{vm.mission}</p>

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
                                {missionBullets.map((b, i) => (
                                  <li key={i}>
                                    <i className='fa-solid fa-check' /> {b.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {activeTab === "vision" && (
                            <div
                              className='difference-two__content-single'
                              id='vision'
                            >
                              <ul>
                                {visionBullets.map((b, i) => (
                                  <li key={i}>
                                    <i className='fa-solid fa-check' /> {b.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {activeTab === "excellence" && (
                            <div
                              className='difference-two__content-single'
                              id='excellence'
                            >
                              <ul>
                                {valuesBullets.map((b, i) => (
                                  <li key={i}>
                                    <i className='fa-solid fa-check' /> {b.text}
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
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default DifferenceTwo;
