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

export const metadata = {
  title: "STIR Legacy Documents | Ed Impact Africa Foundation",
  description:
    "Research, evaluations and reports from STiR Education Uganda's history, the organisation Ed Impact Africa Foundation continues and builds on.",
};

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
        <BreadcrumbOne title='Legacy Documents' />

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
