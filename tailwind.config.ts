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
        /** Hintergrund: warmes Elfenbein / Seide. */
        canvas: {
          DEFAULT: "#FAF8F5",
          alt: "#F5F1EA",
        },
        /** Champagnergold für Rahmen, Konturen und Zierrat (meist mit Alpha verwenden). */
        brass: "#D4AF37",
        /** Karten und Container. */
        surface: "#FFFFFF",
        /** Dünne, warme Rahmen und Trennlinien. */
        line: "#E8E2D7",
        /** Haupttext und Überschriften: tiefer, samtiger Graphit. */
        ink: "#1A1A1A",
        /** Zweittext: gedämpftes Aschgrau. */
        muted: "#6E6B65",
        /** Mattes Champagnergold: 500 = Akzent, 700 = Text auf hellem Grund. */
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
        cta: "inset 0 1px 0 rgba(255,255,255,0.55), 0 8px 20px -10px rgba(166,124,30,0.55)",
        "cta-hover": "inset 0 1px 0 rgba(255,255,255,0.65), 0 12px 26px -12px rgba(166,124,30,0.65)",
        /** Realistische, weiche Tiefe für gerahmte Flächen. */
        frame: "0 20px 50px rgba(0,0,0,0.08)",
        glass: "0 10px 30px -18px rgba(0,0,0,0.12)",
        gold: "0 1px 2px rgba(0,0,0,0.04), 0 18px 40px -22px rgba(0,0,0,0.14)",
        card: "0 1px 2px rgba(0,0,0,0.03), 0 14px 32px -22px rgba(0,0,0,0.14)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E8CF7C 0%, #D4AF37 48%, #B8902A 100%)",
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
