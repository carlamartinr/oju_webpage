"use client";

import { useEffect, useState } from "react";
import type { RefObject } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons";
import { cartTotals, formatPrice, gildaCount } from "./cart";
import { onAdd, useCart } from "./cart-store";

const duration = 4000;

function onScreen(element: Element | null) {
  if (!element) return false;
  const box = element.getBoundingClientRect();
  return box.bottom > 0 && box.top < window.innerHeight;
}

/**
 * Brief shortcut to the order after adding a gilda, only when neither the
 * header link nor the closing summary is in view. Repeated adds update it
 * instead of stacking. Screen readers already hear the summary.
 */
export function OrderToast({ summary }: { summary: RefObject<HTMLElement | null> }) {
  const { count, price } = cartTotals(useCart());
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [adds, setAdds] = useState(0);

  useEffect(
    () =>
      onAdd(() => {
        const header = document.querySelector('nav a[href="/pedido"]');
        const needed = !onScreen(header) && !onScreen(summary.current);
        setVisible(needed);
        if (needed) setAdds((total) => total + 1);
      }),
    [summary],
  );

  // Each add restarts the time; a mouse resting on it keeps it.
  useEffect(() => {
    if (!visible || hovered) return;
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [visible, hovered, adds]);

  const shown = visible && count > 0;

  return (
    <Link
      href="/pedido"
      inert={!shown}
      onPointerEnter={(event) => setHovered(event.pointerType === "mouse")}
      onPointerLeave={() => setHovered(false)}
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap bg-olive px-4 py-3 text-sm text-albariza shadow-[0_12px_32px_rgb(21_45_11/0.25)] transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none ${shown ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <span className="font-semibold">Ver pedido</span>
      <span className="text-albariza/75 tabular-nums">
        {gildaCount(count)} · {formatPrice(price)}
      </span>
      <ArrowIcon className="size-4" />
    </Link>
  );
}
