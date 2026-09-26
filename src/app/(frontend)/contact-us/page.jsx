import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Our Education NGO in Kampala, Uganda",
  description:
    "Contact Ed Impact Africa Foundation, an education NGO in Kampala, Uganda, about education partnerships, teacher development programmes, research or careers.",
  path: "/contact-us",
});

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
        <BreadcrumbOne subtitle='Contact Us' title='Get In Touch With Our Team' bgImage='assets/images/banner/banner-contact.webp' />

        {/* ContactUsInner */}
        <ContactUsInner settings={settings} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
