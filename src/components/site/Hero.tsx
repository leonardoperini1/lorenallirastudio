import heroRose from "@/assets/hero-rose.jpg";
import { waLink } from "@/lib/whatsapp";

const WA = waLink();

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[110vh] lg:min-h-screen pt-[124px] lg:pt-[100px] pb-[100px] overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroRose}
          alt="Rosa pintada feita de partituras musicais — composição personalizada Lorena Llira"
          className="wind-bg h-full w-full object-cover opacity-90"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
        />
        {/* Camadas de gradiente para melhorar contraste geral */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 xl:col-span-7 reveal">
            <span className="eyebrow block mb-6 text-primary/80 font-medium tracking-[0.2em]">Atelier de Composição · Desde 2018</span>

            <h1 className="font-serif text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] tracking-[-0.02em] text-foreground">
              Transforme<br />
              <em className="italic font-light text-primary">sentimentos</em><br />
              em música
            </h1>

            {/* Ajuste de legibilidade: font-medium e drop-shadow suave */}
            <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-[1.6] text-foreground font-normal tracking-wide"
               style={{ 
                 textShadow: '0px 2px 4px rgba(255, 255, 255, 0.5), 0px 0px 20px rgba(255, 255, 255, 0.3)' 
               }}>
              Composições 100% humana e personalizadas, escrita a mão e em todos os gêneros musicais
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary px-10">
                Encomendar minha música
              </a>
              <a href="#portfolio" className="btn-ghost border-foreground/20">
                Ouvir o portfólio
              </a>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-4 border-t border-foreground/10 pt-10 max-w-2xl">
              {[
                ["+ 380", "Composições autorais"],
                ["7 dias", "Entrega média"],
                ["100%", "Original"],
              ].map(([n, l]) => (
                <div key={l} className="flex flex-col gap-1">
                  <div className="font-serif text-2xl sm:text-3xl xl:text-4xl text-foreground whitespace-nowrap">{n}</div>
                  <div className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground/80 leading-tight max-w-[80px] sm:max-w-none">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
        </div>
      </div>
    </section>
  );
}
