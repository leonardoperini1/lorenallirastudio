import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif text-3xl lg:text-4xl text-foreground mt-10 mb-3">{children}</h2>
);

function ComoFunciona() {
  return (
    <>
      <p>
        Uma <strong>música personalizada</strong> nasce de uma escuta. Antes de qualquer acorde, marcamos uma conversa de 30 minutos para entender quem é a pessoa
        homenageada, o que motivou o pedido e qual emoção principal a canção precisa carregar.
      </p>
      <H2>1. Briefing emocional</H2>
      <p>
        Você compartilha histórias, frases marcantes, fotos e referências de estilo. Nada é pequeno demais — uma piada interna pode virar o refrão.
      </p>
      <H2>2. Escrita da letra</H2>
      <p>
        A letra é construída à mão, em rascunhos, e enviada para sua aprovação. Ajustes são bem-vindos — afinal, a história é sua.
      </p>
      <H2>3. Melodia e arranjo</H2>
      <p>
        Com a letra aprovada, escolhemos o estilo (MPB, pop, sertanejo, bossa, instrumental) e construímos a melodia exclusiva.
      </p>
      <H2>4. Estúdio e entrega</H2>
      <p>
        A canção é gravada em estúdio profissional e entregue em até 7 dias, com versões adicionais e a letra impressa como lembrança.
      </p>
      <p>
        Quer ver exemplos? Conheça as <Link to="/composicoes-personalizadas" className="text-primary underline-offset-4 hover:underline">composições personalizadas</Link>.
      </p>
    </>
  );
}

function IdeiasPedido() {
  return (
    <>
      <p>
        O <strong>pedido de casamento</strong> é o primeiro capítulo de uma história a dois. E se esse capítulo tivesse uma trilha sonora exclusiva, escrita só sobre vocês?
      </p>
      <H2>1. Pedido com música ao vivo em casa</H2>
      <p>
        Decoração intimista, jantar caseiro e a canção tocando ao vivo enquanto você se ajoelha. Funciona com qualquer orçamento.
      </p>
      <H2>2. No lugar onde tudo começou</H2>
      <p>
        Volte ao café, à praia, ao mirante onde vocês se conheceram. A música personalizada cita o lugar, e o roteiro se fecha.
      </p>
      <H2>3. Surpresa com família e amigos</H2>
      <p>
        Reúna as pessoas mais próximas em um jantar e revele a canção como se fosse um brinde. Quando o refrão chega, todos entendem.
      </p>
      <H2>4. Viagem com revelação</H2>
      <p>
        Em pôr do sol, varanda do hotel ou passeio de barco — a música toca pelo celular e começa o pedido.
      </p>
      <p>
        Veja como funciona uma <Link to="/pedido-de-casamento" className="text-primary underline-offset-4 hover:underline">música para pedido de casamento</Link>.
      </p>
    </>
  );
}

function EternizarMomentos() {
  return (
    <>
      <p>
        Fotos amarelam. Vídeos somem em pastas esquecidas. A música, quando é sua, atravessa décadas.
      </p>
      <H2>Memória afetiva sonora</H2>
      <p>
        Estudos em neurociência mostram que a memória musical é uma das últimas a se perder. Uma <strong>canção personalizada</strong> torna-se um marcador
        emocional permanente — basta o primeiro acorde para a lembrança voltar inteira.
      </p>
      <H2>Presente que se ouve por décadas</H2>
      <p>
        Diferente de objetos, a música é vivida em loop. Aniversários, bodas, datas — toda repetição traz o instante de volta.
      </p>
      <H2>Herança</H2>
      <p>
        Uma composição autoral pode ser passada para filhos e netos. Ela vira patrimônio afetivo da família.
      </p>
    </>
  );
}

function QuantoCusta() {
  return (
    <>
      <p>
        O investimento em uma <strong>composição personalizada</strong> varia conforme o pacote e o nível de produção desejado. Atualmente trabalhamos com três caminhos.
      </p>
      <H2>Prelúdio — R$ 249</H2>
      <p>
        Canção original personalizada com 1 versão final em áudio. Ideal para presentear de forma íntima.
      </p>
      <H2>Intermezzo — R$ 449</H2>
      <p>
        Canção original com 2 versões (interpretação/arranjo) e playback instrumental. Mais completo para eventos.
      </p>
      <H2>Sonata — a partir de R$ 897</H2>
      <p>
        Experiência completa: canção, 2 versões, playback instrumental e liberação comercial. Recomendado para casamentos e marcas.
      </p>
      <H2>O que está sempre incluso</H2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Briefing de 30 minutos</li>
        <li>Letra autoral</li>
        <li>Melodia exclusiva</li>
        <li>Gravação profissional</li>
        <li>Entrega em até 7 dias</li>
      </ul>
      <p>
        Veja todos os <Link to="/#planos" className="text-primary underline-offset-4 hover:underline">planos completos</Link>.
      </p>
    </>
  );
}

function MusicaCasamento() {
  return (
    <>
      <p>
        A <strong>música personalizada para casamento</strong> é uma das formas mais marcantes de transformar a cerimônia em algo verdadeiramente único.
        Diferente de escolher uma música pronta, uma <strong>canção personalizada</strong> conta a história real do casal — desde o primeiro encontro até o "sim".
      </p>
      <H2>Onde usar a música no casamento</H2>
      <p>
        Entrada da noiva, troca de alianças, primeira dança, valsa com os pais ou homenagem surpresa na recepção. Cada momento pode ter uma versão (vocal, instrumental ou playback).
      </p>
      <H2>Prazo ideal para encomendar</H2>
      <p>
        Recomendamos solicitar a <strong>música para casamento</strong> com no mínimo 4 a 6 semanas de antecedência. Isso garante tempo para briefing, escrita, aprovação da letra, gravação em estúdio e ensaios.
      </p>
      <H2>O que está incluso</H2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Briefing emocional com o casal</li>
        <li>Letra autoral com a história de vocês</li>
        <li>Melodia exclusiva no estilo escolhido</li>
        <li>Gravação profissional em estúdio</li>
        <li>Versões adicionais (instrumental/playback)</li>
      </ul>
      <H2>Quanto custa</H2>
      <p>
        Para casamentos, o pacote mais indicado é o Sonata, a partir de R$ 897, que inclui liberação comercial e múltiplas versões.
      </p>
      <p>
        Saiba mais sobre <Link to="/casamento" className="text-primary underline-offset-4 hover:underline">música para casamento</Link>.
      </p>
    </>
  );
}

export const articleBySlug: Record<string, () => ReactNode> = {
  "como-funciona-uma-musica-personalizada": ComoFunciona,
  "ideias-para-pedido-de-casamento": IdeiasPedido,
  "como-eternizar-momentos-com-musica": EternizarMomentos,
  "quanto-custa-uma-composicao-personalizada": QuantoCusta,
  "musica-personalizada-para-casamento": MusicaCasamento,
};
