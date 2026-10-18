import type { Metadata } from "next";

export const site = {
  name: "Ojú",
  url: "https://ojugildas.com",
  title: "Gildas en Sanlúcar de Barrameda",
  description:
    "Descubre las gildas de Ojú en Sanlúcar de Barrameda: consulta la carta, sus ingredientes y alérgenos, y acuerda tu pedido por WhatsApp.",
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, site.url).href;
  const socialTitle = `${title} | ${site.name}`;
  const image = {
    url: `${site.url}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: "Gildas Ojú preparadas con distintas combinaciones de ingredientes",
  };

  return {
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: site.name,
      title: socialTitle,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
