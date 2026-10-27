import type { Metadata } from "next";
import { pageMetadata } from "@/data/site";
import { Order } from "@/features/cart/order";

export const metadata: Metadata = {
  ...pageMetadata(
    "Tu pedido",
    "Revisa las gildas que has elegido y envía tu pedido a Ojú por WhatsApp.",
    "/pedido",
  ),
  // Personal, empty for crawlers: not a search landing page.
  robots: { index: false, follow: true },
};

export default function OrderPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-12 md:pt-18">
      <h1 className="mb-14 text-5xl leading-[1.02] tracking-[-0.05em] md:mb-20 md:text-7xl">
        Tu <span className="text-sea">pedido</span>
      </h1>
      <Order />
    </div>
  );
}
