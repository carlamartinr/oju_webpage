import { LogoOlives } from "@/components/ui/logo-olives";
import { Hero } from "@/features/home/hero";
import { ProductCarousel } from "@/features/home/product-carousel";
import { VisitSection } from "@/features/home/visit-section";
import { ContactSection } from "@/features/home/contact-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Wave } from "@/components/ui/icons";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <section className="bg-olive px-6 py-16 text-albariza md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-7 text-center">
          <LogoOlives className="size-14" />
          <p className="text-[10px] uppercase tracking-[0.25em]">
            Una forma muy nuestra de disfrutar
          </p>
          <h2 className="max-w-3xl text-4xl leading-tight tracking-[-0.035em] md:text-6xl">
            Menos prisa.
            <br />
            Más aperitivo.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-albariza/80">
            Nos gustan las cosas sencillas: algo rico en la mesa, buena compañía
            y un «quédate otro ratito».
          </p>
          <ButtonLink href="/conocenos" light>
            Esto es Ojú
          </ButtonLink>
          <Wave className="mt-3 h-5 w-20" />
        </div>
      </section>
      <VisitSection />
      <ContactSection />
    </>
  );
}
