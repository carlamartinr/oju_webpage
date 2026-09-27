import Image from "next/image";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  number,
}: {
  product: Product;
  number?: number;
}) {
  return (
    <article className="group">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-t-[45%] bg-paper p-6 md:p-10">
        {number !== undefined && (
          <span className="absolute left-5 top-6 font-mono text-xs text-olive/60">
            {String(number).padStart(2, "0")}
          </span>
        )}
        <Image
          src={product.image}
          alt={`Ilustración de ${product.name.toLowerCase()}`}
          width={700}
          height={700}
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
          className="h-full w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="border-t border-olive/25 py-5">
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-sea">
          {product.category}
        </p>
        <h3 className="text-2xl">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-olive/75">
          {product.ingredients}
        </p>
      </div>
    </article>
  );
}
