import { AudioCard } from "./AudioCard";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const tracks = [
  { cover: p1, title: "Para Helena, no nosso primeiro abraço", occasion: "Pedido de namoro", duration: "2:48" },
  { cover: p2, title: "Casa, jardim e o resto da vida", occasion: "Casamento", duration: "3:12" },
  { cover: p3, title: "As mãos do meu pai", occasion: "Bodas de Ouro", duration: "2:55" },
  { cover: p4, title: "Carta para o Tomás", occasion: "Chegada do bebê", duration: "2:30" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="reveal grid lg:grid-cols-12 gap-10 mb-20 lg:mb-28">
          <div className="lg:col-span-5">
            <span className="eyebrow block mb-6">Portfólio · 04 / 380</span>
            <h2 className="font-serif text-5xl lg:text-7xl leading-[1] tracking-[-0.015em]">
              Histórias que <em className="italic font-light text-primary">soam</em> como sentem.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <p className="text-lg leading-[1.8] text-foreground/75 font-light">
              Cada peça nasce de uma conversa, segue por um caderno de rascunhos e
              termina em estúdio com músicos reais. O que você ouve abaixo são
              recortes de obras inteiras — pedaços fiéis de memórias que viraram canção.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {tracks.map((t, i) => (
            <div key={t.title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <AudioCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
