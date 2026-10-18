import { pageMetadata } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";

export const metadata = pageMetadata(
  "Pedidos por WhatsApp",
  "Pide tus gildas Ojú por WhatsApp al 616 232 057. Cuéntanos qué te apetece y acuerda los detalles de tu pedido con nosotros.",
  "/reserva",
);

export default function ReservationPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-6 py-20 md:px-12 md:py-28">
      <h1 className="text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
        Pide tu <span className="text-sea">aperitivo</span>
      </h1>
      <div className="mt-12 flex flex-col items-start gap-8 md:mt-16 md:flex-row md:items-end md:justify-between">
        <p className="max-w-lg text-lg leading-relaxed text-olive/75">
          Cuéntanos por WhatsApp qué te apetece y te ayudamos a preparar tu
          pedido.
        </p>
        <a
          href="https://wa.me/34616232057"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp al 616 232 057"
          className="inline-flex min-h-16 w-full shrink-0 items-center justify-center gap-4 whitespace-nowrap border border-olive/60 px-4 py-3 text-xl font-semibold text-olive transition-colors hover:border-olive hover:bg-olive hover:text-albariza sm:w-auto sm:px-5 lg:text-2xl"
        >
          <WhatsAppIcon className="size-7 shrink-0" />
          616 232 057
        </a>
      </div>
    </section>
  );
}
