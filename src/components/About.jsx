import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-[#F4F6EF] px-6 py-24 md:px-10">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div className="relative h-[420px]">
          {/* TODO: replace both with real photos */}
          <img
            src="https://images.unsplash.com/photo-1668782106868-9d9ac079e38a?w=560&h=680&q=80&auto=format&fit=crop"
            alt="Farmer harvesting produce"
            className="absolute left-0 top-0 h-[340px] w-[65%] rounded-2xl object-cover shadow-xl"
          />
          <img
            src="https://images.unsplash.com/photo-1632776350300-11016768b521?w=420&h=420&q=80&auto=format&fit=crop"
            alt="Fresh vegetable crates"
            className="absolute bottom-0 right-0 h-[220px] w-[55%] rounded-2xl border-4 border-[#F4F6EF] object-cover shadow-xl"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#6B8A72]">About AgriSetu</p>
          <h2 className="my-4 font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            A direct line between the farm and your table.
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-[#728077]">
            Multiple intermediaries sit between farmers and consumers today — each one shaving off the farmer's
            earnings and adding to the final price. AgriSetu removes the unnecessary layers, using AI to match
            supply with demand and plan efficient delivery routes.
          </p>
          <ul className="mt-6 space-y-3">
            {["Direct farmer-to-buyer marketplace", "AI demand forecasting & route planning", "End-to-end logistics support"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#B8EF73] text-xs text-[#153F2C]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#process" className="mt-8 inline-block rounded-full bg-[#153F2C] px-7 py-3.5 text-sm font-bold text-white">
            Learn more ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}