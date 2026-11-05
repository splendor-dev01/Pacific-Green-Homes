import React from "react";
import { Link } from "react-router-dom";
import { COMPANY_INFO } from "../data/siteData";

const CheckIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const AboutPage: React.FC = () => {
  return (
    <main id="main">
      <header className="page-hero">
        <div className="page-hero__bg">
          <img src="/images/pg-stone-home-dusk.jpg" alt="" aria-hidden="true" />
        </div>
        <div className="container page-hero__inner">
          <p className="eyebrow">About Us</p>
          <h1>
            About Pacific Green Homes — landscape &amp; outdoor living in Los
            Angeles, CA
          </h1>
          <p className="page-hero__sub">
            Pacific Green Homes is a California construction company built on
            trust, precision, and the discipline to do things properly, from
            hillside foundations to fully realized homes.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container story__grid">
          <div className="story__text" data-reveal="left">
            <p className="eyebrow">Our Story</p>
            <h2>Exceptional construction begins beneath the surface.</h2>
            <p>
              At Pacific Green Homes, we believe great construction starts long
              before the structure itself. It begins with trust, precision, and
              the discipline to build things the right way rather than the easy
              way.
            </p>
            <p>
              From hillside foundations to luxury developments, every project we
              take on is built with long term vision, technical excellence, and
              uncompromising standards. One accountable team owns the whole
              build, so the work fits together and holds up.
            </p>
            <p>
              Because true quality is not only seen in what stands above ground,
              but in the strength of everything beneath it. We build with
              purpose. We build to last.
            </p>
            <p className="story__credentials">
              Licensed and insured in California, license #
              {COMPANY_INFO.license}. Our office is at{" "}
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {COMPANY_INFO.address}
              </a>
              .
            </p>
          </div>

          <div className="story__media" data-reveal="right">
            <img
              src="/images/pg-living-room-open.jpg"
              alt="Open plan living room with floor to ceiling glass in a completed Pacific Green Homes build"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What We Stand For</p>
            <h2>The standards behind every build</h2>
          </div>

          <div className="values__grid" data-stagger>
            <div className="value">
              <div className="value__icon">
                <CheckIcon />
              </div>
              <h3 className="value__title">Precision &amp; Craftsmanship</h3>
              <p className="value__desc">
                Every project is executed with technical precision and finished
                to a standard that holds up under close inspection. Details are
                not an afterthought, they are the point.
              </p>
            </div>

            <div className="value">
              <div className="value__icon">
                <CheckIcon />
              </div>
              <h3 className="value__title">One Accountable Team</h3>
              <p className="value__desc">
                From structure and foundations to the final finishes, one team
                owns the entire build. No gaps between trades, no finger
                pointing, one point of accountability.
              </p>
            </div>

            <div className="value">
              <div className="value__icon">
                <CheckIcon />
              </div>
              <h3 className="value__title">Built For California</h3>
              <p className="value__desc">
                Hillside lots, complex structural work, and California codes are
                what we do every day. We build for the conditions and the
                standards this market demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink energy">
        <div className="container energy__grid">
          <div data-reveal="left">
            <p className="eyebrow">Our Positioning</p>
            <h2>Between luxury and structural strength.</h2>
          </div>
          <div data-reveal="right">
            <p className="lead">
              Pacific Green Homes sits between high-end residential construction
              and heavy structural capability, delivering everything from
              hillside foundations and excavation to fully realized homes.
              Unlike volume driven builders, we treat every project as a lasting
              investment, built on precision, accountability, and enduring
              craftsmanship.
            </p>
            <Link to="/services" className="btn btn--primary btn--lg">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Let&rsquo;s talk about your project.</h2>
            <p className="lead">
              Free consultation, honest advice, and a clear quote. No pressure.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get a Free Quote
            </Link>
            <a
              href={COMPANY_INFO.primaryPhoneHref}
              className="btn btn--outline btn--lg"
            >
              {COMPANY_INFO.primaryPhoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
