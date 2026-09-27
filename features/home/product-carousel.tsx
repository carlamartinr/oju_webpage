"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { products } from "@/data/products";
import { ProductCard } from "@/features/catalog/product-card";
import { ArrowIcon } from "@/components/ui/icons";

export function ProductCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const tween = useRef<gsap.core.Tween | null>(null);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement;
    const max = element.scrollWidth - element.clientWidth;
    const step = card.offsetWidth + 24;
    const next =
      direction > 0 && element.scrollLeft >= max - 5
        ? 0
        : direction < 0 && element.scrollLeft <= 5
          ? max
          : Math.max(0, Math.min(max, element.scrollLeft + direction * step));
    tween.current?.kill();
    tween.current = gsap.to(element, {
      scrollLeft: next,
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 0.6,
      ease: "power2.inOut",
    });
  }

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => {
      query.removeEventListener("change", update);
      tween.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion) return;
    const timer = window.setInterval(() => {
      const element = track.current;
      if (
        element &&
        !document.hidden &&
        element.getBoundingClientRect().top < window.innerHeight &&
        element.getBoundingClientRect().bottom > 0
      )
        move(1);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion]);

  return (
    <section
      id="productos"
      aria-label="Nuestros productos"
      aria-roledescription="carrusel"
      className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
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
        ref={track}
        id="product-track"
        tabIndex={0}
        aria-label="Productos de ejemplo; desliza para ver más"
        onPointerDown={() => {
          setPaused(true);
          tween.current?.kill();
        }}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            setPaused(true);
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
        className="flex gap-6 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:thin]"
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${products.length}`}
            className="w-[84%] shrink-0 sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
          >
            <ProductCard product={product} number={index + 1} />
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-olive/65">
          Una muestra de nuestra futura carta. Productos de ejemplo.
        </p>
        <div className="flex items-center gap-2">
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setPaused(!paused)}
              aria-pressed={paused}
              className="mr-2 min-h-11 px-2 text-xs underline underline-offset-4"
            >
              {paused ? "Activar rotación" : "Pausar rotación"}
            </button>
          )}
          <button
            type="button"
            aria-label="Productos anteriores"
            aria-controls="product-track"
            onClick={() => {
              setPaused(true);
              move(-1);
            }}
            className="flex size-11 items-center justify-center rounded-full border border-olive/30 hover:bg-paper"
          >
            <ArrowIcon className="size-5 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Productos siguientes"
            aria-controls="product-track"
            onClick={() => {
              setPaused(true);
              move(1);
            }}
            className="flex size-11 items-center justify-center rounded-full border border-olive/30 hover:bg-paper"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
