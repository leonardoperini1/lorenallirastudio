import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { InternalPage } from "@/components/site/InternalPage";

export const Route = createFileRoute("/composicoes-personalizadas")({
  component: ComposicoesPage,
  head: () => ({
    meta: [
      { title: "Composições Personalizadas | Música Sob Encomenda | Lorena Llira" },
      {
        name: "description",
        content:
          "Composições personalizadas e música sob encomenda em todos os gêneros. Letras autorais, melodia exclusiva e gravação em estúdio profissional.",
      },
      {
        name: "keywords",
        content:
          "composição personalizada, música sob encomenda, canção personalizada, composição exclusiva, música autoral, trilha sonora personalizada",
      },
      { property: "og:title", content: "Composições Personalizadas | Música Sob Encomenda" },
      {
        property: "og:description",
        content:
          "Atelier de composições autorais sob encomenda — qualquer estilo, qualquer ocasião, sempre exclusivo.",
      },
      { property: "og:url", content: "https://lorenallira.com.br/composicoes-personalizadas" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lorenallira.com.br/composicoes-personalizadas" }],
  }),
});

function ComposicoesPage() {
  return (
    <PageShell>
      <InternalPage
        eyebrow="Composições personalizadas"
        h1="Composições personalizadas e música sob encomenda"
        intro="Um atelier de composições autorais para quem quer transformar uma história real em música. Qualquer estilo, qualquer idioma, sempre exclusivo."
        ctaMessage="Olá Lorena! Gostaria de encomendar uma composição personalizada."
      >
        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            O que é uma <em className="italic font-light text-primary">composição personalizada</em>
          </h2>
          <p>
            Uma <strong>composição personalizada</strong> é uma canção criada exclusivamente para uma pessoa, um casal, uma família ou uma marca. Letra, melodia,
            arranjo e interpretação são pensados a partir da história real do cliente — nada é genérico, nada é reciclado.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Estilos disponíveis</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>MPB, pop, sertanejo, samba, bossa nova</li>
            <li>Forró, gospel, infantil, lo-fi, indie</li>
            <li>Trilhas instrumentais (piano, violão, orquestral)</li>
            <li>Versões em português, inglês e espanhol</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Para quem é</h2>
          <p>
            Casais, famílias, empresas, eventos, campanhas e qualquer pessoa que queira presentear de uma forma que nunca poderá ser replicada. Toda
            <strong> trilha sonora personalizada</strong> nasce de uma escuta atenta — e termina em estúdio, pronta para emocionar.
          </p>
        </section>
      </InternalPage>
    </PageShell>
  );
}
