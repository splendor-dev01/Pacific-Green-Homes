import React from "react";
import { Link } from "react-router-dom";
import { COMPANY_INFO, SERVICES } from "../data/siteData";

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__brand">
            <Link
              to="/"
              className="footer__logo-link"
              aria-label="Pacific Green Homes home"
            >
              <img
                src="/images/pgh-logo-light.png"
                alt="Pacific Green Homes logo"
                className="footer__logo"
                width={200}
                height={61}
              />
            </Link>
            <p className="footer__tagline">
              Built with Precision. Designed to Last.
            </p>
            <p className="footer__service-area">
              Serving homeowners across California
            </p>
          </div>

          <div className="footer__col">
            <h2 className="footer__heading">Company</h2>
            <ul className="footer__list">
              <li>
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="footer__link">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__heading">Services</h2>
            <ul className="footer__list">
              {SERVICES.map((svc) => (
                <li key={svc.slug}>
                  <Link to={`/services/${svc.slug}`} className="footer__link">
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__heading">Get in Touch</h2>
            <ul className="footer__list">
              <li className="footer__contact-item footer__contact-item--address">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href={COMPANY_INFO.mapsUrl}
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {COMPANY_INFO.address}
                </a>
              </li>
              <li className="footer__contact-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={COMPANY_INFO.headerPhoneHref} className="footer__link">
                  {COMPANY_INFO.headerPhoneDisplay}
                </a>
              </li>
              <li className="footer__contact-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="footer__link"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; 2026 Pacific Green Homes. All rights reserved. &middot;
            License #{COMPANY_INFO.license}
          </p>
          <p className="footer__credit">
            <img
              className="footer__credit-mark"
              src="/images/siterabbits-mark.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              loading="lazy"
            />
            <span>
              Built by{" "}
              <a
                href="https://siterabbits.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SiteRabbits
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
