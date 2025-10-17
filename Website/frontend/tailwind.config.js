/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          bleu: "#2D00F7",
          mauve: "#C77DFF",
          orange: "#FF9100"
        },
        fontFamily: {
          bbh: ["'BBH Sans Hegarty'", "sans-serif"],
          comic: ["'Comic Relief'", "serif"],
        },
        keyframes: {
          fadeInUp: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" }
          },
          slideInUp: {
            "0%": { opacity: 0, transform: "translateY(50px)" },
            "100%": { opacity: 1, transform: "translateY(0)" }
          }
        },
        animation: {
          fadeInUp: "fadeInUp 1s ease-out forwards",
          slideInUp: "slideInUp 1s ease-out forwards",
        },
        boxShadow: {
        textGlow: "0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px #FF9100",
      },
    },
  },
    plugins: [],
};
  