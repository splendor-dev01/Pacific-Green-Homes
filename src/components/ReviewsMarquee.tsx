import React from "react";
import { COMPANY_INFO, REVIEWS } from "../data/siteData";

const StarPolygon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const ReviewsMarquee: React.FC = () => {
  return (
    <section className="section section--ink reviews">
      <div className="container">
        <div className="reviews__head">
          <div>
            <p className="eyebrow">What Clients Say</p>
            <h2>Trusted by California homeowners</h2>
          </div>
          <div className="reviews__meta">
            <div
              className="reviews__rating"
              aria-label="Rated 5.0 out of 5 on Google"
            >
              <span className="reviews__stars" aria-hidden="true">
                <StarPolygon size={18} />
                <StarPolygon size={18} />
                <StarPolygon size={18} />
                <StarPolygon size={18} />
                <StarPolygon size={18} />
              </span>
              <span className="reviews__rating-text">
                5.0 on Google Reviews
              </span>
            </div>
            <a
              className="btn btn--outline-light btn--sm"
              href={COMPANY_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Review
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className="reviews__marquee"
        aria-label="Customer reviews from Google"
      >
        <div className="reviews__track">
          {REVIEWS.map((rev, idx) => (
            <figure key={`r1-${idx}`} className="review-card">
              <div
                className="review-card__stars"
                aria-label="5 out of 5 stars"
              >
                <StarPolygon />
                <StarPolygon />
                <StarPolygon />
                <StarPolygon />
                <StarPolygon />
              </div>
              <blockquote className="review-card__quote">
                {rev.quote}
              </blockquote>
              <figcaption className="review-card__author">
                <span className="review-card__name">{rev.name}</span>
                <span className="review-card__meta">{rev.meta}</span>
              </figcaption>
            </figure>
          ))}
          {REVIEWS.map((rev, idx) => (
            <figure
              key={`r2-${idx}`}
              className="review-card"
              aria-hidden="true"
            >
              <div className="review-card__stars">
                <StarPolygon />
                <StarPolygon />
                <StarPolygon />
                <StarPolygon />
                <StarPolygon />
              </div>
              <blockquote className="review-card__quote">
                {rev.quote}
              </blockquote>
              <figcaption className="review-card__author">
                <span className="review-card__name">{rev.name}</span>
                <span className="review-card__meta">{rev.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
