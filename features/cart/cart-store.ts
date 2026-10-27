import { useSyncExternalStore } from "react";
import { products } from "@/data/products";
import { maxQuantity } from "./cart";
import type { Cart } from "./cart";

const key = "oju:pedido";
const empty: Cart = {};
const listeners = new Set<() => void>();
let cache: Cart | undefined;

// Stored data may be stale or edited by hand: keep only known products.
function sanitize(value: unknown): Cart {
  if (!value || typeof value !== "object") return empty;
  const cart: Record<string, number> = {};
  for (const { id } of products) {
    const quantity = (value as Record<string, unknown>)[id];
    if (typeof quantity === "number" && Number.isInteger(quantity) && quantity > 0) {
      cart[id] = Math.min(quantity, maxQuantity);
    }
  }
  return cart;
}

function read(): Cart {
  if (!cache) {
    try {
      cache = sanitize(JSON.parse(localStorage.getItem(key) ?? "{}"));
    } catch {
      cache = empty;
    }
  }
  return cache;
}

function write(cart: Cart) {
  cache = cart;
  try {
    localStorage.setItem(key, JSON.stringify(cart));
  } catch {
    // Private mode or full storage: the cart still works for this visit.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Keep several open tabs in sync.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== key && event.key !== null) return;
    cache = undefined;
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** The cart is empty on the server and during hydration. */
export function useCart() {
  return useSyncExternalStore(subscribe, read, () => empty);
}

const noop = () => () => {};

/** False until hydrated, to avoid flashing an empty cart on reload. */
export function useHydrated() {
  return useSyncExternalStore(noop, () => true, () => false);
}

export function setQuantity(id: string, quantity: number) {
  const next: Record<string, number> = { ...read() };
  const units = Math.min(Math.max(Math.trunc(quantity) || 0, 0), maxQuantity);
  if (units) next[id] = units;
  else delete next[id];
  write(next);
}

export function clearCart() {
  write(empty);
}
