import { notFound } from "next/navigation";
import BlogDetailsInner from "@/components/BlogDetailsInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings, getPosts, getPostById } from "@/lib/payload";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) {
    return { title: "Article | Ed Impact Africa Foundation" };
  }
  return {
    title: `${post.title} | Ed Impact Africa Foundation`,
    description: post.excerpt,
  };
};

const page = async ({ params }) => {
  const { id } = await params;
  const [settings, posts, post] = await Promise.all([
    getSiteSettings(),
    getPosts(),
    getPostById(id),
  ]);

  if (!post) {
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
        <BreadcrumbOne title={post.title} bgImage='/assets/images/banner/banner-article.webp' />

        {/* BlogDetailsInner */}
        <BlogDetailsInner post={post} posts={posts} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
