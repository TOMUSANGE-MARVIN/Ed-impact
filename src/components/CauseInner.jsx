import { mediaSrc } from "@/lib/image";
import Link from "next/link";
import ProgressBar from "../helper/ProgressBar";

const defaultPrograms = [
  {
    image: { url: "/assets/images/cause/one.webp" },
    tag: "Motivation",
    title: "Teacher Motivation",
    description: "Instilling autonomy, mastery and purpose so teachers rediscover the love of teaching.",
    percent: 100,
    statOneLabel: "Reach",
    statOneValue: "199,856 teachers",
    statTwoLabel: "Coverage",
    statTwoValue: "National",
  },
  {
    image: { url: "/assets/images/cause/two.webp" },
    tag: "Systems",
    title: "System Strengthening",
    description: "Working through local government structures to build ownership that outlasts our involvement.",
    percent: 88,
    statOneLabel: "Coverage",
    statOneValue: "176 LGs",
    statTwoLabel: "Focus",
    statTwoValue: "Secondary Education",
  },
  {
    image: { url: "/assets/images/cause/three.webp" },
    tag: "CPD",
    title: "Continuous Professional Development",
    description: "Peer-led feedback and classroom observation that builds lasting instructional practice.",
    percent: 96,
    statOneLabel: "Coverage",
    statOneValue: "22/23 PTCs",
    statTwoLabel: "Focus",
    statTwoValue: "Primary Education",
  },
  {
    image: { url: "/assets/images/cause/four.webp" },
    tag: "Evidence",
    title: "Evidence & Research",
    description: "Generating rigorous, locally grounded data that informs policy design and proves what works.",
    percent: 73,
    statOneLabel: "Literacy",
    statOneValue: "73.1% programme",
    statTwoLabel: "Comparison",
    statTwoValue: "57.0% control schools",
  },
];

const CauseInner = ({ programs = defaultPrograms }) => {
  return (
    <section className='cause cause-three-alt'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div
              className='section__header mb-60 text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-education' />
                Programme Reach &amp; Impact
              </span>
              <h2 className='title-animation_inner'>
                Our Teacher Development <span>Programmes</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-30 justify-content-center'>
          {programs.map((item, index) => (
            <div className='col-12 col-md-6 col-xl-4 col-xxl-3' key={item.id ?? index}>
              <div
                className='cause__slider-inner'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={(index % 4) * 300}
              >
                <div className='cause__slider-single van-tilt'>
                  <div className='thumb'>
                    <Link href={`/programmes/${item.id}`}>
                      <img
                        src={mediaSrc(item.image?.url) || "/assets/images/cause/one.webp"}
                        alt={item.image?.alt || item.title}
                      />
                    </Link>
                    <div className='tag'>
                      <Link href='/programmes'>{item.tag}</Link>
                    </div>
                  </div>
                  <div className='content'>
                    <h6>
                      <Link href={`/programmes/${item.id}`}>{item.title}</Link>
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
                        href={`/programmes/${item.id}`}
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
        </div>
      </div>
      <div className='spade'>
        <img src='assets/images/help/spade.webp' alt='' />
      </div>
    </section>
  );
};

export default CauseInner;
