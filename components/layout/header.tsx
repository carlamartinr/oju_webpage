"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cartTotals, gildaCount } from "@/features/cart/cart";
import gsap from "gsap";
import { useCart, useHydrated } from "@/features/cart/cart-store";

const links = [
  { href: "/carta", label: "Carta" },
  { href: "/conocenos", label: "Conócenos" },
  { href: "/pedido", label: "Pedido" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = cartTotals(useCart());
  const hydrated = useHydrated();
  const badge = useRef<HTMLSpanElement>(null);
  const shown = useRef<number>(undefined);

  // A short bump confirms each change, but not the saved count on load.
  useEffect(() => {
    if (!hydrated) return;
    const previous = shown.current;
    shown.current = count;
    if (previous === undefined || previous === count || !badge.current) return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    gsap.fromTo(
      badge.current,
      { scale: 1.35 },
      { scale: 1, duration: 0.45, ease: "power2.out", clearProps: "transform" },
    );
  }, [count, hydrated]);
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-5 md:px-12 md:py-7">
      <Link href="/" aria-label="Ojú, inicio" className="shrink-0">
        <Image
          src="/oju.png"
          alt="Ojú"
          width={1429}
          height={1101}
          className="block h-auto w-16 min-[360px]:w-20 sm:w-25 md:w-30"
          sizes="(max-width: 359px) 64px, (max-width: 639px) 80px, (max-width: 767px) 100px, 120px"
          unoptimized
          preload
        />
      </Link>
      <nav
        aria-label="Navegación principal"
        className="flex items-center gap-3 text-sm font-semibold sm:gap-8 sm:text-base md:gap-10 md:text-lg"
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            className={`flex items-center gap-1.5 border-b py-3 transition-colors hover:border-olive ${pathname === href ? "border-olive" : "border-transparent"}`}
          >
            {label}
            {href === "/pedido" && count > 0 && (
              <>
                <span
                  ref={badge}
                  aria-hidden="true"
                  className="grid h-5 min-w-5 place-items-center rounded-full bg-sea px-1 text-[11px] leading-none text-albariza tabular-nums"
                >
                  {count}
                </span>
                <span className="sr-only">, {gildaCount(count)}</span>
              </>
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
}
