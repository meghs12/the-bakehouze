import type { Product, CategoryMeta } from "@/types";

// ────────────────────────────────────────────────────────────────────────────
// PRODUCT DATABASE
// Single source of truth for every item sold at The BakeHouze.
//
// To add a real photo later: drop the file into /public (e.g. /public/products/
// og-cookie.jpg) and set `image: "/products/og-cookie.jpg"` on that product.
// Until then, cards render the "Product Image Coming Soon" placeholder.
// ────────────────────────────────────────────────────────────────────────────

export const CATEGORY_META: CategoryMeta[] = [

  {
    id: "cookies",
    title: "Cookies",
    blurb:
      "NYC-style thick cookies with crackly tops and a soft, gooey middle. Baked to order, every single time.",
  },
  {
  id: "buns",
  title: "Korean Cream Cheese Buns",
  blurb:
    "Soft, fluffy buns filled with creamy, garlicky-herby cream cheese.",
  },
  {
    id: "cheesecake",
    title: "Burnt basque Cheesecake",
    blurb:
      "Caramelised on top, custard-soft within. Our eggless Basque is the slice people come back for.",
  },
  {
    id: "brownies",
    title: "Brownie Slabs",
    blurb:
      "Dense, fudgy slabs cut thick. Choose your weight and your indulgence — from plain to loaded.",
  },
  {
    id: "cookie-tins",
    title: "Cookie Tins",
    blurb:
      "Our bestseller cookies now in a tin! More gooey, more chocolatey and sinfully decadent. ",
  },
  {
    id: "banana-bread",
    title: "Banana Bread",
    blurb:
      "Moist, brown-butter banana bread loaded with chocolate chip — baked in three sizes to suit any table.",
  },
  {
    id: "tiramisu",
    title: "Tiramisu",
    blurb:
      "Espresso-soaked ladyfingers, silky mascarpone, a dusting of cocoa. Classic Italian, done eggless.",
  },
  {
    id: "gifting",
    title: "Cookie Gifting",
    blurb:
      "Boxed and ready to give — our cookies in giftable sets, perfect for celebrations and thank-yous.",
  },
];

export const PRODUCTS: Product[] = [
  // ── COOKIES ───────────────────────────────────────────────────────────────
   {
    slug: "slutty-cookie",
    name: "Slutty Cookie",
    price: 120,
    image: "/Products/slutty.jpeg",
    category: "cookies",
    description:
      "Triple chocolate cookie stuffed with brownie, topped with Nutella and a brownie bite.",
    longDescription:
      "Our indulgent triple chocolate cookie hides a rich, fudgy brownie centre. Finished with a generous Nutella topping and another brownie bite, this is chocolate overload in every bite.",
    isEggless: true,
    isWeeklySpecial: true,
    isBestseller: true,
    isFeatured: true,
  },
 

  {
    slug: "og-chocolate-chip",
    name: "The OG Chocolate Chip",
    price: 79,
    image: "/Products/og (1).jpeg",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    
    description: "Brown-butter base, pools of milk chocolate, a whisper of sea salt.",
    longDescription:
      "The one that started it all. A brown-butter dough rested overnight for deep, toffee notes, loaded with pools of melting milk chocolate and finished with flaky sea salt. Thick, chewy edges and a soft centre.",
  },
  // {
  //   slug: "mint-chocolate-chip",
  //   name: "Mint Chocolate Chip",
  //   price: 79,
  //   image: "/Products/mint.jpeg",
  //   category: "cookies",
  //   weight: "70-80g",
  //   isEggless: true,
  //   description: "Cool mint folded through a chocolate-flecked dough.",
  //   longDescription:
  //     "A refreshing twist on the classic — fresh mint balanced against milk and white chocolate shards in a thick, chewy cookie that never tips into toothpaste territory.",
  // },
  {
    slug: "oreo-cookies-n-cream",
    name: "Oreo Cookies n Cream",

    price: 85,
    image: "/Products/oreo cookies n cream.png",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    isFeatured: true,
    description: "Crushed Oreos and white chocolate in a vanilla-rich dough.",
    longDescription:
      "Crushed Oreo rubble and creamy white chocolate baked into a soft vanilla dough. Cookies-and-cream, reimagined as a thick bakery-style cookie.",
  },
  {
    slug: "red-velvet-white-chocolate-chip",
    name: "Red Velvet White Chocolate Chip",
    price: 85,
    image: "/Products/red velvet.jpeg",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    description: "Cocoa-kissed red velvet studded with white chocolate.",
    longDescription:
      "Velvety, lightly cocoa'd dough in a deep crimson, packed with sweet white chocolate chips. As pretty as it is indulgent.",
  },
  {
    slug: "double-chocolate-cookie",
    name: "Double Chocolate Cookie",
    price: 80,
    image: "/Products/double choc.png",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    description: "Dark cocoa dough with a double hit of melting chocolate.",
    longDescription:
      "For the serious chocolate lover — a dark cocoa dough doubled down with chunks of melting chocolate throughout. Fudgy, rich and unapologetic.",
  },
  {
    slug: "triple-chocolate-chip",
    name: "Triple Chocolate Chip",
    price: 85,
    image: "/Products/triple choc.png",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    isBestseller: true,
    description: "Dark, milk and white chocolate in one decadent cookie.",
    longDescription:
      "Three chocolates — dark, milk and white — folded into one gloriously over-the-top cookie. Each bite finds a different pocket of melt.",
  },
  {
    slug: "nutella-filled-milk-chocolate-chip",
    name: "Nutella Filled Milk Chocolate Chip",
    price: 85,
    image: "/Products/nutella.jpeg",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    isFeatured: true,
    description: "Molten Nutella core inside a milk-chocolate-chip cookie.",
    longDescription:
      "Break it open warm for a molten Nutella core that oozes out of a soft milk-chocolate-chip cookie. The ultimate hazelnut indulgence.",
  },
  {
    slug: "dark-chocolate-salted-caramel",
    name: "Dark Chocolate & Salted Caramel",
    price: 90,
    image: "/Products/dcsc.png",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    description: "Bittersweet chocolate and a gooey salted-caramel centre.",
    longDescription:
      "Bittersweet dark chocolate meets a gooey, salted-caramel centre. Sweet, salty and deeply grown-up.",
  },
  {
    slug: "biscoff-white-chocolate",
    name: "Biscoff & White Chocolate",
    price: 95,
    image: "/Products/biscoff.png",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    isBestseller: true,
    description: "Caramelised Biscoff swirl with creamy white chocolate.",
    longDescription:
      "Spiced, caramelised Biscoff swirled through a buttery dough with creamy white chocolate. Topped with a Biscoff crumb for extra crunch.",
  },
  {
    slug: "dark-chocolate-nutella",
    name: "Dark Chocolate & Nutella",
    price: 95,
    image: "/Products/dark choc nutella.jpeg",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    description: "Rich dark cocoa dough with a hazelnut Nutella ribbon.",
    longDescription:
      "A rich dark cocoa cookie ribboned with Nutella. Intensely chocolatey with a smooth hazelnut finish.",
  },
  {
    slug: "blueberry-white-chocolate",
    name: "Blueberry & white chocolate chip",
    price: 95,
    image: "/Products/blueberry.png",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    description: "Balance of caramelised white chocolate bits with bursts of real tangy blueberry.",
    longDescription:
      "Bright and summery — a caramelised white chocolate cookie with bursts of jammy blueberry in a soft, buttery cookie. A refreshing break from chocolate.",
  },
  {
    slug: "roasted-almonds-milk-chocolate",
    name: "Roasted Almonds & Milk Chocolate",
    price: 99,
    image: "/Products/roasted.jpeg",
    category: "cookies",
    weight: "70-80g",
    isEggless: true,
    description: "Toasty roasted almonds and mellow milk chocolate.",
    longDescription:
      "Toasty roasted almonds and mellow milk chocolate in a chewy cookie with a satisfying nutty crunch in every bite.",
  },
  // ── BUNS  ────────────────────────────────────────────
   {
    slug: "korean-cream-cheese-bun",
    name: "Korean Cream Cheese Bun",
    price: 169,
    image: "/Products/KCB.jpeg",
    category: "buns",
    isWeeklySpecial: true,
    description:
      "Soft, fluffy bun filled with garlicky-herby cream cheese.",
    isEggless: true,
    isFeatured: true,
  },

  // ── CHEESECAKE (MINI BASQUES) ────────────────────────────────────────────
  {
    slug: "vanilla-burnt-basque-cheesecake-slice",
    name: "Vanilla Mini Basque",
    price: 185,
    image: "/Products/miniB.jpeg",
    category: "cheesecake",
    weight: "160-170g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description: "Caramelised top, custard-soft centre. Pure vanilla bean.",
    longDescription:
      "Our signature Basque-style cheesecake — deliberately scorched on top for a bittersweet, caramelised edge that gives way to a barely-set, custard-soft centre flecked with real vanilla. Crustless, eggless, and impossibly creamy.",
  },
  {
    slug: "blueberry-burnt-basque-cheesecake-slice",
    name: "Blueberry Compote Mini Basque",
    price: 195,
    image: "/Products/blueB.jpeg",
    category: "cheesecake",
    weight: "160-170g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description: "Caramelised top, custard-soft centre. loaded with blueberry compote.",
    longDescription:
      "Our signature Basque cheesecake crowned with slow-cooked blueberries — intensely fruity, lightly tangy, and layered over the caramelised top for a beautifully balanced bite.",
  },
  {
    slug: "biscoff-burnt-basque-cheesecake-slice",
    name: "Biscoff Mini Basque",
    price: 199,
    image: "/Products/BiscB.jpeg",
    category: "cheesecake",
    weight: "160-170g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description:
      "Caramelised top, custard-soft centre. Loaded with silky Biscoff and biscuit crumble.",
    longDescription:
      "Our signature Basque-style cheesecake — deliberately scorched on top for a bittersweet, caramelised edge that gives way to a barely-set, custard-soft centre flecked with real vanilla. Finished with a generous layer of silky Biscoff spread and caramelised biscuit crumble. Crustless, eggless, and impossibly creamy.",
  },
  {
    slug: "chocolate-ganache-burnt-basque-cheesecake-slice",
    name: "Chocolate Ganache Mini Basque",
    price: 199,
    image: "/Products/chocB.jpeg",
    category: "cheesecake",
    weight: "160-170g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description:
      "Caramelised top, custard-soft centre. Finished with rich chocolate ganache.",
    longDescription:
      "A decadent layer of silky chocolate ganache crowns the scorched surface, adding bittersweet depth and a velvety finish to every spoonful.",
  },
  {
    slug: "salted-caramel-burnt-basque-cheesecake-slice",
    name: "Salted Caramel Mini Basque",
    price: 195,
    image: "/Products/saltB.jpeg",
    category: "cheesecake",
    weight: "160-170g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description:
      "Caramelised top, custard-soft centre. Finished with deep salted caramel.",
    longDescription:
      "Our signature Basque-style cheesecake — deliberately scorched on top for a bittersweet, caramelised edge that gives way to a barely-set, custard-soft centre flecked with real vanilla. Finished with ribbons of deep golden salted caramel for the perfect sweet–salty balance. Crustless, eggless, and impossibly creamy.",
  },

  // ── BROWNIE SLABS ─────────────────────────────────────────────────────────
    {
    slug: "assorted-brownie-250g",
    name: "Assorted Brownie Slab",
    price: 400,
    image: "/Products/assBrownie.jpeg",
    category: "brownies",
    weight: "250g",
    isEggless: true,
    description: "A mixed slab of our best-loved brownie flavours.",
    longDescription:
      "Can't pick just one? This slab brings together a selection of our favourite brownie flavours — plain, Biscoff, Nutella and more — cut thick and ready to share.",
  },





  
  {
    slug: "plain-brownie-250g",
    name: "Plain Brownie Slab",
    price: 325,
    image: "/Products/plain250.jpeg",
    category: "brownies",
    weight: "250g",
    isEggless: true,
    description: "Dense, fudgy and glossy-topped. The honest classic.",
    longDescription:
      "A dense, fudgy brownie with a crackly, glossy top and a deeply chocolatey centre. No frills — just the perfect brownie, cut thick.",
  },
  {
    slug: "plain-brownie-500g",
    name: "Plain Brownie Slab",
    price: 650,
    image: "/Products/plain brownies.jpeg",
    category: "brownies",
    weight: "500g",
    isEggless: true,
    description: "The honest classic — now in a share-worthy 500g slab.",
    longDescription:
      "A dense, fudgy brownie with a crackly, glossy top and a deeply chocolatey centre, in a generous 500g slab made to share (or not).",
  },
  {
    slug: "triple-chocolate-brownie-250g",
    name: "Triple Chocolate Brownie Slab",
    price: 350,
    image: "/Products/cookie dough (2).jpeg",
    category: "brownies",
    weight: "250g",
    isEggless: true,
    isFeatured: true,
    description: "Dark, milk and white chocolate folded through fudge.",
    longDescription:
      "Three chocolates folded through our signature fudge base for an intensely chocolatey slab with pockets of melt in every bite.",
  },
  {
    slug: "triple-chocolate-brownie-500g",
    name: "Triple Chocolate Brownie Slab",
    price: 700,
    image: "/Products/cookie dough (2).jpeg",
    category: "brownies",
    weight: "500g",
    isEggless: true,
    description: "A triple-chocolate fudge slab built for a crowd.",
    longDescription:
      "Dark, milk and white chocolate through a deeply fudgy base — a 500g slab for the serious chocolate table.",
  },
  {
    slug: "biscoff-brownie-250g",
    name: "Biscoff Brownie Slab",
    price: 375,
    image: "/Products/biscoffbrownie.jpeg",
    category: "brownies",
    weight: "250g",
    isEggless: true,
    isBestseller: true,
    description: "Fudge brownie swirled and topped with caramelised Biscoff.",
    longDescription:
      "Our fudge brownie swirled with caramelised Biscoff spread and finished with a generous Biscoff crumb. Spiced, sweet and irresistible.",
  },
  {
    slug: "biscoff-brownie-500g",
    name: "Biscoff Brownie Slab",
    image: "/Products/biscoffbrownie.jpeg",
    price: 750,
    category: "brownies",
    weight: "500g",
    isEggless: true,
    description: "A loaded Biscoff fudge slab, doubled up.",
    longDescription:
      "A 500g slab of fudge brownie swirled with Biscoff and topped with caramelised crumb. Built for sharing — or stockpiling.",
  },
  {
    slug: "nutella-brownie-250g",
    name: "Nutella Brownie Slab",
    price: 375,
    image: "/Products/nutela250.jpeg",
    category: "brownies",
    weight: "250g",
    isEggless: true,
    description: "Hazelnut Nutella swirled into rich chocolate fudge.",
    longDescription:
      "Smooth Nutella swirled into a rich chocolate fudge base for a brownie with a velvety hazelnut finish.",
  },
  {
    slug: "nutella-brownie-500g",
    name: "Nutella Brownie Slab",
    image: "/Products/nutellabrownie.jpeg",
    price: 750,
    category: "brownies",
    weight: "500g",
    isEggless: true,
    description: "A 500g Nutella-swirled fudge slab.",
    longDescription:
      "Our fudge brownie generously swirled with Nutella in a share-worthy 500g slab.",
  },
  {
    slug: "cookie-dough-brownie-250g",
    name: "Cookie Dough Brownie Slab",
    image: "/Products/cookie dough (1).jpeg",
    price: 400,
    category: "brownies",
    weight: "250g",
    isEggless: true,
    isFeatured: true,
    description: "Edible cookie dough layered over fudge brownie.",
    longDescription:
      "Safe-to-eat chocolate chip cookie dough layered over our fudge brownie. Two desserts, one unforgettable slab.",
  },
  {
    slug: "cookie-dough-brownie-500g",
    name: "Cookie Dough Brownie Slab",
    image: "/Products/cookie dough (1).jpeg",
    price: 800,
    category: "brownies",
    weight: "500g",
    isEggless: true,
    description: "Cookie dough meets brownie in a 500g slab.",
    longDescription:
      "A 500g slab layering edible cookie dough over fudge brownie. The ultimate two-in-one indulgence.",
  },
  {
    slug: "roasted-almonds-brownie-250g",
    name: "Roasted Almonds Brownie Slab",
    price: 425,
    image: "/Products/roasted250.jpeg",
    category: "brownies",
    weight: "250g",
    isEggless: true,
    description: "Toasty almonds through deep chocolate fudge.",
    longDescription:
      "Toasted almonds folded and scattered through our fudge brownie for a nutty crunch against the chocolate.",
  },
  {
    slug: "roasted-almonds-brownie-500g",
    name: "Roasted Almonds Brownie Slab",
    image: "/Products/roastedbrownie.jpeg",
    price: 850,
    category: "brownies",
    weight: "500g",
    isEggless: true,
    description: "A 500g almond-loaded fudge slab.",
    longDescription:
      "A generous 500g fudge brownie loaded with toasted almonds for crunch in every bite.",
  },

  // ── COOKIE TINS ───────────────────────────────────────────────────────────
  {
    slug: "regular-chocolate-chip-cookie-tin",
    name: "Regular Chocolate Chip Cookie Tin",
    price: 650,
    image: "/Products/occ.png",
    category: "cookie-tins",
    weight: "420-450g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description: "Classic golden cookies loaded with rich chocolate chips.",
    longDescription:
      "Our signature chocolate chip cookies baked until lightly golden with crisp edges and soft centres, generously packed with premium chocolate chips for a timeless, comforting bite.",
  },
  {
    slug: "double-chocolate-chip-cookie-tin",
    name: "Double Chocolate Chip Cookie Tin",
    price: 700,
    image: "/Products/dcc.jpeg",
    category: "cookie-tins",
    weight: "420-450g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description: "Rich cocoa cookies packed with extra chocolate indulgence.",
    longDescription:
      "Deep cocoa cookie dough baked into rich, fudgy cookies and loaded with dark and milk chocolate chips throughout — crafted for those who believe there is no such thing as too much chocolate.",
  },
  {
    slug: "triple-chocolate-chip-cookie-tin",
    name: "Triple Chocolate Chip Cookie Tin",
    price: 750,
    image: "/Products/tcc.jpeg",
    category: "cookie-tins",
    weight: "420-450g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description: "Three layers of chocolate in every decadent bite.",
    longDescription:
      "An indulgent blend of rich cocoa cookie dough, generous dark, milk and white chocolate chips, and layered chocolate flavour in every bite — intensely chocolatey, deeply satisfying, and made for true chocoholics.",
  },
  {
    slug: "biscoff-white-chocolate-cookie-tin",
    name: "Biscoff White Chocolate Cookie Tin",
    price: 800,
    image: "/Products/bcc.png",
    category: "cookie-tins",
    weight: "420-450g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description: "Caramelised Biscoff meets smooth white chocolate.",
    longDescription:
      "Crunchy caramelised biscuit notes folded into buttery cookie dough and paired with creamy white chocolate for a rich, sweet, and perfectly balanced indulgence.",
  },
  {
    slug: "nutella-milk-chocolate-cookie-tin",
    name: "Nutella Milk Chocolate Cookie Tin",
    price: 800,
    image: "/Products/nmccc.jpeg",
    category: "cookie-tins",
    weight: "420-450g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description: "Smooth Nutella paired with rich milk chocolate.",
    longDescription:
      "Soft-baked cookies layered with velvety Nutella centre and finished with creamy milk chocolate for a luxurious, melt-in-the-mouth experience.",
  },
  {
    slug: "red-velvet-white-chocolate-chip-cookie-tin",
    name: "Red Velvet White Chocolate Chip Cookie Tin",
    price: 800,
    image: "/Products/rcc.png",
    category: "cookie-tins",
    weight: "420-450g",
    isEggless: true,
    isBestseller: true,
    isFeatured: true,
    description: "Soft red velvet cookies with creamy white chocolate.",
    longDescription:
      "Beautifully rich red velvet cookies baked soft and finished with smooth white chocolate chips — offering a delicate cocoa flavour with a luxurious finish.",
  },

  // ── BANANA BREAD ──────────────────────────────────────────────────────────
  {
    slug: "bbcc-banana-bread-half-pound",
    name: "Brown Butter Chocolate Chip Banana Bread",
    price: 230,
    image: "/Products/bbccbb.jpeg",
    category: "banana-bread",
    weight: "1/2 lb",
    isEggless: true,
    description: "Nutty brown butter, ripe banana and pools of chocolate chip.",
    longDescription:
      "Moist banana bread made with browned butter for a deep, nutty caramel note, studded with chocolate chips throughout. Baked till the top is dark and craggy.",
  },
  {
    slug: "bbcc-banana-bread-one-pound",
    name: "Brown Butter Chocolate Chip Banana Bread",
    price: 459,
    image: "/Products/bbccbb.jpeg",
    category: "banana-bread",
    weight: "1 lb",
    isEggless: true,
    description: "Nutty brown butter, ripe banana and pools of chocolate chip.",
    longDescription:
      "Moist banana bread made with browned butter for a deep, nutty caramel note, studded with chocolate chips throughout. Baked till the top is dark and craggy.",
  },
  {
    slug: "bbcc-banana-bread-two-pound",
    name: "Brown Butter Chocolate Chip Banana Bread",
    price: 899,
    image: "/Products/bbccbb.jpeg",
    category: "banana-bread",
    weight: "2 lb",
    isEggless: true,
    description: "Nutty brown butter, ripe banana and pools of chocolate chip.",
    longDescription:
      "Moist banana bread made with browned butter for a deep, nutty caramel note, studded with chocolate chips throughout. Baked till the top is dark and craggy.",
  },

  // ── TIRAMISU ──────────────────────────────────────────────────────────────
  {
    slug: "tiramisu-150g",
    name: "Tiramisu",
    price: 199,
    image: "/Products/tiramisu.jpeg",
    category: "tiramisu",
    weight: "150g",
    isEggless: true,
    description: "Espresso-soaked layers, mascarpone cream, cocoa dusted.",
    longDescription:
      "Classic Italian tiramisu with espresso-dipped ladyfingers layered between silky mascarpone cream, finished with a dusting of cocoa.",
  },
  {
    slug: "tiramisu-500g",
    name: "Tiramisu",
    price: 699,
    image: "/Products/tiratin.png",
    category: "tiramisu",
    weight: "500g",
    isEggless: true,
    description: "Espresso-soaked layers, mascarpone cream, cocoa dusted.",
    longDescription:
      "Classic Italian tiramisu with espresso-dipped ladyfingers layered between silky mascarpone cream, finished with a dusting of cocoa.",
  },

  // ── COOKIE GIFTING ────────────────────────────────────────────────────────
  {
    slug: "cookie-gifting-set-of-7-30g",
    name: "Cookie Gift Set — 7 Cookies (30g each)",
    price: 460,
    image: "/Products/combo1.jpeg",
    category: "gifting",
    weight: "7 x 30g",
    isEggless: true,
    description: "A set of 7 cookies, 30g each — a little box of joy.",
    longDescription:
      "Seven freshly baked cookies at 30g each, boxed for gifting. A neat, giftable format perfect for sharing or self-indulgence.",
  },
  {
    slug: "cookie-gifting-set-of-7-assorted",
    name: "Cookie Gift Set — 7 Assorted Cookies",
    price: 480,
    image: "/Products/combo2.jpeg",
    category: "gifting",
    weight: "7 assorted",
    isEggless: true,
    description: "A set of 7 assorted cookies — one box, every flavour.",
    longDescription:
      "Seven cookies, seven different flavours in one gift box — a curated assortment so there's something for everyone.",
  },
  {
    slug: "cookie-gifting-mini-basque-and-3-cookies",
    name: "Mini Basque & 3 Cookies Gift Set",
    price: 450,
    image: "/Products/combo3.jpeg",
    category: "gifting",
    weight: "1 mini basque + 3 cookies",
    isEggless: true,
    description: "One mini basque paired with three of our cookies.",
    longDescription:
      "A perfectly balanced gift box featuring one mini burnt basque cheesecake alongside three freshly baked cookies — the best of both worlds in one giftable box.",
  },
];

// ── Lookup helpers ──────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, limit);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}