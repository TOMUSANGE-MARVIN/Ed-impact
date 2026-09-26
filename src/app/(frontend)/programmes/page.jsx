import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseInner from "@/components/CauseInner";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getPrograms } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Teacher Development Programmes in Uganda",
  description:
    "Teacher professional development programmes in Uganda: secondary CPD, Primary Teacher Colleges, evidence and policy influence, and system strengthening.",
  path: "/programmes",
});

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
        <BreadcrumbOne subtitle='Programmes' title='Teacher Professional Development Programmes' bgImage='assets/images/banner/banner-causes.webp' />

        {/* CauseInner */}
        <CauseInner programs={programs} />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
