import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseDetailsInner from "@/components/CauseDetailsInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Intervention Detail | Ed Impact Africa Foundation",
  description:
    "A closer look at how Ed Impact Africa Foundation delivers teacher professional development and system-led education reform across Uganda and Africa.",
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
        <BreadcrumbOne title='Intervention Detail' />

        {/* CauseDetailsInner */}
        <CauseDetailsInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
