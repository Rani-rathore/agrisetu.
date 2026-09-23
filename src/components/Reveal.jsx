import useReveal from "../hooks/useReveal";

const variantClass = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  stagger: "stagger",
};

export default function Reveal({ children, className = "", variant = "up" }) {
  const [ref, inView] = useReveal();
  const base = variantClass[variant] || "reveal-up";

  return (
    <div ref={ref} className={`${base} ${inView ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}