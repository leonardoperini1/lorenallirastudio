import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { InternalPage } from "@/components/site/InternalPage";

export const Route = createFileRoute("/casamento")({
  component: CasamentoPage,
  head: () => ({
    meta: [
      { title: "Música para Casamento Personalizada | Lorena Llira" },
      {
        name: "description",
        content:
          "Música para casamento personalizada e composta sob medida. Eternize a entrada da noiva, votos e primeira dança com uma trilha sonora única.",
      },
      {
        name: "keywords",
        content:
          "música para casamento, música personalizada para casamento, composição para casamento, entrada da noiva, primeira dança, trilha sonora casamento",
      },
      { property: "og:title", content: "Música para Casamento Personalizada | Lorena Llira" },
      {
        property: "og:description",
        content:
          "Composições autorais para o seu casamento. Da entrada da noiva à primeira dança, transforme cada momento em música.",
      },
      { property: "og:url", content: "https://lorenallira.com.br/casamento" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lorenallira.com.br/casamento" }],
  }),
});

function CasamentoPage() {
  return (
    <PageShell>
      <InternalPage
        eyebrow="Música para casamento"
        h1="Música para casamento personalizada e composta sob medida"
        intro="Imagine a entrada da noiva ao som de uma canção escrita especialmente para vocês. Composições autorais para tornar o seu casamento inesquecível, do altar à pista de dança."
        ctaMessage="Olá Lorena! Gostaria de uma composição personalizada para o meu casamento."
      >
        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            Cada casamento merece uma trilha sonora <em className="italic font-light text-primary">só sua</em>
          </h2>
          <p>
            Uma <strong>música personalizada para casamento</strong> não é apenas uma canção — é um documento emocional do que vocês viveram para chegar até ali. A
            composição parte da história real do casal: como se conheceram, frases marcantes, lugares, lembranças e a promessa que querem deixar registrada para sempre.
          </p>
          <p className="mt-4">
            Cada <strong>composição para casamento</strong> é única, autoral e entregue em diferentes versões — voz e violão, voz e piano, banda completa ou versão instrumental para a cerimônia.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Momentos que ganham vida em música</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Entrada da noiva e do noivo</li>
            <li>Votos e troca de alianças</li>
            <li>Primeira dança como casal</li>
            <li>Homenagem aos pais e padrinhos</li>
            <li>Saída triunfal e festa</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Como funciona</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Conversa inicial de 30 minutos para entender a história do casal.</li>
            <li>Escrita da letra e construção da melodia, com aprovações intermediárias.</li>
            <li>Gravação em estúdio profissional e entrega em até 7 dias.</li>
          </ol>
        </section>
      </InternalPage>
    </PageShell>
  );
}
