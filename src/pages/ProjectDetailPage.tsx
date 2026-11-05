import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { COMPANY_INFO, PROJECTS } from "../data/siteData";

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);
  const [videoFallback, setVideoFallback] = React.useState(false);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <main id="main">
      <header className="page-hero">
        <div className="page-hero__bg">
          <img src={project.heroImage} alt="" aria-hidden="true" />
        </div>
        <div className="container page-hero__inner">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p className="page-hero__meta">
            {project.address}, {project.city}, {project.region}
          </p>
          <p className="page-hero__sub">{project.summary}</p>
          <div className="page-hero__ctas">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Start a Project Like This
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
            <p className="eyebrow">The Project</p>
            <h2>{project.heading}</h2>
            {project.paragraphs.map((p, idx) => (
              <p key={idx} className="detail__para">
                {p}
              </p>
            ))}
          </div>

          <aside className="detail__aside" data-reveal="right">
            <div className="detail__card">
              <h3>Scope of Work</h3>
              <ul>
                {project.scope.map((item) => (
                  <li key={item}>
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
                    {item}
                  </li>
                ))}
              </ul>
              <div className="detail__meta">
                <div>
                  <span>Location</span>
                  {project.city}, {project.region}
                </div>
                <div>
                  <span>Type</span>
                  {project.type}
                </div>
              </div>
              <Link to="/contact" className="btn btn--primary btn--full">
                Get a Free Quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          {project.gallery && project.gallery.length > 0 ? (
            <>
              <div className="section-head">
                <p className="eyebrow">Gallery</p>
                <h2>Project photos</h2>
                <p className="detail__note">
                  Photography from the completed {project.title} in{" "}
                  {project.city}.
                </p>
              </div>
              <div className="detail__gallery" data-stagger>
                {project.gallery.map((imgSrc) => (
                  <div key={imgSrc} className="detail__gallery-item">
                    <img
                      src={imgSrc}
                      alt={`Pacific Green Homes project in ${project.city}, California`}
                      loading="lazy"
                      width={600}
                      height={450}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : project.videoTour ? (
            <>
              <div className="section-head">
                <p className="eyebrow">Video Tour</p>
                <h2>Walk through the finished home</h2>
                <p className="detail__note">
                  A full walkthrough of the completed {project.title} in{" "}
                  {project.city}.
                </p>
              </div>
              <div className="detail__video" data-reveal>
                {!videoFallback ? (
                  <video
                    className="feature__embed"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={project.videoTour.posterSrc}
                    src={project.videoTour.videoSrc}
                    onError={() => setVideoFallback(true)}
                  />
                ) : (
                  <iframe
                    className="feature__embed"
                    src={project.videoTour.youtubeEmbed}
                    title={`Video tour of ${project.title}`}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">More Projects</p>
            <h2>See another build</h2>
          </div>

          <div className="detail__others detail__others--two">
            {otherProjects.map((other) => (
              <Link
                key={other.slug}
                to={`/work/${other.slug}`}
                className="detail__other"
              >
                <span>
                  {other.title}
                  <em>
                    {other.city}, {other.region}
                  </em>
                </span>
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
            <p className="eyebrow">Your project next</p>
            <h2>Ready to transform your home?</h2>
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
