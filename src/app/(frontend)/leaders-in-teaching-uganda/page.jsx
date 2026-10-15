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
  title: "Leaders In Teaching Uganda Programme",
  description:
    "Leaders in Teaching Uganda: a Mastercard Foundation initiative transforming secondary education, with Ed Impact Africa Foundation leading the Motivate pillar on teacher motivation and professional growth.",
  path: "/leaders-in-teaching-uganda",
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
        <BreadcrumbOne subtitle='Our Work' title='Leaders In Teaching Uganda Programme' />

        <section className='blog-main'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-9'>
                <p>
                  The Leaders in Teaching Uganda Program is a five-year Mastercard Foundation initiative aimed at
                  transforming secondary education in Uganda. Implemented through a consortium and aligned with the
                  Mastercard Foundation&rsquo;s Young Africa Works strategy to transition youth into dignified and
                  fulfilling work, the program focuses on improving the quality of teaching and learning in
                  secondary schools while promoting inclusive, gender-responsive, and innovative approaches to
                  education.
                </p>

                <h3>Goal</h3>
                <p>
                  To improve the quality of teaching and learning in secondary schools, so that young people acquire
                  the skills and competencies needed for dignified and fulfilling work.
                </p>

                <h3>Programme Objectives</h3>
                <ul>
                  <li>Attract and retain teachers, especially in remote, rural regions.</li>
                  <li>
                    Support improved pedagogy and the delivery of relevant, competency-based curriculum, to ensure
                    learners are gaining the skills and competencies they need to succeed in the world of work.
                  </li>
                  <li>Improve teacher motivation and elevate the status of the teaching profession.</li>
                  <li>Create enabling and supportive instructional environments for effective teacher practice.</li>
                  <li>
                    Support education leaders in formulating evidence-based policies and plans and foster a network
                    of education innovators.
                  </li>
                  <li>Support teachers in leveraging technology to enhance the quality of teaching and learning.</li>
                </ul>

                <h3>Approach</h3>
                <p>
                  The Leaders in Teaching Uganda program is implemented in a consortium model with oversight and
                  strategic leadership provided by the Ministry of Education and Sports. The project partners
                  include Luigi Giussani Foundation (Consortium Lead), UNICEF (Consortium Co-lead), Forum for
                  Education NGOs in Uganda (FENU), Teach For Uganda (T4U), British Council, Edukans International
                  Uganda, Brainwave Careers Uganda, Promoting Equality in African Schools (PEAS) and Ed Impact
                  Africa Foundation.
                </p>
                <p>
                  The program implementation is anchored on four core programmatic pillars, namely Recruit, Train,
                  Lead, and Motivate, each led by a specialised partner organisation funded by the Mastercard
                  Foundation.
                </p>

                <h3>Strengthening Teacher Motivation And Professional Growth</h3>
                <p>
                  Under the Leaders in Teaching (LiT) Program, Ed Impact Africa Foundation leads the Motivate Pillar
                  in close collaboration with the Ministry of Education and Sports (MoES), Directorate of Education
                  Standards and the Association of Secondary School Headteachers in Uganda. The pillar aims to
                  contribute to a motivated and professionally engaged secondary teaching workforce by strengthening
                  teachers&rsquo; intrinsic motivation, professional learning and recognition.
                </p>
                <p>Ed Impact Africa Foundation focuses on four key areas:</p>
                <ul>
                  <li>
                    <strong>Scaling the Learning Improvement Cycle</strong> to 27 local governments, increasing the
                    reach to all districts, municipalities and cities, targeting school leaders, teachers and
                    students in the Leaders in Teaching program schools only. The network meetings and peer
                    observations are expected to enhance teacher skills, confidence and a sense of professional
                    competence.
                  </li>
                  <li>
                    <strong>Teacher continuous professional development certification:</strong> annually certify
                    teachers and school leaders within the Leaders in Teaching Program partner schools in the 27
                    local governments who engage in the monthly network meetings and show evidence of incorporating
                    strategies discussed in the network meetings in their lessons, and the difference it is making
                    in the teaching and learning process. Certification is expected to signal that teachers&rsquo;
                    skills and knowledge meet recognised standards, promoting their pride in the profession.
                  </li>
                  <li>
                    <strong>Teacher and school leader award and recognition:</strong> run a micro-innovation search
                    within the Leaders in Teaching schools across the 27 local governments, with the best school
                    leaders and teacher innovators showcasing their innovations at regional radio stations to share
                    learning. This is expected to lead to satisfaction by affirming teachers&rsquo; and school
                    leaders&rsquo; contributions and hard work.
                  </li>
                  <li>
                    <strong>Dissemination of the National Teacher Policy and Rewards and Sanctions Framework:</strong>{" "}
                    building clarity, trust and fairness so that teachers feel secure and respected, thereby
                    increasing their retention.
                  </li>
                </ul>
                <p>
                  Ed Impact Africa Foundation continues working closely with the Ministry of Education and Sports
                  departments, Directorate of Education Standards, National Association of Municipal, District and
                  City Education Officers &ndash; Uganda, Uganda National Inspectors of Schools Association and the
                  Association of Secondary Schools Headteachers Uganda and other consortium partners, to embed
                  teacher motivation, professional learning and programme monitoring within existing education
                  structures and systems.
                </p>
                <p>
                  Through these interventions, Ed Impact Africa Foundation helps strengthen a culture in which
                  teachers are motivated to learn, improve their practice, collaborate with peers and contribute to
                  better learning outcomes for every learner.
                </p>

                <h3>Key Programme Outcomes For Teachers And School Leaders</h3>
                <ul>
                  <li>
                    Increased number of qualified and gender-inclusive teachers contributing to improved learning
                    outcomes and equitable access to quality education.
                  </li>
                  <li>
                    Improved teacher competencies and practices for effective Competency-Based Education delivery in
                    Ugandan secondary schools.
                  </li>
                  <li>
                    Improved utilisation of effective leadership practices by school leaders for a better teaching
                    and learning environment.
                  </li>
                  <li>
                    Improved teacher motivation reflected in increased satisfaction, professional growth, and
                    retention enabled by recognition, mentorship, and career development pathways.
                  </li>
                </ul>

                <h3>Join Us In Building A Motivated Teaching Workforce</h3>
                <p>
                  Creating a motivated teaching workforce requires collective action. Ed Impact Africa Foundation
                  invites government partners, education leaders, development organisations and other stakeholders
                  to join hands in strengthening teacher motivation, supporting continuous professional learning and
                  recognising teachers&rsquo; contributions. Together, we can build an education system where
                  teachers are inspired to improve, learners are empowered to thrive, and every young person has the
                  opportunity to acquire the skills needed for a dignified and fulfilling future.
                </p>
                <p>
                  <a
                    href='/partner-with-us'
                    aria-label='partner with us'
                    title='partner with us'
                    className='btn--primary'
                  >
                    Partner With Us <i className='fa-solid fa-arrow-right' />
                  </a>
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
