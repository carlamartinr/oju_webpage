import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Ojú | Olivas y gildas del sur", template: "%s | Ojú" },
  description:
    "El sur se come a bocados. Gildas, aceitunas y aperitivos con acento andaluz. Descubre el universo Ojú.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenido"
          className="sr-only z-50 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-olive focus:p-4 focus:text-albariza"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
