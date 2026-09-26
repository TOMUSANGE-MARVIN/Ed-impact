import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings } from "@/lib/payload";

export const metadata = {
  title: "Contact Us | Ed Impact Africa Foundation, Education NGO in Africa",
  description:
    "Reach out to Ed Impact Africa Foundation, an education NGO strengthening systems and teacher development across Africa, for partnerships, inquiries or support.",
};

const page = async () => {
  const settings = await getSiteSettings();

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
        <BreadcrumbOne title='Contact Us' bgImage='assets/images/banner/banner-contact.webp' />

        {/* ContactUsInner */}
        <ContactUsInner settings={settings} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
