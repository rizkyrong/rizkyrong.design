import { useNavigate } from "react-router";
import { useEffect, lazy, Suspense } from "react";
import gifCheckout from "@/imports/Checkout___Payment/video_processing_order_-_lampu_1.mp4";
import gifMyProduct from "@/imports/My_Product/video my product - lampu 1.mp4";
import imgLampuHome from "@/imports/CaseStudyLampu-1/9568d892d13658b7d8481f72e547aedc6757b384.webp";

const CaseStudyLampuV2Import = lazy(() => import("@/imports/CaseStudyLampu-1/index"));

const NAV_TO_LABEL: Record<string, string> = {
  "Problem": "PROBLEM",
  "Goals": "GOALS",
  "Research": "RESEARCH",
  "Design Principles": "DESIGN PRINCIPLES",
  "Exploring": "EXPLORING",
  "Iteration": "ITERATION",
};

const LABEL_TO_NAV: Record<string, string> = {
  "PROBLEM": "Problem",
  "GOALS": "Goals",
  "RESEARCH": "Research",
  "DESIGN PRINCIPLES": "Design Principles",
  "EXPLORING": "Exploring",
  "ITERATION": "Iteration",
};

function findScrollTarget(labelText: string, container: HTMLElement): HTMLElement | null {
  const paras = container.querySelectorAll<HTMLElement>("p");
  for (const p of paras) {
    if (p.textContent?.trim() === labelText) {
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

// This component lives INSIDE Suspense so useEffect fires after the lazy import mounts
function CaseStudyLampuV2Wired() {
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-name="case-study-Lampu"]');
    const scrollContainer = root?.querySelector<HTMLElement>('[data-name="main-container"]') ?? null;
    if (!root || !scrollContainer) return;

    const navLinks = root.querySelectorAll<HTMLElement>('[data-name="sidebar"] [data-name="Nav Link"]');

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

    // ── Inject GIF into My Product placeholder ────────────────────────
    scrollContainer.querySelectorAll<HTMLElement>('[data-name="videp my product - lampu 1"]').forEach((placeholder) => {
      if (placeholder.querySelector("video")) return;
      placeholder.style.cssText += "overflow:hidden;border-radius:38px;";
      placeholder.innerHTML = `<video src="${gifMyProduct}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;display:block;"></video>`;
    });

    // ── Inject arrows into Order Processing flow chart ─────────────────
    // FlowChartContainer layout: p-[32px] padding, three w-[272px] boxes, gap-[124px]
    // Arrow 1 x-start = 32 + 272 = 304px
    // Arrow 2 x-start = 304 + 124 + 272 = 700px
    // Arrow vertical center = 32 (top-pad) + 64 (half box-h) = 96px
    const ARROW_SVG = (color: string) =>
      `<svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="10" x2="106" y2="10" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="100,3 124,10 100,17" fill="${color}"/>
      </svg>`;

    scrollContainer.querySelectorAll<HTMLElement>('[data-name="Flow Chart Container"]').forEach((fc) => {
      if (fc.querySelector(".lampu-flow-arrow")) return;

      // Only target the Order Processing chart
      const badgeText = fc.querySelector('[data-name="Category Badge"] p')?.textContent?.trim();
      if (badgeText !== "Order Processing") return;

      [304, 700].forEach((leftPx) => {
        const wrap = document.createElement("div");
        wrap.className = "lampu-flow-arrow";
        wrap.style.cssText = `position:absolute;left:${leftPx}px;top:86px;width:124px;height:20px;pointer-events:none;z-index:2;`;
        wrap.innerHTML = ARROW_SVG("#007aff");
        fc.appendChild(wrap);
      });
    });

    // ── Inject MacBook mockup into Checkout & Payment placeholder ──────
    // The placeholder is [data-name="videp processing order - lampu 1"]
    // inside SolutionSection3 (bg-black solution-section with Checkout & Payment heading)
    scrollContainer.querySelectorAll<HTMLElement>('[data-name="videp processing order - lampu 1"]').forEach((placeholder) => {
      if (placeholder.querySelector(".laptop-mockup-injected")) return;

      // Confirm this placeholder is inside the Checkout & Payment solution section
      const parentSection = placeholder.closest('[data-name="solution-section"]');
      if (!parentSection) return;
      const headingText = parentSection.querySelector("p")?.textContent?.trim() ?? "";
      if (!headingText.includes("Checkout")) return;

      placeholder.classList.add("laptop-mockup-injected");
      placeholder.style.cssText += "overflow:hidden;border-radius:38px;";
      placeholder.innerHTML = `<video src="${gifCheckout}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;display:block;"></video>`;
    });


    function handleDocClick(e: MouseEvent) {
      const t = e.target as HTMLElement;
      const breadcrumb = root!.querySelector('[data-name="top-header-bar"] [data-name="Frame"]');
      if (breadcrumb?.contains(t)) {
        e.preventDefault();
        navigate("/");
      }
    }
    document.addEventListener("click", handleDocClick);

    // Build ordered section → nav-text map
    const sectionEntries: Array<{ el: HTMLElement; navText: string }> = [];
    const assigned = new Set<string>();

    const allSections = scrollContainer.querySelectorAll<HTMLElement>(
      [
        "hero-section",
        "overview-section",
        "problem-section",
        "goals-section",
        "process-section",
        "solution-section",
        "my-order-section",
        "my-product-section",
        "iteration-section",
        "conclusion-section",
      ].map((n) => `[data-name="${n}"]`).join(",")
    );

    allSections.forEach((section) => {
      const dn = section.getAttribute("data-name");
      let navText = "";

      if (dn === "hero-section" || dn === "overview-section") {
        navText = "Project Overview";
      } else {
        const paras = section.querySelectorAll<HTMLElement>("p");
        for (const p of paras) {
          const t = p.textContent?.trim() ?? "";
          if (LABEL_TO_NAV[t]) {
            navText = LABEL_TO_NAV[t];
            break;
          }
        }
      }

      if (!navText) return;
      if (navText !== "Project Overview" && assigned.has(navText)) return;
      assigned.add(navText);
      sectionEntries.push({ el: section, navText });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length === 0) return;
        const match = sectionEntries.find((s) => s.el === visible[0].target);
        if (match) setActiveLink(navLinks, match.navText);
      },
      { root: scrollContainer, threshold: 0.15 }
    );

    sectionEntries.forEach(({ el }) => observer.observe(el));
    setActiveLink(navLinks, "Project Overview");

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleNavClick));
      document.removeEventListener("click", handleDocClick);
      observer.disconnect();
    };
  }, [navigate]);

  return <CaseStudyLampuV2Import />;
}

export function CaseStudyLampuV2Page() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full w-full bg-[#f8f9fa] text-[#6c757d] font-['Geist:Regular',sans-serif]">
          Loading…
        </div>
      }
    >
      <CaseStudyLampuV2Wired />
    </Suspense>
  );
}
