import BreadcrumbOne from "@/components/BreadcrumbOne";
import EventInner from "@/components/EventInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getReports } from "@/lib/payload";

export const metadata = {
  title: "Reports & Updates | Education Impact Evaluation | Ed Impact Africa Foundation",
  description:
    "Annual reports, education impact evaluation updates and evidence from across Ed Impact Africa Foundation's programs strengthening education systems in Africa.",
};

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
        <BreadcrumbOne title='Reports & Updates' bgImage='assets/images/banner/banner-events.webp' />

        {/* EventInner */}
        <EventInner reports={reports} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
