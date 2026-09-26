import ApproachOne from "@/components/ApproachOne";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import DifferenceOne from "@/components/DifferenceOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Teacher Motivation & Professional Development",
  description:
    "Our four interventions, teacher motivation, system strengthening, teacher professional development and education research, improve learning outcomes in Africa.",
  path: "/our-work",
});

const page = async () => {
  const settings = await getSiteSettings();

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
        <BreadcrumbOne subtitle='Our Work' title='How We Strengthen Education Systems' bgImage='assets/images/banner/banner-causes.webp' />

        {/* DifferenceOne - The 4 Interventions */}
        <DifferenceOne />

        {/* ApproachOne - Theory of Change */}
        <ApproachOne />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* ContactOne */}
        <ContactOne />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
