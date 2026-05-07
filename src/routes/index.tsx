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
      { title: "Lorena Llira | Composições personalizadas" },
      {
        name: "description",
        content:
          "Atelier de composições autorais para momentos que merecem ser eternizados em música.",
      },
      { property: "og:title", content: "Lorena Llira | Composições personalizadas" },
      {
        property: "og:description",
        content:
          "Atelier de composições autorais para momentos que merecem ser eternizados em música.",
      },
      { property: "og:url", content: "https://lorenallira.com.br/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://lorenallira.com.br/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lorena Llira | Composições personalizadas" },
      {
        name: "twitter:description",
        content:
          "Atelier de composições autorais para momentos que merecem ser eternizados em música.",
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
            "Atelier de composições autorais para momentos que merecem ser eternizados em música.",
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
