import { Check } from "lucide-react";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano";

const plans = [
  {
    name: "Prelúdio",
    price: "R$ 890",
    tagline: "Para mensagens curtas e intimistas",
    features: [
      "Composição autoral até 1:30",
      "1 voz e violão (gravação em estúdio)",
      "Letra impressa em papel algodão",
      "1 rodada de ajustes",
      "Entrega em 10 dias",
    ],
    cta: "Começar Prelúdio",
    featured: false,
  },
  {
    name: "Intermezzo",
    price: "R$ 1.690",
    tagline: "O equilíbrio perfeito — escolha da casa",
    features: [
      "Composição autoral até 3:00",
      "Voz, violão, piano e cordas",
      "Letra emoldurada A4 + caligrafia",
      "Mixagem & masterização",
      "3 rodadas de ajustes",
      "Entrega em 7 dias",
      "Videoclipe com letras (1080p)",
    ],
    cta: "Escolher Intermezzo",
    featured: true,
  },
  {
    name: "Sonata",
    price: "R$ 2.890",
    tagline: "Produção orquestral completa",
    features: [
      "Composição autoral até 4:30",
      "Banda + quarteto de cordas",
      "Caderno de partituras encadernado",
      "Mixagem dolby & masterização",
      "Ajustes ilimitados",
      "Entrega em 5 dias (prioritária)",
      "Videoclipe cinematográfico 4K",
      "Sessão presencial de gravação",
    ],
    cta: "Solicitar Sonata",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="relative py-32 lg:py-44 bg-muted/40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="reveal text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <span className="eyebrow block mb-6">Planos & Investimento</span>
          <h2 className="font-serif text-5xl lg:text-7xl leading-[1] tracking-[-0.015em]">
            Três caminhos.<br />Uma <em className="italic font-light text-primary">só obra</em> sua.
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-foreground/70 font-light">
            Pacotes pensados para diferentes momentos da vida. Tudo inclui composição
            original, gravação profissional e arquivo digital em alta qualidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((p, i) => (
            <article
              key={p.name}
              className={`reveal relative flex flex-col rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${
                p.featured
                  ? "bg-card border-2 border-primary shadow-[0_24px_60px_-20px_oklch(0.62_0.09_35/0.4)] lg:scale-[1.03] lg:my-0"
                  : "bg-card border border-border/60 shadow-[0_4px_24px_-12px_oklch(0.4_0.05_30/0.15)]"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-[0.65rem] tracking-editorial uppercase font-medium whitespace-nowrap">
                  ★ Mais escolhido
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-serif text-4xl mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground font-light italic">{p.tagline}</p>
              </div>

              <div className="mb-10 pb-8 border-b border-border/60">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-6xl tracking-[-0.02em]">{p.price}</span>
                </div>
                <span className="text-xs tracking-editorial uppercase text-muted-foreground mt-2 block">
                  ou em até 6x sem juros
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${p.featured ? "bg-primary text-primary-foreground" : "bg-sage/15 text-sage"}`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  p.featured
                    ? "btn-primary w-full"
                    : "btn-ghost w-full justify-center"
                }
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
