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
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us: Pan-African Education NGO in Uganda",
  description:
    "Ed Impact Africa Foundation is a Pan-African education NGO, successor to STiR Education Uganda, advancing education equity and quality in schools across Africa.",
  path: "/about-us",
});

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
        <BreadcrumbOne subtitle='About Us' title='Education Equity & Quality For Every African Child' bgImage='assets/images/banner/banner-about.webp' />

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
        <DifferenceTwo about={about} stats={settings?.stats} showVideo />

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
