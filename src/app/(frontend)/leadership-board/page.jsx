import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TeamInner from "@/components/TeamInner";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getTeamMembers } from "@/lib/payload";

export const metadata = {
  title: "Leadership & Board | Education Leadership in Africa",
  description:
    "Meet the Board of Directors and Executive Team leading Ed Impact Africa Foundation's education leadership and system strengthening work across Africa.",
};

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
        <BreadcrumbOne title='Leadership & Board' bgImage='assets/images/banner/banner-team.webp' />

        {/* TeamInner */}
        <TeamInner teamMembers={teamMembers} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
