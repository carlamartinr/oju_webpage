import type { Metadata } from "next";
import { categories, products } from "@/data/products";
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
            Gildas con carácter, aceitunas para alargar la charla y algo rico
            con lo que brindar.
          </p>
          <Wave className="h-6 w-24 text-sea" />
        </div>
        <p className="mt-7 text-xs text-olive/65">
          Carta de ejemplo · Nombres, ingredientes y formatos provisionales.
        </p>
      </header>
      <nav
        aria-label="Secciones de la carta"
        className="mb-14 flex flex-wrap gap-3"
      >
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="rounded-full border border-olive/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-olive hover:text-albariza"
          >
            {category.label}
          </a>
        ))}
      </nav>
      {categories.map((category, index) => (
        <section key={category.id} id={category.id} className="mb-20">
          <div className="mb-8 flex flex-wrap items-baseline gap-x-6 gap-y-3 border-t border-olive/20 pt-6">
            <span className="font-mono text-xs text-sea">0{index + 1}</span>
            <h2 className="text-4xl tracking-tight">{category.label}</h2>
            <p className="text-sm text-olive/70">{category.description}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((product) => product.category === category.id)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>
      ))}
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
