import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { legalNav, mainNav, site, trainers } from "@/lib/site";
import { buildTelUrl } from "@/lib/whatsapp";

export function Footer() {
  const { address } = site;

  return (
    <footer className="relative mt-24 border-t border-line bg-canvas-alt">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
      />
      <div className="container grid grid-cols-1 gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-ink">
            ST <span className="text-gold-700">Dance</span> Studio
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Seitennavigation">
          <p className="text-xs font-medium uppercase tracking-eyebrow text-gold-700">
            Seiten
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink/80 transition-colors hover:text-gold-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <p className="text-xs font-medium uppercase tracking-eyebrow text-gold-700">
            Kontakt
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ink/80">
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-600"
                aria-hidden="true"
              />
              <span>
                {address.street}
                <br />
                {address.postalCode} {address.city}, {address.countryName}
              </span>
            </li>
            {Object.values(trainers).map((trainer) => (
              <li key={trainer.id} className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 shrink-0 text-gold-600"
                  aria-hidden="true"
                />
                <a
                  href={buildTelUrl(trainer.phone)}
                  className="transition-colors hover:text-gold-800"
                >
                  {trainer.name}: {trainer.phoneDisplay}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail
                className="h-4 w-4 shrink-0 text-gold-600"
                aria-hidden="true"
              />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-gold-800"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-line py-6">
        <div className="container flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
          </p>
          <nav aria-label="Rechtliches">
            <ul className="flex gap-6">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-gold-800">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
