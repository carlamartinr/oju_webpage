import { Hero } from "@/features/home/hero";
import { ProductCarousel } from "@/features/home/product-carousel";
import { ManifestoSection } from "@/features/home/manifesto-section";
import { VisitSection } from "@/features/home/visit-section";
import { ContactSection } from "@/features/home/contact-section";
import { HomeMotion } from "@/features/home/home-motion";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <ManifestoSection />
      <VisitSection />
      <ContactSection />
      <HomeMotion />
    </>
  );
}
