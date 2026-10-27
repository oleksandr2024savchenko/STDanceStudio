/** Liest ein Textfeld aus FormData und entfernt Leerzeichen am Rand. */
export function readField(data: FormData, name: string): string {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

/** "2027-06-12" -> "12. Juni 2027" (österreichisches Deutsch). */
export function formatDateDe(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("de-AT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
