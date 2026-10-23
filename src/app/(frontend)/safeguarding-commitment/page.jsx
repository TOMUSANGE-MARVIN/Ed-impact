import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Safeguarding Commitment",
  description:
    "Ed Impact Africa Foundation's commitment to safeguarding children, young people and adults across our programmes, and how to report a safeguarding concern.",
  path: "/safeguarding-commitment",
});

const commitments = [
  {
    title: "Prevention",
    detail: "Taking proactive measures to minimise safeguarding risks across our programmes, operations and partnerships.",
  },
  {
    title: "Awareness and accountability",
    detail: "Ensuring our representatives are aware of our safeguarding policies and procedures, understand their safeguarding responsibilities and are equipped to recognise and respond to concerns.",
  },
  {
    title: "Safe reporting",
    detail: "Providing accessible and appropriate channels through which safeguarding concerns can be raised safely and confidentially, without fear of retaliation.",
  },
  {
    title: "Appropriate response",
    detail: "Taking all safeguarding concerns seriously, responding promptly and sensitively, and referring matters to the appropriate authorities or services where necessary. We keep the appropriate parties updated on progress during case management.",
  },
  {
    title: "Continuous improvement",
    detail: "Regularly reviewing our safeguarding practices to strengthen protection, accountability and organisational learning, and developing our team's capacity to prevent, detect and respond to abuse and exploitation through routine refresher trainings.",
  },
];

const neverList = [
  "Engage in any form of physical, sexual, emotional or psychological abuse, neglect, exploitation or harassment.",
  "Engage in sexual exploitation, abuse or harassment of any person, including beneficiaries, colleagues, partners or community members.",
  "Use a position of authority, trust or influence to exploit, intimidate, manipulate or harm another person.",
  "Subject anyone to degrading, humiliating, discriminatory or abusive treatment.",
  "Use organisational authority, resources or access to intimidate, coerce, exploit or disadvantage another person.",
  "Withhold assistance, services or opportunities as a means of demanding personal favours.",
  "Misuse organisational funds, equipment, information or property for personal gain or to facilitate harm.",
  "Use threats, retaliation or intimidation against anyone who raises a concern or participates in a safeguarding process.",
  "Photograph, film, interview or share information about children or adults at risk without the required authorisation, informed consent and safeguarding measures.",
  "Share confidential or identifying information about a safeguarding concern with unauthorised persons.",
  "Publish or distribute images, stories or personal details that could expose an individual to harm, stigma, exploitation or identification without appropriate safeguards.",
  "Access, store, produce, distribute or share child sexual abuse material or other prohibited abusive content.",
];

const page = async () => {
  const settings = await getSiteSettings();

  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
        <CustomCursor />
        <TopBarOne settings={settings} />
        <HeaderOne settings={settings} />
        <BreadcrumbOne subtitle='Our Work' title='Our Safeguarding Commitment' />

        <div className='cm-details'>
          <div className='container'>
            <div className='row gutter-60'>
              <div className='col-12 col-xl-4 order-xl-1'>
                <div className='cm-details__sidebar programme-sidebar--sticky'>
                  <div
                    className='cm-sidebar-widget'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <div className='intro'>
                      <h5>At A Glance</h5>
                    </div>
                    <div className='cm-details__list'>
                      <ul>
                        <li>
                          <i className='icon-circle-check' />
                          Applies to: Staff, volunteers, consultants &amp; partners
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Approach: Zero-Tolerance
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Covers: Children, young people &amp; adults
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          Status: Active
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className='cm-sidebar-overview'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <div className='cm-content'>
                      <p>Report A Concern</p>
                      <h4>Have A Safeguarding Concern?</h4>
                    </div>
                    <div className='cm-details__list'>
                      <ul>
                        <li>
                          <i className='icon-circle-check' />
                          <a href='mailto:safeguarding@edimpactafrica.org'>safeguarding@edimpactafrica.org</a>
                        </li>
                        <li>
                          <i className='icon-circle-check' />
                          <a href='tel:+256789126369'>+256 789 126 369</a> (Safeguarding Focal Person)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-xl-8 order-xl-2'>
                <div className='cm-details__content'>
                  <div
                    className='cm-details__poster'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <img src='/assets/images/banner/banner-two-bg.webp' alt='Staff and learners in conversation at a Ugandan school' />
                  </div>

                  <div className='cm-group cta'>
                    <p>
                      At Ed Impact Africa Foundation, safeguarding is very key to who we are and how we work. We are
                      committed to creating safe, inclusive and respectful environments in which children, young
                      people and adults can participate in our programmes and activities free from abuse,
                      exploitation, neglect, harassment and any form of harm.
                    </p>
                    <p>
                      We take our responsibility to prevent harm and protect the rights, dignity and wellbeing of
                      everyone we engage with &ndash; particularly children and adults who may be at increased risk
                      of harm or exploitation &ndash; seriously.
                    </p>
                    <p>
                      We have a zero-tolerance approach to abuse, exploitation and any other safeguarding violations.
                      We expect all our staff, volunteers, consultants, partners and other representatives of our
                      organisation to uphold the highest standards of conduct and to act in accordance with our
                      safeguarding policies and procedures.
                    </p>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Our Commitment Includes</h3>
                    <div className='cm-details__list'>
                      <ul>
                        {commitments.map((item) => (
                          <li key={item.title}>
                            <i className='icon-circle-check' />
                            <span>
                              <strong>{item.title}:</strong> {item.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      We are committed to treating every safeguarding concern with dignity, sensitivity and respect,
                      while protecting confidentiality to the extent possible and consistent with our
                      responsibilities to keep people safe.
                    </p>
                  </div>

                  <div className='cm-group cta'>
                    <h3 className='title-animation_inner'>Our Team Members Must Never</h3>
                    <div className='cm-details__list'>
                      <ul>
                        {neverList.map((item) => (
                          <li key={item}>
                            <i className='icon-circle-check' />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      The above is neither an exhaustive nor exclusive list, and the organisation will consider all
                      related actions and behaviour which may compromise the rights and protection of children and
                      youth.
                    </p>
                  </div>

                  <div className='programme-outcomes'>
                    <h3>How To Raise A Concern</h3>
                    <ol>
                      <li>
                        If you have a safeguarding concern involving Ed Impact Africa Foundation, our staff,
                        representatives, programmes or partners, please contact us at{" "}
                        <a href='mailto:safeguarding@edimpactafrica.org' style={{ color: "inherit", textDecoration: "underline" }}>
                          safeguarding@edimpactafrica.org
                        </a>
                        , or contact the Safeguarding Focal Person on{" "}
                        <a href='tel:+256789126369' style={{ color: "inherit", textDecoration: "underline" }}>
                          +256 789 126 369
                        </a>
                        .
                      </li>
                      <li>All concerns will be handled seriously and in accordance with our safeguarding policy.</li>
                      <li>
                        Safeguarding is everyone&rsquo;s responsibility. Together, we strive to ensure that our work
                        does no harm and that everyone we engage with is treated with dignity, respect and care.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
