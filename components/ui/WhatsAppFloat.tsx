"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  href: string;
  label?: string;
  /** Scrolltiefe in px, ab der der Button erscheint */
  threshold?: number;
};

export function WhatsAppFloat({ href, label = "WhatsApp", threshold = 600 }: Props) {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} öffnen`}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          title={label}
          className="fixed bottom-6 right-6 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-gold-gradient text-ink shadow-cta transition-all duration-300 hover:scale-105 hover:brightness-105"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
