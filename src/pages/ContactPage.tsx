import React from "react";
import { COMPANY_INFO } from "../data/siteData";
import { ContactForm } from "../components/ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <main id="main">
      <header className="page-hero">
        <div className="page-hero__bg">
          <img src="/images/pg-pool-twilight.jpg" alt="" aria-hidden="true" />
        </div>
        <div className="container page-hero__inner">
          <p className="eyebrow">Contact</p>
          <h1>
            Contact Pacific Green Homes — landscape &amp; outdoor living in Los
            Angeles, CA
          </h1>
          <p className="page-hero__sub">
            Tell us what you have in mind and we&rsquo;ll get back to you with a
            free, no obligation quote.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container contact__grid">
          <div className="contact__info" data-reveal="left">
            <div className="section-head">
              <p className="eyebrow">Get in Touch</p>
              <h2>We&rsquo;d love to hear about it.</h2>
            </div>

            <ul className="contact__list">
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <span className="contact__label">Phone</span>
                  <a
                    href={COMPANY_INFO.primaryPhoneHref}
                    className="contact__value"
                  >
                    {COMPANY_INFO.primaryPhoneDisplay}
                  </a>
                </div>
              </li>

              <li>
                <span className="contact__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <span className="contact__label">Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="contact__value"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>

              <li>
                <span className="contact__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <span className="contact__label">Office</span>
                  <a
                    href={COMPANY_INFO.mapsUrl}
                    className="contact__value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {COMPANY_INFO.address}
                  </a>
                </div>
              </li>

              <li>
                <span className="contact__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </span>
                <div>
                  <span className="contact__label">License</span>
                  <span className="contact__value">
                    #{COMPANY_INFO.license}
                  </span>
                </div>
              </li>

              <li>
                <span className="contact__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <div>
                  <span className="contact__label">Service Area</span>
                  <span className="contact__value">
                    Serving homeowners across California
                  </span>
                </div>
              </li>

              <li>
                <span className="contact__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div>
                  <span className="contact__label">Hours</span>
                  <span className="contact__value">
                    By appointment, call or message anytime
                  </span>
                </div>
              </li>
            </ul>

            <div className="contact__map">
              <iframe
                title="Map showing the Pacific Green Homes office in Van Nuys, California"
                src="https://www.google.com/maps?q=Pacific%20Green%20Homes%2C%2014723%20Oxnard%20St%2C%20%23B%2C%20Van%20Nuys%2C%20CA%2091411&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact__form-wrap" data-reveal="right">
            <h2 className="contact__form-title">Request a free quote</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};
