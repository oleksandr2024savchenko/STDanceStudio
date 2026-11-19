"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const curtain: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
  shown: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
  },
};

/**
 * Öffnet ein Bild wie einen Vorhang von unten nach oben und lässt es dabei sanft zur Ruhe kommen.
 * Füllt den positionierten Elternrahmen vollständig aus.
 *
 * Die Sichtbarkeit wird am äußeren, nicht beschnittenen Element gemessen: Ein vollständig
 * per clip-path verdecktes Element meldet der IntersectionObserver nie als sichtbar.
 */
export function CurtainReveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0"
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div className="absolute inset-0" variants={curtain}>
        {children}
      </motion.div>
    </motion.div>
  );
}
