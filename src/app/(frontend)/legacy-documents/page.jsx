import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactOne from "@/components/ContactOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import LegacyDocumentsInner from "@/components/LegacyDocumentsInner";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getLegacyDocuments } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Teacher Motivation Research: STiR Archive",
  description:
    "Teacher motivation research, impact evaluations and reports from STiR Education Uganda, the programme Ed Impact Africa Foundation continues and builds on.",
  path: "/legacy-documents",
});

const page = async () => {
  const [settings, documents] = await Promise.all([
    getSiteSettings(),
    getLegacyDocuments(),
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
        <BreadcrumbOne subtitle='Legacy Documents' title='STiR Education Uganda Research Archive' />

        {/* LegacyDocumentsInner */}
        <LegacyDocumentsInner documents={documents} />

        {/* ContactOne */}
        <ContactOne />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
