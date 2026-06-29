// ============================================================
// MAULI - single source of truth
// ============================================================

export const SITE = {
  name: 'Mauli',
  full: 'Mauli - Family Paan House',
  tagline: 'Dinner is not complete without a paan',
  meaning: 'माऊली - Mother, protector, blessing',
  positioning: "India's first OG family paan house",
  since: 1990,
  phone: '+91 78018 79290',
  phoneRaw: '917801879290',
  franchisePhone: '+91 78018 79290',
  franchisePhoneRaw: '917801879290',
  instagram: 'https://instagram.com/mauli_ahmedabad',
  instagramHandle: '@mauli_ahmedabad',
  swiggy: 'https://www.swiggy.com/direct/brand/133723?source=swiggy-direct&subSource=generic',
  zomato: 'https://link.zomato.com/xqzv/rshare?id=1211732553056369e',
  address: 'Near Taj Skyline, inside Frizbee Food Park, opp Tea Post, Bodakdev, SBR Road, Ahmedabad, Gujarat 380059',
  shortAddress: 'Frizbee Food Park, SBR Road, Ahmedabad',
  scanMenuNote: 'Live made-to-order paan at our counter',
} as const

// ---- Brand proof (heritage) ----
export const BRAND_STATS = [
  { k: '35+', label: 'Years of legacy', note: 'since 1990' },
  { k: '11+', label: 'Locations', note: 'across India' },
  { k: '211+', label: 'Paan varieties', note: 'fresh, live-made' },
  { k: '4.7★', label: 'Google rating', note: "Pune's No.1 paan" },
]

export function wa(message: string): string {
  return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`
}

// ---- Assorted gift boxes (LOCAL Ahmedabad - fresh paan) ----
export interface Box {
  id: string
  name: string
  count: number
  price: number
  perPaan: number
  contents: string
  hero?: boolean
  image: string
}

export const BOXES: Box[] = [
  {
    id: 'discovery',
    name: 'Discovery Box',
    count: 4,
    price: 199,
    perPaan: 50,
    contents: '1 Sweet · 1 Maghai Sweet · 1 Chutney · 1 Crunchy Flavour',
    image: '/img/boxes/4discovery.png',
  },
  {
    id: 'family',
    name: 'Family Assorted Box',
    count: 8,
    price: 399,
    perPaan: 50,
    contents: '2 Sweet · 2 Chutney · 2 Crunchy Flavour · 1 Chocolate · 1 Dry Fruit',
    image: '/img/boxes/8family.png',
  },
  {
    id: 'signature',
    name: 'Signature Assorted Box',
    count: 12,
    price: 549,
    perPaan: 46,
    contents: '2 Sweet · 2 Crunchy Flavour · 2 Dry Fruit · 3 Chocolate · 1 Nutella · 1 Kunafa · 1 Lotus Biscoff',
    hero: true,
    image: '/img/boxes/12signature.png',
  },
  {
    id: 'grand',
    name: 'Grand Assorted Box',
    count: 20,
    price: 899,
    perPaan: 45,
    contents: '2 Sweet · 2 Chutney · 5 Crunchy Flavour · 2 Dry Fruit · 3 Chocolate · 2 Lotus Biscoff · 2 Nutella · 2 Kunafa',
    image: '/img/boxes/boxbanner.png',
  },
]

// ---- Retail products (PAN-INDIA shipping) ----
export interface Product {
  id: string
  name: string
  blurb: string
  variants: { label: string; price: number; note?: string }[]
  image: string
  tag?: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'kesar-gulkand',
    name: 'Kesar Rose Gulkand',
    blurb: 'Saffron-rose gulkand - the cooling, digestive heart of every gulkand paan we make.',
    variants: [
      { label: '200g', price: 189 },
      { label: '500g', price: 449, note: 'Most loved · ~3 months' },
      { label: '1 kg', price: 859 },
    ],
    image: '/img/products/kesargulkand.jpg',
    tag: 'Most Bought',
  },
  {
    id: 'ayu-digest',
    name: 'Ayu Digest',
    blurb: '16 Ayurvedic herbs - the digestive blend folded into our paans & Paan Sparkle.',
    variants: [
      { label: '10g', price: 79 },
      { label: '50g', price: 249, note: 'Best value · ~2 months' },
      { label: '100g', price: 449 },
    ],
    image: '/img/products/ayudigest.jpg',
    tag: 'Digestive',
  },
  {
    id: 'paan-premix',
    name: 'Paan Premix',
    blurb: 'The base in every paan we craft - also a beautiful mukhwas after meals.',
    variants: [
      { label: '100g', price: 149 },
      { label: '250g', price: 299, note: 'Gift-ready' },
      { label: '500g', price: 549 },
    ],
    image: '/img/products/paanpremix.jpg',
    tag: 'In Every Paan',
  },
  {
    id: 'maghai-premix',
    name: 'Maghai Premix',
    blurb: 'The heritage blend behind our Royal Maghai - or savour it as a premium mukhwas.',
    variants: [
      { label: '100g', price: 149 },
      { label: '250g', price: 299, note: 'Best seller' },
      { label: '500g', price: 549 },
    ],
    image: '/img/products/maghaipremix.jpg',
  },
]

// ---- Catering packages (per guest) ----
export interface CateringPackage {
  id: string
  name: string
  forWhom: string
  price: number
  unit: string
  blurb: string
  inclusions: string[]
  hero?: boolean
}

export const CATERING: CateringPackage[] = [
  {
    id: 'classic',
    name: 'Mauli Classic',
    forWhom: 'Corporate · Birthdays · Gatherings',
    price: 69,
    unit: 'per person',
    blurb: 'A refined introduction to Mauli - our most-loved traditional creations, presented with elegance & consistency.',
    inclusions: ['Sweet / Chutney / Flavour / Crunchy filled paan', '2 paan per guest', 'One decorated table setup', '1 trained staff'],
  },
  {
    id: 'celebration',
    name: 'Mauli Celebration',
    forWhom: 'Weddings · Receptions',
    price: 99,
    unit: 'per guest',
    blurb: 'Our signature wedding experience - timeless favourites blended with modern indulgences, crafted to delight every guest.',
    inclusions: ['All Classics + Chocolate / Dry Fruit paan', 'Digestive shots', '3 paan per guest', 'Two decorated tables · Live service', '2 trained staff'],
    hero: true,
  },
  {
    id: 'grand',
    name: 'Mauli Grand',
    forWhom: 'Luxury & Destination Weddings · VIP',
    price: 199,
    unit: 'per guest',
    blurb: 'The complete Mauli hospitality experience - presentation, variety & guest engagement take centre stage.',
    inclusions: ['All desserts + Fire paan experience', 'Digestive shots', '5 items per guest', '2 decorated tables + 1 floating service', '3 trained staff'],
  },
]

export const CATERING_ADDONS = [
  { name: 'Live Kunafa Station', blurb: 'Hot, golden & theatrical - prepared fresh before your guests.' },
  { name: 'Chocolate Fountain', blurb: 'A fountain of premium chocolate - irresistible & unmistakably Instagram-worthy.' },
  { name: 'Curated Dessert Bar', blurb: 'A dessert collection with specialised paan-combination flavours.' },
]

export const CATERING_MIN = 18000

// ---- Signature experiences (showcase) ----
export interface Signature {
  name: string
  blurb: string
  price: string
  image: string
  tag?: string
}

export const SIGNATURES: Signature[] = [
  { name: 'Fire Paan', blurb: 'The legendary flaming ritual - lit, theatrical, unforgettable.', price: '₹150', image: '/img/paan/fire.webp', tag: 'Experience' },
  { name: 'Ice Cream Paan', blurb: "Paan's warmth meets ice-cream chill - a contrast that works.", price: '₹150', image: '/img/paan/icecream.webp', tag: 'Experience' },
  { name: 'Rampyari Royale', blurb: 'Premix, gulkand, dates crunch, kesar supari & silver varkh.', price: '₹120', image: '/img/paan/rampyari.webp', tag: 'Guest Favourite' },
  { name: 'Royal Maghai', blurb: 'Authentic Maghai jodi paan, heritage premix, silver varakh.', price: '₹120', image: '/img/paan/maghai.webp', tag: 'Signature' },
  { name: 'Gulkand Shake', blurb: 'Gulkand, rose & dry fruits with Ayu Digest - dessert in a glass.', price: '₹150', image: '/img/paan/gulkandshake.webp', tag: 'Paan Drink' },
  { name: 'Paan Sparkle', blurb: 'Lemon, mint & Ayu Digest - refreshes and aids digestion.', price: '₹120', image: '/img/paan/paansparkle.webp', tag: 'Paan Drink' },
]

// ---- Wellness: Ayurvedic ingredient board ----
export interface Ingredient {
  name: string
  benefit: string
  emoji: string
}

export const INGREDIENTS: Ingredient[] = [
  { name: 'Gulkand', benefit: 'Cools the body & calms the gut', emoji: '🌹' },
  { name: 'Saunf', benefit: 'Freshens breath & aids digestion', emoji: '🌿' },
  { name: 'Cardamom', benefit: 'Soothes the stomach, lifts mood', emoji: '🫛' },
  { name: 'Kesar', benefit: 'Antioxidant warmth & glow', emoji: '🌾' },
  { name: 'Dates', benefit: 'Natural sweetness & iron', emoji: '🟤' },
  { name: 'Rose Petal', benefit: 'Cooling, gentle on digestion', emoji: '🌸' },
  { name: 'Coconut', benefit: 'Light, hydrating, satisfying', emoji: '🥥' },
  { name: 'Mukhwas', benefit: 'A digestive finish to any meal', emoji: '✨' },
]

export const TRUST_BADGES = [
  'No Tobacco',
  'No Supari',
  'Spit-Free',
  'Aids Digestion',
  '16 Ayurvedic Herbs',
  '100% Natural',
  'Handcrafted Live',
  'Since 1990',
]

// ---- Social proof ----
export const TESTIMONIALS = [
  { quote: 'The live paan counter was the talk of our wedding. Guests still message me about it.', author: 'Riya & Aman', role: 'Wedding · Ahmedabad' },
  { quote: 'Finally a paan that feels indulgent and healthy. The gulkand shake is unreal.', author: 'Neha S.', role: 'Regular · Frizbee' },
  { quote: 'Rated No.1 in the “What’s Hot in Pune” survey - and it absolutely earns it.', author: "What's Hot Pune", role: 'Featured · 4.7★ Google' },
]

// ---- Full paan menu (catalog - no pricing, concise) ----
export interface PaanCategory {
  title: string
  items: { name: string; image: string }[]
}

export const PAAN_MENU: PaanCategory[] = [
  {
    title: 'Signature & Royal',
    items: [
      { name: 'Royal Maghai', image: '/img/paan/maghai.webp' },
      { name: 'Rampyari Royale', image: '/img/paan/rampyari.webp' },
      { name: 'Royal Dry Fruit', image: '/img/paan/dryfruit.webp' },
      { name: 'Flavour Paan', image: '/img/paan/flavor.webp' },
    ],
  },
  {
    title: 'Chocolate Dips',
    items: [
      { name: 'Choco Nutella', image: '/img/paan/nutella.webp' },
      { name: 'Lotus Biscoff', image: '/img/paan/lotus-biscoff.webp' },
      { name: 'Kunafa Pistachio', image: '/img/paan/kunafa-pistachio.webp' },
      { name: 'Dark Chocolate', image: '/img/paan/dark-chocolate.webp' },
      { name: 'Milk Chocolate', image: '/img/paan/milk-chocolate.webp' },
      { name: 'White Chocolate', image: '/img/paan/white-chocolate.webp' },
    ],
  },
  {
    title: 'Classics & Digestive',
    items: [
      { name: 'Gulkand Classic', image: '/img/paan/gulkand.webp' },
      { name: 'Mauli Classic', image: '/img/paan/meetha-gulab.webp' },
      { name: 'Chutney Burst', image: '/img/paan/chutney.webp' },
      { name: 'Jelly Jewel', image: '/img/paan/jelly.webp' },
    ],
  },
  {
    title: 'Live Theatre',
    items: [
      { name: 'Fire Paan', image: '/img/paan/fire.webp' },
      { name: 'Ice Cream Paan', image: '/img/paan/icecream.webp' },
    ],
  },
  {
    title: 'Combos',
    items: [
      { name: 'After Meal Combo', image: '/img/paan/aftermealcombo.webp' },
      { name: 'Paan Flight', image: '/img/paan/paanflight.webp' },
    ],
  },
  {
    title: 'Paan Drinks',
    items: [
      { name: 'Paan Sparkle', image: '/img/paan/paansparkle.webp' },
      { name: 'Gulkand Shake', image: '/img/paan/gulkandshake.webp' },
    ],
  },
]

// ---- Franchise ----
export const FRANCHISE = {
  investment: '₹3,00,000',
  roi: '3-5 months',
  monthly: '₹1 lakh+',
  headline: 'Own a piece of a 35-year legacy',
  stats: [
    { k: '₹5L', label: 'One-time investment', note: 'complete turnkey package' },
    { k: '5-7', label: 'Months to ROI', note: 'proven across 11+ outlets' },
    { k: '₹1L+', label: 'Monthly earning', note: 'potential per counter' },
  ],
  includes: [
    { name: 'SS-304 Live Paan Counter', note: '5×4×2 ft, premium grade & fully movable' },
    { name: 'Customised Deep + Regular Fridge', note: 'for fresh chocolate paan & ingredients' },
    { name: 'Branded Acrylic Signboard', note: '4×3.5 ft with profile lighting' },
    { name: 'Display Rack & Storage Units', note: 'attractive product display' },
    { name: '56-Item Equipment Set', note: 'every instrument, delivered & installed' },
    { name: '58-Item Raw-Material Starter', note: 'open and start serving day one' },
    { name: 'Full Staff Training + Dress Code', note: 'lifetime training support' },
    { name: 'Marketing & Strategy Support', note: 'social media + guidance for max profit' },
  ],
  why: [
    { title: 'A trusted, proven name', body: "India's first OG family paan house - rated Pune's No.1 paan maker with a 4.7★ Google reputation." },
    { title: 'Low cost, fast payback', body: 'A single ₹3 lakh investment, with most franchisees reaching ROI within 3-5 months.' },
    { title: 'Compact & movable', body: 'A 5-ft live counter fits almost anywhere - hotels, food parks, banquets, high streets.' },
    { title: 'Loved by everyone', body: 'Paan is the one dessert that is affordable, ageless and healthy - the perfect franchise product.' },
    { title: 'Health & culture forward', body: '100% tobacco-free, 16 Ayurvedic herbs & 34 ingredients - no mouth redness, no spitting.' },
    { title: 'No experience needed', body: 'Simple, fast-to-replicate process with full support and training from day one.' },
  ],
  closing: 'Limited franchise slots - paan is the only dessert that is affordable for everyone, loved by all ages, and promotes health.',
}

// ---- Two franchise models ----
export const FRANCHISE_MODELS = [
  {
    id: 'counter',
    name: 'Express Counter',
    invest: '₹5,00,000',
    tag: 'Most popular',
    blurb: 'A compact, fully-movable live paan counter - perfect for hotels, food parks, high streets and banquets.',
    points: ['5×4×2 ft SS-304 counter', 'Turnkey: equipment + raw material', 'ROI in 5-7 months', '₹1 lakh+ monthly potential'],
    image: '/img/franchise/counter-open.png',
    hero: false,
  },
  {
    id: 'experience',
    name: 'Build-Your-Own Experience Store',
    invest: '₹10-12 lakh',
    tag: 'Flagship model',
    blurb: 'A full retail paan-dessert destination - the Ahmedabad flagship model, where guests craft their own paan live.',
    points: ['Premium fixed storefront & interiors', 'Make-Your-Own-Paan live bar', 'Full dessert & paan-drinks menu', 'Flagship branding & experience design'],
    image: '/img/franchise/visit.jpg',
    hero: true,
  },
]

// ---- Franchise journey (animated, Visit page) ----
export const FRANCHISE_JOURNEY = [
  { year: '1990', city: 'Shirdi', region: 'Where it began', note: 'A single counter near the Sai Baba Mandir.' },
  { year: '2017', city: 'Pune', region: '11 outlets', note: 'Rated No.1 in the “What’s Hot, Pune” survey.' },
  { year: '2023', city: 'Shrigonda', region: 'Beyond the city', note: 'The recipe travels across Maharashtra.' },
  { year: 'Today', city: 'Ahmedabad', region: 'The Flagship', note: 'Frizbee Food Park - our first Build-Your-Own Paan Experience Store.', flagship: true, image: '/img/franchise/visit.jpg' },
]

// All Pune outlets (the 11) + beyond
export const OUTLETS = {
  pune: [
    'Alka Talkies Chowk, Sadashiv Peth',
    'R.B. Kumthekar Road',
    'Fergusson College Gate 2, FC Road',
    'Bharat Natyamandir, Perugate',
    'Hotel Shauryawada',
    'Hotel Sandeep, Magarpatta',
    'Hotel Shivraj Dhaba, Wagholi',
    "Hotel Surve's, Viman Nagar",
    'Thermax Chowk, PCMC',
    'Hotel Siddhivinayak, Tilak Road',
    'Hotel Sainath, Kharadi',
  ],
  beyond: ['Shrigonda, Ahilyanagar', 'Frizbee Food Park, Ahmedabad'],
}

// ---- WhatsApp message templates ----
export const MESSAGES = {
  boxGeneric: "Hi Mauli, I'd like to order an assorted paan box.\n\nBox:\nFor (date / occasion):\nDelivery or pickup (Ahmedabad):\nPhone:",
  box: (name: string, count: number, price: number) =>
    `Hi Mauli, I'd like to order the ${name} (${count} paan · ₹${price}).\n\nFor (date / occasion):\nDelivery or pickup (Ahmedabad):\nPhone:`,
  product: (name: string) =>
    `Hi Mauli, I'd like to order ${name} for Pan-India shipping.\n\nVariant & quantity:\nDelivery address:\nPincode:\nPhone:`,
  catering: (pkg?: string) =>
    `Hi Mauli, I'm interested in paan catering${pkg ? ` - ${pkg} package` : ''}.\n\nEvent type:\nDate:\nApprox guests:\nVenue / city:`,
  visit: "Hi Mauli, I'd like to order fresh paan (Ahmedabad).\n\nMy items:\nDelivery or pickup:\nPhone:",
  franchise: "Hi Mauli, I'm interested in owning a Mauli franchise.\n\nMy name:\nCity:\nDo you have a location in mind?:\nPhone:",
  franchiseModel: (model: string) =>
    `Hi Mauli, I'm interested in the ${model} franchise model.\n\nMy name:\nCity:\nDo you have a location in mind?:\nPhone:`,
} as const

export function waFranchise(message: string): string {
  return `https://wa.me/${SITE.franchisePhoneRaw}?text=${encodeURIComponent(message)}`
}
