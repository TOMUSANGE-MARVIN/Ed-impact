"use client";
import Link from "next/link";
import { useState } from "react";

const defaultAudienceSection = {
  governmentsText:
    "We strengthen what already exists, aligning with your national policies to ensure scalable, sustainable educational development. Enable officials to access evidence-backed CPD frameworks that enhance teacher motivation and reduce systemic capacity strain.",
  fundersText:
    "Your investment translates into measurable, scalable reform, generating a high return on social impact. Track verifiable, continental impact, reducing the risk of fragmented, unsustainable short-term projects.",
  communitiesText:
    "Your voice shapes the solution, ensuring our programs respect the principle of Ubuntu and reflect local realities. Actively participate in school-based leadership and ensure relevant learning for children.",
};

const defaultFaqs = [
  {
    question: "What's the difference between partnering as a government vs a funder?",
    answer:
      "Governments help us scale within existing systems, embedding reform into local government structures. Funders provide the financial and technical resources that enable that scale. Both roles are essential to sustainable reform.",
  },
  {
    question: "Do you accept unrestricted or restricted funding?",
    answer:
      "We welcome both. Unrestricted funding strengthens our core capacity, while restricted funding can support specific interventions such as CPD delivery, evidence generation, or expansion into new geographies.",
  },
  {
    question: "How do communities get a say in how programs are designed?",
    answer:
      "Through Co-Creation. We design solutions with educators, communities and learners rather than imposing them, and School Management Committees play an active role in how programs are delivered in their own schools.",
  },
  {
    question: "What happens after I submit a partnership inquiry?",
    answer:
      "Our partnerships team reviews every submission and responds within 5 business days to discuss next steps, whether that's a call, a site visit, or a formal proposal.",
  },
];

const defaultPrograms = [
  { title: "National Secondary CPD", statOneValue: "155/176 Local Governments", image: { url: "assets/images/blog/ph-one.png" } },
  { title: "Primary Teacher Colleges", statOneValue: "22/23 Core PTCs", image: { url: "assets/images/blog/ph-two.png" } },
  { title: "Evidence & Policy Influence", statOneValue: "£3.12 return per £1", image: { url: "assets/images/blog/three.png" } },
];

const DonateInner = ({
  audienceSection = defaultAudienceSection,
  faqs = defaultFaqs,
  programs = defaultPrograms,
}) => {
  const audiences = {
    governments: { label: "Governments", text: audienceSection.governmentsText || defaultAudienceSection.governmentsText },
    funders: { label: "Funders", text: audienceSection.fundersText || defaultAudienceSection.fundersText },
    communities: { label: "Communities", text: audienceSection.communitiesText || defaultAudienceSection.communitiesText },
  };
  let [audience, setAudience] = useState("governments");
  const sidebarPrograms = programs.slice(0, 3);

  return (
    <div className='cm-details donate-us community checkout faq'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='cm-details__content'>
              <div
                className='cm-details__poster'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <img
                  src='assets/images/event/poster-two.png'
                  alt='Image_inner'
                />
              </div>
              <div
                className='donate-inner'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-group'>
                  <h3 className='title-animation_inner'>
                    Because Every African Child Deserves A System That Works
                  </h3>
                  <p>
                    When you partner with Ed Impact Africa Foundation, you
                    aren't just funding a success story &mdash; you are
                    investing in systemic change across the continent that
                    ensures learning prepares children for life, not just
                    exams. Join us in strengthening the systems that already
                    exist so every child can thrive.
                  </p>
                </div>
                <div className='cta'>
                  <div className='community-donation'>
                    <div className='community-donation__inner'>
                      <h5>Because Every Partner Plays A Different Role.</h5>
                      <div className='donation-form' data-aos-delay={300}>
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
                      </div>
                    </div>
                    <hr />
                    <div className='checkout__form'>
                      <div className='intro'>
                        <h5>Tell Us About Your Partnership Interest</h5>
                      </div>
                      <form>
                        <div className='input-group'>
                          <div className='input-single'>
                            <input
                              type='text'
                              name='c-name'
                              id='cName'
                              placeholder='First Name'
                              required=''
                            />
                            <i className='fa-solid fa-user' />
                          </div>
                          <div className='input-single'>
                            <input
                              type='text'
                              name='c-lastname'
                              id='clastName'
                              placeholder='Last Name'
                              required=''
                            />
                            <i className='fa-solid fa-user' />
                          </div>
                        </div>
                        <div className='input-group'>
                          <div className='input-single'>
                            <input
                              type='email'
                              name='c-email'
                              id='cEmail'
                              placeholder='Your Email'
                              required=''
                            />
                            <i className='fa-solid fa-envelope' />
                          </div>
                          <div className='input-single'>
                            <input
                              type='text'
                              name='c-phone'
                              id='cPhone'
                              placeholder='Your Number'
                              required=''
                            />
                            <i className='fa-solid fa-phone' />
                          </div>
                        </div>
                        <div className='input-single'>
                          <input
                            type='text'
                            name='c-organisation'
                            id='cOrganisation'
                            placeholder='Organisation / Institution'
                            required=''
                          />
                          <i className='fa-solid fa-building' />
                        </div>
                        <div className='input-single alter-input'>
                          <textarea
                            name='contact-message'
                            id='contactMessage'
                            placeholder='Tell us about how you would like to partner with us...'
                            defaultValue={""}
                          />
                          <i className='fa-solid fa-envelope' />
                        </div>
                        <div className='form-cta'>
                          <button
                            type='submit'
                            aria-label='submit message'
                            title='submit message'
                            className='btn--primary'
                          >
                            Send Inquiry{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='award'>
              <div className='container'>
                <div className='row gutter-24'>
                  <div className='col-12 col-lg-8'>
                    <div
                      className='award__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                    >
                      <div className='thumb'>
                        <Link href='/event-details'>
                          <img
                            src='assets/images/award/one.png'
                            alt='Image_inner'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-4'>
                    <div
                      className='award__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={200}
                    >
                      <div className='thumb'>
                        <Link href='/event-details'>
                          <img
                            src='assets/images/award/four.png'
                            alt='Image_inner'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-5'>
                    <div
                      className='award__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={100}
                    >
                      <div className='thumb'>
                        <Link href='/event-details'>
                          <img
                            src='assets/images/award/two.png'
                            alt='Image_inner'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-7'>
                    <div
                      className='award__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    >
                      <div className='thumb'>
                        <Link href='/event-details'>
                          <img
                            src='assets/images/award/three.png'
                            alt='Image_inner'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='faq__content-inner'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='accordion' id='accordion'>
                {faqs.map((faq, index) => {
                  const headingId = `donate-heading-${faq.id || index}`;
                  const collapseId = `donate-collapse-${faq.id || index}`;
                  return (
                    <div className='accordion-item' key={faq.id || index}>
                      <h6 className='accordion-header' id={headingId}>
                        <button
                          className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target={`#${collapseId}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={collapseId}
                        >
                          {faq.question}
                        </button>
                      </h6>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                        aria-labelledby={headingId}
                        data-bs-parent='#accordion'
                      >
                        <div className='accordion-body'>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-4'>
            <div className='cm-details__sidebar'>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>search here</h5>
                </div>
                <form action='#' method='post'>
                  <input
                    type='text'
                    name='search-product'
                    id='searchProduct'
                    placeholder='Search Here...'
                    required=''
                  />
                  <button type='submit'>
                    <i className='fa-solid fa-magnifying-glass' />
                  </button>
                </form>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Our Programs</h5>
                </div>
                <div className='cm-sidebar-post'>
                  {sidebarPrograms.map((program, index) => (
                    <div className='single-item' key={program.id || index}>
                      <div className='thumb'>
                        <Link href='/cause-details'>
                          <img
                            src={program.image?.url || "assets/images/blog/ph-one.png"}
                            alt='Image_inner'
                          />
                        </Link>
                      </div>
                      <div className='content'>
                        <p>
                          <i className='fa-solid fa-location-dot' />{" "}
                          <span>{program.statOneValue}</span>
                        </p>
                        <p>
                          <Link href='/cause-details'>{program.title}</Link>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Tags</h5>
                </div>
                <div className='tag-wrapper'>
                  <Link href='/blog-list'>Teacher Motivation</Link>
                  <Link href='/blog-list'>System Strengthening</Link>
                  <Link href='/blog-list'>CPD</Link>
                  <Link href='/blog-list'>Evidence &amp; Research</Link>
                  <Link href='/blog-list'>Policy</Link>
                  <Link href='/blog-list'>Ubuntu</Link>
                </div>
              </div>
              <div
                className='cm-sidebar-overview'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-logo'>
                  <img src='assets/images/event/logo.png' alt='Image_inner' />
                </div>
                <div className='cm-content'>
                  <p>Africa's Systems Reform Partner</p>
                  <h4>Because Every Child Deserves A System That Works</h4>
                </div>
                <div className='cm-cta'>
                  <Link
                    href='/contact-us'
                    aria-label='contact us'
                    title='contact us'
                    className='btn--primary'
                  >
                    Contact Us <i className='fa-solid fa-arrow-right' />
                  </Link>
                </div>
                <div
                  className='parallax-image-wrap'
                  style={{ overflow: "hidden" }}
                >
                  <div className='parallax-image-inner'>
                    <img
                      src='assets/images/event/overview.png'
                      alt='Image_inner'
                      className='parallax-image'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateInner;
