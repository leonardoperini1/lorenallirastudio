import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import monogram from "@/assets/ll-monogram.png";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#planos", label: "Planos" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-md border-b border-foreground/5">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center px-6 md:px-10 lg:px-16 relative">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img src={monogram} alt="Lorena LLira" className="h-14 w-14 shrink-0" width={56} height={56} />
          <span className="font-serif text-xl md:text-xl tracking-luxury text-foreground leading-none">
            Lorena <span className="text-primary">LL</span>ira
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.78rem] tracking-editorial uppercase font-medium hover:text-primary transition-colors duration-300 ${
                active === l.href ? "text-primary" : "text-foreground/80"
              }`}
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
                className={`text-base tracking-luxury uppercase font-medium ${active === l.href ? "text-primary" : "text-foreground"}`}
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
