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
import JsonLd from "@/components/JsonLd";
import { mediaSrc } from "@/lib/image";
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) {
    return { title: "Article" };
  }
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${id}`,
    image: mediaSrc(post.image?.url, 1200) || undefined,
    type: "article",
  });
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
        <BreadcrumbOne subtitle={post.tag ? `Insights: ${post.tag}` : 'Insights'} title={post.title} bgImage='/assets/images/banner/banner-article.webp' />

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: absoluteUrl(mediaSrc(post.image?.url, 1200)),
            datePublished: post.publishedDate || post.createdAt,
            dateModified: post.updatedAt,
            author: { "@type": "Organization", name: post.author || "Ed Impact Team", url: SITE_URL },
            publisher: { "@id": `${SITE_URL}/#organization` },
            mainEntityOfPage: `${SITE_URL}/insights/${post.id}`,
            articleSection: post.tag,
            inLanguage: "en-GB",
          }}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blogs" },
            { name: post.title, path: `/insights/${post.id}` },
          ])}
        />

        {/* BlogDetailsInner */}
        <BlogDetailsInner post={post} posts={posts} />

        {/* FooterOne */}
        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
