import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$FOOF Token | The Most Pointless Meme Coin on Solana",
  description:
    "Join the $FOOF revolution - the most pointless meme coin on Solana. Stake for nothing, earn nothing, do nothing. Perfect for degens who love doing absolutely nothing.",
  keywords:
    "meme coin, solana, crypto, $FOOF, token, cryptocurrency, meme token, solana meme coin, defi, staking, nft, web3",
  openGraph: {
    title: "$FOOF Token | The Most Pointless Meme Coin on Solana",
    description:
      "Join the $FOOF revolution - the most pointless meme coin on Solana. Stake for nothing, earn nothing, do nothing.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "$FOOF Token Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$FOOF Token | The Most Pointless Meme Coin on Solana",
    description:
      "Join the $FOOF revolution - the most pointless meme coin on Solana. Stake for nothing, earn nothing, do nothing.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // You'll need to add your actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://foofurskatje.com" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className="relative bg-[#D2B77C] text-[#3A2F1B] font-custom min-h-screen">
        {/* Achtergrondafbeelding over de hele site */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/background.png"
            alt="Achtergrond"
            fill
            style={{ objectFit: "cover", opacity: 0.22 }}
            priority
          />
          <div className="absolute inset-0 bg-[#FDFBEA] opacity-80 -z-10" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
