import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import { Caveat, Outfit, Source_Sans_3 } from "next/font/google";
import Script from "next/script";

import ChatbotWidget from "@/components/ChatbotWidget";
import InitializeAOS from "@/helper/InitializeAOS";
import RouteScrollToTop from "@/helper/RouteScrollToTop";

// Pages read their content from Payload at request time, so edits made in the
// admin panel appear immediately. Without this Next prerenders them at build
// time, which both freezes the content until the next deploy and requires a
// populated database during the image build.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Ed Impact Africa Foundation | Transforming Education Systems Across Africa",
  description:
    "Ed Impact Africa Foundation partners with governments and communities to strengthen education systems across Africa, so every learner receives equitable, high-quality and relevant teaching and learning.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
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

        {children}

        <ChatbotWidget />

        {/* Only needed for the FAQ/donate accordions, which bootstrap wires up
            via delegated listeners, so it can load after the page is idle. */}
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
