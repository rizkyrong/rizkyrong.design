function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative text-white" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[18px] whitespace-nowrap">Explore Product Categories</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[14px] w-[min-content]">Explore product categories by product type and industry, making it easy to find the right solution for buyer needs.</p>
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
    <div className="bg-[#f8f9fa] h-[488px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 absolute bottom-[-100.38px] h-[438.375px] left-1/2 rounded-[17.569px] w-[640px]" data-name="guide menu home">
        <div className="absolute inset-0 overflow-hidden rounded-[17.569px]" />
      </div>
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
    <div className="bg-black content-stretch flex flex-col items-start p-[80px] relative size-full" data-name="my-order-section">
      <Frame />
    </div>
  );
}