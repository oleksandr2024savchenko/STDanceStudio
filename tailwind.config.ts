import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        /**
         * Alle Markenfarben kommen aus CSS-Variablen (RGB-Kanäle, siehe app/globals.css),
         * damit Seiten über `ThemeScope` ein eigenes Farbschema bekommen können.
         */
        canvas: {
          DEFAULT: "rgb(var(--canvas) / <alpha-value>)",
          alt: "rgb(var(--canvas-alt) / <alpha-value>)",
        },
        /** Gold für Rahmen, Konturen und Zierrat (meist mit Alpha verwenden). */
        brass: "rgb(var(--brass) / <alpha-value>)",
        /** Karten und Container. */
        surface: "rgb(var(--surface) / <alpha-value>)",
        /** Dünne, warme Rahmen und Trennlinien. */
        line: "rgb(var(--line) / <alpha-value>)",
        /** Haupttext und Überschriften. */
        ink: "rgb(var(--ink) / <alpha-value>)",
        /** Zweittext. */
        muted: "rgb(var(--muted) / <alpha-value>)",
        /** Mattes Wiener Gold: 500 = Akzent, 700 = Text auf dem jeweiligen Grund. */
        gold: {
          50: "rgb(var(--gold-50) / <alpha-value>)",
          100: "#F5EBD3",
          200: "#EBD6A9",
          300: "#DDC083",
          400: "#D2AE6C",
          500: "rgb(var(--gold-500) / <alpha-value>)",
          600: "rgb(var(--gold-600) / <alpha-value>)",
          700: "rgb(var(--gold-700) / <alpha-value>)",
          800: "rgb(var(--gold-800) / <alpha-value>)",
          900: "#443418",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      boxShadow: {
        /** Realistische, weiche Tiefe für gerahmte Flächen. */
        frame: "0 20px 50px rgba(0,0,0,0.08)",
        glass: "0 10px 30px -18px rgba(0,0,0,0.12)",
        gold: "0 1px 2px rgba(0,0,0,0.04), 0 18px 40px -22px rgba(0,0,0,0.14)",
        card: "0 1px 2px rgba(0,0,0,0.03), 0 14px 32px -22px rgba(0,0,0,0.14)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #DFBE74 0%, #C5A059 50%, #A67C37 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
