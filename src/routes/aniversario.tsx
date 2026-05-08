import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { InternalPage } from "@/components/site/InternalPage";

export const Route = createFileRoute("/aniversario")({
  component: AniversarioPage,
  head: () => ({
    meta: [
      { title: "Música Personalizada para Aniversário | Lorena Llira" },
      {
        name: "description",
        content:
          "Homenagens musicais para aniversários, debutantes, bodas e datas especiais. Uma composição exclusiva no lugar do tradicional 'parabéns'.",
      },
      {
        name: "keywords",
        content:
          "música personalizada para aniversário, homenagem musical, música para debutante, música para bodas, composição exclusiva",
      },
      { property: "og:title", content: "Música Personalizada para Aniversário" },
      {
        property: "og:description",
        content:
          "Homenagens musicais autorais para aniversários e datas especiais. Eternize quem você ama em uma canção.",
      },
      { property: "og:url", content: "https://lorenallira.com.br/aniversario" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lorenallira.com.br/aniversario" }],
  }),
});

function AniversarioPage() {
  return (
    <PageShell>
      <InternalPage
        eyebrow="Aniversário & datas especiais"
        h1="Música personalizada para aniversário e homenagens"
        intro="Uma homenagem musical autoral no lugar do tradicional 'parabéns'. Composições exclusivas para aniversários, debutantes, bodas e momentos que merecem ser eternizados."
        ctaMessage="Olá Lorena! Gostaria de uma homenagem musical personalizada para um aniversário."
      >
        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            Uma <em className="italic font-light text-primary">homenagem</em> que ninguém vai esquecer
          </h2>
          <p>
            Receber uma <strong>música personalizada</strong> de aniversário é entender, em poucos minutos, que alguém parou para olhar a sua história inteira. A canção
            costura memórias de família, conquistas e o que essa pessoa representa para quem encomendou.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Ocasiões mais pedidas</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Aniversários de 15, 30, 50, 60, 70 e 80 anos</li>
            <li>Debutantes e festas de formatura</li>
            <li>Bodas de casamento (prata, ouro, diamante)</li>
            <li>Homenagem aos pais, avós e filhos</li>
            <li>Despedidas profissionais e aposentadoria</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Entrega</h2>
          <p>
            Você recebe a canção em áudio profissional, com opção de playback e a letra impressa como lembrança física — perfeita para presentear emoldurada.
          </p>
        </section>
      </InternalPage>
    </PageShell>
  );
}
