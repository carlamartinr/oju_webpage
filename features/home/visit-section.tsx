import { ExternalIcon } from "@/components/ui/icons";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

export function VisitSection() {
  return (
    <section
      id="encuentranos"
      className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:gap-20 md:px-12 md:py-24"
    >
      <PhotoPlaceholder
        label="Próximamente"
        className="aspect-4/3"
      />
      <div data-reveal>
        <p className="mb-4 font-serif text-xl italic text-sea">Tu próxima buena parada</p>
        <h2 className="text-4xl leading-tight tracking-[-0.045em] md:text-5xl">
          Dónde
          <br />
          encontrarnos
        </h2>
        <dl className="mt-10 grid gap-8 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Dirección</dt>
            <dd className="mt-1 text-olive/65">
              Calle Pozo Amarguillo, 15–17
              <br />
              Sanlúcar de Barrameda (Cádiz)
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Horario</dt>
            <dd className="mt-1 text-olive/65">Próximamente</dd>
          </div>
        </dl>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Calle+Pozo+Amarguillo+15-17%2C+Sanl%C3%BAcar+de+Barrameda%2C+C%C3%A1diz"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-sea decoration-1 underline-offset-[6px] hover:underline"
        >
          Cómo llegar
          <ExternalIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
