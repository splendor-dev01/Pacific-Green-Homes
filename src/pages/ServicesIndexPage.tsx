import React from "react";
import { Link } from "react-router-dom";
import { COMPANY_INFO, SERVICES } from "../data/siteData";

const CheckSvg: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ServicesIndexPage: React.FC = () => {
  return (
    <main id="main">
      <header className="page-hero">
        <div className="page-hero__bg">
          <img
            src="/images/pg-aerial-estate-pool.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="container page-hero__inner">
          <p className="eyebrow">Services</p>
          <h1>Landscape &amp; Outdoor Living services in Los Angeles, CA</h1>
          <p className="page-hero__sub">
            From the ground your house sits on to the yard around it, Pacific
            Green Homes covers the full range of California home improvement.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="svc-list" data-stagger>
            {SERVICES.map((svc, idx) => (
              <div
                key={svc.slug}
                className={`svc-row ${idx % 2 === 1 ? "svc-row--rev" : ""}`}
              >
                <Link to={`/services/${svc.slug}`} className="svc-row__media">
                  <img
                    src={svc.heroImage}
                    alt={svc.title}
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </Link>
                <div className="svc-row__body">
                  <p className="svc-row__index">{svc.index}</p>
                  <h2 className="svc-row__title">{svc.title}</h2>
                  <p className="svc-row__desc">{svc.overviewDesc}</p>
                  <ul className="svc-row__features">
                    {svc.shortFeatures.map((feat) => (
                      <li key={feat}>
                        <CheckSvg />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="btn btn--outline"
                  >
                    Learn about {svc.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow">Not sure where to start?</p>
            <h2>Tell us about your project.</h2>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get a Free Quote
            </Link>
            <a
              href={COMPANY_INFO.primaryPhoneHref}
              className="btn btn--outline-light btn--lg"
            >
              {COMPANY_INFO.primaryPhoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
