import type { NextConfig } from "next";

/**
 * Statischer Export für GitHub Pages. Unter `https://<user>.github.io/<repo>`
 * liegt die Seite in einem Unterpfad, der beim Build per `NEXT_PUBLIC_BASE_PATH` gesetzt wird.
 * Lokal und bei eigener Domain bleibt der Wert leer.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
