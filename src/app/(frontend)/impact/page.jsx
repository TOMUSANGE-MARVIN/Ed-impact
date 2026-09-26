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
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Impact Evaluation & Learning Outcomes",
  description:
    "Our independent education impact evaluation found 73.1% literacy in programme schools against 57.0% in comparison schools. See the learning outcomes.",
  path: "/impact",
});

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
        <BreadcrumbOne subtitle='Our Impact' title='Improving Learning Outcomes, Proven By Evidence' bgImage='/assets/images/banner/banner-events.webp' />

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
