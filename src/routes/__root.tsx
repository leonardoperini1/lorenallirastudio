import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1a1110" },
      { name: "format-detection", content: "telephone=no" },
      { title: "Lorena Llira | Composições Personalizadas para Casamentos e Momentos Especiais" },
      { name: "description", content: "Composições musicais personalizadas para casamentos, pedidos, aniversários e momentos especiais. Transforme sentimentos em música com Lorena Llira." },
      { name: "author", content: "Lorena Llira" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:site_name", content: "Lorena Llira" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Lorena Llira | Composições Personalizadas" },
      { property: "og:description", content: "Composições musicais personalizadas para casamentos, pedidos, aniversários e momentos especiais." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/FdBulxO635fJPd4kCfFa4SGQn3G3/social-images/social-1777749408800-WhatsApp_Image_2026-05-02_at_12.26.08.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lorena Llira | Composições Personalizadas" },
      { name: "twitter:description", content: "Transforme sentimentos em música." },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/FdBulxO635fJPd4kCfFa4SGQn3G3/social-images/social-1777749408800-WhatsApp_Image_2026-05-02_at_12.26.08.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://wa.me" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lorena Llira",
          url: "https://lorenallira.com.br/",
          logo: "https://lorenallira.com.br/favicon.png",
          description: "Atelier de composições musicais personalizadas para casamentos, pedidos, aniversários e momentos especiais.",
          sameAs: ["https://www.instagram.com/lorenallira/"],
          contactPoint: [{
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Portuguese"],
            areaServed: "BR",
          }],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Lorena Llira",
          url: "https://lorenallira.com.br/",
          inLanguage: "pt-BR",
          publisher: { "@type": "Organization", name: "Lorena Llira" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Lorena Llira — Composições Personalizadas",
          url: "https://lorenallira.com.br/",
          image: "https://lorenallira.com.br/favicon.png",
          description: "Atelier de composições musicais personalizadas sob encomenda.",
          priceRange: "R$ 249 - R$ 897+",
          areaServed: { "@type": "Country", name: "Brasil" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
