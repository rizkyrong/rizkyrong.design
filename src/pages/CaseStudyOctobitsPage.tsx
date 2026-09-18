import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

const assetPathPrefix = "/assets";
const imgDot = `${assetPathPrefix}/f9fdf.svg`;
const imgBrilliantFacetedCrystalGemstone1 = `${assetPathPrefix}/83edd.png`;
const imgDellXpsMockup = `${assetPathPrefix}/151fd.png`;
const imgDashboardWithTask1 = `${assetPathPrefix}/b99d7.png`;
const imgDashboardWithTask2 = `${assetPathPrefix}/a9580.png`;
const imgDashboardWithTask3 = `${assetPathPrefix}/51646.png`;
const imgDashboardWithTask4 = `${assetPathPrefix}/889e3.png`;
const imgDashboardWithTask5 = `${assetPathPrefix}/c5e6f.png`;
const imgScreenViewport = `${assetPathPrefix}/93398.png`;
const imgScreenViewport1 = `${assetPathPrefix}/ca5a2.png`;
const imgScreenViewport2 = `${assetPathPrefix}/c5be1.png`;
const imgScreenViewport3 = `${assetPathPrefix}/f1da7.png`;
const imgScreenViewport4 = `${assetPathPrefix}/bef18.png`;
const imgIcon = `${assetPathPrefix}/e4c1d.svg`;
const imgIcon1 = `${assetPathPrefix}/96db3.svg`;
const imgIcon2 = `${assetPathPrefix}/f2427.svg`;
const imgIcon3 = `${assetPathPrefix}/93085.svg`;
const imgIcon4 = `${assetPathPrefix}/bd403.svg`;
const imgIcon5 = `${assetPathPrefix}/6466a.svg`;

const NAV_ITEMS = [
  { label: "Project Overview", section: "overview-section" },
  { label: "Challenge", section: "problem-section" },
  { label: "Objectives", section: "goals-section" },
  { label: "Research", section: "research-section" },
  { label: "Exploring", section: "setup-flows-section" },
];

function SectionLabel({ name, number = "01" }: { name: string; number?: string }) {
  return (
    <div className="content-stretch flex font-['Fragment_Mono:Regular'] gap-[8px] items-start leading-[16px] not-italic relative text-[#6c757d] text-[11px] whitespace-nowrap">
      <span>{number}</span>
      <span>/</span>
      <span>{name}</span>
    </div>
  );
}

function CategoryBadge({ label, type = "Accent" }: { label: string; type?: "Accent" | "Mono" }) {
  if (type === "Mono") {
    return (
      <div className="bg-[#f1f3f5] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0">
        <p className="font-['Fragment_Mono:Regular'] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">
          {label}
        </p>
      </div>
    );
  }
  return (
    <div className="bg-[#ebf8ff] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[12px] shrink-0">
      <p className="font-['Geist:Regular'] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="bg-[#f0fff4] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[24px]" data-name="Status Badge">
      <div className="relative shrink-0 size-[8px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
      </div>
      <p className="font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[#2f855a] text-[12px] whitespace-nowrap">
        Open for new opportunities
      </p>
    </div>
  );
}

export function CaseStudyOctobitsPage() {
  const navigate = useNavigate();
  const navLinksRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-name="octobits-case-study"]');
    const scrollContainer = root?.querySelector<HTMLElement>('[data-name="main-container"]') ?? null;
    if (!root || !scrollContainer) return;

    const navLinks = Array.from(
      root.querySelectorAll<HTMLElement>('[data-name="sidebar"] [data-name="Nav Link"]')
    );
    navLinksRef.current = navLinks;

    function setActive(label: string) {
      navLinks.forEach((link) => {
        const p = link.querySelector("p");
        if (!p) return;
        const isActive = p.textContent?.trim() === label;
        p.style.color = isActive ? "#1a1d20" : "#6c757d";
        link.style.backgroundColor = isActive ? "#f1f3f5" : "";
      });
    }

    function handleNavClick(e: Event) {
      const link = e.currentTarget as HTMLElement;
      const label = link.querySelector("p")?.textContent?.trim() ?? "";
      const item = NAV_ITEMS.find((n) => n.label === label);
      if (!item) {
        scrollContainer!.scrollTo({ top: 0, behavior: "smooth" });
        setActive(label);
        return;
      }
      const target = scrollContainer!.querySelector<HTMLElement>(`[data-name="${item.section}"]`);
      if (target) {
        const cRect = scrollContainer!.getBoundingClientRect();
        const tRect = target.getBoundingClientRect();
        const offset = scrollContainer!.scrollTop + tRect.top - cRect.top - 73;
        scrollContainer!.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
      }
      setActive(label);
    }

    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

    // Scroll spy
    function onScroll() {
      const cRect = scrollContainer!.getBoundingClientRect();
      let activeLabel = NAV_ITEMS[0].label;
      for (const item of NAV_ITEMS) {
        const el = scrollContainer!.querySelector<HTMLElement>(`[data-name="${item.section}"]`);
        if (!el) continue;
        const tRect = el.getBoundingClientRect();
        if (tRect.top - cRect.top <= 100) {
          activeLabel = item.label;
        }
      }
      setActive(activeLabel);
    }

    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleNavClick));
      scrollContainer.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="bg-[#f8f9fa] content-stretch flex items-start relative w-full"
      data-node-id="5:308"
      data-name="octobits-case-study"
      style={{ height: "100%" }}
    >
      {/* ── Sidebar ─────────────────────────────────────────────── */}
      <div
        className="bg-white border-[#e9edf0] border-r border-solid content-stretch flex flex-col items-start justify-between px-[24px] py-[32px] relative self-stretch shrink-0 w-[260px]"
        data-node-id="5:309"
        data-name="sidebar"
      >
        <div className="content-stretch flex flex-col gap-[92px] items-start relative shrink-0 w-full">
          {/* Brand */}
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" style={{ opacity: 0 }}>
            <div className="h-[35.746px] relative shrink-0 w-[36px]" data-name="brilliant-faceted-crystal-gemstone 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[153.19%] left-[-26.39%] max-w-none top-[-26.82%] w-[152.11%]"
                  src={imgBrilliantFacetedCrystalGemstone1}
                />
              </div>
            </div>
            <div className="content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[2px] items-start leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">
              <p className="relative shrink-0 text-[#1a1d20]">Rizky R.</p>
              <p className="relative shrink-0 text-[#6c757d]">My Portfolio</p>
            </div>
          </div>

          {/* Nav */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full"
                data-name="Nav Link"
              >
                <p className="font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] whitespace-nowrap">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Container ─────────────────────────────────────── */}
      <div
        className="content-stretch flex flex-1 flex-col items-start min-w-px relative"
        data-name="main-container"
        data-node-id="5:322"
      >
        {/* Top header bar */}
        <div
          className="bg-white border-[#e9edf0] border-b border-solid content-stretch flex items-center justify-between px-[80px] py-[24px] relative shrink-0 w-full"
          data-name="top-header-bar"
          data-node-id="5:323"
        >
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-name="Frame"
            onClick={() => navigate("/")}
          >
            <div className="relative shrink-0 size-[16px]" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="font-['Fragment_Mono:Regular'] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">
              Case Studies
            </p>
            <p className="font-['Fragment_Mono:Regular'] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">
              /
            </p>
            <p className="font-['Geist:Medium'] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">
              Octobits: SaaS Management Platform
            </p>
          </div>
          <StatusBadge />
        </div>

        {/* Hero section */}
        <div
          className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[80px] relative shrink-0 w-full"
          data-name="hero-section"
          data-node-id="5:330"
        >
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Geist:ExtraBold'] font-extrabold leading-[56px] relative shrink-0 text-[#1a1d20] text-[48px]">
              Octobits: SaaS Management Platform
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] max-w-[760px]">
              Simplify the customer journey for seamless IT integration.
            </p>
          </div>

          {/* Metadata row */}
          <div
            className="border-[#e9edf0] border-b border-solid border-t content-stretch flex items-start justify-between pb-[24px] pt-[16px] relative shrink-0 w-full"
            data-name="metadata-row"
          >
            {[
              { label: "Role", value: "Design & UX Audit" },
              { label: "Timeline", value: "Oct 2024" },
              { label: "Company", value: "Nexa Lab" },
              { label: "Category", value: "Dashboard" },
            ].map(({ label, value }) => (
              <div key={label} className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]">
                <p className="font-['Fragment_Mono:Regular'] leading-[16px] not-italic relative shrink-0 text-[#6c757d] text-[11px]">
                  {label}
                </p>
                <p className="font-['Geist:Medium'] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Mockup */}
          <div className="bg-[#eeedff] h-[450px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="mockup-container">
            <div className="-translate-x-1/2 absolute h-[400px] left-1/2 top-[30px] w-[800px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDellXpsMockup} />
            </div>
          </div>
        </div>

        {/* Overview section */}
        <div
          className="bg-[#f8f9fa] content-stretch flex gap-[64px] items-start p-[80px] relative shrink-0 w-full"
          data-name="overview-section"
          data-node-id="5:349"
        >
          <div className="content-stretch flex items-start relative shrink-0 w-[320px]">
            <SectionLabel name="PROJECT OVERVIEW" number="01" />
          </div>
          <div className="content-stretch flex flex-1 flex-col gap-[24px] items-start min-w-px relative">
            <p className="font-['Geist:Bold'] font-bold leading-[0] relative shrink-0 text-[#1a1d20] text-[0px] w-full">
              <span className="font-['Geist:Regular'] font-normal leading-[32px] text-[24px]">
                {`Octobits is a comprehensive cloud-based SaaS management platform designed to `}
              </span>
              <span className="font-['Geist:Bold'] font-bold leading-[32px] text-[24px]">
                centralize the monitoring, spending, and optimization
              </span>
              <span className="font-['Geist:Regular'] font-normal leading-[32px] text-[24px]">
                {` of an organization's software applications.`}
              </span>
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] w-full">
              {`As part of the UX Audit, i'm aimed to simplify complex initial setup walkthroughs, introduce clean data visualizations, optimize onboarding flows, and build robust customer and service management hubs.`}
            </p>
          </div>
        </div>

        {/* Challenge section */}
        <div
          className="bg-white content-stretch flex gap-[64px] items-start p-[80px] relative shrink-0 w-full"
          data-name="problem-section"
          data-node-id="5:355"
        >
          <div className="content-stretch flex items-start relative shrink-0 w-[320px]">
            <SectionLabel name="CHALLENGE" number="02" />
          </div>
          <div className="content-stretch flex flex-1 flex-col gap-[24px] items-start min-w-px relative">
            <p className="font-['Geist:Bold'] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] w-full">
              Managing scattered software systems forces administrators into complex workflows. Prior to the redesign, Octobits users suffered from:
            </p>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              {[
                "Drop-offs occurred early because users felt overwhelmed with unguided configuration tasks.",
                `Lack of centralized tracking meant administrators couldn't link customer accounts to services cleanly.`,
                "Connecting external platform APIs was confusing without proper visual status logs.",
              ].map((text) => (
                <div key={text} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="bg-[#eeedff] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]">
                    <div className="relative shrink-0 size-[18px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                    </div>
                  </div>
                  <p className="flex-1 font-['Geist:Regular'] font-normal leading-[24px] min-w-px relative text-[#1a1d20] text-[16px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Objectives section */}
        <div
          className="bg-[#f8f9fa] content-stretch flex flex-col gap-[40px] items-start p-[80px] relative shrink-0 w-full"
          data-name="goals-section"
          data-node-id="5:373"
        >
          <SectionLabel name="OBJECTIVES" number="03" />
          <p className="font-['Geist:Bold'] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] w-full">
            Transform onboarding walkthroughs into a gamified progression track, centralizing critical IT modules.
          </p>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
            {[
              { icon: imgIcon2, title: "Guided Step-by-Step setup", desc: "Introduce a 1-to-5 checklist to navigate initial platform configuration safely." },
              { icon: imgIcon3, title: "Centralized Dashboard", desc: "Display real-time summaries of SaaS usage, spendings, and active teams." },
              { icon: imgIcon4, title: "Ecosystem Integrations", desc: "Connect with essential modern tools (SSO, HR, ERP platforms) instantly." },
              { icon: imgIcon5, title: "Operational Simplicity", desc: "Drive down processing times and ease user friction across complex modules." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-1 flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px]">
                <div className="relative shrink-0 size-[32px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Geist:Bold'] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">{title}</p>
                  <p className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research section */}
        <div
          className="bg-white content-stretch flex flex-col gap-[40px] items-start p-[80px] relative shrink-0 w-full"
          data-name="research-section"
          data-node-id="5:398"
        >
          <SectionLabel name="RESEARCH" number="04" />
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-['Geist:Bold'] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px]">
              UX Audit: Three Critical Findings
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] w-full">
              A structured audit of the existing Octobits dashboard revealed three recurring friction points. Each finding is traced from observed problem to design recommendation and validated through the iteration artefacts.
            </p>
          </div>

          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="audit-findings">
            {[
              {
                title: "Entry point lacks hierarchy, product context, and clear credential recovery",
                problem: "Users land on a generic login screen with no clear next action, product context, or recovery path.",
                recommendation: "Add a clear welcome message, recovery path, and product context to guide users through sign-in.",
                validation: "Evidence: the revised login screen introduces a clear welcome message and recovery path.",
              },
              {
                title: "Blank dashboard with no clear next action",
                problem: "Admins land on an empty state with no visible setup sequence.",
                recommendation: "Numbered steps with direct-action buttons and a live progress meter.",
                validation: "The banner shows 20% progress, numbered steps, and embedded CTA buttons.",
              },
              {
                title: "Customer-service relationship is opaque; discoverability of key actions is low",
                problem: "Admins cannot see linked services or associates from the list view, and active/inactive status is unclear.",
                recommendation: "Surface linked services and associates in the list view, and make status and relationship actions visible.",
                validation: "Evidence: the customer list now shows linked services, associates, and status, with inline relationship actions.",
              },
            ].map(({ title, problem, recommendation, validation }) => (
              <div key={title} className="bg-white border border-[#f1f3f5] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <CategoryBadge label="Audit Finding" />
                  <p className="flex-1 font-['Geist:Regular'] font-normal leading-[24px] min-w-px relative text-[#2b6cb0] text-[16px]">
                    {title}
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="bg-white border border-[#f1f3f5] border-solid content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[12px]">
                    <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#2b6cb0] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                      Problem
                    </p>
                    <p className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] w-full">
                      {problem}
                    </p>
                  </div>
                  <div className="bg-[#fff4c7] border border-[#f1f3f5] border-solid content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[12px]">
                    <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#6c757d] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                      Recommendation
                    </p>
                    <p className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] w-full">
                      {recommendation}
                    </p>
                  </div>
                  <div className="bg-[#d7fffd] border border-[#f1f3f5] border-solid content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[12px]">
                    <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#6c757d] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                      Validation
                    </p>
                    <p className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] w-full">
                      {validation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exploring section */}
        <div
          className="bg-[#f8f9fa] content-stretch flex flex-col gap-[40px] items-start p-[80px] relative shrink-0 w-full"
          data-name="setup-flows-section"
          data-node-id="5:446"
        >
          <SectionLabel name="EXPLORING" number="05" />
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Geist:Bold'] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px]">
              Designing the Milestone Stepper
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] w-full">
              Starting from a blank dashboard with no guidance, we ran a structured UX audit to identify friction points, then iterated two flow paradigms before converging on a final design decision.
            </p>
          </div>

          {/* Iterating Critical Portals */}
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px]">
                Iterating Critical Portals
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">
                {`I'm redesigned the system's entry and management centers: building a cohesive dual-panel Login Portal and a robust Customer Management workspace. Each iteration was grounded in a clear audit finding, a targeted recommendation, and a traceable design response visible in the artefacts.`}
              </p>
            </div>

            {/* Before/After Dashboard - Login */}
            <div className="bg-white border border-[#6c757d] border-solid overflow-clip relative shrink-0 w-full" style={{ height: 1348 }}>
              {/* Before image */}
              <div className="absolute content-stretch flex flex-col items-start left-[-1px] top-[-1px] w-full">
                <div className="relative shrink-0 w-full" style={{ aspectRatio: "948/674" }}>
                  <img alt="Before — Login screen" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDashboardWithTask1} />
                </div>
              </div>
              {/* After image */}
              <div className="absolute content-stretch flex flex-col items-start left-[-1px] top-[673px] w-full">
                <div className="relative shrink-0 w-full" style={{ aspectRatio: "948/674" }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="After — Login screen" className="absolute h-[100.03%] left-0 max-w-none top-[-0.01%] w-full" src={imgDashboardWithTask2} />
                  </div>
                </div>
              </div>
              {/* Divider */}
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[14px] items-center justify-center left-1/2 top-1/2 w-full">
                <div className="flex-none rotate-90">
                  <div className="bg-[#5856d6] h-[948px] relative w-[14px]" />
                </div>
              </div>
              <div className="absolute bg-[#f1f3f5] content-stretch flex items-start left-[39px] px-[10px] py-[4px] rounded-[100px] top-[39px]">
                <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Before</p>
              </div>
              <div className="absolute bg-[#f0fff4] bottom-[592px] content-stretch flex items-start left-[39px] px-[10px] py-[4px] rounded-[100px]">
                <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">After</p>
              </div>
            </div>

            {/* Classification bar */}
            <div className="bg-[#333] content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 w-full">
              <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[11px] text-white tracking-[0.55px] uppercase whitespace-nowrap">
                Classification
              </p>
              <div className="bg-[#635dff] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[4px] shrink-0">
                <p className="font-['Public_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">
                  Priority
                </p>
              </div>
              <p className="flex-1 font-['Public_Sans:Regular'] font-normal leading-[normal] min-w-px relative text-[#ccc] text-[12px]">
                Dual-panel layout: structured credential form left, brand-value context panel right.
              </p>
            </div>
          </div>

          {/* 5-Step Checklist */}
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px]">
                The 5-Step Checklist - Artefact Anatomy
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">
                Both flows share the same five milestone tasks, status labels, and CTA pattern. Progress starts at 20% (1 of 5 completed). The banner uses a dark header with a live progress bar and per-row action buttons.
              </p>
            </div>

            {/* Before/After Dashboard - Checklist */}
            <div className="bg-white border border-[#6c757d] border-solid overflow-clip relative shrink-0 w-full" style={{ height: 970 }}>
              <div className="absolute content-stretch flex flex-col items-start left-[-1px] top-[-1px] w-full">
                <div className="relative shrink-0 w-full" style={{ aspectRatio: "948/490" }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="Before — Dashboard checklist" className="absolute h-[100.12%] left-[0.01%] max-w-none top-[-0.07%] w-[99.99%]" src={imgDashboardWithTask3} />
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[-1px] top-[489px] w-full">
                <div className="relative shrink-0 w-full" style={{ aspectRatio: "948/480" }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="After — Dashboard checklist" className="absolute left-0 max-w-none size-full top-[-0.02%]" src={imgDashboardWithTask4} />
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[14px] items-center justify-center left-[-1px] top-[482px] w-full">
                <div className="flex-none rotate-90">
                  <div className="bg-[#5856d6] h-[948px] relative w-[14px]" />
                </div>
              </div>
              <div className="absolute bg-[#f1f3f5] content-stretch flex items-start left-[39px] px-[10px] py-[4px] rounded-[100px] top-[29px]">
                <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Before</p>
              </div>
              <div className="absolute bg-[#f0fff4] content-stretch flex items-start left-[39px] px-[10px] py-[4px] rounded-[100px] top-[526px]">
                <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">After</p>
              </div>
            </div>

            <div className="bg-[#333] content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 w-full">
              <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[11px] text-white tracking-[0.55px] uppercase whitespace-nowrap">
                Classification
              </p>
              <div className="bg-[#635dff] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[4px] shrink-0">
                <p className="font-['Public_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">
                  Priority
                </p>
              </div>
              <p className="flex-1 font-['Public_Sans:Regular'] font-normal leading-[normal] min-w-px relative text-[#ccc] text-[12px]">
                All 5 steps are mandatory to unlock full dashboard visibility. Steps 1-3 (Org, Customer, Service) must be completed before Integration and Associate become meaningful.
              </p>
            </div>
          </div>
        </div>

        {/* Customer List - dark section */}
        <div
          className="bg-black content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full"
          data-name="my-order-section"
          data-node-id="5:485"
        >
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
            {/* Customer List header */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[18px]">
                Customer List
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[14px] w-full">
                The list is simplified with clear, recognizable icons to help users quickly understand and remember each function. Select a service to view its details.
              </p>
            </div>

            {/* Before/After Customer */}
            <div className="bg-white overflow-clip relative shrink-0 w-full" style={{ height: 480 }}>
              <div className="absolute h-[480px] right-0 top-0 w-[948px]">
                <img alt="After — Customer list" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDashboardWithTask5} />
              </div>
              <div className="absolute h-[499px] left-[-492px] shadow-[0px_15.413px_46.239px_0px_rgba(0,0,0,0.12)] top-0 w-[1001.853px]">
                <img alt="Before — Customer list" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenViewport} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#5856d6] h-[480px] left-1/2 top-1/2 w-[14px]" />
              <div className="absolute bg-[#f1f3f5] content-stretch flex items-start left-[40px] px-[10px] py-[4px] rounded-[100px] top-[40px]">
                <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Before</p>
              </div>
              <div className="absolute bg-[#f0fff4] content-stretch flex items-start px-[10px] py-[4px] right-[40px] rounded-[100px] top-[40px]">
                <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">After</p>
              </div>
            </div>

            {/* Slide-Over Panels */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">
                {`Slide-Over Panels - Direct Service & Associate`}
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white">
                Triggered from the customer row, these panels let admins manage relationships without leaving the list context.
              </p>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-1 flex-col gap-[12px] items-start min-w-px relative">
                  <CategoryBadge label="Direct Service Panel" type="Mono" />
                  <div className="h-[259px] relative rounded-[8px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] shrink-0 w-full">
                    <img alt="Direct Service Panel" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgScreenViewport1} />
                  </div>
                  <p className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white">
                    {`Tabbed slide-over: "Direct Service" tab active - lists services with add action.`}
                  </p>
                </div>
                <div className="content-stretch flex flex-1 flex-col gap-[12px] items-start min-w-px relative">
                  <CategoryBadge label="Associate Panel" type="Mono" />
                  <div className="h-[259px] relative rounded-[8px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] shrink-0 w-full">
                    <img alt="Associate Panel" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgScreenViewport2} />
                  </div>
                  <p className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white">
                    {`Same slide-over: "Associate" tab active - same list pattern for associate management.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Flows */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">
                {`Modal Flows - Add Service & Add Associate`}
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white">
                Context-preserving modals reduce nested workflow steps by keeping the list visible beneath the overlay.
              </p>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-1 flex-col gap-[12px] items-start min-w-px relative">
                  <CategoryBadge label="Add Service Modal" type="Mono" />
                  <div className="h-[259px] relative rounded-[8px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] shrink-0 w-full">
                    <img alt="Add Service Modal" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgScreenViewport3} />
                  </div>
                  <p className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white">
                    {`"Add Services" modal overlay - form stays in context, list remains visible beneath.`}
                  </p>
                </div>
                <div className="content-stretch flex flex-1 flex-col gap-[12px] items-start min-w-px relative">
                  <CategoryBadge label="Add Associate Modal" type="Mono" />
                  <div className="h-[259px] relative rounded-[8px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] shrink-0 w-full">
                    <img alt="Add Associate Modal" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgScreenViewport4} />
                  </div>
                  <p className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white">
                    {`"Add Associate" modal - mirrors Add Service pattern for associate assignment.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Classification card */}
            <div className="bg-[#333] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[11px] text-white tracking-[0.55px] uppercase whitespace-nowrap">
                  Classification
                </p>
                <div className="bg-[#635dff] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[4px] shrink-0">
                  <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">
                    Priority
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                {[
                  { step: "1", title: "1. Customer Selection", desc: "Select a customer from the list to start managing services and associates." },
                  { step: "2", title: "2. List Direct Service", desc: "Use the slide-over panel to add, edit, or monitor active services without leaving the list context." },
                  { step: "3", title: "3. List Associate", desc: "Switch to the Associate tab to manage the team responsible for the customer." },
                  { step: "4", title: "4. Add Services", desc: `If the service does not exist, open the "Add Service" to add a new service without losing list context.` },
                  { step: "5", title: "5. Add Associate", desc: `Use the "Add Associate" to assign staff responsible for the customer.` },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <div className="bg-[#635dff] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]">
                      <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">{step}</p>
                    </div>
                    <div className="content-stretch flex flex-1 flex-col gap-[4px] items-start leading-[normal] min-w-px relative">
                      <p className="font-['Geist:SemiBold'] font-semibold relative shrink-0 text-[13px] text-white whitespace-nowrap">{title}</p>
                      <p className="font-['Geist:Regular'] font-normal min-w-full relative shrink-0 text-[#ccc] text-[12px]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion section */}
        <div
          className="bg-[#f8f9fa] content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full"
          data-name="conclusion-section"
          data-node-id="5:556"
        >
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <CategoryBadge label="Conclusion" type="Mono" />
            <p className="font-['Geist:Bold'] font-bold leading-[0] min-w-full relative shrink-0 text-[#1a1d20] text-[24px] w-full">
              <span className="leading-[32px]">{`I learned that simplifying enterprise dashboards starts with `}</span>
              <span className="leading-[32px] text-[#2b6cb0]">structuring configuration walkthroughs into bite-sized tasks</span>
              <span className="leading-[32px]">. Balancing clear data visibility with highly guided setup tracks accelerates dashboard adoption.</span>
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[#6c757d] text-[16px]">
              By testing onboarding variations (embedded vs modal), we proved that gating full workspace visualization behind setup steps decreases drop-offs and improves long-term IT platform utilization.
            </p>
          </div>
        </div>

        {/* Navigation footer */}
        <div
          className="bg-white border-[#e9edf0] border-solid border-t content-stretch flex items-center justify-between px-[80px] py-[40px] relative shrink-0 w-full"
          data-name="navigation-footer"
          data-node-id="5:561"
        >
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <p className="font-['Fragment_Mono:Regular'] leading-[16px] not-italic relative shrink-0 text-[#6c757d] text-[11px]">
              Up Next
            </p>
            <p className="font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px]">
              {`Lampu V2: Connectivity Integration`}
            </p>
          </div>
          <div className="bg-[#2b6cb0] content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative rounded-[10px] shrink-0">
            <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
