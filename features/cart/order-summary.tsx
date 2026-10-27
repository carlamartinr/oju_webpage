"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { cartTotals, formatPrice, gildaCount } from "./cart";
import { useCart } from "./cart-store";

/** Closes Carta with the live order, where browsing naturally ends. */
export function OrderSummary() {
  const { count, price } = cartTotals(useCart());

  return (
    <div className="flex flex-col items-start justify-between gap-6 border-t border-olive/20 pt-10 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-2xl">
          {count ? "Tu pedido" : "¿Ya tienes tus favoritas?"}
        </h2>
        {/* Also announces every change to screen readers. */}
        <p role="status" className="mt-2 text-olive/75 tabular-nums">
          {count
            ? `${gildaCount(count)} · ${formatPrice(price)}`
            : "Añádelas y envíanos tu pedido por WhatsApp."}
        </p>
      </div>
      {count > 0 && <ButtonLink href="/pedido">Ver mi pedido</ButtonLink>}
    </div>
  );
}
