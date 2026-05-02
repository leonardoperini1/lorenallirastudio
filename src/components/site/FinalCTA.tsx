import ctaImg from "@/assets/cta-dark-rose.jpg";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20encomendar%20minha%20m%C3%BAsica";

export function FinalCTA() {
  return (
    <section id="contato" className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl grain">
          <img
            src={ctaImg}
            alt="Rosa escura com partitura"
            loading="lazy"
            width={1920}
            height={896}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1110]/90 via-[#1a1110]/70 to-[#1a1110]/40" />

          <div className="relative px-8 py-24 md:px-16 md:py-32 lg:px-24 lg:py-44 max-w-3xl">
            <span className="eyebrow block mb-8 !text-secondary">Sua história, em canção</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1] tracking-[-0.02em] text-[#F4EDE6]">
              Sua história merece uma <em className="italic font-light text-secondary">trilha sonora.</em>
            </h2>
            <p className="mt-8 text-lg lg:text-xl leading-[1.8] text-[#F4EDE6]/80 font-light max-w-xl">
              Vagas limitadas a 12 composições por mês. Reserve a sua agora — uma
              conversa basta para descobrirmos juntos qual canção vive em você.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Falar no WhatsApp
              </a>
              <a
                href="mailto:contato@liricaeletra.com"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#F4EDE6]/30 text-[#F4EDE6] text-[0.78rem] tracking-editorial uppercase font-medium hover:bg-[#F4EDE6] hover:text-foreground transition-all duration-400"
              >
                contato@liricaeletra.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
