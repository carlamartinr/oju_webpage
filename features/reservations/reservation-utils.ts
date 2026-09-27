import { products } from "@/data/products";

export type Quantities = Record<string, number>;
export type PickupDetails = {
  name: string;
  surname: string;
  phone: string;
  date: string;
};

export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function selectedProducts(quantities: Quantities) {
  return products
    .filter(
      (product) =>
        Number.isInteger(quantities[product.id]) &&
        quantities[product.id] > 0 &&
        quantities[product.id] <= 50,
    )
    .map((product) => ({ ...product, quantity: quantities[product.id] }));
}

export function validatePickup(
  details: PickupDetails,
  quantities: Quantities,
  today = localDate(),
) {
  if (!details.name.trim() || !details.surname.trim())
    return "Escribe tu nombre y apellidos.";
  const digits = details.phone.replace(/\D/g, "");
  if (
    !/^[+\d\s()-]+$/.test(details.phone) ||
    digits.length < 9 ||
    digits.length > 15
  )
    return "Escribe un teléfono válido, con entre 9 y 15 dígitos.";
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(details.date) ||
    !Number.isFinite(Date.parse(details.date)) ||
    details.date < today
  )
    return "Selecciona una fecha de hoy en adelante.";
  if (
    Object.values(quantities).some(
      (quantity) =>
        !Number.isInteger(quantity) || quantity < 0 || quantity > 50,
    )
  )
    return "Elige entre 0 y 50 unidades por producto.";
  if (selectedProducts(quantities).length === 0)
    return "Selecciona al menos un producto para preparar el resumen.";
  return null;
}
