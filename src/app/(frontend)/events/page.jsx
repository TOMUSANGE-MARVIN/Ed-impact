import BreadcrumbOne from "@/components/BreadcrumbOne";
import EventInner from "@/components/EventInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Reports & Updates | Education Impact Evaluation | Ed Impact Africa Foundation",
  description:
    "Annual reports, education impact evaluation updates and evidence from across Ed Impact Africa Foundation's programs strengthening education systems in Africa.",
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
        <BreadcrumbOne title='Reports & Updates' />

        {/* EventInner */}
        <EventInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
