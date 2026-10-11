import Image from "next/image";
import { allergenLabels } from "@/data/products";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  showDetails = true,
  centered = false,
  sizes = "(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 90vw",
}: {
  product: Product;
  showDetails?: boolean;
  centered?: boolean;
  sizes?: string;
}) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-paper">
        <Image
          src={product.image}
          alt={`Gilda ${product.name}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
        />
      </div>
      <div className={`pt-5 ${centered ? "text-center" : ""}`}>
        <h3 className="text-xl md:text-2xl">{product.name}</h3>
        {showDetails && (
          <>
            <p className="mt-2 text-sm leading-relaxed text-olive/75">
              {product.ingredients.join(" · ")}
            </p>
            <p className="sr-only">Alérgenos:</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {product.allergens.map((allergen) => (
                <li
                  key={allergen}
                  className="rounded-full border border-sea/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-sea"
                >
                  {allergenLabels[allergen]}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
