import BreadcrumbOne from "@/components/BreadcrumbOne";
import EventDetailsInner from "@/components/EventDetailsInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Report Detail | Ed Impact Africa Foundation",
  description:
    "A closer look at one of Ed Impact Africa Foundation's education impact evaluation reports and program updates across Africa.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* TopBarOne */}
        <TopBarOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='Report Detail' bgImage='assets/images/banner/banner-event-detail.png' />

        {/* EventDetailsInner */}
        <EventDetailsInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
