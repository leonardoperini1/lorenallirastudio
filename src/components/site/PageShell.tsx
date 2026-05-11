import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { useReveal } from "@/hooks/use-reveal";

export function PageShell({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <main className="relative min-h-screen">
      <Header />
      {children}
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
