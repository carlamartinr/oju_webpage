import type { Product } from "@/data/products";
import { Gilda } from "./gilda";
import { Olives } from "./olives";
import { Vermouth } from "./vermouth";

export function ProductIllustration({
  product,
  className,
  decorative = false,
}: {
  product: Product;
  className?: string;
  decorative?: boolean;
}) {
  if (product.category === "gildas")
    return (
      <Gilda
        variant={product.id === "la-salerosa" ? "boqueron" : "classic"}
        className={className}
        decorative={decorative}
      />
    );
  if (product.category === "aceitunas")
    return (
      <Olives
        seasoned={product.id === "alino-del-sur"}
        className={className}
        decorative={decorative}
      />
    );
  return <Vermouth className={className} decorative={decorative} />;
}
