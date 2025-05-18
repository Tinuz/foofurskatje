"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[90vh] sm:h-screen bg-gradient-to-br from-purple-800 via-blue-900 to-gray-900 text-center p-4 sm:p-8 overflow-hidden">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="z-10 relative w-full max-w-4xl px-4">
          <div className="relative">
            <div className="absolute inset-0 animate-sparkle">
              <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle-1"></div>
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-sparkle-2"></div>
              <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-sparkle-3"></div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-sparkle-4"></div>
            </div>
            <Image
              src="/foofur_logo.png"
              alt="Foofur Logo"
              width={700}
              height={700}
              className="mx-auto mb-6 shadow-[0_0_50px_rgba(147,51,234,0.7),0_0_100px_rgba(59,130,246,0.5)] transform transition-transform duration-500 hover:scale-110 rounded-full relative z-10"
            />
          </div>
          <h1 className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-x">
            $FOOF
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-10 text-gray-300 drop-shadow-lg">
            The Future of Absolutely Nothing
          </p>

          {/* Dev Progress Section */}
          <div className="w-full max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Dev&apos;s Progress to Lambo ��
            </h3>

            {/* FOOF Holdings */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">$FOOF Holdings</span>
                <span className="text-green-400 font-mono">69,420,000,000</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-2 bg-green-500 rounded-full animate-pulse"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            {/* Current Price */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Current Price</span>
                <span className="text-yellow-400 font-mono">$0.0000000001</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-2 bg-yellow-500 rounded-full animate-pulse"
                  style={{ width: "0.1%" }}
                ></div>
              </div>
            </div>

            {/* Lambo Progress */}
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Progress to Lambo</span>
                <span className="text-red-400 font-mono">0.0001%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-2 bg-red-500 rounded-full animate-pulse"
                  style={{ width: "0.1%" }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 italic text-right">
              Target: 1 Lamborghini Aventador ($500,000)
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://jup.ag/swap/SOL-FOOF"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-12 rounded-full text-lg sm:text-xl uppercase tracking-wide shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-orange-500/50 flex items-center justify-center gap-2"
            >
              <span>Buy $FOOF</span>
              <span className="text-sm">🚀</span>
            </a>
            <button className="w-full sm:w-auto bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 hover:from-green-500 hover:via-teal-600 hover:to-cyan-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-12 rounded-full text-lg sm:text-xl uppercase tracking-wide shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-cyan-500/50">
              Stake for Nothing
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 animate-gradient-x"></div>
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x relative z-10">
          Revolutionary Non-Features
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12 relative z-10">
          <div className="bg-gray-700/50 p-6 sm:p-8 rounded-lg border border-gray-600 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50">
            <h3 className="font-orbitron text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              💎 Stake to feel important
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Lock your tokens and gain the ultimate status symbol: knowing you
              own $FOOF.
            </p>
          </div>
          <div className="bg-gray-700/50 p-6 sm:p-8 rounded-lg border border-gray-600 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/50">
            <h3 className="font-orbitron text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
              🗳️ DAO proposals (we ignore them)
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Submit your brilliant ideas! We promise to file them... somewhere.
            </p>
          </div>
          <div className="bg-gray-700/50 p-6 sm:p-8 rounded-lg border border-gray-600 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:border-pink-500/50">
            <h3 className="font-orbitron text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
              🌐 0% Utility, 100% UX
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Why build utility when you can have a buttery-smooth user
              experience? (Disclaimer: UX not guaranteed.)
            </p>
          </div>
          <div className="bg-gray-700/50 p-6 sm:p-8 rounded-lg border border-gray-600 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:border-yellow-500/50">
            <h3 className="font-orbitron text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              📈 Fully Diluted Vapor Market Cap
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Our market cap is purely theoretical, based on maximum cope and
              zero actual value.
            </p>
          </div>
        </div>
      </section>

      {/* DAO Mock Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-red-500/10 to-pink-500/10 animate-gradient-x"></div>
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-gradient-x relative z-10">
          Decentralized Absurdity Organization (DAO)
        </h2>
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="bg-gray-800/50 p-6 sm:p-8 rounded-lg border border-gray-700 backdrop-blur-sm mb-8 sm:mb-12 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
            <h3 className="font-orbitron text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-400">
              Submit a Proposal (We Might Read It. Probably Not.)
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="proposalTitle"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Proposal Title
                </label>
                <input
                  type="text"
                  id="proposalTitle"
                  className="shadow appearance-none border border-gray-600 rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-900/70 text-white transition-all duration-300 focus:border-red-500 text-sm sm:text-base"
                  placeholder="e.g., Replace Foofur with a potato?"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="proposalDescription"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="proposalDescription"
                  rows={4}
                  className="shadow appearance-none border border-gray-600 rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-900/70 text-white transition-all duration-300 focus:border-red-500 text-sm sm:text-base"
                  placeholder="Explain your world-changing, zero-impact idea..."
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-red-500/50 text-sm sm:text-base"
                >
                  Submit (into the void)
                </button>
              </div>
            </form>
          </div>

          {/* Rejected Proposals List */}
          <div className="bg-gray-800/50 p-6 sm:p-8 rounded-lg border border-gray-700 backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
            <h3 className="font-orbitron text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-400">
              Rejected Proposals (A Wall of Shame)
            </h3>
            <div className="max-h-64 overflow-y-auto pr-4 custom-scrollbar">
              {/* Example Rejected Proposals */}
              <div className="mb-4 pb-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-700/30 transition-colors duration-300 rounded-lg p-2">
                <p className="font-semibold text-gray-200 text-sm sm:text-base">
                  Replace Foofur with a cat? -{" "}
                  <span className="text-red-500">Rejected</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Reason: Blasphemy. Also, cats are sus.
                </p>
              </div>
              <div className="mb-4 pb-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-700/30 transition-colors duration-300 rounded-lg p-2">
                <p className="font-semibold text-gray-200 text-sm sm:text-base">
                  Build actual utility? -{" "}
                  <span className="text-red-500">Rejected</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Reason: Contrary to the core mission.
                </p>
              </div>
              <div className="mb-4 pb-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-700/30 transition-colors duration-300 rounded-lg p-2">
                <p className="font-semibold text-gray-200 text-sm sm:text-base">
                  Host a real-life Foofur convention? -{" "}
                  <span className="text-red-500">Rejected</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Reason: Too much effort. And potential legal issues.
                </p>
              </div>
              <div className="mb-4 pb-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-700/30 transition-colors duration-300 rounded-lg p-2">
                <p className="font-semibold text-gray-200 text-sm sm:text-base">
                  Airdrop free $FOOF to everyone? -{" "}
                  <span className="text-red-500">Rejected</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Reason: We prefer people buy our worthless token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staking Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-teal-500/10 to-cyan-500/10 animate-gradient-x"></div>
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 animate-gradient-x relative z-10">
          Stake Your Non-Assets
        </h2>
        <div className="container mx-auto max-w-md relative z-10">
          <div className="bg-gray-700/50 p-6 sm:p-10 rounded-lg border border-gray-600 backdrop-blur-sm hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
            <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-gray-200">
              Stake your $FOOF to earn absolutely nothing but clout.
            </p>
            {/* Fake APR Display */}
            <div className="mb-6 sm:mb-8">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-400 to-cyan-500 animate-gradient-x">
                ∞%
              </p>
              <p className="text-lg sm:text-xl text-gray-400">
                APY. Emotionally.
              </p>
            </div>
            <button className="w-full sm:w-auto bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 hover:from-green-500 hover:via-teal-600 hover:to-cyan-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full text-lg sm:text-xl transition-all shadow-lg hover:scale-105 active:scale-95 hover:shadow-teal-500/50">
              Stake Now (Don&apos;t Expect Anything)
            </button>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section
        id="tokenomics"
        className="py-12 sm:py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 animate-gradient-x"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300 animate-gradient-x">
            Tokenomics: The Peak of Financial Engineering (Probably)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 text-base sm:text-lg">
            <div className="bg-gray-800/30 p-6 sm:p-8 rounded-lg backdrop-blur-sm border border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                Supply Distribution
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                Total Supply: 69,420,000,000,000 $FOOFUR (because moon math)
              </p>
              <ul className="list-disc list-inside mx-auto w-fit text-left text-sm sm:text-base">
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Airdrop & Community: 70% (for the degens)
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Marketing & Partnerships: 15% (gotta shill this somehow)
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Team & Advisors: 10% (they need lambos too)
                </li>
                <li className="hover:text-purple-300 transition-colors duration-300">
                  Liquidity Pools: 5% (so you can actually buy this)
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/30 p-6 sm:p-8 rounded-lg backdrop-blur-sm border border-pink-500/20 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 font-display text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
                Taxation is Theft... Except Ours
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                A small transaction tax (variable, depends on cosmic alignment)
                applies:
              </p>
              <ul className="list-disc list-inside mx-auto w-fit text-left text-sm sm:text-base">
                <li className="hover:text-pink-300 transition-colors duration-300">
                  Buy Tax: (TBD)% - Fuels the meme engine
                </li>
                <li className="hover:text-pink-300 transition-colors duration-300">
                  Sell Tax: (Also TBD)% - Discourages paper hands
                </li>
                <li className="hover:text-pink-300 transition-colors duration-300">
                  Reflections: (Maybe?) - Passive income for diamond paws
                </li>
              </ul>
              <p className="mt-4 italic text-purple-300 text-sm sm:text-base">
                Exact percentages and mechanisms subject to change based on meme
                volatility and developer whims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Section */}
      <section className="bg-gradient-to-r from-purple-900 via-pink-600 to-yellow-400 py-16 px-6 text-white text-center">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Foofur NFT's
        </h2>
        <p className="max-w-2xl mx-auto text-xl italic mb-12">
          Infinitely mintable JPEGs with zero meaning. Get yours today. Or
          tomorrow. Or whenever.
        </p>

        {/* Fake Progress Bar */}
        <div className="max-w-xl mx-auto bg-black rounded-full p-1 mb-6">
          <div
            className="bg-green-400 h-6 rounded-full text-black text-sm font-bold flex items-center justify-center animate-pulse"
            style={{ width: "98%" }}
          >
            9,876,321 / ∞ Minted
          </div>
        </div>
        <p className="text-sm text-yellow-100 mb-12">
          Almost gone! (Just kidding. It's infinite.)
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* NFT Card 1 */}
          <div className="bg-white text-black rounded-xl shadow-2xl p-6 w-80 transform hover:scale-105 transition">
            <img
              src="/foofur_moon.png"
              alt="Moon Foofur NFT"
              className="rounded-lg mb-4 border-4 border-yellow-400"
            />
            <h3 className="text-2xl font-bold">#001 – Gangsta Fur</h3>
            <p className="mt-2 text-sm italic">
              Own it. Flex it. It still does nothing.
            </p>
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition">
              Mint for 69 SOL
            </button>
            <p className="mt-2 text-xs text-gray-600">
              No perks. No roadmap. Just vibes.
            </p>
          </div>

          {/* NFT Card 2 */}
          <div className="bg-white text-black rounded-xl shadow-2xl p-6 w-80 transform hover:rotate-1 transition">
            <img
              src="/foofur_pizza.png"
              alt="Pizza Delivery Foofur NFT"
              className="rounded-lg mb-4 border-4 border-red-400"
            />
            <h3 className="text-2xl font-bold">#002 – Pizza Fur</h3>
            <p className="mt-2 text-sm italic">
              So rare. So jpeg. So... pointless.
            </p>
            <button className="mt-4 px-4 py-2 bg-red-400 text-black font-bold rounded-full hover:bg-red-300 transition">
              Mint for 420 BONK
            </button>
            <p className="mt-2 text-xs text-gray-600">
              No Discord role. No utility. No future.
            </p>
          </div>
        </div>

        <p className="mt-16 text-sm italic text-yellow-100 max-w-xl mx-auto">
          Disclaimer: These NFTs are infinite. Their value is not. Minting one
          is a spiritual journey with absolutely no destination.
        </p>

        {/* Wallet Profiles Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
            Legendary Wallet Warriors
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/spinner.png"
                  alt="Profile 1"
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-purple-500"
                />
                <div>
                  <h4 className="text-xl font-bold text-purple-400">
                    0xWOOF69
                  </h4>
                  <p className="text-sm text-gray-400">
                    The Dark Knight of Degen
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">
                  NFTs Minted:{" "}
                  <span className="text-purple-400 font-mono">420,069</span>
                </p>
                <p className="text-sm text-gray-300">
                  Last Mint:{" "}
                  <span className="text-purple-400">2 minutes ago</span>
                </p>
                <p className="text-sm text-gray-300">
                  Status:{" "}
                  <span className="text-green-400">Still Breathing</span>
                </p>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/anabel.png"
                  alt="Profile 2"
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-pink-500"
                />
                <div>
                  <h4 className="text-xl font-bold text-pink-400">0xRUGGED</h4>
                  <p className="text-sm text-gray-400">The Joker of JPEGs</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">
                  NFTs Minted:{" "}
                  <span className="text-pink-400 font-mono">1,337,420</span>
                </p>
                <p className="text-sm text-gray-300">
                  Last Mint: <span className="text-pink-400">Just now</span>
                </p>
                <p className="text-sm text-gray-300">
                  Status:{" "}
                  <span className="text-yellow-400">Probably Insane</span>
                </p>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/hazel.png"
                  alt="Profile 3"
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-yellow-500"
                />
                <div>
                  <h4 className="text-xl font-bold text-yellow-400">
                    0xHODLER
                  </h4>
                  <p className="text-sm text-gray-400">
                    The Thanos of Tokenomics
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">
                  NFTs Minted:{" "}
                  <span className="text-yellow-400 font-mono">∞</span>
                </p>
                <p className="text-sm text-gray-300">
                  Last Mint: <span className="text-yellow-400">Always</span>
                </p>
                <p className="text-sm text-gray-300">
                  Status: <span className="text-red-400">Inevitable</span>
                </p>
              </div>
            </div>
          </div>

          {/* Wallet Wars Footer */}
          <div className="mt-12 text-center">
            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
              Coming Soon: Wallet Wars
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Where wallets battle for the title of &quot;Most Pointless JPEG
              Collection&quot;
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <span className="text-xs text-gray-500">⚔️ Epic Battles</span>
              <span className="text-xs text-gray-500">🎭 Drama</span>
              <span className="text-xs text-gray-500">💸 Zero Stakes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
