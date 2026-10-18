import { pageMetadata } from "@/data/site";
import { products } from "@/data/products";
import { AllergenLegend } from "@/components/ui/allergen-icon";
import { ProductCard } from "@/features/catalog/product-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Wave } from "@/components/ui/icons";

export const metadata = pageMetadata(
  "Carta de gildas",
  "Consulta las 20 gildas de Ojú: fotos, ingredientes y alérgenos para elegir tu aperitivo en Sanlúcar de Barrameda.",
  "/carta",
);

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-12 md:pt-18">
      <header className="mb-20 md:mb-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-sea">
          El aperitivo tiene su arte
        </p>
        <h1 className="text-6xl leading-none tracking-[-0.05em] md:text-8xl">
          ¿Qué te
          <br />
          pide el cuerpo?
        </h1>
        <Wave className="mt-10 h-6 w-24 text-sea" />
      </header>
      <section id="gildas" className="mb-20">
        <h2 className="mb-12 text-4xl tracking-[-0.04em] text-sea md:text-5xl">
          Nuestras Gildas
        </h2>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              loading={index < 2 ? "eager" : "lazy"}
            />
          ))}
        </div>
        <aside
          aria-labelledby="alergenos"
          className="mt-16 border-t border-olive/20 pt-8"
        >
          <h3
            id="alergenos"
            className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sea"
          >
            Alérgenos
          </h3>
          <AllergenLegend className="mt-5" />
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-olive/65">
            Si tienes alguna alergia o intolerancia, pregúntanos antes de pedir.
          </p>
        </aside>
      </section>
      <div className="flex flex-col items-start justify-between gap-6 border-t border-olive/20 pt-10 sm:flex-row sm:items-center">
        <h2 className="text-2xl">¿Ya tienes tus favoritas?</h2>
        <ButtonLink href="/reserva">Hacer un pedido</ButtonLink>
      </div>
    </div>
  );
}
