import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

export function VisitSection() {
  return (
    <section
      id="encuentranos"
      className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:gap-20 md:px-12 md:py-24"
    >
      <PhotoPlaceholder
        label="Aquí irá una foto de nuestro rincón"
        className="aspect-4/3"
      />
      <div data-reveal>
        <p className="mb-4 inline-block -rotate-3 font-serif text-xl italic text-sea">
          Tu próxima buena parada
        </p>
        <h2 className="text-4xl leading-tight tracking-[-0.045em] md:text-5xl">
          Dónde
          <br />
          encontrarnos
        </h2>
        <dl className="mt-10 grid gap-8 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Dirección</dt>
            <dd className="mt-1 text-olive/65">Pendiente de confirmar</dd>
          </div>
          <div>
            <dt className="font-semibold">Horario</dt>
            <dd className="mt-1 text-olive/65">Próximamente</dd>
          </div>
        </dl>
        <p className="mt-10 text-xs leading-relaxed text-olive/60">
          Publicaremos la ubicación y cómo llegar cuando estén confirmadas.
        </p>
      </div>
    </section>
  );
}
