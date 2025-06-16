// AboutSection.tsx
export function About() {
  return (
    <section id="lore" className="px-4 py-12 text-center max-w-3xl mx-auto relative">
      <img
        src="/images/backgrounds/toaster-mint.png"
        alt="Chew toy in toaster background"
        className="absolute opacity-10 top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl pointer-events-none"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      <p className="relative z-10">
        Foofur is a confused blue dog who accidentally launched a token by shoving his chew toy into a toaster. Since then, he’s been stuck with $FOOF and invented increasingly absurd ways to get rid of it — from burn rituals to fake franchises.
      </p>
      <a href="/whitepaper" className="block mt-4 text-[#2E294E] underline relative z-10">Read the full whitepaper (not really)</a>
    </section>
  );
}
