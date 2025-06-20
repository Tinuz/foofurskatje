"use client";
import { useEffect, useState } from "react";

// Geef als prop de timestamp (in ms) wanneer de volgende burn mag
export default function BurnCooldownTimer({ nextBurnTimestamp }: { nextBurnTimestamp: number }) {
  const [remaining, setRemaining] = useState(nextBurnTimestamp - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(nextBurnTimestamp - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [nextBurnTimestamp]);

  // Helper om ms om te zetten naar mm:ss
  function format(ms: number) {
    if (ms <= 0) return "Ready!";
    const totalSeconds = Math.ceil(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div className="mt-4 flex flex-col items-center">
      <span className="text-xs font-mono text-[#8d5c1b] mb-1">Burn Cooldown</span>
      <span className={`text-2xl font-bold font-mono px-4 py-2 rounded-lg ${remaining > 0 ? "bg-[#F9D77E] text-[#3A2F1B]" : "bg-green-300 text-green-900"}`}>
        {format(remaining)}
      </span>
    </div>
  );
}