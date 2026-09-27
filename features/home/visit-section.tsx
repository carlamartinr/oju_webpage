import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

export function VisitSection() {
  return (
    <section
      id="encuentranos"
      className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:gap-20 md:px-12 md:py-24"
    >
      <PhotoPlaceholder label="Aquí irá una foto de nuestro rincón" />
      <div data-reveal>
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sea">
          Donde encontrarnos
        </p>
        <h2 className="text-4xl leading-tight tracking-[-0.045em] md:text-5xl">
          Tu próxima
          <br />
          buena parada.
        </h2>
        <p className="mt-6 max-w-sm text-base leading-relaxed text-olive/80">
          Hay sitios a los que se viene por el aperitivo y se vuelve por todo lo
          demás.
        </p>
        <dl className="mt-8 border-t border-olive/20 text-sm">
          <div className="flex justify-between gap-6 border-b border-olive/20 py-5">
            <dt className="font-semibold">Dirección</dt>
            <dd className="text-olive/65">Pendiente de confirmar</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-olive/20 py-5">
            <dt className="font-semibold">Horario</dt>
            <dd className="text-olive/65">Próximamente</dd>
          </div>
        </dl>
        <p className="mt-5 text-xs leading-relaxed text-olive/65">
          Publicaremos la ubicación y cómo llegar cuando estén confirmadas.
        </p>
      </div>
    </section>
  );
}
