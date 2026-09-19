import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import HomeDashboard from "@/imports/HomeDashboard/index";
import HomeDashboardMobileAsymmetric from "@/imports/HomeDashboardMobileAsymmetric/index";
import HomeDashboardMobileAsymmetricExpandMenu from "@/imports/HomeDashboardMobileAsymmetricExpandMenu/index";

const RESUME_URL = "https://drive.google.com/file/d/1aGfNx-FKfO6GQdFL_iyZla9ROm9oAT51/view";
const EMAIL = "blrizkyramadhan@yahoo.co.id";
const LINKEDIN_URL = "https://www.linkedin.com/in/rizkyrong/";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export function HomePage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;

      // Navigate to case study from project card (desktop + mobile)
      const card = target.closest('[data-name="project card"]');
      if (card) {
        const titleEl = card.querySelector('p');
        const title = titleEl?.textContent ?? "";
        if (title.includes("Lampu V2: Revamp")) {
          e.preventDefault();
          navigate("/case-study/lampu-v2-revamp");
        } else if (title.includes("Lintasarta Marketplace")) {
          e.preventDefault();
          navigate("/case-study/lampu-marketplace");
        } else if (title.includes("Octobits")) {
          e.preventDefault();
          navigate("/case-study/octobits");
        }
        return;
      }

      // Resume / Email / LinkedIn nav links (desktop sidebar + mobile bottom nav)
      const navLink = target.closest('[data-name="Nav Link"], [data-name="NavResume"], [data-name="NavCreation"]') as HTMLElement | null;
      if (navLink) {
        const text = navLink.querySelector("p")?.textContent?.trim() ?? "";
        if (text === "Creation") {
          e.preventDefault();
          navigate("/creation");
          return;
        }
        if (text === "Resume") {
          e.preventDefault();
          window.open(RESUME_URL, "_blank", "noopener,noreferrer");
          return;
        }
        if (text === "Email") {
          e.preventDefault();
          window.location.href = `mailto:${EMAIL}`;
          return;
        }
        if (text === "LinkedIn") {
          e.preventDefault();
          window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
          return;
        }
      }

      // Mobile: hamburger icon → open expand menu
      if (target.closest('[data-name="Actions"] [data-name="icon"]')) {
        setMenuOpen(true);
        return;
      }

      // Mobile expand menu: click the back/close icon in the sidebar → close
      const expandSidebar = document.querySelector<HTMLElement>(
        '[data-name="home-dashboard-mobile-asymmetric-expand menu"] [data-name="sidebar"]'
      );
      if (expandSidebar && expandSidebar.contains(target)) {
        if (target.closest('[data-name="icon"]')) {
          setMenuOpen(false);
        }
        return;
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  if (!isMobile) {
    return <HomeDashboard />;
  }

  if (menuOpen) {
    return <HomeDashboardMobileAsymmetricExpandMenu />;
  }

  return <HomeDashboardMobileAsymmetric />;
}
