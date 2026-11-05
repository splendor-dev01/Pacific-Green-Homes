import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  COMPANY_INFO,
  GalleryPhoto,
  PROJECTS,
  WORK_GALLERY,
} from "../data/siteData";
import { ProjectMap } from "../components/ProjectMap";

export const WorkIndexPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <main id="main">
      <header className="page-hero">
        <div className="page-hero__bg">
          <img
            src="/images/pg-aerial-estate-dusk.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="container page-hero__inner">
          <p className="eyebrow">Our Work</p>
          <h1>Projects built to stand the test of time.</h1>
          <p className="page-hero__sub">
            A look at the real builds behind Pacific Green Homes, including the
            hillside and structural work most contractors won&rsquo;t take on.
          </p>
        </div>
      </header>

      <section className="section section--ink map-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Where We Build</p>
            <h2>Recent builds across the Valley</h2>
            <p className="map-section__note">Hover a pin to see the project.</p>
          </div>
          <ProjectMap projects={PROJECTS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Featured Projects</p>
            <h2>Recent Studio City transformations</h2>
          </div>

          <div className="featured" data-stagger>
            {PROJECTS.map((proj) => (
              <Link
                key={proj.slug}
                to={`/work/${proj.slug}`}
                className="featured__card"
              >
                <div className="featured__img">
                  <img
                    src={proj.cardImage}
                    alt={`${proj.title} in ${proj.city}`}
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <span className="featured__type">{proj.type}</span>
                </div>
                <div className="featured__body">
                  <h3 className="featured__title">{proj.title}</h3>
                  <p className="featured__loc">
                    {proj.address}, {proj.city}, {proj.region}
                  </p>
                  <p className="featured__summary">{proj.summary}</p>
                  <span className="featured__link">
                    View project
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Gallery</p>
            <h2>More from our builds across California</h2>
          </div>

          <div className="gallery" data-stagger>
            {WORK_GALLERY.map((photo) => (
              <figure
                key={photo.src}
                className="gallery__item"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <figcaption className="gallery__tag">{photo.tag}</figcaption>
              </figure>
            ))}
          </div>

          <p className="gallery__note">
            Want to see work similar to your project?{" "}
            <Link to="/contact">Get in touch</Link> and we&rsquo;ll walk you
            through it.
          </p>
        </div>
      </section>

      <section className="section section--ink cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow">Your project next</p>
            <h2>Let&rsquo;s build something you&rsquo;re proud of.</h2>
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

      {selectedPhoto && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close image preview"
              onClick={() => setSelectedPhoto(null)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <div className="lightbox-caption">
              <span>{selectedPhoto.alt}</span>
              <span className="lightbox-tag">{selectedPhoto.tag}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
