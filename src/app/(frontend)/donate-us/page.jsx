import BreadcrumbOne from "@/components/BreadcrumbOne";
import DonateInner from "@/components/DonateInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getHomePage, getFaqs, getPrograms } from "@/lib/payload";

export const metadata = {
  title: "Partner With Us | Ed Impact Africa Foundation",
  description:
    "Partner with Ed Impact Africa Foundation as a government, funder, or community — dedicated pathways for governments, funders and communities.",
};

const page = async () => {
  const [settings, home, faqs, programs] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
    getFaqs("donate"),
    getPrograms(),
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
        <BreadcrumbOne title='Partner With Us' />

        {/* DonateInner */}
        <DonateInner audienceSection={home?.audienceSection} faqs={faqs} programs={programs} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
