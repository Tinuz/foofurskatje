/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        sparkle: "sparkle 3s linear infinite",
        "sparkle-1": "sparkle-1 2s ease-in-out infinite",
        "sparkle-2": "sparkle-2 2.5s ease-in-out infinite",
        "sparkle-3": "sparkle-3 3s ease-in-out infinite",
        "sparkle-4": "sparkle-4 2.2s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        sparkle: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        "sparkle-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: 0 },
          "50%": {
            transform: "translate(-10px, -10px) scale(1.5)",
            opacity: 1,
          },
        },
        "sparkle-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: 0 },
          "50%": { transform: "translate(10px, -10px) scale(1.5)", opacity: 1 },
        },
        "sparkle-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: 0 },
          "50%": { transform: "translate(-10px, 10px) scale(1.5)", opacity: 1 },
        },
        "sparkle-4": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: 0 },
          "50%": { transform: "translate(10px, 10px) scale(1.5)", opacity: 1 },
        },
      },
      fontFamily: {
        custom: ["'Press Start 2P'", "'VT323'", "monospace"],
      },
    },
  },
  plugins: [],
};
