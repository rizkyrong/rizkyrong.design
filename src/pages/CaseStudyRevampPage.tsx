import { useNavigate } from "react-router";
import { useEffect } from "react";
import CaseStudyRevampLandingPage from "@/imports/CaseStudyRevampLandingPage/index";
import guideMenuHomeGif from "@/imports/Explore_Product_Categories/guide menu home.gif";
import videoFiturLampuGif from "@/imports/Find_the_Right_Business_Solutions/video-fitur-lampu.gif";
import homeMobile1Gif from "@/imports/Meeting_buyers_where_they_browse/home mobile 1.gif";
import homeMobil2Gif from "@/imports/Meeting_buyers_where_they_browse/home mobil 2.gif";
import homeMobil3Gif from "@/imports/Meeting_buyers_where_they_browse/home mobil 3.gif";

// Maps sidebar nav link text → the section-label paragraph text inside the page
const NAV_TO_LABEL: Record<string, string> = {
  "Objectives": "OBJECTIVES",
  "Problems": "PROBLEM",
  "Design Principles": "DESIGN PRINCIPLES",
  "Exploring": "EXPLORING",
  "Iteration": "ITERATION",
};

function findScrollTarget(labelText: string, container: HTMLElement): HTMLElement | null {
  const paras = container.querySelectorAll<HTMLElement>("p");
  for (const p of paras) {
    if (p.textContent?.trim() === labelText) {
      // Walk up to the nearest section-level ancestor inside the scroll container
      let el: HTMLElement = p;
      while (el.parentElement && el.parentElement !== container) {
        const dn = el.parentElement.getAttribute("data-name") ?? "";
        if (dn.endsWith("-section") || dn.endsWith("Section")) break;
        el = el.parentElement;
      }
      return el;
    }
  }
  return null;
}

function scrollToTarget(target: HTMLElement | null, container: HTMLElement) {
  if (!target) {
    container.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const cRect = container.getBoundingClientRect();
  const tRect = target.getBoundingClientRect();
  // Offset by sticky header height (~73px)
  const offset = container.scrollTop + tRect.top - cRect.top - 73;
  container.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
}

function setActiveLink(links: NodeListOf<HTMLElement>, activeText: string) {
  links.forEach((link) => {
    const p = link.querySelector("p");
    if (!p) return;
    const isActive = p.textContent?.trim() === activeText;
    p.style.color = isActive ? "#1a1d20" : "#6c757d";
    link.style.backgroundColor = isActive ? "#f1f3f5" : "";
  });
}

export function CaseStudyRevampPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>('[data-name="main-container"]');
    if (!scrollContainer) return;

    // ── Inject GIF into Explore Product Categories container ─────────────
    const guideMenuHome = scrollContainer.querySelector<HTMLElement>('[data-name="guide menu home"]');
    if (guideMenuHome && !guideMenuHome.querySelector("img")) {
      const innerContainer = guideMenuHome.querySelector("div");
      if (innerContainer) {
        const img = document.createElement("img");
        img.src = guideMenuHomeGif;
        img.alt = "Explore product categories guide";
        img.style.cssText = "width:100%;height:100%;object-fit:cover;border-radius:17.569px;display:block;";
        innerContainer.appendChild(img);
      }
    }

    // ── Inject GIF into Find the Right Business Solutions container ──────
    scrollContainer.querySelectorAll<HTMLElement>('[data-name="video-fitur-lampu"]').forEach((el) => {
      if (el.querySelector("img")) return;
      const img = document.createElement("img");
      img.src = videoFiturLampuGif;
      img.alt = "Find the right business solutions feature video";
      img.style.cssText = "width:100%;height:100%;object-fit:cover;border-radius:9.275px;display:block;";
      el.appendChild(img);
    });

    // ── Inject GIFs into Meeting buyers where they browse phone mockups ──
    const productSections = scrollContainer.querySelectorAll<HTMLElement>('[data-name="my-product-section"]');
    const meetingSection = productSections[productSections.length - 1] ?? null;
    if (meetingSection) {
      const screens = meetingSection.querySelectorAll<HTMLElement>('[data-name="Screen / Insert Content Here"]');
      const gifs = [homeMobile1Gif, homeMobil2Gif, homeMobil3Gif];
      screens.forEach((screen, i) => {
        const inner = screen.querySelector<HTMLElement>("div.absolute.inset-0");
        if (!inner || inner.querySelector("img")) return;
        const img = document.createElement("img");
        img.src = gifs[i] ?? gifs[0];
        img.alt = `Mobile screen ${i + 1}`;
        img.style.cssText = "width:100%;height:100%;object-fit:cover;border-radius:23.963px;display:block;";
        inner.appendChild(img);
      });
    }

    // ── Inject flow-chart arrows ──────────────────────────────────────
    // Horizontal arrow between each pair of boxes (124px gap, boxes at p-[32px])
    scrollContainer.querySelectorAll<HTMLElement>('[data-name="Flow Chart Container"]').forEach((fc) => {
      if (fc.querySelector(".flow-arrow-h")) return;
      const hasBlueBg = !!fc.querySelector('[data-name="Category Badge"]');
      const color = hasBlueBg ? "#007aff" : "#ff3b30";
      const el = document.createElement("div");
      el.className = "flow-arrow-h";
      el.style.cssText = "position:absolute;left:304px;top:82px;width:124px;height:28px;pointer-events:none;z-index:2;";
      el.innerHTML = `<svg width="124" height="28" viewBox="0 0 124 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="14" x2="105" y2="14" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
        <polygon points="101,7 122,14 101,21" fill="${color}"/>
      </svg>`;
      fc.appendChild(el);
    });

    // Vertical arrow connecting old-flow top row → bottom row (74px flex gap)
    // Frame89 is the flex-col parent that holds exactly 2 Flow Chart Containers
    const fcEls = Array.from(
      scrollContainer.querySelectorAll<HTMLElement>('[data-name="Flow Chart Container"]')
    );
    const parentMap = new Map<HTMLElement, number>();
    fcEls.forEach((fc) => {
      const p = fc.parentElement as HTMLElement | null;
      if (p) parentMap.set(p, (parentMap.get(p) ?? 0) + 1);
    });
    parentMap.forEach((count, parent) => {
      if (count < 2 || parent.querySelector(".flow-arrow-v")) return;
      const el = document.createElement("div");
      el.className = "flow-arrow-v";
      // Left box center-x = 32 + 272/2 = 168 → 168-14 = 154 to center the 28px svg
      // Top container height = 32+128+32 = 192px; gap = 74px
      el.style.cssText = "position:absolute;left:154px;top:192px;width:28px;height:74px;pointer-events:none;z-index:2;";
      el.innerHTML = `<svg width="28" height="74" viewBox="0 0 28 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="14" y1="2" x2="14" y2="54" stroke="#007aff" stroke-width="3" stroke-linecap="round"/>
        <polygon points="5,50 14,70 23,50" fill="#007aff"/>
      </svg>`;
      parent.appendChild(el);
    });

    const navLinks = document.querySelectorAll<HTMLElement>('[data-name="sidebar"] [data-name="Nav Link"]');

    // ── Click: scroll to section ──────────────────────────────────────
    function handleNavClick(e: Event) {
      const link = e.currentTarget as HTMLElement;
      const text = link.querySelector("p")?.textContent?.trim() ?? "";

      if (text === "Project Overview") {
        scrollToTarget(null, scrollContainer!);
        setActiveLink(navLinks, text);
        return;
      }

      const labelKey = NAV_TO_LABEL[text];
      if (!labelKey) return;

      const target = findScrollTarget(labelKey, scrollContainer!);
      scrollToTarget(target, scrollContainer!);
      setActiveLink(navLinks, text);
    }

    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

    // ── Back breadcrumb in top-header-bar → home ─────────────────────
    function handleDocClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const headerBar = document.querySelector('[data-name="top-header-bar"]');
      const breadcrumb = headerBar?.querySelector('[data-name="Frame"]');
      if (breadcrumb && breadcrumb.contains(target)) {
        e.preventDefault();
        navigate("/");
        return;
      }
      // ── View Project button → lampu-marketplace ───────────────────────
      const navFooter = document.querySelector('[data-name="navigation-footer"]');
      if (navFooter && navFooter.contains(target)) {
        const btn = (target as HTMLElement).closest("button");
        if (btn) {
          e.preventDefault();
          navigate("/case-study/lampu-marketplace");
        }
      }
    }
    document.addEventListener("click", handleDocClick);

    // ── IntersectionObserver: highlight active nav link ──────────────
    const sectionDataNames = [
      "hero-section",
      "overview-section",
      "finding-section",
      "problem-section",
      "process-section",
      "my-order-section",
      "my-product-section",
      "conclusion-section",
    ];

    // Section label text → nav link text (reverse lookup)
    const LABEL_TO_NAV: Record<string, string> = {
      "PROJECT OVERVIEW": "Project Overview",
      "OBJECTIVES": "Objectives",
      "PROBLEM": "Problems",
      "DESIGN PRINCIPLES": "Design Principles",
      "EXPLORING": "Exploring",
      "ITERATION": "Iteration",
    };

    const sectionEntries: Array<{ el: HTMLElement; navText: string }> = [];

    // Build list of (section element, nav text) in order
    const allSections = scrollContainer.querySelectorAll<HTMLElement>(
      sectionDataNames.map((n) => `[data-name="${n}"]`).join(",")
    );

    allSections.forEach((section) => {
      // Try to identify nav text by searching for a section label <p>
      const paras = section.querySelectorAll<HTMLElement>("p");
      let navText = "";
      for (const p of paras) {
        const t = p.textContent?.trim() ?? "";
        if (LABEL_TO_NAV[t]) {
          navText = LABEL_TO_NAV[t];
          break;
        }
      }
      // hero-section maps to "Project Overview" (no label paragraph inside it)
      if (!navText && section.getAttribute("data-name") === "hero-section") {
        navText = "Project Overview";
      }
      if (navText) {
        sectionEntries.push({ el: section, navText });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length === 0) return;
        const topEntry = visible[0];
        const match = sectionEntries.find((s) => s.el === topEntry.target);
        if (match) setActiveLink(navLinks, match.navText);
      },
      { root: scrollContainer, threshold: 0.15 }
    );

    sectionEntries.forEach(({ el }) => observer.observe(el));

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleNavClick));
      document.removeEventListener("click", handleDocClick);
      observer.disconnect();
    };
  }, [navigate]);

  return <CaseStudyRevampLandingPage />;
}
