"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  highlighted?: boolean;
  className?: string;
};

export function Card({ children, highlighted = false, className }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative rounded-2xl border bg-surface p-8 shadow-card transition-shadow duration-300 hover:shadow-gold",
        highlighted
          ? "border-brass/50 shadow-gold"
          : "border-line hover:border-brass/40",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brass to-transparent transition-opacity duration-300",
          highlighted ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
      />
      {children}
    </motion.div>
  );
}
