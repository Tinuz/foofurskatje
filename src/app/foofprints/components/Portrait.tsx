"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Agreement from "./Agreement"; // Zorg dat dit pad klopt

type PortraitVariant = {
  id: number;
  src: string;
  name: string;
  price: string;
  description?: string;
};

type PortraitProps = {
  id: number;
  src: string;
  name: string;
  price: string;
  description?: string;
  effect?: "glitch" | "shake" | "crt" | "wobble";
  variants: PortraitVariant[];
};

const Portrait = ({
  id,
  src,
  name,
  price,
  description,
  effect,
  variants = [],
}: PortraitProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const [mainImage, setMainImage] = useState(src);
  const overlayRef = useRef<HTMLDivElement>(null);

  let effectClass = "portrait";
  if (effect === "glitch") effectClass += " glitch-portrait";
  if (effect === "shake") effectClass += " shake-portrait";
  if (effect === "wobble") effectClass += " wobble-portrait";

  // CRT overlay style
  const crtOverlay = {
    pointerEvents: "none" as const,
    position: "absolute" as const,
    inset: 0,
    zIndex: 10,
    background:
      "repeating-linear-gradient(0deg, transparent, transparent 3px, #fffbe80a 4px, transparent 5px)",
    mixBlendMode: "screen" as const,
    opacity: 0.5,
    borderRadius: "0.5rem",
  };

  // Glitchy border style
  const glitchBorder =
    effect === "glitch"
      ? {
          border: "2px dashed #cc3d3d",
          boxShadow:
            "0 0 8px #cc3d3d, 0 0 16px #ffb70088, 2px 2px 0 #388e3c, -2px -2px 0 #3a2f1b",
          animation: "glitch 1s infinite alternate",
        }
      : {};

  // Responsive image sizes
  const imageWidth = 200;
  const imageHeight = 250;

  // De eerste afbeelding is altijd de hoofdafbeelding, daarna de varianten
  const allImages = [{ src, name }, ...variants.map(v => ({ src: v.src, name: v.name }))];

  // Dummy data voor Agreement, pas aan naar wens of maak dynamisch
  const agreementData = {
    price: "13.37 $FOOF",
    role: name,
    error: "Transparency Bug",
    liability: "Very High",
  };

  return (
    <>
      <div
        className={`${effectClass} w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center border rounded-xl p-4 sm:p-6 md:p-8 relative mx-auto`}
        style={{
          background: "linear-gradient(135deg, #fffbe8 80%, #d2b77c 100%)",
          border: "4px double #8c6b3f",
          boxShadow: "0 4px 24px #8c6b3f88, 0 0 0 4px #d2b77c55",
          color: "#3a2f1b",
          fontFamily: '"VT323", "Press Start 2P", monospace',
          ...glitchBorder,
        }}
      >
        <span
          className="mb-2 font-semibold text-base sm:text-lg md:text-xl text-center break-words"
          style={{
            fontFamily: '"Press Start 2P", "VT323", monospace',
            textShadow: "0 2px 8px #d2b77c55",
          }}
        >
          {name}
        </span>
        <div className="relative w-full flex justify-center" style={{ minHeight: imageHeight }}>
          <Image
            src={src}
            alt={name}
            width={imageWidth}
            height={imageHeight}
            className="rounded shadow-lg object-cover border-4 border-[#d2b77c] w-full max-w-[200px] h-auto"
            style={{ background: "#fffbe8" }}
          />
          <div style={crtOverlay} />
        </div>
        <span className="text-xs mt-2" style={{ color: "#8d5c1b" }}>
          ID: {id}
        </span>
        <span className="text-sm font-bold mt-1" style={{ color: "#cc3d3d" }}>
          {price}
        </span>
        {description && (
          <span
            className="text-xs mt-2 text-center break-words"
            style={{ color: "#3a2f1b" }}
          >
            {description}
          </span>
        )}
        <button
          className="mt-3 px-4 py-2 rounded transition font-bold w-full sm:w-auto"
          style={{
            background: "linear-gradient(90deg, #ffb700 60%, #d2b77c 100%)",
            color: "#3a2f1b",
            fontFamily: '"Press Start 2P", "VT323", monospace',
            boxShadow: "0 2px 8px #ffb70088",
            border: "2px solid #8c6b3f",
            letterSpacing: 1,
            fontSize: "1rem",
            textShadow: "0 2px 8px #fffbe855",
          }}
          onClick={() => {
            setMainImage(src);
            setShowModal(true);
          }}
        >
          View
        </button>
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            border: "2px dashed #8c6b3f",
            boxShadow: "0 0 16px #d2b77c55 inset",
            zIndex: 1,
            mixBlendMode: "screen",
          }}
        />
      </div>

      {showModal && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-70 overflow-auto"
        >
          <div
            className="relative flex flex-col items-center rounded-xl p-4 sm:p-8 w-full max-w-[98vw] sm:max-w-[480px] mt-8 sm:mt-[10vh]"
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
              onClick={() => setShowModal(false)}
              aria-label="Sluit"
              style={{
                fontFamily: '"Press Start 2P", "VT323", monospace',
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <span
              className="mb-4 text-lg text-center break-words"
              style={{
                fontFamily: '"Press Start 2P", "VT323", monospace',
                letterSpacing: 1,
                textShadow: "0 2px 8px #d2b77c55",
              }}
            >
              {name}
            </span>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full items-center">
              {/* Main image */}
              <div className="relative w-full max-w-[200px] h-auto flex-shrink-0">
                <Image
                  src={mainImage}
                  alt={name}
                  width={imageWidth}
                  height={imageHeight}
                  className="rounded-lg shadow-lg object-cover border-4 border-[#d2b77c] w-full h-auto"
                  style={{
                    background: "#fffbe8",
                  }}
                />
                <div style={crtOverlay} />
              </div>
              {/* Thumbnails */}
              <div className="flex flex-row sm:flex-col gap-2 justify-center w-full sm:w-auto">
                {allImages.map((img) => (
                  <button
                    key={img.src}
                    onClick={() => setMainImage(img.src)}
                    style={{
                      border: mainImage === img.src ? "2px solid #cc3d3d" : "2px solid #d2b77c",
                      borderRadius: 8,
                      padding: 0,
                      background: "#fffbe8",
                      boxShadow: mainImage === img.src ? "0 0 8px #cc3d3d" : "0 2px 8px #d2b77c55",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.name}
                      width={48}
                      height={60}
                      className="object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>
            <span
              className="mt-4 text-base font-bold text-center break-words"
              style={{ color: "#cc3d3d", fontFamily: '"VT323", "Press Start 2P", monospace' }}
            >
              {price}
            </span>
            {description && (
              <span
                className="mt-2 text-xs text-center break-words"
                style={{ color: "#3a2f1b", fontFamily: '"VT323", "Press Start 2P", monospace' }}
              >
                {description}
              </span>
            )}
            <button
              className="mt-6 px-4 py-3 rounded-lg font-bold transition w-full sm:w-auto"
              style={{
                background: "linear-gradient(90deg, #ffb700 60%, #d2b77c 100%)",
                color: "#3a2f1b",
                fontFamily: '"Press Start 2P", "VT323", monospace',
                boxShadow: "0 2px 8px #ffb70088",
                border: "2px solid #8c6b3f",
                letterSpacing: 1,
                fontSize: "0.9rem",
                textShadow: "0 2px 8px #fffbe855",
              }}
              onClick={() => setShowAgreement(true)}
            >
              Franchise This Misprint
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
            {/* Agreement Modal */}
            <Agreement
              open={showAgreement}
              onClose={() => setShowAgreement(false)}
              onConfirm={() => {
                setShowAgreement(false);
                setShowModal(false);
                // hier kun je eventueel een callback toevoegen voor na bevestigen
              }}
              price={agreementData.price}
              role={agreementData.role}
              error={agreementData.error}
              liability={agreementData.liability}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Portrait;