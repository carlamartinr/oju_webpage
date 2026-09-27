"use client";

import { ProductIllustration } from "@/components/illustrations/product-illustration";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { products } from "@/data/products";
import { ArrowIcon } from "@/components/ui/icons";
import {
  localDate,
  selectedProducts,
  validatePickup,
} from "./reservation-utils";
import type { PickupDetails, Quantities } from "./reservation-utils";

const fieldClass =
  "mt-2 min-h-12 w-full rounded-none border border-olive/30 bg-paper px-4 py-3 text-base focus:border-olive";

export function PickupForm() {
  const [quantities, setQuantities] = useState<Quantities>({});
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<PickupDetails | null>(null);
  const dateInput = useRef<HTMLInputElement>(null);
  const result = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const selected = selectedProducts(quantities);
  const count = selected.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  useEffect(() => {
    if (dateInput.current) dateInput.current.min = localDate();
  }, []);
  useEffect(() => {
    if (summary) result.current?.focus();
  }, [summary]);
  useEffect(() => {
    if (error) errorRef.current?.focus();
  }, [error]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = {
      name: String(data.get("name") ?? "").trim(),
      surname: String(data.get("surname") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      date: String(data.get("date") ?? ""),
    };
    const issue = validatePickup(details, quantities);
    setError(issue);
    setSummary(issue ? null : details);
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
      <form
        className="min-w-0"
        onSubmit={submit}
        onChange={() => {
          setSummary(null);
          setError(null);
        }}
      >
        <fieldset className="min-w-0">
          <legend className="mb-6 font-display text-2xl tracking-tight">
            Tu aperitivo
          </legend>
          <div className="border-t border-olive/20">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-x-3 gap-y-2 border-b border-olive/20 py-4 sm:flex sm:gap-4"
              >
                <ProductIllustration
                  product={product}
                  decorative
                  className="size-12 shrink-0 sm:size-16"
                />
                <div className="min-w-0 flex-1">
                  <label htmlFor={product.id} className="font-display text-sm">
                    {product.name}
                  </label>
                  <p className="mt-1 text-xs text-olive/65">{product.unit}</p>
                </div>
                <div className="col-start-2 flex items-center gap-1">
                  <button
                    type="button"
                    aria-label={`Quitar uno de ${product.name}`}
                    disabled={!quantities[product.id]}
                    onClick={() => {
                      setSummary(null);
                      setError(null);
                      setQuantities((previous) => ({
                        ...previous,
                        [product.id]: Math.max(
                          0,
                          (previous[product.id] ?? 0) - 1,
                        ),
                      }));
                    }}
                    className="size-11 rounded-full border border-olive/20 text-xl disabled:opacity-30"
                  >
                    −
                  </button>
                  <input
                    id={product.id}
                    aria-label={`Cantidad de ${product.name}`}
                    type="number"
                    min="0"
                    max="50"
                    step="1"
                    value={quantities[product.id] ?? 0}
                    onChange={(event) =>
                      setQuantities((previous) => ({
                        ...previous,
                        [product.id]: Number(event.target.value),
                      }))
                    }
                    className="h-11 w-12 border-0 bg-transparent text-center text-base [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <button
                    type="button"
                    aria-label={`Añadir uno de ${product.name}`}
                    disabled={(quantities[product.id] ?? 0) >= 50}
                    onClick={() => {
                      setSummary(null);
                      setError(null);
                      setQuantities((previous) => ({
                        ...previous,
                        [product.id]: Math.min(
                          50,
                          (previous[product.id] ?? 0) + 1,
                        ),
                      }));
                    }}
                    className="size-11 rounded-full border border-olive/20 text-xl disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-12 min-w-0">
          <legend className="mb-6 font-display text-2xl tracking-tight">
            Tus datos
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Nombre
              <input
                name="name"
                autoComplete="given-name"
                required
                maxLength={80}
                className={fieldClass}
              />
            </label>
            <label className="text-sm font-semibold">
              Apellidos
              <input
                name="surname"
                autoComplete="family-name"
                required
                maxLength={120}
                className={fieldClass}
              />
            </label>
            <label className="text-sm font-semibold">
              Teléfono
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={25}
                className={fieldClass}
              />
            </label>
            <label className="text-sm font-semibold">
              Fecha de recogida
              <input
                ref={dateInput}
                name="date"
                type="date"
                onFocus={() => {
                  if (dateInput.current) dateInput.current.min = localDate();
                }}
                required
                className={fieldClass}
              />
            </label>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-olive/65">
            Fecha orientativa para esta prueba. Horarios y disponibilidad
            pendientes de confirmar.
          </p>
        </fieldset>
        {error && (
          <p
            ref={errorRef}
            tabIndex={-1}
            role="alert"
            className="mt-6 border-l-2 border-sea bg-paper p-4 text-sm text-sea"
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          className="mt-8 inline-flex min-h-13 items-center gap-8 rounded-full border border-olive bg-olive px-7 py-3 text-sm font-bold text-albariza transition-colors hover:bg-transparent hover:text-olive"
        >
          Revisar mi selección
          <ArrowIcon />
        </button>
        <p className="mt-4 max-w-lg text-xs leading-relaxed text-olive/65">
          Esta demostración no envía ni guarda tus datos. Al salir de la página
          se pierde la selección. No se realiza ningún pedido ni cobro.
        </p>
      </form>
      <aside className="self-start border border-olive/20 bg-paper p-6 md:p-8 lg:sticky lg:top-8">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-sea">
          Recogida en tienda · Demostración
        </p>
        <h2 className="font-display text-3xl tracking-tight">
          Tu ratito de Ojú.
        </h2>
        <p aria-live="polite" className="mt-4 text-sm text-olive/70">
          {count === 0
            ? "Elige algo rico para empezar."
            : `${count} ${count === 1 ? "producto seleccionado" : "productos seleccionados"}.`}
        </p>
        {selected.length > 0 && (
          <ul className="mt-6 divide-y divide-olive/15 border-y border-olive/15">
            {selected.map((product) => (
              <li
                key={product.id}
                className="flex justify-between gap-4 py-4 text-sm"
              >
                <span>{product.name}</span>
                <span>× {product.quantity}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-6 text-xs leading-relaxed text-olive/65">
          Carta y formatos de ejemplo. Precios, disponibilidad y dirección de
          recogida pendientes.
        </p>
        {summary && (
          <div
            ref={result}
            tabIndex={-1}
            className="mt-8 border-t border-olive/25 pt-6"
          >
            <h3 className="text-xl">Resumen preparado</h3>
            <dl className="mt-4 space-y-3 break-words text-sm">
              <div>
                <dt className="text-xs text-olive/60">A nombre de</dt>
                <dd>
                  {summary.name} {summary.surname}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-olive/60">Teléfono</dt>
                <dd>{summary.phone}</dd>
              </div>
              <div>
                <dt className="text-xs text-olive/60">Fecha orientativa</dt>
                <dd>
                  {new Intl.DateTimeFormat("es-ES", {
                    dateStyle: "long",
                  }).format(new Date(`${summary.date}T12:00:00`))}
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-sm font-semibold text-sea">
              No se ha enviado ningún pedido. El servicio de recogida todavía no
              está activo.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
