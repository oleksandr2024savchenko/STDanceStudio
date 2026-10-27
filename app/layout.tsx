import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildClubSchema } from "@/lib/schema";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} – Tanzen mit Haltung in Wien`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.name} – Tanzen mit Haltung in Wien`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – Tanzen mit Haltung in Wien`,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-AT" className={`dark ${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <JsonLd data={buildClubSchema()} />
      </body>
    </html>
  );
}
