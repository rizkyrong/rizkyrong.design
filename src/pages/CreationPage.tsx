import { useNavigate } from "react-router";
import { Sidebar, TopHeaderBar } from "@/imports/HomeDashboard/index";

const galleryItems = [
  { src: "/assets/design-exploration-1.jpg", alt: "Musketeer digital agency website exploration" },
  { src: "/assets/design-exploration-2.jpg", alt: "You Are Stellar job marketplace exploration" },
  { src: "/assets/design-exploration-4.jpg", alt: "Prasasti responsive website exploration" },
  { src: "/assets/design-exploration-3.jpg", alt: "Mobile learning platform exploration" },
  { src: "/assets/design-exploration-5.jpg", alt: "Better Living Solutions website exploration" },
  { src: "/assets/design-exploration-6.jpg", alt: "Arsitag property marketplace exploration" },
];

export function CreationPage() {
  return (
    <div className="flex min-h-full bg-[#f8f9fa] text-[#1a1d20]">
      <Sidebar className="creation-page-sidebar" />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <TopHeaderBar />
        <section className="creation-page-content px-20 py-11">
          <div className="mb-8">
            <h1 className="font-['Geist:Bold',sans-serif] text-[34px] leading-[42px] tracking-[-0.03em]">Exploration Gallery</h1>
            <p className="mt-1 font-['Geist:Regular',sans-serif] text-[16px] text-[#6c757d]">Visuals made with care and experience.</p>
          </div>
          <div className="creation-page-gallery grid grid-cols-2 gap-6">
            {galleryItems.map((item) => (
              <div className="group relative aspect-[981/768] overflow-hidden rounded-[16px] bg-transparent" key={item.src}>
                <img alt={item.alt} className="block h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" src={item.src} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreationPage;
