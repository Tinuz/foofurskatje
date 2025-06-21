import Image from "next/image";

// CommunitySection.tsx
export function Community() {
  return (
    <section
      id="community"
      className="py-12 px-4 sm:px-8  text-[#5A3A1B] rounded-xl shadow-lg text-center"
    >
      <h2 className="text-3xl font-bold mb-6 font-mono">Community</h2>
      <p className="mb-4 font-mono">
        Join the chaos kennel. Discord for the barking, X for the delusion, Telegram for whatever that is.
      </p>
      <div className="flex gap-8 justify-center items-center">
        <a href="https://discord.gg/3jZNxc4D" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <Image
            src="/discord.png"
            alt="Discord"
            width={48}
            height={48}
            className="hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://x.com/FoofSkatie" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <Image
            src="/X-logo.webp"
            alt="X (Twitter)"
            width={48}
            height={48}
            className="hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://dexscreener.com/solana/2mnzak7v1qmfp54hw66qyqba6mhd2rqcoez6itye2hmh" target="_blank" rel="noopener noreferrer" aria-label="DexScreener">
          <Image
            src="/dexscreener.webp"
            alt="DexScreener"
            width={48}
            height={48}
            className="hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </section>
  );
}
