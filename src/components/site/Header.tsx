import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import monogram from "@/assets/ll-monogram.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-md border-b border-foreground/5">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center px-6 md:px-10 lg:px-16 relative">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img src={monogram} alt="Lorena LLira" className="h-[4.55rem] w-[4.55rem] shrink-0" width={73} height={73} />
          <span className="font-serif text-xl md:text-xl tracking-luxury text-foreground leading-none">
            Lorena <span className="text-primary">LL</span>ira
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
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

        <button
          className="lg:hidden absolute right-6 md:right-10 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute inset-x-0 top-24 bg-background/98 border-t border-foreground/5 px-6 py-8 animate-fade-in shadow-xl">
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
          </nav>
        </div>
      )}
    </header>
  );
}
