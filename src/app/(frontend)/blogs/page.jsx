import BlogGridInner from "@/components/BlogGridInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getPosts } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog: Teacher Motivation & Education Insights",
  description:
    "Articles on teacher motivation, teacher professional development, education reform and what works in education across Africa, from the Ed Impact Africa team.",
  path: "/blogs",
});

const page = async () => {
  const [settings, posts] = await Promise.all([getSiteSettings(), getPosts()]);

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
        <BreadcrumbOne subtitle='Blog' title='Insights On Teaching & Learning In Africa' bgImage='assets/images/banner/banner-insights.webp' />

        {/* BlogGridInner */}
        <BlogGridInner posts={posts} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
