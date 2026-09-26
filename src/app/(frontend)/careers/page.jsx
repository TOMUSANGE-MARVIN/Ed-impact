import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import VolunteerInner from "@/components/VolunteerInner";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getCareersPage } from "@/lib/payload";

export const metadata = {
  title: "Careers & Volunteering | Education Development Jobs in Africa",
  description:
    "Open roles, internships and volunteering opportunities at Ed Impact Africa Foundation, an education development organisation strengthening education systems and teacher professional development across Africa.",
};

const page = async () => {
  const [settings, careers] = await Promise.all([getSiteSettings(), getCareersPage()]);

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
        <BreadcrumbOne title='Careers & Volunteering' bgImage='assets/images/banner/banner-volunteer.webp' />

        {/* VolunteerInner */}
        <VolunteerInner careers={careers} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
