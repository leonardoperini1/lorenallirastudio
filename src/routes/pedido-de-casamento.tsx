import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { InternalPage } from "@/components/site/InternalPage";

export const Route = createFileRoute("/pedido-de-casamento")({
  component: PedidoPage,
  head: () => ({
    meta: [
      { title: "Música para Pedido de Casamento Personalizada | Lorena Llira" },
      {
        name: "description",
        content:
          "Música para pedido de casamento composta sob medida. Surpreenda com uma canção autoral que conta toda a história de vocês.",
      },
      {
        name: "keywords",
        content:
          "música para pedido de casamento, pedido de casamento musical, música personalizada pedido, canção romântica personalizada",
      },
      { property: "og:title", content: "Música para Pedido de Casamento Personalizada" },
      {
        property: "og:description",
        content:
          "Faça o pedido de casamento mais inesquecível com uma composição autoral feita só para vocês.",
      },
      { property: "og:url", content: "https://lorenallira.com.br/pedido-de-casamento" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lorenallira.com.br/pedido-de-casamento" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "https://lorenallira.com.br/" },
            { "@type": "ListItem", position: 2, name: "Pedido de Casamento", item: "https://lorenallira.com.br/pedido-de-casamento" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Música para pedido de casamento",
          provider: { "@type": "Organization", name: "Lorena Llira", url: "https://lorenallira.com.br/" },
          areaServed: { "@type": "Country", name: "Brasil" },
          url: "https://lorenallira.com.br/pedido-de-casamento",
        }),
      },
    ],
  }),
});

function PedidoPage() {
  return (
    <PageShell>
      <InternalPage
        eyebrow="Pedido de casamento"
        h1="Música para pedido de casamento composta sob medida"
        intro="Um pedido de casamento que ninguém esquece começa com uma trilha sonora que ninguém mais tem. Composições autorais e românticas, feitas para o instante exato do 'sim'."
        ctaMessage="Olá Lorena! Gostaria de uma música personalizada para o meu pedido de casamento."
      >
        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            Uma <em className="italic font-light text-primary">canção exclusiva</em> para o momento mais importante
          </h2>
          <p>
            A <strong>música para pedido de casamento</strong> é mais do que romântica — ela é narrativa. Conta a primeira mensagem, a primeira viagem, a piada interna, o medo
            que virou certeza. Tudo em uma <strong>composição romântica</strong> escrita à mão, gravada em estúdio e entregue pronta para emocionar.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">O que está incluso</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Letra autoral baseada na história do casal</li>
            <li>Melodia exclusiva no estilo escolhido</li>
            <li>Gravação profissional em estúdio</li>
            <li>Versões adicionais (playback, acústico)</li>
            <li>Letra impressa em formato de carta como lembrança</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Prazo</h2>
          <p>
            A entrega média é de <strong>7 dias</strong>. Para datas próximas, é possível adiantar a produção mediante consulta.
          </p>
        </section>
      </InternalPage>
    </PageShell>
  );
}
