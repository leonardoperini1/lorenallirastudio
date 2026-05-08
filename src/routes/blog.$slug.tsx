import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticle } from "@/components/site/BlogArticle";
import { getPost } from "@/lib/blog";
import { articleBySlug } from "@/lib/blog-content";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Artigo não encontrado" }] };
    const url = `https://lorenallira.com.br/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} | Lorena Llira` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Person", name: "Lorena Llira" },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="pt-[160px] pb-[100px] text-center">
        <h1 className="font-serif text-5xl mb-4">Artigo não encontrado</h1>
      </div>
    </PageShell>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const Article = articleBySlug[post.slug];
  return (
    <PageShell>
      <BlogArticle post={post}>{Article ? <Article /> : null}</BlogArticle>
    </PageShell>
  );
}
