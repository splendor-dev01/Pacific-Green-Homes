import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import { ProjectItem } from "../data/siteData";

interface ProjectMapProps {
  projects: ProjectItem[];
}

export const ProjectMap: React.FC<ProjectMapProps> = ({ projects }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = mapRef.current;
    if (!el || !projects.length) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const map = L.map(el, {
      scrollWheelZoom: false,
      dragging: !isMobile,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    const latlngs = projects.map((p) => [p.lat, p.lng] as [number, number]);
    const bounds = L.latLngBounds(latlngs);
    map.fitBounds(bounds, { padding: [70, 70] });
    map.setZoom(Math.max(map.getZoom() - 1, 11));

    const pinHtml = () =>
      '<span class="pmap-pin"><span class="pmap-pin__pulse"></span>' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>';

    const popupHtml = (p: ProjectItem) =>
      `<a class="pmap-card" href="/work/${p.slug}" data-project-slug="${p.slug}">` +
      `<span class="pmap-card__img"><img src="${p.cardImage}" alt="" loading="lazy"></span>` +
      `<span class="pmap-card__body">` +
      `<span class="pmap-card__type">${p.type}</span>` +
      `<span class="pmap-card__title">${p.title}</span>` +
      `<span class="pmap-card__addr">${p.address}, ${p.city}, ${p.region}</span>` +
      `<span class="pmap-card__link">View project ` +
      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>` +
      `</span>` +
      `</span>` +
      `</a>`;

    let closeTimer: number | undefined;

    projects.forEach((p, i) => {
      const icon = L.divIcon({
        className: "pmap-pin-wrap",
        html: pinHtml(),
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker([p.lat, p.lng], {
        icon,
        title: `${p.title}, ${p.address}, ${p.city}`,
        keyboard: true,
        riseOnHover: true,
      }).addTo(map);

      marker.bindPopup(popupHtml(p), {
        className: "pmap-popup",
        closeButton: false,
        offset: [0, -34],
        maxWidth: 260,
        autoPan: false,
      });

      const pinEl = marker.getElement();
      if (pinEl) {
        pinEl.style.setProperty("--d", `${0.12 + i * 0.16}s`);
      }

      marker.on("mouseover", () => {
        if (closeTimer) window.clearTimeout(closeTimer);
        marker.openPopup();
      });
      marker.on("mouseout", () => {
        closeTimer = window.setTimeout(() => {
          marker.closePopup();
        }, 220);
      });
      marker.on("click", () => {
        marker.openPopup();
      });
    });

    map.on("popupopen", (e) => {
      const node = e.popup.getElement();
      if (!node) return;
      node.addEventListener("mouseenter", () => {
        if (closeTimer) window.clearTimeout(closeTimer);
      });
      node.addEventListener("mouseleave", () => {
        closeTimer = window.setTimeout(() => {
          map.closePopup();
        }, 220);
      });
    });

    const handlePopupClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest(
        "a[data-project-slug]"
      ) as HTMLAnchorElement | null;
      if (link) {
        e.preventDefault();
        const slug = link.getAttribute("data-project-slug");
        if (slug) navigate(`/work/${slug}`);
      }
    };

    el.addEventListener("click", handlePopupClick);
    window.setTimeout(() => map.invalidateSize(), 300);

    return () => {
      el.removeEventListener("click", handlePopupClick);
      map.remove();
    };
  }, [projects, navigate]);

  return (
    <div className="pmap">
      <div
        ref={mapRef}
        className="pmap__map"
        id="project-map"
        role="application"
        aria-label="Map of recent Pacific Green Homes project locations"
      />
    </div>
  );
};
