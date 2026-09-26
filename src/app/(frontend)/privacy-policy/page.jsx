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
  title: "Privacy Policy",
  description:
    "How Ed Impact Africa Foundation handles information submitted through this website.",
  path: "/privacy-policy",
});

const page = async () => {
  const settings = await getSiteSettings();
  const email = settings?.contact?.email || "info@edimpactafrica.org";

  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
        <CustomCursor />
        <TopBarOne settings={settings} />
        <HeaderOne settings={settings} />
        <BreadcrumbOne title='Privacy Policy' />

        <section className='blog-main'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-9'>
                <p>
                  <em>
                    This page is a plain-language summary of how we handle information submitted through this
                    website. A full privacy policy, reviewed by legal counsel, is in progress. If you have a
                    specific question about your data before then, contact us at{" "}
                    <a href={`mailto:${email}`}>{email}</a>.
                  </em>
                </p>

                <h3>What we collect</h3>
                <p>
                  We only collect what you choose to submit directly to us, such as your name, email address and
                  message when you use the Contact Us form or a partnership inquiry form on this site. We do not
                  collect this information through any other means.
                </p>

                <h3>How we use it</h3>
                <p>
                  We use the information you submit solely to respond to your inquiry or request, whether that is a
                  general question, a partnership proposal, or a media or careers enquiry. We do not sell or rent
                  your information to third parties.
                </p>

                <h3>Cookies and tracking</h3>
                <p>
                  This site does not currently use advertising or third-party tracking cookies. Standard technical
                  cookies required for the site to function may be set by your browser.
                </p>

                <h3>Data retention</h3>
                <p>
                  We keep the information you submit for as long as needed to respond to and follow up on your
                  inquiry, and in line with our organisational record-keeping practices.
                </p>

                <h3>Contact</h3>
                <p>
                  For any question about how your information is handled, or to request that we delete information
                  you have submitted, contact us at <a href={`mailto:${email}`}>{email}</a>.
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
