import type { ReactNode } from "react";

export type Theme = "noir" | "cashmere";

type Props = {
  theme: Theme;
  children: ReactNode;
};

/**
 * Aktiviert ein Farbschema für eine Seite (Variablen in app/globals.css).
 * Kopf- und Fußzeile übernehmen das Schema automatisch über `:root:has([data-theme])`.
 */
export function ThemeScope({ theme, children }: Props) {
  return (
    <div data-theme={theme} className="bg-canvas text-ink">
      {children}
    </div>
  );
}
