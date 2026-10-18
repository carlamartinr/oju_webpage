import { LogoOlives } from "@/components/ui/logo-olives";
import { pageMetadata } from "@/data/site";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Wave } from "@/components/ui/icons";

export const metadata = pageMetadata(
  "Nuestra historia",
  "Conoce la historia de Ojú: dos mujeres, más de veinte años de experiencia compartida y gildas con esencia gaditana.",
  "/conocenos",
);

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-12 md:pt-18">
        <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-sea">
          Mucho gusto. Somos Ojú.
        </p>
        <h1 className="max-w-4xl text-5xl leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-8xl">
          Nuestra historia,
          <br />nuestra esencia.
        </h1>
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
            <Image
              src="/images/conocenos-gildas.jpg"
              alt="Bandejas de gildas Ojú preparadas con distintas combinaciones de aceitunas e ingredientes"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
              loading="eager"
            />
          </div>
          <div>
            <Wave className="mb-7 h-6 w-24 text-sea" />
            <h2 className="text-4xl leading-tight tracking-tight">
              Dos décadas
              <br />entre aceitunas.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-olive/80">
              Ojú – Gildas del Sur nace de la unión entre la tradición, la
              experiencia y las ganas de emprender.
            </p>
            <p className="mt-5 text-base leading-relaxed text-olive/80">
              Eli lleva toda una vida vinculada al mundo de la aceituna, un
              sector que conoce de cerca y que forma parte de su trayectoria.
            </p>
            <p className="mt-5 text-base leading-relaxed text-olive/80">
              Nuestros caminos se cruzaron hace más de 20 años, cuando comencé a
              trabajar en su empresa. Dos décadas compartiendo experiencias,
              aprendiendo y conociendo de cerca este apasionante mundo.
            </p>
            <p className="mt-5 text-base leading-relaxed text-olive/80">
              Con el tiempo surgieron las ganas de dar un paso más, de
              reinventarnos y de transformar toda esa experiencia en un
              proyecto propio, fresco y diferente.
            </p>
          </div>
        </div>
      </section>
      <section className="my-10 bg-sea px-6 py-16 text-albariza md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
              Y así nació Ojú.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-albariza/80">
              Un nombre que refleja nuestra esencia gaditana. Porque en Cádiz,
              cuando algo nos sorprende, nos emociona o nos parece
              extraordinariamente bueno, solo podemos decir una cosa: ¡Ojú!
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-albariza/80">
              Esa es precisamente nuestra filosofía: reinventar la gilda
              tradicional con combinaciones originales, ingredientes
              seleccionados y mucho sabor.
            </p>
          </div>
          <LogoOlives className="mx-auto size-40 md:size-60" />
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <h2 className="text-3xl leading-tight tracking-tight md:text-4xl">
          Dos mujeres, una historia compartida y un sueño por cumplir.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-olive/80">
          Te invitamos a descubrir nuestras gildas, a disfrutar de cada bocado
          y a encontrar tu favorita.
        </p>
        <p className="mb-9 mt-8 inline-block -rotate-3 font-serif text-xl italic text-sea">
          Pruébalas y entenderás por qué decimos ¡Ojú!
        </p>
        <div>
          <ButtonLink href="/carta">Descubre nuestras gildas</ButtonLink>
        </div>
      </section>
    </>
  );
}
