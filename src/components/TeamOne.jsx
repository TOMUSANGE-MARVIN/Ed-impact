import { mediaSrc } from "@/lib/image";
import Link from "next/link";

const defaultTeam = [
  { name: "Modern Karema Musiimenta", role: "Chief Executive Officer", photo: { url: "assets/images/team/one.webp" } },
  { name: "Wilber Birungi", role: "Chief Finance Officer", photo: { url: "assets/images/team/two.webp" } },
  { name: "Brenda Akite Otika", role: "Chief Program Officer", photo: { url: "assets/images/team/three.webp" } },
  { name: "Janat Namukose", role: "Chief People Officer", photo: { url: "assets/images/team/four.webp" } },
];

const delays = [0, 300, 600, 900];

const TeamOne = ({ teamMembers = defaultTeam }) => {
  return (
    <>
      <section className='team'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-6'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-education' />
                  Leadership You Can Trust
                </span>
                <h2 className='title-animation_inner'>
                  Meet Our Executive{" "}
                  <span>Team</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row gutter-40'>
            {teamMembers.map((member, index) => (
              <div className='col-12 col-sm-6 col-xl-3' key={member.id || index}>
                <div
                  className='team__single-wrapper'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={delays[index % delays.length]}
                >
                  <div className='team__single van-tilt'>
                    <div className='team__single-thumb'>
                      <Link href={`/leadership-board/${member.id}`}>
                        <img src={mediaSrc(member.photo?.url) || "assets/images/team/one.webp"} alt={member.name} />
                      </Link>
                      <div className='team__icons'>
                        <div className='team__single-content__icon'>
                          <i className='fa-solid fa-plus' />
                        </div>
                        <div className='team__single__thumb-social'>
                          <ul>
                            <li>
                              <Link href='/'>
                                <i className='fa-brands fa-facebook-f' />
                              </Link>
                            </li>
                            <li>
                              <Link href='/'>
                                <i className='fa-brands fa-x-twitter' />
                              </Link>
                            </li>
                            <li>
                              <Link href={member.linkedinUrl || '/'}>
                                <i className='fa-brands fa-linkedin-in' />
                              </Link>
                            </li>
                            <li>
                              <Link href={member.email ? `mailto:${member.email}` : '/'}>
                                <i className='fa-brands fa-envelope' />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='team__single-content'>
                      <h6>
                        <Link href={`/leadership-board/${member.id}`}>{member.name}</Link>
                      </h6>
                      <p>{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='section__cta cta text-center'>
                <Link
                  href='/leadership-board'
                  aria-label='our team'
                  title='our team'
                  className='btn--primary'
                >
                  View All
                  <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='spade'>
          <img src='assets/images/sprade-green.webp' alt='' />
        </div>
      </section>
    </>
  );
};

export default TeamOne;
