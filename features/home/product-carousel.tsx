"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { products } from "@/data/products";
import { ProductCard, productHref } from "@/features/catalog/product-card";
import { ArrowIcon } from "@/components/ui/icons";

const featured = products.filter((product) => product.featured);

// Pixels per second while cruising, and how quickly a flick settles back to it.
const cruise = 38;
const friction = 3;
const maxVelocity = 3000;
// Pixels a pointer may move and still count as a tap.
const dragThreshold = 6;

export function ProductCarousel() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const firstSet = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const element = track.current;
        const group = firstSet.current;
        const frame = viewport.current;
        if (!element || !group || !frame) return;

        const setX = gsap.quickSetter(element, "x", "px");
        let width = group.getBoundingClientRect().width;
        let offset = 0;
        let velocity = cruise;
        let pointer: number | null = null;
        let startX = 0;
        let lastX = 0;
        let lastTime = 0;
        let dragging = false;
        let suppressClick = false;
        // While a keyboard user is inside, the ribbon holds still (WCAG 2.2.2).
        let keyboardFocus = false;

        // Both sets have exactly the same width, including the trailing gap,
        // so wrapping the offset by one set is visually seamless.
        const render = () => {
          if (!width) return;
          offset = gsap.utils.wrap(0, width, offset);
          setX(-offset);
        };

        // After a flick the ribbon glides and eases back to its cruising speed.
        // With this exponential decay, a kick of `distance * friction` above
        // the target speed travels exactly `distance` pixels.
        const target = () => (keyboardFocus ? 0 : cruise);
        const glideBy = (distance: number) => {
          velocity = target() + distance * friction;
        };

        const tick = (_time: number, deltaTime: number) => {
          if (pointer !== null) return;
          const seconds = Math.min(deltaTime, 64) / 1000;
          // Integrated exactly, so glides cover their distance at any frame rate.
          const decay = Math.exp(-friction * seconds);
          const excess = velocity - target();
          offset += target() * seconds + (excess * (1 - decay)) / friction;
          velocity = Math.abs(excess * decay) < 0.5 ? target() : target() + excess * decay;
          render();
        };

        const onPointerDown = (event: PointerEvent) => {
          if (event.button !== 0) return;
          pointer = event.pointerId;
          startX = lastX = event.clientX;
          lastTime = event.timeStamp;
          dragging = false;
          // Touching a gliding ribbon only catches it, like a native list.
          suppressClick = Math.abs(velocity) > cruise * 3;
          velocity = 0;
        };

        const onPointerMove = (event: PointerEvent) => {
          if (event.pointerId !== pointer) return;
          if (!dragging && Math.abs(event.clientX - startX) > dragThreshold) {
            // Capture only once it is a drag, so a tap still clicks the link.
            dragging = suppressClick = true;
            frame.setPointerCapture(event.pointerId);
          }
          const delta = lastX - event.clientX;
          const elapsed = Math.max(event.timeStamp - lastTime, 1) / 1000;
          offset += delta;
          velocity = velocity * 0.2 + (delta / elapsed) * 0.8;
          lastX = event.clientX;
          lastTime = event.timeStamp;
          render();
        };

        const onPointerUp = (event: PointerEvent) => {
          if (event.pointerId !== pointer) return;
          pointer = null;
          // A finger that stopped before lifting should not throw the ribbon.
          if (event.timeStamp - lastTime > 100 || event.type === "pointercancel") {
            velocity = 0;
          }
          velocity = gsap.utils.clamp(-maxVelocity, maxVelocity, velocity);
        };

        const onPointerLeave = (event: PointerEvent) => {
          if (!dragging) onPointerUp(event);
        };

        const onClick = (event: MouseEvent) => {
          if (!suppressClick) return;
          suppressClick = false;
          event.preventDefault();
          event.stopPropagation();
        };

        const onWheel = (event: WheelEvent) => {
          if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
          event.preventDefault();
          offset += event.deltaX;
          velocity = 0;
          render();
        };

        // Arrow keys move one product, reusing the same glide.
        const onKeyDown = (event: KeyboardEvent) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault();
          const [first, second] = group.children as HTMLCollectionOf<HTMLElement>;
          glideBy((second.offsetLeft - first.offsetLeft) * (event.key === "ArrowRight" ? 1 : -1));
        };

        // Tabbing to a product glides it into view instead of letting the
        // browser scroll the clipped viewport.
        const onFocusIn = (event: FocusEvent) => {
          const card = event.target as HTMLElement;
          keyboardFocus = card.matches(":focus-visible");
          if (!keyboardFocus || card === frame) return;
          // Focus may already have scrolled the viewport; measure without it.
          frame.scrollLeft = 0;
          const bounds = frame.getBoundingClientRect();
          const style = getComputedStyle(frame);
          const start = bounds.left + parseFloat(style.paddingLeft);
          const end = bounds.right - parseFloat(style.paddingRight);
          // Judge where the card will rest once any glide in progress ends.
          const pending = (velocity - target()) / friction;
          const box = card.getBoundingClientRect();
          const left = box.left - pending;
          const right = box.right - pending;
          if (left < start) glideBy(left - start + pending);
          else if (right > end) glideBy(right - end + pending);
        };

        const onFocusOut = (event: FocusEvent) => {
          if (!frame.contains(event.relatedTarget as Node | null)) keyboardFocus = false;
        };

        const onScroll = () => {
          frame.scrollLeft = 0;
        };

        const observer = new ResizeObserver(() => {
          const nextWidth = group.getBoundingClientRect().width;
          if (!nextWidth || nextWidth === width) return;
          offset = width ? (offset / width) * nextWidth : 0;
          width = nextWidth;
          render();
        });
        observer.observe(group);

        frame.addEventListener("pointerdown", onPointerDown);
        frame.addEventListener("pointermove", onPointerMove);
        frame.addEventListener("pointerup", onPointerUp);
        frame.addEventListener("pointercancel", onPointerUp);
        frame.addEventListener("pointerleave", onPointerLeave);
        frame.addEventListener("click", onClick, true);
        frame.addEventListener("wheel", onWheel, { passive: false });
        frame.addEventListener("keydown", onKeyDown);
        frame.addEventListener("focusin", onFocusIn);
        frame.addEventListener("focusout", onFocusOut);
        frame.addEventListener("scroll", onScroll);
        gsap.ticker.add(tick);

        return () => {
          gsap.ticker.remove(tick);
          observer.disconnect();
          frame.removeEventListener("pointerdown", onPointerDown);
          frame.removeEventListener("pointermove", onPointerMove);
          frame.removeEventListener("pointerup", onPointerUp);
          frame.removeEventListener("pointercancel", onPointerUp);
          frame.removeEventListener("pointerleave", onPointerLeave);
          frame.removeEventListener("click", onClick, true);
          frame.removeEventListener("wheel", onWheel);
          frame.removeEventListener("keydown", onKeyDown);
          frame.removeEventListener("focusin", onFocusIn);
          frame.removeEventListener("focusout", onFocusOut);
          frame.removeEventListener("scroll", onScroll);
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
      <div
        data-reveal
        className="mb-6 flex flex-wrap items-end justify-between gap-6"
      >
        <h2 className="whitespace-nowrap text-3xl leading-tight tracking-[-0.045em] md:text-5xl">
          ¿Cuál es la tuya?
        </h2>
        <Link
          href="/carta"
          className="group inline-flex items-center gap-3 py-2 text-sm font-semibold decoration-1 underline-offset-[6px] hover:underline"
        >
          Toda la carta
          <ArrowIcon className="size-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div
        ref={viewport}
        role="region"
        className="-mx-6 scroll-px-6 overflow-x-auto px-6 select-none md:mx-0 md:scroll-px-0 md:px-0 motion-reduce:snap-x motion-reduce:snap-mandatory motion-safe:cursor-grab motion-safe:touch-pan-y motion-safe:overflow-hidden motion-safe:active:cursor-grabbing"
        tabIndex={0}
        onDragStart={(event) => event.preventDefault()}
        aria-label="Algunas de nuestras gildas. Desliza para ver más o abre una para ver sus ingredientes y alérgenos en la carta."
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
              className={`flex shrink-0 gap-5 pr-5 md:gap-14 md:pr-14 ${copy === 1 ? "motion-reduce:hidden" : ""}`}
            >
              {featured.map((product, index) => (
                <Link
                  key={product.id}
                  href={productHref(product.id)}
                  tabIndex={copy === 1 ? -1 : undefined}
                  aria-label={`${product.name}: ingredientes y alérgenos`}
                  className="block w-[58vw] max-w-90 shrink-0 snap-start rounded-2xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-sea md:w-80 lg:w-90"
                >
                  <ProductCard
                    product={product}
                    showDetails={false}
                    centered
                    loading={copy === 0 && index < 2 ? "eager" : "lazy"}
                    sizes="(min-width: 1024px) 22.5rem, (min-width: 768px) 20rem, 58vw"
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
