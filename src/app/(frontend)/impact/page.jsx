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
  title: "Our Impact | Education Impact Evaluation & Learning Outcomes Africa",
  description:
    "Evidence-based education impact evaluation results from Ed Impact Africa Foundation: learning outcomes, teacher motivation research and stakeholder testimonials from education system strengthening work across Uganda and Africa.",
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
        <BreadcrumbOne title='Impact' bgImage='/assets/images/banner/banner-events.png' />

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
