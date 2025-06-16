// HeroSection.tsx
import Image from "next/image";
import { useState } from "react";
import { LoreModal } from "@/app/components/LoreModal";

export function Hero() {
  const [showLore, setShowLore] = useState(false);

  const handleLoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLore(true);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-10 text-center">
      <Image
        src="/logo.png"
        alt="logo"
        className="mb-2 w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full"
        width={240}
        height={240}
        priority
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
        //onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-[#3A2F1B]">The token was an accident.</h1>
      <p className="text-xl md:text-2xl text-[#3A2F1B] mb-6">Everything after that? Even worse.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#apps" className="bg-[#FF5E5B] text-white py-2 px-6 rounded shadow-md">▶️ Enter Chaos</a>
        <a
          href="#lore"
          onClick={handleLoreClick}
          className="border border-[#2E294E] text-[#2E294E] py-2 px-6 rounded"
        >
          📜 Learn What Happened
        </a>
      </div>
      <LoreModal open={showLore} onClose={() => setShowLore(false)} />
    </section>
  );
}