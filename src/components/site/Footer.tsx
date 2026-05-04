import monogram from "@/assets/ll-monogram.png";
import { waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-[100px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={monogram} alt="" className="h-9 w-9" width={36} height={36} />
              <span className="font-serif text-xl tracking-luxury">
                Lorena <span className="text-primary">LL</span>ira
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
            </ul>
          </div>

          <div>
            <div className="text-[0.65rem] tracking-editorial uppercase text-primary mb-4">Contato</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: (19) 98283-1700
                </a>
              </li>
              <li>
                <a
                  href="mailto:personalizesuatrilha@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  personalizesuatrilha@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 pt-8 text-xs text-muted-foreground tracking-luxury">
          <span>© 2026 Lorena LLira. Copyright — direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
