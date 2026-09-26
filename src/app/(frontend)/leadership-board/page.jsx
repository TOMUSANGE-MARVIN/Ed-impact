import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TeamInner from "@/components/TeamInner";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getTeamMembers } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Education Leadership: Our Board & Team",
  description:
    "Meet the board and executive team of Ed Impact Africa Foundation, education leaders with decades of experience in teacher development and education reform.",
  path: "/leadership-board",
});

const page = async () => {
  const [settings, teamMembers] = await Promise.all([getSiteSettings(), getTeamMembers()]);

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
        <BreadcrumbOne subtitle='Leadership & Board' title="Education Leadership For Africa's Schools" bgImage='assets/images/banner/banner-team.webp' />

        {/* TeamInner */}
        <TeamInner teamMembers={teamMembers} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
