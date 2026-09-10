import BreadcrumbOne from "@/components/BreadcrumbOne";
import CtaSectionOne from "@/components/CtaSectionOne";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getHomePage, getFaqs, getTeamMembers } from "@/lib/payload";

export const metadata = {
  title: "FAQs | Ed Impact Africa Foundation",
  description:
    "Answers to common questions about Ed Impact Africa Foundation's work, partnerships, and impact.",
};

const page = async () => {
  const [settings, home, faqs, teamMembers] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
    getFaqs("general"),
    getTeamMembers(),
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

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='FAQs' />

        {/* FaqOne */}
        <FaqOne faqs={faqs} />

        {/* CtaSectionOne */}
        <CtaSectionOne ctaSection={home?.ctaSection} />

        {/* TeamTwo */}
        <TeamTwo teamMembers={teamMembers} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
