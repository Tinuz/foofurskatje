"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Header from "@/app/shills/components/Header";
import Footer from "@/app/shills/components/Footer";
import OpenAssignmentsModal from "@/app/shills/components/OpenAssignmentsModal";
import ToasterHero from "@/app/shills/components/Hero";
import NowBurningCounter from "@/app/shills/components/BurnCounter";
import bs58 from 'bs58';
import { RetroLeaderboard } from "./components/RetroLeaderboard";
import BurnCooldownTimer from "@/app/shills/components/BurnCooldownTimer";


type Quest = {
  id: string;
  assignment?: string;
};

type LeaderboardEntry = {
  wallet: string;
  count: number;
};

export default function InsertShillQuests() {
  const { publicKey, connected, signMessage } = useWallet();
  const walletAddress = publicKey ? publicKey.toBase58() : "";

  const [quest, setQuest] = useState<Quest | null>(null);
  const [insertId, setInsertId] = useState<string | null>(null);
  const [proofUrl, setProofUrl] = useState("");
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hasOpenAssignments, setHasOpenAssignments] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [nextBurnTimestamp, setNextBurnTimestamp] = useState<number | null>(null);


  // Leaderboard ophalen
  useEffect(() => {
    fetch("/shills/api/leaderboard")
      .then((res) => res.json())
      .then((data) => {
        console.log("Leaderboard data:", data); // Log de opgehaalde data
        setLeaderboard(Array.isArray(data) ? data : []);
      })
      .catch(() => setLeaderboard([]));
  }, []);

    useEffect(() => {
    if (!walletAddress) {
      setNextBurnTimestamp(null);
      return;
    }
    fetch(`/shills/api/cooldown?wallet=${walletAddress.toString()}`)
      .then((res) => res.json())
      .then((data) => setNextBurnTimestamp(data.nextBurnTimestamp))
      .catch(() => setNextBurnTimestamp(Date.now()));
  }, [walletAddress]);

  // Check of er open assignments zijn (alleen voor notificatie)
  useEffect(() => {
    if (!connected || !walletAddress) {
      setHasOpenAssignments(false);
      return;
    }
    fetch("/shills/api/open-assignments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wallet: walletAddress }),
    })
      .then((res) => res.json())
      .then((data) => setHasOpenAssignments(Array.isArray(data.open) && data.open.length > 0))
      .catch(() => setHasOpenAssignments(false));
  }, [connected, walletAddress]);

  // Handler voor quest proof submit vanuit modal
  const handleSubmitProof = async (insertId: string, proofUrl: string) => {
    await fetch("/shills/api/submit-quests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ insertId, proofUrl }),
    });
    // Eventueel: leaderboard opnieuw ophalen
    fetch("/shills/api/leaderboard")
      .then((res) => res.json())
      .then((data) => setLeaderboard(Array.isArray(data.entries) ? data.entries : []));
  };

  // Handler voor nieuwe quest aanvragen
  const handleInsert = async () => {
    if (!connected || !walletAddress || !signMessage) {
      alert("Connect your wallet first!");
      return;
    }

    const message = `Burn FOOF - ${new Date().toISOString()}`;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);
    const signatureBase58 = bs58.encode(signature); // gebruik bs58 om signature te serializen

    setLoading(true);
      const burnRes = await fetch("/shills/api/burn", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ wallet: walletAddress, message, signatureBase58 }),
  });

  const burnData = await burnRes.json();
  if (!burnRes.ok || !burnData.success) {
    if (burnData.error) {
      if (burnData.error === "Cooldown active") {
        alert("You can only burn once every 24 hours. Please try again later.");
      }
      else if (burnData.error === "Invalid signature") {
        alert("Invalid signature. Please try again.");
      }
      else {
       alert("Burn failed!");
      }
    }
    setLoading(false);
    return;
  }
    const res = await fetch("/shills/api/insert-quests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wallet: walletAddress }),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok && data.quest) {
      setQuest(data.quest);
      setInsertId(data.insertId || null);
      setSubmitted(false);
    } else {
      alert(data.error || "Failed to get quest");
    }
  };

  // Handler voor quest proof submit (voor actieve quest)
  const handleSubmitActiveProof = async () => {
    if (!connected || !walletAddress || !signMessage) {
      alert("Connect your wallet first!");
      return;
    }

    const message = `Submit Proof - ${new Date().toISOString()}`;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);
    const signatureBase58 = bs58.encode(signature); // gebruik bs58 om signature te serializen

    setLoading(true);
    // Eerst proof submitten
    if (!insertId || !proofUrl) return;
    const res = await fetch("/shills/api/submit-quests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ insertId, proofUrl }),
    });
    setLoading(false);

    if (res.ok) {
      // Daarna pas reward uitkeren
      await fetch("/shills/api/reward", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet: walletAddress, message, signatureBase58 }),
      });

      setSubmitted(true);
      setQuest(null);
      setInsertId(null);
      setProofUrl("");
      fetch("/shills/api/leaderboard")
        .then((res) => res.json())
        .then((data) => setLeaderboard(Array.isArray(data.entries) ? data.entries : []));
    } else {
      const data = await res.json();
      alert(data.error || "Submission failed");
    }
  };

  return (
    <div
      className="min-h-screen font-retro text-retro"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #d2b77c 60%, #8c6b3f 100%)",
        position: "relative",
      }}
    >
      {/* CRT overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 6px, #fffbe805 8px, transparent 10px)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-20">
        <Header
          hasOpenAssignments={hasOpenAssignments}
          onOpenAssignmentsClick={() => setShowModal(true)}
        />

        <div className="relative flex flex-row items-start">
          <div className="flex-1">
            <ToasterHero isShaking={isShaking} />
          </div>
        </div>

        <section className="text-center mt-2">
          {!quest ? (
            <div className="flex justify-center">
              <button
                onMouseEnter={() => setIsShaking(true)}
                onMouseLeave={() => setIsShaking(false)}
                onClick={handleInsert}
                className={`flex flex-col items-center text-lg py-6 px-10 rounded-full font-mono font-bold shadow-[0_4px_0_0_#8d5c1b] border-4 border-[#8d5c1b] bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 text-[#3A2F1B] transition-all duration-200 hover:scale-105 hover:from-pink-400 hover:to-yellow-300 hover:shadow-[0_8px_0_0_#8d5c1b] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed`}
                disabled={loading}
              >
                <span className="text-2xl font-extrabold">
                  {loading ? "Loading..." : "Get a Toasted Task"}
                </span>
                {!loading && (
                  <span className="text-sm font-normal mt-1 text-[#8d5c1b]">
                    Burn 13.37 $FOOF to unlock your absurd mission
                  </span>
                )}
              </button>
            </div>
          ) : (
            <div className="max-w-xl mx-auto mt-2 bg-retro-gradient border-2 border-[#d2b77c] rounded-lg shadow-retro">
              <div className="p-6 relative">
                <button
                  className="absolute top-2 right-2 text-xs px-2 py-1 bg-[#cc3d3d] text-white rounded font-retro"
                  onClick={() => {
                    setQuest(null);
                    setInsertId(null);
                    setProofUrl("");
                    setSubmitted(false);
                  }}
                >
                  Close
                </button>
                <h3 className="text-lg font-semibold mb-2 text-retro" style={{ color: "#8c6b3f" }}>
                  Task #{quest.id}
                </h3>
                <p className="mb-4">{quest.assignment || "Perform your duty!"}</p>
                <input
                  type="url"
                  className="w-full px-2 py-1 mb-2 border border-[#d2b77c] rounded font-retro"
                  placeholder="Proof URL (X post link)"
                  value={proofUrl}
                  onChange={(e) => setProofUrl(e.target.value)}
                  disabled={loading || submitted}
                  required
                />
                <button
                  className="btn-retro py-3 px-8 rounded shadow transition hover:scale-105 active:scale-95 mt-2"
                  style={{
                    background: "linear-gradient(90deg, #388e3c 60%, #d2b77c 100%)",
                    color: "#fffbe8",
                    borderColor: "#8c6b3f",
                  }}
                  onClick={handleSubmitActiveProof}
                  disabled={loading || !proofUrl || submitted}
                >
                  {submitted
                    ? "Submitted"
                    : loading
                    ? "Submitting..."
                    : "Submit Quest"}
                </button>
                {submitted && (
                  <div className="mt-4 text-[#cc3d3d] font-retro text-sm">
                    Submission under review (lol)
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Open assignments modal */}
        {showModal && (
          <OpenAssignmentsModal
            walletAddress={walletAddress}
            onClose={() => setShowModal(false)}
            onSubmitProof={handleSubmitProof}
          />
        )}

        {/* Leaderboard */}
        <RetroLeaderboard leaderboard={leaderboard} />
        <NowBurningCounter />
        {nextBurnTimestamp !== null && (
          <div className="fixed left-8 bottom-8 z-30">
          <BurnCooldownTimer nextBurnTimestamp={nextBurnTimestamp} />
        </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
