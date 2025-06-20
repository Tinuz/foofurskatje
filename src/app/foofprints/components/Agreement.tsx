"use client";

import { useState } from "react";

type AgreementProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  price: string;
  role: string;
  error: string;
  liability: string;
};

const Agreement = ({
  open,
  onClose,
  onConfirm,
  price,
  role,
  error,
  liability,
}: AgreementProps) => {
  const [checked, setChecked] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-70 overflow-auto">
      <div
        className="relative flex flex-col items-center rounded-xl p-4 sm:p-6 w-full max-w-[98vw] sm:max-w-[420px] mt-8 sm:mt-[10vh]"
        style={{
          background: "linear-gradient(135deg, #fffbe8 80%, #d2b77c 100%)",
          border: "4px double #8c6b3f",
          boxShadow: "0 8px 40px #8c6b3f88, 0 0 0 8px #d2b77c55",
          fontFamily: '"Press Start 2P", "VT323", monospace',
          color: "#3a2f1b",
        }}
      >
        <button
          className="absolute top-2 right-2 text-2xl text-[#8c6b3f] hover:text-[#cc3d3d] font-bold"
          onClick={onClose}
          aria-label="Close"
          style={{
            fontFamily: '"Press Start 2P", "VT323", monospace',
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ×
        </button>
        <div className="text-xl sm:text-2xl md:text-3xl mb-4 text-center break-words" style={{ fontFamily: '"Press Start 2P", "VT323", monospace' }}>
          🥸 Franchise Agreement
        </div>
        <div className="mb-4 text-xs sm:text-sm text-center break-words" style={{ fontFamily: '"VT323", "Press Start 2P", monospace' }}>
          You are about to assume full operational and emotional responsibility for:
        </div>
        <div
          className="mb-4 p-3 sm:p-4 w-full rounded-lg text-xs sm:text-base"
          style={{
            background: "#fffbe8",
            border: "2px solid #d2b77c",
            fontFamily: '"VT323", "Press Start 2P", monospace',
            boxShadow: "0 2px 8px #d2b77c55",
          }}
        >
          <div className="mb-1">🧻 <b>Foofprint FF-01: Grease Ghost</b></div>
          <div>Role: <b>{role}</b></div>
          <div>Error: <b>{error}</b></div>
          <div>Liability Level: <b>{liability}</b></div>
          <div className="mt-2">Cost: <b>{price}</b></div>
        </div>
        <label className="flex items-center mb-4 cursor-pointer select-none text-xs sm:text-base" style={{ fontFamily: '"VT323", "Press Start 2P", monospace' }}>
          <input
            type="checkbox"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
            className="mr-2 w-4 h-4 accent-[#cc3d3d]"
          />
          I accept that this is a terrible idea.
        </label>
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition w-full sm:w-auto"
          style={{
            background: checked
              ? "linear-gradient(90deg, #ffb700 60%, #d2b77c 100%)"
              : "#d2b77c",
            color: "#3a2f1b",
            fontFamily: '"Press Start 2P", "VT323", monospace',
            boxShadow: checked ? "0 2px 8px #ffb70088" : "none",
            border: "2px solid #8c6b3f",
            letterSpacing: 1,
            fontSize: "1rem",
            textShadow: checked ? "0 2px 8px #fffbe855" : "none",
            opacity: checked ? 1 : 0.5,
            cursor: checked ? "pointer" : "not-allowed",
          }}
          disabled={!checked}
          onClick={checked ? onConfirm : undefined}
        >
          Confirm Franchise
        </button>
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            border: "2px dashed #8c6b3f",
            boxShadow: "0 0 32px #d2b77c55 inset",
            zIndex: 1,
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  );
};

export default Agreement;