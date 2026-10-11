import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/features/catalog/product-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Wave } from "@/components/ui/icons";

export const metadata: Metadata = { title: "La carta" };

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-12 md:pt-18">
      <header className="mb-14 border-b border-olive/20 pb-10">
        <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-sea">
          El aperitivo tiene su arte
        </p>
        <h1 className="text-6xl leading-none tracking-[-0.05em] md:text-8xl">
          ¿Qué te
          <br />
          pide el cuerpo?
        </h1>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-md text-base leading-relaxed text-olive/75">
            Veinte gildas, cada una con su gracia. Para picar una o para
            probarlas todas.
          </p>
          <Wave className="h-6 w-24 text-sea" />
        </div>
      </header>
      <section id="gildas" className="mb-20">
        <h2 className="mb-10 text-4xl tracking-tight">Gildas</h2>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="mt-14 max-w-xl text-xs leading-relaxed text-olive/65">
          Si tienes alguna alergia o intolerancia, pregúntanos antes de pedir.
        </p>
      </section>
      <div className="flex flex-col items-start justify-between gap-6 border-t border-olive/20 pt-10 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl">El aperitivo, contigo.</h2>
          <p className="mt-2 text-sm text-olive/75">
            Prueba cómo preparar tu selección para recoger.
          </p>
        </div>
        <ButtonLink href="/reserva">Preparar recogida</ButtonLink>
      </div>
    </div>
  );
}
