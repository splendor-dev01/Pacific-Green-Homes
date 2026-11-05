import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TOTAL_FRAMES = 169;

function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
) {
  const imgWidth = img.naturalWidth || 1280;
  const imgHeight = img.naturalHeight || 720;
  const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const drawWidth = imgWidth * scale;
  const drawHeight = imgHeight * scale;
  const offsetX = (canvasWidth - drawWidth) * 0.5;
  const offsetY = (canvasHeight - drawHeight) * 0.5;
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

export const HeroScrollStage: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [scrolledOnce, setScrolledOnce] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const logo = logoRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(
      null
    );
    const loadedFlags: boolean[] = new Array(TOTAL_FRAMES).fill(false);

    let targetProgress = 0;
    let currentProgress = 0;
    let lastDrawnFrame = -1;
    let rafId = 0;
    let unmounted = false;
    let objectUrl = "";

    if (video) {
      fetch("/hero-pacific-green.mp4")
        .then((res) => (res.ok ? res.blob() : Promise.reject()))
        .then((blob) => {
          if (unmounted) return;
          objectUrl = URL.createObjectURL(blob);
          video.src = objectUrl;
          video.load();
        })
        .catch(() => {
          if (!unmounted && video) {
            video.src = "/hero-pacific-green.mp4";
            video.load();
          }
        });
    }

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(window.innerWidth * dpr);
      const h = Math.round(window.innerHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        lastDrawnFrame = -1;
      }
    };

    const getNearestLoadedImage = (
      targetIdx: number
    ): HTMLImageElement | null => {
      if (loadedFlags[targetIdx] && images[targetIdx]) {
        return images[targetIdx];
      }
      for (let delta = 1; delta < TOTAL_FRAMES; delta++) {
        const prev = targetIdx - delta;
        if (prev >= 0 && loadedFlags[prev] && images[prev]) {
          return images[prev];
        }
        const next = targetIdx + delta;
        if (next < TOTAL_FRAMES && loadedFlags[next] && images[next]) {
          return images[next];
        }
      }
      return null;
    };

    const renderFrame = (progress: number) => {
      const desiredIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1)))
      );
      const img = getNearestLoadedImage(desiredIdx);
      if (img && desiredIdx !== lastDrawnFrame) {
        drawImageCover(ctx, img, canvas.width, canvas.height);
        lastDrawnFrame = desiredIdx;
      }
      if (video && video.duration && !isNaN(video.duration)) {
        const targetTime = progress * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.02) {
          try {
            video.currentTime = targetTime;
          } catch {
            // ignore seek errors
          }
        }
      }
    };

    const computeScrollProgress = () => {
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return 0;
      const top = wrapper.getBoundingClientRect().top;
      return Math.min(Math.max(-top / scrollable, 0), 1);
    };

    const handleScroll = () => {
      const p = computeScrollProgress();
      targetProgress = p;
      if (logo) {
        logo.style.opacity = String(Math.max(0, 1 - p / 0.1));
      }
      if (p > 0.001) {
        setScrolledOnce(true);
      }
    };

    const tick = () => {
      if (unmounted) return;
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0004) {
        currentProgress += diff * 0.15;
        renderFrame(currentProgress);
      } else if (currentProgress !== targetProgress) {
        currentProgress = targetProgress;
        renderFrame(currentProgress);
      }
      rafId = requestAnimationFrame(tick);
    };

    const loadOrder: number[] = [];
    const seen = new Set<number>();
    const pushIdx = (i: number) => {
      if (i >= 0 && i < TOTAL_FRAMES && !seen.has(i)) {
        seen.add(i);
        loadOrder.push(i);
      }
    };
    pushIdx(0);
    pushIdx(TOTAL_FRAMES - 1);
    for (const step of [8, 4, 2, 1]) {
      for (let i = 0; i < TOTAL_FRAMES; i += step) {
        pushIdx(i);
      }
    }

    let pointer = 0;
    const CONCURRENCY = 6;

    const loadNext = () => {
      if (unmounted || pointer >= loadOrder.length) return;
      const idx = loadOrder[pointer++];
      const img = new Image();
      img.decoding = "async";
      img.src = `/frames/f_${String(idx).padStart(3, "0")}.webp`;
      img.onload = () => {
        if (unmounted) return;
        images[idx] = img;
        loadedFlags[idx] = true;
        lastDrawnFrame = -1;
        renderFrame(currentProgress);
        loadNext();
      };
      img.onerror = () => {
        // Keep loading later frames; the video provides a fallback if a frame is missing.
        loadNext();
      };
    };

    resizeCanvas();
    handleScroll();
    currentProgress = targetProgress;

    for (let c = 0; c < CONCURRENCY; c++) {
      loadNext();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
      resizeCanvas();
      handleScroll();
      renderFrame(currentProgress);
    });

    rafId = requestAnimationFrame(tick);

    return () => {
      unmounted = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, []);

  return (
    <div className="hero-wrapper" ref={wrapperRef}>
      <section className="hero" id="hero">
        <div className="hero__media">
          <video
            ref={videoRef}
            className="hero__video"
            id="heroVideo"
            muted
            playsInline
            preload="auto"
            poster="/images/hero-poster.jpg"
            src="/hero-pacific-green.mp4"
          />
          <canvas ref={canvasRef} className="hero__canvas" id="heroCanvas" />
        </div>

        <div className="hero__overlay" />

        <div
          className="hero__logo"
          id="hero-logo"
          ref={logoRef}
          aria-hidden="true"
        >
          <img
            src="/images/pgh-logo-light.png"
            alt=""
            width={460}
            height={184}
          />
        </div>

        <div className="hero__content">
          <p className="hero__tagline">
            High-end residential construction, remodels, and outdoor living
            across California.
          </p>
          <div className="hero__ctas">
            <Link
              to="/contact"
              className="btn btn--outline-light btn--lg hero__btn"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/work"
              className="btn btn--outline-light btn--lg hero__btn"
            >
              See Our Work
            </Link>
          </div>
        </div>

        <div
          className={`hero__scroll ${scrolledOnce ? "hidden" : ""}`}
          id="scroll-indicator"
          aria-hidden="true"
        >
          <span>Scroll</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>
    </div>
  );
};
