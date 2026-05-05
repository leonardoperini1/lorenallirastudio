import ctaImg from "@/assets/cta-dark-rose.jpg";
import { waLink } from "@/lib/whatsapp";

const WA = waLink();

export function FinalCTA() {
  return (
    <section id="contato" className="relative isolate py-[100px] overflow-hidden">
      {/* Full-bleed immersive background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={ctaImg}
          alt="Rosa escura com partitura"
          loading="lazy"
          className="wind-bg h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1110]/95 via-[#1a1110]/70 to-[#1a1110]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1110]/40 via-transparent to-[#1a1110]/60" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl py-12 md:py-20 lg:py-24">
          <span className="eyebrow block mb-8 !text-secondary">Sua história, em canção</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1] tracking-[-0.02em] text-[#F4EDE6]">
            Sua história merece uma <em className="italic font-light text-secondary">trilha sonora</em>
          </h2>
          <p className="mt-8 text-lg lg:text-xl leading-[1.8] text-[#F4EDE6]/80 font-light max-w-xl">
            Vagas limitadas a 12 composições por mês 
            Uma conversa basta começar sua música
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Reservar música
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
