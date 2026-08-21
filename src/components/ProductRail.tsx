import { PHOTOS } from "@/data/photos";

const RAIL = [
  { image: PHOTOS.specialClub, name: "Special Club Falooda" },
  { image: PHOTOS.kulfi, name: "Kulfi Falooda" },
  { image: PHOTOS.mango2, name: "Mango Falooda" },
  { image: PHOTOS.running, name: "Running Falooda" },
  { image: PHOTOS.arabic, name: "Arabic Falooda" },
  { image: PHOTOS.carrot, name: "Carrot Falooda" },
  { image: PHOTOS.blackberry, name: "Blackberry Falooda" },
  { image: PHOTOS.mixedIceCream, name: "Mixed Ice Cream" },
  { image: PHOTOS.avocado, name: "Avocado Falooda" },
  { image: PHOTOS.blueberry, name: "Blueberry Falooda" },
  { image: PHOTOS.zingerFries, name: "Zinger Fries" },
  { image: PHOTOS.kerala, name: "Kerala Falooda" },
  { image: PHOTOS.mumbai, name: "Mumbai Style Falooda" },
  { image: PHOTOS.loadedFries, name: "Loaded Fries" },
  { image: PHOTOS.passionFruit, name: "Passion Fruit Falooda" },
  { image: PHOTOS.royalHotgrill, name: "Royal Falooda" },
  { image: PHOTOS.tender, name: "Tender Coconut Falooda" },
  { image: PHOTOS.iceCream, name: "Ice Cream Sundae" },
];

function Card({ item }: { item: (typeof RAIL)[number] }) {
  return (
    <figure className="group/card w-[180px] shrink-0 sm:w-[300px]">
      <div className="overflow-hidden bg-secondary">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          width={1280}
          height={1600}
          className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover/card:scale-[1.07]"
        />
      </div>
      <figcaption className="mt-3 font-display text-sm font-medium text-ink sm:text-base">
        {item.name}
      </figcaption>
    </figure>
  );
}

export function ProductRail() {
  const set = (
    <div className="flex shrink-0 gap-3 pr-3 sm:gap-6 sm:pr-6">
      {RAIL.map((r) => (
        <Card key={r.name} item={r} />
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile: swipeable, snap-scrolling rail */}
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:hidden">
        {RAIL.map((r) => (
          <div key={r.name} className="snap-start">
            <Card item={r} />
          </div>
        ))}
      </div>

      {/* Desktop: auto-scrolling marquee, pauses on hover */}
      <div className="group hidden overflow-hidden sm:flex">
        <div className="flex shrink-0 animate-marquee-slow motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {set}
          <div aria-hidden className="flex shrink-0">
            {set}
          </div>
        </div>
      </div>
    </>
  );
}
