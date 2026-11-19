/**
 * Verzögerung im Walzertakt: drei Schläge pro Takt (1-2-3), danach eine kleine Atempause.
 * So erscheinen Listen nicht gleichförmig, sondern im Rhythmus des Wiener Walzers.
 */
export function waltzDelay(index: number, beat = 0.12, bar = 0.18): number {
  return (index % 3) * beat + Math.floor(index / 3) * (beat * 3 + bar);
}

/** Römische Ziffern für nummerierte Listen (1–20 genügen). */
export function toRoman(value: number): string {
  const map: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let rest = value;
  let out = "";
  for (const [n, s] of map) {
    while (rest >= n) {
      out += s;
      rest -= n;
    }
  }
  return out;
}
