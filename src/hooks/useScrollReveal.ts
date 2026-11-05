import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal], [data-stagger]");
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    elements.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [pathname]);
}
