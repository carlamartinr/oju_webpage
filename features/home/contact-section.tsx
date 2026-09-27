import { Sun } from "@/components/ui/icons";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-sea px-6 py-16 text-albariza md:px-12 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.22em]">
            Somos de hablar las cosas
          </p>
          <h2 className="text-4xl tracking-[-0.04em] md:text-5xl">
            ¿Echamos
            <br />
            un ratito?
          </h2>
        </div>
        <div className="flex items-center justify-between gap-8">
          <dl className="flex-1 text-sm">
            <div className="border-b border-albariza/25 py-5">
              <dt className="mb-2 font-semibold">Teléfono</dt>
              <dd className="text-albariza/70">Próximamente</dd>
            </div>
            <div className="py-5">
              <dt className="mb-2 font-semibold">Correo electrónico</dt>
              <dd className="text-albariza/70">Próximamente</dd>
            </div>
          </dl>
          <Sun className="hidden size-24 lg:block" />
        </div>
      </div>
    </section>
  );
}
