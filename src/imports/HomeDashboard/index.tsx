import svgPaths from "./svg-x554z7zf9f";
import imgBrilliantFacetedCrystalGemstone1 from "./323978cca3f94f43fbb268bf32ea431cdfcaf04c.webp";
import imgSection from "./5531a77bb9646ddbb7c2ae79e4c20d68dbb8117c.webp";
import imgSection1 from "./652471cdb613e792a946a14fe6559a7335520d82.webp";
import imgStarlinkLogoSvg2 from "./f582b6436ba4c4a20d040077c902c5f79822605b.png";
import imgIndosatOoredooHutchisonLogo5B039B2209Seeklogo1 from "./de7eb526b809a91565522e02f038da4d5aca714b.png";
import imgS5GcDe4KDf5Uhr3CH7Bx1 from "./657ef5609e45c076ed784188359fde8fcbec9a9d.png";
import imgCardImage from "./bda0b4c9bfdc92c3c7306106cc49fa74bcee6aa9.webp";
import imgBannerImage from "./d98a3f7c2a236e52d6bb758e01dc687a96b0be63.png";
import imgBannerImage1 from "./31aeb1a68aa9cbd26a806a6e21d5dc2ddd3f685c.png";
import imgSpaceXLogoBlackSvg12 from "./1ec7963386467396eebfa5f30781a06129fbaec6.png";
import { imgContents } from "./svg-pbdn2";
type CategoryBadgeProps = {
  className?: string;
  label?: string;
  type?: "Default";
};

function CategoryBadge({ className, label = "Label", type = "Default" }: CategoryBadgeProps) {
  return (
    <div className={className || "bg-[#f1f3f5] relative rounded-[12px]"}>
      <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1d20] text-[11px] whitespace-nowrap">{label}</p>
      </div>
    </div>
  );
}
type StatusBadgeProps = {
  className?: string;
  text?: string;
};

function StatusBadge({ className, text = "Open for new opportunities" }: StatusBadgeProps) {
  return (
    <div className={className || "bg-[#f0fff4] relative rounded-[24px]"} data-name="Status Badge">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative size-full">
          <div className="relative shrink-0 size-[8px]" data-name="dot">
            <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
              <circle cx="4" cy="4" fill="#2F855A" id="dot" r="4" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#2f855a] text-[12px] whitespace-nowrap">{text}</p>
        </div>
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
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
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
      <div className="bg-[#ebf8ff] relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[16.67%_16.54%_16.6%_16.79%]" data-name="Path">
                <div className="absolute inset-[-7.02%_-7.03%]">
                  <svg className="block size-full" fill="none" height="12.1765" preserveAspectRatio="none" viewBox="0 0 12.1667 12.1765" width="12.1667">
                    <path d={svgPaths.p2bf85400} id="Path" stroke="#2B6CB0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[62.5%_33.33%_33.33%_33.33%]" data-name="Path">
                <div className="absolute inset-[-112.5%_-14.06%_-112.49%_-14.06%]">
                  <svg className="block size-full" fill="none" height="2.16661" preserveAspectRatio="none" viewBox="0 0 6.83356 2.16661" width="6.83356">
                    <path d={svgPaths.p31f84580} id="Path" stroke="#2B6CB0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#2b6cb0] text-[14px] whitespace-nowrap">Home</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="icon">
              <div className="absolute inset-[69.18%_45.83%_26.65%_45.83%]" data-name="Path">
                <div className="absolute inset-[-72.96%_-56.26%_-72.94%_-56.26%]">
                  <svg className="block size-full" fill="none" height="1.63933" preserveAspectRatio="none" viewBox="0 0 2.83371 1.63933" width="2.83371">
                    <path d={svgPaths.p3a343280} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_16.66%]" data-name="Path">
                <div className="absolute inset-[-6.25%_-7.03%]">
                  <svg className="block size-full" fill="none" height="13.5007" preserveAspectRatio="none" viewBox="0 0 12.1691 13.5007" width="12.1691">
                    <path clipRule="evenodd" d={svgPaths.p9d70480} fillRule="evenodd" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]" data-name="Path">
                <div className="absolute inset-[-56.25%]">
                  <svg className="block size-full" fill="none" height="2.83333" preserveAspectRatio="none" viewBox="0 0 2.83333 2.83333" width="2.83333">
                    <path d="M0.75 0.75L2.08333 2.08333" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]" data-name="Path">
                <div className="absolute inset-[-56.25%]">
                  <svg className="block size-full" fill="none" height="2.83333" preserveAspectRatio="none" viewBox="0 0 2.83333 2.83333" width="2.83333">
                    <path d="M2.08333 0.75L0.75 2.08333" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] whitespace-nowrap">About</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-[54.15%] left-1/4 right-1/4 top-[12.52%]" data-name="Path">
                <div className="absolute inset-[-14.07%_-9.37%_-14.07%_-9.38%]">
                  <svg className="block size-full" fill="none" height="6.83232" preserveAspectRatio="none" viewBox="0 0 9.50067 6.83232" width="9.50067">
                    <path d={svgPaths.p81c8e00} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_26.43%_8.33%_26.43%]" data-name="Path">
                <div className="absolute inset-[-10.23%_-9.94%]">
                  <svg className="block size-full" fill="none" height="8.83333" preserveAspectRatio="none" viewBox="0 0 9.04333 8.83333" width="9.04333">
                    <path clipRule="evenodd" d={svgPaths.p34d9f500} fillRule="evenodd" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] whitespace-nowrap">Creation</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[12.5%_20.83%_66.67%_58.33%]" data-name="Path">
                <div className="absolute inset-[-22.5%]">
                  <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
                    <path d={svgPaths.p20c44380} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_20.83%]" data-name="Path">
                <div className="absolute inset-[-6.25%_-8.04%]">
                  <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 10.8333 13.5" width="10.8333">
                    <path clipRule="evenodd" d={svgPaths.p32ea2180} fillRule="evenodd" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[35.42%_58.33%_60.42%_37.5%]" data-name="Path">
                <div className="absolute inset-[-62.5%_-112.5%]">
                  <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 2.16667 1.5" width="2.16667">
                    <path d="M0.75 0.75H1.41667" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[52.08%_37.5%_43.75%_37.5%]" data-name="Path">
                <div className="absolute inset-[-62.5%_-18.75%]">
                  <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 5.5 1.5" width="5.5">
                    <path d="M0.75 0.75H4.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[68.75%_37.5%_27.08%_37.5%]" data-name="Path">
                <div className="absolute inset-[-62.5%_-18.75%]">
                  <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 5.5 1.5" width="5.5">
                    <path d="M0.75 0.75H4.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] whitespace-nowrap">Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[20.83%_12.5%] rounded-[2px]" data-name="Rectangle">
                <div aria-hidden className="absolute border-[#1a1d20] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[2.75px]" />
              </div>
              <div className="absolute inset-[29.17%_12.5%_45.83%_12.5%]" data-name="Path">
                <div className="absolute inset-[-18.75%_-6.25%]">
                  <svg className="block size-full" fill="none" height="5.50008" preserveAspectRatio="none" viewBox="0 0 13.5002 5.50008" width="13.5002">
                    <path d={svgPaths.p22687c00} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] whitespace-nowrap">Email</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav Link">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[16.67%] rounded-[2px]" data-name="Rectangle">
                <div aria-hidden className="absolute border-[#1a1d20] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[2.75px]" />
              </div>
              <div className="absolute inset-[45.83%_64.58%_33.33%_31.25%]" data-name="Path">
                <div className="absolute inset-[-22.5%_-62.5%]">
                  <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 1.5 4.83333" width="1.5">
                    <path d="M0.75 0.75V4.08333" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[31.27%_64.58%_64.56%_31.25%]" data-name="Path">
                <div className="absolute inset-[-63%_-62.5%]">
                  <svg className="block size-full" fill="none" height="1.50667" preserveAspectRatio="none" viewBox="0 0 1.5 1.50667" width="1.5">
                    <path d="M0.75 0.75V0.756667" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_47.92%_33.33%_47.92%]" data-name="Path">
                <div className="absolute inset-[-22.5%_-62.5%]">
                  <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 1.5 4.83333" width="1.5">
                    <path d="M0.75 4.08333V0.75" id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[33.33%] left-1/2 right-[33.33%] top-[45.83%]" data-name="Path">
                <div className="absolute inset-[-22.5%_-28.13%_-22.5%_-28.12%]">
                  <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.16667 4.83333" width="4.16667">
                    <path d={svgPaths.p3de31380} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1d20] text-[14px] whitespace-nowrap">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Fragment_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6c757d] text-[11px] whitespace-nowrap">Connect</p>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6c757d] text-[11px] whitespace-nowrap">© 2025 Rizky R. All rights reserved.</p>
    </div>
  );
}

export function Sidebar({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white content-stretch flex flex-col items-start justify-between px-[24px] py-[32px] relative self-stretch shrink-0 w-[260px] ${className}`} data-name="sidebar">
      <div aria-hidden className="absolute border-[#e9edf0] border-r border-solid inset-0 pointer-events-none" />
      <Frame />
      <Frame4 />
    </div>
  );
}

export function TopHeaderBar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[80px] py-[24px] relative shrink-0 w-full" data-name="top-header-bar">
      <div aria-hidden className="absolute border-[#e9edf0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#6c757d] text-[14px] w-[600px]">Crafting intuitive digital experiences through research-driven design.</p>
      <StatusBadge className="bg-[#f0fff4] relative rounded-[24px] shrink-0" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[#1a1d20] text-[32px]">Case Studies</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px]">See how deliver results that matter.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] min-w-px overflow-hidden relative text-[#1a1d20] text-[18px] text-ellipsis">Lampu V2: Revamp Landing Page</p>
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px]">2025</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap">
      <Frame12 />
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[16px] overflow-hidden relative shrink-0 text-[#6c757d] text-[12px] text-ellipsis w-full">Redesigning the Lampu landing experience with a modern, polished interface</p>
    </div>
  );
}

function TagContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Tag Container">
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="Marketplace" />
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="Landing Page" />
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="B2B" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame136 />
      <TagContainer />
    </div>
  );
}

function GeneralInfoColumn() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold gap-[0.52px] items-center left-[calc(50%-4.42px)] text-center top-[7.81px] w-[90.54px]" data-name="General Info Column">
      <p className="leading-[3.122px] relative shrink-0 text-[#556272] text-[2.342px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Our Marketplace Value
      </p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#001332] text-[3.642px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[5.203px]">{`Discover the platform that accelerates your business's digital journey.`}</p>
      </div>
    </div>
  );
}

function GeneralInfoContainer() {
  return (
    <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[1.041px] items-start leading-[0] left-[23.03px] text-[2.862px] top-[calc(50%+9.3px)]" data-name="General Info Container">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#556272] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[3.903px]">I</span>
          <span className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[3.903px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            nnovation
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#b3bcc6] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[3.903px]">Commitment</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#b3bcc6] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[3.903px]">Advance</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#b3bcc6] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[3.903px]">Reliability</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#b3bcc6] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[3.903px]">Excellence</p>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative rounded-[0.52px] shrink-0 size-[40.587px]" data-name="Section">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[0.52px] size-full" src={imgSection} />
    </div>
  );
}

function ShirtTextContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[1.041px] items-start relative shrink-0 w-full" data-name="Shirt Text Container">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[3.772px] relative shrink-0 text-[#001332] text-[3.122px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Innovation
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[3.122px] relative shrink-0 text-[#6b7b8c] text-[1.821px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        We ignite new ideas and fuel creativity, transforming challenges into opportunities and pioneering paths to progress.
      </p>
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[1.301px] relative rounded-[6.504px] shrink-0 size-[5.464px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.13px] border-solid inset-0 pointer-events-none rounded-[6.504px]" />
      <div className="overflow-clip relative shrink-0 size-[2.342px]" data-name="Back Arrow Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" opacity="0.87" />
        </svg>
        <div className="absolute inset-[10.93%_29.21%_10.89%_26.03%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.8308" preserveAspectRatio="none" viewBox="0 0 1.04797 1.8308" width="1.04797">
            <path d={svgPaths.p1705a000} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonIcon1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[1.301px] relative rounded-[6.504px] shrink-0 size-[5.464px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.13px] border-solid inset-0 pointer-events-none rounded-[6.504px]" />
      <div className="overflow-clip relative shrink-0 size-[2.342px]" data-name="Forward Arrow Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" opacity="0.87" />
        </svg>
        <div className="absolute inset-[10.89%_26.03%_10.93%_29.21%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.8308" preserveAspectRatio="none" viewBox="0 0 1.04797 1.8308" width="1.04797">
            <path d={svgPaths.p8870700} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SkillTagContainer() {
  return (
    <div className="content-stretch flex gap-[1.561px] items-start relative shrink-0" data-name="Skill Tag Container">
      <ButtonIcon />
      <ButtonIcon1 />
    </div>
  );
}

function ShirtInfoContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px relative self-stretch" data-name="Shirt Info Container">
      <ShirtTextContainer />
      <SkillTagContainer />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#fefefe] content-stretch flex gap-[1.821px] items-start overflow-clip p-[2.081px] relative rounded-[1.041px] shrink-0 w-[83.255px]" data-name="Section">
      <Section1 />
      <ShirtInfoContainer />
    </div>
  );
}

function Section3() {
  return (
    <div className="relative rounded-[0.52px] shrink-0 size-[40.587px]" data-name="Section">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[0.52px] size-full" src={imgSection1} />
    </div>
  );
}

function ShirtTextContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[1.041px] items-start relative shrink-0 w-full" data-name="Shirt Text Container">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[3.772px] relative shrink-0 text-[#001332] text-[3.122px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Innovation
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[3.122px] relative shrink-0 text-[#6b7b8c] text-[1.821px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        We ignite new ideas and fuel creativity, transforming challenges into opportunities and pioneering paths to progress.
      </p>
    </div>
  );
}

function ButtonIcon2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[1.301px] relative rounded-[6.504px] shrink-0 size-[5.464px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.13px] border-solid inset-0 pointer-events-none rounded-[6.504px]" />
      <div className="overflow-clip relative shrink-0 size-[2.342px]" data-name="Back Arrow Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" opacity="0.87" />
        </svg>
        <div className="absolute inset-[10.93%_29.21%_10.89%_26.03%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.8308" preserveAspectRatio="none" viewBox="0 0 1.04797 1.8308" width="1.04797">
            <path d={svgPaths.p1705a000} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonIcon3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[1.301px] relative rounded-[6.504px] shrink-0 size-[5.464px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.13px] border-solid inset-0 pointer-events-none rounded-[6.504px]" />
      <div className="overflow-clip relative shrink-0 size-[2.342px]" data-name="Forward Arrow Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" opacity="0.87" />
        </svg>
        <div className="absolute inset-[10.89%_26.03%_10.93%_29.21%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.8308" preserveAspectRatio="none" viewBox="0 0 1.04797 1.8308" width="1.04797">
            <path d={svgPaths.p8870700} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SkillTagContainer1() {
  return (
    <div className="content-stretch flex gap-[1.561px] items-start relative shrink-0" data-name="Skill Tag Container">
      <ButtonIcon2 />
      <ButtonIcon3 />
    </div>
  );
}

function ShirtInfoContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px relative self-stretch" data-name="Shirt Info Container">
      <ShirtTextContainer1 />
      <SkillTagContainer1 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#fefefe] content-stretch flex gap-[1.821px] items-start opacity-18 overflow-clip p-[2.081px] relative rounded-[1.041px] shrink-0 w-[83.255px]" data-name="Section">
      <Section3 />
      <ShirtInfoContainer1 />
    </div>
  );
}

function ShirtContainer() {
  return (
    <div className="absolute content-stretch flex gap-[8.326px] items-center left-[52.03px] top-[26.41px]" data-name="Shirt Container">
      <Section />
      <Section2 />
    </div>
  );
}

function Screen() {
  return (
    <div className="bg-[#f6f7f8] h-[78.962px] overflow-clip relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[187.324px]" data-name="Screen">
      <GeneralInfoColumn />
      <GeneralInfoContainer />
      <ShirtContainer />
    </div>
  );
}

function Section6() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[2.081px] items-start left-[calc(50%-0.33px)] top-[3.12px] w-[76.23px]" data-name="Section">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.203px] relative shrink-0 text-[#001332] text-[3.642px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Our Partners
      </p>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#556272] text-[3.122px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[3.772px]">We team up with trusted partners to build better products and services. Their support helps us do great work.</p>
      </div>
    </div>
  );
}

function PartnerLogoContainer() {
  return (
    <div className="content-stretch flex flex-col h-[8.326px] items-center justify-center p-[0.26px] relative shrink-0 w-[20.554px]" data-name="Partner Logo Container">
      <div className="h-[7.155px] relative shrink-0 w-full" data-name="Starlink_Logo.svg 2">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgStarlinkLogoSvg2} />
      </div>
    </div>
  );
}

function PartnerLogoContainer1() {
  return (
    <div className="content-stretch flex flex-col h-[8.326px] items-center justify-center p-[0.26px] relative shrink-0 w-[20.554px]" data-name="Partner Logo Container">
      <div className="h-[7.155px] relative shrink-0 w-full" data-name="indosat-ooredoo-hutchison-logo-5B039B2209-seeklogo 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIndosatOoredooHutchisonLogo5B039B2209Seeklogo1} />
      </div>
    </div>
  );
}

function PartnerLogoContainer2() {
  return (
    <div className="content-stretch flex h-[8.326px] items-center justify-center p-[0.26px] relative shrink-0 w-[20.554px]" data-name="Partner Logo Container">
      <div className="flex-[1_0_0] h-[7.155px] min-w-px relative" data-name="S5gcDE4kDF5uhr3cH7BX 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgS5GcDe4KDf5Uhr3CH7Bx1} />
      </div>
    </div>
  );
}

function PartnerLogoContainer3() {
  return (
    <div className="content-stretch flex flex-col h-[8.326px] items-center justify-center opacity-30 p-[0.26px] relative shrink-0 w-[20.554px]" data-name="Partner Logo Container">
      <div className="h-[7.155px] mix-blend-luminosity relative shrink-0 w-full" data-name="Starlink_Logo.svg 2">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgStarlinkLogoSvg2} />
      </div>
    </div>
  );
}

function PartnerLogoContainer4() {
  return (
    <div className="content-stretch flex flex-col h-[8.326px] items-center justify-center opacity-30 p-[0.26px] relative shrink-0 w-[20.554px]" data-name="Partner Logo Container">
      <div className="h-[7.155px] relative shrink-0 w-full" data-name="indosat-ooredoo-hutchison-logo-5B039B2209-seeklogo 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIndosatOoredooHutchisonLogo5B039B2209Seeklogo1} />
      </div>
    </div>
  );
}

function PartnerLogosRow() {
  return (
    <div className="absolute content-stretch flex gap-[4.423px] items-center left-[3.12px] top-[50.21px]" data-name="Partner Logos Row">
      <PartnerLogoContainer />
      <PartnerLogoContainer1 />
      <PartnerLogoContainer2 />
      <PartnerLogoContainer3 />
      <PartnerLogoContainer4 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-[#eaecef] h-[61.661px] left-[7.81px] overflow-clip rounded-[1.041px] top-[7.8px] w-[83.125px]" data-name="Section">
      <Section6 />
      <PartnerLogosRow />
    </div>
  );
}

function Section8() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[2.081px] items-start left-[calc(50%-0.33px)] top-[3.12px] w-[76.23px]" data-name="Section">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.203px] relative shrink-0 text-[#001332] text-[3.642px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Subscribe to Us!
      </p>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#556272] text-[3.122px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[3.772px]">News, Updates, and Resources for your Business</p>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute bg-[#eaecef] h-[61.661px] left-[96.39px] overflow-clip rounded-[1.041px] top-[7.8px] w-[83.125px]" data-name="Section">
      <Section8 />
      <div className="absolute bg-[#0648ff] left-[3.12px] rounded-[100px] top-[53.07px] w-[16.651px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[1.561px] py-[1.301px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[1.82px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[2.862px]">Subscribe!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f6f7f8] h-[77.271px] overflow-clip relative shrink-0 w-[187.324px]" data-name="Section">
      <Section5 />
      <Section7 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold gap-[1.041px] items-start relative shrink-0 text-[#fefefe] whitespace-nowrap">
      <p className="leading-[5.203px] relative shrink-0 text-[3.64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Collaborate With Us
      </p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[2.34px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[3.122px]">Advancing your business growth now!</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.561px] items-start left-[7.81px] top-[7.81px]">
      <Frame46 />
      <div className="bg-[#0648ff] relative rounded-[100px] shrink-0 w-[16.651px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[1.561px] py-[1.301px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[1.82px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[2.862px]">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.081px] relative shrink-0 text-[#fefefe] text-[1.82px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        How it Works?
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.081px] relative shrink-0 text-[#fefefe] text-[1.82px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Explore
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.081px] relative shrink-0 text-[#fefefe] text-[1.82px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        About Us
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[1.561px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[3.122px] items-start relative shrink-0 w-[23.415px]">
      <p className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[3.122px] relative shrink-0 text-[#fefefe] text-[2.34px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Support
      </p>
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.081px] relative shrink-0 text-[#fefefe] text-[1.82px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        FAQ
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.081px] relative shrink-0 text-[#fefefe] text-[1.82px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Terms & Condition`}</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.081px] relative shrink-0 text-[#fefefe] text-[1.82px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Privacy policy
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[1.561px] items-start relative shrink-0">
      <Frame35 />
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[3.122px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[3.122px] relative shrink-0 text-[#fefefe] text-[2.34px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Policies
      </p>
      <Frame34 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[1.561px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[3.122px]" data-name="place">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_16.67%_9.68%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.55977" preserveAspectRatio="none" viewBox="0 0 2.08138 2.55977" width="2.08138">
            <path d={svgPaths.p32528e30} fill="#FEFEFE" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.081px] relative shrink-0 text-[#fefefe] text-[1.82px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Central Jakarta Menara Thamrin 12th Floor Jl. M.H. Thamrin Kav.3 Jakarta 10250
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[1.561px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[3.122px]" data-name="phone">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[12.54%_12.54%_12.61%_12.61%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.33682" preserveAspectRatio="none" viewBox="0 0 2.33684 2.33682" width="2.33684">
            <path d={svgPaths.p317c180} fill="#FEFEFE" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.081px] relative shrink-0 text-[#fefefe] text-[1.82px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        +6221 230 2345
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[1.561px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[3.122px]" data-name="mail">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.08138" preserveAspectRatio="none" viewBox="0 0 2.60172 2.08138" width="2.60172">
            <path d={svgPaths.pdced0f0} fill="#FEFEFE" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.081px] relative shrink-0 text-[#fefefe] text-[1.82px] w-[23.415px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        info.lampu@lintasarta.co.id
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[1.561px] items-start relative shrink-0">
      <Frame39 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[3.122px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[3.122px] relative shrink-0 text-[#fefefe] text-[2.34px] w-[28.099px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Get In Touch
      </p>
      <Frame38 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex gap-[1.041px] items-start left-[102.51px] top-[7.81px]">
      <Frame66 />
      <Frame44 />
      <Frame43 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute bottom-[2.6px] content-stretch flex gap-[3.382px] items-center right-[7.81px]">
      <div className="relative shrink-0 size-[3.122px]" data-name="Icon Warna Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" height="3.12207" preserveAspectRatio="none" viewBox="0 0 3.12207 3.12207" width="3.12207">
          <path d={svgPaths.p24d2fc00} fill="#001332" id="bg" />
        </svg>
        <div className="absolute inset-1/4" data-name="facebook">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.56103" preserveAspectRatio="none" viewBox="0 0 1.56103 1.56103" width="1.56103">
            <path d={svgPaths.p3147500} fill="#FEFEFE" id="facebook" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[3.122px]" data-name="Icon Warna Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" height="3.12207" preserveAspectRatio="none" viewBox="0 0 3.12207 3.12207" width="3.12207">
          <path d={svgPaths.p24d2fc00} fill="#001332" id="bg" />
        </svg>
        <div className="absolute inset-1/4" data-name="linkedin">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.56103" preserveAspectRatio="none" viewBox="0 0 1.56103 1.56103" width="1.56103">
            <path d={svgPaths.p35235100} fill="#FEFEFE" id="linkedin" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[3.122px]" data-name="Icon Warna Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" height="3.12207" preserveAspectRatio="none" viewBox="0 0 3.12207 3.12207" width="3.12207">
          <path d={svgPaths.p24d2fc00} fill="#001332" id="bg" />
        </svg>
        <div className="absolute bottom-[32.5%] left-1/4 right-1/4 top-[32.5%]" data-name="youtube">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.09272" preserveAspectRatio="none" viewBox="0 0 1.56103 1.09272" width="1.56103">
            <path d={svgPaths.p1556e3c0} fill="#FEFEFE" id="youtube" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[3.122px]" data-name="Icon Warna Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" height="3.12207" preserveAspectRatio="none" viewBox="0 0 3.12207 3.12207" width="3.12207">
          <path d={svgPaths.p24d2fc00} fill="#001332" id="bg" />
        </svg>
        <div className="absolute inset-[24.06%]" data-name="instagram">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.61957" preserveAspectRatio="none" viewBox="0 0 1.61957 1.61957" width="1.61957">
            <g id="instagram">
              <path d={svgPaths.p840300} fill="#FEFEFE" />
              <path d={svgPaths.p3c16e080} fill="#FEFEFE" />
              <path d={svgPaths.p256b9080} fill="#FEFEFE" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute bg-[rgba(233,237,240,0.72)] content-stretch flex flex-col items-start p-[2px] right-[-1.32px] rounded-[7px] top-[24px]" data-name="Home">
      <Screen />
      <Section4 />
      <div className="bg-[#001332] h-[42.148px] overflow-clip relative shrink-0 w-[187.324px]" data-name="Footer">
        <Frame42 />
        <div className="absolute flex h-[0.13px] items-center justify-center left-[7.81px] top-[34.73px] w-[171.714px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#d7dbe0] h-[0.13px] relative w-[171.714px]" />
          </div>
        </div>
        <Frame45 />
        <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[7.81px] text-[#fefefe] text-[0px] top-[37.46px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <span className="leading-[2.081px] text-[1.82px]">{`©️ 2025 `}</span>
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Matketplace Lintasarta
          </span>
        </p>
        <Frame47 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[1.587px] items-start relative shrink-0">
      <div className="bg-[#ee6a5f] relative rounded-[13px] shrink-0 size-[2.222px]">
        <div aria-hidden className="absolute border-[#c7493e] border-[0.095px] border-solid inset-0 pointer-events-none rounded-[13px]" />
      </div>
      <div className="bg-[#f4be50] relative rounded-[13px] shrink-0 size-[2.222px]">
        <div aria-hidden className="absolute border-[#cd9b35] border-[0.095px] border-solid inset-0 pointer-events-none rounded-[13px]" />
      </div>
      <div className="bg-[#5fc454] relative rounded-[13px] shrink-0 size-[2.222px]">
        <div aria-hidden className="absolute border-[#39a430] border-[0.095px] border-solid inset-0 pointer-events-none rounded-[13px]" />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[2.54px] relative shrink-0 w-[3.492px]">
      <div className="absolute inset-[-4.38%_-3.18%]">
        <svg className="block size-full" fill="none" height="2.7619" preserveAspectRatio="none" viewBox="0 0 3.71429 2.7619" width="3.71429">
          <g id="Group 7">
            <rect fill="white" height="2.53968" id="Rectangle 3" rx="0.31746" stroke="#737373" strokeWidth="0.222222" width="3.49206" x="0.111111" y="0.111111" />
            <path d={svgPaths.p3b672900} id="Vector 5" stroke="#737373" strokeLinecap="square" strokeWidth="0.222222" />
            <g id="Frame 1">
              <path d={svgPaths.p1a634400} id="Vector 6" stroke="#737373" strokeLinecap="round" strokeWidth="0.15873" />
              <path d={svgPaths.p2e6bbd00} id="Vector 7" stroke="#737373" strokeLinecap="round" strokeWidth="0.15873" />
              <path d={svgPaths.p27046000} id="Vector 8" stroke="#737373" strokeLinecap="round" strokeWidth="0.15873" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[2.381px] relative shrink-0 w-[7.619px]">
      <div className="absolute inset-[-5%_-1.56%]">
        <svg className="block size-full" fill="none" height="2.61905" preserveAspectRatio="none" viewBox="0 0 7.85714 2.61905" width="7.85714">
          <g id="Frame 8">
            <path d={svgPaths.p1d746d00} id="Vector 10" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.238095" />
            <path d={svgPaths.p2fcf7e00} id="Vector 11" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="0.238095" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[5.238px] items-start relative shrink-0">
      <Group7 />
      <Frame16 />
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="bg-[#f2f2f2] col-1 ml-0 mt-0 relative rounded-[7px] row-1 size-[2.222px]">
        <div aria-hidden className="absolute border-[#737373] border-[0.159px] border-solid inset-[-0.08px] pointer-events-none rounded-[7.08px]" />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 ml-[0.09px] mt-[0.09px] relative row-1 size-[1.053px]">
      <div className="absolute inset-[-7.54%]">
        <svg className="block size-full" fill="none" height="1.21136" preserveAspectRatio="none" viewBox="0 0 1.21136 1.21136" width="1.21136">
          <g id="Group 6">
            <path d={svgPaths.p5340600} id="Vector 3" stroke="#737373" strokeLinecap="round" strokeWidth="0.15873" />
            <path d={svgPaths.p161a9e00} id="Vector 4" stroke="#737373" strokeLinecap="round" strokeWidth="0.15873" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function More() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="More">
      <Group8 />
      <Group6 />
    </div>
  );
}

function Candado() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Candado">
      <div className="bg-[#9e9e9e] col-1 h-[1.129px] ml-0 mt-[0.12px] relative rounded-[1px] row-1 w-[1.27px]" />
      <div className="border-[#9e9e9e] border-[0.159px] border-solid col-1 h-[1.552px] ml-[0.02px] mt-0 relative rounded-[4px] row-1 w-[0.988px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[1.429px] items-center relative shrink-0 w-[61.111px]">
      <Candado />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[2.063px] justify-center not-italic relative shrink-0 text-[#4c4c4c] text-[0.38px] tracking-[-0.0038px] w-[34.921px]">
        <p className="leading-[1.619px]">lampu.lintasarta.net</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex h-[2.222px] items-center justify-between leading-[0] relative shrink-0 w-[98.413px]">
      <More />
      <Frame18 />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 h-[1.651px] ml-[0.13px] mt-[0.1px] relative row-1 w-[1.385px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.65123" preserveAspectRatio="none" viewBox="0 0 1.38457 1.65123" width="1.38457">
        <g id="Group 3">
          <path d={svgPaths.p2e63fe00} fill="#737373" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 ml-0 mt-0 relative rounded-[9.5px] row-1 size-[3.016px]">
        <div aria-hidden className="absolute border-[#737373] border-[0.226px] border-solid inset-[-0.113px] pointer-events-none rounded-[9.613px]" />
      </div>
      <Group3 />
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 h-[2.452px] ml-[0.07px] mt-0 relative row-1 w-[1.457px]">
      <div className="absolute inset-[-9.06%_-15.25%]">
        <svg className="block size-full" fill="none" height="2.89685" preserveAspectRatio="none" viewBox="0 0 1.90188 2.89685" width="1.90188">
          <g id="Group 3">
            <path d={svgPaths.p25c29af0} fill="#737373" id="Vector" stroke="white" strokeWidth="0.222222" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[2.183px] ml-0 mt-[0.18px] relative rounded-[1.909px] row-1 w-[2.381px]">
        <div aria-hidden className="absolute border-[#737373] border-[0.238px] border-solid inset-[-0.119px] pointer-events-none rounded-[2.028px]" />
      </div>
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="relative shrink-0 size-[2.381px]">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" height="2.61905" preserveAspectRatio="none" viewBox="0 0 2.61905 2.61905" width="2.61905">
          <g id="Group 10">
            <path d={svgPaths.p7149b00} id="Vector 3" stroke="#737373" strokeLinecap="round" strokeWidth="0.238095" />
            <path d={svgPaths.p3e3ee380} id="Vector 4" stroke="#737373" strokeLinecap="round" strokeWidth="0.238095" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 ml-0 mt-0 relative rounded-[2px] row-1 size-[2.442px]">
        <div aria-hidden className="absolute border-[#737373] border-[0.238px] border-solid inset-[-0.119px] pointer-events-none rounded-[2.1189999999999998px]" />
      </div>
      <div className="bg-white col-1 ml-[0.14px] mt-[0.12px] relative rounded-[2px] row-1 size-[2.442px]">
        <div aria-hidden className="absolute border-[#737373] border-[0.238px] border-solid inset-[-0.119px] pointer-events-none rounded-[2.1189999999999998px]" />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[3.81px] top-[2.22px] w-[259.048px]">
      <div className="relative shrink-0" data-name="Navegation">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4.762px] items-center relative size-full">
            <Frame14 />
            <Frame15 />
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] relative rounded-[5px] shrink-0 w-[107.778px]" data-name="Search">
        <div className="content-stretch flex flex-col items-start pl-[1.587px] pr-[36.032px] py-[1.429px] relative size-full">
          <Frame17 />
        </div>
      </div>
      <div className="relative shrink-0 w-[26.508px]" data-name="Options">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between relative size-full">
            <Group5 />
            <Group4 />
            <Group10 />
            <Group2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupContainer() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mockup Container">
      <div className="absolute bg-[#f6f7f8] h-[124.833px] left-0 top-0 w-[280px]" data-name="Mockup Rectangle" />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="How it Works?">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#556272] text-[3.11px] whitespace-nowrap">
        <p className="leading-[4.278px]">How it Works?</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.111px] py-[1.944px] relative rounded-[2px] shrink-0" data-name="Button">
      <HowItWorks />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="About Us">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#556272] text-[3.11px] whitespace-nowrap">
        <p className="leading-[4.278px]">About Us</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.111px] py-[1.944px] relative rounded-[2px] shrink-0" data-name="Button">
      <AboutUs />
    </div>
  );
}

function ContactUs() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Contact Us">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#556272] text-[3.11px] whitespace-nowrap">
        <p className="leading-[4.278px]">Contact Us</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.111px] py-[1.944px] relative rounded-[2px] shrink-0" data-name="Button">
      <ContactUs />
    </div>
  );
}

function Section10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Contents() {
  return (
    <div className="absolute inset-[0_0_-1.15%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[16px_12px]" style={{ maskImage: `url("${imgContents}")` }} data-name="contents">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.22917" preserveAspectRatio="none" viewBox="0 0 5.63889 4.22917" width="5.63889">
        <g id="contents">
          <path clipRule="evenodd" d="M0 0V4.22917H5.63889V0H0Z" fill="#F7FCFF" fillRule="evenodd" id="background" />
          <mask height="5" id="mask0_0_1063" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="6" x="0" y="0">
            <path clipRule="evenodd" d="M0 0V4.22917H5.63889V0H0Z" fill="white" fillRule="evenodd" id="background_2" />
          </mask>
          <g mask="url(#mask0_0_1063)">
            <path clipRule="evenodd" d="M0 0V2.11458H5.63889V0H0Z" fill="#E31D1C" fillRule="evenodd" id="top" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Flag() {
  return (
    <div className="absolute contents inset-0" data-name="flag">
      <Contents />
    </div>
  );
}

function LanguageSelectorContainer() {
  return (
    <div className="content-stretch flex gap-[0.778px] items-center relative shrink-0" data-name="Language Selector Container">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#556272] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[3.111px]">ID</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[4.667px]" data-name="Dropdown Icon">
        <div className="absolute inset-[37.49%_26.74%_35.07%_26.7%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.28042" preserveAspectRatio="none" viewBox="0 0 2.17292 1.28042" width="2.17292">
            <path d={svgPaths.p13f5200} fill="#556272" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Bahasa() {
  return (
    <div className="content-stretch flex gap-[2.333px] items-center relative shrink-0" data-name="Bahasa">
      <div className="h-[4.278px] relative shrink-0 w-[5.639px]" data-name="ID - Indonesia">
        <Flag />
      </div>
      <LanguageSelectorContainer />
    </div>
  );
}

function Section9() {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[11.667px] relative size-full">
          <Section10 />
          <Bahasa />
        </div>
      </div>
    </div>
  );
}

function UserActionsContainer() {
  return (
    <div className="absolute content-stretch flex gap-[3.111px] items-center justify-end left-[215.44px] top-[5.44px]" data-name="User Actions Container">
      <div className="bg-[#fefefe] relative rounded-[100px] shrink-0 w-[24.889px]" data-name="Button">
        <div aria-hidden className="absolute border-[#0648ff] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">Login</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0648ff] relative rounded-[100px] shrink-0 w-[24.889px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[78.09%_38.78%_15.01%_59.15%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.831451" preserveAspectRatio="none" viewBox="0 0 0.552033 0.831451" width="0.552033">
        <g id="Group">
          <path d={svgPaths.p3fca4dc0} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[79.92%_36.42%_13.18%_61.61%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.831451" preserveAspectRatio="none" viewBox="0 0 0.528116 0.831451" width="0.528116">
        <g id="Group">
          <path d={svgPaths.p1e6be100} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[78.16%_34.37%_15.01%_64.81%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.823284" preserveAspectRatio="none" viewBox="0 0 0.218557 0.823284" width="0.218557">
        <g id="Group">
          <path d={svgPaths.p3ee76100} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[78.48%_33.67%_15.14%_65.96%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.769228" preserveAspectRatio="none" viewBox="0 0 0.0993622 0.769228" width="0.0993622">
        <g id="Group">
          <path d={svgPaths.p595980} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[79.79%_31.31%_15.14%_66.74%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.611532" preserveAspectRatio="none" viewBox="0 0 0.519365 0.611532" width="0.519365">
        <g id="Group">
          <path d={svgPaths.p3a6b1180} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[78.96%_29.79%_15.14%_69.1%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.711867" preserveAspectRatio="none" viewBox="0 0 0.295946 0.711867" width="0.295946">
        <g id="Group">
          <path d={svgPaths.p255a3da0} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[79.79%_27.62%_15%_70.45%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.627088" preserveAspectRatio="none" viewBox="0 0 0.516254 0.627088" width="0.516254">
        <g id="Group">
          <path d={svgPaths.p122ab740} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[79.79%_25.37%_15.02%_72.71%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.626116" preserveAspectRatio="none" viewBox="0 0 0.511977 0.626116" width="0.511977">
        <g id="Group">
          <path d={svgPaths.p1b387480} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[79.79%_23.19%_15%_74.88%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.627088" preserveAspectRatio="none" viewBox="0 0 0.516059 0.627088" width="0.516059">
        <g id="Group">
          <path d={svgPaths.p2b64b670} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[79.79%_21.58%_15.14%_77.22%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.610949" preserveAspectRatio="none" viewBox="0 0 0.320057 0.610949" width="0.320057">
        <g id="Group">
          <path d={svgPaths.p20d13e00} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[78.96%_20.27%_15.14%_78.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.711867" preserveAspectRatio="none" viewBox="0 0 0.296142 0.711867" width="0.296142">
        <g id="Group">
          <path d={svgPaths.p382fd80} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[79.79%_18.09%_15%_79.97%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.627088" preserveAspectRatio="none" viewBox="0 0 0.516254 0.627088" width="0.516254">
        <g id="Group">
          <path d={svgPaths.p1107aa00} fill="#6D6E71" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoElement() {
  return (
    <div className="absolute contents inset-[78.09%_18.09%_13.18%_59.15%]" data-name="Logo Element">
      <Group />
      <Group1 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[12.9%_1.8%_72.58%_91.65%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.75001" preserveAspectRatio="none" viewBox="0 0 1.75001 1.75001" width="1.75001">
        <g id="Group">
          <path d={svgPaths.paa1cf80} fill="#001332" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[34.49%_49.64%_31.82%_26.9%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.06159" preserveAspectRatio="none" viewBox="0 0 6.27205 4.06159" width="6.27205">
        <g id="Group">
          <path d={svgPaths.p1918e300} fill="#001332" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[34.92%_33.67%_15.1%_52.53%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.02471" preserveAspectRatio="none" viewBox="0 0 3.68845 6.02471" width="3.68845">
        <g id="Group">
          <path d={svgPaths.p3c07d300} fill="#001332" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[34.6%_75.62%_31.01%_11.18%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.14617" preserveAspectRatio="none" viewBox="0 0 3.52919 4.14617" width="3.52919">
        <g id="Group">
          <path d={svgPaths.p28ac5f00} fill="#001332" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[20.86%_90.48%_31.82%_1.45%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="5.70524" preserveAspectRatio="none" viewBox="0 0 2.15641 5.70524" width="2.15641">
        <g id="Group">
          <path d={svgPaths.p16014900} fill="#001332" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[12.9%_10.28%_69.79%_81.95%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.0866" preserveAspectRatio="none" viewBox="0 0 2.07727 2.0866" width="2.07727">
        <g id="Group">
          <path d={svgPaths.p25347900} fill="url(#paint0_linear_0_1044)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1044" x1="2.32285" x2="0.533365" y1="-0.998577" y2="1.84677">
            <stop stopColor="#004BFF" />
            <stop offset="0.18" stopColor="#0069FF" />
            <stop offset="0.41" stopColor="#008AFF" />
            <stop offset="0.63" stopColor="#00A2FF" />
            <stop offset="0.83" stopColor="#00B1FF" />
            <stop offset="1" stopColor="#00B6FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[34.49%_18.17%_31.83%_68.49%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.06042" preserveAspectRatio="none" viewBox="0 0 3.56556 4.06042" width="3.56556">
        <g id="Group">
          <path d={svgPaths.p3ee54b80} fill="#001332" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoGroup() {
  return (
    <div className="absolute contents inset-[12.9%_1.8%_15.1%_1.45%]" data-name="Logo Group">
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="absolute contents inset-[12.9%_1.8%_13.18%_1.45%]" data-name="Logo Container">
      <LogoElement />
      <LogoGroup />
    </div>
  );
}

function LogoLampuFullColor() {
  return (
    <div className="-translate-y-1/2 absolute h-[12.056px] left-[11.67px] overflow-clip top-1/2 w-[26.732px]" data-name="Logo Lampu-Full Color">
      <LogoContainer />
    </div>
  );
}

function Section11() {
  return (
    <div className="bg-[#fefefe] h-[19.056px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[#f6f7f8] border-b-[0.194px] border-solid border-t-[0.194px] inset-0 pointer-events-none" />
      <UserActionsContainer />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#fefefe] h-[7.778px] left-[calc(50%-13.03px)] rounded-[8px] top-1/2 w-[158.278px]" data-name="search">
        <div className="-translate-y-1/2 absolute border-[#b3bcc6] border-[0.194px] border-solid h-[7.778px] left-0 right-0 rounded-[6px] top-1/2" data-name="Rectangle Copy 10" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[2.72px] text-[#d7dbe0] text-[2.72px] top-1/2 w-[47.25px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[3.111px]">Search Product</p>
        </div>
        <div className="-translate-y-1/2 absolute overflow-clip right-[2.72px] size-[3.889px] top-1/2" data-name="search">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-6.67%]">
              <svg className="block size-full" fill="none" height="3.30556" preserveAspectRatio="none" viewBox="0 0 3.30556 3.30556" width="3.30556">
                <path d={svgPaths.p25b5380} id="Vector" stroke="#6B7B8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.388889" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <LogoLampuFullColor />
    </div>
  );
}

function ProductByCategory() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Product by Category">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#556272] text-[3.11px] whitespace-nowrap">
        <p className="leading-[4.278px]">Product by Category</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[0.778px] items-center justify-center px-[3.111px] py-[1.944px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[3.889px]" data-name="Category Icon">
        <div className="absolute inset-[16.67%_58.33%_58.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-20%]">
            <svg className="block size-full" fill="none" height="1.36111" preserveAspectRatio="none" viewBox="0 0 1.36111 1.36111" width="1.36111">
              <path d={svgPaths.p2e417f2} id="Vector" stroke="#556272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.388889" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_16.67%_58.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-20%]">
            <svg className="block size-full" fill="none" height="1.36111" preserveAspectRatio="none" viewBox="0 0 1.36111 1.36111" width="1.36111">
              <path d={svgPaths.p2e417f2} id="Vector" stroke="#556272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.388889" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_58.33%_16.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-20%]">
            <svg className="block size-full" fill="none" height="1.36111" preserveAspectRatio="none" viewBox="0 0 1.36111 1.36111" width="1.36111">
              <path d={svgPaths.p2e417f2} id="Vector" stroke="#556272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.388889" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_16.67%_16.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-20%]">
            <svg className="block size-full" fill="none" height="1.36111" preserveAspectRatio="none" viewBox="0 0 1.36111 1.36111" width="1.36111">
              <path d={svgPaths.pf99ec80} id="Vector" stroke="#556272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.388889" />
            </svg>
          </div>
        </div>
      </div>
      <ProductByCategory />
    </div>
  );
}

function Persentage() {
  return (
    <div className="relative shrink-0 size-[3.889px]" data-name="persentage">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.88889" preserveAspectRatio="none" viewBox="0 0 3.88889 3.88889" width="3.88889">
        <g id="persentage">
          <g clipPath="url(#clip0_0_1056)">
            <rect fill="url(#paint0_linear_0_1056)" height="3.88889" rx="1.94444" width="3.88889" />
            <path d={svgPaths.p152ad20} fill="#FEFEFE" id="%" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1056" x1="1.21528" x2="3.32176" y1="2.34954" y2="0.486111">
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
          <clipPath id="clip0_0_1056">
            <rect fill="white" height="3.88889" rx="1.94444" width="3.88889" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PromoAvailable() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Promo Available">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#556272] text-[3.11px] whitespace-nowrap">
        <p className="leading-[4.278px]">Promo Available</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[0.778px] items-center justify-center px-[3.111px] py-[1.944px] relative rounded-[2px] shrink-0" data-name="Button">
      <Persentage />
      <PromoAvailable />
    </div>
  );
}

function Rocket() {
  return (
    <div className="overflow-clip relative rounded-[50px] shrink-0 size-[3.889px]" style={{ backgroundImage: "linear-gradient(80.84389685942006deg, rgb(6, 72, 255) 30.167%, rgb(0, 178, 255) 100%)" }} data-name="rocket">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.08px)] size-[2.269px] top-[calc(50%-0.08px)]" data-name="Free Trial Icon">
        <div className="absolute inset-[13.33%_13.33%_0.74%_0.73%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.94926" preserveAspectRatio="none" viewBox="0 0 1.94941 1.94926" width="1.94941">
            <path d={svgPaths.p95a4780} fill="#FEFEFE" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FreeTrial() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Free Trial">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#556272] text-[3.11px] whitespace-nowrap">
        <p className="leading-[4.278px]">Free Trial</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[0.778px] items-center justify-center px-[3.111px] py-[1.944px] relative rounded-[2px] shrink-0" data-name="Button">
      <Rocket />
      <FreeTrial />
    </div>
  );
}

function Section12() {
  return (
    <div className="bg-[#fefefe] content-stretch flex h-[8.167px] items-center px-[44.722px] relative shrink-0 w-[280px]" data-name="Section">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function CardTextContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold gap-[0.778px] items-center leading-[0] relative shrink-0 text-[#fefefe] whitespace-nowrap" data-name="Card Text Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[11.667px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[14px]">Welcome to Lampu</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[5.444px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[7.778px]">Your universe for AI, Telco, and Digital Solutions</p>
      </div>
    </div>
  );
}

function CardButtonContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[6.611px] items-center left-1/2 top-1/2" data-name="Card Button Container">
      <CardTextContainer />
      <div className="bg-[#fefefe] relative rounded-[100px] shrink-0 w-[24.889px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0648ff] text-[0.53px] whitespace-nowrap">
              <p className="leading-[0.832px]">Get Started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerContainer() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Banner Container">
      <div className="absolute h-[73.111px] left-0 top-0 w-[256.667px]" data-name="Banner Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBannerImage} />
      </div>
    </div>
  );
}

function Banner1() {
  return (
    <div className="absolute h-[73.111px] left-[-11.67px] overflow-clip top-0 w-[7px]" data-name="banner">
      <BannerContainer />
      <div className="-translate-x-1/2 absolute h-[73.111px] left-1/2 top-0 w-[256.667px]" style={{ backgroundImage: "linear-gradient(147.53818906988673deg, rgb(0, 19, 50) 12.264%, rgba(0, 178, 255, 0.24) 58.375%, rgba(0, 178, 255, 0) 94.345%)" }} data-name="Banner Placeholder" />
    </div>
  );
}

function Banner() {
  return (
    <div className="-translate-x-1/2 absolute h-[73.111px] left-1/2 top-[40.06px] w-[256.667px]" data-name="banner">
      <div className="absolute h-[73.111px] left-0 top-0 w-[256.667px]" data-name="Card Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.82%] left-0 max-w-none top-[-18.23%] w-full" src={imgCardImage} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[73.111px] left-1/2 top-1/2 w-[256.667px]" style={{ backgroundImage: "linear-gradient(147.53818906988673deg, rgb(0, 19, 50) 12.264%, rgba(0, 178, 255, 0.24) 58.375%, rgba(0, 178, 255, 0) 94.345%)" }} data-name="Overlay Rectangle" />
      <CardButtonContainer />
      <Banner1 />
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[39.08px] content-stretch flex gap-[1.944px] items-start left-[calc(50%-131.64px)]" data-name="Component 1">
      <div className="relative shrink-0 size-[9.722px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="9.72222" preserveAspectRatio="none" viewBox="0 0 9.72222 9.72222" width="9.72222">
          <circle cx="4.86111" cy="4.86111" fill="#FEFEFE" id="Ellipse 1" opacity="0.65" r="4.86111" />
        </svg>
      </div>
      <div className="absolute left-[2.53px] overflow-clip size-[4.667px] top-[2.53px]" data-name="Backward Arrow Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" opacity="0.87" />
        </svg>
        <div className="absolute inset-[10.93%_29.21%_10.89%_26.03%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="3.64875" preserveAspectRatio="none" viewBox="0 0 2.08858 3.64875" width="2.08858">
            <path d={svgPaths.p350ceb80} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BannerContainer1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Banner Container">
      <div className="absolute h-[73.111px] left-0 top-0 w-[256.667px]" data-name="Banner Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[197.47%] left-0 max-w-none top-[-11.5%] w-full" src={imgBannerImage1} />
        </div>
      </div>
    </div>
  );
}

function Banner2() {
  return (
    <div className="absolute bg-white h-[73.111px] left-[273px] overflow-clip top-[40.06px] w-[7px]" data-name="banner">
      <BannerContainer1 />
      <div className="absolute h-[73.111px] left-0 top-0 w-[256.667px]" style={{ backgroundImage: "linear-gradient(147.53818906988673deg, rgb(0, 19, 50) 12.264%, rgba(0, 178, 255, 0.24) 58.375%, rgba(0, 178, 255, 0) 94.345%)" }} data-name="Banner Placeholder" />
    </div>
  );
}

function CarouselContainer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#b3bcc6] content-stretch flex gap-[0.389px] items-center left-1/2 p-[0.389px] rounded-[7.778px] top-[115.89px]" data-name="Carousel Container">
      <div className="bg-[#d7dbe0] relative rounded-[7.778px] shrink-0 size-[1.556px]" data-name="Carousel Item" />
      <div className="bg-[#fefefe] h-[1.556px] relative rounded-[7.778px] shrink-0 w-[9.333px]" data-name="Carousel Item" />
      <div className="bg-[#d7dbe0] relative rounded-[7.778px] shrink-0 size-[1.556px]" data-name="Carousel Item" />
      <div className="bg-[#d7dbe0] relative rounded-[7.778px] shrink-0 size-[1.556px]" data-name="Carousel Item" />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bottom-[39.08px] content-stretch flex gap-[1.944px] items-start right-[3.5px]" data-name="Component 2">
      <div className="relative shrink-0 size-[9.722px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="9.72222" preserveAspectRatio="none" viewBox="0 0 9.72222 9.72222" width="9.72222">
          <circle cx="4.86111" cy="4.86111" fill="#FEFEFE" id="Ellipse 1" opacity="0.65" r="4.86111" />
        </svg>
      </div>
      <div className="absolute left-[2.53px] overflow-clip size-[4.667px] top-[2.53px]" data-name="Forward Arrow Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" opacity="0.87" />
        </svg>
        <div className="absolute inset-[10.89%_26.03%_10.93%_29.21%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="3.64875" preserveAspectRatio="none" viewBox="0 0 2.08858 3.64875" width="2.08858">
            <path d={svgPaths.p1fe9b500} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <div className="h-[120.556px] relative shrink-0 w-full" data-name="Screen">
      <MockupContainer />
      <div className="absolute left-0 top-0 w-[280px]" data-name="Navigation Bar">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Section9 />
          <Section11 />
          <Section12 />
        </div>
      </div>
      <Banner />
      <Component />
      <Banner2 />
      <CarouselContainer />
      <Component1 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">Version 2.0</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        AI Talent Management
      </p>
      <Button6 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group28 />
      <Group29 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group49 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame79 />
      <Frame81 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        The more a company’s business develops, the more complex its IT infrastructure required eventually
      </p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 500.000
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame80 />
      <Frame48 />
      <Frame125 />
    </div>
  );
}

function Persentage1() {
  return (
    <div className="relative shrink-0 size-[3.111px]" data-name="persentage">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.11111" preserveAspectRatio="none" viewBox="0 0 3.11111 3.11111" width="3.11111">
        <g id="persentage">
          <rect fill="url(#paint0_linear_0_991)" height="3.11111" rx="1.55556" width="3.11111" />
          <path d={svgPaths.p24d78300} fill="#FEFEFE" id="%" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_991" x1="0.972222" x2="2.65741" y1="1.87963" y2="0.388889">
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame109() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center opacity-0 px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <Persentage1 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Promo Available
      </p>
    </div>
  );
}

function ButtonIcon4() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon4 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">Version 2.0</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Talent DNA
      </p>
      <Button7 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group30 />
      <Group31 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group50 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        TalentDNA mengungkap algoritma perilaku manusia. Kami memahami, bahwa setiap orang itu unik dan berbeda.
      </p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 500.000
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame82 />
      <Frame52 />
      <Frame126 />
    </div>
  );
}

function Persentage2() {
  return (
    <div className="relative shrink-0 size-[3.111px]" data-name="persentage">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.11111" preserveAspectRatio="none" viewBox="0 0 3.11111 3.11111" width="3.11111">
        <g id="persentage">
          <rect fill="url(#paint0_linear_0_991)" height="3.11111" rx="1.55556" width="3.11111" />
          <path d={svgPaths.p24d78300} fill="#FEFEFE" id="%" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_991" x1="0.972222" x2="2.65741" y1="1.87963" y2="0.388889">
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame110() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <Persentage2 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Promo Available
      </p>
    </div>
  );
}

function ButtonIcon5() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon5 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Rocket1() {
  return (
    <div className="overflow-clip relative rounded-[40px] shrink-0 size-[3.111px]" style={{ backgroundImage: "linear-gradient(80.84389685942004deg, rgb(6, 72, 255) 30.167%, rgb(0, 178, 255) 100%)" }} data-name="rocket">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.06px)] size-[1.815px] top-[calc(50%-0.06px)]" data-name="maki:rocket">
        <div className="absolute inset-[13.33%_13.33%_0.74%_0.73%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.55941" preserveAspectRatio="none" viewBox="0 0 1.55953 1.55941" width="1.55953">
            <path d={svgPaths.p81a1380} fill="#FEFEFE" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="absolute bg-[#ddf0ff] content-stretch flex gap-[1.556px] items-center left-[23.53px] px-[2.722px] rounded-bl-[4.667px] top-0 w-[26.25px]">
      <Rocket1 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#0648ff] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Free Trial
      </p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">Version 2.0</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Talent DNA
      </p>
      <Button8 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group32 />
      <Group33 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group51 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        TalentDNA mengungkap algoritma perilaku manusia. Kami memahami, bahwa setiap orang itu unik dan berbeda.
      </p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 500.000
      </p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame85 />
      <Frame55 />
      <Frame127 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <div className="overflow-clip relative shrink-0 size-[3.111px]" data-name="flash_on">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_32.26%_13.96%_29.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.41748" preserveAspectRatio="none" viewBox="0 0 1.20018 2.41748" width="1.20018">
            <path d={svgPaths.p2cb47200} fill="url(#paint0_linear_0_1169)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1169" x1="0.0774812" x2="1.46224" y1="3.38577" y2="3.27496">
                <stop offset="0.301667" stopColor="#34C759" />
                <stop offset="1" stopColor="#00FFFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Special Price!
      </p>
    </div>
  );
}

function ButtonIcon6() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon6 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Persentage3() {
  return (
    <div className="relative shrink-0 size-[3.111px]" data-name="persentage">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.11111" preserveAspectRatio="none" viewBox="0 0 3.11111 3.11111" width="3.11111">
        <g id="persentage">
          <rect fill="url(#paint0_linear_0_1099)" height="3.11111" rx="1.55556" width="3.11111" />
          <path d={svgPaths.p3ed34b80} fill="#FEFEFE" id="%" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1099" x1="0.972222" x2="2.65741" y1="1.87963" y2="0.388889">
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame113() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center left-[46.08px] px-[2.722px] rounded-bl-[4.667px] top-0">
      <Persentage3 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Promo Available
      </p>
    </div>
  );
}

function VoucherInfoRow() {
  return (
    <div className="content-stretch flex gap-[11.667px] items-center relative shrink-0 w-full" data-name="Voucher Info Row">
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame49 />
        <Frame109 />
        <Frame50 />
      </div>
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame51 />
        <Frame110 />
        <Frame53 />
      </div>
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame111 />
        <Frame54 />
        <Frame112 />
        <Frame56 />
        <Frame113 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">DCInterconnect</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        CRM
      </p>
      <Button9 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group34 />
      <Group35 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group52 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame89 />
      <Frame90 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Layanan Data Centre Interconnect merupakan layanan komunikasi data Digital Leased Line antar data centre yang didukung oleh jaringan full...
      </p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 100.000
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame88 />
      <Frame58 />
      <Frame128 />
    </div>
  );
}

function Persentage4() {
  return (
    <div className="relative shrink-0 size-[3.111px]" data-name="persentage">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.11111" preserveAspectRatio="none" viewBox="0 0 3.11111 3.11111" width="3.11111">
        <g id="persentage">
          <rect fill="url(#paint0_linear_0_991)" height="3.11111" rx="1.55556" width="3.11111" />
          <path d={svgPaths.p24d78300} fill="#FEFEFE" id="%" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_991" x1="0.972222" x2="2.65741" y1="1.87963" y2="0.388889">
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame114() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center opacity-0 px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <Persentage4 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Promo Available
      </p>
    </div>
  );
}

function ButtonIcon7() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon7 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[19.444px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.333px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">Version 2.0</p>
      </div>
    </div>
  );
}

function ProductVendorColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]" data-name="Product Vendor Column">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.278px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        DataBandwith
      </p>
      <Button10 />
    </div>
  );
}

function ProductTitleRow() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Product Title Row">
      <ProductVendorColumn />
      <div className="h-[3.5px] relative shrink-0 w-[27.632px]" data-name="SpaceX_logo_black.svg (1) 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSpaceXLogoBlackSvg12} />
      </div>
    </div>
  );
}

function ProductDescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Description Container">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.722px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        The more a company’s business develops, the more complex its IT infrastructure required eventually becomes. Lintasarta Cloud Services offers solutition...
      </p>
    </div>
  );
}

function ProductInfoColumn() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-end left-[4.67px] top-[4.67px] w-[68.444px]" data-name="Product Info Column">
      <ProductTitleRow />
      <ProductDescriptionContainer />
      <p className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.278px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 300.000
      </p>
    </div>
  );
}

function ButtonIcon8() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[9.722px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[9.722px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="Shopping Cart Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]" data-name="Button Container">
      <ButtonIcon8 />
      <div className="bg-[#0648ff] relative rounded-[100px] shrink-0 w-[57.556px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductImageContainer() {
  return (
    <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[1.556px] shrink-0 w-[77.778px]" data-name="Product Image Container">
      <ProductInfoColumn />
      <ButtonContainer />
    </div>
  );
}

function Rocket2() {
  return (
    <div className="overflow-clip relative rounded-[40px] shrink-0 size-[3.111px]" style={{ backgroundImage: "linear-gradient(80.84389685942004deg, rgb(6, 72, 255) 30.167%, rgb(0, 178, 255) 100%)" }} data-name="rocket">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.06px)] size-[1.815px] top-[calc(50%-0.06px)]" data-name="maki:rocket">
        <div className="absolute inset-[13.33%_13.33%_0.74%_0.73%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.55941" preserveAspectRatio="none" viewBox="0 0 1.55953 1.55941" width="1.55953">
            <path d={svgPaths.p81a1380} fill="#FEFEFE" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="absolute bg-[#ddf0ff] content-stretch flex gap-[1.556px] items-center left-[23.53px] px-[2.722px] rounded-bl-[4.667px] top-0 w-[26.25px]">
      <Rocket2 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#0648ff] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Free Trial
      </p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">DCInterconnect</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        CRM
      </p>
      <Button11 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group36 />
      <Group37 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group53 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Layanan Data Centre Interconnect merupakan layanan komunikasi data Digital Leased Line antar data centre yang didukung oleh jaringan full...
      </p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 100.000
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame91 />
      <Frame61 />
      <Frame129 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center opacity-0 px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <div className="overflow-clip relative shrink-0 size-[3.111px]" data-name="flash_on">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_32.26%_13.96%_29.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.41748" preserveAspectRatio="none" viewBox="0 0 1.20018 2.41748" width="1.20018">
            <path d={svgPaths.p2cb47200} fill="url(#paint0_linear_0_1169)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1169" x1="0.0774812" x2="1.46224" y1="3.38577" y2="3.27496">
                <stop offset="0.301667" stopColor="#34C759" />
                <stop offset="1" stopColor="#00FFFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Special Price!
      </p>
    </div>
  );
}

function ButtonIcon9() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon9 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfoRow() {
  return (
    <div className="content-stretch flex gap-[11.667px] items-center relative shrink-0 w-full" data-name="Product Info Row">
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame57 />
        <Frame114 />
        <Frame59 />
      </div>
      <ProductImageContainer />
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame115 />
        <Frame60 />
        <Frame116 />
        <Frame62 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">DCInterconnect</p>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        CRM
      </p>
      <Button12 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group38 />
      <Group39 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group54 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Layanan Data Centre Interconnect merupakan layanan komunikasi data Digital Leased Line antar data centre yang didukung oleh jaringan full...
      </p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 100.000
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame94 />
      <Frame64 />
      <Frame130 />
    </div>
  );
}

function Persentage5() {
  return (
    <div className="relative shrink-0 size-[3.111px]" data-name="persentage">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.11111" preserveAspectRatio="none" viewBox="0 0 3.11111 3.11111" width="3.11111">
        <g id="persentage">
          <rect fill="url(#paint0_linear_0_991)" height="3.11111" rx="1.55556" width="3.11111" />
          <path d={svgPaths.p24d78300} fill="#FEFEFE" id="%" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_991" x1="0.972222" x2="2.65741" y1="1.87963" y2="0.388889">
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center opacity-0 px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <Persentage5 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Promo Available
      </p>
    </div>
  );
}

function ButtonIcon10() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon10 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[19.444px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.333px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">Version 2.0</p>
      </div>
    </div>
  );
}

function ProductVendorColumn1() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]" data-name="Product Vendor Column">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.278px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        DataBandwith
      </p>
      <Button13 />
    </div>
  );
}

function ProductTitleRow1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Product Title Row">
      <ProductVendorColumn1 />
      <div className="h-[3.5px] relative shrink-0 w-[27.632px]" data-name="SpaceX_logo_black.svg (1) 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSpaceXLogoBlackSvg12} />
      </div>
    </div>
  );
}

function ProductDescriptionContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Description Container">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.722px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        The more a company’s business develops, the more complex its IT infrastructure required eventually becomes. Lintasarta Cloud Services offers solutition...
      </p>
    </div>
  );
}

function ProductInfoColumn1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-end left-[4.67px] top-[4.67px] w-[68.444px]" data-name="Product Info Column">
      <ProductTitleRow1 />
      <ProductDescriptionContainer1 />
      <p className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.278px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 300.000
      </p>
    </div>
  );
}

function ButtonIcon11() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[9.722px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[9.722px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="Shopping Cart Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]" data-name="Button Container">
      <ButtonIcon11 />
      <div className="bg-[#0648ff] relative rounded-[100px] shrink-0 w-[57.556px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductImageContainer1() {
  return (
    <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[1.556px] shrink-0 w-[77.778px]" data-name="Product Image Container">
      <ProductInfoColumn1 />
      <ButtonContainer1 />
    </div>
  );
}

function Rocket3() {
  return (
    <div className="overflow-clip relative rounded-[40px] shrink-0 size-[3.111px]" style={{ backgroundImage: "linear-gradient(80.84389685942004deg, rgb(6, 72, 255) 30.167%, rgb(0, 178, 255) 100%)" }} data-name="rocket">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.06px)] size-[1.815px] top-[calc(50%-0.06px)]" data-name="maki:rocket">
        <div className="absolute inset-[13.33%_13.33%_0.74%_0.73%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.55941" preserveAspectRatio="none" viewBox="0 0 1.55953 1.55941" width="1.55953">
            <path d={svgPaths.p81a1380} fill="#FEFEFE" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="absolute bg-[#ddf0ff] content-stretch flex gap-[1.556px] items-center left-[23.53px] px-[2.722px] rounded-bl-[4.667px] top-0 w-[26.25px]">
      <Rocket3 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#0648ff] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Free Trial
      </p>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">DCInterconnect</p>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        CRM
      </p>
      <Button14 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group40 />
      <Group41 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group55 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Layanan Data Centre Interconnect merupakan layanan komunikasi data Digital Leased Line antar data centre yang didukung oleh jaringan full...
      </p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 100.000
      </p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame97 />
      <Frame68 />
      <Frame131 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center opacity-0 px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <div className="overflow-clip relative shrink-0 size-[3.111px]" data-name="flash_on">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_32.26%_13.96%_29.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.41748" preserveAspectRatio="none" viewBox="0 0 1.20018 2.41748" width="1.20018">
            <path d={svgPaths.p2cb47200} fill="url(#paint0_linear_0_1169)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1169" x1="0.0774812" x2="1.46224" y1="3.38577" y2="3.27496">
                <stop offset="0.301667" stopColor="#34C759" />
                <stop offset="1" stopColor="#00FFFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Special Price!
      </p>
    </div>
  );
}

function ButtonIcon12() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon12 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfoRow1() {
  return (
    <div className="content-stretch flex gap-[11.667px] items-center relative shrink-0 w-full" data-name="Product Info Row">
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame63 />
        <Frame117 />
        <Frame65 />
      </div>
      <ProductImageContainer1 />
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame118 />
        <Frame67 />
        <Frame119 />
        <Frame69 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">Version 2.0</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        AI Talent Management
      </p>
      <Button15 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group42 />
      <Group43 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group56 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame101 />
      <Frame102 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        The more a company’s business develops, the more complex its IT infrastructure required eventually
      </p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 500.000
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame100 />
      <Frame71 />
      <Frame132 />
    </div>
  );
}

function Persentage6() {
  return (
    <div className="relative shrink-0 size-[3.111px]" data-name="persentage">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.11111" preserveAspectRatio="none" viewBox="0 0 3.11111 3.11111" width="3.11111">
        <g id="persentage">
          <rect fill="url(#paint0_linear_0_991)" height="3.11111" rx="1.55556" width="3.11111" />
          <path d={svgPaths.p24d78300} fill="#FEFEFE" id="%" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_991" x1="0.972222" x2="2.65741" y1="1.87963" y2="0.388889">
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame120() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center opacity-0 px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <Persentage6 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Promo Available
      </p>
    </div>
  );
}

function ButtonIcon13() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon13 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">Version 2.0</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Talent DNA
      </p>
      <Button16 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group44 />
      <Group45 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group57 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        TalentDNA mengungkap algoritma perilaku manusia. Kami memahami, bahwa setiap orang itu unik dan berbeda.
      </p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 500.000
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame103 />
      <Frame74 />
      <Frame133 />
    </div>
  );
}

function Persentage7() {
  return (
    <div className="relative shrink-0 size-[3.111px]" data-name="persentage">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.11111" preserveAspectRatio="none" viewBox="0 0 3.11111 3.11111" width="3.11111">
        <g id="persentage">
          <rect fill="url(#paint0_linear_0_991)" height="3.11111" rx="1.55556" width="3.11111" />
          <path d={svgPaths.p24d78300} fill="#FEFEFE" id="%" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_991" x1="0.972222" x2="2.65741" y1="1.87963" y2="0.388889">
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame121() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <Persentage7 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Promo Available
      </p>
    </div>
  );
}

function ButtonIcon14() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon14 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Rocket4() {
  return (
    <div className="overflow-clip relative rounded-[40px] shrink-0 size-[3.111px]" style={{ backgroundImage: "linear-gradient(80.84389685942004deg, rgb(6, 72, 255) 30.167%, rgb(0, 178, 255) 100%)" }} data-name="rocket">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.06px)] size-[1.815px] top-[calc(50%-0.06px)]" data-name="maki:rocket">
        <div className="absolute inset-[13.33%_13.33%_0.74%_0.73%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.55941" preserveAspectRatio="none" viewBox="0 0 1.55953 1.55941" width="1.55953">
            <path d={svgPaths.p81a1380} fill="#FEFEFE" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="absolute bg-[#ddf0ff] content-stretch flex gap-[1.556px] items-center left-[23.53px] px-[2.722px] rounded-bl-[4.667px] top-0 w-[26.25px]">
      <Rocket4 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#0648ff] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Free Trial
      </p>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#ddf0ff] content-stretch flex items-center justify-center px-[1.944px] py-[0.389px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0648ff] text-[2.33px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[4.278px]">Version 2.0</p>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[1.556px] items-start relative shrink-0 w-[31.889px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[5.833px] min-w-full relative shrink-0 text-[#001332] text-[4.28px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Talent DNA
      </p>
      <Button17 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[49.21%_24.3%_39.02%_9.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.464" preserveAspectRatio="none" viewBox="0 0 8.20587 1.464" width="8.20587">
        <g id="Group">
          <path d={svgPaths.p248907f0} fill="#001332" id="Vector" />
          <path d={svgPaths.pbe97200} fill="#001332" id="Vector_2" />
          <path d={svgPaths.p32fd14c0} fill="#001332" id="Vector_3" />
          <path d={svgPaths.p2fb36200} fill="#001332" id="Vector_4" />
          <path d={svgPaths.pf460d00} fill="#001332" id="Vector_5" />
          <path d={svgPaths.p3e647300} fill="#001332" id="Vector_6" />
          <path d={svgPaths.p13dc7b00} fill="#001332" id="Vector_7" />
          <path d={svgPaths.p2dc8c500} fill="#001332" id="Vector_8" />
          <path d={svgPaths.p7a27700} fill="#001332" id="Vector_9" />
          <path d={svgPaths.p3978e100} fill="#001332" id="Vector_10" />
          <path d={svgPaths.pbc7b500} fill="#001332" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[39.02%_8.97%_47.42%_77.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.68733" preserveAspectRatio="none" viewBox="0 0 1.6874 1.68733" width="1.6874">
        <g id="Group">
          <path d={svgPaths.p402dc00} fill="#0648FF" id="Vector" />
          <path d={svgPaths.p1d4a4e00} fill="url(#paint0_linear_0_1001)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1001" x1="0.15603" x2="0.73428" y1="1.77733" y2="0.775803">
            <stop stopColor="#0648FF" />
            <stop offset="0.18" stopColor="#0468FF" />
            <stop offset="0.41" stopColor="#0289FF" />
            <stop offset="0.63" stopColor="#01A1FF" />
            <stop offset="0.83" stopColor="#00B0FF" />
            <stop offset="1" stopColor="#00B5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents inset-[39.02%_8.97%_39.02%_9.76%]">
      <Group46 />
      <Group47 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="relative shrink-0 size-[12.444px]">
      <div className="absolute bg-[#f6f7f8] left-0 rounded-[6.244px] size-[12.444px] top-0" />
      <Group58 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[4.667px] relative shrink-0 text-[#6b7b8c] text-[2.72px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        TalentDNA mengungkap algoritma perilaku manusia. Kami memahami, bahwa setiap orang itu unik dan berbeda.
      </p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[1.556px] items-center relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[2.722px] relative shrink-0 text-[#6b7b8c] text-[1.94px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Starting from
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[5.833px] relative shrink-0 text-[#001332] text-[4.28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        IDR 500.000
      </p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.722px] items-start left-[4.67px] top-[4.67px] w-[68.444px]">
      <Frame106 />
      <Frame77 />
      <Frame134 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center px-[2.722px] right-0 rounded-bl-[4.667px] top-0">
      <div className="overflow-clip relative shrink-0 size-[3.111px]" data-name="flash_on">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_32.26%_13.96%_29.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.41748" preserveAspectRatio="none" viewBox="0 0 1.20018 2.41748" width="1.20018">
            <path d={svgPaths.p2cb47200} fill="url(#paint0_linear_0_1169)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1169" x1="0.0774812" x2="1.46224" y1="3.38577" y2="3.27496">
                <stop offset="0.301667" stopColor="#34C759" />
                <stop offset="1" stopColor="#00FFFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Special Price!
      </p>
    </div>
  );
}

function ButtonIcon15() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center justify-center p-[1.944px] relative rounded-[50px] shrink-0 size-[8.167px]" data-name="ButtonIcon">
      <div aria-hidden className="absolute border-[#6b7b8c] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[3.5px]" data-name="shopping_cart">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_12.47%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 2.91775 2.91667" width="2.91775">
            <path d={svgPaths.p3a605980} fill="#6B7B8C" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute content-stretch flex gap-[2.722px] items-center left-[4.67px] top-[45.5px] w-[68.444px]">
      <ButtonIcon15 />
      <div className="bg-[#0648ff] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">See Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Persentage8() {
  return (
    <div className="relative shrink-0 size-[3.111px]" data-name="persentage">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.11111" preserveAspectRatio="none" viewBox="0 0 3.11111 3.11111" width="3.11111">
        <g id="persentage">
          <rect fill="url(#paint0_linear_0_1099)" height="3.11111" rx="1.55556" width="3.11111" />
          <path d={svgPaths.p3ed34b80} fill="#FEFEFE" id="%" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_1099" x1="0.972222" x2="2.65741" y1="1.87963" y2="0.388889">
            <stop stopColor="#34C759" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame124() {
  return (
    <div className="absolute bg-[#eaffef] content-stretch flex gap-[1.556px] items-center left-[46.08px] px-[2.722px] rounded-bl-[4.667px] top-0">
      <Persentage8 />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[4.278px] relative shrink-0 text-[#34c759] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Promo Available
      </p>
    </div>
  );
}

function ProductInfoRow2() {
  return (
    <div className="content-stretch flex gap-[11.667px] items-center relative shrink-0 w-full" data-name="Product Info Row">
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame70 />
        <Frame120 />
        <Frame72 />
      </div>
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame73 />
        <Frame121 />
        <Frame75 />
      </div>
      <div className="bg-[#fefefe] h-[58.333px] overflow-clip relative rounded-[8px] shrink-0 w-[77.778px]" data-name="Catalogue product">
        <Frame122 />
        <Frame76 />
        <Frame123 />
        <Frame78 />
        <Frame124 />
      </div>
    </div>
  );
}

function VoucherInfoContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.667px] items-start left-[11.67px] top-[35.39px] w-[256.667px]" data-name="Voucher Info Container">
      <VoucherInfoRow />
      <ProductInfoRow />
      <ProductInfoRow1 />
      <ProductInfoRow2 />
    </div>
  );
}

function TabLabelContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tab Label Container">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#556272] text-[3.111px] whitespace-nowrap">
        <p className="leading-[4.278px]">For you</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[2.722px] relative rounded-[0.389px] shrink-0 w-full" data-name="Button">
      <TabLabelContainer />
    </div>
  );
}

function TabItemContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tab Item Container">
      <Button18 />
      <div className="bg-[#0648ff] h-[0.778px] relative rounded-tl-[1.556px] rounded-tr-[1.556px] shrink-0 w-full" data-name="Tab Indicator" />
    </div>
  );
}

function TabLabelContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tab Label Container">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b3bcc6] text-[3.111px] whitespace-nowrap">
        <p className="leading-[4.278px]">Recommendations</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[2.722px] relative rounded-[0.389px] shrink-0 w-full" data-name="Button">
      <TabLabelContainer1 />
    </div>
  );
}

function TabItemContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tab Item Container">
      <Button19 />
      <div className="bg-[#8a98a6] h-[0.778px] opacity-0 relative rounded-tl-[1.556px] rounded-tr-[1.556px] shrink-0 w-full" />
    </div>
  );
}

function TabLabelContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tab Label Container">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b3bcc6] text-[3.111px] whitespace-nowrap">
        <p className="leading-[4.278px]">Best seller</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[2.722px] relative rounded-[0.389px] shrink-0 w-full" data-name="Button">
      <TabLabelContainer2 />
    </div>
  );
}

function TabItemContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tab Item Container">
      <Button20 />
      <div className="bg-[#8a98a6] h-[0.778px] opacity-0 relative rounded-tl-[1.556px] rounded-tr-[1.556px] shrink-0 w-full" />
    </div>
  );
}

function TabLabelContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tab Label Container">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b3bcc6] text-[3.111px] whitespace-nowrap">
        <p className="leading-[4.278px]">API</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[2.722px] relative rounded-[0.389px] shrink-0 w-full" data-name="Button">
      <TabLabelContainer3 />
    </div>
  );
}

function TabItemContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tab Item Container">
      <Button21 />
      <div className="bg-[#8a98a6] h-[0.778px] opacity-0 relative rounded-tl-[1.556px] rounded-tr-[1.556px] shrink-0 w-full" />
    </div>
  );
}

function TabLabelContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tab Label Container">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b3bcc6] text-[3.111px] whitespace-nowrap">
        <p className="leading-[4.278px]">Software</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[2.722px] relative rounded-[0.389px] shrink-0 w-full" data-name="Button">
      <TabLabelContainer4 />
    </div>
  );
}

function TabItemContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tab Item Container">
      <Button22 />
      <div className="bg-[#8a98a6] h-[0.778px] opacity-0 relative rounded-tl-[1.556px] rounded-tr-[1.556px] shrink-0 w-full" />
    </div>
  );
}

function TabLabelContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tab Label Container">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b3bcc6] text-[3.111px] whitespace-nowrap">
        <p className="leading-[4.278px]">Connectivity</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[2.722px] relative rounded-[0.389px] shrink-0 w-full" data-name="Button">
      <TabLabelContainer5 />
    </div>
  );
}

function TabItemContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tab Item Container">
      <Button23 />
      <div className="bg-[#8a98a6] h-[0.778px] opacity-0 relative rounded-tl-[1.556px] rounded-tr-[1.556px] shrink-0 w-full" />
    </div>
  );
}

function ProductTabs() {
  return (
    <div className="content-stretch flex gap-[4.667px] items-center relative shrink-0 w-full" data-name="Product Tabs">
      <TabItemContainer />
      <TabItemContainer1 />
      <TabItemContainer2 />
      <TabItemContainer3 />
      <TabItemContainer4 />
      <TabItemContainer5 />
    </div>
  );
}

function ProductInfoContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[0.778px] items-start left-[11.67px] top-[11.67px]" data-name="Product Info Container">
      <p className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] font-bold leading-[7.778px] relative shrink-0 text-[#001332] text-[5.444px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Explore our products
      </p>
      <ProductTabs />
    </div>
  );
}

function Section13() {
  return (
    <div className="bg-[#f6f7f8] h-[330.167px] overflow-clip relative shrink-0 w-[280px]" data-name="Section">
      <VoucherInfoContainer />
      <ProductInfoContainer />
      <div className="-translate-x-1/2 absolute left-1/2 rounded-[100px] top-[310.33px] w-[31.889px]" data-name="Button">
        <div aria-hidden className="absolute border-[#eaecef] border-[0.194px] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[2.333px] py-[1.944px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7b8c] text-[2.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[4.278px]">Load more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home1() {
  return (
    <div className="absolute bg-[rgba(233,237,240,0.72)] content-stretch flex flex-col items-start left-[50px] p-[2px] rounded-[7px] top-[12px]" data-name="Home">
      <div className="bg-white h-[10px] overflow-clip relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[280px]" data-name="Search Bar">
        <Frame13 />
      </div>
      <Screen1 />
      <Section13 />
    </div>
  );
}

function Image() {
  return (
    <div className="bg-[#011534] h-[206px] overflow-clip relative shrink-0 w-[482px]" data-name="image">
      <div className="absolute left-[362px] size-[195px] top-[-88px]">
        <div className="absolute inset-[-64.1%]">
          <svg className="block size-full" fill="none" height="445" preserveAspectRatio="none" viewBox="0 0 445 445" width="445">
            <g filter="url(#filter0_f_0_1035)" id="Ellipse 3">
              <circle cx="222.5" cy="222.5" fill="#72CEFF" r="97.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="445" id="filter0_f_0_1035" width="445" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_1035" stdDeviation="62.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[-143px] size-[374px] top-[132px]">
        <div className="absolute inset-[-34.76%]">
          <svg className="block size-full" fill="none" height="634" preserveAspectRatio="none" viewBox="0 0 634 634" width="634">
            <g filter="url(#filter0_f_0_1074)" id="Ellipse 2">
              <circle cx="317" cy="317" fill="#DEE7FF" r="187" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="634" id="filter0_f_0_1074" width="634" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_1074" stdDeviation="65" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Home />
      <Home1 />
    </div>
  );
}

function MockupFrame() {
  return (
    <div className="bg-[#f1f3f5] h-[230px] relative rounded-[12px] shrink-0 w-full" data-name="mockup-frame">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Image />
        <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="Website" />
      </div>
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Frame">
      <Frame11 />
      <MockupFrame />
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col h-[390px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="project card">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame10 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] min-w-px overflow-hidden relative text-[#1a1d20] text-[18px] text-ellipsis">Lampu: Lintasarta Marketplace Universe</p>
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px]">2024</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame21 />
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold h-[31px] leading-[16px] overflow-hidden relative shrink-0 text-[#6c757d] text-[12px] text-ellipsis w-[325px]">Connecting sellers and buyers for digital product and service transactions</p>
    </div>
  );
}

function TagContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Tag Container">
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="Marketplace" />
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="B2B" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame135 />
      <TagContainer1 />
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute inset-[13.04%_5.86%_13.04%_5.88%]">
      <svg className="absolute block inset-0 size-full" fill="none" height="68.0004" preserveAspectRatio="none" viewBox="0 0 180.051 68.0004" width="180.051">
        <g id="Group 460">
          <path d={svgPaths.p4aced00} fill="white" id="Vector" />
          <path d={svgPaths.p9769800} fill="white" id="Vector_2" />
          <path d={svgPaths.p916dcf0} fill="white" id="Vector_3" />
          <path d={svgPaths.p2394c180} fill="white" id="Vector_4" />
          <path d={svgPaths.p823a200} fill="url(#paint0_linear_0_970)" id="Vector_5" />
          <g id="Group">
            <path d={svgPaths.p154d6e00} fill="#DDDDDD" id="Vector_6" />
            <path d={svgPaths.p18bf7150} fill="#DDDDDD" id="Vector_7" />
            <path d={svgPaths.pe708100} fill="#DDDDDD" id="Vector_8" />
            <path d={svgPaths.p11b88a00} fill="#DDDDDD" id="Vector_9" />
            <path d={svgPaths.p1ea31300} fill="#DDDDDD" id="Vector_10" />
            <path d={svgPaths.p3fda7900} fill="#DDDDDD" id="Vector_11" />
            <path d={svgPaths.p1cd7cb80} fill="#DDDDDD" id="Vector_12" />
            <path d={svgPaths.p86cc680} fill="#DDDDDD" id="Vector_13" />
            <path d={svgPaths.p387bbea0} fill="#DDDDDD" id="Vector_14" />
            <path d={svgPaths.p1df82340} fill="#DDDDDD" id="Vector_15" />
            <path d={svgPaths.p2b2eab00} fill="#DDDDDD" id="Vector_16" />
            <path d={svgPaths.p325d0fb2} fill="#DDDDDD" id="Vector_17" />
          </g>
          <path d={svgPaths.p32903100} fill="white" id="Vector_18" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_970" x1="181.925" x2="168.265" y1="-7.62042" y2="14.0932">
            <stop stopColor="#004BFF" />
            <stop offset="0.18" stopColor="#0069FF" />
            <stop offset="0.41" stopColor="#008AFF" />
            <stop offset="0.63" stopColor="#00A2FF" />
            <stop offset="0.83" stopColor="#00B1FF" />
            <stop offset="1" stopColor="#00B6FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LogoLampuWhiteColor() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[92px] left-1/2 overflow-clip top-1/2 w-[204px]" data-name="Logo Lampu-White Color">
      <Group59 />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#011534] h-[206px] overflow-clip relative shrink-0 w-[482px]" data-name="image">
      <div className="absolute left-[-143px] size-[374px] top-[132px]">
        <div className="absolute inset-[-34.76%]">
          <svg className="block size-full" fill="none" height="634" preserveAspectRatio="none" viewBox="0 0 634 634" width="634">
            <g filter="url(#filter0_f_0_892)" id="Ellipse 2">
              <circle cx="317" cy="317" fill="#0648FF" r="187" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="634" id="filter0_f_0_892" width="634" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_892" stdDeviation="65" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[362px] size-[195px] top-[-88px]">
        <div className="absolute inset-[-64.1%]">
          <svg className="block size-full" fill="none" height="445" preserveAspectRatio="none" viewBox="0 0 445 445" width="445">
            <g filter="url(#filter0_f_0_1021)" id="Ellipse 3">
              <circle cx="222.5" cy="222.5" fill="#0648FF" r="97.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="445" id="filter0_f_0_1021" width="445" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_1021" stdDeviation="62.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <LogoLampuWhiteColor />
    </div>
  );
}

function MockupFrame1() {
  return (
    <div className="bg-[#f1f3f5] h-[230px] relative rounded-[12px] shrink-0 w-full" data-name="mockup-frame">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Image1 />
        <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="Website" />
      </div>
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Frame">
      <Frame20 />
      <MockupFrame1 />
    </div>
  );
}

function ProjectCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col h-[390px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="project card">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame19 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ProjectCard />
      <ProjectCard1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] min-w-px overflow-hidden relative text-[#1a1d20] text-[18px] text-ellipsis">Octobits: SaaS Management Platform</p>
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px]">2024</p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap">
      <Frame25 />
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[16px] overflow-hidden relative shrink-0 text-[#6c757d] text-[12px] text-ellipsis w-full">Simplify the customer journey for seamless IT integration.</p>
    </div>
  );
}

function TagContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Tag Container">
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="SaaS" />
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="Dashboard" />
      <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="B2B" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame137 />
      <TagContainer2 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[23.79%_40.25%_23.5%_40.25%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="108.588" preserveAspectRatio="none" viewBox="0 0 94 108.588" width="94">
        <g id="Group">
          <path d={svgPaths.pe656580} fill="black" id="Vector" />
          <path d={svgPaths.p85d580} fill="url(#paint0_linear_0_948)" id="Vector_2" />
          <path d={svgPaths.p1150e400} fill="black" id="Vector_3" />
          <path d={svgPaths.p4291070} fill="black" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_948" x1="46.9977" x2="46.9977" y1="-20.8979" y2="135.36">
            <stop stopColor="#CCE0F4" />
            <stop offset="0.00119511" stopColor="#CED7F4" />
            <stop offset="0.00318393" stopColor="#D4BDF6" />
            <stop offset="0.00572162" stopColor="#DD94F8" />
            <stop offset="0.00870768" stopColor="#EB5AFB" />
            <stop offset="0.0120365" stopColor="#FB11FE" />
            <stop offset="0.0127796" stopColor="#FF00FF" />
            <stop offset="0.9944" stopColor="#0071BC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#eeedff] h-[206px] overflow-clip relative shrink-0 w-[482px]" data-name="image">
      <Group48 />
    </div>
  );
}

function MockupFrame2() {
  return (
    <div className="bg-[#f1f3f5] h-[230px] relative rounded-[12px] shrink-0 w-full" data-name="mockup-frame">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Image2 />
        <CategoryBadge className="bg-[#f1f3f5] relative rounded-[12px] shrink-0" label="Website" />
      </div>
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Frame">
      <Frame24 />
      <MockupFrame2 />
    </div>
  );
}

function ProjectCard2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col h-[390px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="project card">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame23 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] min-w-px overflow-hidden relative text-[#1a1d20] text-[18px] text-ellipsis">{`Lampu V2: Connectivity Integration `}</p>
      <p className="font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[transparent]">2024</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame28 />
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[16px] overflow-hidden relative shrink-0 text-[#6c757d] text-[12px] text-ellipsis w-full">Seamless connectivity integration for unified digital ecosystems</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[32px]" data-name="icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[45.83%_20.83%_12.5%_20.83%] rounded-[2px]" data-name="Rectangle">
          <div aria-hidden className="absolute border-[#1a1d20] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[2.75px]" />
        </div>
        <div className="absolute inset-[62.5%_45.83%_29.17%_45.83%]" data-name="Oval">
          <div className="absolute inset-[-28.12%_-28.13%_-28.13%_-28.12%]">
            <svg className="block size-full" fill="none" height="4.16667" preserveAspectRatio="none" viewBox="0 0 4.16667 4.16667" width="4.16667">
              <circle cx="2.08333" cy="2.08333" id="Oval" r="1.33333" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Path">
          <div className="absolute inset-[-7.03%]">
            <svg className="block size-full" fill="none" height="12.1667" preserveAspectRatio="none" viewBox="0 0 12.1667 12.1667" width="12.1667">
              <path d={svgPaths.p2988cac0} id="Path" stroke="#1A1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Fragment_Mono:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6c757d] text-[14px] whitespace-nowrap">Coming Soon</p>
    </div>
  );
}

function MockupFrame3() {
  return (
    <div className="bg-[#f1f3f5] h-[230px] relative rounded-[12px] shrink-0 w-full" data-name="mockup-frame">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame29 />
      </div>
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Frame">
      <Frame27 />
      <MockupFrame3 />
    </div>
  );
}

function ProjectCardBobocabinSelfCheckInKiosk() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col h-[390px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="project-card-bobocabin-self-check-in-kiosk">
      <div aria-hidden className="absolute border border-[#e9edf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame26 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ProjectCard2 />
      <ProjectCardBobocabinSelfCheckInKiosk />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame9 />
      <Frame22 />
    </div>
  );
}

function ContentScrollArea() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start px-[80px] py-[40px] relative shrink-0 w-full" data-name="content-scroll-area">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="main-container">
      <TopHeaderBar />
      <ContentScrollArea />
    </div>
  );
}

export default function HomeDashboard() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex items-start relative size-full" data-name="home-dashboard">
      <Sidebar />
      <MainContainer />
    </div>
  );
}