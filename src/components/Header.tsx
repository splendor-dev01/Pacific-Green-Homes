import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_INFO, SERVICES } from "../data/siteData";

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollState = () => {
      const heroWrapper = document.querySelector(".hero-wrapper") as HTMLElement | null;
      const threshold = heroWrapper
        ? heroWrapper.offsetHeight - window.innerHeight
        : 20;
      setScrolled(window.scrollY > threshold);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [pathname]);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    document.body.classList.remove("menu-open");
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    const next = !mobileMenuOpen;
    setMobileMenuOpen(next);
    document.body.classList.toggle("menu-open", next);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header
        id="site-header"
        className={`site-header ${isHome ? "site-header--transparent" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="header__inner">
          <Link
            to="/"
            className="header__logo"
            aria-label="Pacific Green Homes home"
          >
            <img
              src="/images/pgh-logo-light.png"
              alt="Pacific Green Homes logo"
              width={150}
              height={46}
            />
          </Link>

          <nav className="header__nav" aria-label="Primary">
            <Link to="/about" className="header__link">
              About
            </Link>

            <div className="header__dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="header__link header__dropdown-trigger"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen((prev) => !prev);
                }}
              >
                Services
                <svg
                  className="header__chevron"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="header__dropdown-menu">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="header__dropdown-item"
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/work" className="header__link">
              Work
            </Link>
            <Link to="/contact" className="header__link">
              Contact
            </Link>
            <a
              href={COMPANY_INFO.headerPhoneHref}
              className="header__phone"
            >
              {COMPANY_INFO.headerPhoneDisplay}
            </a>
            <Link to="/contact" className="btn btn--outline-light btn--sm">
              Free Quote
            </Link>
          </nav>

          <button
            type="button"
            id="burger"
            className={`header__burger ${mobileMenuOpen ? "active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="header__burger-line" />
            <span className="header__burger-line" />
            <span className="header__burger-line" />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu__inner">
          <Link to="/" className="mobile-menu__link">
            Home
          </Link>
          <Link to="/about" className="mobile-menu__link">
            About
          </Link>
          <div className="mobile-menu__accordion">
            <button
              type="button"
              className="mobile-menu__accordion-trigger"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((prev) => !prev)}
            >
              Services
              <svg
                className="mobile-menu__chevron"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`mobile-menu__accordion-panel ${
                mobileServicesOpen ? "open" : ""
              }`}
            >
              {SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="mobile-menu__sublink"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/work" className="mobile-menu__link">
            Work
          </Link>
          <Link to="/contact" className="mobile-menu__link">
            Contact
          </Link>
          <Link
            to="/contact"
            className="btn btn--primary btn--lg btn--full mobile-menu__cta"
          >
            Get a Free Quote
          </Link>
          <div className="mobile-menu__contact">
            <a
              href={COMPANY_INFO.headerPhoneHref}
              className="mobile-menu__phone"
            >
              {COMPANY_INFO.headerPhoneDisplay}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="mobile-menu__email"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
