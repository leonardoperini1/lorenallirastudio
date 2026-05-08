import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { SpacePromo } from "@/components/site/SpacePromo";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lorena Llira | Composições Personalizadas para Casamentos e Momentos Especiais" },
      {
        name: "description",
        content:
          "Composições musicais personalizadas para casamentos, pedidos, aniversários e momentos especiais. Transforme sentimentos em música com Lorena Llira.",
      },
      {
        name: "keywords",
        content:
          "composição personalizada, música personalizada, música para casamento, música para pedido de casamento, música romântica, música sob encomenda, canção personalizada, composição romântica, homenagens musicais, trilha sonora personalizada",
      },
      { property: "og:title", content: "Lorena Llira | Composições Personalizadas para Casamentos e Momentos Especiais" },
      {
        property: "og:description",
        content:
          "Composições musicais personalizadas para casamentos, pedidos, aniversários e momentos especiais. Transforme sentimentos em música com Lorena Llira.",
      },
      { property: "og:url", content: "https://lorenallira.com.br/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: "https://lorenallira.com.br/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lorena Llira | Composições Personalizadas" },
      {
        name: "twitter:description",
        content:
          "Composições musicais personalizadas para casamentos, pedidos, aniversários e momentos especiais.",
      },
      { name: "twitter:image", content: "https://lorenallira.com.br/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://lorenallira.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: "Lorena Llira",
          url: "https://lorenallira.com.br/",
          description:
            "Atelier de composições personalizadas para casamentos, pedidos, aniversários e momentos especiais.",
          genre: ["MPB", "Pop", "Sertanejo", "Bossa Nova", "Romântica"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Lorena Llira — Composições Personalizadas",
          url: "https://lorenallira.com.br/",
          image: "https://lorenallira.com.br/og-image.jpg",
          description:
            "Atelier de composições musicais personalizadas para casamentos, pedidos, aniversários e momentos especiais.",
          areaServed: "BR",
          priceRange: "R$ 249 - R$ 897+",
          serviceType: [
            "Música personalizada",
            "Música para casamento",
            "Música para pedido de casamento",
            "Composição romântica",
            "Homenagens musicais",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <HowItWorks />
      <Pricing />
      <SpacePromo />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
