// Shared SEO settings: the canonical origin, the indexing switch, and the
// schema.org entities that describe the organisation to search engines.

export const SITE_NAME = "Ed Impact Africa Foundation";

export const SITE_URL = (process.env.NEXT_PUBLIC_SERVER_URL || "https://edimpactafrica.org").replace(/\/$/, "");

// The site stays out of search results until ALLOW_INDEXING=true is set on the
// production deployment, so staging and preview builds are never indexed.
export const isIndexable = () => process.env.ALLOW_INDEXING === "true";

export const DEFAULT_OG_IMAGE = "/assets/images/banner/banner-about.webp";

// Builds the per-page metadata fields that every route needs: a canonical URL
// and matching Open Graph / Twitter cards.
export const pageMetadata = ({ title, description, path, image = DEFAULT_OG_IMAGE, type = "website" }) => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    siteName: SITE_NAME,
    locale: "en_GB",
    type,
    images: [{ url: image, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
});

// Topics the organisation works on, taken from the approved SEO keyword themes.
// Exposed through Organization.knowsAbout so search engines connect the brand
// to these entities.
export const KNOWS_ABOUT = [
  "Education system strengthening",
  "Teacher professional development",
  "Continuous professional development for teachers",
  "Teacher capacity development",
  "Teacher motivation",
  "Intrinsic motivation in education",
  "Teacher agency",
  "Teacher autonomy",
  "Teacher coaching and mentoring",
  "Peer learning for teachers",
  "Professional learning communities",
  "Education leadership",
  "School leadership development",
  "Education quality",
  "Learning outcomes",
  "Foundational learning",
  "Education equity",
  "Education research",
  "Evidence-based education",
  "Education impact evaluation",
  "Education reform",
  "Education policy",
  "Education in Africa",
  "Education in Uganda",
];

export const organizationJsonLd = (settings) => {
  const social = settings?.social || {};
  const sameAs = [social.facebook, social.twitterX, social.linkedin, social.youtube].filter(
    // The CMS falls back to bare platform homepages, which are not profiles.
    (url) => url && !/^https?:\/\/(www\.)?(facebook|x|linkedin|youtube)\.com\/?$/.test(url)
  );

  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE_URL}/#organization`,
    name: settings?.siteName || SITE_NAME,
    alternateName: "Ed Impact Africa",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/logo-icon.webp`,
    description:
      "Pan-African education NGO strengthening education systems across Africa through teacher professional development, teacher motivation, education leadership and evidence-based education research, starting in Uganda.",
    slogan: settings?.tagline,
    email: settings?.contact?.email,
    telephone: settings?.contact?.phoneOne,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    areaServed: [
      { "@type": "Country", name: "Uganda" },
      { "@type": "Place", name: "Africa" },
    ],
    knowsAbout: KNOWS_ABOUT,
    ...(sameAs.length ? { sameAs } : {}),
  };
};

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE_URL}/#organization` },
});

export const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const absoluteUrl = (path) => (!path ? undefined : /^https?:/.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`);
