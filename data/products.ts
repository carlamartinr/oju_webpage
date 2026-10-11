export type Allergen = "pescado" | "lacteos" | "frutos-secos";

export type Product = {
  id: string;
  name: string;
  ingredients: string[];
  allergens: Allergen[];
  image: string;
  /** Aparece en la cinta de productos de la portada. */
  featured?: boolean;
};

export const allergenLabels: Record<Allergen, string> = {
  pescado: "Pescado",
  lacteos: "Lácteos",
  "frutos-secos": "Frutos secos",
};

// Carta de gildas, en el orden de las fichas originales (01–20).
export const products: Product[] = [
  {
    id: "la-bandolera",
    name: "La Bandolera",
    ingredients: ["Aceituna gordal", "Lomo", "Tomate seco", "Queso"],
    allergens: ["lacteos"],
    image: "/images/gildas/la-bandolera.jpg",
    featured: true,
  },
  {
    id: "la-coloraita",
    name: "La Coloraíta",
    ingredients: ["Aceituna gordal", "Tomate seco", "Anchoa", "Queso"],
    allergens: ["pescado", "lacteos"],
    image: "/images/gildas/la-coloraita.jpg",
    featured: true,
  },
  {
    id: "la-clasica",
    name: "La Clásica",
    ingredients: ["Aceituna manzanilla", "Piparra", "Anchoa", "Doble piparra"],
    allergens: ["pescado"],
    image: "/images/gildas/la-clasica.jpg",
  },
  {
    id: "la-caprichosa",
    name: "La Caprichosa",
    ingredients: ["Aceituna manzanilla", "Doble arándano", "Queso"],
    allergens: ["lacteos"],
    image: "/images/gildas/la-caprichosa.jpg",
    featured: true,
  },
  {
    id: "la-morenaza",
    name: "La Morenaza",
    ingredients: ["Aceituna manzanilla", "Ciruela pasa", "Piparra", "Queso"],
    allergens: ["lacteos"],
    image: "/images/gildas/la-morenaza.jpg",
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
    allergens: ["lacteos"],
    image: "/images/gildas/la-canalla.jpg",
    featured: true,
  },
  {
    id: "la-serrana",
    name: "La Serrana",
    ingredients: ["Aceituna gordal", "Cecina de León", "Queso"],
    allergens: ["lacteos"],
    image: "/images/gildas/la-serrana.jpg",
  },
  {
    id: "la-salinera",
    name: "La Salinera",
    ingredients: ["Aceituna gordal", "Mojama", "Queso", "Piparra"],
    allergens: ["pescado", "lacteos"],
    image: "/images/gildas/la-salinera.jpg",
    featured: true,
  },
  {
    id: "la-sala",
    name: "La Salá",
    ingredients: ["Aceituna manzanilla", "Anchoa", "Piparra", "Queso"],
    allergens: ["pescado", "lacteos"],
    image: "/images/gildas/la-sala.jpg",
  },
  {
    id: "la-melosa",
    name: "La Melosa",
    ingredients: ["Aceituna gordal", "Membrillo", "Piparra", "Queso"],
    allergens: ["lacteos", "frutos-secos"],
    image: "/images/gildas/la-melosa.jpg",
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
    allergens: ["pescado"],
    image: "/images/gildas/la-tentacula.jpg",
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
  },
  {
    id: "la-pecadora",
    name: "La Pecadora",
    ingredients: ["Aceituna manzanilla", "Dátil", "Piparra", "Queso", "Anchoa"],
    allergens: ["lacteos", "pescado"],
    image: "/images/gildas/la-pecadora.jpg",
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
    allergens: ["pescado", "lacteos"],
    image: "/images/gildas/la-platea.jpg",
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
    allergens: ["pescado", "lacteos"],
    image: "/images/gildas/la-senorita.jpg",
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
    allergens: ["pescado", "lacteos"],
    image: "/images/gildas/la-italiana.jpg",
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
    allergens: ["pescado", "lacteos"],
    image: "/images/gildas/la-ahuma.jpg",
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
    allergens: ["pescado", "lacteos"],
    image: "/images/gildas/la-mal-casa.jpg",
  },
  {
    id: "la-joya",
    name: "La Joya",
    ingredients: ["Aceituna gordal", "Mojama", "Queso", "Guinda"],
    allergens: ["pescado", "lacteos"],
    image: "/images/gildas/la-joya.jpg",
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
    allergens: ["lacteos", "frutos-secos"],
    image: "/images/gildas/la-frutera.jpg",
  },
];
