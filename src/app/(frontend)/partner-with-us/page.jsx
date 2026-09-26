import BreadcrumbOne from "@/components/BreadcrumbOne";
import DonateInner from "@/components/DonateInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import PartnersGridInner from "@/components/PartnersGridInner";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getHomePage, getFaqs, getPrograms, getPartners } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partner With Us: Education Partnerships Africa",
  description:
    "Governments, funders, NGOs and researchers: partner with us on education development in Africa, from government education partnerships to programme delivery.",
  path: "/partner-with-us",
});

const page = async () => {
  const [settings, home, faqs, programs, partners] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
    getFaqs("donate"),
    getPrograms(),
    getPartners(),
  ]);

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
        <BreadcrumbOne subtitle='Partner With Us' title='Education Partnerships Across Africa' bgImage='assets/images/banner/banner-donate.webp' />

        {/* DonateInner */}
        <DonateInner audienceSection={home?.audienceSection} faqs={faqs} programs={programs} />

        {/* PartnersGridInner */}
        <PartnersGridInner partners={partners} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
