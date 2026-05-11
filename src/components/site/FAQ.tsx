const faqs = [
  {
    q: "Como funciona o processo de criação musical?",
    a: "Cada projeto nasce de forma única. Algumas pessoas chegam com uma letra praticamente pronta e preferem manter sua própria escrita, enquanto outras trazem apenas uma ideia, uma lembrança ou um sentimento ainda sem forma. A partir desse ponto, desenvolvo a identidade da música, realizando os ajustes necessários na letra, na sonoridade e na atmosfera emocional da composição, sempre respeitando a essência daquilo que a pessoa deseja transmitir.",
  },
  {
    q: "A música será realmente exclusiva?",
    a: "Sim. Cada criação é feita de forma personalizada, pensando na história, intenção e identidade de quem contrata. A proposta não é produzir algo genérico, mas uma música com verdade e personalidade.",
  },
  {
    q: "Posso contratar uma música para presentear alguém?",
    a: "Claro. Muitas músicas nascem como presentes afetivos: pedidos de casamento, homenagens, aniversários, reconciliações, despedidas ou memórias que merecem permanecer vivas no tempo. Algumas dessas criações também se tornam tributos delicados a pessoas que já partiram, transformando saudade, amor e lembrança em algo que pode ser ouvido, guardado e sentido. Em cada projeto, o mais importante é preservar a verdade emocional da história. 🌿",
  },
  {
    q: "As músicas são criadas por inteligência artificial?",
    a: "Cada projeto nasce de um processo criativo humano, autoral e personalizado. A tecnologia pode fazer parte de algumas etapas de produção e experimentação sonora, mas a identidade artística, a composição, a direção emocional e as decisões criativas são desenvolvidas por mim, de acordo com a proposta de cada música.",
  },
  {
    q: "O atendimento é online?",
    a: "Sim. Todo o processo pode ser realizado online, de forma prática e próxima, independentemente da cidade ou estado onde você estiver.",
  },
  {
    q: "E se a música não ficar como eu imaginei?",
    a: "Cada criação passa por conversas e alinhamentos ao longo do processo, justamente para que a música represente da forma mais fiel possível aquilo que você deseja transmitir. Ajustes podem ser realizados quando necessário, porque o objetivo não é apenas entregar uma música, mas criar algo que faça sentido emocionalmente para quem recebe.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-[100px]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">
        <div className="reveal max-w-3xl mb-16">
          <span className="eyebrow block mb-6">Perguntas frequentes</span>
          <h2 className="font-serif text-5xl lg:text-6xl leading-[1] tracking-[-0.015em]">
            Antes da Primeira<br /><em className="italic font-light text-primary">Nota</em>
          </h2>
        </div>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                <h3 className="font-serif text-xl lg:text-2xl text-foreground/90 group-open:text-primary transition-colors">
                  {f.q}
                </h3>
                <span aria-hidden className="mt-2 text-2xl leading-none text-foreground/50 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-foreground/75 leading-[1.7] font-light max-w-3xl">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
