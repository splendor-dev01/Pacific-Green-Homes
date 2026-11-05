import React, { useState } from "react";
import { FAQS } from "../data/siteData";

export const FaqAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="faq__list">
      {FAQS.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={item.question}
            className={`faq__item ${isOpen ? "open" : ""}`}
          >
            <button
              type="button"
              className="faq__trigger"
              aria-expanded={isOpen}
              aria-controls={`faq-${idx}`}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
            >
              <span className="faq__q">{item.question}</span>
              <span className="faq__icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            <div
              className="faq__a"
              id={`faq-${idx}`}
              role="region"
              style={{ maxHeight: isOpen ? "240px" : "0px" }}
            >
              <div className="faq__a-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
