function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative text-[#1a1d20]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Find the Right Business Solutions</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">This platform connects buyers with relevant companies and business solutions that match their needs.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Frame">
      <Frame2 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[594px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[508.242px] left-1/2 rounded-[9.275px] top-[calc(50%+0.12px)] w-[742px]" data-name="video-fitur-lampu" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Container />
    </div>
  );
}

export default function MyOrderSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[80px] relative size-full" data-name="my-order-section">
      <Frame />
    </div>
  );
}