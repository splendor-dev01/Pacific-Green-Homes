import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { COMPANY_INFO, SERVICES } from "../data/siteData";

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <main id="main">
      <header className="page-hero">
        <div className="page-hero__bg">
          <img src={service.heroImage} alt="" aria-hidden="true" />
        </div>
        <div className="container page-hero__inner">
          <p className="eyebrow">Services</p>
          <h1>{service.title}</h1>
          <p className="page-hero__sub">{service.shortDesc}</p>
          <div className="page-hero__ctas">
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
      </header>

      <section className="section">
        <div className="container detail__grid">
          <div className="detail__main" data-reveal="left">
            <p className="eyebrow">Overview</p>
            <h2>Built right, built to last.</h2>
            <p className="detail__intro">{service.overviewDesc}</p>
            <ul className="detail__features">
              {service.features.map((feat) => (
                <li key={feat}>
                  <svg
                    width="20"
                    height="20"
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
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <aside className="detail__aside" data-reveal="right">
            <div className="detail__card">
              <h3>Why Pacific Green</h3>
              <ul>
                <li className="block-item">
                  <strong>Precision &amp; Craftsmanship.</strong> Every project
                  is executed with technical precision and finished to a
                  standard that holds up under close inspection. Details are not
                  an afterthought, they are the point.
                </li>
                <li className="block-item">
                  <strong>One Accountable Team.</strong> From structure and
                  foundations to the final finishes, one team owns the entire
                  build. No gaps between trades, no finger pointing, one point
                  of accountability.
                </li>
                <li className="block-item">
                  <strong>Built For California.</strong> Hillside lots, complex
                  structural work, and California codes are what we do every
                  day. We build for the conditions and the standards this market
                  demands.
                </li>
              </ul>
              <Link to="/contact" className="btn btn--primary btn--full">
                Start Your Project
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Recent Work</p>
            <h2>A look at the craftsmanship</h2>
          </div>

          <div className="detail__gallery" data-stagger>
            {service.gallery.map((imgSrc) => (
              <div key={imgSrc} className="detail__gallery-item">
                <img
                  src={imgSrc}
                  alt={`${service.title} project by Pacific Green Homes in California`}
                  loading="lazy"
                  width={600}
                  height={450}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">More Services</p>
            <h2>Explore what else we build</h2>
          </div>

          <div className="detail__others">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                to={`/services/${other.slug}`}
                className="detail__other"
              >
                <span>{other.title}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>
              Get a free quote for your {service.title.toLowerCase()} project.
            </h2>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
