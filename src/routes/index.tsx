import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { Pricing } from "@/components/site/Pricing";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lorena LLira · Composições musicais personalizadas" },
      {
        name: "description",
        content:
          "Atelier de composições autorais sob medida. Transforme sentimentos em música — casamentos, pedidos, aniversários e momentos únicos.",
      },
      { property: "og:title", content: "Lorena LLira · Composições personalizadas" },
      { property: "og:description", content: "Transforme sentimentos em música. Composições autorais gravadas em estúdio." },
      { property: "og:type", content: "website" },
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
      <Testimonials />
      <Pricing />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
