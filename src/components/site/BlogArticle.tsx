import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";
import type { BlogPost } from "@/lib/blog";

export function BlogArticle({ post, children }: { post: BlogPost; children: ReactNode }) {
  return (
    <article className="pt-[140px] pb-[100px]">
      <div className="mx-auto max-w-[760px] px-6 md:px-10 lg:px-0">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          ← Voltar para o blog
        </Link>

        <header className="reveal mt-8 mb-12">
          <div className="text-[0.65rem] tracking-editorial uppercase text-muted-foreground mb-4">
            {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })} · {post.readingTime} de leitura
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em]">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-[1.7] text-foreground/75 font-light">{post.excerpt}</p>
        </header>

        <div className="prose-content space-y-6 text-foreground/85 leading-[1.8] font-light text-base lg:text-lg">
          {children}
        </div>

        <aside className="mt-16 rounded-2xl border border-border/60 bg-card p-8 lg:p-10">
          <h2 className="font-serif text-2xl lg:text-3xl mb-3">
            Pronta para a sua <em className="italic font-light text-primary">composição</em>?
          </h2>
          <p className="text-foreground/70 mb-6">
            Conte sua história em uma conversa de 30 minutos. Composição autoral, gravada em estúdio, entregue em até 7 dias.
          </p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Encomendar minha música
          </a>
        </aside>
      </div>
    </article>
  );
}
