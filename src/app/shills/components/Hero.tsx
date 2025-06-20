import Image from "next/image";
import { useState } from "react";

export default function ToasterHero({isShaking}: { isShaking?: boolean }) {
    const [showTip, setShowTip] = useState(false);

  return (
    <section className="font-['VT323'] relative flex flex-col items-center justify-center py-8 text-center">
      <div className="relative flex flex-col items-center">
      <h1 className="flex flex-col items-center text-center font-orbitron text-5xl sm:text-7xl font-bold mb-4 text-[#3A2F1B] z-20">
        <span className="mb-2">Push to Promote. Toast to Believe.</span>
        
      </h1>
      <Image
        src="/toaster.png"
        alt="Toaster"
        width={480}
        height={480}
        className={`mb-2 w-[220px] h-[220px] sm:w-[480px] sm:h-[480px] object-contain z-10 -mt-12 ${isShaking ? "shake": ""}`}
        priority
      />
      <button
          className="absolute right-[280px] bottom-[10px] bg-[#FFD700] text-[#3A2F1B] rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-[#8d5c1b] shadow hover:bg-[#FF5E5B] hover:text-white transition"
          onMouseEnter={() => setShowTip(true)}
          onMouseLeave={() => setShowTip(false)}
          aria-label="What is this?"
          type="button"
        >
          ?
        </button>
        {showTip && (
          <div className="absolute left-1/2 top-20 -translate-x-1/2 mt-2 w-80 bg-[#F7E7CE] text-[#3A2F1B] border-2 border-[#B97A57] rounded-xl shadow-lg p-4 text-sm font-mono z-20">
            <strong>What is this?</strong><br />
            Burn $FOOF to get a shill quest, climb the leaderboard and prove your loyalty to chaos.
          </div>
        )}
        </div>
      <span className="text-xl sm:text-2xl font-normal text-[#5A3A1B]">
          You don’t shill because it works. You shill because you can.
        </span>
    </section>
  );
}