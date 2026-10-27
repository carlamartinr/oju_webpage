import Image from "next/image";
import { allergenLabels } from "@/data/products";
import type { Product } from "@/data/products";
import { AllergenIcon } from "@/components/ui/allergen-icon";

/** Each gilda has a stable, shareable anchor in Carta. */
export const productHref = (id: string) => `/carta#${id}`;

export function ProductCard({
  id,
  product,
  showDetails = true,
  centered = false,
  loading,
  sizes = "(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 90vw",
}: {
  /** Anchor id; only set where the card is unique on the page. */
  id?: string;
  product: Product;
  showDetails?: boolean;
  centered?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
}) {
  return (
    <article id={id} className="group">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-paper">
        <Image
          src={product.image}
          alt={`Gilda ${product.name}`}
          fill
          loading={loading}
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
        />
      </div>
      <div className={`pt-5 ${centered ? "text-center" : ""}`}>
        <h3 className="text-lg md:text-xl">{product.name}</h3>
        {showDetails && (
          <>
            <p className="mt-2 text-sm leading-relaxed text-olive/75">
              {product.ingredients.join("\u00a0· ")}
            </p>
            <p className="sr-only">Alérgenos:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.allergens.map((allergen) => (
                <li key={allergen} title={allergenLabels[allergen]}>
                  <AllergenIcon allergen={allergen} />
                  <span className="sr-only">{allergenLabels[allergen]}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
