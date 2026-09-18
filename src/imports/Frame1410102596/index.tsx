function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full">Lampu Landing Page</p>
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
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#ff3b30] text-[18px] text-center w-full whitespace-pre-wrap">{`Explore product & choose  product`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#ff3b30] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame3 />
    </div>
  );
}

function FlowChartContainer() {
  return (
    <div className="content-stretch flex gap-[124px] items-center justify-center p-[32px] relative rounded-[24px] shrink-0" data-name="Flow Chart Container">
      <Frame />
      <Frame2 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[16px] left-[563.5px] text-[#ff3b30] text-[12px] text-center top-0 w-[285px]">There are not many product types or industries.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full whitespace-pre-wrap">{`Explore product & choose  product`}</p>
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#1a1d20] text-[18px] text-center w-full">{`Checkout & Payment`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[128px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0 w-[272px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#007aff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame7 />
    </div>
  );
}

function FlowChartContainer1() {
  return (
    <div className="bg-[rgba(0,122,255,0.15)] border border-[#007aff] border-solid content-stretch flex gap-[124px] items-center justify-center p-[32px] relative rounded-[24px] shrink-0" data-name="Flow Chart Container">
      <Frame4 />
      <Frame6 />
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

export default function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[74px] items-center relative size-full">
      <FlowChartContainer />
      <FlowChartContainer1 />
    </div>
  );
}