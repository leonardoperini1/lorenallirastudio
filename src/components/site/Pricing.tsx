import { Check } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const plans = [
  {
    name: "Prelúdio",
    price: "R$ 249",
    priceFrom: false,
    tagline: "A essência da sua história em forma de canção",
    features: [
      "Canção original personalizada",
      "1 versão final em áudio (mp3)",
    ],
    cta: "Quero o Prelúdio",
    waMessage: "Ola, gostaria de saber mais sobre o plano Prelúdio",
    featured: false,
  },
  {
    name: "Intermezzo",
    price: "R$ 449",
    priceFrom: false,
    tagline: "Quando a história pede mais presença",
    features: [
      "Canção original personalizada",
      "2 versões da mesma canção (interpretação/arranjo)",
    ],
    cta: "Quero o Intermezzo",
    waMessage: "Ola, gostaria de saber mais sobre o plano Intermezzo",
    featured: true,
  },
  {
    name: "Sonata",
    price: "R$ 897",
    priceFrom: true,
    tagline: "A experiência completa da sua canção",
    features: [
      "Canção original personalizada",
      "2 versões da mesma canção",
      "Playback instrumental",
      "Liberação comercial",
    ],
    cta: "Quero o Sonata",
    waMessage: "Ola, gostaria de saber mais sobre o plano Sonata",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="relative py-[100px] bg-muted/40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="reveal text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <span className="eyebrow block mb-6">Planos & Investimento</span>
          <h2 className="font-serif text-5xl lg:text-7xl leading-[1] tracking-[-0.015em]">
            Três caminhos.<br />Uma <em className="italic font-light text-primary">só obra</em> sua
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-foreground/70 font-light">
            Pacotes pensados para diferentes momentos da vida. Toda canção é
            composta de forma exclusiva, autoral e sob medida
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <article
              key={p.name}
              className={`reveal relative flex flex-col rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${
                p.featured
                  ? "bg-foreground text-background border-2 border-primary shadow-[0_24px_60px_-20px_oklch(0.62_0.09_35/0.5)] lg:scale-[1.04] lg:my-0"
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
                <p className={`text-sm font-light italic ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {p.tagline}
                </p>
              </div>

              <div className={`mb-10 pb-8 border-b ${p.featured ? "border-background/20" : "border-border/60"}`}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  {p.priceFrom && (
                    <span className={`text-sm font-light ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                      a partir de
                    </span>
                  )}
                  <span className="font-serif text-6xl tracking-[-0.02em]">{p.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      p.featured ? "bg-primary text-primary-foreground" : "bg-sage/15 text-sage"
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className={p.featured ? "text-background/90" : "text-foreground/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(p.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  p.featured
                    ? "btn-primary w-full justify-center"
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
