"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowIcon, Sun, Wave } from "@/components/ui/icons";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from("[data-hero-copy]", {
          y: 22,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        });
        gsap.from("[data-hero-product]", {
          y: 35,
          rotation: -6,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      },
      root,
    );
    return () => media.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 md:px-12 md:pb-10 md:pt-12"
    >
      <div className="grid items-center gap-6 md:min-h-145 md:grid-cols-[1.05fr_1fr] md:gap-0">
        <div className="relative z-10">
          <p
            data-hero-copy
            className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.23em] sm:text-xs"
          >
            <span className="h-px w-8 bg-olive" />
            Olivas y gildas del sur
          </p>
          <h1
            data-hero-copy
            className="text-[clamp(3.3rem,7.2vw,6.6rem)] leading-[0.98] tracking-[-0.055em]"
          >
            El sur
            <br />
            se come
            <br />a <span className="text-sea">bocados.</span>
          </h1>
          <p
            data-hero-copy
            className="mt-7 max-w-80 text-base leading-relaxed text-olive/80"
          >
            Una gilda, una buena charla y todo el tiempo del mundo. Eso también
            es el sur.
          </p>
          <div data-hero-copy className="mt-8">
            <ButtonLink href="/carta">Descubre la carta</ButtonLink>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-145 py-6 md:py-0">
          <div
            aria-hidden="true"
            className="absolute inset-[9%] rounded-full border border-olive/15"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[15%] rounded-full border border-olive/10"
          />
          <Image
            data-hero-product
            src="/images/products/gilda-clasica.png"
            alt="Ilustración de una gilda con aceitunas, anchoa y piparras"
            width={900}
            height={900}
            sizes="(max-width: 767px) 90vw, 48vw"
            preload
            className="relative z-10 h-auto w-full p-3 drop-shadow-[0_25px_20px_rgba(21,45,11,0.12)] md:p-0"
          />
          <div className="absolute bottom-0 right-0 z-10 flex size-25 rotate-10 flex-col items-center justify-center rounded-full bg-sea text-albariza sm:bottom-4 sm:size-30">
            <Sun className="mb-1 size-8" />
            <span className="text-center text-[9px] font-semibold uppercase tracking-[0.13em]">
              Mucho sur.
              <br />
              Mucho sabor.
            </span>
          </div>
          <p className="absolute left-0 top-0 -rotate-8 font-serif text-xl italic text-sea md:left-7">
            ¡Ojú, qué cosa más buena!
          </p>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between border-t border-olive/20 pt-6 text-[10px] uppercase tracking-[0.18em]">
        <span>Con acento andaluz</span>
        <Wave className="hidden h-5 w-20 text-sea sm:block" />
        <a href="#productos" className="flex items-center gap-3 py-2">
          Esto acaba de empezar
          <ArrowIcon className="size-4 rotate-90" />
        </a>
      </div>
    </section>
  );
}
