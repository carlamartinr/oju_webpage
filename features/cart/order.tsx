"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { allergenLabels } from "@/data/products";
import { site } from "@/data/site";
import { AllergenIcon } from "@/components/ui/allergen-icon";
import { ButtonLink } from "@/components/ui/button-link";
import { ExternalIcon, WhatsAppIcon } from "@/components/ui/icons";
import { cartLines, cartTotals, formatPrice, gildaCount, whatsappUrl } from "./cart";
import { clearCart, setQuantity, useCart, useHydrated } from "./cart-store";
import { QuantityStepper } from "./quantity-stepper";

type Removed = { id: string; name: string; quantity: number };

const undoDuration = 5000;

export function Order() {
  const hydrated = useHydrated();
  const cart = useCart();
  const [note, setNote] = useState("");
  const [removed, setRemoved] = useState<Removed | null>(null);
  const [showUndo, setShowUndo] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [sent, setSent] = useState(false);
  const undo = useRef<HTMLButtonElement>(null);
  // Whether the last interaction was the keyboard. Browsers disagree on
  // `:focus-visible` after script focus, and touch fakes mouse hovers.
  const keyboard = useRef(false);
  const lines = cartLines(cart);
  const { count, price } = cartTotals(cart);

  useEffect(() => {
    const onKeyDown = () => (keyboard.current = true);
    const onPointerDown = () => (keyboard.current = false);
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, []);

  // For keyboard users, a removed row takes its focused control with it;
  // offer the undo instead.
  useEffect(() => {
    if (showUndo && keyboard.current && document.activeElement === document.body) {
      undo.current?.focus();
    }
  }, [removed, showUndo]);

  // The undo fades after a few seconds, but not while the mouse is over it or
  // a keyboard user is on it.
  useEffect(() => {
    if (!showUndo || hovered || focused) return;
    const timer = setTimeout(() => setShowUndo(false), undoDuration);
    return () => clearTimeout(timer);
  }, [removed, showUndo, hovered, focused]);

  // Avoid flashing the empty state before the saved cart is read.
  if (!hydrated) return <div className="min-h-80" />;

  const change = (id: string, name: string, quantity: number) => {
    if (quantity <= 0) setRemoved({ id, name, quantity: cart[id] });
    setShowUndo(quantity <= 0);
    setSent(false);
    setQuantity(id, quantity);
  };

  // Always mounted, so screen readers hear it; collapses instead of jumping.
  const status = (
    <div
      role="status"
      inert={!showUndo}
      onPointerEnter={(event) => setHovered(event.pointerType === "mouse")}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(keyboard.current)}
      onBlur={() => setFocused(false)}
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${showUndo ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
    >
      <div className="overflow-hidden">
        {removed && (
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 pb-8 text-sm text-olive/75">
            Has quitado {removed.name}.
            <button
              ref={undo}
              type="button"
              onClick={() => {
                setQuantity(removed.id, removed.quantity);
                setShowUndo(false);
                setHovered(false);
                setFocused(false);
              }}
              className="py-2 font-semibold text-olive underline-offset-4 hover:underline"
            >
              Deshacer
            </button>
          </p>
        )}
      </div>
    </div>
  );

  if (!lines.length) {
    return (
      <div className="max-w-xl">
        {status}
        <p className="text-lg leading-relaxed text-olive/75">
          Todavía no has elegido ninguna gilda. Échale un ojo a la carta y
          añade tus favoritas.
        </p>
        <div className="mt-8">
          <ButtonLink href="/carta">Ver la carta</ButtonLink>
        </div>
        <p className="mt-12 text-sm text-olive/65">
          ¿Prefieres contárnoslo tú?{" "}
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-semibold text-olive underline-offset-4 hover:underline"
          >
            Escríbenos al {site.phone}
            <ExternalIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
      <div className="min-w-0">
        {status}
        <ul className="grid gap-10">
          {lines.map(({ product, quantity }) => (
            <li
              key={product.id}
              className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 gap-y-4 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:items-center sm:gap-x-6"
            >
              <Image
                src={product.image}
                alt=""
                width={96}
                height={96}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div className="min-w-0">
                <h2 className="text-lg">{product.name}</h2>
                <p className="mt-1 text-xs leading-relaxed text-olive/65">
                  {product.ingredients.join(" · ")}
                </p>
                <ul className="mt-2 flex gap-1.5">
                  {product.allergens.map((allergen) => (
                    <li key={allergen} title={allergenLabels[allergen]}>
                      <AllergenIcon allergen={allergen} className="size-5" />
                      <span className="sr-only">{allergenLabels[allergen]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 flex items-center justify-between gap-4 min-[400px]:col-span-1 min-[400px]:col-start-2 sm:col-start-3 sm:justify-end sm:gap-6">
                <QuantityStepper
                  name={product.name}
                  quantity={quantity}
                  onChange={(next) => change(product.id, product.name, next)}
                />
                <p className="w-20 text-right tabular-nums">
                  <span className="font-semibold">
                    {formatPrice(quantity * product.price)}
                  </span>
                  <span className="block text-xs text-olive/60">
                    {formatPrice(product.price)}/ud.
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <aside aria-label="Resumen del pedido" className="self-start lg:sticky lg:top-8">
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-semibold">Total</span>
          <span className="font-display text-4xl tracking-[-0.03em] tabular-nums">
            {formatPrice(price)}
          </span>
        </div>
        <p className="mt-1 text-right text-sm text-olive/65">
          {gildaCount(count)} · IVA incluido
        </p>
        <label className="mt-10 block text-sm font-semibold">
          Nota <span className="font-normal text-olive/65">(opcional)</span>
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            maxLength={300}
            rows={3}
            placeholder="Para cuándo lo quieres, alergias, si es para una celebración…"
            className="mt-2 w-full resize-y border border-olive/30 bg-transparent px-4 py-3 text-base font-normal placeholder:text-olive/45 focus:border-olive"
          />
        </label>
        <a
          href={whatsappUrl(cart, note)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setSent(true)}
          className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 border border-olive bg-olive px-5 py-3 text-base font-semibold text-albariza transition-colors hover:bg-olive/90"
        >
          <WhatsAppIcon className="size-6 shrink-0" />
          Pedir por WhatsApp
        </a>
        <p className="mt-4 text-xs leading-relaxed text-olive/65">
          Se abrirá WhatsApp con tu pedido ya escrito. Envíalo y te
          confirmaremos la disponibilidad y la entrega.
        </p>
        {sent && (
          <p className="mt-6 text-sm text-olive/75">
            ¿Ya lo has enviado?{" "}
            <button
              type="button"
              onClick={() => {
                clearCart();
                setNote("");
                setSent(false);
              }}
              className="py-2 font-semibold text-olive underline-offset-4 hover:underline"
            >
              Vaciar el pedido
            </button>
          </p>
        )}
      </aside>
    </div>
  );
}
