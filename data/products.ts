// Denominaciones del anexo II del Reglamento (UE) 1169/2011.
export type Allergen = "pescado" | "leche" | "frutos-de-cascara" | "moluscos";

export type Product = {
  id: string;
  name: string;
  ingredients: string[];
  allergens: Allergen[];
  image: string;
  /** Céntimos, IVA incluido. */
  price: number;
  /** Aparece en la cinta de productos de la portada. */
  featured?: boolean;
};

export const allergenLabels: Record<Allergen, string> = {
  pescado: "Pescado",
  leche: "Leche",
  "frutos-de-cascara": "Frutos de cáscara",
  moluscos: "Moluscos",
};

// Carta de gildas, en el orden de las fichas originales (01–20).
export const products: Product[] = [
  {
    id: "la-bandolera",
    name: "La Bandolera",
    ingredients: ["Aceituna gordal", "Lomo", "Tomate seco", "Queso"],
    allergens: ["leche"],
    image: "/images/gildas/la-bandolera.jpg",
    price: 180,
    featured: true,
  },
  {
    id: "la-coloraita",
    name: "La Coloraíta",
    ingredients: ["Aceituna gordal", "Tomate seco", "Anchoa", "Queso"],
    allergens: ["pescado", "leche"],
    image: "/images/gildas/la-coloraita.jpg",
    price: 180,
    featured: true,
  },
  {
    id: "la-clasica",
    name: "La Clásica",
    ingredients: ["Aceituna manzanilla", "Piparra", "Anchoa", "Doble piparra"],
    allergens: ["pescado"],
    image: "/images/gildas/la-clasica.jpg",
    price: 150,
  },
  {
    id: "la-caprichosa",
    name: "La Caprichosa",
    ingredients: ["Aceituna manzanilla", "Doble arándano", "Queso"],
    allergens: ["leche"],
    image: "/images/gildas/la-caprichosa.jpg",
    price: 150,
    featured: true,
  },
  {
    id: "la-morenaza",
    name: "La Morenaza",
    ingredients: ["Aceituna manzanilla", "Ciruela pasa", "Piparra", "Queso"],
    allergens: ["leche"],
    image: "/images/gildas/la-morenaza.jpg",
    price: 150,
  },
  {
    id: "la-canalla",
    name: "La Canalla",
    ingredients: [
      "Aceituna manzanilla",
      "Pimiento morrón",
      "Pepinillo",
      "Queso",
      "Fuet",
    ],
    allergens: ["leche"],
    image: "/images/gildas/la-canalla.jpg",
    price: 180,
    featured: true,
  },
  {
    id: "la-serrana",
    name: "La Serrana",
    ingredients: ["Aceituna gordal", "Cecina de León", "Queso"],
    allergens: ["leche"],
    image: "/images/gildas/la-serrana.jpg",
    price: 180,
  },
  {
    id: "la-salinera",
    name: "La Salinera",
    ingredients: ["Aceituna gordal", "Mojama", "Queso", "Piparra"],
    allergens: ["pescado", "leche"],
    image: "/images/gildas/la-salinera.jpg",
    price: 180,
    featured: true,
  },
  {
    id: "la-sala",
    name: "La Salá",
    ingredients: ["Aceituna manzanilla", "Anchoa", "Piparra", "Queso"],
    allergens: ["pescado", "leche"],
    image: "/images/gildas/la-sala.jpg",
    price: 150,
  },
  {
    id: "la-melosa",
    name: "La Melosa",
    ingredients: ["Aceituna gordal", "Membrillo", "Piparra", "Queso"],
    allergens: ["leche", "frutos-de-cascara"],
    image: "/images/gildas/la-melosa.jpg",
    price: 150,
  },
  {
    id: "la-tentacula",
    name: "La Tentácula",
    ingredients: [
      "Aceituna manzanilla",
      "Pimiento morrón",
      "Pulpo",
      "Pepinillo",
      "Tomate cherry",
    ],
    allergens: ["moluscos"],
    image: "/images/gildas/la-tentacula.jpg",
    price: 180,
    featured: true,
  },
  {
    id: "la-bien-casa",
    name: "La Bien Casá",
    ingredients: [
      "Aceituna manzanilla",
      "Pimiento morrón",
      "Boquerón",
      "Anchoa",
    ],
    allergens: ["pescado"],
    image: "/images/gildas/la-bien-casa.jpg",
    price: 180,
  },
  {
    id: "la-pecadora",
    name: "La Pecadora",
    ingredients: ["Aceituna manzanilla", "Dátil", "Piparra", "Queso", "Anchoa"],
    allergens: ["leche", "pescado"],
    image: "/images/gildas/la-pecadora.jpg",
    price: 180,
  },
  {
    id: "la-platea",
    name: "La Platea",
    ingredients: [
      "Aceituna manzanilla",
      "Pimiento morrón",
      "Boquerón",
      "Queso",
      "Piparra",
    ],
    allergens: ["pescado", "leche"],
    image: "/images/gildas/la-platea.jpg",
    price: 150,
  },
  {
    id: "la-senorita",
    name: "La Señorita",
    ingredients: [
      "Aceituna gordal",
      "Tomate seco",
      "Salmón ahumado",
      "Cebollita",
    ],
    allergens: ["pescado", "leche"],
    image: "/images/gildas/la-senorita.jpg",
    price: 180,
  },
  {
    id: "la-italiana",
    name: "La Italiana",
    ingredients: [
      "Piparra",
      "Mozzarella",
      "Anchoa",
      "Tomate cherry",
      "Aceituna manzanilla",
    ],
    allergens: ["pescado", "leche"],
    image: "/images/gildas/la-italiana.jpg",
    price: 180,
    featured: true,
  },
  {
    id: "la-ahuma",
    name: "La Ahumá",
    ingredients: [
      "Aceituna manzanilla",
      "Tomate seco",
      "Queso",
      "Sardina ahumada",
      "Tomate cherry",
    ],
    allergens: ["pescado", "leche"],
    image: "/images/gildas/la-ahuma.jpg",
    price: 180,
    featured: true,
  },
  {
    id: "la-mal-casa",
    name: "La Mal Casá",
    ingredients: [
      "Aceituna manzanilla",
      "Piparra",
      "Anchoa",
      "Queso",
      "Pimiento del piquillo",
    ],
    allergens: ["pescado", "leche"],
    image: "/images/gildas/la-mal-casa.jpg",
    price: 180,
  },
  {
    id: "la-joya",
    name: "La Joya",
    ingredients: ["Aceituna gordal", "Mojama", "Queso", "Guinda"],
    allergens: ["pescado", "leche"],
    image: "/images/gildas/la-joya.jpg",
    price: 180,
    featured: true,
  },
  {
    id: "la-frutera",
    name: "La Frutera",
    ingredients: [
      "Aceituna gordal",
      "Fruta deshidratada",
      "Piparra",
      "Queso",
    ],
    allergens: ["leche", "frutos-de-cascara"],
    image: "/images/gildas/la-frutera.jpg",
    price: 150,
  },
];
