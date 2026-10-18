import { LogoOlives } from "@/components/ui/logo-olives";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-olive px-6 py-16 text-albariza md:px-12 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div data-reveal>
          <h2 className="text-4xl tracking-[-0.04em] md:text-5xl">
            Contacta con nosotros
          </h2>
        </div>
        <div className="flex items-center justify-between gap-8">
          <dl className="flex-1 space-y-6 text-sm">
            <div>
              <dt className="mb-2 font-semibold">Teléfono</dt>
              <dd>
                <a className="text-albariza/85 hover:underline" href="tel:+34616232057">
                  616 232 057
                </a>
              </dd>
            </div>
            <div>
              <dt className="mb-2 font-semibold">Correo electrónico</dt>
              <dd>
                <a className="break-all text-albariza/85 hover:underline" href="mailto:info@ojugildas.com">
                  info@ojugildas.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="mb-2 font-semibold">Instagram</dt>
              <dd>
                <a
                  className="text-albariza/85 hover:underline"
                  href="https://www.instagram.com/ojugildas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ojugildas
                </a>
              </dd>
            </div>
          </dl>
          <LogoOlives className="hidden size-24 lg:block" />
        </div>
      </div>
    </section>
  );
}
