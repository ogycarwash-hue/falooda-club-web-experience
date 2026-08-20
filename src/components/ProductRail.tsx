import { PHOTOS } from "@/data/photos";

const RAIL = [
  { image: PHOTOS.specialClub, name: "Special Club Falooda" },
  { image: PHOTOS.kulfi, name: "Kulfi Falooda" },
  { image: PHOTOS.mango2, name: "Mango Falooda" },
  { image: PHOTOS.arabic, name: "Arabic Falooda" },
  { image: PHOTOS.blackberry, name: "Blackberry Falooda" },
  { image: PHOTOS.avocado, name: "Avocado Falooda" },
  { image: PHOTOS.blueberry, name: "Blueberry Falooda" },
  { image: PHOTOS.kerala, name: "Kerala Falooda" },
  { image: PHOTOS.mumbai, name: "Mumbai Style Falooda" },
  { image: PHOTOS.passionFruit, name: "Passion Fruit Falooda" },
  { image: PHOTOS.royalHotgrill, name: "Royal Falooda" },
  { image: PHOTOS.tender, name: "Tender Coconut Falooda" },
  { image: PHOTOS.strawberryHotgrill, name: "Strawberry Falooda" },
];

function Card({ item }: { item: (typeof RAIL)[number] }) {
  return (
    <figure className="group/card w-[240px] shrink-0 sm:w-[300px]">
      <div className="overflow-hidden bg-secondary">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover/card:scale-[1.07]"
        />
      </div>
      <figcaption className="mt-3 font-display text-base font-medium text-ink">
        {item.name}
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
      <div className="flex shrink-0 animate-marquee-slow motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {set}
        <div aria-hidden className="flex shrink-0">
          {set}
        </div>
      </div>
    </div>
  );
}
