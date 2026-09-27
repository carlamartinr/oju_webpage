"use client";

import { Gilda } from "@/components/illustrations/gilda";
import { ServingPlate } from "@/components/illustrations/serving-plate";
import { OliveSprig } from "@/components/illustrations/olive-branch";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowIcon, Wave } from "@/components/ui/icons";

// Placement of each background sprig: kept to the free space, away from the plate.
const sprigs = [
  "-left-[12%] top-[6%] w-[36%] rotate-[200deg] md:-left-[7%] md:top-[4%] md:w-[22%]",
  "bottom-[9%] left-[22%] hidden w-[17%] rotate-[28deg] md:block",
  "-right-[14%] top-[36%] w-[36%] -rotate-[100deg] md:-right-[7%] md:top-[5%] md:w-[20%]",
  "-right-[9%] bottom-[7%] hidden w-[19%] rotate-[150deg] md:block",
  "-left-[16%] bottom-[14%] w-[40%] rotate-[40deg] md:hidden",
];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
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
        const assembly = gsap.timeline({ defaults: { ease: "power3.out" } });
        assembly.from("[data-branch]", {
          opacity: 0,
          rotation: -6,
          transformOrigin: "10% 95%",
          duration: 1.6,
          ease: "power2.out",
          stagger: 0.12,
        });
        assembly.from(
          "[data-plate]",
          {
            scale: 0.92,
            rotation: -10,
            opacity: 0,
            transformOrigin: "50% 50%",
            duration: 0.8,
          },
          0,
        );
        // Selectors also match the shadow copy, so it builds up with the gilda.
        assembly.from(
          "[data-skewer]",
          {
            scaleY: 0,
            opacity: 0,
            transformOrigin: "50% 100%",
            duration: 0.65,
          },
          0.35,
        );
        assembly.from(
          "[data-ingredient]",
          {
            y: -160,
            opacity: 0,
            rotation: -9,
            transformOrigin: "50% 50%",
            duration: 0.85,
            // Shadow and gilda each hold the same ingredients: pair them up.
            stagger: (index, _target, list) =>
              (index % (list.length / 2)) * 0.24,
          },
          0.73,
        );
      },
      root,
    );
    return () => media.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden">
      {/* Tone-on-tone olive print spread around the composition. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-olive opacity-[0.07]"
      >
        {sprigs.map((className) => (
          <div key={className} className={`absolute ${className}`}>
            <OliveSprig className="h-auto w-full" />
          </div>
        ))}
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 md:px-12 md:pb-10 md:pt-12">
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
              Una gilda, una buena charla y todo el tiempo del mundo. Eso
              también es el sur.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-145 py-6 md:py-0">
            <ServingPlate className="absolute inset-[8%]" />
            <div className="relative z-10">
              <Gilda
                decorative
                className="absolute inset-0 h-auto w-full translate-x-[1.2%] translate-y-[1.8%] opacity-25 blur-[5px] brightness-0"
              />
              <Gilda className="relative h-auto w-full" />
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
      </div>
    </section>
  );
}
