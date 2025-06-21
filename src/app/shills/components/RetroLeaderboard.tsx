type leaderboardEntry = {
  wallet: string;
  count: number;
}

export function RetroLeaderboard({ leaderboard }: { leaderboard: leaderboardEntry[] }) {
  // Emoji iconen voor de top 3
  const medals = [
    { icon: "🥇", alt: "1st", bg: "bg-[#FFD700]" }, // Goud
    { icon: "🥈", alt: "2nd", bg: "bg-[#C0C0C0]" }, // Zilver
    { icon: "🥉", alt: "3rd", bg: "bg-[#CD7F32]" }, // Brons
  ];

  // Accentkleur voor contrast (donkerpaars)
  const accent = "bg-[#3A1C5C] text-purple-500 border-purple-500";

  return (
    <section className={`max-w-2xl mx-auto my-12 bg-[#F7E7CE] border-4 border-[#B97A57] rounded-2xl shadow-[8px_8px_0_0_#B97A57] p-6 font-mono`}>
      <h2 className="text-3xl font-bold mb-6 text-center text-[#3A1C5C] tracking-widest">Leaderboard</h2>
      <ol className="space-y-3">
        {leaderboard.length === 0 && (
          <li className="text-center text-[#7C5E3C]">No entries yet.</li>
        )}
        {leaderboard.map((entry, idx) => (
          <li
            key={entry.wallet}
            className={[
              "flex items-center justify-between px-4 py-3 rounded-lg border-2",
              idx < 3
                ? `${medals[idx].bg} border-[#8d5c1b] shadow-md`
                : `bg-[#E6CBA8] border-[#B97A57]`,
              idx === 0 ? accent : "",
            ].join(" ")}
          >
            <div className="flex items-center gap-3">
              {idx < 3 ? (
                <span className="text-3xl">{medals[idx].icon}</span>
              ) : (
                <span className="text-[#8d5c1b] text-xl font-bold w-8 text-center">{idx + 1}</span>
              )}
              <span className={`text-lg font-bold tracking-wide ${idx === 0 ? "text-purple-500" : "text-[#3A2F1B]"}`}>
                {entry.wallet.slice(0, 6) + "..." + entry.wallet.slice(-4)}
              </span>
            </div>
            <span className={`text-lg font-bold ${idx === 0 ? "text-purple-500" : "text-[#FF5E5B]"}`}>
              {entry.count}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}