import type { ReactNode } from "react";
import { allergenLabels } from "@/data/products";
import type { Allergen } from "@/data/products";

// Colores habituales de los pictogramas de alérgenos en las cartas.
const colors: Record<Allergen, string> = {
  pescado: "#1f5fa8",
  leche: "#8a5a3b",
  "frutos-de-cascara": "#b23a2e",
  moluscos: "#2b9bb0",
};

const pictograms: Record<Allergen, ReactNode> = {
  pescado: (
    <>
      <path d="M3.5 12c2.2-3.2 5.3-4.8 8.6-4.8 2.8 0 5.1 1.4 6.6 3.2l2.3-2.2v7.6l-2.3-2.2c-1.5 1.8-3.8 3.2-6.6 3.2-3.3 0-6.4-1.6-8.6-4.8Z" />
      <circle cx="8" cy="11.2" r="1" fill={colors.pescado} />
    </>
  ),
  leche: (
    <path d="M9.8 3h4.4v2.2l1.8 3.3v11.3a1.2 1.2 0 0 1-1.2 1.2H9.2A1.2 1.2 0 0 1 8 19.8V8.5l1.8-3.3V3Z" />
  ),
  "frutos-de-cascara": (
    <>
      <path d="M11.3 2.6h1.4v2.2h-1.4z" />
      <path d="M6.3 9.2c.9-3.1 3.1-4.9 5.7-4.9s4.8 1.8 5.7 4.9c-1.7-.8-3.6-1.1-5.7-1.1s-4 .3-5.7 1.1Z" />
      <path d="M12 9.8c3.6 0 6 2.5 6 5.7S15.4 21.2 12 21.2s-6-2.5-6-5.7 2.4-5.7 6-5.7Z" />
    </>
  ),
  moluscos: (
    <>
      <path d="M12 4.2c4.5 0 8.1 3.4 8.1 7.6 0 .6-.1 1.1-.2 1.6l-5.8 5.4H9.9l-5.8-5.4c-.1-.5-.2-1-.2-1.6 0-4.2 3.6-7.6 8.1-7.6Z" />
      <path d="M9.6 19.8h4.8v1.6H9.6z" />
      <path
        d="M12 18.4V5.6M12 18.4 7.4 7M12 18.4 16.6 7M12 18.4 5 10.6M12 18.4l7-7.8"
        stroke={colors.moluscos}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </>
  ),
};

export function AllergenIcon({
  allergen,
  className = "size-8",
}: {
  allergen: Allergen;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill={colors[allergen]} />
      <g fill="white" transform="translate(1.8 1.8) scale(0.85)">
        {pictograms[allergen]}
      </g>
    </svg>
  );
}

export function AllergenLegend({ className = "" }: { className?: string }) {
  return (
    <ul
      aria-label="Leyenda de alérgenos"
      className={`flex flex-wrap gap-x-8 gap-y-4 ${className}`}
    >
      {(Object.keys(allergenLabels) as Allergen[]).map((allergen) => (
        <li key={allergen} className="flex items-center gap-3 text-sm">
          <AllergenIcon allergen={allergen} />
          {allergenLabels[allergen]}
        </li>
      ))}
    </ul>
  );
}
