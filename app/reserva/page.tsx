import type { Metadata } from "next";
import { PickupForm } from "@/features/reservations/pickup-form";

export const metadata: Metadata = { title: "Prepara tu recogida" };

export default function ReservationPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-12 md:pt-18">
      <header className="mb-14">
        <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-sea">
          Para llevarte un poquito del sur
        </p>
        <h1 className="text-5xl leading-[1.05] tracking-[-0.05em] md:text-7xl">
          Tú pones el plan.
          <br />
          Nosotros, el aperitivo.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-olive/75">
          Elige tus favoritos y prepara una selección para recoger en tienda.
        </p>
        <p className="mt-5 inline-block border border-sea/25 px-4 py-3 text-xs leading-relaxed text-sea">
          Versión de prueba: puedes revisar tu selección, pero todavía no hacer
          un pedido.
        </p>
      </header>
      <PickupForm />
    </div>
  );
}
