import { mediaSrc } from "@/lib/image";
import Link from "next/link";

const defaultReport = {
  title: "2025 Impact Evaluation Report",
  location: "Uganda",
  publishedDate: "2026-03-01",
  excerpt:
    "Our 2025 impact evaluation demonstrates measurable improvements in learning outcomes and instructional practice in programme schools compared with control schools, evidence that our system-led model works at scale.",
  highlights: [
    { text: "Improved Foundational Learning" },
    { text: "Stronger Teaching Practice" },
    { text: "Girls Matching Boys In Literacy" },
    { text: "Greater Government Ownership" },
    { text: "Peer Learning & Mentoring Embedded" },
    { text: "£3.12 Return Per £1 Invested" },
  ],
};

const formatDate = (dateValue) => {
  if (!dateValue) return "";
  const d = new Date(dateValue);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

function EventDetailsInner({ report: currentReport, reports = [], posts = [] }) {
  const report = currentReport || reports[0] || defaultReport;
  const otherReports = reports.filter((r) => r.id !== report.id);
  const paragraphs = (report.body || "").split(/\n\s*\n/).filter(Boolean);
  const highlights = report.highlights?.length ? report.highlights : defaultReport.highlights;
  const tags = (report.tags || "Evidence, Systems Strengthening, Impact")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className='cm-details'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='cm-details__content'>
              <div
                className='cm-details__poster'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <img src={mediaSrc(report.image?.url) || "/assets/images/event/poster.webp"} alt='Image_inner' />
              </div>
              <div className='cm-details-meta'>
                <p>
                  <i className='fa-solid fa-calendar-days' />
                  {formatDate(report.publishedDate) || "2026"}
                </p>
                <p>
                  <i className='fa-solid fa-location-dot' />
                  {report.location || "Uganda"}
                </p>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>{report.title || defaultReport.title}</h3>
                <p>{report.excerpt || defaultReport.excerpt}</p>
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>Key Findings</h3>
                <div className='cm-details__list'>
                  <ul>
                    {highlights.map((item, index) => (
                      <li key={index}>
                        <i className='icon-circle-check' />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='cm-img-group cta'>
                <div className='cm-img-single'>
                  <img src='/assets/images/event/pp-one.webp' alt='Image_inner' />
                </div>
                <div className='cm-img-single'>
                  <img src='/assets/images/event/pp-two.webp' alt='Image_inner' />
                </div>
              </div>
              <div
                className='blog-comment'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div
                  className='comment__form'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='comment-header mb-40'>
                    <h4 className='mt-8 fw-6'>Leave A Comment</h4>
                  </div>
                  <form action='#' method='post'>
                    <div className='form-group'>
                      <div className='input-icon'>
                        <input
                          type='text'
                          required=''
                          name='comment-name'
                          id='commentName'
                          placeholder='Your Name'
                        />
                        <i className='fa-solid fa-user' />
                      </div>
                      <div className='input-icon'>
                        <input
                          type='email'
                          required=''
                          name='comment-email'
                          id='commentEmail'
                          placeholder='Enter Email'
                        />
                        <i className='fa-regular fa-envelope' />
                      </div>
                    </div>
                    <div className='input-icon input-icon-alt'>
                      <textarea
                        name='comment-message'
                        id='commentMessage'
                        cols={30}
                        rows={10}
                        placeholder='Type Your Comments...'
                        defaultValue={""}
                      />
                      <i className='fa-regular fa-comments' />
                    </div>
                    <div className='cta mt-40'>
                      <div className='btn-wrapper'>
                        <button type='submit' className='btn--secondary'>
                          Submit Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-4'>
            <div className='cm-details__sidebar'>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>search here</h5>
                </div>
                <form action='#' method='post'>
                  <input
                    type='text'
                    name='search-product'
                    id='searchProduct'
                    placeholder='Search Here...'
                    required=''
                  />
                  <button type='submit'>
                    <i className='fa-solid fa-magnifying-glass' />
                  </button>
                </form>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Other Reports</h5>
                </div>
                <div className='cm-sidebar-post'>
                  {(otherReports.length ? otherReports : reports).slice(0, 3).map((r) => (
                    <div className='single-item' key={r.id}>
                      <div className='thumb'>
                        <Link href={`/reports-updates/${r.id}`}>
                          <img src={mediaSrc(r.image?.url) || "/assets/images/blog/ph-one.webp"} alt='Image_inner' />
                        </Link>
                      </div>
                      <div className='content'>
                        <p>
                          <i className='fa-solid fa-calendar-days' /> <span>{formatDate(r.publishedDate)}</span>
                        </p>
                        <p>
                          <Link href={`/reports-updates/${r.id}`}>{r.title}</Link>
                        </p>
                      </div>
                    </div>
                  ))}
                  {!reports.length &&
                    recentPosts.map((p) => (
                      <div className='single-item' key={p.id}>
                        <div className='thumb'>
                          <Link href={`/insights/${p.id}`}>
                            <img src={mediaSrc(p.image?.url) || "/assets/images/blog/ph-one.webp"} alt='Image_inner' />
                          </Link>
                        </div>
                        <div className='content'>
                          <p>
                            <Link href={`/insights/${p.id}`}>{p.title}</Link>
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Tags</h5>
                </div>
                <div className='tag-wrapper'>
                  {tags.map((tag) => (
                    <Link href='/data-evidence' key={tag}>
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              <div
                className='cm-sidebar-overview'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-logo'>
                  <img src='/assets/images/event/logo.webp' alt='Image_inner' />
                </div>
                <div className='cm-content'>
                  <p>Africa's Systems Reform Partner</p>
                  <h4>Because Every Child Deserves A System That Works</h4>
                </div>
                <div className='cm-cta'>
                  <Link
                    href='/partner-with-us'
                    aria-label='partner with us'
                    title='partner with us'
                    className='btn--primary'
                  >
                    Partner With Us <i className='fa-solid fa-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsInner;
