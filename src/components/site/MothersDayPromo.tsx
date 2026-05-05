import { Heart } from "lucide-react";
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-secondary/10 to-background" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="reveal relative mx-auto max-w-4xl rounded-3xl border border-primary/30 bg-card/80 backdrop-blur-sm p-10 lg:p-16 text-center shadow-[0_24px_60px_-24px_oklch(0.62_0.09_35/0.35)]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[0.65rem] tracking-editorial uppercase font-medium mb-8">
            <Heart size={14} fill="currentColor" />
            <span>Edição Dia das Mães</span>
          </div>

          <h2 className="font-serif text-5xl lg:text-7xl leading-[1] tracking-[-0.015em] mb-6">
            <em className="italic font-light text-primary">50% de desconto</em>
            <br />
            no plano Prelúdio
          </h2>

          <p className="text-lg lg:text-xl leading-[1.7] text-foreground/75 font-light max-w-2xl mx-auto mb-10">
            Transforme a história da sua mãe em uma canção única.
            Uma lembrança que ela vai guardar para sempre.
          </p>

          <a
            href={PROMO_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10"
          >
            Quero o Prelúdio
          </a>
        </div>
      </div>
    </section>
  );
}
