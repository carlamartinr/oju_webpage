export type Category = "gildas" | "aceitunas" | "bebidas";
export type Product = {
  id: string;
  name: string;
  category: Category;
  note: string;
  ingredients: string;
  unit: string;
};

// Contenido ficticio autorizado para revisar el diseño; sustituir por la carta real.
export const products: Product[] = [
  {
    id: "la-clasica",
    name: "La clásica",
    category: "gildas",
    note: "La de siempre. Por algo será.",
    ingredients: "Aceituna manzanilla, anchoa, piparra y aceite de oliva.",
    unit: "unidad",
  },
  {
    id: "la-salerosa",
    name: "La salerosa",
    category: "gildas",
    note: "Un poquito de alegría.",
    ingredients: "Aceituna verde, boquerón, pimiento rojo y piparra.",
    unit: "unidad",
  },
  {
    id: "al-limon",
    name: "Al limón",
    category: "aceitunas",
    note: "Frescas, como una buena charla.",
    ingredients: "Aceitunas manzanilla, limón, tomillo y aceite de oliva.",
    unit: "tarro de ejemplo",
  },
  {
    id: "alino-del-sur",
    name: "Aliño del sur",
    category: "aceitunas",
    note: "Para empezar y no parar.",
    ingredients:
      "Aceitunas partidas, pimiento rojo, ajo, tomillo y aceite de oliva.",
    unit: "tarro de ejemplo",
  },
  {
    id: "vermu-rojo",
    name: "Vermú de la casa",
    category: "bebidas",
    note: "El compañero del aperitivo.",
    ingredients:
      "Vermú rojo. Sugerencia de servicio: hielo, naranja y aceituna.",
    unit: "botella de ejemplo",
  },
];

export const categories: {
  id: Category;
  label: string;
  description: string;
}[] = [
  {
    id: "gildas",
    label: "Gildas",
    description: "Pequeñas, sí. Pero con mucho que decir.",
  },
  {
    id: "aceitunas",
    label: "Aceitunas",
    description: "Ese «una más» que nunca es la última.",
  },
  {
    id: "bebidas",
    label: "Bebidas",
    description: "Hay compañías que lo mejoran todo.",
  },
];
