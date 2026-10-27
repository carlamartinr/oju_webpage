"use client";

import { useState } from "react";
import type { Ref } from "react";
import { MinusIcon, PlusIcon } from "@/components/ui/icons";
import { maxQuantity } from "./cart";

const buttonClass =
  "grid size-11 shrink-0 place-items-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30";

/** Filled "+": the same button as "Añadir", in the same place. */
export const addButtonClass = `${buttonClass} bg-olive text-albariza hover:bg-olive/85`;

/** − / amount / +. The amount can also be typed; 0 removes the product. */
export function QuantityStepper({
  name,
  quantity,
  onChange,
  plusRef,
}: {
  name: string;
  quantity: number;
  onChange: (quantity: number) => void;
  plusRef?: Ref<HTMLButtonElement>;
}) {
  const [draft, setDraft] = useState<string | null>(null);

  const commit = () => {
    if (draft === null) return;
    if (draft !== "" && Number(draft) !== quantity) onChange(Number(draft));
    setDraft(null);
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        aria-label={quantity > 1 ? `Una ${name} menos` : `Quitar ${name} del pedido`}
        className={`${buttonClass} border border-olive/40 hover:border-olive hover:bg-olive hover:text-albariza`}
      >
        <MinusIcon strokeWidth={2} />
      </button>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        autoComplete="off"
        aria-label={`Cantidad de ${name}`}
        value={draft ?? String(quantity)}
        onFocus={(event) => {
          setDraft(String(quantity));
          event.currentTarget.select();
        }}
        onChange={(event) =>
          setDraft(event.target.value.replace(/\D/g, "").slice(0, 2))
        }
        onBlur={commit}
        onKeyDown={(event) => {
          if (event.key === "Enter") event.currentTarget.blur();
        }}
        className="h-11 w-11 bg-transparent text-center text-base font-semibold tabular-nums"
      />
      <button
        ref={plusRef}
        type="button"
        onClick={() => onChange(quantity + 1)}
        disabled={quantity >= maxQuantity}
        aria-label={`Una ${name} más`}
        className={addButtonClass}
      >
        <PlusIcon strokeWidth={2} />
      </button>
    </div>
  );
}
