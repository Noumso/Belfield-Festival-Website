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
        }
      }
    },
    plugins: []
  };
  