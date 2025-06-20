"use client";
import { useEffect, useState } from "react";

type Assignment = {
  insertId: string;
  assignment: string;
  questId: string;
};

type Props = {
  walletAddress: string;
  onClose: () => void;
  onSubmitProof: (insertId: string, proofUrl: string) => Promise<void>;
};

const PAGE_SIZE = 5;

export default function OpenAssignmentsModal({ walletAddress, onClose, onSubmitProof }: Props) {
  const [openAssignments, setOpenAssignments] = useState<Assignment[]>([]);
  const [selected, setSelected] = useState<Assignment | null>(null);
  const [proofUrl, setProofUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!walletAddress) {
      setOpenAssignments([]);
      return;
    }
    fetch("/shills/api/open-assignments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wallet: walletAddress }),
    })
      .then((res) => res.json())
      .then((data) => setOpenAssignments(Array.isArray(data.open) ? data.open : []))
      .catch(() => setOpenAssignments([]));
  }, [walletAddress]);

  const totalPages = Math.ceil(openAssignments.length / PAGE_SIZE);
  const paginatedAssignments = openAssignments.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div
        className="bg-[#fffbe8] border-2 border-[#d2b77c] rounded-lg shadow-lg p-6 relative flex flex-col"
        style={{
          width: 420,
          height: 520,
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      >
        <button className="absolute top-2 right-3 text-xl" onClick={onClose}>×</button>
        <h2 className="text-lg font-retro mb-4">Open Quests</h2>
        {!selected ? (
          <>
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                minHeight: 0,
                marginBottom: 8,
              }}
            >
              <ul>
                {paginatedAssignments.map((a) => (
                  <li key={a.insertId} className="mb-3">
                    <button
                      className="w-full text-left px-3 py-2 rounded bg-[#d2b77c22] hover:bg-[#d2b77c44] font-retro"
                      onClick={() => { setSelected(a); setProofUrl(""); setSubmitted(null); }}
                    >
                      <b>Quest:</b> {a.assignment}
                    </button>
                  </li>
                ))}
                {openAssignments.length === 0 && <div className="text-retro">No open quests!</div>}
              </ul>
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-2">
                <button
                  className="px-2 py-1 rounded bg-[#d2b77c44] font-retro"
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                >
                  ←
                </button>
                <span className="font-retro text-sm">
                  Page {page + 1} of {totalPages}
                </span>
                <button
                  className="px-2 py-1 rounded bg-[#d2b77c44] font-retro"
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                >
                  →
                </button>
              </div>
            )}
          </>
        ) : (
          <div>
            <div className="mb-2 font-retro">{selected.assignment}</div>
            <input
              type="url"
              className="w-full px-2 py-1 mb-2 border border-[#d2b77c] rounded font-retro"
              placeholder="Proof URL (X post link)"
              value={proofUrl}
              onChange={e => setProofUrl(e.target.value)}
              disabled={loading || !!submitted}
              required
            />
            <button
              className="btn-retro py-2 px-6 rounded shadow mt-1"
              style={{ background: "linear-gradient(90deg, #388e3c 60%, #d2b77c 100%)", color: "#fffbe8" }}
              disabled={loading || !proofUrl || !!submitted}
              onClick={async () => {
                setLoading(true);
                await onSubmitProof(selected.insertId, proofUrl);
                setLoading(false);
                setSubmitted("Submitted!");
              }}
            >
              {submitted ? "Submitted" : loading ? "Submitting..." : "Submit"}
            </button>
            {submitted && <div className="mt-2 text-[#cc3d3d] font-retro text-sm">Submission under review (lol)</div>}
            <button className="mt-4 underline text-xs" onClick={() => setSelected(null)}>← Back to list</button>
          </div>
        )}
      </div>
    </div>
  );
}