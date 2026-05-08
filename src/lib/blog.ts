export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  excerpt: string;
}

export const posts: BlogPost[] = [
  {
    slug: "como-funciona-uma-musica-personalizada",
    title: "Como funciona uma música personalizada",
    description:
      "Entenda passo a passo como nasce uma composição autoral sob medida — da conversa inicial à entrega em estúdio.",
    date: "2026-04-12",
    readingTime: "5 min",
    excerpt:
      "Uma música personalizada começa muito antes da primeira nota: começa em uma escuta. Veja como funciona o processo de composição autoral.",
  },
  {
    slug: "ideias-para-pedido-de-casamento",
    title: "Ideias para pedido de casamento inesquecíveis",
    description:
      "Inspirações criativas e emocionantes para quem quer fazer um pedido de casamento com música personalizada.",
    date: "2026-04-20",
    readingTime: "6 min",
    excerpt:
      "O pedido de casamento é o primeiro capítulo de uma história a dois. Veja ideias e como uma canção exclusiva pode tornar o momento eterno.",
  },
  {
    slug: "como-eternizar-momentos-com-musica",
    title: "Como eternizar momentos com música",
    description:
      "Por que a música é o presente mais duradouro e como uma composição autoral preserva memórias para sempre.",
    date: "2026-04-28",
    readingTime: "4 min",
    excerpt:
      "Fotos envelhecem, vídeos se perdem em pastas. A música atravessa décadas. Entenda como uma composição autoral preserva a memória de um momento.",
  },
  {
    slug: "quanto-custa-uma-composicao-personalizada",
    title: "Quanto custa uma composição personalizada",
    description:
      "Entenda os fatores que influenciam o investimento em uma música personalizada e os pacotes disponíveis.",
    date: "2026-05-02",
    readingTime: "5 min",
    excerpt:
      "Quanto custa uma composição personalizada? Veja o que está incluso, os pacotes disponíveis e como escolher o melhor para o seu momento.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
