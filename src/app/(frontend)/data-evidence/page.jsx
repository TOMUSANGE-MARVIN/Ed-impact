import BlogListInner from "@/components/BlogListInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getPosts } from "@/lib/payload";

export const metadata = {
  title: "Insights & Policy Briefs | Education Research in Africa",
  description:
    "Policy briefs, evidence-based education research and impact evaluation reports from Ed Impact Africa Foundation on strengthening education systems across Africa.",
};

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
        <BreadcrumbOne title='Insights & Policy Briefs' bgImage='assets/images/banner/banner-insights.webp' />

        {/* BlogListInner */}
        <BlogListInner posts={posts} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
