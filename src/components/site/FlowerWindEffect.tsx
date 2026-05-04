import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import heroRose from "@/assets/hero-rose.jpg";

const MAX_OFFSET = 25;

export function FlowerWindEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Camada 1 — Vento idle
  const windY = useMotionValue(0);
  const windRotate = useMotionValue(0);

  // Camada 2 — Mouse (raw → spring)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseSpringX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const mouseSpringY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Composição: cada eixo soma sua(s) fonte(s) — não se anulam
  const x = useTransform(mouseSpringX, (mx) => mx);
  const y = useTransform([windY, mouseSpringY], ([w, m]: number[]) => w + m);
  const rotate = windRotate;

  // Camada 1 — vento idle
  useEffect(() => {
    if (reduceMotion) return;
    const cY = animate(windY, [-5, 5, -5], {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    });
    const cR = animate(windRotate, [-1, 1, -1], {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return () => {
      cY.stop();
      cR.stop();
    };
  }, [reduceMotion, windY, windRotate]);

  // Camada 2 — mouse tracking (viewport-wide). Pula em touch / reduced motion.
  useEffect(() => {
    if (reduceMotion) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // Repulsão: vetor do cursor → centro, deslocando o elemento na direção oposta
      const dx = cx - e.clientX;
      const dy = cy - e.clientY;

      const diag = Math.hypot(window.innerWidth, window.innerHeight);
      const nx = (dx / diag) * MAX_OFFSET * 4;
      const ny = (dy / diag) * MAX_OFFSET * 4;

      const clamp = (v: number) =>
        Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, v));

      mouseX.set(clamp(nx));
      mouseY.set(clamp(ny));
    };

    const handleLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [reduceMotion, mouseX, mouseY]);

  if (reduceMotion) {
    return (
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        <img
          src={heroRose}
          alt="Rosa pintada feita de partituras musicais"
          className="w-full h-full object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
    >
      <motion.img
        src={heroRose}
        alt="Rosa pintada feita de partituras musicais"
        style={{ x, y, rotate }}
        className="w-full h-full object-contain select-none pointer-events-none"
        draggable={false}
      />
    </div>
  );
}
