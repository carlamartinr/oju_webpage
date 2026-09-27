import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ojú | Olivas y gildas del sur",
  description: "Gildas, aceitunas y aperitivos con acento andaluz. Conoce Ojú y descubre el sabor del sur.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}
