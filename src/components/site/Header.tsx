import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import monogram from "@/assets/ll-monogram.png";
import { waLink } from "@/lib/whatsapp";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="glass-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img src={monogram} alt="Lorena LLira" className="h-9 w-9 md:h-9 md:w-9 shrink-0" width={36} height={36} />
          <span className="font-serif text-xl md:text-xl tracking-luxury text-foreground leading-none">
            Lorena <span className="text-primary">LL</span>ira
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] tracking-editorial uppercase font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex btn-primary text-[0.72rem] !py-3 !px-6">
          Falar no WhatsApp
        </a>

        <button
          className="lg:hidden flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute inset-x-0 top-20 glass-header border-t border-foreground/5 px-6 py-8 animate-fade-in">
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base tracking-luxury uppercase font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 self-start">
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
