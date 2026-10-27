import Link from "next/link";
import { Wave } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-olive/20 px-6 py-4 sm:py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 text-xs">
        <Link href="/" className="font-display text-xl">
          Ojú
          <span className="ml-4 hidden font-sans text-xs font-normal sm:inline">
            Gildas y aceitunas del sur.
          </span>
        </Link>
        <Wave className="hidden h-4 w-16 text-sea sm:block" />
        <Link href="/#contacto" className="py-3 hover:underline">
          Contacto
        </Link>
      </div>
    </footer>
  );
}
