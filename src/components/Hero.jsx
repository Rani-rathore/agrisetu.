import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
      {/* TODO: replace with a real farmland/sunrise photo */}
      <img
        src="https://images.unsplash.com/photo-1633931157030-ae1824d72931?w=1920&q=80&auto=format&fit=crop"
        alt="Farmland at sunrise"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />
      <div className="relative z-10 max-w-3xl px-6 text-center text-white">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#B8EF73]">
            Smart India Hackathon 2026 · PS 26033
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-['Space_Grotesk'] text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Organic produce,<br />straight from the farm.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            AgriSetu connects farmers and FPOs directly with consumers and bulk buyers — AI plans the logistics
            in between, and no middlemen take a cut.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="#process" className="rounded-full bg-[#B8EF73] px-7 py-3.5 text-sm font-bold text-[#153F2C]">
              Explore how it works ↗
            </a>
            <a href="#stories" className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white">
              See stories
            </a>
          </div>
        </Reveal>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-2xl text-white/70">↓</a>
    </section>
  );
}