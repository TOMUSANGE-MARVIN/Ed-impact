import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import DifferenceTwo from "@/components/DifferenceTwo";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import GalleryOne from "@/components/GalleryOne";
import HeaderOne from "@/components/HeaderOne";
import HelpOne from "@/components/HelpOne";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
import TestimonialOne from "@/components/TestimonialOne";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import {
  getSiteSettings,
  getHomePage,
  getAboutPage,
  getTeamMembers,
  getFaqs,
  getTestimonials,
} from "@/lib/payload";

export const metadata = {
  title: "About Us | Ed Impact Africa Foundation",
  description:
    "Vision, mission, brand promise and the Ubuntu philosophy behind Ed Impact Africa Foundation, the successor to STIR Education Uganda.",
};

const page = async () => {
  const [settings, home, about, teamMembers, faqs, testimonials] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
    getAboutPage(),
    getTeamMembers(),
    getFaqs("general"),
    getTestimonials(),
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
        <BreadcrumbOne title='About Us' />

        {/* HelpOne */}
        <HelpOne ubuntu={home?.ubuntuSection} stats={settings?.stats} phone={settings?.contact?.phoneOne} />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* TeamTwo */}
        <TeamTwo teamMembers={teamMembers} />

        {/* FaqOne */}
        <FaqOne faqs={faqs} />

        {/* TestimonialOne */}
        <TestimonialOne testimonials={testimonials} />

        {/* ContactOne */}
        <ContactOne />

        {/* DifferenceTwo */}
        <DifferenceTwo about={about} stats={settings?.stats} />

        {/* GalleryOne */}
        <GalleryOne />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
