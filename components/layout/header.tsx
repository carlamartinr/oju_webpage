"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BagIcon } from "@/components/ui/icons";

const links = [
  { href: "/carta", label: "Carta" },
  { href: "/conocenos", label: "Conócenos" },
  { href: "/reserva", label: "Reserva" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-5 py-5 md:px-12 md:py-7">
      <Link href="/" aria-label="Ojú, inicio" className="shrink-0">
        <Image
          src="/oju.png"
          alt="Ojú"
          width={90}
          height={71}
          className="h-auto w-16 md:w-22"
          preload
        />
      </Link>
      <nav
        aria-label="Navegación principal"
        className="flex items-center gap-4 text-[13px] font-semibold sm:gap-8 md:text-sm"
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            className={`border-b py-3 transition-colors hover:border-olive ${pathname === href ? "border-olive" : "border-transparent"}`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <span
        role="img"
        aria-label="Carrito: compras online próximamente"
        title="Compras online próximamente"
        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-olive/25 text-olive/55"
      >
        <BagIcon />
      </span>
    </header>
  );
}
