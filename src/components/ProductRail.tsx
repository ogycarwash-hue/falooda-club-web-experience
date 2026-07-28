import hero from "@/assets/hero-falooda.jpg";
import milkshake from "@/assets/milkshake.jpg";
import lassi from "@/assets/lassi.jpg";
import sundae from "@/assets/sundae.jpg";
import mojito from "@/assets/mojito.jpg";
import fruit from "@/assets/fruit-salad.jpg";

const RAIL = [
  { image: hero, name: "Strawberry Falooda", price: "15" },
  { image: milkshake, name: "Nutella Crush", price: "18" },
  { image: lassi, name: "Mango Lassi", price: "10" },
  { image: sundae, name: "Chocolate Sundae", price: "18" },
  { image: mojito, name: "Watermelon Mojito", price: "12" },
  { image: fruit, name: "Fruit Salad", price: "15" },
];

function Card({ item }: { item: (typeof RAIL)[number] }) {
  return (
    <figure className="group/card w-[240px] shrink-0 sm:w-[300px]">
      <div className="overflow-hidden bg-secondary">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-[1.06]"
        />
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-display text-base font-medium text-ink">{item.name}</span>
        <span className="font-mono text-xs tabular text-ink/60">AED {item.price}</span>
      </figcaption>
    </figure>
  );
}

export function ProductRail() {
  const set = (
    <div className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6">
      {RAIL.map((r) => (
        <Card key={r.name} item={r} />
      ))}
    </div>
  );

  return (
    <div className="group flex overflow-hidden">
      <div className="flex shrink-0 animate-marquee-slow group-hover:[animation-play-state:paused]">
        {set}
        <div aria-hidden className="flex shrink-0">
          {set}
        </div>
      </div>
    </div>
  );
}
