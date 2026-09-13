import BreadcrumbOne from "@/components/BreadcrumbOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ImpactInner from "@/components/ImpactInner";
import Preloader from "@/components/Preloader";
import TestimonialOne from "@/components/TestimonialOne";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getTestimonials } from "@/lib/payload";

export const metadata = {
  title: "Impact | Ed Impact Africa Foundation",
  description:
    "See the statistics, outcomes and stakeholder testimonials behind Ed Impact Africa Foundation's education system strengthening work across Uganda.",
};

const page = async () => {
  const [settings, testimonials] = await Promise.all([getSiteSettings(), getTestimonials()]);

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
        <BreadcrumbOne title='Impact' bgImage='/assets/images/banner/banner-events.webp' />

        {/* ImpactInner */}
        <ImpactInner stats={settings?.stats} />

        {/* TestimonialOne */}
        <TestimonialOne testimonials={testimonials} />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
