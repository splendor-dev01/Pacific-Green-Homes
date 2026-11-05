import React, { useState } from "react";
import { SERVICES } from "../data/siteData";

interface ContactFormProps {
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = "",
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 350);
  };

  if (submitted) {
    return (
      <div className="contact-form-wrapper">
        <div className="contact-form__success" role="status">
          <div className="contact-form__message contact-form__message--success">
            <svg
              viewBox="0 0 24 24"
              width="48"
              height="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p>
              Thank you for reaching out. A member of the Pacific Green Homes
              team will be in touch shortly.
            </p>
            <button
              type="button"
              className="contact-form__retry"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
              }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Your full name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="your@email.com"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="(818) 555-1234"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="service">
            Project Type
          </label>
          <select
            id="service"
            name="service"
            className="form-select"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multiple Services">Multiple Services</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-input"
            rows={4}
            placeholder="Tell us about your project"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`contact-form__submit ${
            submitting ? "is-submitting" : ""
          }`}
          disabled={submitting}
        >
          <span className="contact-form__submit-text">
            {submitting ? "Sending..." : "Send Message"}
          </span>
        </button>
      </form>
    </div>
  );
};
