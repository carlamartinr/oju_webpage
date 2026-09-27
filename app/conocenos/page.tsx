import type { Metadata } from "next";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { ButtonLink } from "@/components/ui/button-link";
import { Sun, Wave } from "@/components/ui/icons";

export const metadata: Metadata = { title: "Conócenos" };

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-12 md:pt-18">
        <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-sea">
          Mucho gusto. Somos Ojú.
        </p>
        <h1 className="max-w-4xl text-5xl leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-8xl">
          Una forma de ser.
          <br />Y de saborear.
        </h1>
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <PhotoPlaceholder
            label="Aquí conocerás a nuestras fundadoras"
            kind="people"
          />
          <div>
            <Wave className="mb-7 h-6 w-24 text-sea" />
            <h2 className="text-4xl leading-tight tracking-tight">
              Del sur.
              <br />Y de compartir.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-olive/80">
              Ojú es una marca andaluza de Cádiz. Gildas, aceitunas y aperitivos
              alrededor de una idea sencilla: disfrutar de lo bueno, en buena
              compañía.
            </p>
            <p className="mt-5 text-base leading-relaxed text-olive/80">
              Nos gusta ese momento en el que la mesa se llena, la conversación
              arranca y nadie mira el reloj.
            </p>
            <p className="mt-8 border-l-2 border-sea pl-4 text-xs leading-relaxed text-olive/65">
              Muy pronto compartiremos la historia de las fundadoras y cómo
              empezó Ojú.
            </p>
          </div>
        </div>
      </section>
      <section className="my-10 bg-sea px-6 py-16 text-albariza md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em]">
              Lo que nos mueve
            </p>
            <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
              Las cosas buenas
              <br />
              no necesitan
              <br />
              muchas vueltas.
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-albariza/80">
              Un bocado con carácter. Un aperitivo sin prisa. Una excusa para
              volver a juntarse.
            </p>
          </div>
          <Sun className="mx-auto size-40 md:size-60" />
        </div>
      </section>
      <section className="px-6 py-16 text-center">
        <h2 className="mb-7 text-3xl tracking-tight md:text-4xl">
          Ahora que nos conocemos…
        </h2>
        <ButtonLink href="/carta">Vamos al aperitivo</ButtonLink>
      </section>
    </>
  );
}
