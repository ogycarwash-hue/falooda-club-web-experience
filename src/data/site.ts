export const SITE = {
  name: "Falooda Club",
  tagline: "Sip. Scoop. Smile.",
  phones: ["054 568 6768", "054 593 5354"],
  whatsapp: "https://wa.me/971545686768",
  
  // Structured locations based on the provided Google Maps listing
  locations: [
    {
      branch: "Rigga",
      address: "New Al khaleej building, Building36 - 40B Street - behind Laven...",
      mapEmbed: "https://www.google.com/maps?q=Falooda+Club+Rigga&output=embed",
    },
    {
      branch: "Abu Hail",
      address: "MRM Building",
      mapEmbed: "https://www.google.com/maps?q=Falooda+Club+Abu+Hail&output=embed",
    },
    {
      branch: "Al Waraqa",
      address: "Abdul Rahim Hussain Gargash Mosque Building, Shop No 1",
      mapEmbed: "https://www.google.com/maps?q=Falooda+Club+Al+Waraqa&output=embed",
    }
  ],
  
  // Fallback single string if existing components expect `SITE.address`
  address: "Branches in Rigga, Abu Hail, and Al Waraqa, Dubai, UAE",
  hours: "Open daily · 8:00 AM – 2:00 AM",
  
  order: {
    talabat: "https://www.talabat.com/uae/",
    noon: "https://food.noon.com/",
    smiles: "https://www.smilesuae.com/",
  },
  social: {
    instagram: "https://www.instagram.com/faloodaclubuae/",
    facebook: "https://facebook.com/falooda.club",
    tiktok: "https://tiktok.com/@falooda.club",
  },
};

export const FAQ = [
  {
    q: "Where are you located?",
    a: "We currently have three branches across Dubai: Rigga, Abu Hail, and Al Waraqa.",
  },
  {
    q: "What are your hours?",
    a: "Every day, 8:00 AM to 2:00 AM.",
  },
  {
    q: "Do you deliver?",
    a: "Yes — via Talabat, Noon Food and Smiles.",
  },
  {
    q: "Is the food halal?",
    a: "Yes. All meat items are halal.",
  },
];
