import monogram from "@/assets/ll-monogram.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={monogram} alt="" className="h-9 w-9" width={36} height={36} />
              <span className="font-serif text-xl tracking-luxury">
                Lírica <span className="text-primary">&</span> Letra
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-xs">
              Atelier de composições autorais para momentos que merecem ser eternizados em música.
            </p>
          </div>

          <div>
            <div className="text-[0.65rem] tracking-editorial uppercase text-primary mb-4">Navegação</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como funciona</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.65rem] tracking-editorial uppercase text-primary mb-4">Atelier</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>Rua das Pétalas, 142 — Pinheiros</li>
              <li>São Paulo · SP</li>
              <li>contato@liricaeletra.com</li>
              <li>Seg–Sex · 10h às 19h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-muted-foreground tracking-luxury">
          <span>© 2026 Lírica & Letra. Todas as composições registradas.</span>
          <span className="italic font-serif text-base">"A música é o que os sentimentos soam quando ousam falar."</span>
        </div>
      </div>
    </footer>
  );
}
