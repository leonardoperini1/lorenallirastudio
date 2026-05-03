import { MessageCircle, Feather, Disc3 } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    n: "01",
    title: "Conversa íntima",
    text: "Tudo começa com uma chamada de 30 minutos. Você conta a história, mostra fotos, lembra cheiros e palavras. Nós escutamos.",
  },
  {
    icon: Feather,
    n: "02",
    title: "Escrita & melodia",
    text: "Cada criação é única — podendo ser desenvolvida em diferentes idiomas e estilos, com elementos como mensagens faladas e variações da própria canção.",
  },
  {
    icon: Disc3,
    n: "03",
    title: "Estúdio & entrega",
    text: "A entrega pode incluir versões adicionais, playback´s e a letra apresentada como uma lembrança física, emoldurada em forma de carta ou cartão.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="reveal max-w-3xl mb-20 lg:mb-28">
          <span className="eyebrow block mb-6">Como funciona</span>
          <h2 className="font-serif text-5xl lg:text-7xl leading-[1] tracking-[-0.015em]">
            Do primeiro suspiro<br />à <em className="italic font-light text-primary">trilha final</em>.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6">
          {/* connecting line desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative flex flex-col items-start lg:items-center text-left lg:text-center"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative mb-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card border border-border shadow-[0_8px_30px_-12px_oklch(0.4_0.05_30/0.2)]">
                  <s.icon size={32} className="text-primary" strokeWidth={1.4} />
                </div>
                <span className="absolute -top-2 -right-2 font-serif text-2xl text-primary italic">
                  {s.n}
                </span>
              </div>

              <h3 className="font-serif text-3xl mb-4">{s.title}</h3>
              <p className="text-base leading-[1.8] text-foreground/70 font-light max-w-xs">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
