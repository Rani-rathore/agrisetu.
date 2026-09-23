export default function Footer() {
  return (
    <footer className="bg-[#153F2C] px-6 py-14 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-10">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 font-['Space_Grotesk'] text-xl font-bold">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#B8EF73] text-lg text-[#153F2C]">↗</div>
            Agri<em className="not-italic text-[#B8EF73]">Setu</em>
          </div>
          <p className="mt-4 text-sm text-white/60">
            A direct farm-to-consumer marketplace — built for Smart India Hackathon 2026, PS 26033.
          </p>
        </div>
        <div className="flex gap-16 text-sm">
          <div>
            <p className="mb-3 font-bold text-white/80">Explore</p>
            <ul className="space-y-2 text-white/60">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#process" className="hover:text-white">How it works</a></li>
              <li><a href="#impact" className="hover:text-white">Impact</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-bold text-white/80">Contact</p>
            <ul className="space-y-2 text-white/60">
              <li>Ministry of Consumer Affairs</li>
              <li>contact@agrisetu.in</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
        © 2026 AgriSetu — Smart India Hackathon Prototype
      </div>
    </footer>
  );
}
