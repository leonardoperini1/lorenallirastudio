import { ReactNode } from "react";
import { waLink } from "@/lib/whatsapp";

interface Props {
  eyebrow: string;
  h1: string;
  intro: string;
  ctaLabel?: string;
  ctaMessage?: string;
  children: ReactNode;
}

export function InternalPage({ eyebrow, h1, intro, ctaLabel = "Encomendar minha música", ctaMessage, children }: Props) {
  return (
    <article className="pt-[140px] pb-[100px]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">
        <header className="reveal mb-16 max-w-3xl">
          <span className="eyebrow block mb-6 text-primary/80">{eyebrow}</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-[-0.02em] text-foreground">
            {h1}
          </h1>
          <p className="mt-8 text-lg leading-[1.7] text-foreground/80 font-light">
            {intro}
          </p>
          <div className="mt-10">
            <a
              href={waLink(ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {ctaLabel}
            </a>
          </div>
        </header>

        <div className="prose-content space-y-10 text-foreground/85 leading-[1.8] font-light text-base lg:text-lg max-w-3xl">
          {children}
        </div>

        <div className="mt-20 reveal border-t border-border/60 pt-12">
          <h2 className="font-serif text-3xl lg:text-4xl mb-4">
            Pronta para começar a sua <em className="italic font-light text-primary">composição</em>?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Conte sua história em uma conversa de 30 minutos. Toda música é exclusiva, autoral e entregue em até 7 dias.
          </p>
          <a
            href={waLink(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
