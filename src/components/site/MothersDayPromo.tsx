import { Heart, Sparkles } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const PROMO_WA = waLink(
  "Olá, gostaria de saber mais sobre o plano Prelúdio para presentear minha mãe"
);

export function MothersDayPromo() {
  return (
    <section
      id="promo-dia-das-maes"
      className="relative py-[100px] overflow-hidden"
    >
      {/* Fundo dramático */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary/80 to-secondary" />
      <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_20%_30%,white,transparent_50%),radial-gradient(circle_at_80%_70%,white,transparent_50%)]" />

      {/* Corações flutuantes decorativos */}
      <Heart
        size={120}
        className="absolute -top-6 -left-6 text-background/10 rotate-[-20deg]"
        fill="currentColor"
      />
      <Heart
        size={160}
        className="absolute -bottom-10 -right-10 text-background/10 rotate-[15deg]"
        fill="currentColor"
      />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="reveal relative mx-auto max-w-5xl text-center text-primary-foreground">
          {/* Selo de urgência */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background text-primary text-[0.7rem] tracking-editorial uppercase font-bold mb-8 shadow-2xl">
            <Sparkles size={14} fill="currentColor" />
            <span>Edição Limitada • Dia das Mães</span>
            <Sparkles size={14} fill="currentColor" />
          </div>

          {/* Desconto MEGA destacado */}
          <div className="mb-8">
            <div className="font-serif text-[8rem] md:text-[12rem] leading-[0.85] tracking-[-0.04em] font-light">
              50<span className="text-5xl md:text-7xl align-top">%</span>
            </div>
            <div className="font-serif italic text-3xl md:text-5xl -mt-4">
              off
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-[-0.015em] mb-6">
            no plano <em className="italic">Prelúdio</em>
          </h2>

          <p className="text-lg md:text-xl leading-[1.7] font-light max-w-2xl mx-auto mb-10 text-primary-foreground/90">
            Transforme a história da sua mãe em uma canção única.
            Uma lembrança que ela vai guardar para sempre
          </p>

          <a
            href={PROMO_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-background text-primary font-medium tracking-luxury uppercase text-sm shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Quero o Prelúdio
          </a>

          <p className="mt-6 text-xs tracking-editorial uppercase text-primary-foreground/70">
            Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
}
