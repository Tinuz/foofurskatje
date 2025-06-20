import Image from "next/image";
import Portrait from "./components/Portrait";

type EffectType = "glitch" | "shake" | "crt" | "wobble";

type PortraitVariant = {
  id: number;
  src: string;
  name: string;
  price: string;
  description?: string;
};

type PortraitData = {
  id: number;
  src: string;
  name: string;
  price: string;
  description?: string;
  effect?: EffectType;
  variants: PortraitVariant[]; // nieuw veld
};

const portraits: PortraitData[] = [
	{
		id: 1,
		src: "/foofprints/images/Fast_Food_Clerk.png",
		name: "Fast Food Clerk",
		price: "$0.99",
		effect: "glitch",
		description: "Hired by accident. Still promoted to ‘Meme Shift Manager’.",
		variants: [
			{
				id: 101,
				src: "/foofprints/images/Fast_Food_Clerk_variant1.png",
				name: "Fast Food Clerk Variant 1",
				price: "$0.99",
				description: "First variant of Fast Food Clerk.",
			},
			{
				id: 102,
				src: "/foofprints/images/Fast_Food_Clerk_variant2.png",
				name: "Fast Food Clerk Variant 2",
				price: "$1.09",
				description: "Second variant of Fast Food Clerk.",
			},
		],
	},
	{
		id: 2,
		src: "/foofprints/images/DAO_Lawyer.png",
		name: "DAO Lawyer",
		price: "€0",
		effect: "shake",
		description: "Advised FoofDAO into three forks and a lawsuit. Promoted for ambiguity.",
		variants: [],
	},
	{
		id: 3,
		src: "/foofprints/images/Blockchain_Builder.png",
		name: "Blockchain Builder",
		price: "€99",
		effect: "crt",
		description: "Laid the foundation on a testnet. Still standing on it.",
		variants: [],
	},
	{
		id: 4,
		src: "/foofprints/images/Token_Wizard.png",
		name: "Token Wizard",
		price: "€404",
		description: "Cast `mintSpell()` with zero gas. Result: fog.",
		variants: [],
	},
	{
		id: 5,
		src: "/foofprints/images/Fulfilment_Specialist.png",
		name: "Fulfilment Specialist",
		price: "€7.95",
    effect: "shake",
		description: "Shipped boxes labeled 'utility'. Contents unknown.",
		variants: [],
	},
	{
		id: 6,
		src: "/foofprints/images/Shillfluencer.png",
		name: "Shillfluencer",
		price: "€3",
		description: "Gave a TEDtalk to his cat. Went viral in a different timeline.",
		variants: [],
	},
	{
		id: 7,
		src: "/foofprints/images/Rug_Pull_Artist.png",
		name: "Rug Pull Artist",
		price: "€0.01",
		description: "Offers free carpet advice. Then removes the floor.",
		variants: [],
	},
	{
		id: 8,
		src: "/foofprints/images/Ghost_CEO.png",
		name: "Ghost CEO",
		price: "€∞",
		description: "Never present. Never fired. Always responsible.",
		variants: [],
	},
	{
		id: 9,
		src: "/foofprints/images/Customer_Support.png",
		name: "Customer Support",
		price: "€19",
		description: "Only responds to tickets that are already on fire.",
		variants: [],
	},
	{
		id: 10,
		src: "/foofprints/images/Whitepaper_Author.png",
		name: "Whitepaper Author",
		price: "€0",
		description: "Wrote 27 pages of lorem ipsum. Nobody noticed.",
		variants: [],
	},
	{
		id: 11,
		src: "/foofprints/images/Meme_QA_Tester.png",
		name: "Meme QA Tester",
		price: "€17",
		description: "Rated memes for authenticity. Declared all of them ‘maybe art’.",
		variants: [],
	}
];

export default function Home() {
    return (
        <main
            className="min-h-screen p-4 sm:p-8 md:p-20 flex flex-col items-center relative overflow-hidden"
            style={{
                background:
                    "radial-gradient(ellipse at 50% 30%, #d2b77c 60%, #8c6b3f 100%)",
                filter: "contrast(1.08) brightness(1.08) blur(0.5px) saturate(1.1)",
            }}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, #fffbe80a 3px, transparent 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, #fffbe805 3px, transparent 4px)",
                    mixBlendMode: "screen",
                    opacity: 0.5,
                }}
            />
            <h1
                className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 relative z-10 text-center break-words"
                style={{
                    color: "#3a2f1b",
                    fontFamily: '"Press Start 2P", "VT323", monospace',
                    textShadow: "0 4px 24px #d2b77c55, 0 0 8px #fffbe855",
                }}
            >
                They Showed Up
            </h1>
            <p
                className="mb-8 text-center relative z-10 max-w-xs sm:max-w-md md:max-w-lg"
                style={{
                    color: "#3a2f1b",
                    fontFamily: '"VT323", "Press Start 2P", monospace',
                    fontSize: "1rem",
                }}
            >
                We don’t know why. We don’t know how. But they showed up.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8 w-full max-w-7xl px-2">
                {portraits.map((portrait, idx) => (
                    <div key={portrait.id} className="relative flex flex-col items-center w-full">
                        <Portrait
                            id={portrait.id}
                            src={portrait.src}
                            name={portrait.name}
                            price={portrait.price}
                            description={portrait.description}
                            effect={portrait.effect}
                            variants={portrait.variants}
                        />
                        {idx === portraits.length - 1 && (
                            <Image
                                src="/foofprints/images/fired.png"
                                alt="Fired"
                                width={120}
                                height={120}
                                className="absolute -right-20 top-1/2 -translate-y-1/2 rotate-12 drop-shadow-lg hidden md:block"
                                style={{
                                    filter: "drop-shadow(2px 4px 8px #8c6b3f88)",
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}