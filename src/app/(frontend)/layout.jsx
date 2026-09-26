import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import { Caveat, Outfit, Source_Sans_3 } from "next/font/google";
import Script from "next/script";

import ChatbotWidget from "@/components/ChatbotWidget";
import JsonLd from "@/components/JsonLd";
import InitializeAOS from "@/helper/InitializeAOS";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import { getSiteSettings } from "@/lib/payload";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  isIndexable,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

// Pages read their content from Payload at request time, so edits made in the
// admin panel appear immediately. Without this Next prerenders them at build
// time, which both freezes the content until the next deploy and requires a
// populated database during the image build.
export const dynamic = "force-dynamic";

export const generateMetadata = () => ({
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ed Impact Africa Foundation | Education System Strengthening in Africa",
    template: "%s | Ed Impact Africa",
  },
  description:
    "Ed Impact Africa Foundation partners with governments to strengthen education systems across Africa through teacher professional development, teacher motivation and evidence.",
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image" },
  robots: isIndexable()
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
    : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
});

// Self-hosted with size-adjusted fallbacks, so text doesn't wait on (or shift
// after) a Google Fonts request. Exposed as the variables that --nunito,
// --caveat and --outfit in abstracts/_variables.scss point at.
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-sans",
});
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="en-GB"
      className={`${sourceSans.variable} ${caveat.variable} ${outfit.variable}`}
    >
      <head>
        <link rel="stylesheet" href="/assets/fonts/css/all.min.css" />
        <link rel="stylesheet" href="/assets/fonts/css/charifund.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />

        <link
          rel="stylesheet"
          href="/assets/css/default-theme.css"
          id="switch-color"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <InitializeAOS />
        <RouteScrollToTop />
        <JsonLd data={organizationJsonLd(settings)} />
        <JsonLd data={websiteJsonLd()} />

        {children}

        <ChatbotWidget />

        {/* Only needed for the FAQ/donate accordions, which bootstrap wires up
            via delegated listeners, so it can load after the page is idle. */}
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
