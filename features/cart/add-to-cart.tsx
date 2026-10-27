"use client";

import { useEffect, useRef } from "react";
import { PlusIcon } from "@/components/ui/icons";
import { setQuantity, useCart } from "./cart-store";
import { addButtonClass, QuantityStepper } from "./quantity-stepper";

/**
 * A "+" that turns into the stepper in place: its "+" stays under the finger,
 * so tapping the same spot keeps adding. Ordering never leaves Carta.
 */
export function AddToCart({ id, name }: { id: string; name: string }) {
  const quantity = useCart()[id] ?? 0;
  const add = useRef<HTMLButtonElement>(null);
  const plus = useRef<HTMLButtonElement>(null);
  // The pressed control is replaced; keep focus on its counterpart.
  const refocus = useRef(false);

  useEffect(() => {
    if (!refocus.current) return;
    refocus.current = false;
    // Only when focus was lost with the removed control, never stolen.
    if (document.activeElement && document.activeElement !== document.body) return;
    (quantity ? plus : add).current?.focus();
  }, [quantity]);

  const change = (next: number) => {
    refocus.current = !quantity !== !next;
    setQuantity(id, next);
  };

  if (!quantity) {
    return (
      <button
        ref={add}
        type="button"
        onClick={() => change(1)}
        aria-label={`Añadir ${name} al pedido`}
        className={addButtonClass}
      >
        <PlusIcon strokeWidth={2} />
      </button>
    );
  }

  return (
    <QuantityStepper
      name={name}
      quantity={quantity}
      onChange={change}
      plusRef={plus}
    />
  );
}
