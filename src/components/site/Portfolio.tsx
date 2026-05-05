import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import heroRose from "@/assets/hero-rose.jpg";
import { AudioCard } from "./AudioCard";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.mp4";
import p2poster from "@/assets/portfolio-2-poster.jpg";
import p3 from "@/assets/portfolio-3.gif";
import p3poster from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const tracks = [
  { id: "eu-te-vi", cover: p3, posterFallback: p3poster, title: "Eu te vi", occasion: "Dia das mães", src: "/audio/eu-te-vi.mp3" },
  { id: "ll-vereadora", cover: p1, title: "LL para vereadora", occasion: "Jingle", src: "/audio/ll-para-vereadora.mp3" },
  { id: "e-um-menino", cover: p5, title: "É um menino!", occasion: "Chá revelação", src: "/audio/e-um-menino.mp3" },
  { id: "rafaella", cover: p4, title: "Rafaella", occasion: "Debutante", src: "/audio/rafaella.mp3" },
  { id: "por-voce", cover: p6, title: "Por você", occasion: "Poesia musicada", src: "/audio/por-voce.mp3" },
  { id: "casamento", cover: p2, posterFallback: p2poster, title: "Casamento dos sonhos", occasion: "Casamento", src: "/audio/casamento-dos-sonhos.mp3" },
];

export function Portfolio() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const userInteractedRef = useRef(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Build embla state
  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    embla.on("reInit", () => setSnaps(embla.scrollSnapList()));
    onSelect();
  }, [embla]);

  // Auto-advance every 6s while no audio has been played
  useEffect(() => {
    if (!embla) return;
    const start = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        if (!userInteractedRef.current) embla.scrollNext();
      }, 6000);
    };
    start();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [embla]);

  // When slide changes, pause any currently playing track.
  // The next track stays paused (Play button visible) until the user explicitly plays it.
  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      if (!userInteractedRef.current) return;
      setPlayingId(null);
    };
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const handlePlay = (id: string) => {
    userInteractedRef.current = true;
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    setPlayingId(id);
    // also align slide to the played track
    const idx = tracks.findIndex((t) => t.id === id);
    if (idx >= 0 && embla && embla.selectedScrollSnap() !== idx) {
      embla.scrollTo(idx);
    }
  };

  const handlePause = (id: string) => {
    setPlayingId((cur) => (cur === id ? null : cur));
  };

  return (
    <section id="portfolio" className="relative py-[100px] overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.18] pointer-events-none">
        <img src={heroRose} alt="" className="wind-bg h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="reveal grid lg:grid-cols-12 gap-10 mb-20 lg:mb-28">
          <div className="lg:col-span-5">
            <span className="eyebrow block mb-6">Portfólio</span>
            <h2 className="font-serif text-5xl lg:text-7xl leading-[1] tracking-[-0.015em]">
              Histórias que <em className="italic font-light text-primary">soam</em> como sentem
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <p className="text-lg leading-[1.8] text-foreground/75 font-light">
              Cada peça nasce de uma conversa, segue por um caderno de rascunhos e
              termina em uma música acompanhada de um sorriso. Inspire-se
            </p>
          </div>
        </div>

        <div className="relative reveal">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6 lg:-ml-8">
              {tracks.map((t) => (
                <div
                  key={t.id}
                  className="pl-6 lg:pl-8 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <AudioCard
                    {...t}
                    isPlaying={playingId === t.id}
                    onPlay={handlePlay}
                    onPause={handlePause}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() => embla?.scrollPrev()}
              aria-label="Anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => embla?.scrollTo(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selected ? "w-8 bg-primary" : "w-2 bg-foreground/25 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => embla?.scrollNext()}
              aria-label="Próximo"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
