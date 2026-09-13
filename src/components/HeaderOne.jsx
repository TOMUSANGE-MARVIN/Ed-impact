"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderOne = ({ settings }) => {
  const logoUrl = settings?.logo?.url || "/assets/images/logo.png";
  const phone = settings?.contact?.phoneOne || "+256 781 064 668";
  const social = settings?.social || {};
  let pathname = usePathname();
  let [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenuListRef = useRef(null);

  useEffect(() => {
    const desktopMenu = document.querySelector(".navbar__menu");

    if (desktopMenu && mobileMenuListRef.current) {
      mobileMenuListRef.current.innerHTML = desktopMenu.innerHTML;

      const setupDropdownToggles = (container) => {
        const dropdownLabels = container.querySelectorAll(
          ".navbar__dropdown-label"
        );

        dropdownLabels.forEach((label) => {
          label.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const subMenu = this.nextElementSibling;

            // ✅ Only close siblings within the same level (UL)
            const siblingLabels = Array.from(
              this.closest("ul")?.querySelectorAll(
                ":scope > li > .navbar__dropdown-label"
              ) || []
            );

            siblingLabels.forEach((sibling) => {
              const siblingSubMenu = sibling.nextElementSibling;

              if (
                sibling !== this &&
                siblingSubMenu &&
                siblingSubMenu.classList.contains("navbar__sub-menu")
              ) {
                siblingSubMenu.style.maxHeight = "0px";
                siblingSubMenu.classList.remove("show");
                sibling.classList.remove("navbar__item-active");
              }
            });

            // Toggle current submenu with smooth animation
            if (subMenu && subMenu.classList.contains("navbar__sub-menu")) {
              const isOpen = subMenu.classList.contains("show");

              if (isOpen) {
                subMenu.style.maxHeight = "0px";
                subMenu.classList.remove("show");
                this.classList.remove("navbar__item-active");
              } else {
                subMenu.classList.add("show");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                this.classList.add("navbar__item-active");
              }
            }
          });
        });
      };

      setupDropdownToggles(mobileMenuListRef.current);
    }
  }, []);

  return (
    <>
      <header
        className={`header header-secondary ${scroll && "sticky-header"}`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='main-header__menu-box'>
                <nav className='navbar p-0'>
                  <div className='navbar-logo'>
                    <Link href='/'>
                      <img src={logoUrl} alt='Ed Impact Africa Foundation' />
                    </Link>
                  </div>
                  <div className='navbar__menu-wrapper'>
                    <div className='navbar__menu d-none d-xl-block'>
                      <ul className='navbar__list'>
                        <li
                          className={`navbar__item nav-fade ${
                            pathname === "/" ? "active" : ""
                          }`}
                        >
                          <Link href='/'>Home</Link>
                        </li>
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            ["/about-us", "/leadership-board", "/team-details", "/careers"].includes(pathname) ? "active" : ""
                          }`}
                        >
                          <Link
                            href='/about-us'
                            aria-label='dropdown menu'
                            className='navbar__dropdown-label dropdown-label-alter'
                          >
                            About Us
                          </Link>
                          <ul className='navbar__sub-menu'>
                            <li
                              className={
                                ["/about-us"].includes(pathname) ? "active" : ""
                              }
                            >
                              <Link href='/about-us'>Vision, Mission &amp; Values</Link>
                            </li>
                            <li
                              className={
                                ["/leadership-board"].includes(pathname) ? "active" : ""
                              }
                            >
                              <Link href='/leadership-board'>Leadership &amp; Board</Link>
                            </li>
                            <li
                              className={
                                ["/careers"].includes(pathname) ? "active" : ""
                              }
                            >
                              <Link href='/careers'>Careers &amp; Volunteering</Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            pathname === "/our-work" || pathname.startsWith("/our-work")
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            href='/our-work'
                            aria-label='dropdown menu'
                            className='navbar__dropdown-label dropdown-label-alter'
                          >
                            Our Work
                          </Link>
                          <ul className='navbar__sub-menu'>
                            <li
                              className={
                                ["/our-work"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/our-work'>The 4 Interventions</Link>
                            </li>
                            <li>
                              <Link href='/our-work#our-approach'>
                                Our Approach &amp; Theory Of Change
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            pathname === "/impact" ||
                            [
                              "/reports-updates",
                              "/report-detail",
                              "/data-evidence",
                              "/blogs",
                            ].includes(pathname) ||
                            pathname.startsWith("/insights")
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            href='/impact'
                            aria-label='dropdown menu'
                            className='navbar__dropdown-label dropdown-label-alter'
                          >
                            Impact
                          </Link>
                          <ul className='navbar__sub-menu'>
                            <li
                              className={pathname === "/impact" ? "active" : ""}
                            >
                              <Link href='/impact'>Our Impact</Link>
                            </li>
                            <li
                              className={
                                ["/data-evidence", "/blogs", "/insights"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/data-evidence'>Data &amp; Evidence</Link>
                            </li>
                            <li
                              className={
                                ["/reports-updates", "/report-detail"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href='/reports-updates'>
                                Annual Reports &amp; Testimonies
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={`navbar__item nav-fade ${
                            ["/blogs", "/data-evidence", "/insights"].includes(pathname)
                              ? "active"
                              : ""
                          } `}
                        >
                          <Link href='/blogs'>Blogs</Link>
                        </li>
                        <li
                          className={`navbar__item nav-fade ${
                            ["/faq"].includes(pathname) ? "active" : ""
                          } `}
                        >
                          <Link href='/faq'>FAQs</Link>
                        </li>
                        <li
                          className={`navbar__item nav-fade ${
                            ["/contact-us"].includes(pathname) ? "active" : ""
                          } `}
                        >
                          <Link href='/contact-us'>Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                    <div className='contact-btn'>
                      <div className='contact-icon'>
                        <i className='icon-support' />
                      </div>
                      <div className='contact-content'>
                        <p>Call Us Now</p>
                        <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                      </div>
                    </div>
                  </div>
                  <div className='navbar__options'>
                    <div className='navbar__mobile-options '>
                      <Link
                        href='/partner-with-us'
                        className='btn--primary d-none d-md-flex'
                      >
                        Partner With Us <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                    <button
                      onClick={handleMobileMenu}
                      className='open-offcanvas-nav d-flex d-xl-none'
                      aria-label='toggle mobile menu'
                      title='open offcanvas menu'
                    >
                      <span className='icon-bar top-bar' />
                      <span className='icon-bar middle-bar' />
                      <span className='icon-bar bottom-bar' />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu mobile-menu--primary d-block d-xxl-none ${
          mobileMenu ? "show-menu" : ""
        }`}
      >
        <nav className='mobile-menu__wrapper'>
          <div className='mobile-menu__header nav-fade'>
            <div className='logo'>
              <Link href='/' aria-label='home page' title='logo'>
                <img src='/assets/images/logo.png' alt='Ed Impact Africa Foundation' />
              </Link>
            </div>
            <button
              onClick={handleMobileMenu}
              aria-label='close mobile menu'
              className='close-mobile-menu'
            >
              <i className='fa-solid fa-xmark' />
            </button>
          </div>
          <div className='mobile-menu__list' ref={mobileMenuListRef}></div>

          <div className='mobile-menu__cta nav-fade d-block d-md-none'>
            <Link href='/partner-with-us' className='btn--primary '>
              Partner With Us <i className='fa-solid fa-arrow-right' />
            </Link>
          </div>
          <div className='mobile-menu__social social nav-fade'>
            <Link
              href={social.facebook || 'https://www.facebook.com/'}
              target='_blank'
              aria-label='share us on facebook'
              title='facebook'
            >
              <i className='fa-brands fa-facebook-f' />
            </Link>
            <Link
              href={social.youtube || 'https://www.youtube.com/'}
              target='_blank'
              aria-label='share us on youtube'
              title='youtube'
            >
              <i className='fa-brands fa-youtube' />
            </Link>
            <Link
              href={social.twitterX || 'https://x.com/'}
              target='_blank'
              aria-label='share us on twitter'
              title='twitter'
            >
              <i className='fa-brands fa-x-twitter' />
            </Link>
            <Link
              href={social.linkedin || 'https://www.linkedin.com/'}
              target='_blank'
              aria-label='share us on linkedin'
              title='linkedin'
            >
              <i className='fa-brands fa-linkedin-in' />
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`mobile-menu__backdrop ${
          mobileMenu ? "mobile-menu__backdrop-active" : ""
        }`}
      ></div>
    </>
  );
};

export default HeaderOne;
