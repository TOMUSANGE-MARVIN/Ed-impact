import { notFound } from "next/navigation";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseDetailsInner from "@/components/CauseDetailsInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getPrograms, getProgramById } from "@/lib/payload";
import JsonLd from "@/components/JsonLd";
import { mediaSrc } from "@/lib/image";
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const program = await getProgramById(id);
  if (!program) {
    return { title: "Programme" };
  }
  return pageMetadata({
    title: `${program.title} Programme in Uganda`,
    description: program.description,
    path: `/programmes/${id}`,
    image: mediaSrc(program.image?.url, 1200) || undefined,
  });
};

const page = async ({ params }) => {
  const { id } = await params;
  const [settings, programs, program] = await Promise.all([
    getSiteSettings(),
    getPrograms(),
    getProgramById(id),
  ]);

  if (!program) {
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
        <BreadcrumbOne subtitle="Education Programme In Uganda" title={program.title} bgImage='/assets/images/banner/banner-cause-detail.webp' />

        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Programmes", path: "/programmes" },
            { name: program.title, path: `/programmes/${program.id}` },
          ])}
        />

        {/* CauseDetailsInner */}
        <CauseDetailsInner program={program} programs={programs} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
