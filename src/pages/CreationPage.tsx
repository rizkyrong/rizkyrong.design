import { Sidebar, TopHeaderBar } from "@/imports/HomeDashboard/index";

const galleryItems = [
  {
    src: "/assets/design-exploration-1.jpg",
    alt: "Musketeer digital agency website exploration",
    title: "Musketeer",
    category: "Digital studio",
    description: "A bold portfolio direction for a product development team.",
  },
  {
    src: "/assets/design-exploration-2.jpg",
    alt: "You Are Stellar job marketplace exploration",
    title: "You Are Stellar",
    category: "Career platform",
    description: "A friendly, expressive experience for discovering better work.",
  },
  {
    src: "/assets/design-exploration-4.jpg",
    alt: "Prasasti responsive website exploration",
    title: "Prasasti",
    category: "Research platform",
    description: "Editorial layouts that make research feel clear and approachable.",
  },
  {
    src: "/assets/design-exploration-3.jpg",
    alt: "Mobile learning platform exploration",
    title: "PX Learning",
    category: "Mobile product",
    description: "A practical learning flow designed for progress on the go.",
  },
  {
    src: "/assets/design-exploration-5.jpg",
    alt: "Better Living Solutions website exploration",
    title: "Better Living",
    category: "Service website",
    description: "A warm, accessible digital home for better living solutions.",
  },
  {
    src: "/assets/design-exploration-6.jpg",
    alt: "Arsitag property marketplace exploration",
    title: "Arsitag",
    category: "Marketplace",
    description: "A trusted home for finding the right design and build partner.",
  },
];

export function CreationPage() {
  return (
    <div className="flex min-h-full bg-[#f8f9fa] text-[#1a1d20]">
      <Sidebar className="creation-page-sidebar" />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <TopHeaderBar />
        <section className="creation-page-content px-5 py-8 sm:px-8 sm:py-10 lg:px-20 lg:py-11">
          <div className="mb-8 max-w-[680px] sm:mb-10">
            <p className="mb-3 font-['Fragment Mono:Regular',monospace] text-[11px] uppercase tracking-[0.16em] text-[#7f8790]">
              Selected work / 2024-2025
            </p>
            <h1 className="font-['Geist:Bold',sans-serif] text-[34px] leading-[42px] tracking-[-0.03em] sm:text-[42px] sm:leading-[48px]">
              Exploration Gallery
            </h1>
            <p className="mt-3 max-w-[560px] font-['Geist:Regular',sans-serif] text-[16px] leading-7 text-[#6c757d]">
              A collection of interfaces, identities, and digital experiences made with care and experience.
            </p>
          </div>
          <div className="creation-page-gallery grid gap-8 md:grid-cols-2">
            {galleryItems.map((item, index) => (
              <article className="group min-w-0" key={item.src}>
                <div className="relative overflow-hidden rounded-[18px] bg-[#eef0f2] shadow-[0_10px_30px_rgba(26,29,32,0.06)] ring-1 ring-[#1a1d20]/[0.06]">
                  <img
                    alt={item.alt}
                    className="block aspect-[981/768] h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.025]"
                    decoding="async"
                    fetchPriority={index < 2 ? "high" : "auto"}
                    loading={index < 2 ? "eager" : "lazy"}
                    src={item.src}
                  />
                </div>
                <div className="flex items-start justify-between gap-5 px-1 pt-4">
                  <div>
                    <p className="font-['Geist:SemiBold',sans-serif] text-[17px] leading-6">{item.title}</p>
                    <p className="mt-1 font-['Geist:Regular',sans-serif] text-[14px] leading-5 text-[#6c757d]">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 pt-1 font-['Fragment Mono:Regular',monospace] text-[10px] uppercase tracking-[0.08em] text-[#8a9198]">
                    {item.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreationPage;
