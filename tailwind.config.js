/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#b91c1c",
          "red-dark": "#7f1d1d",
          "red-glow": "rgba(185, 28, 28, 0.4)",
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(185, 28, 28, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(185, 28, 28, 0.7)" },
        },
      },
    },
  },
  plugins: [],
};
