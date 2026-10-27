/**
 * Baut einen wa.me-Link. `phone` darf Plus, Leerzeichen und Bindestriche enthalten.
 */
export function buildWhatsAppUrl(phone: string, message?: string): string {
  const digits = phone.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function buildTelUrl(phone: string): string {
  return `tel:+${phone.replace(/\D/g, "")}`;
}
