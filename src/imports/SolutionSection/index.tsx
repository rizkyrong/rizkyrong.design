import imgScreenViewport from "./3455f93b8f5bf9365b748b04773198831456c09f.png";
import imgScreenViewport1 from "./7c4e1a1952c3b503fde3b11445081da2daf959f1.png";
import imgScreenViewport2 from "./cf4b51c642dbdd184e03178f3864b2d14f76add0.png";
import imgLaptopScreen from "@/imports/CaseStudyLampu-1/9568d892d13658b7d8481f72e547aedc6757b384.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">{`Checkout & Payment`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Complete your purchase securely with flexible payment options, order review, and seamless checkout.</p>
    </div>
  );
}

function CameraSensorArray() {
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

function AppMain() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[14.719px] relative" data-name="app-main" />;
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
    <div className="h-[407.219px] relative rounded-[13.492px] shrink-0 w-[605.922px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.492px]">
        <img alt="" className="absolute h-[137.82%] left-[-0.04%] max-w-none top-[0.01%] w-full" src={imgScreenViewport} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame />
        <div className="absolute border-[1.84px] border-[rgba(0,0,0,0.38)] border-solid h-[407.219px] left-0 rounded-[13.492px] top-0 w-[605.922px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.613px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[13.492px]" />
    </div>
  );
}

function IpadProChassis() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#1d2023] content-stretch drop-shadow-[0px_4.906px_7.359px_rgba(0,0,0,0.12)] flex flex-col h-[429.297px] items-center justify-center left-[-340px] p-[11.039px] rounded-[24.531px] top-[calc(50%+0.15px)] w-[628px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.227px] border-solid inset-0 pointer-events-none rounded-[24.531px]" />
      <div className="absolute border-[#111214] border-[2.453px] border-solid h-[429.297px] left-0 rounded-[24.531px] top-0 w-[628px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray />
      <ScreenViewport />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f1f3f5] flex-[1_0_0] h-[565px] min-w-px overflow-clip relative rounded-[8px]" data-name="Container">
      <IpadProChassis />
    </div>
  );
}

function CameraSensorArray1() {
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

function AppMain1() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[14.719px] relative" data-name="app-main" />;
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
    <div className="h-[407.219px] relative rounded-[13.492px] shrink-0 w-[605.922px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.492px]">
        <img alt="" className="absolute h-[137.82%] left-[-0.04%] max-w-none top-[0.01%] w-full" src={imgScreenViewport1} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame1 />
        <div className="absolute border-[1.84px] border-[rgba(0,0,0,0.38)] border-solid h-[407.219px] left-0 rounded-[13.492px] top-0 w-[605.922px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.613px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[13.492px]" />
    </div>
  );
}

function IpadProChassis1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#1d2023] content-stretch drop-shadow-[0px_4.906px_7.359px_rgba(0,0,0,0.12)] flex flex-col h-[429.297px] items-center justify-center left-[-340px] p-[11.039px] rounded-[24.531px] top-[calc(50%+0.15px)] w-[628px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.227px] border-solid inset-0 pointer-events-none rounded-[24.531px]" />
      <div className="absolute border-[#111214] border-[2.453px] border-solid h-[429.297px] left-0 rounded-[24.531px] top-0 w-[628px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray1 />
      <ScreenViewport1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f1f3f5] flex-[1_0_0] h-[565px] min-w-px overflow-clip relative rounded-[8px]" data-name="Container">
      <IpadProChassis1 />
    </div>
  );
}

function CameraSensorArray2() {
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

function AppMain2() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px p-[14.719px] relative" data-name="app-main" />;
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
    <div className="h-[407.219px] relative rounded-[13.492px] shrink-0 w-[605.922px]" data-name="screen-viewport">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.492px]">
        <img alt="" className="absolute h-[137.82%] left-[-0.04%] max-w-none top-[0.01%] w-full" src={imgScreenViewport2} />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <DashboardAppFrame2 />
        <div className="absolute border-[1.84px] border-[rgba(0,0,0,0.38)] border-solid h-[407.219px] left-0 rounded-[13.492px] top-0 w-[605.922px]" data-name="screen-ambient-depth" />
      </div>
      <div aria-hidden className="absolute border-[0.613px] border-[rgba(0,0,0,0.88)] border-solid inset-0 pointer-events-none rounded-[13.492px]" />
    </div>
  );
}

function IpadProChassis2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#1d2023] content-stretch drop-shadow-[0px_4.906px_7.359px_rgba(0,0,0,0.12)] flex flex-col h-[429.297px] items-center justify-center left-[-340px] p-[11.039px] rounded-[24.531px] top-[calc(50%+0.15px)] w-[628px]" data-name="ipad-pro-chassis">
      <div aria-hidden className="absolute border-[#3a3f44] border-[1.227px] border-solid inset-0 pointer-events-none rounded-[24.531px]" />
      <div className="absolute border-[#111214] border-[2.453px] border-solid h-[429.297px] left-0 rounded-[24.531px] top-0 w-[628px]" data-name="flat-edge-ambient-occlusion" />
      <CameraSensorArray2 />
      <ScreenViewport2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f1f3f5] flex-[1_0_0] h-[565px] min-w-px overflow-clip relative rounded-[8px]" data-name="Container">
      <IpadProChassis2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

// MacBook laptop mockup — lid + screen + keyboard base
function MacBookMockup() {
  return (
    <div className="relative size-full flex flex-col items-center justify-end">
      {/* Lid */}
      <div
        className="relative flex flex-col items-center bg-[#1d2023] rounded-t-[16px] w-[92%]"
        style={{ height: "84%" }}
      >
        {/* Outer border */}
        <div aria-hidden className="absolute border-[#3a3f44] border border-solid inset-0 pointer-events-none rounded-t-[16px]" />
        {/* Inner ambient occlusion */}
        <div aria-hidden className="absolute border-[#111214] border-[2px] border-solid inset-0 pointer-events-none rounded-t-[16px]" />
        {/* Camera notch */}
        <div className="relative z-10 flex items-center justify-center w-full" style={{ height: "20px", paddingTop: "6px" }}>
          <div className="w-[6px] h-[6px] rounded-full bg-[#3a3f44]" />
        </div>
        {/* Screen bezel + content */}
        <div className="relative flex-1 w-full px-[10px] pb-[10px] overflow-hidden">
          <div className="rounded-[6px] overflow-hidden size-full bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]">
            <img
              alt="Lampu marketplace product page"
              className="w-full h-full object-cover object-top"
              src={imgLaptopScreen}
            />
          </div>
        </div>
      </div>
      {/* Hinge strip */}
      <div className="w-[95%] h-[4px] bg-[#111214] rounded-none" />
      {/* Keyboard base */}
      <div
        className="relative bg-gradient-to-b from-[#c8cacc] to-[#b0b3b8] rounded-b-[12px] w-full flex items-start justify-center"
        style={{ height: "16%" }}
      >
        <div className="w-[30%] h-[4px] bg-[#a0a3a8] rounded-b-[4px] mt-0" />
        {/* Trackpad */}
        <div
          className="absolute bottom-[16%] left-1/2 -translate-x-1/2 bg-[#b8bbbe] rounded-[4px] border border-[#a8aaad]"
          style={{ width: "20%", height: "40%" }}
        />
      </div>
      {/* Drop shadow beneath */}
      <div className="absolute bottom-0 left-[5%] right-[5%] h-[12px] bg-black/30 blur-[8px] rounded-full" />
    </div>
  );
}

function StepByStepIndicator() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Step by Step Indicator">
      <Frame />
      <Container />
      {/* MacBook mockup — fills the aspect-ratio container */}
      <div className="aspect-[1822/1248] relative rounded-[38px] shrink-0 w-full overflow-hidden" data-name="videp processing order - lampu 1">
        <MacBookMockup />
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[80px] relative size-full" data-name="solution-section">
      <StepByStepIndicator />
    </div>
  );
}
