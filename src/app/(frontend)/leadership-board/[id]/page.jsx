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
import JsonLd from "@/components/JsonLd";
import { mediaSrc } from "@/lib/image";
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const member = await getTeamMemberById(id);
  if (!member) {
    return { title: "Team Member" };
  }
  return pageMetadata({
    title: `${member.name}, ${member.role}`,
    description: `${member.name}, ${member.role} at Ed Impact Africa Foundation, working on education system strengthening and education leadership across Africa.`,
    path: `/leadership-board/${id}`,
    image: mediaSrc(member.photo?.url, 1200) || undefined,
    type: "profile",
  });
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
        <BreadcrumbOne subtitle={member.role} title={member.name} bgImage='assets/images/banner/banner-team-detail.webp' />

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: member.name,
            jobTitle: member.role,
            image: absoluteUrl(mediaSrc(member.photo?.url, 640)),
            worksFor: { "@id": `${SITE_URL}/#organization` },
            url: `${SITE_URL}/leadership-board/${member.id}`,
            ...(member.linkedinUrl ? { sameAs: [member.linkedinUrl] } : {}),
          }}
        />

        {/* TeamDetailsInner */}
        <TeamDetailsInner member={member} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
