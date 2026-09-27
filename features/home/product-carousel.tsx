"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { products } from "@/data/products";
import { ProductCard } from "@/features/catalog/product-card";
import { ArrowIcon } from "@/components/ui/icons";

export function ProductCarousel() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const firstSet = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const element = track.current;
        const group = firstSet.current;
        if (!element || !group) return;
        let loop: gsap.core.Tween | undefined;
        let width = 0;
        const resize = () => {
          const nextWidth = group.getBoundingClientRect().width;
          if (!nextWidth || nextWidth === width) return;
          const progress = loop?.progress() ?? 0;
          loop?.kill();
          width = nextWidth;
          // Both sets have exactly the same width, including the trailing gap.
          // The end frame and the start frame are visually identical.
          loop = gsap.fromTo(
            element,
            { x: 0 },
            { x: -width, duration: width / 38, ease: "none", repeat: -1 },
          );
          loop.progress(progress);
        };
        resize();
        const observer = new ResizeObserver(resize);
        observer.observe(group);
        return () => {
          observer.disconnect();
          loop?.kill();
          gsap.set(element, { clearProps: "transform" });
        };
      },
      root,
    );
    return () => media.revert();
  }, []);

  return (
    <section
      ref={root}
      id="productos"
      aria-label="Nuestros productos"
      className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-sea">
            Pequeños bocados. Grandes momentos.
          </p>
          <h2 className="text-4xl leading-tight tracking-[-0.045em] md:text-5xl">
            Lo bueno,
            <br />
            para compartir.
          </h2>
        </div>
        <Link
          href="/carta"
          className="inline-flex items-center gap-6 border-b border-olive pb-2 text-sm font-semibold"
        >
          Toda la carta
          <ArrowIcon />
        </Link>
      </div>
      <div
        className="overflow-x-auto motion-safe:overflow-hidden"
        tabIndex={0}
        aria-label="Productos de ejemplo. Consulta todos los detalles en la carta."
      >
        <div
          ref={track}
          data-product-track
          className="flex w-max will-change-transform motion-reduce:will-change-auto"
        >
          {[0, 1].map((copy) => (
            <div
              ref={copy === 0 ? firstSet : undefined}
              key={copy}
              data-product-set
              aria-hidden={copy === 1 || undefined}
              className={`flex shrink-0 gap-8 pr-8 md:gap-14 md:pr-14 ${copy === 1 ? "motion-reduce:hidden" : ""}`}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-[72vw] max-w-90 shrink-0 md:w-80 lg:w-90"
                >
                  <ProductCard product={product} showIngredients={false} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
