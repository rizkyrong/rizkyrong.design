import { useNavigate } from "react-router";

const galleryItems = [
  { src: "/assets/design-exploration-1.jpg", alt: "Musketeer digital agency website exploration", className: "bg-[#edf0f4]" },
  { src: "/assets/design-exploration-2.jpg", alt: "You Are Stellar job marketplace exploration", className: "bg-[#e9f1ff]" },
  { src: "/assets/design-exploration-4.jpg", alt: "Prasasti responsive website exploration", className: "bg-[#edf0f4]" },
  { src: "/assets/design-exploration-3.jpg", alt: "Mobile learning platform exploration", className: "bg-[#eef0f1]" },
  { src: "/assets/design-exploration-5.jpg", alt: "Better Living Solutions website exploration", className: "bg-[#fff8f2]" },
  { src: "/assets/design-exploration-6.jpg", alt: "Arsitag property marketplace exploration", className: "bg-[#edf0f4]" },
];

function Icon({ name }: { name: "home" | "about" | "creation" | "resume" | "email" | "linkedin" }) {
  const paths = {
    home: <><path d="M3 10.5 8 6l5 4.5V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3.5Z" /><path d="M6 15v-3h4v3" /></>,
    about: <><circle cx="8" cy="8" r="5.5" /><path d="M6.3 6.5a2 2 0 1 1 3.4 1.4c-.8.7-1.7.8-1.7 2" /><path d="M8 12.2h.01" /></>,
    creation: <><path d="M4 5.5 8 3l4 2.5v5L8 13l-4-2.5v-5Z" /><path d="M8 3v5m4-2.5L8 8 4 5.5" /></>,
    resume: <><path d="M4 2.5h6l2 2V13H4V2.5Z" /><path d="M10 2.5V5h2M6 7h4M6 9h4M6 11h2" /></>,
    email: <><rect x="2.5" y="3.5" width="11" height="9" rx="1.5" /><path d="m3.5 5 4.5 3 4.5-3" /></>,
    linkedin: <><rect x="2.5" y="2.5" width="11" height="11" rx="2" /><path d="M5 6v4.5M5 4.8v.01M8 10.5V7.8m0 0c.4-.8 1-1.2 1.8-1.2 1.2 0 1.7.8 1.7 2.2v1.7" /></>,
  };
  return <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Sidebar() {
  const navigate = useNavigate();
  const navItems = [
    { label: "Home", icon: "home" as const, action: () => navigate("/") },
    { label: "About", icon: "about" as const },
    { label: "Creation", icon: "creation" as const, active: true },
    { label: "Resume", icon: "resume" as const },
  ];

  return (
    <aside className="creation-page-sidebar flex w-[274px] shrink-0 flex-col border-r border-[#e9edf0] bg-white px-6 py-8">
      <button className="mb-12 flex items-center gap-3 text-left" onClick={() => navigate("/")} type="button">
        <span className="grid h-8 w-8 rotate-45 place-items-center rounded-[5px] bg-gradient-to-br from-[#152d69] via-[#6c75b9] to-[#f3c57a] shadow-[0_3px_10px_rgba(37,57,108,0.2)]">
          <span className="h-3 w-3 rounded-[2px] bg-white/80" />
        </span>
        <span>
          <span className="block font-['Geist:Medium',sans-serif] text-[14px] leading-[20px] text-[#1a1d20]">Rizky R.</span>
          <span className="block font-['Fragment_Mono:Regular',sans-serif] text-[10px] leading-[14px] text-[#6c757d]">My Portfolio</span>
        </span>
      </button>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <button className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left font-['Geist:Medium',sans-serif] text-[14px] ${item.active ? "bg-[#ebf8ff] text-[#2b6cb0]" : "text-[#1a1d20] hover:bg-[#f5f7f8]"}`} key={item.label} onClick={item.action} type="button">
            <Icon name={item.icon} />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto flex flex-col gap-2">
        <p className="mb-2 font-['Fragment_Mono:Regular',sans-serif] text-[11px] text-[#6c757d]">Connect</p>
        <a className="flex items-center gap-3 rounded-lg px-3 py-2 font-['Geist:Medium',sans-serif] text-[14px] text-[#1a1d20] hover:bg-[#f5f7f8]" href="mailto:blrizkyramadhan@yahoo.co.id"><Icon name="email" />Email</a>
        <a className="flex items-center gap-3 rounded-lg px-3 py-2 font-['Geist:Medium',sans-serif] text-[14px] text-[#1a1d20] hover:bg-[#f5f7f8]" href="https://www.linkedin.com/in/rizkyrong/" rel="noreferrer" target="_blank"><Icon name="linkedin" />LinkedIn</a>
        <p className="mt-8 font-['Geist:Regular',sans-serif] text-[11px] text-[#6c757d]">© 2025 Rizky R. All rights reserved.</p>
      </div>
    </aside>
  );
}

export function CreationPage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-full bg-[#f8f9fa] text-[#1a1d20]">
      <Sidebar />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <header className="creation-page-header flex h-[80px] items-center justify-between border-b border-[#e9edf0] bg-white px-10">
          <p className="font-['Geist:Regular',sans-serif] text-[14px] text-[#6c757d]">Browse our library of public utilities, active projects, and system configurations.</p>
          <div className="flex items-center gap-2 rounded-full bg-[#f0fff4] px-3 py-1.5 font-['Geist:SemiBold',sans-serif] text-[12px] text-[#2f855a]"><span className="h-2 w-2 rounded-full bg-[#2f855a]" />Open for new opportunities</div>
        </header>
        <section className="creation-page-content mx-auto max-w-[1160px] px-10 py-11">
          <div className="mb-8">
            <h1 className="font-['Geist:Bold',sans-serif] text-[34px] leading-[42px] tracking-[-0.03em]">Exploration Gallery</h1>
            <p className="mt-1 font-['Geist:Regular',sans-serif] text-[16px] text-[#6c757d]">Visuals made with care and experience.</p>
          </div>
          <div className="creation-page-gallery grid grid-cols-2 gap-6">
            {galleryItems.map((item) => (
              <button className={`group relative aspect-[1.45] overflow-hidden rounded-[16px] text-left ${item.className}`} key={item.src} onClick={() => navigate("/")} type="button">
                <img alt={item.alt} className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]" src={item.src} />
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreationPage;
