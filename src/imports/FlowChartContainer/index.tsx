function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full">Visit Lampu Marketplace</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full whitespace-pre-wrap">{`Explore product & choose  product`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full">{`Checkout & Payment`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame5 />
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="80"
      height="20"
      viewBox="0 0 80 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <line x1="0" y1="10" x2="66" y2="10" stroke="#007aff" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="60,4 80,10 60,16" fill="#007aff" />
    </svg>
  );
}

export default function FlowChartContainer() {
  return (
    <div className="bg-[rgba(0,122,255,0.15)] border border-[#007aff] border-solid content-stretch flex gap-[22px] items-center justify-center p-[32px] relative rounded-[24px] size-full" data-name="Flow Chart Container">
      <Frame />
      <Arrow />
      <Frame2 />
      <Arrow />
      <Frame4 />
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
