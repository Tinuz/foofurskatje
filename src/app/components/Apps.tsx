import Image from 'next/image';

export function Apps() {
  const apps = [
    {
      name: "Shill Quests",
      description: "Help Foofur spread the word. Get nothing in return.",
      link: "/shills",
      image: "/shills.png"
    },
    {
      name: "Foofprints",
      description: "Collect misprints. Showcase absurdity.",
      link: "/foofprints",
      image: "/foofprints.png"
    },
    {
      name: "Burn Chaos",
      description: "Burn tokens. Feel nothing.",
      link: "/burn",
      image: "/microwave.png"
    },
  ];
  return (
    <section id="apps" className="grid md:grid-cols-3 gap-6 px-4 py-12" >
      {apps.map((app, idx) => (
        <div
          key={app.name}
          className={[
            "relative border-4 p-6 rounded-xl shadow-[4px_4px_0_0_#B97A57] text-center transition-transform hover:scale-105 overflow-hidden",
            idx % 3 === 0
              ? "bg-[#F7E7CE] border-[#B97A57]"
              : idx % 3 === 1
              ? "bg-[#E6CBA8] border-[#A67C52]"
              : "bg-[#F9D77E] border-[#C19A6B]"
          ].join(" ")}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
            <span className="text-white text-xl font-bold font-mono tracking-widest">COMING SOON</span>
          </div>
          {/* Card content */}
          <Image
            src={app.image}
            alt={`${app.name} icon`}
            width={128}
            height={128}
            className="mx-auto w-24 h-24 mb-3"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <h2 className="text-2xl font-bold mb-2 text-[#5A3A1B] font-mono">{app.name}</h2>
          <p className="mb-4 text-sm text-[#7C5E3C] font-mono">{app.description}</p>
          <a href={app.link} className="text-[#FF5E5B] font-semibold font-mono">→ Enter App</a>
        </div>
      ))}
    </section>
  );
}
