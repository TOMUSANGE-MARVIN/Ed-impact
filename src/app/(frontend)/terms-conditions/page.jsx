import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { getSiteSettings } from "@/lib/payload";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms of use for the Ed Impact Africa Foundation website.",
  path: "/terms-conditions",
});

const page = async () => {
  const settings = await getSiteSettings();
  const email = settings?.contact?.email || "info@edimpactafrica.org";
  const siteName = settings?.siteName || "Ed Impact Africa Foundation";

  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
        <CustomCursor />
        <TopBarOne settings={settings} />
        <HeaderOne settings={settings} />
        <BreadcrumbOne title='Terms & Conditions' />

        <section className='blog-main'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-9'>
                <p>
                  <em>
                    This page sets out the basic terms for using this website. A fuller terms of use document,
                    reviewed by legal counsel, is in progress. Questions in the meantime can be sent to{" "}
                    <a href={`mailto:${email}`}>{email}</a>.
                  </em>
                </p>

                <h3>Use of this site</h3>
                <p>
                  This website is provided by {siteName} to share information about our work, programmes, impact,
                  and ways to partner with us. Content on this site is for general informational purposes and may be
                  updated from time to time without notice.
                </p>

                <h3>Content and copyright</h3>
                <p>
                  Unless otherwise stated, the text, images, and reports published on this site belong to{" "}
                  {siteName} or are used with permission. Please contact us before reproducing or redistributing
                  content from this site beyond fair use.
                </p>

                <h3>No warranty</h3>
                <p>
                  While we try to keep information on this site accurate and current, we make no guarantee that all
                  content is complete or error-free. Statistics and figures reflect the most recent evaluation or
                  reporting period available at the time of publication.
                </p>

                <h3>External links</h3>
                <p>
                  This site may link to third-party websites, including partner and funder organisations. We are not
                  responsible for the content or practices of external sites.
                </p>

                <h3>Governing context</h3>
                <p>
                  {siteName} operates in Uganda. Any questions about these terms should be directed to{" "}
                  <a href={`mailto:${email}`}>{email}</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FooterOne settings={settings} />
      </section>
    </AOSWrap>
  );
};

export default page;
