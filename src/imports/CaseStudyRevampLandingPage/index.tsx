import svgPaths from "./svg-r6r32dxp80";
import imgBrilliantFacetedCrystalGemstone1 from "./323978cca3f94f43fbb268bf32ea431cdfcaf04c.png";
import imgRectangle from "./e6ccc4ffa307d04ac034a7d285461822ae2718e8.png";
import imgZenBookDuo14 from "./b24cf0e52dfeb664e01db4f655ea47c0f4008134.png";
import imgChangeThis from "./284345d0d605352e111fb9556f57382547e79ecb.png";
import imgChangeThis1 from "./e3508bb7c74d73ee46e830c3e9632770964fea3d.png";
import imgHomeLampu20241 from "./9568d892d13658b7d8481f72e547aedc6757b384.png";
import imgHomeLampu20242 from "./d870a0e85838579b5e9cad5bece980580a35efba.png";
import imgScreenViewport from "./c63084214375c39243a21fb16e548a9c8eed0b15.png";
import imgSpeaker from "./7270885d95df0152f37fd77d56d1350c13f17579.png";

function ArrowBack({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="arrow_back">
      <div className="absolute inset-[16.67%]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path d={svgPaths.p3573eb00} fill="#1D1B20" id="icon" />
        </svg>
      </div>
    </div>
  );
}
type ButtonProps = {
  className?: string;
  label?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  size?: "Large";
  state?: "Default";
  style?: "Primary";
};

function Button({ className, label = "Button", showLeftIcon = true, showRightIcon = false, size = "Large", state = "Default", style = "Primary" }: ButtonProps) {
  return (
    <div className={className || "bg-[#2b6cb0] relative rounded-[10px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative size-full">
          {showLeftIcon && (
            <div className="content-stretch flex h-[18px] items-center justify-center overflow-clip relative shrink-0" data-name="Left Icon">
              <ArrowBack className="overflow-clip relative shrink-0 size-[14px]" />
            </div>
          )}
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">{label}</p>
          {showRightIcon && (
            <div className="content-stretch flex h-[18px] items-center justify-center overflow-clip relative shrink-0" data-name="Right Icon">
              <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon-instance">
                <div className="absolute inset-[16.67%]" data-name="icon">
                  <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
                    <path d={svgPaths.p1afaa200} fill="#1D1B20" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type CategoryBadgeProps = {
  className?: string;
  label?: string;
  type?: "Accent" | "Mono";
};

function CategoryBadge({ className, label = "Label", type = "Accent" }: CategoryBadgeProps) {
  const isMono = type === "Mono";
  return (
    <div className={className || `relative rounded-[12px] ${isMono ? "bg-[#f1f3f5]" : "bg-[#ebf8ff]"}`}>
      <div className={`flex size-full ${isMono ? "content-stretch items-start px-[10px] py-[4px] relative" : "flex-row items-center justify-center"}`}>
        {type === "Accent" && (
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">{label}</p>
          </div>
        )}
        {isMono && <p className="[word-break:break-word] font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">{label}</p>}
      </div>
    </div>
  );
}
type SectionLabelProps = {
  className?: string;
  name?: string;
  number?: string;
};

function SectionLabel({ className, name = "SECTION NAME", number = "01" }: SectionLabelProps) {
  return (
    <div className={className || "relative"} data-name="Section Label">
      <div className="[word-break:break-word] content-stretch flex font-['Fragment_Mono:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative size-full text-[#6c757d] text-[11px] whitespace-nowrap">
        <p className="relative shrink-0">{number}</p>
        <p className="relative shrink-0">/</p>
        <p className="relative shrink-0">{name}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-start leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#1a1d20]">Rizky R.</p>
      <p className="relative shrink-0 text-[#6c757d]">My Portfolio</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center opacity-0 relative shrink-0 w-full" data-name="Frame">
      <div className="h-[35.746px] relative shrink-0 w-[36px]" data-name="brilliant-faceted-crystal-gemstone 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[153.19%] left-[-26.39%] max-w-none top-[-26.82%] w-[152.11%]" src={imgBrilliantFacetedCrystalGemstone1} />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">Project Overview</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] whitespace-nowrap">Objectives</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] whitespace-nowrap">Problems</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] whitespace-nowrap">Design Principles</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] whitespace-nowrap">Exploring</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] whitespace-nowrap">Iteration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[92px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-between px-[24px] py-[32px] relative self-stretch shrink-0 w-[260px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[#e9edf0] border-r border-solid inset-0 pointer-events-none" />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[16px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-62.5%_-8.04%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
              <path d="M0.75 0.75H10.0833" id="Path" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[20.83%] right-[54.17%] top-1/2" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[54.17%] top-1/4" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 4.75L4.75 0.75" id="Path" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Case Studies</p>
      <p className="[word-break:break-word] font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">/</p>
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Lampu V2: Revamp Landing Page</p>
    </div>
  );
}

function TopHeaderBar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[80px] py-[24px] relative shrink-0 w-full" data-name="top-header-bar">
      <div aria-hidden className="absolute border-[#e9edf0] border-b border-solid inset-0 pointer-events-none" />
      <Frame4 />
      <div className="bg-[#f0fff4] relative rounded-[24px] shrink-0" data-name="Status Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[8px]" data-name="dot">
              <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
                <circle cx="4" cy="4" fill="#2F855A" id="dot" r="4" />
              </svg>
            </div>
            <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#2f855a] text-[12px] whitespace-nowrap">Open for new opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[56px] relative shrink-0 text-[#1a1d20] text-[48px] whitespace-nowrap">Lampu V2: Revamp Landing Page</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] w-[760px]">Design a modern landing page that converts with clarity, speed, and a polished first impression.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6c757d] text-[11px]">Role</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px]">{`Design & Research`}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6c757d] text-[11px]">Timeline</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px]">Mar 2025</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6c757d] text-[11px]">Company</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px]">Lintasarta</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6c757d] text-[11px]">Category</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px]">Website</p>
    </div>
  );
}

function MetadataRow() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[24px] pt-[16px] relative shrink-0 w-full" data-name="metadata-row">
      <div aria-hidden className="absolute border-[#e9edf0] border-b border-solid border-t inset-0 pointer-events-none" />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Shadow() {
  return (
    <div className="absolute contents inset-[111.4%_3.35%_-12.75%_3.43%] mix-blend-multiply" data-name="Shadow">
      <div className="absolute inset-[111.4%_3.35%_-12.75%_3.43%] mix-blend-multiply" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function CelestialBlue() {
  return (
    <div className="absolute contents inset-[6.44%_3.35%_-12.75%_3.43%]" data-name="Celestial-Blue">
      <Shadow />
      <div className="absolute inset-[6.44%_5.67%_-12.4%_5.76%]" data-name="ZenBook-Duo-14-">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgZenBookDuo14} />
        </div>
      </div>
      <div className="absolute inset-[101.21%_13%_-3.17%_13.07%]" data-name="Change-This">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgChangeThis} />
        </div>
      </div>
      <div className="absolute inset-[11.41%_16.72%_3.41%_16.71%]" data-name="Change-This">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgChangeThis1} />
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="absolute contents inset-[6.44%_3.35%_-12.75%_3.43%]" data-name="root">
      <CelestialBlue />
    </div>
  );
}

function MockupContainer() {
  return (
    <div className="h-[450px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="mockup-container">
      <Root />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start pt-[80px] px-[80px] relative shrink-0 w-full" data-name="hero-section">
      <Frame5 />
      <MetadataRow />
      <MockupContainer />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[320px]" data-name="Frame">
      <div className="relative shrink-0" data-name="Section Header">
        <div className="[word-break:break-word] content-stretch flex font-['Fragment_Mono:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative size-full text-[#6c757d] text-[11px] whitespace-nowrap">
          <p className="relative shrink-0">01</p>
          <p className="relative shrink-0">/</p>
          <p className="relative shrink-0">PROJECT OVERVIEW</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#1a1d20] text-[0px] w-full">
        <span className="font-['Geist:Regular',sans-serif] font-normal leading-[32px] text-[24px]">{`Lampu Marketplace is expanding its focus to reach a broader range of businesses, industries, and purchasing needs, positioning the platform as `}</span>
        <span className="leading-[32px] text-[24px]">a scalable destination for diverse B2B solutions</span>
        <span className="font-['Geist:Regular',sans-serif] font-normal leading-[32px] text-[24px]">.</span>
      </p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#6c757d] text-[24px] w-full">To support this growth, the landing page needs a refreshed discovery experience that helps buyers quickly explore a wider variety of products and industry, specific solutions.</p>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex gap-[64px] items-start p-[80px] relative shrink-0 w-full" data-name="overview-section">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">Findings</p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[40px] min-w-full relative shrink-0 text-[32px] text-center text-white w-[min-content]">We improved the landing page.</p>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[32px] min-w-full relative shrink-0 text-[24px] text-center text-white w-[min-content]">Here are the key findings.</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ff3b30] content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]" data-name="badge-1">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function Callout1Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="callout-1-header">
      <Badge />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#ff3b30] text-[14px]">{`Hero & CTA Readability`}</p>
    </div>
  );
}

function Callout1Problem() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="callout-1-problem">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[16px] min-w-px relative text-[#333] text-[11px]">The hero copy and CTA are buried over a dark image with insufficient contrast, making them difficult to read.</p>
    </div>
  );
}

function Callout1Card() {
  return (
    <div className="bg-[#ffebee] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="callout-1-card">
      <div aria-hidden className="absolute border-[#ff3b30] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[12px]" />
      <Callout1Header />
      <Callout1Problem />
    </div>
  );
}

function Callout() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[44px] top-[228px] w-[236px]" data-name="callout-1">
      <Callout1Card />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#ff3b30] content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]" data-name="badge-1">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function Callout1Header1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="callout-1-header">
      <Badge1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#ff3b30] text-[14px]">Header Hierarchy</p>
    </div>
  );
}

function Callout1Problem1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="callout-1-problem">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[16px] min-w-px relative text-[#333] text-[11px]">Navigasi header flat tanpa hierarki visual; semua item terlihat setara bobot.</p>
    </div>
  );
}

function Callout1Card1() {
  return (
    <div className="bg-[#ffebee] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="callout-1-card">
      <div aria-hidden className="absolute border-[#ff3b30] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[12px]" />
      <Callout1Header1 />
      <Callout1Problem1 />
    </div>
  );
}

function Callout1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[900px] top-[228px] w-[236px]" data-name="callout-2">
      <Callout1Card1 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#ff3b30] content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]" data-name="badge-1">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
    </div>
  );
}

function Callout1Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="callout-1-header">
      <Badge2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#ff3b30] text-[14px]">Value Proposition Scanability</p>
    </div>
  );
}

function Callout1Problem2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="callout-1-problem">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[16px] min-w-px relative text-[#333] text-[11px]">The value proposition section contains too much copy and small icons, making it difficult to scan quickly.</p>
    </div>
  );
}

function Callout1Card2() {
  return (
    <div className="bg-[#ffebee] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="callout-1-card">
      <div aria-hidden className="absolute border-[#ff3b30] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[12px]" />
      <Callout1Header2 />
      <Callout1Problem2 />
    </div>
  );
}

function Callout2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[44px] top-[637px] w-[236px]" data-name="callout-3">
      <Callout1Card2 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#ff3b30] content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]" data-name="badge-1">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        4
      </p>
    </div>
  );
}

function Callout1Header3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="callout-1-header">
      <Badge3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#ff3b30] text-[14px]">{`Newsletter & Footer Density`}</p>
    </div>
  );
}

function Callout1Problem3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="callout-1-problem">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[16px] min-w-px relative text-[#333] text-[11px]">The footer feels overcrowded, while the newsletter and information columns compete for attention.</p>
    </div>
  );
}

function Callout1Card3() {
  return (
    <div className="bg-[#ffebee] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="callout-1-card">
      <div aria-hidden className="absolute border-[#ff3b30] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[12px]" />
      <Callout1Header3 />
      <Callout1Problem3 />
    </div>
  );
}

function Callout3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[900px] top-[836px] w-[236px]" data-name="callout-5">
      <Callout1Card3 />
    </div>
  );
}

function FindingSection() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[40px] items-center pt-[80px] px-[80px] relative shrink-0 w-[1180px]" data-name="finding-section">
      <Frame12 />
      <div className="h-[1100px] relative shrink-0 w-[560px]" data-name="Home-Lampu 2024 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-[0.04%] w-full" src={imgHomeLampu20241} />
        </div>
      </div>
      <Callout />
      <Callout1 />
      <Callout2 />
      <Callout3 />
      <div className="absolute h-[99.5px] left-[161px] top-[346px] w-[148.5px]">
        <div className="absolute inset-[0_-0.67%_-7.4%_-0.67%]">
          <svg className="block size-full" fill="none" height="106.864" preserveAspectRatio="none" viewBox="0 0 150.5 106.864" width="150.5">
            <path d={svgPaths.p1b175a00} fill="#FF3B30" id="Vector 5" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[99.5px] items-center justify-center left-[871px] top-[330px] w-[148.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[99.5px] relative w-[148.5px]">
            <div className="absolute inset-[0_-0.67%_-7.4%_-0.67%]">
              <svg className="block size-full" fill="none" height="106.864" preserveAspectRatio="none" viewBox="0 0 150.5 106.864" width="150.5">
                <path d={svgPaths.p1b175a00} fill="#FF3B30" id="Vector 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[99.5px] items-center justify-center left-[871px] top-[970px] w-[148.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[99.5px] relative w-[148.5px]">
            <div className="absolute inset-[0_-0.67%_-7.4%_-0.67%]">
              <svg className="block size-full" fill="none" height="106.864" preserveAspectRatio="none" viewBox="0 0 150.5 106.864" width="150.5">
                <path d={svgPaths.p1b175a00} fill="#FF3B30" id="Vector 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute h-0 left-[279px] top-[calc(50%+59px)] w-[31px]">
        <div className="absolute inset-[-7.36px_-3.23%_-7.36px_0]">
          <svg className="block size-full" fill="none" height="14.7279" preserveAspectRatio="none" viewBox="0 0 32 14.7279" width="32">
            <path d={svgPaths.p10019900} fill="#FF3B30" id="Vector 8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[320px]" data-name="Frame">
      <SectionLabel className="relative shrink-0" name="OBJECTIVES" number="02" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#ebf8ff] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <div className="relative shrink-0 size-[18px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[29.17%_16.67%_29.17%_20.83%]" data-name="Path">
          <div className="absolute inset-[-10%_-6.67%]">
            <svg className="block size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 12.75 9" width="12.75">
              <path d="M0.75 4.5L4.5 8.25L12 0.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Strengthening Lampu Marketplace brand positioning</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Building a strong, consistent brand identity on the landing page to increase awareness and user trust in Lampu.</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#ebf8ff] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <div className="relative shrink-0 size-[18px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[29.17%_16.67%_29.17%_20.83%]" data-name="Path">
          <div className="absolute inset-[-10%_-6.67%]">
            <svg className="block size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 12.75 9" width="12.75">
              <path d="M0.75 4.5L4.5 8.25L12 0.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Increasing conversion through the landing page</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">{`Improving the landing page's effectiveness in guiding visitors to take the desired actions, such as registration or purchase.`}</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#ebf8ff] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <div className="relative shrink-0 size-[18px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[29.17%_16.67%_29.17%_20.83%]" data-name="Path">
          <div className="absolute inset-[-10%_-6.67%]">
            <svg className="block size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 12.75 9" width="12.75">
              <path d="M0.75 4.5L4.5 8.25L12 0.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Setting the right user expectations</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">{`Clearly communicating Lampu's unique value and primary benefits so users understand what is offered and how it works.`}</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#ebf8ff] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <div className="relative shrink-0 size-[18px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[29.17%_16.67%_29.17%_20.83%]" data-name="Path">
          <div className="absolute inset-[-10%_-6.67%]">
            <svg className="block size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 12.75 9" width="12.75">
              <path d="M0.75 4.5L4.5 8.25L12 0.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Providing direct access to products</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Presenting intuitive navigation to find relevant product types and industries, making it easy for users to explore the catalog.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame16 />
      <Frame19 />
      <Frame22 />
      <Frame25 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] w-full">Lampu Marketplace needs a stronger landing page to increase brand awareness, conversion, and user experience. The primary objectives are:</p>
      <Frame15 />
    </div>
  );
}

function ProblemSection() {
  return (
    <div className="bg-white content-stretch flex gap-[64px] items-start p-[80px] relative shrink-0 w-full" data-name="problem-section">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[320px]" data-name="Frame">
      <div className="relative shrink-0" data-name="Section Header">
        <div className="[word-break:break-word] content-stretch flex font-['Fragment_Mono:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative size-full text-[#6c757d] text-[11px] whitespace-nowrap">
          <p className="relative shrink-0">03</p>
          <p className="relative shrink-0">/</p>
          <p className="relative shrink-0">PROBLEM</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] w-full">The Main Problem with Lampu</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] w-full">A fragmented flow that compounds the problem</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">We lose potential revenue when buyers switch to other platforms to complete their purchases. The buyer experience confirms our initial hypothesis about the circular flow on Lampu.</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1d20] text-[11px] whitespace-nowrap">Problem 1</p>
          </div>
        </div>
      </div>
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] w-full">{`Lampu's website is lengthy and wordy`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Users do not read large blocks of text or long forms, instead, they tend to scan quickly to capture the core information presented on the website. Buyers also want to find the products they are looking for directly and easily on Lampu.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1d20] text-[11px] whitespace-nowrap">Problem 2</p>
          </div>
        </div>
      </div>
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] w-full">Expectation vs. reality on Lampu</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Even after researching competitors, buyers still struggle to find products on Lampu.</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1d20] text-[11px] whitespace-nowrap">Problem 3</p>
          </div>
        </div>
      </div>
      <Frame36 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame31 />
      <Frame33 />
      <Frame35 />
    </div>
  );
}

function ProblemSection1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start p-[80px] relative shrink-0 w-full" data-name="problem-section">
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] w-full">The flow guides users from the Lampu landing page to product exploration and selection, then through checkout and payment.</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">Old Flow</p>
          </div>
        </div>
      </div>
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full">Lampu Landing Page</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#ff3b30] text-[18px] text-center w-full whitespace-pre-wrap">{`Explore product & choose  product`}</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#ff3b30] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame41 />
    </div>
  );
}

function FlowChartContainer() {
  return (
    <div className="content-stretch flex gap-[124px] items-center justify-center p-[32px] relative rounded-[24px] shrink-0" data-name="Flow Chart Container">
      <Frame38 />
      <Frame40 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[16px] left-[563.5px] text-[#ff3b30] text-[12px] text-center top-0 w-[285px]">There are not many product types or industries.</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full whitespace-pre-wrap">{`Explore product & choose  product`}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full">{`Checkout & Payment`}</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame45 />
    </div>
  );
}

function FlowChartContainer1() {
  return (
    <div className="bg-[rgba(0,122,255,0.15)] border border-[#007aff] border-solid content-stretch flex gap-[124px] items-center justify-center p-[32px] relative rounded-[24px] shrink-0" data-name="Flow Chart Container">
      <Frame42 />
      <Frame44 />
      <div className="-translate-x-1/2 absolute bg-[#007aff] left-1/2 rounded-[40px] top-[-16.12px]" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Explore Product Page</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[74px] items-center relative shrink-0">
      <FlowChartContainer />
      <FlowChartContainer1 />
    </div>
  );
}

function ProcessSection() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[40px] items-center p-[80px] relative shrink-0 w-full" data-name="process-section">
      <Frame91 />
      <Frame89 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">Core principles guiding the design direction.</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">These principles prioritize immediate clarity, confident decision-making, and inspiration that moves B2B users from exploration to action.</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Clear from the first glance</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Help B2B users understand the product’s value at a glance, without complex technical jargon.</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[20.83%_33.33%_20.83%_12.5%]" data-name="Path">
          <div className="absolute inset-[-4.02%_-4.33%]">
            <svg className="block size-full" fill="none" height="20.1667" preserveAspectRatio="none" viewBox="0 0 18.8333 20.1667" width="18.8333">
              <path d={svgPaths.p23827140} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_12.5%_37.5%_66.67%]" data-name="Path">
          <div className="absolute inset-[-8.04%_-11.25%]">
            <svg className="block size-full" fill="none" height="10.8333" preserveAspectRatio="none" viewBox="0 0 8.16667 10.8333" width="8.16667">
              <path d={svgPaths.p2543f680} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Helpful for confident decisions</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Provide clear, centralized product specifications so users can make faster purchasing decisions.</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[16.67%]" data-name="Path">
          <div className="absolute inset-[-3.52%]">
            <svg className="block size-full" fill="none" height="22.8333" preserveAspectRatio="none" viewBox="0 0 22.8333 22.8333" width="22.8333">
              <path d={svgPaths.p24169f80} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame51 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Inspiring and action-oriented</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Let users explore innovative digital solutions while guiding them toward conversion.</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[33.33%_12.5%]" data-name="Path">
          <div className="absolute inset-[-7.03%_-3.12%]">
            <svg className="block size-full" fill="none" height="12.167" preserveAspectRatio="none" viewBox="0 0 25.5023 12.167" width="25.5023">
              <path d={svgPaths.p213de200} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame53 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame48 />
      <Frame50 />
      <Frame52 />
    </div>
  );
}

function ProcessSection1() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[40px] items-start p-[80px] relative shrink-0 w-full" data-name="process-section">
      <div className="relative shrink-0" data-name="Section Header">
        <div className="[word-break:break-word] content-stretch flex font-['Fragment_Mono:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative size-full text-[11px] text-white whitespace-nowrap">
          <p className="relative shrink-0">04</p>
          <p className="relative shrink-0">/</p>
          <p className="relative shrink-0">DESIGN PRINCIPLES</p>
        </div>
      </div>
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#1a1d20] w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">New Home Page</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Below is the new landing page experience, designed to introduce the product, guide visitors through key features, and make the next step feel clear and easy to take.</p>
    </div>
  );
}

function ProcessMappingImage() {
  return (
    <div className="bg-[rgba(26,29,32,0.74)] border-[#a5a5a5] border-l border-r border-solid border-t content-stretch flex items-center pt-[14px] px-[14px] relative rounded-tl-[18px] rounded-tr-[18px] shrink-0" data-name="Process Mapping Image">
      <div className="h-[804px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[898px]" data-name="Home-Lampu 2024 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
          <img alt="" className="absolute h-[384.12%] left-0 max-w-none top-[0.03%] w-full" src={imgHomeLampu20242} />
        </div>
      </div>
    </div>
  );
}

function ProcessMappingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Process Mapping Container">
      <Frame55 />
      <ProcessMappingImage />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">Design</p>
          </div>
        </div>
      </div>
      <ProcessMappingContainer />
    </div>
  );
}

function ProcessSection2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start pt-[80px] px-[80px] relative shrink-0 w-[1180px]" data-name="process-section">
      <SectionLabel className="relative shrink-0" name="EXPLORING" number="05" />
      <Frame54 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative text-white" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Explore Product Categories</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">Explore product categories by product type and industry, making it easy to find the right solution for buyer needs.</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Frame58 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f8f9fa] h-[488px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 absolute bottom-[-100.38px] h-[438.375px] left-1/2 rounded-[17.569px] w-[640px]" data-name="guide menu home">
        <div className="absolute inset-0 overflow-hidden rounded-[17.569px]" />
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame57 />
      <Container />
    </div>
  );
}

function MyOrderSection() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-[1180px]" data-name="my-order-section">
      <Frame56 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] w-full">{`The new landing page simplifies the explore products flow within one `}</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">New Flow</p>
          </div>
        </div>
      </div>
      <Frame59 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full">Lampu Landing Page</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame61 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full whitespace-pre-wrap">{`Explore product & choose  product`}</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame63 />
    </div>
  );
}

function FlowChartContainer2() {
  return (
    <div className="bg-[rgba(0,122,255,0.15)] border border-[#007aff] border-solid content-stretch flex gap-[124px] items-center justify-center p-[32px] relative rounded-[24px] shrink-0" data-name="Flow Chart Container">
      <Frame60 />
      <Frame62 />
      <div className="-translate-x-1/2 absolute bg-[#007aff] left-1/2 rounded-[40px] top-[-16.12px]" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Home - Explore Product Page</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <FlowChartContainer2 />
    </div>
  );
}

function ProcessSection3() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[40px] items-center p-[80px] relative shrink-0 w-full" data-name="process-section">
      <Frame92 />
      <Frame90 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] w-full">Major Page Updates Delivered Through Regular Iterations</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">We continuously improve this page based on direct internal feedback and evolving business requirements.</p>
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Section Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Explore Product</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">The new experience surfaces more products without requiring buyers to visit the Explore Product page, highlights industries relevant to their purchasing needs, and provides a clear CTA to view even more products.</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <SectionContainer />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame69 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Iteration 1" />
      <Frame68 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame67 />
    </div>
  );
}

function CameraSensorArray() {
  return (
    <div className="-translate-x-1/2 absolute h-[5.438px] left-1/2 top-[5.44px] w-[58px]" data-name="camera-sensor-array">
      <svg className="absolute block inset-0 size-full" fill="none" height="5.4375" preserveAspectRatio="none" viewBox="0 0 58 5.4375" width="58">
        <g id="camera-sensor-array">
          <rect fill="#050607" height="5.4375" rx="2.71875" width="58" />
          <circle cx="24.9219" cy="2.71875" fill="#141E30" id="camera-lens" r="1.8125" />
          <circle cx="33.5312" cy="2.71875" fill="#0C0D0E" id="face-id-dot" r="1.35938" />
        </g>
      </svg>
    </div>
  );
}

function AppMain() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[21.75px] relative" data-name="app-main" />;
}

function DashboardAppFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain />
    </div>
  );
}

function ScreenViewport() {
  return (
    <div className="h-[601.75px] relative rounded-[19.938px] shrink-0 w-[895.375px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.938px]">
        <img alt="" className="absolute h-[511.73%] left-[-0.01%] max-w-none top-[-66.85%] w-full" src={imgScreenViewport} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame />
        <div className="absolute border-[2.719px] border-[rgba(0,0,0,0.38)] border-solid h-[601.75px] left-0 rounded-[19.938px] top-0 w-[895.375px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.906px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[19.938px]" />
    </div>
  );
}

function IpadProChassis() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_7.25px_10.875px_rgba(0,0,0,0.12)] flex flex-col h-[634.375px] items-center justify-center p-[16.313px] relative rounded-[36.25px] shrink-0 w-[928px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.813px] border-solid inset-0 pointer-events-none rounded-[36.25px]" />
      <div className="absolute border-[#6c757d] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray />
      <ScreenViewport />
    </div>
  );
}

function IPadProMockup() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[928px]" data-name="iPad Pro Mockup">
      <IpadProChassis />
    </div>
  );
}

function AppMain1() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[12.632px] relative" data-name="app-main" />;
}

function DashboardAppFrame1() {
  return (
    <div className="absolute content-stretch flex h-[174.737px] items-start left-0 top-[0.38px] w-[520px]" data-name="dashboard-app-frame">
      <AppMain1 />
    </div>
  );
}

function ScreenViewport1() {
  return (
    <div className="col-1 h-[263px] ml-0 mt-[504px] overflow-clip relative rounded-[8px] row-1 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-[520px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[419.61%] left-[0.08%] max-w-none top-[-209.76%] w-full" src={imgHomeLampu20241} />
      </div>
      <DashboardAppFrame1 />
      <div className="absolute h-[174.737px] left-0 rounded-[11.579px] top-[175.11px] w-[520px]" data-name="screen-ambient-depth" />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Image Container">
      <IPadProMockup />
      <ScreenViewport1 />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Image Container">
      <ImageContainer1 />
      <div className="col-1 h-[69px] ml-[545px] mt-[664px] relative row-1 w-[119.5px]">
        <div className="absolute inset-[-2.9%_-10.26%_-2.9%_-1.67%]">
          <svg className="block size-full" fill="none" height="73.0002" preserveAspectRatio="none" viewBox="0 0 133.756 73.0002" width="133.756">
            <path d={svgPaths.p11698b00} fill="#007AFF" id="Vector 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame66 />
      <ImageContainer />
    </div>
  );
}

function SectionContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Section Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Value Product</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">Value Product now presents relevant offers and value propositions to capture buyers’ interest. Through engaging videos and illustrations, it helps buyers understand the product’s benefits more quickly and builds confidence before purchase.</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <SectionContainer1 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame74 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Iteration 2" />
      <Frame73 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame72 />
    </div>
  );
}

function CameraSensorArray1() {
  return (
    <div className="-translate-x-1/2 absolute h-[5.438px] left-1/2 top-[5.44px] w-[58px]" data-name="camera-sensor-array">
      <svg className="absolute block inset-0 size-full" fill="none" height="5.4375" preserveAspectRatio="none" viewBox="0 0 58 5.4375" width="58">
        <g id="camera-sensor-array">
          <rect fill="#050607" height="5.4375" rx="2.71875" width="58" />
          <circle cx="24.9219" cy="2.71875" fill="#141E30" id="camera-lens" r="1.8125" />
          <circle cx="33.5312" cy="2.71875" fill="#0C0D0E" id="face-id-dot" r="1.35938" />
        </g>
      </svg>
    </div>
  );
}

function AppMain2() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[21.75px] relative" data-name="app-main" />;
}

function DashboardAppFrame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain2 />
    </div>
  );
}

function ScreenViewport2() {
  return (
    <div className="h-[601.75px] relative rounded-[19.938px] shrink-0 w-[895.375px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.938px]">
        <img alt="" className="absolute h-[511.73%] left-0 max-w-none top-[-350.92%] w-full" src={imgScreenViewport} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame2 />
        <div className="absolute border-[2.719px] border-[rgba(0,0,0,0.38)] border-solid h-[601.75px] left-0 rounded-[19.938px] top-0 w-[895.375px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.906px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[19.938px]" />
    </div>
  );
}

function IpadProChassis1() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_7.25px_10.875px_rgba(0,0,0,0.12)] flex flex-col h-[634.375px] items-center justify-center p-[16.313px] relative rounded-[36.25px] shrink-0 w-[928px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.813px] border-solid inset-0 pointer-events-none rounded-[36.25px]" />
      <div className="absolute border-[#6c757d] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray1 />
      <ScreenViewport2 />
    </div>
  );
}

function IPadProMockup1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[928px]" data-name="iPad Pro Mockup">
      <IpadProChassis1 />
    </div>
  );
}

function ScreenViewport3() {
  return (
    <div className="col-1 h-[176px] ml-0 mt-[584px] relative rounded-[8px] row-1 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-[520px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[627.04%] left-[0.05%] max-w-none top-[-213.05%] w-full" src={imgHomeLampu20241} />
      </div>
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Image Container">
      <IPadProMockup1 />
      <ScreenViewport3 />
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Image Container">
      <ImageContainer3 />
      <div className="col-1 h-[69px] ml-[535px] mt-[664px] relative row-1 w-[119.5px]">
        <div className="absolute inset-[-2.9%_-10.26%_-2.9%_-1.67%]">
          <svg className="block size-full" fill="none" height="73.0002" preserveAspectRatio="none" viewBox="0 0 133.756 73.0002" width="133.756">
            <path d={svgPaths.p11698b00} fill="#007AFF" id="Vector 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame71 />
      <ImageContainer2 />
    </div>
  );
}

function SectionContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Section Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">{`Partnership & Newslatter`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">{`The new Partnership & Newsletter design separates partner information from the subscription form, making both sections easier to scan and use.`}</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <SectionContainer2 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame79 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Iteration 3" />
      <Frame78 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame77 />
    </div>
  );
}

function CameraSensorArray2() {
  return (
    <div className="-translate-x-1/2 absolute h-[5.438px] left-1/2 top-[5.44px] w-[58px]" data-name="camera-sensor-array">
      <svg className="absolute block inset-0 size-full" fill="none" height="5.4375" preserveAspectRatio="none" viewBox="0 0 58 5.4375" width="58">
        <g id="camera-sensor-array">
          <rect fill="#050607" height="5.4375" rx="2.71875" width="58" />
          <circle cx="24.9219" cy="2.71875" fill="#141E30" id="camera-lens" r="1.8125" />
          <circle cx="33.5312" cy="2.71875" fill="#0C0D0E" id="face-id-dot" r="1.35938" />
        </g>
      </svg>
    </div>
  );
}

function AppMain3() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[21.75px] relative" data-name="app-main" />;
}

function DashboardAppFrame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain3 />
    </div>
  );
}

function ScreenViewport4() {
  return (
    <div className="h-[601.75px] relative rounded-[19.938px] shrink-0 w-[895.375px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.938px]">
        <img alt="" className="absolute h-[511.73%] left-[-0.02%] max-w-none top-[-411.73%] w-full" src={imgScreenViewport} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame3 />
        <div className="absolute border-[2.719px] border-[rgba(0,0,0,0.38)] border-solid h-[601.75px] left-0 rounded-[19.938px] top-0 w-[895.375px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.906px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[19.938px]" />
    </div>
  );
}

function IpadProChassis2() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_7.25px_10.875px_rgba(0,0,0,0.12)] flex flex-col h-[634.375px] items-center justify-center p-[16.313px] relative rounded-[36.25px] shrink-0 w-[928px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.813px] border-solid inset-0 pointer-events-none rounded-[36.25px]" />
      <div className="absolute border-[#6c757d] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray2 />
      <ScreenViewport4 />
    </div>
  );
}

function IPadProMockup2() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[928px]" data-name="iPad Pro Mockup">
      <IpadProChassis2 />
    </div>
  );
}

function ScreenViewport5() {
  return (
    <div className="col-1 h-[370px] ml-0 mt-[584px] relative rounded-[8px] row-1 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-[520px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[298.27%] left-[-0.07%] max-w-none top-[-198.3%] w-full" src={imgHomeLampu20241} />
      </div>
    </div>
  );
}

function ImageContainer5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Image Container">
      <IPadProMockup2 />
      <ScreenViewport5 />
    </div>
  );
}

function ImageContainer4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Image Container">
      <ImageContainer5 />
      <div className="col-1 h-[69px] ml-[535px] mt-[714px] relative row-1 w-[119.5px]">
        <div className="absolute inset-[-2.9%_-10.26%_-2.9%_-1.67%]">
          <svg className="block size-full" fill="none" height="73.0002" preserveAspectRatio="none" viewBox="0 0 133.756 73.0002" width="133.756">
            <path d={svgPaths.p11698b00} fill="#007AFF" id="Vector 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame76 />
      <ImageContainer4 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame65 />
      <Frame70 />
      <Frame75 />
    </div>
  );
}

function MyProductSection() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[40px] items-start p-[80px] relative shrink-0 w-full" data-name="my-product-section">
      <div className="relative shrink-0" data-name="Section Header">
        <div className="[word-break:break-word] content-stretch flex font-['Fragment_Mono:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative size-full text-[11px] text-white whitespace-nowrap">
          <p className="relative shrink-0">06</p>
          <p className="relative shrink-0">/</p>
          <p className="relative shrink-0">ITERATION</p>
        </div>
      </div>
      <Frame64 />
      <Frame93 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative text-[#1a1d20]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Find the Right Business Solutions</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">This platform connects buyers with relevant companies and business solutions that match their needs.</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Frame82 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[594px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[508.242px] left-1/2 rounded-[9.275px] top-[calc(50%+0.12px)] w-[742px]" data-name="video-fitur-lampu" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame81 />
      <Container1 />
    </div>
  );
}

function MyOrderSection1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-[1180px]" data-name="my-order-section">
      <Frame80 />
    </div>
  );
}

function SectionContainer3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Section Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Meeting buyers where they browse</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">Not every buyer shops from a desktop. Many discover and evaluate products on mobile, so the experience brings relevant products and industries closer to them, without asking them to navigate elsewhere.</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <SectionContainer3 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame85 />
    </div>
  );
}

function Antennae() {
  return (
    <div className="absolute contents left-0 top-[0.52px]" data-name="Antennae">
      <div className="absolute flex h-[4.688px] items-center justify-center right-[0.52px] top-[45.32px] w-[3.126px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[3.126px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute flex h-[2.605px] items-center justify-center right-[43.76px] top-[0.52px] w-[4.688px]">
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[2.605px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] left-0 to-[80.729%] to-[rgba(60,55,53,0)] top-[45.32px] w-[3.126px]" data-name="Antenna" />
      <div className="absolute bottom-[45.64px] flex h-[4.688px] items-center justify-center right-0 w-[3.647px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[3.647px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute bottom-[0.32px] flex h-[3.647px] items-center justify-center left-[43.76px] w-[5.209px]">
        <div className="-rotate-90 flex-none">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[5.209px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[3.647px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute bg-gradient-to-l bottom-[45.64px] from-[#3c3735] from-[28.646%] h-[4.688px] left-0 to-[80.729%] to-[rgba(60,55,53,0)] w-[3.126px]" data-name="Antenna" />
    </div>
  );
}

function ScreenInsertContentHere() {
  return (
    <div className="absolute inset-[10.42px_10.42px_10.74px_10.42px] rounded-[23.963px]" data-name="Screen / Insert Content Here">
      <div className="absolute inset-0 overflow-hidden rounded-[23.963px]" />
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute contents left-[-2.08px] top-[92.73px]" data-name="Buttons">
      <div className="absolute h-[53.135px] pointer-events-none right-[-1.56px] rounded-br-[1.042px] rounded-tr-[1.042px] top-[137.53px] w-[2.084px]" data-name="Power">
        <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_-1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898,inset_-3.647px_0px_1.563px_-3.126px_#989898]" />
      </div>
      <div className="absolute flex h-[33.34px] items-center justify-center left-[-2.08px] top-[169.82px] w-[2.084px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[33.34px] pointer-events-none relative rounded-br-[1.042px] rounded-tr-[1.042px] w-[2.084px]" data-name="Volume / Down">
            <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[33.34px] items-center justify-center left-[-2.08px] top-[125.02px] w-[2.084px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[33.34px] pointer-events-none relative rounded-br-[1.042px] rounded-tr-[1.042px] w-[2.084px]" data-name="Volume / Up">
            <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[16.149px] items-center justify-center left-[-2.08px] top-[92.72px] w-[2.084px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[16.149px] pointer-events-none relative rounded-br-[1.042px] rounded-tr-[1.042px] w-[2.084px]" data-name="Switch">
            <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Speaker() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.34px)] pointer-events-none top-[3.13px]" data-name="Speaker">
      <div className="-translate-x-1/2 absolute h-[4.688px] left-[calc(50%+0.34px)] rounded-bl-[2.605px] rounded-br-[2.605px] top-[3.13px] w-[38.549px]" data-name="Speaker Border">
        <div aria-hidden className="absolute bg-black inset-0 rounded-bl-[2.605px] rounded-br-[2.605px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_1.042px_0px_rgba(255,255,255,0.15)]" />
      </div>
      <div className="-translate-x-1/2 absolute h-[2.084px] left-[calc(50%+0.34px)] rounded-[3.68px] top-[4.17px] w-[35.423px]" data-name="Speaker">
        <div aria-hidden className="absolute inset-0 rounded-[3.68px]">
          <div className="absolute bg-[#131313] inset-0 rounded-[3.68px]" />
          <img alt="" className="absolute max-w-none object-cover opacity-25 rounded-[3.68px] size-full" src={imgSpeaker} />
        </div>
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-2.084px_0px_1.563px_-1.042px_rgba(255,255,255,0.08),inset_2.084px_0px_1.563px_-1.042px_rgba(255,255,255,0.08)]" />
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-29.88px)] size-[8.335px] top-[11.98px]" data-name="Camera">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.33488" preserveAspectRatio="none" viewBox="0 0 8.33489 8.33488" width="8.33489">
        <g id="Camera ">
          <circle cx="4.16744" cy="4.16744" fill="#090909" id="Lens" r="4.16744" />
          <g filter="url(#filter0_f_0_126)" id="Reflections">
            <circle cx="4.16738" cy="4.16758" fill="#000100" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint0_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint1_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint2_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint3_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint4_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint5_radial_0_126)" r="2.60465" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.31236" id="filter0_f_0_126" width="7.31236" x="0.511198" y="0.511401">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_0_126" stdDeviation="0.525765" />
          </filter>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.14412 3.19084) rotate(149.931) scale(1.4296)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_126" r="1">
            <stop stopColor="#0052D0" stopOpacity="0.75" />
            <stop offset="0.806722" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.20924 4.16758) rotate(153.435) scale(1.74725)" gradientUnits="userSpaceOnUse" id="paint1_radial_0_126" r="1">
            <stop stopColor="#2D62E6" />
            <stop offset="0.484375" stopColor="#1E5CDD" stopOpacity="0.4" />
            <stop offset="1" stopColor="#0050CB" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.20924 4.94898) rotate(-170.538) scale(1.58435)" gradientUnits="userSpaceOnUse" id="paint2_radial_0_126" r="1">
            <stop stopColor="#715CAA" stopOpacity="0.78" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(3.12552 5.20944) rotate(-15.9454) scale(1.42216)" gradientUnits="userSpaceOnUse" id="paint3_radial_0_126" r="1">
            <stop stopColor="#1A6D61" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(2.86505 4.16758) scale(1.62791)" gradientUnits="userSpaceOnUse" id="paint4_radial_0_126" r="1">
            <stop stopColor="#327797" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(3.12552 3.38619) rotate(87.3974) scale(1.43404)" gradientUnits="userSpaceOnUse" id="paint5_radial_0_126" r="1">
            <stop stopColor="#256F5D" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function IPhone() {
  return (
    <div className="absolute h-[460.502px] left-[49.5px] rounded-[35.423px] top-[-95.01px] w-[224px]" data-name="iPhone 16">
      <div className="absolute inset-[0_0.52px_0.32px_0] pointer-events-none rounded-[35.423px]" data-name="Frame">
        <div aria-hidden className="absolute bg-gradient-to-b from-[#8d8d8d] inset-0 rounded-[35.423px] to-[#535353]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.521px_0.521px_0px_#26394c,inset_0px_0.521px_0.521px_0px_#26394c,inset_-0.521px_0px_0.521px_0px_#26394c,inset_0.521px_0px_0.521px_0px_#26394c,inset_0px_-1.563px_0.26px_0px_rgba(255,255,255,0.6),inset_0px_1.563px_0.26px_0px_rgba(255,255,255,0.6),inset_-1.563px_0px_0.26px_0px_rgba(255,255,255,0.6),inset_1.563px_0px_0.26px_0px_rgba(255,255,255,0.6)]" />
      </div>
      <Antennae />
      <div className="absolute inset-[3.13px_3.13px_3.45px_3.13px]" data-name="Screen Glass">
        <div className="absolute inset-[-0.23%_-0.48%_-0.57%_-0.48%]">
          <svg className="block size-full" fill="none" height="457.586" preserveAspectRatio="none" viewBox="0 0 219.852 457.586" width="219.852">
            <g filter="url(#filter0_ddi_0_120)" id="Screen Glass">
              <path d={svgPaths.p34d99200} fill="black" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="457.586" id="filter0_ddi_0_120" width="219.852" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.525765" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_120" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.08372" />
                <feGaussianBlur stdDeviation="0.260465" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="effect1_dropShadow_0_120" mode="normal" result="effect2_dropShadow_0_120" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_0_120" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2.34419" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_0_120" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ScreenInsertContentHere />
      <Buttons />
      <Speaker />
      <div className="-translate-x-1/2 absolute h-[19.274px] left-[calc(50%+0.08px)] top-[8.33px] w-[101.581px]" data-name="Notch">
        <svg className="absolute block inset-0 size-full" fill="none" height="19.2744" preserveAspectRatio="none" viewBox="0 0 101.581 19.2744" width="101.581">
          <path d={svgPaths.p3ad1c880} fill="black" id="Notch" />
        </svg>
      </div>
      <Camera />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#2b6cb0] flex-[1_0_0] h-[442px] min-w-px overflow-clip relative rounded-[8px]" data-name="Container">
      <IPhone />
    </div>
  );
}

function Antennae1() {
  return (
    <div className="absolute contents left-0 top-[0.52px]" data-name="Antennae">
      <div className="absolute flex h-[4.688px] items-center justify-center right-[0.52px] top-[45.32px] w-[3.126px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[3.126px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute flex h-[2.605px] items-center justify-center right-[43.76px] top-[0.52px] w-[4.688px]">
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[2.605px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] left-0 to-[80.729%] to-[rgba(60,55,53,0)] top-[45.32px] w-[3.126px]" data-name="Antenna" />
      <div className="absolute bottom-[45.64px] flex h-[4.688px] items-center justify-center right-0 w-[3.647px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[3.647px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute bottom-[0.32px] flex h-[3.647px] items-center justify-center left-[43.76px] w-[5.209px]">
        <div className="-rotate-90 flex-none">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[5.209px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[3.647px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute bg-gradient-to-l bottom-[45.64px] from-[#3c3735] from-[28.646%] h-[4.688px] left-0 to-[80.729%] to-[rgba(60,55,53,0)] w-[3.126px]" data-name="Antenna" />
    </div>
  );
}

function ScreenInsertContentHere1() {
  return (
    <div className="absolute inset-[10.42px_10.42px_10.74px_10.42px] rounded-[23.963px]" data-name="Screen / Insert Content Here">
      <div className="absolute inset-0 overflow-hidden rounded-[23.963px]" />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="absolute contents left-[-2.08px] top-[92.73px]" data-name="Buttons">
      <div className="absolute h-[53.135px] pointer-events-none right-[-1.56px] rounded-br-[1.042px] rounded-tr-[1.042px] top-[137.53px] w-[2.084px]" data-name="Power">
        <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_-1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898,inset_-3.647px_0px_1.563px_-3.126px_#989898]" />
      </div>
      <div className="absolute flex h-[33.34px] items-center justify-center left-[-2.08px] top-[169.82px] w-[2.084px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[33.34px] pointer-events-none relative rounded-br-[1.042px] rounded-tr-[1.042px] w-[2.084px]" data-name="Volume / Down">
            <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[33.34px] items-center justify-center left-[-2.08px] top-[125.02px] w-[2.084px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[33.34px] pointer-events-none relative rounded-br-[1.042px] rounded-tr-[1.042px] w-[2.084px]" data-name="Volume / Up">
            <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[16.149px] items-center justify-center left-[-2.08px] top-[92.72px] w-[2.084px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[16.149px] pointer-events-none relative rounded-br-[1.042px] rounded-tr-[1.042px] w-[2.084px]" data-name="Switch">
            <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Speaker1() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.34px)] pointer-events-none top-[3.13px]" data-name="Speaker">
      <div className="-translate-x-1/2 absolute h-[4.688px] left-[calc(50%+0.34px)] rounded-bl-[2.605px] rounded-br-[2.605px] top-[3.13px] w-[38.549px]" data-name="Speaker Border">
        <div aria-hidden className="absolute bg-black inset-0 rounded-bl-[2.605px] rounded-br-[2.605px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_1.042px_0px_rgba(255,255,255,0.15)]" />
      </div>
      <div className="-translate-x-1/2 absolute h-[2.084px] left-[calc(50%+0.34px)] rounded-[3.68px] top-[4.17px] w-[35.423px]" data-name="Speaker">
        <div aria-hidden className="absolute inset-0 rounded-[3.68px]">
          <div className="absolute bg-[#131313] inset-0 rounded-[3.68px]" />
          <img alt="" className="absolute max-w-none object-cover opacity-25 rounded-[3.68px] size-full" src={imgSpeaker} />
        </div>
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-2.084px_0px_1.563px_-1.042px_rgba(255,255,255,0.08),inset_2.084px_0px_1.563px_-1.042px_rgba(255,255,255,0.08)]" />
      </div>
    </div>
  );
}

function Camera1() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-29.88px)] size-[8.335px] top-[11.98px]" data-name="Camera">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.33488" preserveAspectRatio="none" viewBox="0 0 8.33489 8.33488" width="8.33489">
        <g id="Camera ">
          <circle cx="4.16744" cy="4.16744" fill="#090909" id="Lens" r="4.16744" />
          <g filter="url(#filter0_f_0_126)" id="Reflections">
            <circle cx="4.16738" cy="4.16758" fill="#000100" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint0_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint1_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint2_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint3_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint4_radial_0_126)" r="2.60465" />
            <circle cx="4.16738" cy="4.16758" fill="url(#paint5_radial_0_126)" r="2.60465" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.31236" id="filter0_f_0_126" width="7.31236" x="0.511198" y="0.511401">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_0_126" stdDeviation="0.525765" />
          </filter>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.14412 3.19084) rotate(149.931) scale(1.4296)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_126" r="1">
            <stop stopColor="#0052D0" stopOpacity="0.75" />
            <stop offset="0.806722" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.20924 4.16758) rotate(153.435) scale(1.74725)" gradientUnits="userSpaceOnUse" id="paint1_radial_0_126" r="1">
            <stop stopColor="#2D62E6" />
            <stop offset="0.484375" stopColor="#1E5CDD" stopOpacity="0.4" />
            <stop offset="1" stopColor="#0050CB" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.20924 4.94898) rotate(-170.538) scale(1.58435)" gradientUnits="userSpaceOnUse" id="paint2_radial_0_126" r="1">
            <stop stopColor="#715CAA" stopOpacity="0.78" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(3.12552 5.20944) rotate(-15.9454) scale(1.42216)" gradientUnits="userSpaceOnUse" id="paint3_radial_0_126" r="1">
            <stop stopColor="#1A6D61" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(2.86505 4.16758) scale(1.62791)" gradientUnits="userSpaceOnUse" id="paint4_radial_0_126" r="1">
            <stop stopColor="#327797" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(3.12552 3.38619) rotate(87.3974) scale(1.43404)" gradientUnits="userSpaceOnUse" id="paint5_radial_0_126" r="1">
            <stop stopColor="#256F5D" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function IPhone1() {
  return (
    <div className="absolute h-[460.502px] left-[49.5px] rounded-[35.423px] top-[-95.01px] w-[224px]" data-name="iPhone 16">
      <div className="absolute inset-[0_0.52px_0.32px_0] pointer-events-none rounded-[35.423px]" data-name="Frame">
        <div aria-hidden className="absolute bg-gradient-to-b from-[#8d8d8d] inset-0 rounded-[35.423px] to-[#535353]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.521px_0.521px_0px_#26394c,inset_0px_0.521px_0.521px_0px_#26394c,inset_-0.521px_0px_0.521px_0px_#26394c,inset_0.521px_0px_0.521px_0px_#26394c,inset_0px_-1.563px_0.26px_0px_rgba(255,255,255,0.6),inset_0px_1.563px_0.26px_0px_rgba(255,255,255,0.6),inset_-1.563px_0px_0.26px_0px_rgba(255,255,255,0.6),inset_1.563px_0px_0.26px_0px_rgba(255,255,255,0.6)]" />
      </div>
      <Antennae1 />
      <div className="absolute inset-[3.13px_3.13px_3.45px_3.13px]" data-name="Screen Glass">
        <div className="absolute inset-[-0.23%_-0.48%_-0.57%_-0.48%]">
          <svg className="block size-full" fill="none" height="457.586" preserveAspectRatio="none" viewBox="0 0 219.852 457.586" width="219.852">
            <g filter="url(#filter0_ddi_0_120)" id="Screen Glass">
              <path d={svgPaths.p34d99200} fill="black" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="457.586" id="filter0_ddi_0_120" width="219.852" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.525765" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_120" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.08372" />
                <feGaussianBlur stdDeviation="0.260465" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="effect1_dropShadow_0_120" mode="normal" result="effect2_dropShadow_0_120" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_0_120" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2.34419" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_0_120" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ScreenInsertContentHere1 />
      <Buttons1 />
      <Speaker1 />
      <div className="-translate-x-1/2 absolute h-[19.274px] left-[calc(50%+0.08px)] top-[8.33px] w-[101.581px]" data-name="Notch">
        <svg className="absolute block inset-0 size-full" fill="none" height="19.2744" preserveAspectRatio="none" viewBox="0 0 101.581 19.2744" width="101.581">
          <path d={svgPaths.p3ad1c880} fill="black" id="Notch" />
        </svg>
      </div>
      <Camera1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#2b6cb0] flex-[1_0_0] h-[442px] min-w-px overflow-clip relative rounded-[8px]" data-name="Container">
      <IPhone1 />
    </div>
  );
}

function Antennae2() {
  return (
    <div className="absolute contents left-0 top-[0.52px]" data-name="Antennae">
      <div className="absolute flex h-[4.688px] items-center justify-center right-[0.52px] top-[45.32px] w-[3.126px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[3.126px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute flex h-[2.605px] items-center justify-center right-[43.76px] top-[0.52px] w-[4.688px]">
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[2.605px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] left-0 to-[80.729%] to-[rgba(60,55,53,0)] top-[45.32px] w-[3.126px]" data-name="Antenna" />
      <div className="absolute bottom-[45.64px] flex h-[4.688px] items-center justify-center right-0 w-[3.647px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[4.688px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[3.647px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute bottom-[0.32px] flex h-[3.647px] items-center justify-center left-[43.76px] w-[5.209px]">
        <div className="-rotate-90 flex-none">
          <div className="bg-gradient-to-l from-[#3c3735] from-[28.646%] h-[5.209px] relative to-[80.729%] to-[rgba(60,55,53,0)] w-[3.647px]" data-name="Antenna" />
        </div>
      </div>
      <div className="absolute bg-gradient-to-l bottom-[45.64px] from-[#3c3735] from-[28.646%] h-[4.688px] left-0 to-[80.729%] to-[rgba(60,55,53,0)] w-[3.126px]" data-name="Antenna" />
    </div>
  );
}

function ScreenInsertContentHere2() {
  return (
    <div className="absolute inset-[10.42px_10.42px_10.74px_10.42px] rounded-[23.963px]" data-name="Screen / Insert Content Here">
      <div className="absolute inset-0 overflow-hidden rounded-[23.963px]" />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="absolute contents left-[-2.08px] top-[92.73px]" data-name="Buttons">
      <div className="absolute h-[53.135px] pointer-events-none right-[-1.56px] rounded-br-[1.042px] rounded-tr-[1.042px] top-[137.53px] w-[2.084px]" data-name="Power">
        <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_-1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898,inset_-3.647px_0px_1.563px_-3.126px_#989898]" />
      </div>
      <div className="absolute flex h-[33.34px] items-center justify-center left-[-2.08px] top-[169.82px] w-[2.084px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[33.34px] pointer-events-none relative rounded-br-[1.042px] rounded-tr-[1.042px] w-[2.084px]" data-name="Volume / Down">
            <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[33.34px] items-center justify-center left-[-2.08px] top-[125.02px] w-[2.084px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[33.34px] pointer-events-none relative rounded-br-[1.042px] rounded-tr-[1.042px] w-[2.084px]" data-name="Volume / Up">
            <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[16.149px] items-center justify-center left-[-2.08px] top-[92.72px] w-[2.084px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[16.149px] pointer-events-none relative rounded-br-[1.042px] rounded-tr-[1.042px] w-[2.084px]" data-name="Switch">
            <div aria-hidden className="absolute bg-gradient-to-b from-[#5d5c57] inset-0 rounded-br-[1.042px] rounded-tr-[1.042px] to-[#5c5b56]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1.563px_0px_0.521px_-1.042px_rgba(0,0,0,0.25),inset_1.563px_0px_2.084px_-1.042px_rgba(0,0,0,0.25),inset_0px_2.084px_1.042px_-1.042px_#2a333e,inset_0px_-1.563px_1.042px_-1.042px_#2a333e,inset_0px_4.688px_1.042px_-2.605px_#989898,inset_0px_-4.688px_1.042px_-2.605px_#989898]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Speaker2() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.34px)] pointer-events-none top-[3.13px]" data-name="Speaker">
      <div className="-translate-x-1/2 absolute h-[4.688px] left-[calc(50%+0.34px)] rounded-bl-[2.605px] rounded-br-[2.605px] top-[3.13px] w-[38.549px]" data-name="Speaker Border">
        <div aria-hidden className="absolute bg-black inset-0 rounded-bl-[2.605px] rounded-br-[2.605px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_1.042px_0px_rgba(255,255,255,0.15)]" />
      </div>
      <div className="-translate-x-1/2 absolute h-[2.084px] left-[calc(50%+0.34px)] rounded-[3.68px] top-[4.17px] w-[35.423px]" data-name="Speaker">
        <div aria-hidden className="absolute inset-0 rounded-[3.68px]">
          <div className="absolute bg-[#131313] inset-0 rounded-[3.68px]" />
          <img alt="" className="absolute max-w-none object-cover opacity-25 rounded-[3.68px] size-full" src={imgSpeaker} />
        </div>
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-2.084px_0px_1.563px_-1.042px_rgba(255,255,255,0.08),inset_2.084px_0px_1.563px_-1.042px_rgba(255,255,255,0.08)]" />
      </div>
    </div>
  );
}

function Camera2() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-29.88px)] size-[8.335px] top-[11.98px]" data-name="Camera">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.33488" preserveAspectRatio="none" viewBox="0 0 8.33489 8.33488" width="8.33489">
        <g id="Camera ">
          <circle cx="4.16744" cy="4.16744" fill="#090909" id="Lens" r="4.16744" />
          <g filter="url(#filter0_f_0_122)" id="Reflections">
            <circle cx="4.16721" cy="4.16758" fill="#000100" r="2.60465" />
            <circle cx="4.16721" cy="4.16758" fill="url(#paint0_radial_0_122)" r="2.60465" />
            <circle cx="4.16721" cy="4.16758" fill="url(#paint1_radial_0_122)" r="2.60465" />
            <circle cx="4.16721" cy="4.16758" fill="url(#paint2_radial_0_122)" r="2.60465" />
            <circle cx="4.16721" cy="4.16758" fill="url(#paint3_radial_0_122)" r="2.60465" />
            <circle cx="4.16721" cy="4.16758" fill="url(#paint4_radial_0_122)" r="2.60465" />
            <circle cx="4.16721" cy="4.16758" fill="url(#paint5_radial_0_122)" r="2.60465" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.31236" id="filter0_f_0_122" width="7.31236" x="0.511032" y="0.511401">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_0_122" stdDeviation="0.525765" />
          </filter>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.14396 3.19084) rotate(149.931) scale(1.4296)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_122" r="1">
            <stop stopColor="#0052D0" stopOpacity="0.75" />
            <stop offset="0.806722" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.20907 4.16758) rotate(153.435) scale(1.74725)" gradientUnits="userSpaceOnUse" id="paint1_radial_0_122" r="1">
            <stop stopColor="#2D62E6" />
            <stop offset="0.484375" stopColor="#1E5CDD" stopOpacity="0.4" />
            <stop offset="1" stopColor="#0050CB" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(5.20907 4.94898) rotate(-170.538) scale(1.58435)" gradientUnits="userSpaceOnUse" id="paint2_radial_0_122" r="1">
            <stop stopColor="#715CAA" stopOpacity="0.78" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(3.12535 5.20944) rotate(-15.9454) scale(1.42216)" gradientUnits="userSpaceOnUse" id="paint3_radial_0_122" r="1">
            <stop stopColor="#1A6D61" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(2.86489 4.16758) scale(1.62791)" gradientUnits="userSpaceOnUse" id="paint4_radial_0_122" r="1">
            <stop stopColor="#327797" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(3.12535 3.38619) rotate(87.3974) scale(1.43404)" gradientUnits="userSpaceOnUse" id="paint5_radial_0_122" r="1">
            <stop stopColor="#256F5D" />
            <stop offset="1" stopColor="#043581" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function IPhone2() {
  return (
    <div className="absolute h-[460.502px] left-[49.5px] rounded-[35.423px] top-[-95.01px] w-[224px]" data-name="iPhone 16">
      <div className="absolute inset-[0_0.52px_0.32px_0] pointer-events-none rounded-[35.423px]" data-name="Frame">
        <div aria-hidden className="absolute bg-gradient-to-b from-[#8d8d8d] inset-0 rounded-[35.423px] to-[#535353]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.521px_0.521px_0px_#26394c,inset_0px_0.521px_0.521px_0px_#26394c,inset_-0.521px_0px_0.521px_0px_#26394c,inset_0.521px_0px_0.521px_0px_#26394c,inset_0px_-1.563px_0.26px_0px_rgba(255,255,255,0.6),inset_0px_1.563px_0.26px_0px_rgba(255,255,255,0.6),inset_-1.563px_0px_0.26px_0px_rgba(255,255,255,0.6),inset_1.563px_0px_0.26px_0px_rgba(255,255,255,0.6)]" />
      </div>
      <Antennae2 />
      <div className="absolute inset-[3.13px_3.13px_3.45px_3.13px]" data-name="Screen Glass">
        <div className="absolute inset-[-0.23%_-0.48%_-0.57%_-0.48%]">
          <svg className="block size-full" fill="none" height="457.586" preserveAspectRatio="none" viewBox="0 0 219.852 457.586" width="219.852">
            <g filter="url(#filter0_ddi_0_120)" id="Screen Glass">
              <path d={svgPaths.p34d99200} fill="black" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="457.586" id="filter0_ddi_0_120" width="219.852" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.525765" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_120" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.08372" />
                <feGaussianBlur stdDeviation="0.260465" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="effect1_dropShadow_0_120" mode="normal" result="effect2_dropShadow_0_120" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_0_120" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2.34419" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_0_120" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ScreenInsertContentHere2 />
      <Buttons2 />
      <Speaker2 />
      <div className="-translate-x-1/2 absolute h-[19.274px] left-[calc(50%+0.08px)] top-[8.33px] w-[101.581px]" data-name="Notch">
        <svg className="absolute block inset-0 size-full" fill="none" height="19.2744" preserveAspectRatio="none" viewBox="0 0 101.581 19.2744" width="101.581">
          <path d={svgPaths.p3ad1c880} fill="black" id="Notch" />
        </svg>
      </div>
      <Camera2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#2b6cb0] flex-[1_0_0] h-[442px] min-w-px overflow-clip relative rounded-[8px]" data-name="Container">
      <IPhone2 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="section">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame84 />
      <Section />
    </div>
  );
}

function MyProductSection1() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full" data-name="my-product-section">
      <Frame83 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[100px] shrink-0" data-name="Category Badge">
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#2b6cb0] text-[18px] whitespace-nowrap">Conclusion</p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#1a1d20] text-[24px] w-[min-content]">
        <span className="leading-[32px]">{`The landing page `}</span>
        <span className="leading-[32px] text-[#2b6cb0]">achieved a significant increase in organic traffic</span>
        <span className="leading-[32px]">{` by improving search visibility through a focused SEO strategy. This helped more potential users discover the platform through relevant search queries.`}</span>
      </p>
      <ul className="[word-break:break-word] block font-['Geist:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#6c757d] text-[16px] w-[min-content]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[24px]">The redesigned flow also encouraged more meaningful activity across the platform. Users could explore products directly from the homepage and complete payments with fewer steps, reducing the need to navigate between multiple pages and creating a smoother path from discovery to conversion.</span>
        </li>
      </ul>
    </div>
  );
}

function ConclusionSection() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full" data-name="conclusion-section">
      <Frame86 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <HeroSection />
      <OverviewSection />
      <FindingSection />
      <ProblemSection />
      <ProblemSection1 />
      <ProcessSection />
      <ProcessSection1 />
      <ProcessSection2 />
      <MyOrderSection />
      <ProcessSection3 />
      <MyProductSection />
      <MyOrderSection1 />
      <MyProductSection1 />
      <ConclusionSection />
    </div>
  );
}

function Frame87() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6c757d] text-[11px]">Up Next</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px]">Lampu: Lintasarta Marketplace Universe</p>
    </div>
  );
}

function NavigationFooter() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[80px] py-[40px] relative shrink-0 w-full" data-name="navigation-footer">
      <div aria-hidden className="absolute border-[#e9edf0] border-solid border-t inset-0 pointer-events-none" />
      <Frame87 />
      <Button className="bg-[#2b6cb0] relative rounded-[10px] shrink-0" label="View Project" showLeftIcon={false} />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="main-container">
      <TopHeaderBar />
      <Frame88 />
      <NavigationFooter />
    </div>
  );
}

export default function CaseStudyRevampLandingPage() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-start relative size-full" data-name="case-study-Revamp Landing Page">
      <Sidebar />
      <MainContainer />
    </div>
  );
}