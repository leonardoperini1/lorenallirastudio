import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  { name: "Mardielli", text: "Uauuu! Letra e melodia lindíssima poetisa! Ficou divina sua canção! Aplausos! Beijo e feliz noite" },
  { name: "Alice Gomes", text: "Como gosto das coisas que você escreve e as melodias que escolhe para elas! É sempre um descanso na alma vir te visitar." },
  { name: "Alkas", text: "Você tem extraordinária virtude: fazer simbiose perfeita entre poesia e música... coisa de predestinação, dom divino! Salute sempre" },
  { name: "Felipe Felix Falcão", text: "Maravilha plena este poema... Uma canção linda, lírica... Que nos faz viajar... meus parabéns! Luz e paz, sempre." },
  { name: "Brats", text: "Talento e habilidade, você é fantástica. Parabéns Lorena" },
  { name: "Papagua", text: "Os encantos da vida: letra, ritmo e melodia seguindo os versos da linda poesia. Uma voz que acalma, um ritmo que dá asas à imaginação." },
  { name: "Antonio C Almeida", text: "Uma letra bem elaborada, em alguns trechos até enigmática. Lembra Geração Coca Cola. Parabéns, cara letrista." },
  { name: "Nilpoeta", text: "Eu poderia dizer que coisa linda, ou que maravilha, mas seria só repetitivo, então curto em silêncio, pois não acho palavras para definir a profundidade." },
];

const initials = (n: string) => n.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();

function Card({ name, text }: { name: string; text: string }) {
  return (
    <article className="h-full bg-card rounded-2xl p-7 lg:p-8 border border-border/60 shadow-[0_4px_24px_-12px_oklch(0.4_0.05_30/0.15)] flex flex-col">
      <Quote size={22} className="text-primary mb-4 shrink-0" strokeWidth={1.5} />
      <p className="text-[0.95rem] leading-[1.75] text-foreground/85 font-light italic flex-1">"{text}"</p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border/60">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary font-serif text-base">
          {initials(name)}
        </div>
        <div>
          <div className="font-serif text-lg leading-tight">{name}</div>
          <div className="text-[0.65rem] tracking-editorial uppercase text-muted-foreground mt-0.5">Cliente</div>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const isMobile = useIsMobile();
  const groupSize = isMobile ? 1 : 2;
  const gridClass = isMobile ? "grid grid-cols-1 gap-6" : "grid grid-cols-2 gap-6 lg:gap-8";

  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides: typeof testimonials[] = [];
  for (let i = 0; i < testimonials.length; i += groupSize) {
    slides.push(testimonials.slice(i, i + groupSize));
  }

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    embla.on("reInit", () => {
      setSnaps(embla.scrollSnapList());
      onSelect();
    });
    onSelect();
  }, [embla]);

  // Reinit when groupSize changes (mobile <-> desktop)
  useEffect(() => {
    embla?.reInit();
  }, [embla, groupSize]);

  // Auto-transition every 5s, paused on hover
  useEffect(() => {
    if (!embla) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) embla.scrollNext();
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [embla, paused]);

  return (
    <section id="depoimentos" className="relative py-32 lg:py-44 bg-muted/40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="reveal text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="eyebrow block mb-6">Depoimentos</span>
          <h2 className="font-serif text-5xl lg:text-7xl leading-[1] tracking-[-0.015em]">
            O que as pessoas <em className="italic font-light text-primary">sentem</em>
          </h2>
        </div>

        <div
          className="relative reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((group, idx) => (
                <div key={idx} className="shrink-0 grow-0 basis-full px-1">
                  <div className={gridClass}>
                    {group.map((t) => <Card key={t.name} {...t} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button onClick={() => embla?.scrollPrev()} aria-label="Anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-colors">
              <ArrowLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {snaps.map((_, i) => (
                <button key={i} onClick={() => embla?.scrollTo(i)} aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selected ? "w-8 bg-primary" : "w-2 bg-foreground/25 hover:bg-foreground/50"
                  }`} />
              ))}
            </div>
            <button onClick={() => embla?.scrollNext()} aria-label="Próximo"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
