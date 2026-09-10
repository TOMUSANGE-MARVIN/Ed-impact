"use client";

const TopBarOne = ({ settings }) => {
  const email = settings?.contact?.email || "info@edimpactafricafoundation.org";
  const phone = settings?.contact?.phoneOne || "+256 781 064 668";
  const tagline =
    settings?.tagline ||
    "Because every African child deserves an education system that unlocks their potential.";
  const social = settings?.social || {};

  return (
    <div className="topbar topbar--secondary d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="topbar__inner">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-xxl-5">
                  <div className="topbar__list-wrapper">
                    <ul className="topbar__list">
                      <li>
                        <a href={`mailto:${email}`}>
                          <i className="fa-regular fa-envelope"></i>
                          {email}
                        </a>
                      </li>
                      <li>
                        <a href={`tel:${phone.replace(/\s/g, "")}`}>
                          <i className="fa-solid fa-phone"></i>
                          {phone}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 d-none d-xxl-block">
                  <div className="topbar__extra text-center">
                    <p>
                      <i className="icon-heart-hand"></i> {tagline}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-3">
                  <div className="topbar__items justify-content-end">
                    <div className="social">
                      <a
                        href={social.facebook || "https://www.facebook.com/"}
                        target="_blank"
                        rel="noreferrer"
                        title="facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a
                        href={social.twitterX || "https://x.com/"}
                        target="_blank"
                        rel="noreferrer"
                        title="twitter"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a
                        href={social.linkedin || "https://www.linkedin.com/"}
                        target="_blank"
                        rel="noreferrer"
                        title="linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a
                        href={social.youtube || "https://www.youtube.com/"}
                        target="_blank"
                        rel="noreferrer"
                        title="youtube"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarOne;
