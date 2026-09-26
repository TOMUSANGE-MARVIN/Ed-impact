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

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const report = await getReportById(id);
  if (!report) {
    return { title: "Report Detail | Ed Impact Africa Foundation" };
  }
  return {
    title: `${report.title} | Ed Impact Africa Foundation`,
    description: report.excerpt,
  };
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
        <BreadcrumbOne title={report.title} bgImage='/assets/images/banner/banner-event-detail.webp' />

        {/* EventDetailsInner */}
        <EventDetailsInner report={report} reports={reports} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
