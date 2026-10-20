/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#17130f",
          deep: "#110e0b",
          surface: "#1e1914",
          card: "rgba(30, 25, 20, 0.7)",
          border: "rgba(198, 166, 106, 0.2)",
        },
        gold: {
          DEFAULT: "#c6a66a",
          light: "#d6b77a",
          pale: "#e8d3a7",
          dark: "#9e7f44",
        },
        cream: {
          DEFAULT: "#fbf8f2",
          soft: "#f4f0e7",
          dark: "#e8e2d5",
        },
        muted: {
          DEFAULT: "#7b7469",
          light: "#a39b8f",
          dark: "#57524a",
        },
      },
      fontFamily: {
        serif: ["var(--font-italiana)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.02)", opacity: "0.95" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
