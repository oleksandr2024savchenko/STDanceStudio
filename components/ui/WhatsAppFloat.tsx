"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { oleksandrMessages } from "@/lib/content/oleksandr";
import { tetianaMessages } from "@/lib/content/tetiana";
import { trainers, type Trainer } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Ab dieser Scrolltiefe (px) erscheint der Button. */
const THRESHOLD = 400;

const pageMessages: Record<Trainer["id"], string> = {
  oleksandr: oleksandrMessages.general,
  tetiana: tetianaMessages.general,
};

/** Auf einer Trainerseite direkt zu dieser Person, sonst `null` (Auswahl anzeigen). */
function trainerForPath(pathname: string): Trainer | null {
  return Object.values(trainers).find((t) => pathname.startsWith(t.href)) ?? null;
}

const fabClass =
  "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-gold-gradient text-ink shadow-cta transition-all duration-300 hover:scale-105 hover:brightness-105";

/**
 * Schwebender WhatsApp-Kontakt auf allen Seiten.
 * Trainerseite: führt direkt zur jeweiligen Person. Übrige Seiten: öffnet eine kleine Auswahl.
 */
export function WhatsAppFloat() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const direct = trainerForPath(pathname);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auswahl schließen bei Seitenwechsel, Klick außerhalb oder Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const enter = reduce ? false : { opacity: 0, y: 16 };
  const exit = reduce ? { opacity: 0 } : { opacity: 0, y: 16 };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={rootRef}
          initial={enter}
          animate={{ opacity: 1, y: 0 }}
          exit={exit}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3"
        >
          {direct ? (
            <a
              href={buildWhatsAppUrl(direct.phone, pageMessages[direct.id])}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp an ${direct.name} öffnen`}
              title={`WhatsApp an ${direct.name}`}
              className={fabClass}
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </a>
          ) : (
            <>
              <AnimatePresence>
                {open && (
                  <motion.ul
                    id="whatsapp-choice"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-end gap-2"
                  >
                    {Object.values(trainers).map((trainer) => (
                      <li key={trainer.id}>
                        <a
                          href={buildWhatsAppUrl(trainer.phone, trainer.whatsappGreeting)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 rounded-full border border-brass/50 bg-surface py-2.5 pl-3 pr-5 text-sm text-ink shadow-card transition-colors hover:border-brass"
                        >
                          <span
                            aria-hidden="true"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-brass/50 bg-canvas-alt font-serif text-lg text-gold-700"
                          >
                            {trainer.name.charAt(0)}
                          </span>
                          {trainer.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="whatsapp-choice"
                aria-label={open ? "Kontaktauswahl schließen" : "Per WhatsApp schreiben"}
                title="WhatsApp"
                className={fabClass}
              >
                {open ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
