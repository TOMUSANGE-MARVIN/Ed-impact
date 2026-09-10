import Link from "next/link";

const defaultTeam = [
  { name: "Modern Karema Musiimenta", role: "Chief Executive Officer", photo: { url: "assets/images/team/one.png" } },
  { name: "Wilber Birungi", role: "Chief Finance Officer", photo: { url: "assets/images/team/two.png" } },
  { name: "Brenda Akite Otika", role: "Chief Program Officer", photo: { url: "assets/images/team/three.png" } },
  { name: "Janat Namukose", role: "Chief People Officer", photo: { url: "assets/images/team/four.png" } },
  { name: "Prof. Betty Ezati", role: "Board Chairperson", photo: { url: "assets/images/team/eight.png" } },
  { name: "Dr. Cleophas Mugenyi", role: "Board Member", photo: { url: "assets/images/team/nine.png" } },
  { name: "CPA Fredrick Kibeddi", role: "Board Member, Finance & Risk", photo: { url: "assets/images/team/ten.png" } },
  { name: "CPA Charles Lutimba", role: "Board Member, Finance & Risk", photo: { url: "assets/images/team/eleven.png" } },
];

const delays = [0, 300, 600, 900];

const TeamInner = ({ teamMembers = defaultTeam }) => {
  return (
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
                Governance &amp; Leadership
              </span>
              <h2 className='title-animation_inner'>
                Our Executive Team
                <span>&amp; Board</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-30'>
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
                    <Link href='/team-details'>
                      <img src={member.photo?.url || "assets/images/team/one.png"} alt={member.name} />
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
                      <Link href='/team-details'>{member.name}</Link>
                    </h6>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='spade'>
        <img src='assets/images/sprade-green.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default TeamInner;
