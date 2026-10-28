"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { BASE_PATH, mainNav, site } from "@/lib/site";

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  // Beim Scrollen schrumpft die hohe Kopfzeile, damit sie dem Inhalt nicht im Weg steht.
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas">
      <div
        className={cn(
          "container grid grid-cols-[1fr_auto_1fr] items-center gap-2 transition-[padding] sm:gap-4 duration-300",
          compact ? "py-2.5" : "py-3 lg:py-5 xl:py-6",
        )}
      >
        <nav
          aria-label="Hauptnavigation"
          className="hidden justify-self-start lg:block"
        >
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "px-2.5 py-2 text-[13px] font-normal tracking-[0.06em] transition-colors xl:px-4 xl:text-sm xl:tracking-[0.08em]",
                      active ? "text-gold-700" : "text-[#3A3835] hover:text-gold-500",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/"
          aria-label={`${site.name} – Startseite`}
          className="col-start-2 flex shrink-0 flex-col items-center justify-self-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src={`${BASE_PATH}/images/st-dance-studio-logo.png`}
            alt={site.name}
            width={510}
            height={610}
            priority
            className={cn(
              "w-auto transition-[height] duration-300",
              compact ? "h-16 lg:h-20" : "h-[72px] lg:h-36 xl:h-40",
            )}
          />
        </Link>

        <div className="col-start-3 flex items-center gap-1 justify-self-end max-lg:contents lg:gap-3">
          <LanguageSwitcher className="max-lg:col-start-1 max-lg:row-start-1 max-lg:justify-self-start" />
          <Button href="/#schnuppertraining" className="hidden lg:inline-flex">
            Schnuppertraining
          </Button>

          <button
            type="button"
            className="rounded-[2px] p-1.5 text-ink/80 transition hover:bg-canvas-alt max-lg:col-start-3 max-lg:row-start-1 max-lg:justify-self-end sm:p-2 lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label={`${site.shortName} Menü`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <ul className="container flex flex-col py-4">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block py-3 font-serif text-2xl",
                        active ? "text-gold-700" : "text-ink",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4">
                <Button
                  href="/#schnuppertraining"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Kostenloses Schnuppertraining
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
