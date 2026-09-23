import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [["#about", "About"], ["#process", "How it works"], ["#impact", "Impact"], ["#stories", "Stories"]];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#F4F6EF]/95 py-3 shadow-sm backdrop-blur" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <div
          className={`flex items-center gap-2 font-['Space_Grotesk'] text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-[#10251C]" : "text-white"
          }`}
        >
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#B8EF73] text-lg text-[#153F2C]">↗</div>
          Agri<em className="not-italic text-[#B8EF73]">Setu</em>
        </div>
        <nav className={`hidden gap-8 text-sm font-medium md:flex ${scrolled ? "text-[#10251C]" : "text-white"}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:opacity-70">{label}</a>
          ))}
        </nav>
        <button className="rounded-full bg-[#B8EF73] px-5 py-2.5 text-sm font-bold text-[#153F2C]">
          Enter Marketplace ↗
        </button>
      </div>
    </header>
  );
}