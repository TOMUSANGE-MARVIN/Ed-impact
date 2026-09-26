import { notFound } from "next/navigation";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import EventDetailsInner from "@/components/EventDetailsInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getReports, getReportById } from "@/lib/payload";
import JsonLd from "@/components/JsonLd";
import { mediaSrc } from "@/lib/image";
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const report = await getReportById(id);
  if (!report) {
    return { title: "Report" };
  }
  return pageMetadata({
    title: report.title,
    description: report.excerpt,
    path: `/reports-updates/${id}`,
    image: mediaSrc(report.image?.url, 1200) || undefined,
    type: "article",
  });
};

const page = async ({ params }) => {
  const { id } = await params;
  const [settings, reports, report] = await Promise.all([
    getSiteSettings(),
    getReports(),
    getReportById(id),
  ]);

  if (!report) {
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
        <BreadcrumbOne subtitle='Education Research Report' title={report.title} bgImage='/assets/images/banner/banner-event-detail.webp' />

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Report",
            headline: report.title,
            description: report.excerpt,
            image: absoluteUrl(mediaSrc(report.image?.url, 1200)),
            datePublished: report.publishedDate || report.createdAt,
            dateModified: report.updatedAt,
            keywords: report.tags,
            author: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            mainEntityOfPage: `${SITE_URL}/reports-updates/${report.id}`,
            inLanguage: "en-GB",
          }}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Reports & Updates", path: "/reports-updates" },
            { name: report.title, path: `/reports-updates/${report.id}` },
          ])}
        />

        {/* EventDetailsInner */}
        <EventDetailsInner report={report} reports={reports} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
