import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* TODO: replace with a real harvest/crates photo */}
      <img
        src="https://images.unsplash.com/photo-1632776350300-11016768b521?w=1920&h=800&q=80&auto=format&fit=crop"
        alt="Fresh harvest crates"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <Reveal className="relative z-10 mx-auto max-w-2xl px-6 text-center text-white">
        <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight md:text-5xl">
          Ready to grow with AgriSetu?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/80">
          Join as a farmer, a buyer, or a logistics partner — and be part of a fairer supply chain.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-[#B8EF73] px-7 py-3.5 text-sm font-bold text-[#153F2C]">Get started ↗</button>
          <button className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white">Contact us</button>
        </div>
      </Reveal>
    </section>
  );
}