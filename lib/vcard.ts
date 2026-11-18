import { SITE_URL, site, type Trainer } from "@/lib/site";

/** Öffentlicher Pfad der digitalen Visitenkarte (ohne BASE_PATH). */
export function vcardPath(trainer: Trainer): string {
  return `/kontakt/${trainer.id}.vcf`;
}

/** Sonderzeichen gemäß RFC 6350 maskieren. */
function esc(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\;").replace(/\n/g, "\\n");
}

/**
 * vCard 3.0 – wird von iPhone (Kontakte) und Android zuverlässig importiert.
 * Zeilenenden CRLF laut Spezifikation.
 */
export function buildVCard(trainer: Trainer): string {
  const { address } = site;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:;${esc(trainer.name)};;;`,
    `FN:${esc(trainer.name)}`,
    `ORG:${esc(site.name)}`,
    `TITLE:${esc(trainer.role)}`,
    `TEL;TYPE=CELL,VOICE:${trainer.phone}`,
    `ADR;TYPE=WORK:;;${esc(address.street)};${esc(address.city)};;${address.postalCode};${esc(address.countryName)}`,
    `URL:${SITE_URL}${trainer.href}`,
    `NOTE:${esc(`WhatsApp: ${trainer.phoneDisplay}`)}`,
    "END:VCARD",
  ];
  return lines.join("\r\n") + "\r\n";
}
