import heroRose from "@/assets/hero-rose.jpg";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20composi%C3%A7%C3%A3o%20personalizada";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 overflow-hidden">
      {/* Painted background image, soft */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroRose}
          alt="Rosa pintada feita de partituras musicais"
          className="h-full w-full object-cover opacity-90"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-7rem)]">
        <div className="lg:col-span-7 reveal">
          <span className="eyebrow block mb-8">Atelier de Composição · Desde 2018</span>

          <h1 className="font-serif text-[3.25rem] sm:text-[4.5rem] lg:text-[6.25rem] xl:text-[7rem] leading-[0.98] tracking-[-0.02em] text-foreground">
            Transforme<br />
            <em className="italic font-light text-primary">sentimentos</em><br />
            em música.
          </h1>

          <p className="mt-8 max-w-xl text-lg lg:text-xl leading-[1.7] text-foreground/75 font-light tracking-luxury">
            Composições personalizadas, escritas à mão e gravadas em estúdio para
            eternizar momentos únicos — casamentos, pedidos, aniversários e
            despedidas que merecem uma trilha sonora própria.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Encomendar minha música
            </a>
            <a href="#portfolio" className="btn-ghost">
              Ouvir o portfólio
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-10 lg:gap-14 border-t border-foreground/10 pt-8 max-w-xl">
            {[
              ["+ 380", "composições autorais"],
              ["7 dias", "entrega média"],
              ["100%", "feito à mão"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-foreground">{n}</div>
                <div className="text-xs tracking-editorial uppercase text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5" />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-foreground/50">
        <span className="text-[0.65rem] tracking-editorial uppercase">Role para descobrir</span>
        <span className="block h-10 w-px bg-foreground/30 animate-pulse" />
      </div>
    </section>
  );
}
