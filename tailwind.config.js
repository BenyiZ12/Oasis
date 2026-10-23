/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bosque: "#183D32",
        oliva: "#64745A",
        crema: "#F6F2E9",
        arena: "#DED1BA",
        blanco: "#FFFEFA",
        carbone: "#292D29",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "1.05", letterTracking: "-0.02em" }],
        h2: ["2.75rem", { lineHeight: "1.15", letterTracking: "-0.01em" }],
        h3: ["1.875rem", { lineHeight: "1.25" }],
        h4: ["1.375rem", { lineHeight: "1.35" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        small: ["0.9375rem", { lineHeight: "1.6" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        soft: "0.75rem",
        softer: "0.4rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(24, 61, 50, 0.18)",
        softHover: "0 20px 60px -16px rgba(24, 61, 50, 0.22)",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};
