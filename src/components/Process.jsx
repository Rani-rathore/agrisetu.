import Reveal from "./Reveal";

const steps = [
  { num: "01", title: "Farmer lists produce", text: "Crop, quantity, price and harvest date — listed in minutes, visible to verified buyers right away.", img: "https://images.unsplash.com/photo-1668782106868-9d9ac079e38a?w=700&h=500&q=80&auto=format&fit=crop" },
  { num: "02", title: "AI forecasts & plans the route", text: "The platform predicts rising demand and calculates the most efficient pickup and delivery route.", img: "https://picsum.photos/seed/agrisetu-step2v2/700/500" },
  { num: "03", title: "Logistics delivers, optimized", text: "Nearby pickups are grouped together, cutting empty-return trips and getting produce there fresher.", img: "https://picsum.photos/seed/agrisetu-step3v2/700/500" },
  { num: "04", title: "Consumer gets a fair price", text: "No hidden markup layers — the farmer's price plus a transparent, minimal delivery cost.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&h=500&q=80&auto=format&fit=crop" },
];

function ProcessRow({ step, reverse }) {
  return (
    <div className="grid items-center gap-10 py-14 md:grid-cols-2">
      <Reveal variant={reverse ? "right" : "left"} className={reverse ? "md:order-2" : ""}>
        <img
          src={step.img}
          alt={step.title}
          className="h-[320px] w-full rounded-2xl object-cover"
        />
      </Reveal>
      <Reveal variant={reverse ? "left" : "right"} className={reverse ? "md:order-1" : ""}>
        <span className="font-['Space_Grotesk'] text-5xl font-bold text-[#DFE7DB]">{step.num}</span>
        <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-bold md:text-3xl">{step.title}</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#728077]">{step.text}</p>
      </Reveal>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#6B8A72]">How it works</p>
          <h2 className="my-4 font-['Space_Grotesk'] text-4xl font-bold tracking-tight">Four steps, from soil to table.</h2>
        </Reveal>
        {steps.map((s, i) => <ProcessRow key={s.num} step={s} reverse={i % 2 === 1} />)}
      </div>
    </section>
  );
}