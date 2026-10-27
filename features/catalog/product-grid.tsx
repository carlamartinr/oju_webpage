"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Carta grid. When the URL names a product (`/carta#la-bandolera`), its photo
 * zooms in and out once so the eye finds it. Listening to the hash covers
 * client-side navigation too, where CSS `:target` is not updated.
 */
export function ProductGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tween: gsap.core.Tween | undefined;
    let runs = 0;
    // Each reset also cancels a zoom still waiting for its photo.
    const reset = () => {
      runs++;
      tween?.revert();
      tween = undefined;
    };

    const spotlight = () => {
      reset();
      if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches)
        return;
      const id = decodeURIComponent(window.location.hash.slice(1));
      const card = id ? document.getElementById(id) : null;
      const photo = card?.firstElementChild;
      if (!photo || card?.parentElement !== grid.current) return;
      // Start once the photo is decoded, so loading never interrupts it.
      const image = photo.querySelector("img");
      const ready = image
        ? image.decode().catch(() => undefined)
        : Promise.resolve();
      const run = runs;
      ready.then(() => {
        if (run !== runs) return;
        // One continuous breath kept on the GPU, so it never stops or snaps.
        tween = gsap.to(photo, {
          scale: 1.03,
          duration: 0.45,
          delay: 0.15,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1,
          force3D: true,
          willChange: "transform",
          onComplete: reset,
        });
      });
    };

    spotlight();
    window.addEventListener("hashchange", spotlight);
    return () => {
      window.removeEventListener("hashchange", spotlight);
      reset();
    };
  }, []);

  return (
    <div ref={grid} className={className}>
      {children}
    </div>
  );
}
