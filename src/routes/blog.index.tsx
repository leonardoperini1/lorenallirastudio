import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog | Lorena Llira — Composições Personalizadas" },
      {
        name: "description",
        content:
          "Artigos sobre música personalizada, composição para casamento, pedidos românticos e como eternizar momentos com canções autorais.",
      },
      { property: "og:title", content: "Blog Lorena Llira" },
      {
        property: "og:description",
        content:
          "Inspirações e respostas sobre composições personalizadas, casamentos, pedidos e homenagens musicais.",
      },
      { property: "og:url", content: "https://lorenallira.com.br/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://lorenallira.com.br/blog" }],
  }),
});

function BlogIndex() {
  return (
    <PageShell>
      <article className="pt-[140px] pb-[100px]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">
          <header className="reveal mb-16 max-w-3xl">
            <span className="eyebrow block mb-6 text-primary/80">Diário do atelier</span>
            <h1 className="font-serif text-5xl lg:text-6xl leading-[1] tracking-[-0.02em]">
              Inspirações para <em className="italic font-light text-primary">eternizar</em> em música
            </h1>
            <p className="mt-8 text-lg leading-[1.7] text-foreground/80 font-light">
              Artigos sobre composição personalizada, casamentos, pedidos e homenagens musicais.
            </p>
          </header>

          <div className="grid gap-8">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="reveal group block rounded-2xl border border-border/60 p-8 lg:p-10 bg-card hover:-translate-y-1 transition-all duration-500 shadow-[0_4px_24px_-12px_oklch(0.4_0.05_30/0.15)]"
              >
                <div className="text-[0.65rem] tracking-editorial uppercase text-muted-foreground mb-3">
                  {new Date(p.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })} · {p.readingTime} de leitura
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="text-foreground/75 leading-relaxed font-light">{p.excerpt}</p>
                <div className="mt-5 text-sm text-primary tracking-wide">Ler artigo →</div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </PageShell>
  );
}
