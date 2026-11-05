import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HeroScrollStage } from "../components/HeroScrollStage";
import { ReviewsMarquee } from "../components/ReviewsMarquee";
import { FaqAccordion } from "../components/FaqAccordion";
import { ContactForm } from "../components/ContactForm";
import { COMPANY_INFO, SERVICES } from "../data/siteData";

const ArrowRightIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const HomePage: React.FC = () => {
  const featureVideoRef = useRef<HTMLVideoElement>(null);
  const [useEmbedFallback, setUseEmbedFallback] = useState(false);

  useEffect(() => {
    const video = featureVideoRef.current;
    if (!video || useEmbedFallback) return;

    const handleLoadedMetadata = () => {
      if (video.currentTime < 10) {
        try {
          video.currentTime = 113;
        } catch {
          // ignore seek error
        }
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    io.observe(video);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      io.disconnect();
    };
  }, [useEmbedFallback]);

  return (
    <main id="main">
      {/* 1. Scroll-Scrubbed 3D Architectural Hero */}
      <HeroScrollStage />

      {/* 2. Who We Are Intro (Matches Reference Video Frames 560-585) */}
      <section className="section intro">
        <div className="container">
          <div className="intro-block" data-reveal>
            <p className="eyebrow">Who We Are</p>
            <h1 className="intro-heading">
              Exceptional construction, built the right way.
            </h1>
            <p className="intro-body">
              Pacific Green Homes is a premier residential construction and
              remodeling company serving homeowners across California. From your
              front yard to your back fence and every room in between, we bring
              one accountable team to the entire project, with energy efficiency
              built into everything we do.
            </p>
            <Link to="/about" className="text-link">
              More about us
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. What We Do - 6 Service Cards (Matches Reference Video Frame 585) */}
      <section className="section section--tint services" id="services">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="eyebrow">What We Do</p>
            <h2>Services built for California homes</h2>
          </div>

          <div className="services__grid" data-stagger>
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="scard"
              >
                <div className="scard__img">
                  <img
                    src={svc.heroImage}
                    alt={svc.title}
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="scard__body">
                  <h3 className="scard__title">{svc.title}</h3>
                  <p className="scard__desc">{svc.shortDesc}</p>
                  <span className="scard__link">
                    Explore
                    <ArrowRightIcon size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Hard Jobs - Split Feature Section (Matches Reference Video Frame 615) */}
      <section className="section section--ink feature">
        <div className="container feature__grid">
          <div className="feature__video" data-reveal="left">
            {!useEmbedFallback ? (
              <video
                ref={featureVideoRef}
                className="feature__embed"
                id="featureVideo"
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/valleyheart-poster.jpg"
                src="/valleyheart-tour.mp4"
                onError={() => setUseEmbedFallback(true)}
              />
            ) : (
              <iframe
                className="feature__embed"
                style={{
                  transform: "scale(1.35)",
                  pointerEvents: "none",
                }}
                src="https://www.youtube-nocookie.com/embed/AY0twYvBpB4?autoplay=1&mute=1&loop=1&playlist=AY0twYvBpB4&playsinline=1&rel=0&modestbranding=1&controls=0&start=113"
                title="Project tour video, 15025 Valleyheart Dr, Sherman Oaks, California"
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture"
              />
            )}
          </div>

          <div className="feature__content" data-reveal="right">
            <p className="eyebrow">The Hard Jobs</p>
            <h2>We build where others won&rsquo;t.</h2>
            <p className="lead">
              Steep hillsides. Complex retaining walls. Deep foundations and
              structural pool shells on tough California lots. We take on the
              projects other contractors turn down and engineer them to stand
              for decades.
            </p>
            <Link to="/work" className="btn btn--primary btn--lg">
              View Recent Projects
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Pacific Green */}
      <section className="section why">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Why Pacific Green</p>
            <h2>Reasons homeowners choose us</h2>
          </div>

          <div className="why__grid" data-stagger>
            <div className="why__card">
              <span className="why__num">01</span>
              <h3 className="why__title">Precision &amp; Craftsmanship</h3>
              <p className="why__desc">
                Every project is executed with technical precision and finished
                to a standard that holds up under close inspection. Details are
                not an afterthought, they are the point.
              </p>
            </div>

            <div className="why__card">
              <span className="why__num">02</span>
              <h3 className="why__title">One Accountable Team</h3>
              <p className="why__desc">
                From structure and foundations to the final finishes, one team
                owns the entire build. No gaps between trades, no finger
                pointing, one point of accountability.
              </p>
            </div>

            <div className="why__card">
              <span className="why__num">03</span>
              <h3 className="why__title">Built For California</h3>
              <p className="why__desc">
                Hillside lots, complex structural work, and California codes are
                what we do every day. We build for the conditions and the
                standards this market demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Work Preview */}
      <section className="section section--tint work-preview">
        <div className="container">
          <div className="section-head section-head--row" data-reveal>
            <div>
              <p className="eyebrow">Our Work</p>
              <h2>Real projects, real craftsmanship</h2>
            </div>
            <Link to="/work" className="btn btn--outline">
              See Full Gallery
            </Link>
          </div>

          <div className="work-preview__grid" data-stagger>
            <Link to="/work" className="work-preview__item">
              <img
                src="/images/pg-aerial-estate-pool.jpg"
                alt="Aerial view of a completed Pacific Green Homes estate with pool and landscaped grounds"
                loading="lazy"
                width={600}
                height={450}
              />
            </Link>
            <Link to="/work" className="work-preview__item">
              <img
                src="/images/pg-pool-twilight.jpg"
                alt="Custom pool and covered patio glowing at twilight"
                loading="lazy"
                width={600}
                height={450}
              />
            </Link>
            <Link to="/work" className="work-preview__item">
              <img
                src="/images/pg-stone-home-dusk.jpg"
                alt="Stone clad custom home lit at dusk with a landscaped entry"
                loading="lazy"
                width={600}
                height={450}
              />
            </Link>
            <Link to="/work" className="work-preview__item">
              <img
                src="/images/pg-kitchen-waterfall-island.jpg"
                alt="Modern kitchen with a waterfall marble island and custom wood cabinetry"
                loading="lazy"
                width={600}
                height={450}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Google Reviews Marquee */}
      <ReviewsMarquee />

      {/* 8. Frequently Asked Questions */}
      <section className="section faq">
        <div className="container container--narrow">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Good to Know</p>
            <h2>Frequently asked questions</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* 9. Get Started - Quote Request Split Section */}
      <section className="section section--ink contact-cta" id="contact">
        <div className="container contact-cta__grid">
          <div className="contact-cta__text" data-reveal="left">
            <p className="eyebrow">Get Started</p>
            <h2>Ready to build something better?</h2>
            <p className="lead">
              Tell us about your project and get a free, no obligation quote.
              Landscape, remodel, pool, or full transformation, we are ready
              when you are.
            </p>
            <a
              href={COMPANY_INFO.primaryPhoneHref}
              className="contact-cta__phone"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {COMPANY_INFO.primaryPhoneDisplay}
            </a>
          </div>

          <div className="contact-cta__form" data-reveal="right">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};
