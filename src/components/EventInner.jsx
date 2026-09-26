import { mediaSrc } from "@/lib/image";
import Link from "next/link";

const fallbackImages = ["assets/images/event/one.webp", "assets/images/event/two.webp", "assets/images/event/three.webp"];

const defaultReports = [
  {
    id: "1",
    title: "2025 Impact Evaluation Report: Learning Outcomes Across Programme Schools",
    location: "Uganda",
    publishedDate: "2026-03-01",
  },
  {
    id: "2",
    title: "Annual Report 2025: Localisation & Scale",
    location: "Uganda",
    publishedDate: "2026-02-01",
  },
  {
    id: "3",
    title: "From STIR Education To Ed Impact Africa Foundation: A Transition Update",
    location: "Uganda",
    publishedDate: "2026-01-01",
  },
];

const formatDate = (dateValue) => {
  if (!dateValue) return "";
  const d = new Date(dateValue);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long" });
};

const EventInner = ({ reports = defaultReports }) => {
  const list = reports.length ? reports : defaultReports;
  const [featured, ...rest] = list;

  return (
    <section className='event event-alt'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-documents' />
                Insight Production
              </span>
              <h2 className='title-animation_inner'>
                Annual <span>Reports</span> &amp; Updates
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-30'>
          <div className='col-12 col-lg-6 col-xl-7'>
            {featured && (
              <div
                className='event__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='event__single van-tilt'>
                  <div className='event__single-thumb'>
                    <img src={mediaSrc(featured.image?.url) || fallbackImages[0]} alt='Image_inner' />
                  </div>
                  <div className='event__content'>
                    <span>{formatDate(featured.publishedDate)}</span>
                    <h4>
                      <Link href={`/reports-updates/${featured.id}`}>{featured.title}</Link>
                    </h4>
                    <p>
                      <i className='fa-solid fa-location-dot' /> {featured.location || "Uganda"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='col-12 col-lg-6 col-xl-5'>
            {rest.map((report, index) => (
              <div
                className='event__single-wrapper'
                data-aos='fade-left'
                data-aos-duration={1000}
                data-aos-delay={index === 0 ? 0 : 300}
                key={report.id}
              >
                <div className='event__single event-single-alt van-tilt'>
                  <div className='event__single-thumb'>
                    <img
                      src={mediaSrc(report.image?.url) || fallbackImages[(index + 1) % fallbackImages.length]}
                      alt='Image_inner'
                    />
                  </div>
                  <div className='event__content'>
                    <span>{formatDate(report.publishedDate)}</span>
                    <h4>
                      <Link href={`/reports-updates/${report.id}`}>{report.title}</Link>
                    </h4>
                    <p>
                      <i className='fa-solid fa-location-dot' /> {report.location || "Uganda"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='spade'>
        <img
          src='assets/images/blog/spade-base.webp'
          alt='Image_inner'
          className='base-img'
        />
      </div>
    </section>
  );
};

export default EventInner;
