import { gildaPrice, products } from "@/data/products";
import { site } from "@/data/site";

/** Units per product id. Only ids from the menu with 1–99 units. */
export type Cart = Readonly<Record<string, number>>;

export const maxQuantity = 99;

/** "1,50 €": deterministic, so server and client always render the same. */
export function formatPrice(cents: number) {
  return `${(cents / 100).toFixed(2).replace(".", ",")} €`;
}

export function gildaCount(count: number) {
  return `${count} ${count === 1 ? "gilda" : "gildas"}`;
}

/** Lines in menu order, so the order never jumps around. */
export function cartLines(cart: Cart) {
  return products
    .filter((product) => cart[product.id])
    .map((product) => ({ product, quantity: cart[product.id] }));
}

export function cartTotals(cart: Cart) {
  const count = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  return { count, price: count * gildaPrice };
}

export function whatsappUrl(cart: Cart, note: string) {
  const { count, price } = cartTotals(cart);
  const lines = cartLines(cart).map(
    ({ product, quantity }) => `• ${quantity} × ${product.name}`,
  );
  const message = [
    "¡Hola, Ojú! Me gustaría hacer este pedido:",
    "",
    ...lines,
    "",
    `Total: ${gildaCount(count)}, ${formatPrice(price).replace(" ", " ")}`,
    ...(note.trim() ? ["", `Nota: ${note.trim()}`] : []),
  ].join("\n");
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
