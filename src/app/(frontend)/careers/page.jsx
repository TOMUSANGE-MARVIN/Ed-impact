import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import VolunteerInner from "@/components/VolunteerInner";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getCareersPage } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers in Education Development in Africa",
  description:
    "Jobs, internships and volunteering at Ed Impact Africa Foundation. Help strengthen education systems and teacher professional development in Uganda and Africa.",
  path: "/careers",
});

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
        <BreadcrumbOne subtitle='Careers & Volunteering' title='Build A Career In Education Development' bgImage='assets/images/banner/banner-volunteer.webp' />

        {/* VolunteerInner */}
        <VolunteerInner careers={careers} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
