import BannerOne from "@/components/BannerOne";
import BlogOne from "@/components/BlogOne";
import CauseOne from "@/components/CauseOne";
import CauseSliderTwo from "@/components/CauseSliderTwo";
import CommunityOne from "@/components/CommunityOne";
import CtaSectionOne from "@/components/CtaSectionOne";
import DifferenceOne from "@/components/DifferenceOne";
import DifferenceTwo from "@/components/DifferenceTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import HelpOne from "@/components/HelpOne";
import PartnerOne from "@/components/PartnerOne";
import Preloader from "@/components/Preloader";
import TeamOne from "@/components/TeamOne";
import TestimonialOne from "@/components/TestimonialOne";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import {
  getSiteSettings,
  getHomePage,
  getAboutPage,
  getInterventions,
  getPrograms,
  getFeaturedTeamMembers,
  getTestimonials,
  getPosts,
} from "@/lib/payload";

export const metadata = {
  title: "Ed Impact Africa Foundation | Education System Strengthening in Africa",
  description:
    "Ed Impact Africa Foundation partners with governments across Africa on education system strengthening, teacher professional development and teacher motivation, improving learning outcomes for every child.",
};

const page = async () => {
  const [settings, home, about, interventions, programs, teamMembers, testimonials, posts] =
    await Promise.all([
      getSiteSettings(),
      getHomePage(),
      getAboutPage(),
      getInterventions(),
      getPrograms(),
      getFeaturedTeamMembers(),
      getTestimonials(),
      getPosts(),
    ]);

  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* TopBarOne */}
        <TopBarOne settings={settings} />

        {/* HeaderOne */}
        <HeaderOne settings={settings} />

        {/* BannerOne */}
        <BannerOne
          slides={home?.heroSlides}
          ctaPrimaryLabel={home?.heroCtaPrimaryLabel}
          ctaSecondaryLabel={home?.heroCtaSecondaryLabel}
        />

        {/* PartnerOne */}
        <PartnerOne />

        {/* DifferenceOne */}
        <DifferenceOne
          interventions={interventions}
          subtitle={home?.modelSection?.subtitle}
          title={home?.modelSection?.title}
          description={home?.modelSection?.description}
        />

        {/* HelpOne */}
        <HelpOne ubuntu={home?.ubuntuSection} stats={settings?.stats} phone={settings?.contact?.phoneOne} showVideo />

        {/* CauseOne */}
        <CauseOne programs={programs} />

        {/* CtaSectionOne */}
        <CtaSectionOne ctaSection={home?.ctaSection} showVideo />

        {/* TeamOne */}
        <TeamOne teamMembers={teamMembers} />

        {/* CommunityOne */}
        <CommunityOne audienceSection={home?.audienceSection} />

        {/* TestimonialOne */}
        <TestimonialOne testimonials={testimonials} />

        {/* CauseSliderTwo */}
        <CauseSliderTwo />

        {/* DifferenceTwo */}
        <DifferenceTwo about={about} stats={settings?.stats} showVideo />

        {/* BlogOne */}
        <BlogOne posts={posts} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
