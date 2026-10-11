import { LogoOlives } from "@/components/ui/logo-olives";
import { ButtonLink } from "@/components/ui/button-link";
import { Wave } from "@/components/ui/icons";

export function ManifestoSection() {
  return (
    <section className="bg-olive px-6 py-16 text-albariza md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-7 text-center">
        <LogoOlives className="size-14" />
        <p data-reveal className="text-[10px] uppercase tracking-[0.25em]">
          Una forma muy nuestra de disfrutar
        </p>
        <h2
          data-reveal
          className="max-w-3xl text-4xl leading-tight tracking-[-0.035em] md:text-6xl"
        >
          Menos prisa.
          <br />
          Más aperitivo.
        </h2>
        <div data-reveal>
          <ButtonLink href="/conocenos" light>
            Esto es Ojú
          </ButtonLink>
        </div>
        <Wave className="mt-3 h-5 w-20" />
      </div>
    </section>
  );
}
