import { useRef, useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";

interface Props {
  id: string;
  cover: string;
  posterFallback?: string;
  title: string;
  occasion: string;
  src?: string;
  isPlaying: boolean;
  onPlay: (id: string) => void;
  onPause: (id: string) => void;
}

function getMediaType(cover: string): "video" | "gif" | "image" {
  const lower = cover.toLowerCase();
  if (lower.endsWith(".mp4") || lower.includes(".mp4")) return "video";
  if (lower.endsWith(".gif") || lower.includes(".gif")) return "gif";
  return "image";
}

export function AudioCard({ id, cover, posterFallback, title, occasion, src, isPlaying, onPlay, onPause }: Props) {
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const mediaType = getMediaType(cover);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      setCurrent(a.currentTime);
      setDuration(a.duration || 0);
      setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    };
    const onEnd = () => {
      onPause(id);
      setProgress(0);
      setCurrent(0);
    };
    const onMeta = () => setDuration(a.duration || 0);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnd);
    a.addEventListener("loadedmetadata", onMeta);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("ended", onEnd);
      a.removeEventListener("loadedmetadata", onMeta);
    };
  }, [id, onPause]);

  useEffect(() => {
    const a = audioRef.current;
    const v = videoRef.current;
    if (isPlaying) {
      if (a) {
        a.play().catch(() => {});
      }
      if (v) {
        v.play().catch(() => {});
      }
    } else {
      if (a) a.pause();
      if (v) v.pause();
    }
  }, [isPlaying]);

  const toggle = () => {
    if (isPlaying) onPause(id);
    else onPlay(id);
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${String(r).padStart(2, "0")}`;
  };

  const poster = posterFallback;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:-translate-y-1.5 h-full"
      style={{ boxShadow: "0 4px 24px -8px oklch(0.4 0.05 30 / 0.18)" }}
    >
      {src && <audio ref={audioRef} src={src} preload="auto" loop />}

      <div className="relative aspect-square overflow-hidden bg-muted">
        {mediaType === "video" && (
          <video
            ref={videoRef}
            src={cover}
            poster={poster}
            muted
            playsInline
            preload="auto"
            loop
            className="h-full w-full object-cover"
          />
        )}

        {mediaType === "gif" && (
          <img
            src={isPlaying ? cover : (poster || cover)}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {mediaType === "image" && (
          <img
            src={cover}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        )}
      </div>

      <div className="p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="text-[0.65rem] tracking-editorial uppercase text-primary mb-2">{occasion}</div>
            <h3 className="font-serif text-2xl leading-tight">{title}</h3>
          </div>
          <button
            onClick={toggle}
            className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 hover:scale-110"
            aria-label={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground tracking-luxury">
          <span className="font-mono">{fmt(current)}</span>
          <div className="relative h-px flex-1 bg-foreground/15">
            <div
              className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono">{fmt(duration)}</span>
        </div>
      </div>
    </article>
  );
}
