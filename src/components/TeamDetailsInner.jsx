import Link from "next/link";

const defaultMember = {
  name: "Modern Karema Musiimenta",
  role: "Chief Executive Officer",
  photo: { url: "assets/images/team/one.png" },
  bio: "Modern leads Ed Impact Africa Foundation's transition from STIR Education Uganda, drawing on his experience as Uganda Country Director-STIR Education and Head of National Programs. He is a Board Member and Chairperson of the Membership Committee at the Regional Education Learning Initiative (RELI Africa).\n\nBefore joining Ed Impact Africa Foundation, Modern held leadership roles across the education and development sector in Uganda, including General Manager at Jobconnect Ltd and Branch Operations Supervisor at NSSF Uganda. His career reflects a consistent thread: building institutions that outlast any single project, and putting local ownership at the centre of reform. Today, he leads Ed Impact Africa Foundation through its transition from a country office of a global INGO into an independent, locally governed Pan-African organisation.",
};

const TeamDetailsInner = ({ member: currentMember }) => {
  const member = currentMember || defaultMember;
  const fallbackBio = currentMember
    ? `${member.name} is a valued member of the Ed Impact Africa Foundation team, serving as ${member.role}. Full biography coming soon.`
    : defaultMember.bio;
  const paragraphs = (member.bio || fallbackBio).split(/\n\s*\n/).filter(Boolean);
  const intro = paragraphs[0] || fallbackBio;
  const rest = paragraphs.slice(1);

  return (
    <section className='team-details'>
      <div className='container'>
        <div className='row gutter-40 align-items-center'>
          <div className='col-12 col-lg-6 col-xl-5'>
            <div
              className='team-details__thumb'
              data-aos='zoom-in'
              data-aos-duration={1000}
            >
              <img src={member.photo?.url || "assets/images/team/one.png"} alt={member.name} />
            </div>
          </div>
          <div className='col-12 col-lg-6 col-xl-7'>
            <div
              className='team-details__content'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='team-details__meta'>
                <h4 className='title-animation_inner'>{member.name}</h4>
                <p className='designation'>{member.role}</p>
                <div className='social'>
                  <a
                    href={member.linkedinUrl || "https://www.linkedin.com/"}
                    target='_blank'
                    aria-label='connect on linkedin'
                    title='linkedin'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-linkedin-in' />
                  </a>
                  <a
                    href={member.email ? `mailto:${member.email}` : "#"}
                    aria-label='email'
                    title='email'
                    rel='noreferrer'
                  >
                    <i className='fa-solid fa-envelope' />
                  </a>
                </div>
                <p>{intro}</p>
              </div>
              <div className='team-details__cta cta'>
                <Link
                  href='/partner-with-us'
                  aria-label='partner with us'
                  title='partner with us'
                  className='btn--primary'
                >
                  {" "}
                  Partner With Us <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
          {rest.length > 0 && (
            <div className='col-12'>
              <div
                className='about-me'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <h4 className='title-animation_inner'>About Me</h4>
                {rest.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsInner;
