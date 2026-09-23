import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";
import Reveal from "./Reveal";

function Counter({ target, suffix = "", duration = 1500 }) {
  const [value, setValue] = useState(0);
  const [ref, visible] = useReveal(0.5);

  useEffect(() => {
    if (!visible) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-['Space_Grotesk'] text-5xl font-bold text-white md:text-6xl">{value}{suffix}</div>
    </div>
  );
}

const stats = [
  { target: 28, suffix: "%", label: "Better farmer earnings" },
  { target: 17, suffix: "%", label: "Lower consumer prices" },
  { target: 146, suffix: "", label: "FPOs onboarded" },
  { target: 1284, suffix: "", label: "Weekly deliveries" },
];

export default function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden py-28">
      {/* TODO: replace with a real aerial/farmland photo */}
      <img
        src="https://images.unsplash.com/photo-1765260905999-06612390fb07?w=1920&q=80&auto=format&fit=crop"
        alt="Aerial view of farmland"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#153F2C]/85" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#B8EF73]">Real impact</p>
          <h2 className="my-4 font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-white">
            Numbers that matter, on both sides.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}