"use client";
import { useEffect, useState } from "react";

export default function NowBurningCounter() {
  // Startwaarde en snelheid van verbranden (bijvoorbeeld 0.1337 FOOF per seconde)
  const [burnedAmount, setBurnedAmount] = useState(0);

    useEffect(() => {
     fetch("/shills/api/burned-total")
    .then((res) => res.json())
    .then((data) => setBurnedAmount(data.burned))
    .catch(() => setBurnedAmount(0));
}, []);

  return (
    <div className="fixed right-8 bottom-8 z-30 bg-[#F9D77E] border-4 border-[#B97A57] rounded-xl shadow-lg px-8 py-6 flex flex-col items-center font-mono">
      <span className="text-[#8d5c1b] text-lg font-bold mb-2 tracking-widest">BURNED SO FAR</span>
      <span className="text-3xl sm:text-4xl font-extrabold text-[#FF5E5B] drop-shadow-lg">
        {burnedAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-xl text-[#8d5c1b]">$FOOF</span>
      </span>
    </div>
  );
}