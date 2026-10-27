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
        /** Hintergrund: warmes Elfenbein statt kaltem Klinikweiß. */
        canvas: {
          DEFAULT: "#FBF9F5",
          alt: "#F8F5EE",
        },
        /** Karten und Container. */
        surface: "#FFFFFF",
        /** Dünne, warme Rahmen und Trennlinien. */
        line: "#EADBCE",
        /** Haupttext und Überschriften: tiefes, warmes Anthrazit. */
        ink: "#181716",
        /** Zweittext: Kaschmirgrau für Beschriftungen und Kennzahlen. */
        muted: "#635F5B",
        /** Mattes Gold: 500 = Akzent/CTA, 600 = Verlaufsende, 700 = Text auf hellem Grund. */
        gold: {
          50: "#FBF6EA",
          100: "#F5EBD3",
          200: "#EBD6A9",
          300: "#DDC083",
          400: "#D2AE6C",
          500: "#C5A059",
          600: "#B38F46",
          700: "#8A6A2B",
          800: "#664E21",
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
        cta: "0 4px 20px rgba(197,160,89,0.25)",
        gold: "0 1px 2px rgba(24,23,22,0.04), 0 18px 44px -20px rgba(179,143,70,0.35)",
        card: "0 1px 2px rgba(24,23,22,0.03), 0 14px 36px -22px rgba(24,23,22,0.18)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C5A059 0%, #B38F46 100%)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(197,160,89,0.16) 0%, rgba(251,249,245,0) 70%)",
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
