import { mediaSrc } from "@/lib/image";
import Link from "next/link";

const defaultTeam = [
  { name: "Modern Karema Musiimenta", role: "Chief Executive Officer", category: "executive", photo: { url: "assets/images/team/one.webp" } },
  { name: "Wilber Birungi", role: "Chief Finance Officer", category: "executive", photo: { url: "assets/images/team/two.webp" } },
  { name: "Brenda Akite Otika", role: "Chief Program Officer", category: "executive", photo: { url: "assets/images/team/three.webp" } },
  { name: "Janat Namukose", role: "Chief People Officer", category: "executive", photo: { url: "assets/images/team/four.webp" } },
  { name: "Prof. Betty Ezati", role: "Board Chairperson", category: "board", photo: { url: "assets/images/team/eight.webp" } },
  { name: "Dr. Cleophas Mugenyi", role: "Board Member", category: "board", photo: { url: "assets/images/team/nine.webp" } },
  { name: "CPA Fredrick Kibeddi", role: "Board Member, Finance & Risk", category: "board", photo: { url: "assets/images/team/ten.webp" } },
  { name: "CPA Charles Lutimba", role: "Board Member, Finance & Risk", category: "board", photo: { url: "assets/images/team/eleven.webp" } },
];

const categoryLabels = {
  board: "Board Of Directors",
  executive: "Executive Team",
  "senior-leadership": "Senior Leadership Team",
  staff: "Our Wider Team",
};

const categoryOrder = ["board", "executive", "senior-leadership", "staff"];

const delays = [0, 300, 600, 900];

const TeamGroup = ({ label, members, anchorId }) => (
  <div className='team__group' id={anchorId}>
    <div className='row justify-content-center'>
      <div className='col-12'>
        <h3 className='team__group-title'>{label}</h3>
      </div>
    </div>
    <div className='row gutter-30'>
      {members.map((member, index) => (
        <div className='col-12 col-sm-6 col-xl-3' key={member.id || member.name}>
          <div
            className='team__single-wrapper'
            data-aos='fade-up'
            data-aos-duration={1000}
            data-aos-delay={delays[index % delays.length]}
          >
            <div className='team__single van-tilt'>
              <div className='team__single-thumb'>
                <Link href={`/leadership-board/${member.id}`}>
                  <img src={mediaSrc(member.photo?.url) || "assets/images/team/placeholder.webp"} alt={member.name} />
                </Link>
                <div className='team__icons'>
                  <div className='team__single-content__icon'>
                    <i className='fa-solid fa-plus' />
                  </div>
                  <div className='team__single__thumb-social'>
                    <ul>
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
                <Link href={`/leadership-board/${member.id}`} className='team__read-more'>
                  Read More <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TeamInner = ({ teamMembers = defaultTeam }) => {
  const groups = categoryOrder
    .map((category) => ({
      category,
      label: categoryLabels[category],
      members: teamMembers.filter((member) => (member.category || "executive") === category),
    }))
    .filter((group) => group.members.length > 0);

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
                Our Board, Leadership{" "}
                <span>&amp; Team</span>
              </h2>
            </div>
          </div>
        </div>
        {groups.map((group, index) => (
          <TeamGroup
            key={group.category}
            label={group.label}
            members={group.members}
            isFirst={index === 0}
            anchorId={group.category === "staff" ? "wider-team" : undefined}
          />
        ))}
      </div>
      <div className='spade'>
        <img src='assets/images/sprade-green.webp' alt='Image_inner' />
      </div>
    </section>
  );
};

export default TeamInner;
