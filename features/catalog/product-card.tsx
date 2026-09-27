import { ProductIllustration } from "@/components/illustrations/product-illustration";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  showIngredients = true,
  centered = false,
}: {
  product: Product;
  showIngredients?: boolean;
  centered?: boolean;
}) {
  return (
    <article className="group">
      <div className="relative flex aspect-square items-center justify-center p-2 md:p-3">
        <ProductIllustration
          product={product}
          className="h-full w-full transition-transform duration-500 motion-safe:group-hover:-rotate-3"
        />
      </div>
      <div
        className={`border-t border-olive/25 py-5 ${centered ? "text-center" : ""}`}
      >
        <h3 className="text-2xl">{product.name}</h3>
        {showIngredients && (
          <p className="mt-2 text-sm leading-relaxed text-olive/75">
            {product.ingredients}
          </p>
        )}
      </div>
    </article>
  );
}
