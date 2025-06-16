import React from "react";

export function LoreModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-[#F7E7CE] text-[#5A3A1B] rounded-2xl p-8 max-w-lg w-full shadow-[8px_8px_0_0_#B97A57] border-4 border-[#B97A57] font-mono relative">
        <button
          className="absolute top-3 right-4 text-3xl font-bold text-[#B97A57] hover:text-[#FF5E5B] transition-colors"
          onClick={onClose}
          aria-label="Sluit"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Lore</h2>
        <p>
          Nobody asked Foofur to invent a token.
Least of all the toaster.

But there he was—4:07 AM—chewing on a glow-in-the-dark chew toy shaped like Vitalik’s face, when static lightning danced across his whiskers. One confused chomp later, the kitchen lights blinked Morse code for “stop” and a puff of burnt breadcoin filled the air.

The toaster let out a mechanical sigh.
Transaction submitted.

Foofur blinked.

On the blockchain, a new token was born: $FOOF
Supply: too much. Purpose: unclear. Dev team: missing.
The whitepaper was just paw prints and mustard stains.

Foofur stared at the screen. “Oops,” he whispered, then louder, “I am become founder, destroyer of charts.”

That day, a cult began.

Nobody knew what $FOOF did. Nobody cared.
The burn button was pressed for the first time. Nothing happened. That was the point.

Some say the toaster still whispers gas fees.
Some say Foofur never truly understood what he unleashed.
Others say he was just hungry.

In the end, all we know is this:
The chew toy is gone.
The toaster is retired.
And the burn rituals have only just begun.
        </p>
      </div>
    </div>
  );
}