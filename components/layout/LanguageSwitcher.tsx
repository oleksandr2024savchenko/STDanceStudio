"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const languages = [
  { code: "DE", label: "Deutsch" },
  { code: "EN", label: "English" },
  { code: "UK", label: "Українська" },
  { code: "RU", label: "Русский" },
] as const;

/**
 * Sprachauswahl (nur Oberfläche): Die Auswahl wird nur im Komponentenzustand
 * gehalten, eine echte Übersetzung ist noch nicht angebunden.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<(typeof languages)[number]["code"]>("DE");
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label="Sprache wählen"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-[2px] px-1.5 py-2 text-xs font-medium tracking-[0.14em] sm:px-2.5 text-[#3A3835] transition-colors hover:text-gold-700"
      >
        <span>{current}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn("hidden h-3.5 w-3.5 transition-transform duration-200 min-[360px]:block", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Sprache"
          className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] rounded-[2px] border border-line bg-surface py-1 shadow-card"
        >
          {languages.map((lang) => {
            const selected = lang.code === current;
            return (
              <li key={lang.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrent(lang.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm transition-colors hover:bg-canvas-alt",
                    selected ? "text-gold-700" : "text-ink",
                  )}
                >
                  <span>{lang.label}</span>
                  <span className="flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] text-muted">
                    {lang.code}
                    {selected && <Check aria-hidden="true" className="h-3.5 w-3.5 text-gold-700" />}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
