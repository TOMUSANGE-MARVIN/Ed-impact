import BlogListInner from "@/components/BlogListInner";
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
  title: "Education Research & Evidence from Africa",
  description:
    "Evidence-based education research, policy briefs and data on teacher motivation, teacher development and learning outcomes from Ed Impact Africa Foundation.",
  path: "/data-evidence",
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
        <BreadcrumbOne subtitle='Data & Evidence' title='Education Research & Evidence' bgImage='assets/images/banner/banner-insights.webp' />

        {/* BlogListInner */}
        <BlogListInner posts={posts} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
