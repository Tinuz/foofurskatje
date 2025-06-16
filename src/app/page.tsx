"use client";

import Script from "next/script";
import {Hero} from "@/app/components/Hero";
import {Apps} from "@/app/components/Apps";
import {About} from "@/app/components/About";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "$FOOF Token",
            "url": "https://foofurskatje.com",
            "logo": "https://foofurskatje.com/foofur_logo.png",
            "description": "The most pointless meme coin on Solana. Stake for nothing, earn nothing, do nothing.",
            "sameAs": [
              "https://discord.gg/yr798tdz",
              "https://x.com/FoofSkatie"
            ]
          }
        `}
      </Script>

      <Hero />
      <Apps />
      <About />
      <Community />
      <Footer />
    </>
  );
}
