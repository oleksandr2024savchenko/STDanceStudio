"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { BASE_PATH, mainNav, site } from "@/lib/site";

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="container grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4 lg:h-28">
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
                      "rounded-full px-3 py-2 text-sm tracking-wide transition-colors xl:px-4",
                      active ? "text-gold-700" : "text-muted hover:text-ink",
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
          className="col-start-2 shrink-0 justify-self-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src={`${BASE_PATH}/images/logo.png`}
            alt={site.name}
            width={640}
            height={458}
            priority
            className="h-14 w-auto lg:h-20 xl:h-24"
          />
        </Link>

        <div className="col-start-3 flex items-center justify-self-end">
          <Button href="/#schnuppertraining" className="hidden lg:inline-flex">
            Schnuppertraining
          </Button>

          <button
            type="button"
            className="rounded-full p-2 text-ink/80 transition hover:bg-canvas-alt lg:hidden"
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
