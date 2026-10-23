import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import Link from "next/link";
import { getSiteSettings } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Projects",
  description:
    "Explore Ed Impact Africa Foundation's collaborative projects and partnerships: Leaders in Teaching Uganda, school-based teacher professional development, the Primary Teacher Changemaker Development Programme, and our safeguarding commitment.",
  path: "/our-projects",
});

const projects = [
  {
    href: "/leaders-in-teaching-uganda",
    tag: "Uganda · Mastercard Foundation",
    title: "Leaders In Teaching Uganda Programme",
    image: "/assets/images/banner/banner-three-bg.webp",
    alt: "Leaders in Teaching Uganda programme launch with consortium partners",
  },
  {
    href: "/social-enterprise",
    tag: "Uganda · Service-for-Pay",
    title: "School-Based Teacher Professional Development",
    image: "/assets/images/banner/banner-four-bg.webp",
    alt: "A teacher coaching students during a classroom lesson",
  },
  {
    href: "/teacher-changemaker-development-programme",
    tag: "Uganda · 105 Districts",
    title: "Primary Teacher Changemaker Development Programme",
    image: "/assets/images/banner/banner-one-bg.webp",
    alt: "A teacher with primary school learners at a Ugandan school",
  },
  {
    href: "/safeguarding-commitment",
    tag: "Policy · Zero-Tolerance",
    title: "Our Safeguarding Commitment",
    image: "/assets/images/banner/banner-two-bg.webp",
    alt: "Staff and learners in conversation at a Ugandan school",
  },
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
        <BreadcrumbOne subtitle='Our Work' title='Our Projects' />

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
                    Collaborations &amp; Partnerships
                  </span>
                  <h2 className='title-animation_inner'>
                    Explore Our <span>Projects</span>
                  </h2>
                  <p>
                    Ed Impact Africa Foundation works with governments, consortium partners and schools to
                    strengthen teacher motivation, professional development and education systems. Select a project
                    below to read the full write-up.
                  </p>
                </div>
              </div>
            </div>
            <div className='row gutter-30 justify-content-center'>
              {projects.map((project, index) => (
                <div className='col-12 col-md-6 col-xl-4' key={project.href}>
                  <div
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={(index % 4) * 150}
                  >
                    <Link href={project.href} className='project-card'>
                      <div className='project-card__thumb'>
                        <img src={project.image} alt={project.alt} />
                      </div>
                      <div className='project-card__body'>
                        <span>{project.tag}</span>
                        <h5>{project.title}</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
