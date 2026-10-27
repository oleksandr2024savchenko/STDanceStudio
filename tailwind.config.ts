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
        /** Hintergrund: Palais-Elfenbein statt kaltem Klinikweiß. */
        canvas: {
          DEFAULT: "#FDFBF7",
          alt: "#F9F5EC",
        },
        /** Messing-/Palastgold für Rahmen, Konturen und Zierrat (immer mit Alpha verwenden). */
        brass: "#D4AF37",
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
        cta: "inset 0 1px 0 rgba(255,255,255,0.6), 0 6px 22px -4px rgba(212,175,55,0.5)",
        "cta-hover":
          "inset 0 1px 0 rgba(255,255,255,0.7), 0 10px 30px -6px rgba(212,175,55,0.6)",
        /** Warme, voluminöse Tiefe für gerahmte Flächen. */
        frame:
          "0 34px 64px -30px rgba(166,124,30,0.5), 0 14px 30px -16px rgba(212,175,55,0.35)",
        glass: "0 18px 44px -22px rgba(166,124,30,0.35)",
        gold: "0 1px 2px rgba(24,23,22,0.04), 0 18px 44px -20px rgba(179,143,70,0.35)",
        card: "0 1px 2px rgba(24,23,22,0.03), 0 14px 36px -22px rgba(24,23,22,0.18)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E8CF7C 0%, #D4AF37 48%, #B8902A 100%)",
        /** Lichtkegel eines Kristalllüsters: warmes Gold, von der Mitte oben nach unten verlaufend. */
        "hero-glow":
          "radial-gradient(34% 30% at 50% 0%, rgba(255,236,196,0.8) 0%, rgba(255,236,196,0) 100%), radial-gradient(75% 62% at 50% -6%, rgba(218,174,64,0.24) 0%, rgba(230,194,108,0.10) 42%, rgba(253,251,247,0) 74%)",
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
