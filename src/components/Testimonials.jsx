import Reveal from "./Reveal";

const quotes = [
  { text: "I used to sell through three agents before this reached the mandi. Now buyers order directly and I keep more of what I earn.", name: "Ramesh Patil", role: "Nashik FPO" },
  { text: "The route planning cut our empty-return trips almost in half. Deliveries are faster and fresher.", name: "Suresh Yadav", role: "Logistics Partner" },
  { text: "Prices are transparent and produce arrives the same day it's picked. It's a different experience entirely.", name: "Pune Retail Cluster", role: "Bulk Buyer" },
];

export default function Testimonials() {
  return (
    <section id="stories" className="bg-[#F4F6EF] px-6 py-24 md:px-10">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="text-xs font-bold uppercase tracking-[2px] text-[#6B8A72]">Stories from the network</p>
        <h2 className="my-4 font-['Space_Grotesk'] text-4xl font-bold tracking-tight">What people are saying.</h2>
      </Reveal>
      <Reveal className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {quotes.map((q) => (
          <div key={q.name} className="rounded-2xl border border-[#DFE7DB] bg-white p-7">
            <p className="text-sm leading-relaxed">"{q.text}"</p>
            <div className="mt-5 text-sm font-bold">{q.name}</div>
            <div className="text-xs text-[#728077]">{q.role}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}