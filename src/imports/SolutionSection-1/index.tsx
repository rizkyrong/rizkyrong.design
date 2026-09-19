import gifCheckout from "@/imports/Checkout___Payment/video_processing_order_-_lampu_1.mp4";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap">{`Checkout & Payment`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Complete your purchase securely with flexible payment options, order review, and seamless checkout.</p>
    </div>
  );
}

function PhoneCard() {
  return (
    <div className="bg-[#f1f3f5] flex-[1_0_0] h-[565px] min-w-px overflow-hidden relative rounded-[8px] flex items-center justify-center" data-name="Container">
      <div className="relative bg-[#1d2023] rounded-[32px] w-[220px] h-[460px] flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.32)]">
        <div aria-hidden className="absolute border-[#3a3f44] border border-solid inset-0 pointer-events-none rounded-[32px]" />
        <div aria-hidden className="absolute border-[#111214] border-[2px] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[60px] h-[6px] bg-[#050607] rounded-full" />
        <div className="mt-[28px] mx-[8px] mb-[8px] flex-1 w-[calc(100%-16px)] rounded-[24px] overflow-hidden bg-white">
          <video
            className="w-full h-full object-cover object-top"
            src={gifCheckout}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="mb-[10px] w-[40px] h-[4px] bg-[#3a3f44] rounded-full" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <PhoneCard />
      <PhoneCard />
      <PhoneCard />
    </div>
  );
}

function MacBookMockup() {
  return (
    <div className="relative size-full flex flex-col items-center justify-end">
      <div
        className="relative flex flex-col items-center bg-[#1d2023] rounded-t-[16px] w-[92%]"
        style={{ height: "84%" }}
      >
        <div aria-hidden className="absolute border-[#3a3f44] border border-solid inset-0 pointer-events-none rounded-t-[16px]" />
        <div aria-hidden className="absolute border-[#111214] border-[2px] border-solid inset-0 pointer-events-none rounded-t-[16px]" />
        <div className="relative z-10 flex items-center justify-center w-full" style={{ height: "20px", paddingTop: "6px" }}>
          <div className="w-[6px] h-[6px] rounded-full bg-[#3a3f44]" />
        </div>
        <div className="relative flex-1 w-full px-[10px] pb-[10px] overflow-hidden">
          <div className="rounded-[6px] overflow-hidden size-full bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]">
            <video
              className="w-full h-full object-cover object-top"
              src={gifCheckout}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
      <div className="w-[95%] h-[4px] bg-[#111214]" />
      <div
        className="relative bg-gradient-to-b from-[#c8cacc] to-[#b0b3b8] rounded-b-[12px] w-full flex items-start justify-center"
        style={{ height: "16%" }}
      >
        <div className="w-[30%] h-[4px] bg-[#a0a3a8] rounded-b-[4px]" />
        <div
          className="absolute bottom-[16%] left-1/2 -translate-x-1/2 bg-[#b8bbbe] rounded-[4px] border border-[#a8aaad]"
          style={{ width: "20%", height: "40%" }}
        />
      </div>
      <div className="absolute bottom-0 left-[5%] right-[5%] h-[12px] bg-black/30 blur-[8px] rounded-full" />
    </div>
  );
}

function StepByStepIndicator() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Step by Step Indicator">
      <Frame />
      <Container />
      <div className="relative rounded-[38px] shrink-0 w-full overflow-hidden" data-name="videp processing order - lampu 1">
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
