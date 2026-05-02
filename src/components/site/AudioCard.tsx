import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface Props {
  cover: string;
  title: string;
  occasion: string;
  duration: string;
}

export function AudioCard({ cover, title, occasion, duration }: Props) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (playing) {
      const start = performance.now() - (progress / 100) * 1000 * 30;
      const tick = (t: number) => {
        const p = Math.min(((t - start) / (1000 * 30)) * 100, 100);
        setProgress(p);
        if (p < 100) raf.current = requestAnimationFrame(tick);
        else setPlaying(false);
      };
      raf.current = requestAnimationFrame(tick);
      return () => {
        if (raf.current) cancelAnimationFrame(raf.current);
      };
    }
  }, [playing]);

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:-translate-y-1.5"
      style={{ boxShadow: "0 4px 24px -8px oklch(0.4 0.05 30 / 0.18)" }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={cover}
          alt={title}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="text-[0.65rem] tracking-editorial uppercase text-primary mb-2">{occasion}</div>
            <h3 className="font-serif text-2xl leading-tight">{title}</h3>
          </div>
          <button
            onClick={() => setPlaying(!playing)}
            className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 hover:scale-110"
            aria-label={playing ? "Pausar" : "Tocar"}
          >
            {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground tracking-luxury">
          <span className="font-mono">
            {String(Math.floor((progress / 100) * 30 / 60)).padStart(1, "0")}:
            {String(Math.floor((progress / 100) * 30 % 60)).padStart(2, "0")}
          </span>
          <div className="relative h-px flex-1 bg-foreground/15">
            <div
              className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono">{duration}</span>
        </div>
      </div>
    </article>
  );
}
