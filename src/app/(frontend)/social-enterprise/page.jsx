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
  title: "School-Based Teacher Professional Development",
  description:
    "A paid partnership for schools in Uganda: school-based teacher professional development, professional learning communities, peer observation and CPD certificates.",
  path: "/social-enterprise",
});

const page = async () => {
  const settings = await getSiteSettings();

  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
        <CustomCursor />
        <TopBarOne settings={settings} />
        <HeaderOne settings={settings} />
        <BreadcrumbOne subtitle='Social Enterprise' title='School-Based Teacher Professional Development' />

        <section className='blog-main'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-9'>
                <h3>Empowering Excellence: Elevate Your School With Ed Impact Africa Foundation</h3>
                <p>
                  <em>Transforming Classrooms. Inspiring Teachers. Delivering Results.</em>
                </p>

                <p>
                  Since 2014, STiR Education has been a cornerstone of teacher development in Uganda, partnering with
                  the Ministry of Education and Sports across 155 local governments. Today, we are proud to
                  announce a bold new chapter.
                </p>
                <p>
                  As part of our global transition toward localised expertise, STiR Education Uganda is becoming{" "}
                  <strong>Ed Impact Africa Foundation</strong>. While our name is changing, our commitment to
                  intrinsic motivation and pedagogical excellence is stronger than ever.
                </p>

                <h3>The Opportunity – A Premium Partnership For Visionary Schools</h3>
                <p>
                  We are inviting a select group of schools to join our exclusive Service-for-Pay Model. This is not
                  just a training program, it is a commitment to becoming a centre of educational excellence. By
                  joining this cohort, your school takes full ownership of teacher continuous professional
                  development tailored specifically to your unique needs.
                </p>

                <h3>Our Exclusive Offer</h3>
                <p>
                  We provide a comprehensive, data-driven support system designed to turn your teaching staff into
                  changemakers.
                </p>
                <ul>
                  <li>
                    <strong>Customised training needs assessment:</strong> We don&rsquo;t believe in one size fits
                    all. Annually, every participating school receives a dedicated assessment to identify the
                    unique professional development needs of your teachers. This ensures every training session is
                    relevant, targeted and impactful.
                  </li>
                  <li>
                    <strong>3 Professional Learning Community sessions (2hrs each).</strong> Each term, your Deputy
                    and Director of Studies will be empowered to deliver 3 structured, high quality teacher training
                    sessions – one per month. These sessions are designed to be immediately practical, equipping
                    teachers with strategies they can apply in the classroom the very next day.
                  </li>
                  <li>
                    <strong>In classroom implementation with peer observation (80 minutes each).</strong> Learning
                    doesn&rsquo;t stop in the training room. Every participating teacher applies what they have
                    learned in live classroom lessons, supported by structured peer observation and meaningful
                    feedback. This cycle of learn, apply, reflect is what drives lasting improvement in teaching
                    quality.
                  </li>
                  <li>
                    <strong>Annual CPD certification.</strong> Every teacher and headteacher who completes the
                    program receives a certificate of merit, verified against attendance and implementation records
                    and fully aligned with the National Teacher Policy and the Uganda Teachers Bill. This is
                    professional recognition your teachers can be proud of.
                  </li>
                  <li>
                    <strong>School level monitoring and impact evaluation.</strong> Our team conducts ongoing
                    monitoring to ensure you see a tangible return on your investment in classroom quality.
                  </li>
                </ul>

                <h3>Your Investment In Excellence</h3>
                <p>
                  To maintain the high quality of this specialised service, participating schools contribute UGX
                  1,000,000 per term (UGX 3,000,000 per year). This is an investment in your teachers, your learners
                  and your school&rsquo;s reputation for excellence.
                </p>

                <h3>What We Ask Of You</h3>
                <p>
                  Our partnership model is built on shared commitment. To get the most from this program, we ask
                  that your school:
                </p>
                <ul>
                  <li>Register and enroll your school in the program.</li>
                  <li>
                    Champion implementation – ensure every participating teacher applies their learning in the
                    classroom and takes part in peer observation.
                  </li>
                  <li>
                    Provide leadership oversight – as the headteacher, actively ensure your teachers and learners
                    are gaining full value from the program.
                  </li>
                </ul>
                <p>
                  The schools that thrive in this program are the ones where leadership is engaged, curious and
                  committed to continuous improvement.
                </p>

                <h3>Ready To Join?</h3>
                <p>
                  Spaces are strictly limited. We encourage you to register early to secure your school&rsquo;s
                  place in this transformative program.
                </p>
                <p>
                  <a
                    href='https://forms.gle/fBBanc5ouGoVh9yC7'
                    target='_blank'
                    rel='noreferrer'
                    className='btn--primary'
                  >
                    Register Your School <i className='fa-solid fa-arrow-right' />
                  </a>
                </p>
                <p>
                  For enquiries, contact Oola Lorna Peace Precious on{" "}
                  <a href='mailto:olpprecious@stireducation.org'>olpprecious@stireducation.org</a> or through the
                  phone contact +256 785 084295 / +256 752 686889.
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
