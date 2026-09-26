import { notFound } from "next/navigation";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TeamDetailsInner from "@/components/TeamDetailsInner";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getTeamMemberById } from "@/lib/payload";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const member = await getTeamMemberById(id);
  if (!member) {
    return { title: "Team Member | Ed Impact Africa Foundation" };
  }
  return {
    title: `${member.name} | ${member.role} | Education Leadership Africa`,
    description: `${member.name}, ${member.role} at Ed Impact Africa Foundation, driving education system strengthening and education leadership across Africa.`,
  };
};

const page = async ({ params }) => {
  const { id } = await params;
  const [settings, member] = await Promise.all([getSiteSettings(), getTeamMemberById(id)]);

  if (!member) {
    notFound();
  }

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
        <BreadcrumbOne title={member.name} bgImage='assets/images/banner/banner-team-detail.webp' />

        {/* TeamDetailsInner */}
        <TeamDetailsInner member={member} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
