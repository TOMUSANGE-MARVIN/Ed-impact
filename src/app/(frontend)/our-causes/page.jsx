import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseInner from "@/components/CauseInner";
import CauseSliderThree from "@/components/CauseSliderThree";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getPrograms } from "@/lib/payload";

export const metadata = {
  title: "Our Work | Ed Impact Africa Foundation",
  description:
    "Our four core interventions: Teacher Motivation, System Strengthening, Continuous Professional Development, and Evidence & Research.",
};

const page = async () => {
  const [settings, programs] = await Promise.all([getSiteSettings(), getPrograms()]);

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
        <BreadcrumbOne title='Our Work' />

        {/* CauseInner */}
        <CauseInner programs={programs} />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* CauseSliderThree */}
        <CauseSliderThree programs={programs} />

        {/* ContactOne */}
        <ContactOne />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
