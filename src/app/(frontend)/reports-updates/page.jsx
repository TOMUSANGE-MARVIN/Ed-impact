import BreadcrumbOne from "@/components/BreadcrumbOne";
import EventInner from "@/components/EventInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getReports } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Education Research Reports & Evaluations",
  description:
    "Annual reports, education programme evaluations and impact updates from our work strengthening education systems and teacher development in Uganda and Africa.",
  path: "/reports-updates",
});

const page = async () => {
  const [settings, reports] = await Promise.all([getSiteSettings(), getReports()]);

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
        <BreadcrumbOne subtitle='Reports & Updates' title='Education Research Reports & Updates' bgImage='assets/images/banner/banner-events.webp' />

        {/* EventInner */}
        <EventInner reports={reports} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
