"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/carta", label: "Carta" },
  { href: "/conocenos", label: "Conócenos" },
  { href: "/reserva", label: "Reserva" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between gap-3 max-[379px]:flex-wrap px-4 py-5 md:px-12 md:py-7">
      <Link href="/" aria-label="Ojú, inicio" className="shrink-0">
        <Image
          src="/oju.png"
          alt="Ojú"
          width={1429}
          height={1101}
          className="block h-auto w-20 sm:w-25 md:w-30"
          sizes="(max-width: 639px) 80px, (max-width: 767px) 100px, 120px"
          unoptimized
          preload
        />
      </Link>
      <nav
        aria-label="Navegación principal"
        className="flex items-center max-[379px]:order-3 max-[379px]:w-full max-[379px]:justify-center gap-3 text-sm font-semibold sm:gap-8 sm:text-base md:gap-10 md:text-lg"
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
    </header>
  );
}
