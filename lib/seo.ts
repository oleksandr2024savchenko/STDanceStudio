import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  /** Kurztitel; das Layout hängt „| ST Dance Studio“ an. */
  title: string;
  description: string;
  /** Pfad der Seite, z. B. "/oleksandr" */
  path: string;
};

/**
 * Vollständige Metadaten pro Seite. Next ersetzt `openGraph` und `alternates`
 * des Layouts komplett, daher werden sie hier vollständig gesetzt.
 */
export function buildPageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
