import React, { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesIndexPage } from "./pages/ServicesIndexPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { WorkIndexPage } from "./pages/WorkIndexPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { PROJECTS, SERVICES } from "./data/siteData";

const AppLayout: React.FC = () => {
  const { pathname, hash } = useLocation();
  useScrollReveal();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  useEffect(() => {
    if (pathname === "/") {
      document.title =
        "Pacific Green Homes | Built with Precision. Designed to Last.";
    } else if (pathname === "/about") {
      document.title = "About Us | Pacific Green Homes";
    } else if (pathname === "/services") {
      document.title = "Services | Pacific Green Homes";
    } else if (pathname.startsWith("/services/")) {
      const slug = pathname.replace("/services/", "");
      const svc = SERVICES.find((s) => s.slug === slug);
      document.title = svc
        ? `${svc.title} | Pacific Green Homes`
        : "Services | Pacific Green Homes";
    } else if (pathname === "/work") {
      document.title = "Our Work | Pacific Green Homes";
    } else if (pathname.startsWith("/work/")) {
      const slug = pathname.replace("/work/", "");
      const proj = PROJECTS.find((p) => p.slug === slug);
      document.title = proj
        ? `${proj.title} (${proj.city}, ${proj.region}) | Pacific Green Homes`
        : "Our Work | Pacific Green Homes";
    } else if (pathname === "/contact") {
      document.title = "Contact Us | Pacific Green Homes";
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesIndexPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/work" element={<WorkIndexPage />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
