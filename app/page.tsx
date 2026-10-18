import { pageMetadata, site } from "@/data/site";
import { Hero } from "@/features/home/hero";
import { ProductCarousel } from "@/features/home/product-carousel";
import { ManifestoSection } from "@/features/home/manifesto-section";
import { VisitSection } from "@/features/home/visit-section";
import { ContactSection } from "@/features/home/contact-section";
import { HomeMotion } from "@/features/home/home-motion";

export const metadata = pageMetadata(site.title, site.description, "/");

const business = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": `${site.url}/#negocio`,
  name: site.name,
  url: site.url,
  image: `${site.url}/images/conocenos-gildas.jpg`,
  logo: `${site.url}/oju.png`,
  telephone: "+34616232057",
  email: "info@ojugildas.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Pozo Amarguillo, 15–17",
    addressLocality: "Sanlúcar de Barrameda",
    addressRegion: "Cádiz",
    addressCountry: "ES",
  },
  hasMenu: `${site.url}/carta`,
  sameAs: ["https://www.instagram.com/ojugildas/"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <ProductCarousel />
      <ManifestoSection />
      <VisitSection />
      <ContactSection />
      <HomeMotion />
    </>
  );
}
