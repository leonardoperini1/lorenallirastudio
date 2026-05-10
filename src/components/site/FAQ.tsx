const faqs = [
  {
    q: "Como funciona uma música personalizada?",
    a: "Uma música personalizada começa com um briefing de 30 minutos onde você compartilha a história. A partir disso, escrevo uma letra autoral, crio a melodia exclusiva e gravo a canção em estúdio profissional. A composição personalizada é entregue em até 7 dias, com versões adicionais e a letra impressa como lembrança.",
  },
  {
    q: "Quanto custa uma composição personalizada?",
    a: "Uma composição personalizada custa a partir de R$ 249 no plano Prelúdio. Para casamentos e produções mais completas, há os pacotes Intermezzo (R$ 449) e Sonata (a partir de R$ 897), que incluem mais versões, playback instrumental e liberação comercial.",
  },
  {
    q: "Quanto tempo demora para receber a música?",
    a: "O prazo padrão de entrega de uma música personalizada é de até 7 dias após a aprovação da letra. Para datas como casamentos e pedidos de casamento, recomendamos solicitar com pelo menos 3 semanas de antecedência para garantir tempo de revisões.",
  },
  {
    q: "Posso encomendar uma música para casamento?",
    a: "Sim. A música para casamento é um dos pedidos mais comuns no atelier — funciona como entrada da noiva, primeira dança ou homenagem aos noivos. Toda canção é exclusiva, autoral e composta especialmente para o casal.",
  },
  {
    q: "Posso encomendar uma música personalizada para aniversário?",
    a: "Sim. Composições personalizadas para aniversário são presentes inesquecíveis, especialmente para datas marcantes como 15, 30, 50 ou 60 anos. A canção é construída a partir da história da pessoa homenageada.",
  },
  {
    q: "Como recebo minha música personalizada?",
    a: "Você recebe a música personalizada em arquivo digital de alta qualidade (WAV e MP3) por e-mail ou WhatsApp, junto com a letra. Nos pacotes Intermezzo e Sonata também são incluídos playback instrumental e versões alternativas.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-[100px]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">
        <div className="reveal max-w-3xl mb-16">
          <span className="eyebrow block mb-6">Perguntas frequentes</span>
          <h2 className="font-serif text-5xl lg:text-6xl leading-[1] tracking-[-0.015em]">
            Tudo o que você quer <em className="italic font-light text-primary">saber</em>
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
