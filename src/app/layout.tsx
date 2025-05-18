import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
        url: "/foofur_logo.png",
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
    images: ["/foofur_logo.png"],
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
        <link rel="canonical" href="https://foofur.com" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
