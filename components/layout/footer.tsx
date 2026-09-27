import Link from "next/link";
import { Wave } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-olive/20 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-xs sm:flex-row">
        <Link href="/" className="font-display text-xl">
          Ojú
          <span className="ml-4 font-sans text-xs font-normal">
            Olivas y gildas del sur.
          </span>
        </Link>
        <Wave className="h-4 w-16 text-sea" />
        <div className="flex items-center gap-5">
          <Link href="/#contacto" className="py-2 hover:underline">
            Contacto
          </Link>
          <span>Hecho con acento andaluz.</span>
        </div>
      </div>
    </footer>
  );
}
