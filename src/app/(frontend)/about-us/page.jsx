import AboutBackground from "@/components/AboutBackground";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import DifferenceTwo from "@/components/DifferenceTwo";
import FooterOne from "@/components/FooterOne";
import GalleryOne from "@/components/GalleryOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
import TopBarOne from "@/components/TopBarOne";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import {
  getSiteSettings,
  getAboutPage,
  getTeamMembers,
} from "@/lib/payload";

export const metadata = {
  title: "About Us | Education Reform & Equity in Africa | Ed Impact Africa Foundation",
  description:
    "The vision, mission and Ubuntu philosophy behind Ed Impact Africa Foundation's work on education system strengthening, education reform and education equity in Africa, successor to STIR Education Uganda.",
};

const page = async () => {
  const [settings, about, teamMembers] = await Promise.all([
    getSiteSettings(),
    getAboutPage(),
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
        <BreadcrumbOne title='About Us' bgImage='assets/images/banner/banner-about.png' />

        {/* 1. Background */}
        <AboutBackground
          background={about?.background}
          backgroundParagraphs={about?.backgroundParagraphs}
        />

        {/* 2. Who We Are */}
        <WhoWeAre
          whoWeAre={about?.whoWeAre}
          whoWeAreInherits={about?.whoWeAreInherits}
        />

        {/* 3. Vision, Mission & Core Values */}
        <DifferenceTwo about={about} stats={settings?.stats} />

        {/* 4. What We Do */}
        <WhatWeDo
          whatWeDo={about?.whatWeDo}
          programAnchors={about?.programAnchors}
        />

        {/* 5. Team */}
        <TeamTwo teamMembers={teamMembers} />

        {/* 6. CTA */}
        <CtaSectionTwo />

        {/* 7. Gallery */}
        <GalleryOne />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
