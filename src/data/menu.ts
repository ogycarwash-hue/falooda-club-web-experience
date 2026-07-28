export type MenuItem = {
  name: string;
  arabic?: string;
  price?: string;
  category: string;
  tags?: string[];
  desc?: string;
};

export const CATEGORIES = [
  "Faloodas",
  "Fresh Juices",
  "Sarbath & Sodas",
  "Special Juices",
  "Lassi",
  "Milkshakes",
  "Crush Milkshakes",
  "Ice Cream & Desserts",
  "Mojito",
  "Fruit Bricks",
  "Healthy Juice",
  "Hot Beverages",
  "Burgers",
  "Combo Sandwiches",
  "Club Sandwiches",
  "Poratta",
  "Wraps",
  "Shawarma",
  "Broasted Chicken",
  "Plates & Sides",
  "Evening Snacks",
  "Specials Corner",
] as const;

export const MENU: MenuItem[] = [
  // Faloodas
  { name: "Pista Falooda", arabic: "فالودة فستق", price: "15", category: "Faloodas", tags: ["signature", "bestseller"] },
  { name: "Strawberry Falooda", arabic: "فالودة فراولة", price: "15", category: "Faloodas", tags: ["signature", "bestseller"] },
  { name: "Mango Falooda", arabic: "فالودة مانجو", price: "15", category: "Faloodas", tags: ["signature", "bestseller"] },

  // Fresh Juices
  { name: "Mango Juice", arabic: "مانجو", category: "Fresh Juices" },
  { name: "Strawberry Juice", arabic: "فراولة", category: "Fresh Juices" },
  { name: "Lemon Juice", arabic: "عصير ليمون", category: "Fresh Juices" },
  { name: "Kiwi Juice", arabic: "كيوي", category: "Fresh Juices" },
  { name: "Banana Juice", arabic: "موز", category: "Fresh Juices" },
  { name: "Lemon Mint Juice", arabic: "ليمون نعناع", category: "Fresh Juices", tags: ["refreshing"] },
  { name: "Carrot Juice", arabic: "جزر", category: "Fresh Juices" },
  { name: "Chikoo Juice", arabic: "شيكو", category: "Fresh Juices" },
  { name: "Watermelon Juice", arabic: "بطيخ", category: "Fresh Juices" },
  { name: "Grape Fruit Juice", arabic: "جريب فروت", category: "Fresh Juices" },
  { name: "Apple Juice", arabic: "تفاح", category: "Fresh Juices" },
  { name: "Pineapple Juice", arabic: "اناناس", category: "Fresh Juices" },
  { name: "Papaya Juice", arabic: "بابايا", category: "Fresh Juices" },

  // Sarbath & Sodas
  { name: "Nannari Sarbath", arabic: "نّاري سربت", price: "6", category: "Sarbath & Sodas" },
  { name: "Orange Sarbath", arabic: "برتقال سربت", price: "12", category: "Sarbath & Sodas" },
  { name: "Grape Sarbath", arabic: "عنب سربت", price: "12", category: "Sarbath & Sodas" },
  { name: "Fresh Lemon", arabic: "ليمون طازج", price: "6", category: "Sarbath & Sodas" },
  { name: "Ginger Soda", arabic: "صودا زنجبيل", price: "6", category: "Sarbath & Sodas" },
  { name: "Soda Sarbath", arabic: "صودا سربت", price: "6", category: "Sarbath & Sodas" },

  // Special Juices
  { name: "Cocktail", category: "Special Juices" },
  { name: "Avocado", category: "Special Juices" },
  { name: "Avocado Passion", arabic: "باشون أفوكادو", category: "Special Juices" },
  { name: "Orange Passion", arabic: "باشون برتقال", category: "Special Juices" },
  { name: "Pineapple Passion", arabic: "باشون أناناس", category: "Special Juices" },
  { name: "Mango Passion", arabic: "باشون مانجو", category: "Special Juices" },
  { name: "Banana Passion", arabic: "باشون موز", category: "Special Juices" },

  // Lassi
  { name: "Plain Lassi", arabic: "لاسي سادة", price: "6", category: "Lassi" },
  { name: "Salt Lassi", arabic: "لاسي مالح", price: "6", category: "Lassi" },
  { name: "Mango Lassi", arabic: "لاسي مانجو", price: "10", category: "Lassi", tags: ["bestseller"] },
  { name: "Strawberry Lassi", arabic: "لاسي فراولة", price: "10", category: "Lassi" },
  { name: "Mango Banana Lassi", arabic: "لاسي مانجو موز", price: "10", category: "Lassi" },
  { name: "Fruit Lassi", arabic: "لاسي فواكه", price: "10", category: "Lassi" },
  { name: "Pista Lassi", arabic: "لاسي فستق", price: "10", category: "Lassi" },
  { name: "Dry Fruit Lassi", arabic: "لاسي فواكه جافة", price: "10", category: "Lassi" },

  // Milkshakes
  { name: "Vanilla Milkshake", price: "10", category: "Milkshakes" },
  { name: "Pista Milkshake", price: "10", category: "Milkshakes" },
  { name: "Strawberry Milkshake", price: "10", category: "Milkshakes" },
  { name: "Chocolate Milkshake", price: "10", category: "Milkshakes" },
  { name: "Dates Milkshake", price: "14", category: "Milkshakes" },

  // Crush Milkshakes
  { name: "Nutella Crush", category: "Crush Milkshakes", tags: ["bestseller"] },
  { name: "KitKat Crush", category: "Crush Milkshakes", tags: ["bestseller"] },
  { name: "Oreo Crush", category: "Crush Milkshakes", tags: ["bestseller"] },
  { name: "Kinder Bueno Crush", category: "Crush Milkshakes" },
  { name: "Lotus Crush", category: "Crush Milkshakes", tags: ["bestseller"] },
  { name: "Snickers Crush", category: "Crush Milkshakes" },

  // Ice Cream & Desserts
  { name: "Mixed Ice Cream", price: "10", category: "Ice Cream & Desserts", tags: ["signature"] },
  { name: "J Glory", price: "15", category: "Ice Cream & Desserts", tags: ["signature"] },
  { name: "Fruit Salad with Ice Cream", price: "15", category: "Ice Cream & Desserts", tags: ["signature"] },
  { name: "Chocolate Sundae", category: "Ice Cream & Desserts", tags: ["signature"] },
  { name: "Fruits Mix Plate", price: "25", category: "Ice Cream & Desserts" },
  { name: "Okinawa Rock Salt", price: "16", category: "Ice Cream & Desserts", tags: ["new"] },

  // Mojito
  { name: "Passion Fruit Mojito", price: "12", category: "Mojito" },
  { name: "Strawberry Mojito", price: "12", category: "Mojito" },
  { name: "Mini Mojito", price: "12", category: "Mojito" },
  { name: "Blue Mojito", price: "12", category: "Mojito" },
  { name: "Blackberry Mojito", price: "12", category: "Mojito" },
  { name: "Watermelon Mojito", price: "12", category: "Mojito", tags: ["refreshing"] },

  // Fruit Bricks
  { name: "Mango Brick", price: "15", category: "Fruit Bricks" },
  { name: "Pineapple Brick", price: "15", category: "Fruit Bricks" },
  { name: "Kiwi Brick", price: "15", category: "Fruit Bricks" },
  { name: "Pomegranate Brick", price: "21", category: "Fruit Bricks" },

  // Healthy Juice
  { name: "Power Booster", price: "15", category: "Healthy Juice", tags: ["healthy"] },
  { name: "Liver Cure", price: "15", category: "Healthy Juice", tags: ["healthy"] },
  { name: "Weight Loss", price: "15", category: "Healthy Juice", tags: ["healthy"] },
  { name: "Juice Salvation", price: "15", category: "Healthy Juice", tags: ["healthy"] },

  // Hot Beverages
  { name: "Nescafe", price: "5", category: "Hot Beverages" },
  { name: "Horlicks", price: "5", category: "Hot Beverages" },
  { name: "Boost", price: "5", category: "Hot Beverages" },
  { name: "Lemon Tea", price: "1.50", category: "Hot Beverages" },
  { name: "Mint Tea", price: "1", category: "Hot Beverages" },
  { name: "Black Coffee", price: "1", category: "Hot Beverages" },
  { name: "Cappuccino", price: "5", category: "Hot Beverages" },
  { name: "Fresh Milk Coffee", price: "4", category: "Hot Beverages" },
  { name: "Iced Coffee", category: "Hot Beverages" },

  // Burgers
  { name: "Veg Burger", price: "8", category: "Burgers" },
  { name: "Khaleej Burger", price: "10", category: "Burgers" },
  { name: "Mutton Burger", price: "8", category: "Burgers" },
  { name: "Chicken Burger", price: "7", category: "Burgers" },
  { name: "Jumbo Prawns Burger", price: "10", category: "Burgers" },
  { name: "Fillet Burger", price: "10", category: "Burgers" },
  { name: "Tikka Burger", price: "10", category: "Burgers" },
  { name: "Zinker Burger", price: "10", category: "Burgers" },
  { name: "Cheetos Burger", price: "22", category: "Burgers", tags: ["signature"] },
  { name: "Mega Zinker Burger", price: "15", category: "Burgers" },
  { name: "Hot Grilled Burger", price: "22", category: "Burgers", tags: ["signature"] },
  { name: "Double Burger (Chicken)", price: "13", category: "Burgers" },
  { name: "Double Burger (Mutton)", price: "15", category: "Burgers" },

  // Combo Sandwiches
  { name: "Zinker Cheetos Combo", price: "15", category: "Combo Sandwiches" },
  { name: "Zinker Combo", price: "10", category: "Combo Sandwiches" },
  { name: "Chicken Lemon Combo", price: "10", category: "Combo Sandwiches" },
  { name: "Hotdog Combo", price: "10", category: "Combo Sandwiches" },
  { name: "Fillet Combo", price: "10", category: "Combo Sandwiches" },
  { name: "Jumbo Prawns Combo", price: "10", category: "Combo Sandwiches" },
  { name: "Zinker Turkish Combo", price: "13", category: "Combo Sandwiches" },
  { name: "Mathafi Combo", price: "12", category: "Combo Sandwiches" },
  { name: "Grilled Tikka Combo", price: "10", category: "Combo Sandwiches" },
  { name: "Kabab Combo", price: "10", category: "Combo Sandwiches" },

  // Club Sandwiches
  { name: "Hot Grill SP Club (Veg / Non-Veg)", price: "45", category: "Club Sandwiches", tags: ["signature"] },
  { name: "Arabic Club", price: "28", category: "Club Sandwiches" },
  { name: "Tikka Club", price: "15", category: "Club Sandwiches" },
  { name: "Lulu Club", price: "15", category: "Club Sandwiches" },
  { name: "Beef Club", price: "15", category: "Club Sandwiches" },
  { name: "Veg Club", price: "15", category: "Club Sandwiches" },
  { name: "Diet Club", price: "15", category: "Club Sandwiches" },

  // Poratta
  { name: "PUBG Poratta", price: "5", category: "Poratta" },
  { name: "Zinger Poratta", price: "5", category: "Poratta" },
  { name: "Fransisco Poratta", price: "5", category: "Poratta" },
  { name: "Chi. Chilli Poratta", price: "5", category: "Poratta" },
  { name: "Chi. Lemon Poratta", price: "5", category: "Poratta" },
  { name: "Kabab Poratta", price: "5", category: "Poratta" },
  { name: "Nutella Poratta", price: "5", category: "Poratta" },
  { name: "Boiled Egg Poratta", price: "5", category: "Poratta" },
  { name: "Fillet Poratta", price: "5", category: "Poratta" },
  { name: "Beef Nashif Poratta", price: "5", category: "Poratta" },
  { name: "Shakshooka Poratta", price: "5", category: "Poratta" },
  { name: "Cheese Jam Poratta", price: "5", category: "Poratta" },
  { name: "Omelette Poratta", price: "5", category: "Poratta" },

  // Wraps
  { name: "Mathafi Wrap", price: "10", category: "Wraps" },
  { name: "Nuggets Wrap", price: "10", category: "Wraps" },
  { name: "Egg (Boiled/Omelette) Wrap", price: "10", category: "Wraps" },
  { name: "Chi. Lemon Wrap", price: "10", category: "Wraps" },
  { name: "Cajun Wrap", price: "10", category: "Wraps" },
  { name: "Jumbo Prawns Wrap", price: "10", category: "Wraps" },
  { name: "Kabab Wrap", price: "10", category: "Wraps" },
  { name: "Vegetable Wrap", price: "10", category: "Wraps" },
  { name: "Twister Wrap", price: "10", category: "Wraps" },

  // Shawarma
  { name: "Hassan Mathar", price: "7", category: "Shawarma" },
  { name: "Arabic Shawarma", price: "15", category: "Shawarma" },
  { name: "Shawarma Poratta", price: "7", category: "Shawarma" },
  { name: "Sharook", price: "10", category: "Shawarma" },
  { name: "Shawarma Roll Normal", price: "6", category: "Shawarma" },
  { name: "Toasted Shawarma Roll", price: "6", category: "Shawarma" },

  // Broasted Chicken
  { name: "Snack Meal (2 pcs + fries + bun + Pepsi)", price: "14", category: "Broasted Chicken" },
  { name: "Dinner Meal (3 pcs + fries + bun + coleslaw + Pepsi)", price: "19", category: "Broasted Chicken" },
  { name: "Hot Grill SP Meal (4 pcs + fries + 2 bun + coleslaw + 2 Pepsi)", price: "35", category: "Broasted Chicken", tags: ["signature"] },
  { name: "Family Meal (12 pcs + fries + 6 bun + coleslaw + Pepsi 1L)", price: "68", category: "Broasted Chicken", tags: ["signature"] },
  { name: "Party Meal (19 pcs + fries L + 10 bun + coleslaw + Pepsi 1L)", price: "85", category: "Broasted Chicken", tags: ["signature"] },

  // Plates & Sides
  { name: "French Fries", arabic: "بطاطا مقلية", price: "6 / 12", category: "Plates & Sides" },
  { name: "Potato Wedges", arabic: "بطاطا ودجيس", price: "12", category: "Plates & Sides" },
  { name: "Onion Rings", arabic: "حلقات بصل", category: "Plates & Sides" },
  { name: "Jumbo Prawns", price: "14", category: "Plates & Sides" },
  { name: "Falafel", arabic: "فلافل", price: "14", category: "Plates & Sides" },
  { name: "Sheesh Tawook", arabic: "شيش طاووق", price: "14", category: "Plates & Sides" },
  { name: "Chicken Popcorn", arabic: "بوب كورن دجاج", price: "15", category: "Plates & Sides" },
  { name: "Kids Meal", arabic: "وجبة أطفال", price: "22", category: "Plates & Sides" },

  // Evening Snacks
  { name: "Pazham Pori", arabic: "بازام بوري", price: "1.50", category: "Evening Snacks" },
  { name: "Parippuvada", arabic: "بارييو ودا", price: "1.50", category: "Evening Snacks" },
  { name: "Uzhunnu Vada", price: "1.50", category: "Evening Snacks" },

  // Specials Corner
  { name: "Favorite Fries", category: "Specials Corner" },
  { name: "Spicy Fries", category: "Specials Corner" },
  { name: "Amazing French Fries", category: "Specials Corner" },
  { name: "Jumbo Craving", category: "Specials Corner" },
];
