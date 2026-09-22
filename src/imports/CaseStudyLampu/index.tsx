import svgPaths from "./svg-rwazkxulsv";
import imgBrilliantFacetedCrystalGemstone1 from "./323978cca3f94f43fbb268bf32ea431cdfcaf04c.webp";
import imgShadow from "./4f6103cc1e4bca3b94c8bbc35c4636de79f99309.png";
import imgMain from "./d779780fc05b63d75547ad32d5e97b11dc3851b3.webp";
import imgMacBookProMockup16InchSilverRightLabel from "./b41a665e314290971f18b33354ce83f9c6197996.webp";
import imgKeyInsightLampu202411 from "./913b3d3896e6748b592ff0ef364cb7cb3458ee25.webp";
import imgPersona11 from "./4394ce351e517ab75088dd67f417e418968b0b9b.webp";
import imgPersona1 from "./042abe7ecfc6411e94d701a68b8a9eb8e2ea95a2.webp";
import imgIALampuMarketplace1 from "./02e4591b586265aeb131bda161f02f45c16081a2.webp";
import imgFlowNormalLampu1 from "./22c1386a6dffed24b76173373d816fb8eb498ff1.png";
import imgTypographyUnifiedTable1 from "./e545a5f4a9e45d6bea6cb5c559e4883ff10c4da5.webp";
import imgTypographyUnifiedTable2 from "./5a540255e2f62b7fbee591a3cd6aa0eae88a4fa3.png";
import imgTypographyUnifiedTable3 from "./c1d35044d26dcf8fe1fe8ad222cb74a77de2e92b.webp";
import imgDesignSystemLAmpu1 from "./be16f470c72da2156bf0687b7837e7b5da60661a.webp";
import imgHomeLampu20241 from "./9568d892d13658b7d8481f72e547aedc6757b384.webp";
import imgScreenViewport from "./0b3a3f554baa3aa7d1c18a9eeb6ac31398163694.webp";
import imgScreenViewport1 from "./c0e0c9fa8ae162abf9ade19a4674701c6d998c9f.webp";
import imgScreenViewport2 from "./0a15acead9f1a8e58de31ac9be72bc383ea034d9.webp";
import imgScreenViewport3 from "./b9c8c06ee7f61befeaa8544433c0294c23eb5961.webp";
import imgScreenViewport4 from "./3455f93b8f5bf9365b748b04773198831456c09f.webp";
import imgScreenViewport5 from "./7c4e1a1952c3b503fde3b11445081da2daf959f1.webp";
import imgScreenViewport6 from "./cf4b51c642dbdd184e03178f3864b2d14f76add0.webp";
import imgScreenViewport7 from "./ea3c96f9deb1b8989115bed45e46a3944fc892cd.webp";
import imgScreenViewport8 from "./7ad271586d1005f042b15f7839a489871e07f8c0.webp";
import imgScreenViewport9 from "./e8c971a0b5e1916e9d6e70d0c7c5c07f48269a94.webp";
import imgMyOrderDetailOrder from "./b250fa30f9cee1b3cfa8e13ecc63ed24fb66524c.webp";
import imgMyOrderHowToPay from "./09a1af52445f19559bb9fd1e8158a86e19bf1128.webp";
import imgScreenViewport10 from "./a06769720377c2280ae2129d4f87a1c573f0827d.webp";
import imgScreenViewport11 from "./2248ac84dbd93346da04afa8b0793bc91af98778.webp";
import imgScreenViewport12 from "./a9de189352b9e2bf75426503476cd6c0ae5b7c83.webp";
import imgCheckoutScreenshot1 from "./4c58d8a0c5bfbce03cc044c7e47fe7104fbf55a1.webp";
import imgCheckoutScreenshot2 from "./1670633027a4650904a558b6ee73a841275d83de.webp";
import imgCheckoutScreenshot3 from "./b084e656a98fbf5098753ecd4091f1321d234211.webp";
import imgCheckoutScreenshot4 from "./5516c9dec28748278057ef99d2918f9393b738b0.webp";

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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px]">Rizky R.</p>
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6c757d] text-[10px]">My Portfolio</p>
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
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] whitespace-nowrap">Project Overview</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Problem</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Goals</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Research</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Design Principles</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Exploring</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Iteration</p>
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
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Lampu: Lintasarta Marketplace Universe</p>
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
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[56px] relative shrink-0 text-[#1a1d20] text-[48px] whitespace-nowrap">Lampu: Lintasarta Marketplace Universe</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] w-[760px]">Connecting sellers and buyers for digital product and service transactions</p>
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
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px]">May 2024</p>
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

function MacBookProMockup16InchSilverRight() {
  return (
    <div className="absolute flex h-[728.506px] items-center justify-center left-[77.59px] top-[-46.77px] w-[820.231px]">
      <div className="flex-none rotate-[9.14deg]">
        <div className="h-[620.254px] relative w-[730.975px]" data-name="MacBook Pro mockup 16-inch silver right">
          <div className="absolute h-[620.254px] left-0 opacity-70 top-0 w-[730.975px]" data-name="shadow">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShadow} />
          </div>
          <div className="absolute h-[583.705px] left-[1.07px] top-0 w-[729.9px]" data-name="main">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMain} />
          </div>
          <div className="absolute h-[423.357px] left-[10.21px] top-[7.88px] w-[513.654px]" data-name="MacBook Pro mockup 16-inch silver right label">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookProMockup16InchSilverRightLabel} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupContainer() {
  return (
    <div className="bg-[#f1f8ff] h-[450px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="mockup-container">
      <MacBookProMockup16InchSilverRight />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[80px] relative shrink-0 w-full" data-name="hero-section">
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
        <span className="leading-[32px] text-[24px]">Lampu</span>
        <span className="font-['Geist:Regular',sans-serif] font-normal leading-[32px] text-[24px]">{` is a digital transformation initiative designed to shift Lintasarta’s traditional, relationship-based sales process into a scalable, `}</span>
        <span className="leading-[32px] text-[24px]">API-driven B2B marketplace ecosystem.</span>
      </p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#6c757d] text-[24px] w-full">As a Designer, I led the end-to-end experience strategy, from discovery and business alignment to scalable system design, ensuring the platform delivers both usability excellence and measurable business impact.</p>
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
    <div className="content-stretch flex items-start relative shrink-0 w-[320px]" data-name="Frame">
      <SectionLabel className="relative shrink-0" name="PROBLEM" number="02" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#feebc8] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#c05621] text-[14px] whitespace-nowrap">!</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Manual and heavily relationship-driven</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Sales teams relied on personal contacts and manual outreach, with no automated workflows to nurture leads or track deal progress at scale.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#feebc8] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#c05621] text-[14px] whitespace-nowrap">!</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Not scalable for the global market</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">The system lacked multi-currency support, regional compliance handling, and localized fulfillment routing needed to serve international customers efficiently.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#feebc8] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#c05621] text-[14px] whitespace-nowrap">!</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Lacking a centralized system</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Critical data lived in disconnected spreadsheets and siloed tools, making it impossible to get a unified view of operations, inventory, or customer activity.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#feebc8] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#c05621] text-[14px] whitespace-nowrap">!</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Dependent on offline communication</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Teams coordinated through emails, phone calls, and in-person meetings, creating information gaps and delays when real-time collaboration was needed.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <Frame18 />
      <Frame21 />
      <Frame24 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] w-full">Lintasarta provides digital products and infrastructure used by both local and global ISPs. However, the current sales and integration processes are still:</p>
      <Frame14 />
    </div>
  );
}

function ProblemSection() {
  return (
    <div className="bg-white content-stretch flex gap-[64px] items-start p-[80px] relative shrink-0 w-full" data-name="problem-section">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] w-full">Launch a self-service B2B marketplace to accelerate business acquisition and drive revenue growth, empowering teams to prospect and convert with fewer barriers.</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Establish a self-service B2B marketplace</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Reduce average order processing time by streamlined sorting.</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[33.33%_16.67%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.69%_-3.52%]">
            <svg className="block size-full" fill="none" height="17.5" preserveAspectRatio="none" viewBox="0 0 22.8333 17.5" width="22.8333">
              <path d={svgPaths.p1a6c6900} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_54.17%_54.17%_16.67%]" data-name="Shape">
          <div className="absolute inset-[-8.04%]">
            <svg className="block size-full" fill="none" height="10.8334" preserveAspectRatio="none" viewBox="0 0 10.8333 10.8334" width="10.8333">
              <path d={svgPaths.p11257000} fill="#1A1D20" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Accelerate partner onboarding</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Increase daily recurring platform engagement via simplified views.</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-3/4 left-[47.92%] right-[47.92%] top-[12.5%]" data-name="Path">
          <div className="absolute inset-[-18.75%_-6.25%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 1.5 5.5" width="1.5">
              <path d="M0.75 4.75V0.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[23.33%_23.33%_67.71%_67.71%]" data-name="Path">
          <div className="absolute inset-[-26.16%]">
            <svg className="block size-full" fill="none" height="4.36667" preserveAspectRatio="none" viewBox="0 0 4.36667 4.36667" width="4.36667">
              <path d="M0.75 3.61667L3.61667 0.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[47.92%] left-3/4 right-[12.5%] top-[47.92%]" data-name="Path">
          <div className="absolute inset-[-6.25%_-18.75%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 5.5 1.5" width="5.5">
              <path d="M0.75 0.75H4.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[67.71%_23.33%_23.33%_67.71%]" data-name="Path">
          <div className="absolute inset-[-26.16%]">
            <svg className="block size-full" fill="none" height="4.36667" preserveAspectRatio="none" viewBox="0 0 4.36667 4.36667" width="4.36667">
              <path d="M0.75 0.75L3.61667 3.61667" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-[47.92%] right-[47.92%] top-3/4" data-name="Path">
          <div className="absolute inset-[-18.75%_-6.25%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 1.5 5.5" width="1.5">
              <path d="M0.75 0.75V4.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[67.71%_67.71%_23.33%_23.33%]" data-name="Path">
          <div className="absolute inset-[-26.16%]">
            <svg className="block size-full" fill="none" height="4.36667" preserveAspectRatio="none" viewBox="0 0 4.36667 4.36667" width="4.36667">
              <path d="M3.61667 0.75L0.75 3.61667" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[47.92%] left-[12.5%] right-3/4 top-[47.92%]" data-name="Path">
          <div className="absolute inset-[-6.25%_-18.75%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 5.5 1.5" width="5.5">
              <path d="M4.75 0.75H0.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[23.33%_67.71%_67.71%_23.33%]" data-name="Path">
          <div className="absolute inset-[-26.16%]">
            <svg className="block size-full" fill="none" height="4.36667" preserveAspectRatio="none" viewBox="0 0 4.36667 4.36667" width="4.36667">
              <path d="M3.61667 3.61667L0.75 0.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
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
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Increase API integration adoption</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Elevate ease-of-use rating through responsive user testing.</p>
    </div>
  );
}

function Frame33() {
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
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Improve overall operational efficiency</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Elevate ease-of-use rating through responsive user testing.</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.67%_16.67%_12.55%_16.67%]" data-name="Path">
          <div className="absolute inset-[-3.13%_-3.52%]">
            <svg className="block size-full" fill="none" height="25.4308" preserveAspectRatio="none" viewBox="0 0 22.8334 25.4308" width="22.8334">
              <path clipRule="evenodd" d={svgPaths.p110d28f2} fillRule="evenodd" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame36 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame29 />
      <Frame31 />
      <Frame33 />
      <Frame35 />
    </div>
  );
}

function GoalsSection() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[40px] items-start p-[80px] relative shrink-0 w-full" data-name="goals-section">
      <SectionLabel className="relative shrink-0" name="GOALS" number="03" />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#1a1d20] w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">Whatever I do</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">As a designer there are key data insights we can uncover on our own.</p>
    </div>
  );
}

function InsightGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Insight Group">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">The findings were synthesized by clustering interview quotes into themes. Affinity mapping and theme clustering to highlight shared pain points, expectations, and adoption drivers</p>
      <div className="aspect-[4096/1450] relative shrink-0 w-full" data-name="Key Insight Lampu 2024 (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKeyInsightLampu202411} />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Key Market Findings" />
      <InsightGroup />
    </div>
  );
}

function InsightDetails() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Insight Details">
      <div className="aspect-[2880/1780] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="persona-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersona11} />
      </div>
      <div className="aspect-[2880/1708] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="persona 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersona1} />
      </div>
    </div>
  );
}

function InsightGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Insight Group">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">From the interviews, I uncovered a range of experiences around procuring and offering services through a marketplace portal. I also identified two core stakeholder groups in the ecosystem: buyers (partners/customers) and sellers (product/service owners).</p>
      <InsightDetails />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="User Persona" />
      <InsightGroup1 />
    </div>
  );
}

function HowMightWeContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[4px] items-center leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap" data-name="How Might We Container">
      <p className="relative shrink-0 text-[#6c757d]">How might we</p>
      <p className="relative shrink-0 text-[#1a1d20]">help customers quickly find the right products and information?</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="black" id="Ellipse 4" r="4" />
        </svg>
      </div>
      <HowMightWeContainer />
    </div>
  );
}

function HowMightWeContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-name="How Might We Container">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#6c757d] text-[24px] whitespace-nowrap">How might we</p>
      <div className="flex-[1_0_0] font-['Geist:Bold',sans-serif] font-bold leading-[0] min-w-px relative text-[#1a1d20] text-[0px]">
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[32px] mb-0 text-[24px]">provide faster and more transparent access to coverage, pricing,</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[32px] text-[24px]">and specifications?</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[1099px]" data-name="Frame">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="black" id="Ellipse 4" r="4" />
        </svg>
      </div>
      <HowMightWeContainer1 />
    </div>
  );
}

function HowMightWeContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[4px] items-center leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap" data-name="How Might We Container">
      <p className="relative shrink-0 text-[#6c757d]">How might we</p>
      <p className="relative shrink-0 text-[#1a1d20]">make Lintasarta APIs easier to understand and integrate?</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="black" id="Ellipse 4" r="4" />
        </svg>
      </div>
      <HowMightWeContainer2 />
    </div>
  );
}

function HowMightWeContainer3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[4px] items-center leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap" data-name="How Might We Container">
      <p className="relative shrink-0 text-[#6c757d]">How might we</p>
      <p className="relative shrink-0 text-[#1a1d20]">give customers visibility and control over their services?</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="black" id="Ellipse 4" r="4" />
        </svg>
      </div>
      <HowMightWeContainer3 />
    </div>
  );
}

function HowMightWeContainer4() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[4px] items-center leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap" data-name="How Might We Container">
      <p className="relative shrink-0 text-[#6c757d]">How might we</p>
      <p className="relative shrink-0 text-[#1a1d20]">reduce dependency on manual support for routine requests?</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="black" id="Ellipse 4" r="4" />
        </svg>
      </div>
      <HowMightWeContainer4 />
    </div>
  );
}

function HowMightWeContainer5() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[4px] items-center leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap" data-name="How Might We Container">
      <p className="relative shrink-0 text-[#6c757d]">How might we</p>
      <p className="relative shrink-0 text-[#1a1d20]">reate enough value to encourage Open API adoption?</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="black" id="Ellipse 4" r="4" />
        </svg>
      </div>
      <HowMightWeContainer5 />
    </div>
  );
}

function InsightDetails1() {
  return (
    <div className="bg-[#f1f8ff] content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Insight Details">
      <Frame41 />
      <Frame42 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function InsightGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Insight Group">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1a1d20] text-[0px] w-full">
        <span className="leading-[24px] text-[16px]">{`Absolutely. Based on the affinity mapping in your image and the underlying research, I would add the How Might We (HMW) section after the four affinity clusters. The key is that the HMW should `}</span>
        <span className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] text-[16px]">not jump directly to a solution</span>
        <span className="leading-[24px] text-[16px]">{` like “How might we build a marketplace?” Instead, it should frame the design challenge based on the actual research findings.`}</span>
      </p>
      <InsightDetails1 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">Breaking Down The Main HMW</p>
          </div>
        </div>
      </div>
      <InsightGroup2 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="card">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">Landing Page</p>
      <div className="bg-[#f0fff4] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#34c759] text-[11px] whitespace-nowrap">High Impact, Low Effort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="card">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">Product Catalog</p>
      <div className="bg-[#f0fff4] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#34c759] text-[11px] whitespace-nowrap">High Impact, Low Effort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="card">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">{`Search & Filtering`}</p>
      <div className="bg-[#f0fff4] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#34c759] text-[11px] whitespace-nowrap">High Impact, Low Effort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="card">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">{`Product Information & Specifications`}</p>
      <div className="bg-[#f0fff4] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#34c759] text-[11px] whitespace-nowrap">High Impact, Low Effort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Feature Card">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="card">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">Transparent Pricing</p>
      <div className="bg-[#fff9f0] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ff9500] text-[11px] whitespace-nowrap">High Impact, Medium Effort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="card">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">API Documentation</p>
      <div className="bg-[#fff9f0] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ff9500] text-[11px] whitespace-nowrap">High Impact, Medium Effort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="card">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">Order Payment</p>
      <div className="bg-[#fff9f0] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ff9500] text-[11px] whitespace-nowrap">High Impact, Medium Effort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Feature Card">
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="card">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">Integration / API Access</p>
      <div className="bg-[#fff9f8] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ff3b30] text-[11px] whitespace-nowrap">High Impact, High Effort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white border border-[#e9edf0] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="card">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] whitespace-nowrap">{`Service & Integration Dashboard`}</p>
      <div className="bg-[#fff9f8] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ff3b30] text-[11px] whitespace-nowrap">High Impact, High Effort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Card7 />
      <Card8 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[14px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <circle cx="7" cy="7" fill="#34C759" id="Ellipse 4" r="7" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] whitespace-nowrap">Must Have</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[14px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <circle cx="7" cy="7" fill="#FF9500" id="Ellipse 4" r="7" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] whitespace-nowrap">Should Have</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[14px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <circle cx="7" cy="7" fill="#FF3B30" id="Ellipse 4" r="7" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] whitespace-nowrap">Later</p>
    </div>
  );
}

function PrioritizationLegend() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full" data-name="Prioritization Legend">
      <Frame48 />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function ImpactEffortDetails() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[14px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Impact Effort Details">
      <FeatureCard />
      <FeatureCard1 />
      <Frame143 />
      <PrioritizationLegend />
    </div>
  );
}

function ImpactEffortContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Impact Effort Container">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1a1d20] text-[0px] w-full">
        <span className="leading-[24px] text-[16px]">{`Yes. Based on the research data and the HMW we defined, I would create an `}</span>
        <span className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] text-[16px]">Impact vs. Effort</span>
        <span className="leading-[24px] text-[16px]">{` prioritization to show that the design direction was not simply “build everything users asked for,” but rather prioritize the features that create the highest customer and business value first.`}</span>
      </p>
      <ImpactEffortDetails />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">{`Decision Metrix `}</p>
          </div>
        </div>
      </div>
      <ImpactEffortContainer />
    </div>
  );
}

function IaContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="IA Container">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">This information architecture maps the complete site structure of Lampu Marketplace, outlining the key pages, their sub-sections, and how users navigate between them.</p>
      <div className="aspect-[4096/1958] relative shrink-0 w-full" data-name="I A Lampu Marketplace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIALampuMarketplace1} />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">Information Architecture</p>
          </div>
        </div>
      </div>
      <IaContainer />
    </div>
  );
}

function SimplifiedFlow() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Simplified Flow">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">in this stage, I also learned how to simplify user flows to make them look on point and sleek.</p>
      <div className="aspect-[4096/273] relative shrink-0 w-full" data-name="Flow normal Lampu 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlowNormalLampu1} />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">User Flow</p>
          </div>
        </div>
      </div>
      <SimplifiedFlow />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame47 />
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function ProcessSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start px-[120px] py-[80px] relative shrink-0 w-full" data-name="process-section">
      <SectionLabel className="relative shrink-0" name="RESEARCH" number="04" />
      <Frame37 />
      <Container />
    </div>
  );
}

function Frame53() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">Four principles that anchor every design decision I make.</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">{`From self-service empowerment to information transparency, these principles ensure my solutions reduce friction, respect users' time, and deliver clarity at every touchpoint.`}</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Self-Service First</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Because the existing process is heavily dependent on sales, the portal must allow users to perform basic activities without having to contact Lintasarta.</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-3.13%]">
            <svg className="block size-full" fill="none" height="25.5" preserveAspectRatio="none" viewBox="0 0 25.5 25.5" width="25.5">
              <circle cx="12.75" cy="12.75" id="Oval" r="12" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_60.4%_56.25%_35.44%]" data-name="Path">
          <div className="absolute inset-[-6.25%_-6.75%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 1.51333 1.5" width="1.51333">
              <path d="M0.75 0.75H0.763333" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_35.4%_56.25%_60.44%]" data-name="Path">
          <div className="absolute inset-[-6.25%_-6.75%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 1.51333 1.5" width="1.51333">
              <path d="M0.75 0.75H0.763333" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_39.58%_33.12%_39.58%]" data-name="Path">
          <div className="absolute inset-[-53.55%_-11.25%]">
            <svg className="block size-full" fill="none" height="2.90068" preserveAspectRatio="none" viewBox="0 0 8.16667 2.90068" width="8.16667">
              <path d={svgPaths.pd130880} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame56 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">{`Speed & Efficiency`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Reduce the time and effort required to access critical information.</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Path">
          <div className="absolute inset-[-3.13%]">
            <svg className="block size-full" fill="none" height="25.5" preserveAspectRatio="none" viewBox="0 0 25.5 25.5" width="25.5">
              <path clipRule="evenodd" d={svgPaths.p3f6c9f00} fillRule="evenodd" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%]" data-name="Oval">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <circle cx="4.75" cy="4.75" id="Oval" r="4" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Design for the Ecosystem</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Design beyond a product catalog.</p>
    </div>
  );
}

function Frame59() {
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
      <Frame60 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Information Transparency</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-full">Make critical business and technical information clear, accessible, and easy to understand.</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_66px] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[20.83%_12.5%_17.87%_12.5%]" data-name="Path">
          <div className="absolute inset-[-3.82%_-3.13%]">
            <svg className="block size-full" fill="none" height="21.1136" preserveAspectRatio="none" viewBox="0 0 25.5 21.1136" width="25.5">
              <path d={svgPaths.p33266380} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[33.33%] right-[58.33%] top-[36.67%]" data-name="Path">
          <div className="absolute inset-[-17.58%_-28.13%]">
            <svg className="block size-full" fill="none" height="5.76679" preserveAspectRatio="none" viewBox="0 0 4.16668 5.76679" width="4.16668">
              <path d={svgPaths.p101c7580} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame62 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame55 />
      <Frame57 />
      <Frame59 />
      <Frame61 />
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
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function TypographyDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Typography Details">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#1a1d20] text-[16px] w-[min-content]">Additionally, I explored the typography hierarchy to ensure a cohesive design.</p>
      <div className="h-[585px] relative rounded-[8px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] shrink-0 w-[894px]" data-name="Typography – Unified Table 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[227.47%] left-0 max-w-none top-[-0.01%] w-full" src={imgTypographyUnifiedTable1} />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">Typography</p>
          </div>
        </div>
      </div>
      <TypographyDetails />
    </div>
  );
}

function ColorPaletteImages() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Color Palette Images">
      <div className="aspect-[1320/864] col-1 ml-[43.3%] mt-0 relative rounded-[8px] row-1 w-[56.7%]" data-name="Typography – Unified Table 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-[0.05%] w-[139.91%]" src={imgTypographyUnifiedTable2} />
        </div>
      </div>
      <div className="aspect-[1320/864] col-1 ml-0 mt-[34px] relative rounded-[8px] row-1 w-[56.7%]" data-name="Typography – Unified Table 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[118.68%] left-[-0.03%] max-w-none top-[0.01%] w-full" src={imgTypographyUnifiedTable3} />
        </div>
      </div>
    </div>
  );
}

function ColorPaletteContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Color Palette Container">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1d20] text-[16px] w-full">Additionally, I explored the color palette and contrast ratios to ensure a cohesive design.</p>
      <ColorPaletteImages />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">Color</p>
          </div>
        </div>
      </div>
      <ColorPaletteContainer />
    </div>
  );
}

function ComponentLibraryContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Component Library Container">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#1a1d20] text-[16px] w-[min-content]">Additionally, I created a components with ensure consistency across all components.</p>
      <div className="h-[742px] relative rounded-[8px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] shrink-0 w-[894px]" data-name="Design System-LAmpu 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDesignSystemLAmpu1} />
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[32px] min-w-full relative shrink-0 text-[#1a1d20] text-[24px] w-[min-content]">Components are designed to be mixed, matched, and rearranged freely. This creates familiar UI patterns for users while keeping the design consistent throughout.</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2b6cb0] text-[11px] whitespace-nowrap">Creating a Components</p>
          </div>
        </div>
      </div>
      <ComponentLibraryContainer />
    </div>
  );
}

function TypographyContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full" data-name="Typography Container">
      <Frame63 />
      <Frame64 />
      <Frame65 />
    </div>
  );
}

function SolutionSection() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[40px] items-start p-[80px] relative shrink-0 w-full" data-name="solution-section">
      <SectionLabel className="relative shrink-0" name="EXPLORING" number="05" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[32px] min-w-full relative shrink-0 text-[#1a1d20] text-[24px] w-[min-content]">Explore design details, ensuring everything feels intentional and ready to ship.</p>
      <TypographyContainer />
    </div>
  );
}

function Frame67() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">First Page: Home Page</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">The homepage was designed as the primary entry point for both new and existing customers, with a focus on clarity, product discoverability, trust, and self-service.</p>
    </div>
  );
}

function ProcessMappingImage() {
  return (
    <div className="bg-[rgba(237,237,237,0.48)] border-[#a5a5a5] border-l border-r border-solid border-t content-stretch flex items-center pt-[14px] px-[14px] relative rounded-tl-[18px] rounded-tr-[18px] shrink-0" data-name="Process Mapping Image">
      <div className="h-[1262px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[898px]" data-name="Home-Lampu 2024 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
          <img alt="" className="absolute h-[151.04%] left-0 max-w-none top-[-0.04%] w-full" src={imgHomeLampu20241} />
        </div>
      </div>
    </div>
  );
}

function ProcessMappingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Process Mapping Container">
      <Frame67 />
      <ProcessMappingImage />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
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
    <div className="bg-black content-stretch flex flex-col items-start pt-[80px] px-[80px] relative shrink-0 w-full" data-name="process-section">
      <Frame66 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] w-full">After a few rounds of exploration, I presented my work to the stakeholders for feedback and discussion, which ultimately led to the approval of my high-fidelity design.</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#f1f3f5] h-[613px] overflow-clip relative shrink-0 w-full" data-name="Frame">
      <div className="absolute h-[337.69px] right-[20.86px] rounded-bl-[6.357px] rounded-br-[6.357px] top-0 w-[474.355px]" data-name="Home-Lampu 2024 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[6.357px] rounded-br-[6.357px]">
          <img alt="" className="absolute h-[298.17%] left-0 max-w-none top-[-198.15%] w-full" src={imgHomeLampu20241} />
        </div>
      </div>
      <div className="absolute h-[669.023px] left-[20px] top-0 w-[474.355px]" data-name="Home-Lampu 2024 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.5%] left-0 max-w-none top-[-0.01%] w-full" src={imgHomeLampu20241} />
        </div>
      </div>
    </div>
  );
}

function HighFidelityDesign() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="High Fidelity Design">
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function SolutionSection1() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full" data-name="solution-section">
      <HighFidelityDesign />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white w-full">The flow was designed to minimize friction across the purchasing journey, enabling users to discover products, complete registration, and proceed smoothly through checkout and payment</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full">Visit Lampu Marketplace</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame72 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full whitespace-pre-wrap">{`Explore product & choose  product`}</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame74 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full">{`Checkout & Payment`}</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame76 />
    </div>
  );
}

function FlowChartContainer() {
  return (
    <div className="bg-[rgba(0,122,255,0.15)] border border-[#007aff] border-solid content-stretch flex gap-[124px] items-center justify-center p-[32px] relative rounded-[24px] shrink-0" data-name="Flow Chart Container">
      <Frame71 />
      <Frame73 />
      <Frame75 />
      <div className="-translate-x-1/2 absolute bg-[#007aff] left-1/2 rounded-[40px] top-[-16.12px]" data-name="Category Badge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Order Processing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessSection3() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[40px] items-center p-[80px] relative shrink-0 w-full" data-name="process-section">
      <Frame70 />
      <FlowChartContainer />
    </div>
  );
}

function Frame77() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#1a1d20] w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">Explore Products</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Find products tailored to user needs with smart category filters, browse, compare, and choose with ease.</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#2b6cb0] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#f8f9fa] text-[18px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Choose product</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Browse and select the perfect digital product to match user needs, from api and software to online tools and platforms.</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame79 />
      <Frame80 />
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
        <img alt="" className="absolute h-[137.82%] left-[-0.04%] max-w-none top-[0.01%] w-full" src={imgScreenViewport} />
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
      <div className="absolute border-[#111214] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray />
      <ScreenViewport />
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[#2b6cb0] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#f8f9fa] text-[18px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Description</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">{`A comprehensive overview of the product's key features, capabilities, and value, everything user need to know at a glance.`}</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame82 />
      <Frame83 />
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

function AppMain1() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[21.75px] relative" data-name="app-main" />;
}

function DashboardAppFrame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain1 />
    </div>
  );
}

function ScreenViewport1() {
  return (
    <div className="h-[601.75px] relative rounded-[19.938px] shrink-0 w-[895.375px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.938px]">
        <img alt="" className="absolute h-[125.76%] left-[-0.03%] max-w-none top-[0.05%] w-full" src={imgScreenViewport1} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame1 />
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
      <div className="absolute border-[#111214] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray1 />
      <ScreenViewport1 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-[#2b6cb0] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#f8f9fa] text-[18px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Documentation</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Explore comprehensive guides, references, and examples to help user integration and build with your API quickly and confidently.</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame85 />
      <Frame86 />
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
        <img alt="" className="absolute h-[192.02%] left-[0.02%] max-w-none top-[0.06%] w-full" src={imgScreenViewport2} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame2 />
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
      <div className="absolute border-[#111214] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray2 />
      <ScreenViewport2 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-[#2b6cb0] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#f8f9fa] text-[18px] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Package</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Browse available packages to compare amount, price, and unit, find the right plan that fits user needs.</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame88 />
      <Frame89 />
    </div>
  );
}

function CameraSensorArray3() {
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

function ScreenViewport3() {
  return (
    <div className="h-[601.75px] relative rounded-[19.938px] shrink-0 w-[895.375px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.938px]">
        <img alt="" className="absolute h-[125.76%] left-0 max-w-none top-[0.06%] w-full" src={imgScreenViewport3} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame3 />
        <div className="absolute border-[2.719px] border-[rgba(0,0,0,0.38)] border-solid h-[601.75px] left-0 rounded-[19.938px] top-0 w-[895.375px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.906px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[19.938px]" />
    </div>
  );
}

function IpadProChassis3() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_7.25px_10.875px_rgba(0,0,0,0.12)] flex flex-col h-[634.375px] items-center justify-center p-[16.313px] relative rounded-[36.25px] shrink-0 w-[928px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.813px] border-solid inset-0 pointer-events-none rounded-[36.25px]" />
      <div className="absolute border-[#111214] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray3 />
      <ScreenViewport3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f1f3f5] content-stretch flex flex-col gap-[24px] items-center p-[24px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Frame78 />
      <IpadProChassis />
      <Frame81 />
      <IpadProChassis1 />
      <Frame84 />
      <IpadProChassis2 />
      <Frame87 />
      <IpadProChassis3 />
    </div>
  );
}

function NavigationContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Navigation Container">
      <Frame77 />
      <Container1 />
    </div>
  );
}

function SolutionSection2() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full" data-name="solution-section">
      <NavigationContainer />
    </div>
  );
}

function Frame90() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">{`Checkout & Payment`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Complete your purchase securely with flexible payment options, order review, and seamless checkout.</p>
    </div>
  );
}

function CameraSensorArray4() {
  return (
    <div className="-translate-x-1/2 absolute h-[3.68px] left-1/2 top-[3.68px] w-[39.25px]" data-name="camera-sensor-array">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.67969" preserveAspectRatio="none" viewBox="0 0 39.25 3.67969" width="39.25">
        <g id="camera-sensor-array">
          <rect fill="#050607" height="3.67969" rx="1.83984" width="39.25" />
          <circle cx="16.8652" cy="1.83984" fill="#141E30" id="camera-lens" r="1.22656" />
          <circle cx="22.6914" cy="1.83984" fill="#0C0D0E" id="face-id-dot" r="0.919922" />
        </g>
      </svg>
    </div>
  );
}

function AppMain4() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[14.719px] relative" data-name="app-main" />;
}

function DashboardAppFrame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain4 />
    </div>
  );
}

function ScreenViewport4() {
  return (
    <div className="h-[407.219px] relative rounded-[13.492px] shrink-0 w-[605.922px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.492px]">
        <img alt="" className="absolute h-[137.82%] left-[-0.04%] max-w-none top-[0.01%] w-full" src={imgScreenViewport4} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame4 />
        <div className="absolute border-[1.84px] border-[rgba(0,0,0,0.38)] border-solid h-[407.219px] left-0 rounded-[13.492px] top-0 w-[605.922px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.613px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[13.492px]" />
    </div>
  );
}

function IpadProChassis4() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#1d2023] content-stretch drop-shadow-[0px_4.906px_7.359px_rgba(0,0,0,0.12)] flex flex-col h-[429.297px] items-center justify-center left-[-340px] p-[11.039px] rounded-[24.531px] top-[calc(50%+0.15px)] w-[628px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.227px] border-solid inset-0 pointer-events-none rounded-[24.531px]" />
      <div className="absolute border-[#111214] border-[2.453px] border-solid h-[429.297px] left-0 rounded-[24.531px] top-0 w-[628px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray4 />
      <ScreenViewport4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f1f3f5] flex-[1_0_0] h-[565px] min-w-px overflow-clip relative rounded-[8px]" data-name="Container">
      <IpadProChassis4 />
    </div>
  );
}

function CameraSensorArray5() {
  return (
    <div className="-translate-x-1/2 absolute h-[3.68px] left-1/2 top-[3.68px] w-[39.25px]" data-name="camera-sensor-array">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.67969" preserveAspectRatio="none" viewBox="0 0 39.25 3.67969" width="39.25">
        <g id="camera-sensor-array">
          <rect fill="#050607" height="3.67969" rx="1.83984" width="39.25" />
          <circle cx="16.8652" cy="1.83984" fill="#141E30" id="camera-lens" r="1.22656" />
          <circle cx="22.6914" cy="1.83984" fill="#0C0D0E" id="face-id-dot" r="0.919922" />
        </g>
      </svg>
    </div>
  );
}

function AppMain5() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[14.719px] relative" data-name="app-main" />;
}

function DashboardAppFrame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain5 />
    </div>
  );
}

function ScreenViewport5() {
  return (
    <div className="h-[407.219px] relative rounded-[13.492px] shrink-0 w-[605.922px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.492px]">
        <img alt="" className="absolute h-[137.82%] left-[-0.04%] max-w-none top-[0.01%] w-full" src={imgScreenViewport5} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame5 />
        <div className="absolute border-[1.84px] border-[rgba(0,0,0,0.38)] border-solid h-[407.219px] left-0 rounded-[13.492px] top-0 w-[605.922px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.613px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[13.492px]" />
    </div>
  );
}

function IpadProChassis5() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#1d2023] content-stretch drop-shadow-[0px_4.906px_7.359px_rgba(0,0,0,0.12)] flex flex-col h-[429.297px] items-center justify-center left-[-340px] p-[11.039px] rounded-[24.531px] top-[calc(50%+0.15px)] w-[628px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.227px] border-solid inset-0 pointer-events-none rounded-[24.531px]" />
      <div className="absolute border-[#111214] border-[2.453px] border-solid h-[429.297px] left-0 rounded-[24.531px] top-0 w-[628px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray5 />
      <ScreenViewport5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f1f3f5] flex-[1_0_0] h-[565px] min-w-px overflow-clip relative rounded-[8px]" data-name="Container">
      <IpadProChassis5 />
    </div>
  );
}

function CameraSensorArray6() {
  return (
    <div className="-translate-x-1/2 absolute h-[3.68px] left-1/2 top-[3.68px] w-[39.25px]" data-name="camera-sensor-array">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.67969" preserveAspectRatio="none" viewBox="0 0 39.25 3.67969" width="39.25">
        <g id="camera-sensor-array">
          <rect fill="#050607" height="3.67969" rx="1.83984" width="39.25" />
          <circle cx="16.8652" cy="1.83984" fill="#141E30" id="camera-lens" r="1.22656" />
          <circle cx="22.6914" cy="1.83984" fill="#0C0D0E" id="face-id-dot" r="0.919922" />
        </g>
      </svg>
    </div>
  );
}

function AppMain6() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[14.719px] relative" data-name="app-main" />;
}

function DashboardAppFrame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain6 />
    </div>
  );
}

function ScreenViewport6() {
  return (
    <div className="h-[407.219px] relative rounded-[13.492px] shrink-0 w-[605.922px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.492px]">
        <img alt="" className="absolute h-[137.82%] left-[-0.04%] max-w-none top-[0.01%] w-full" src={imgScreenViewport6} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame6 />
        <div className="absolute border-[1.84px] border-[rgba(0,0,0,0.38)] border-solid h-[407.219px] left-0 rounded-[13.492px] top-0 w-[605.922px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.613px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[13.492px]" />
    </div>
  );
}

function IpadProChassis6() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#1d2023] content-stretch drop-shadow-[0px_4.906px_7.359px_rgba(0,0,0,0.12)] flex flex-col h-[429.297px] items-center justify-center left-[-340px] p-[11.039px] rounded-[24.531px] top-[calc(50%+0.15px)] w-[628px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.227px] border-solid inset-0 pointer-events-none rounded-[24.531px]" />
      <div className="absolute border-[#111214] border-[2.453px] border-solid h-[429.297px] left-0 rounded-[24.531px] top-0 w-[628px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray6 />
      <ScreenViewport6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f1f3f5] flex-[1_0_0] h-[565px] min-w-px overflow-clip relative rounded-[8px]" data-name="Container">
      <IpadProChassis6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function StepByStepIndicator() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Step by Step Indicator">
      <Frame90 />
      <Container2 />
      <div className="relative rounded-[38px] shrink-0 w-full" data-name="videp processing order - lampu 1">
        <div className="absolute inset-0 overflow-hidden rounded-[38px]" />
      </div>
    </div>
  );
}

function SolutionSection3() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full" data-name="solution-section">
      <StepByStepIndicator />
    </div>
  );
}

function Frame91() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] whitespace-nowrap">Manage Orders with Full Visibility</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#6c757d] text-[16px] w-[min-content]">The My Order feature gives users a centralized hub to track, manage, and act on every order, from pending payments to completed transactions.</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">All Orders</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">A consolidated view of every order placed. Users can quickly scan order IDs, packages, amounts, payment totals, and current status, making it easy to find and manage any transaction at a glance.</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Frame93 />
    </div>
  );
}

function CameraSensorArray7() {
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

function AppMain7() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[21.75px] relative" data-name="app-main" />;
}

function DashboardAppFrame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain7 />
    </div>
  );
}

function ScreenViewport7() {
  return (
    <div className="h-[601.75px] relative rounded-[19.938px] shrink-0 w-[895.375px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.938px]">
        <img alt="" className="absolute h-[156.44%] left-[-0.07%] max-w-none top-[0.01%] w-full" src={imgScreenViewport7} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame7 />
        <div className="absolute border-[2.719px] border-[rgba(0,0,0,0.38)] border-solid h-[601.75px] left-0 rounded-[19.938px] top-0 w-[895.375px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.906px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[19.938px]" />
    </div>
  );
}

function IpadProChassis7() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_7.25px_10.875px_rgba(0,0,0,0.12)] flex flex-col h-[634.375px] items-center justify-center p-[16.313px] relative rounded-[36.25px] shrink-0 w-[928px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.813px] border-solid inset-0 pointer-events-none rounded-[36.25px]" />
      <div className="absolute border-[#111214] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray7 />
      <ScreenViewport7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f1f3f5] content-stretch flex flex-col gap-[24px] items-center p-[24px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Frame92 />
      <IpadProChassis7 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Order Status States</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Each order is assigned a clear status, Waiting for Payment or Paid, allowing users to instantly understand what action is needed or what has been completed.</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Frame96 />
    </div>
  );
}

function Frame100() {
  return <div className="bg-[#fc0] relative rounded-[4px] shrink-0 size-[8px]" data-name="Frame" />;
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <Frame100 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#c05621] text-[12px] whitespace-nowrap">Waiting for Payment</p>
    </div>
  );
}

function CameraSensorArray8() {
  return (
    <div className="-translate-x-1/2 absolute h-[2.883px] left-1/2 top-[2.88px] w-[30.75px]" data-name="camera-sensor-array">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.88281" preserveAspectRatio="none" viewBox="0 0 30.75 2.88281" width="30.75">
        <g id="camera-sensor-array">
          <rect fill="#050607" height="2.88281" rx="1.44141" width="30.75" />
          <circle cx="13.2129" cy="1.44141" fill="#141E30" id="camera-lens" r="0.960938" />
          <circle cx="17.7773" cy="1.44141" fill="#0C0D0E" id="face-id-dot" r="0.720703" />
        </g>
      </svg>
    </div>
  );
}

function AppMain8() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[11.531px] relative" data-name="app-main" />;
}

function DashboardAppFrame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain8 />
    </div>
  );
}

function ScreenViewport8() {
  return (
    <div className="h-[319.031px] relative rounded-[10.57px] shrink-0 w-[474.703px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10.57px]">
        <img alt="" className="absolute h-[156.44%] left-[-0.07%] max-w-none top-[0.01%] w-full" src={imgScreenViewport8} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame8 />
        <div className="absolute border-[1.441px] border-[rgba(0,0,0,0.38)] border-solid h-[319.031px] left-0 rounded-[10.57px] top-0 w-[474.703px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.48px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[10.57px]" />
    </div>
  );
}

function IpadProChassis8() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_3.844px_5.766px_rgba(0,0,0,0.12)] flex flex-col h-[336.328px] items-center justify-center p-[8.648px] relative rounded-[19.219px] shrink-0 w-[492px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[0.961px] border-solid inset-0 pointer-events-none rounded-[19.219px]" />
      <div className="absolute border-[#111214] border-[1.922px] border-solid h-[336.328px] left-0 rounded-[19.219px] top-0 w-[492px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray8 />
      <ScreenViewport8 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-name="Frame">
      <Frame99 />
      <IpadProChassis8 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Orders awaiting payment show a clear deadline and payment method prompt, guiding users to complete the transaction before it expires.</p>
    </div>
  );
}

function Frame103() {
  return <div className="bg-[#2f855a] relative rounded-[4px] shrink-0 size-[8px]" data-name="Frame" />;
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <Frame103 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#2f855a] text-[12px] whitespace-nowrap">Paid</p>
    </div>
  );
}

function CameraSensorArray9() {
  return (
    <div className="-translate-x-1/2 absolute h-[2.883px] left-1/2 top-[2.88px] w-[30.75px]" data-name="camera-sensor-array">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.88281" preserveAspectRatio="none" viewBox="0 0 30.75 2.88281" width="30.75">
        <g id="camera-sensor-array">
          <rect fill="#050607" height="2.88281" rx="1.44141" width="30.75" />
          <circle cx="13.2129" cy="1.44141" fill="#141E30" id="camera-lens" r="0.960938" />
          <circle cx="17.7773" cy="1.44141" fill="#0C0D0E" id="face-id-dot" r="0.720703" />
        </g>
      </svg>
    </div>
  );
}

function AppMain9() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[11.531px] relative" data-name="app-main" />;
}

function DashboardAppFrame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain9 />
    </div>
  );
}

function ScreenViewport9() {
  return (
    <div className="h-[319.031px] relative rounded-[10.57px] shrink-0 w-[474.703px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10.57px]">
        <img alt="" className="absolute h-[156.44%] left-[-0.07%] max-w-none top-[0.01%] w-full" src={imgScreenViewport9} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame9 />
        <div className="absolute border-[1.441px] border-[rgba(0,0,0,0.38)] border-solid h-[319.031px] left-0 rounded-[10.57px] top-0 w-[474.703px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.48px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[10.57px]" />
    </div>
  );
}

function IpadProChassis9() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_3.844px_5.766px_rgba(0,0,0,0.12)] flex flex-col h-[336.328px] items-center justify-center p-[8.648px] relative rounded-[19.219px] shrink-0 w-[492px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[0.961px] border-solid inset-0 pointer-events-none rounded-[19.219px]" />
      <div className="absolute border-[#111214] border-[1.922px] border-solid h-[336.328px] left-0 rounded-[19.219px] top-0 w-[492px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray9 />
      <ScreenViewport9 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-name="Frame">
      <Frame102 />
      <IpadProChassis9 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Confirmed paid orders display a success status with the option to contact the seller or review order details, building trust and reducing support needs.</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame98 />
      <Frame101 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame95 />
      <Frame97 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Deep Dive Views</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Beyond status, users can access rich detail views, a full order breakdown and a step-by-step payment guide, reducing friction and eliminating the need for support escalation.</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Frame106 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Detail Order</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[20px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame109 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">{`A full summary of the order: customer info, product name, package, quantity, unit price, and total, giving users complete transparency over what they've purchased.`}</p>
      <div className="aspect-[400/300] relative rounded-[8px] shrink-0 w-full" data-name="My Order - Detail Order">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[140.19%] left-[0.07%] max-w-none top-[0.15%] w-full" src={imgMyOrderDetailOrder} />
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">How to Pay</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[20px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame111 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">Users are presented with a virtual account number and a list of supported banks, ATM, Mobile Banking, Internet Banking, so they can complete payment through their preferred channel without contacting support.</p>
      <div className="aspect-[400/300] relative rounded-[8px] shrink-0 w-full" data-name="My Order - How to Pay">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[140.19%] left-[-0.08%] max-w-none top-[-0.04%] w-full" src={imgMyOrderHowToPay} />
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame108 />
      <Frame110 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame105 />
      <Frame107 />
    </div>
  );
}

function OrdersSection() {
  return (
    <div className="content-stretch flex flex-col gap-[74px] items-start relative shrink-0 w-full" data-name="Orders Section">
      <Container6 />
      <Frame94 />
      <Frame104 />
    </div>
  );
}

function MyOrderSection() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col gap-[24px] items-start p-[80px] relative shrink-0 w-full" data-name="my-order-section">
      <Frame91 />
      <OrdersSection />
    </div>
  );
}

function MyProductHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="My Product Header">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">My Product</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">In Lampu, users can manage digital products and APIs in one place, from offerings to access, with clear and detailed information.</p>
    </div>
  );
}

function MyProductSection() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[24px] items-start p-[80px] relative shrink-0 w-full" data-name="my-product-section">
      <MyProductHeader />
      <div className="relative rounded-[38px] shrink-0 w-full" data-name="videp my product - lampu 1">
        <div className="absolute inset-0 overflow-hidden rounded-[38px]" />
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1d20] text-[24px] w-full">Refining product discovery in Lampu Marketplace</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] w-full">{`Based on insights, I’m refining product discovery in this iteration to help customers find the right products faster. I'm improving the experience so buyers can browse, compare, and purchase with more confidence.`}</p>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Icon Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Explore Product</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">{`I simplified the product card by replacing the "Add to Cart" button with a cart icon to reduce visual weight and keep "See Detail" as the primary focus. I also shortened "Free Trial" and "Promo" labels to make benefits easier to scan.`}</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Iteration 1" />
      <IconContainer />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame115 />
    </div>
  );
}

function CameraSensorArray10() {
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

function AppMain10() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[21.75px] relative" data-name="app-main" />;
}

function DashboardAppFrame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain10 />
    </div>
  );
}

function ScreenViewport10() {
  return (
    <div className="h-[601.75px] relative rounded-[19.938px] shrink-0 w-[895.375px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.938px]">
        <img alt="" className="absolute h-[137.82%] left-[-0.04%] max-w-none top-[0.01%] w-full" src={imgScreenViewport10} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame10 />
        <div className="absolute border-[2.719px] border-[rgba(0,0,0,0.38)] border-solid h-[601.75px] left-0 rounded-[19.938px] top-0 w-[895.375px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.906px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[19.938px]" />
    </div>
  );
}

function IpadProChassis10() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_7.25px_10.875px_rgba(0,0,0,0.12)] flex flex-col h-[634.375px] items-center justify-center p-[16.313px] relative rounded-[36.25px] shrink-0 w-[928px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.813px] border-solid inset-0 pointer-events-none rounded-[36.25px]" />
      <div className="absolute border-[#111214] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray10 />
      <ScreenViewport10 />
    </div>
  );
}

function IPadProMockup() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[928px]" data-name="iPad Pro Mockup">
      <IpadProChassis10 />
    </div>
  );
}

function AppMain11() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[12.632px] relative" data-name="app-main" />;
}

function DashboardAppFrame11() {
  return (
    <div className="absolute content-stretch flex h-[174.737px] items-start left-0 top-[0.38px] w-[520px]" data-name="dashboard-app-frame">
      <AppMain11 />
    </div>
  );
}

function ScreenViewport11() {
  return (
    <div className="col-1 h-[349.848px] ml-0 mt-[504.4px] overflow-clip relative rounded-[8px] row-1 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-[520px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[137.82%] left-[-0.04%] max-w-none top-[0.01%] w-full" src={imgScreenViewport} />
      </div>
      <DashboardAppFrame11 />
      <div className="absolute h-[174.737px] left-0 rounded-[11.579px] top-[175.11px] w-[520px]" data-name="screen-ambient-depth" />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Image Container">
      <IPadProMockup />
      <ScreenViewport11 />
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

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame114 />
      <ImageContainer />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Icon Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Product Details</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">The product detail page offers a clearer description, promotional labels, and breadcrumbs for navigation. The Add to Cart button is now an icon, simplifying the interface and enhancing the purchase journey.</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Iteration 2" />
      <IconContainer1 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame118 />
    </div>
  );
}

function CameraSensorArray11() {
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

function AppMain12() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[21.75px] relative" data-name="app-main" />;
}

function DashboardAppFrame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain12 />
    </div>
  );
}

function ScreenViewport12() {
  return (
    <div className="h-[601.75px] relative rounded-[19.938px] shrink-0 w-[895.375px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.938px]">
        <img alt="" className="absolute h-[133.81%] left-0 max-w-none top-[0.15%] w-full" src={imgScreenViewport11} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame12 />
        <div className="absolute border-[2.719px] border-[rgba(0,0,0,0.38)] border-solid h-[601.75px] left-0 rounded-[19.938px] top-0 w-[895.375px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.906px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[19.938px]" />
    </div>
  );
}

function IpadProChassis11() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_7.25px_10.875px_rgba(0,0,0,0.12)] flex flex-col h-[634.375px] items-center justify-center p-[16.313px] relative rounded-[36.25px] shrink-0 w-[928px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.813px] border-solid inset-0 pointer-events-none rounded-[36.25px]" />
      <div className="absolute border-[#111214] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray11 />
      <ScreenViewport12 />
    </div>
  );
}

function IPadProMockup1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[928px]" data-name="iPad Pro Mockup">
      <IpadProChassis11 />
    </div>
  );
}

function AppMain13() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[12.632px] relative" data-name="app-main" />;
}

function DashboardAppFrame13() {
  return (
    <div className="absolute content-stretch flex h-[174.737px] items-start left-0 top-[0.38px] w-[520px]" data-name="dashboard-app-frame">
      <AppMain13 />
    </div>
  );
}

function ScreenViewport13() {
  return (
    <div className="col-1 h-[349.848px] ml-0 mt-[504.4px] overflow-clip relative rounded-[8px] row-1 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-[520px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[125.63%] left-0 max-w-none top-[0.23%] w-full" src={imgScreenViewport1} />
      </div>
      <DashboardAppFrame13 />
      <div className="absolute h-[174.737px] left-0 rounded-[11.579px] top-[175.11px] w-[520px]" data-name="screen-ambient-depth" />
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Image Container">
      <IPadProMockup1 />
      <ScreenViewport13 />
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Image Container">
      <ImageContainer3 />
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

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame117 />
      <ImageContainer2 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Icon Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] whitespace-nowrap">Package</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6c757d] text-[14px] w-[min-content]">I replaced the package table with cards to make comparison easier. When a user selects a package, the selected state is clearer, so they can quickly understand their choice. This change reduces confusion and speeds up the checkout process.</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Iteration 3" />
      <IconContainer2 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame121 />
    </div>
  );
}

function CameraSensorArray12() {
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

function AppMain14() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[21.75px] relative" data-name="app-main" />;
}

function DashboardAppFrame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative" data-name="dashboard-app-frame">
      <AppMain14 />
    </div>
  );
}

function ScreenViewport14() {
  return (
    <div className="h-[601.75px] relative rounded-[19.938px] shrink-0 w-[895.375px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19.938px]">
        <img alt="" className="absolute h-[133.81%] left-0 max-w-none top-[0.15%] w-full" src={imgScreenViewport12} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame14 />
        <div className="absolute border-[2.719px] border-[rgba(0,0,0,0.38)] border-solid h-[601.75px] left-0 rounded-[19.938px] top-0 w-[895.375px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.906px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[19.938px]" />
    </div>
  );
}

function IpadProChassis12() {
  return (
    <div className="bg-[#1d2023] content-stretch drop-shadow-[0px_7.25px_10.875px_rgba(0,0,0,0.12)] flex flex-col h-[634.375px] items-center justify-center p-[16.313px] relative rounded-[36.25px] shrink-0 w-[928px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.813px] border-solid inset-0 pointer-events-none rounded-[36.25px]" />
      <div className="absolute border-[#111214] border-[3.625px] border-solid h-[634.375px] left-0 rounded-[36.25px] top-0 w-[928px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray12 />
      <ScreenViewport14 />
    </div>
  );
}

function IPadProMockup2() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[928px]" data-name="iPad Pro Mockup">
      <IpadProChassis12 />
    </div>
  );
}

function AppMain15() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[12.632px] relative" data-name="app-main" />;
}

function DashboardAppFrame15() {
  return (
    <div className="absolute content-stretch flex h-[174.737px] items-start left-0 top-[0.38px] w-[520px]" data-name="dashboard-app-frame">
      <AppMain15 />
    </div>
  );
}

function ScreenViewport15() {
  return (
    <div className="col-1 h-[349.848px] ml-0 mt-[504.4px] overflow-clip relative rounded-[8px] row-1 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-[520px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[125.63%] left-0 max-w-none top-[0.23%] w-full" src={imgScreenViewport3} />
      </div>
      <DashboardAppFrame15 />
      <div className="absolute h-[174.737px] left-0 rounded-[11.579px] top-[175.11px] w-[520px]" data-name="screen-ambient-depth" />
    </div>
  );
}

function ImageContainer5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Image Container">
      <IPadProMockup2 />
      <ScreenViewport15 />
    </div>
  );
}

function ImageContainer4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Image Container">
      <ImageContainer5 />
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

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame120 />
      <ImageContainer4 />
    </div>
  );
}

function IterationSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start p-[80px] relative shrink-0 w-full" data-name="iteration-section">
      <SectionLabel className="relative shrink-0" name="ITERATION" number="06" />
      <Frame112 />
      <Frame113 />
      <Frame116 />
      <Frame119 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Section Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Checkout</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">The redesigned checkout provides clearer package options, quantities, service IDs for seller–buyer integration, and product access details, helping users review everything they need before completing the order.</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Iteration 4" />
      <SectionContainer />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame124 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[100px] shrink-0" label="Before" type="Mono" />
      <div className="aspect-[502/307] relative rounded-[8px] shrink-0 w-full" data-name="checkout-screenshot-1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[137.17%] left-[0.1%] max-w-none top-[-0.23%] w-full" src={imgScreenViewport4} />
        </div>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="Frame">
      <div className="bg-[#f0fff4] relative rounded-[100px] shrink-0" data-name="Category Badge">
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2f855a] text-[14px] whitespace-nowrap">After</p>
        </div>
      </div>
      <div className="aspect-[502/307] relative rounded-[8px] shrink-0 w-full" data-name="checkout-screenshot-1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[137.17%] left-[0.1%] max-w-none top-[-0.23%] w-full" src={imgCheckoutScreenshot1} />
        </div>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame126 />
      <Frame127 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame123 />
      <Frame125 />
    </div>
  );
}

function SectionContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Section Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Detail Order</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">Previously, buyers could edit their information on Order Details. After the iteration, registered buyer data is read-only, while Referral ID remains editable for sales attribution, reducing accidental changes and data inconsistencies while keeping referrals accurate.</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Iteration 5" />
      <SectionContainer1 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame130 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[100px] shrink-0" label="Before" type="Mono" />
      <div className="aspect-[502/307] relative rounded-[8px] shrink-0 w-full" data-name="checkout-screenshot-1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[137.17%] left-[0.1%] max-w-none top-[-0.23%] w-full" src={imgCheckoutScreenshot2} />
        </div>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="Frame">
      <div className="bg-[#f0fff4] relative rounded-[100px] shrink-0" data-name="Category Badge">
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2f855a] text-[14px] whitespace-nowrap">After</p>
        </div>
      </div>
      <div className="aspect-[502/307] relative rounded-[8px] shrink-0 w-full" data-name="checkout-screenshot-1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[137.17%] left-[0.1%] max-w-none top-[-0.23%] w-full" src={imgCheckoutScreenshot3} />
        </div>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame132 />
      <Frame133 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame129 />
      <Frame131 />
    </div>
  );
}

function SectionContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Section Container">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Payment</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">Buyers can apply vouchers or promos, review a detailed product summary with the full price breakdown, and expand the payment section to compare all methods. This improves price transparency, reduces uncertainty, and helps users choose the best payment option faster.</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#ebf8ff] relative rounded-[12px] shrink-0" label="Iteration 6" />
      <SectionContainer2 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame136 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="Frame">
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[100px] shrink-0" label="Before" type="Mono" />
      <div className="aspect-[502/307] relative rounded-[8px] shrink-0 w-full" data-name="checkout-screenshot-1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[137.17%] left-[0.1%] max-w-none top-[-0.23%] w-full" src={imgScreenViewport6} />
        </div>
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px relative" data-name="Frame">
      <div className="bg-[#f0fff4] relative rounded-[100px] shrink-0" data-name="Category Badge">
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2f855a] text-[14px] whitespace-nowrap">After</p>
        </div>
      </div>
      <div className="aspect-[502/307] relative rounded-[8px] shrink-0 w-full" data-name="checkout-screenshot-1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[137.17%] left-[0.1%] max-w-none top-[-0.23%] w-full" src={imgCheckoutScreenshot4} />
        </div>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame138 />
      <Frame139 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame135 />
      <Frame137 />
    </div>
  );
}

function MyProductSection1() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[24px] items-start p-[80px] relative shrink-0 w-full" data-name="my-product-section">
      <Frame122 />
      <Frame128 />
      <Frame134 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ebf8ff] relative rounded-[100px] shrink-0" data-name="Category Badge">
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#2b6cb0] text-[18px] whitespace-nowrap">Conclusion</p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#1a1d20] text-[24px] w-[min-content]">
        <span className="leading-[32px]">{`I learned that solving a marketplace problem like Lampu starts with `}</span>
        <span className="leading-[32px] text-[#2b6cb0]">understanding buyers, sellers, sales teams, and the business side</span>
        <span className="leading-[32px]">{` at the same time. By considering many intentions early, I could connect them into a final solution.`}</span>
      </p>
      <div className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#6c757d] text-[16px] w-[min-content]">
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]">Across six iterations, the biggest insight was that simplicity is not just about removing clutter-it is about making every step feel intentional. Buyers need to compare packages quickly, sellers need to manage inventory without friction, and sales teams need to close deals with confidence.</span>
          </li>
        </ul>
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">​</p>
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[24px]">The biggest lesson here is that a B2B marketplace is a service experience. What looks simple on screen often relies on hard work and effort beyond it. I learned how to rethink scalability, go-to-market strategy, and self-service flows that actually help users make the most of the platform during their journey of discovery.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ConclusionSection() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full" data-name="conclusion-section">
      <Frame140 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <HeroSection />
      <OverviewSection />
      <ProblemSection />
      <GoalsSection />
      <ProcessSection />
      <ProcessSection1 />
      <SolutionSection />
      <ProcessSection2 />
      <SolutionSection1 />
      <ProcessSection3 />
      <SolutionSection2 />
      <SolutionSection3 />
      <MyOrderSection />
      <MyProductSection />
      <IterationSection />
      <MyProductSection1 />
      <ConclusionSection />
    </div>
  );
}

function Frame141() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6c757d] text-[11px]">Up Next</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px]">Octobits</p>
    </div>
  );
}

function NavigationFooter() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[80px] py-[40px] relative shrink-0 w-full" data-name="navigation-footer">
      <div aria-hidden className="absolute border-[#e9edf0] border-solid border-t inset-0 pointer-events-none" />
      <Frame141 />
      <Button className="bg-[#2b6cb0] relative rounded-[10px] shrink-0" label="View Project" showLeftIcon={false} />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="main-container">
      <TopHeaderBar />
      <Frame142 />
      <NavigationFooter />
    </div>
  );
}

export default function CaseStudyLampu() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-start relative size-full" data-name="case-study-Lampu">
      <Sidebar />
      <MainContainer />
    </div>
  );
}