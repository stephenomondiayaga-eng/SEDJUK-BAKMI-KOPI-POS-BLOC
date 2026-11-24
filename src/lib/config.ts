// ============================================================
// SEDJUK BAKMI & KOPI POS BLOC — EDITABLE SITE CONFIGURATION
// Update any content below. No code changes required elsewhere.
// Items marked [PLACEHOLDER] should be replaced by the owner.
// ============================================================

export const site = {
  name: "Sedjuk Bakmi & Kopi",
  shortName: "SEDJUK",
  tagline: "Bakmi & Kopi Pos Bloc",
  description:
    "Discover Sedjuk Bakmi & Kopi Pos Bloc in Pasar Baru, Central Jakarta. Enjoy comforting bakmi, coffee, and a welcoming café experience inside Pos Bloc Jakarta.",
  url: "https://sedjukposbloc.com", // [PLACEHOLDER] replace with real domain
  rating: 4.3,
  reviewCount: 0, // [PLACEHOLDER]
  phones: ["+6285111315692", "+254115056893"],
  phoneDisplay: ["+62 851-1131-5692", "+254 115 056 893"],
  address: {
    street: "Jl. Pos No. 2, Pasar Baru",
    district: "Kecamatan Sawah Besar",
    city: "Kota Jakarta Pusat",
    region: "Daerah Khusus Ibukota Jakarta",
    postalCode: "10110",
    country: "Indonesia",
    landmark: "Located inside Pos Bloc Jakarta",
    full: "Jl. Pos No. 2, Pasar Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, DKI Jakarta 10110, Indonesia",
  },
  // Editable links — set these when available
  social: {
    instagram: "#", // [PLACEHOLDER] e.g. https://instagram.com/sedjuk
    tiktok: "#", // [PLACEHOLDER]
    facebook: "#", // [PLACEHOLDER]
  },
  // Ordering integration (leave empty string to use phone fallback)
  whatsappNumber: "", // e.g. "6285111315692"
  orderUrl: "", // e.g. GoFood/GrabFood URL
  googleReviewsUrl: "", // [PLACEHOLDER]
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Pos+Bloc+Jakarta,+Jl.+Pos+No.+2,+Pasar+Baru,+Jakarta+Pusat&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Pos+Bloc+Jakarta,+Jl.+Pos+No.+2,+Pasar+Baru,+Jakarta+Pusat+10110",
  hours: {
    // 0 = Sunday ... 6 = Saturday
    0: { open: "08:00", close: "21:00" },
    1: { open: "10:00", close: "21:00" },
    2: { open: "10:00", close: "21:00" },
    3: { open: "10:00", close: "21:00" },
    4: { open: "10:00", close: "21:00" },
    5: { open: "10:00", close: "21:00" },
    6: { open: "08:00", close: "21:00" },
  },
  timezone: "Asia/Jakarta",
};

// ---------- MENU ----------
// All items are [PLACEHOLDER] — verify with the restaurant before publishing.
export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "bakmi",
    label: "Bakmi",
    items: [
      {
        name: "Signature Bakmi",
        description: "[Add signature description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1552611052-33e04de081de?w=900&q=80&auto=format&fit=crop",
        featured: true,
      },
      {
        name: "Chicken Bakmi",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "Special Bakmi",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=900&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "rice",
    label: "Rice & Meals",
    items: [
      {
        name: "Rice Bowl",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "Fried Rice",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=900&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      {
        name: "Crispy Snack",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "Pangsit",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee",
    items: [
      {
        name: "Signature Coffee",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=80&auto=format&fit=crop",
        featured: true,
      },
      {
        name: "Iced Coffee",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "Espresso",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=900&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "noncoffee",
    label: "Non-Coffee",
    items: [
      {
        name: "Matcha Beverage",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1536013455962-2b6e8fa4f7f5?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "Chocolate",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=900&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "signature",
    label: "Signature Drinks",
    items: [
      {
        name: "House Signature",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&q=80&auto=format&fit=crop",
        featured: true,
      },
      {
        name: "Seasonal Special",
        description: "[Add description]",
        price: "[Add price]",
        image:
          "https://images.unsplash.com/photo-1558857563-b371033873b8?w=900&q=80&auto=format&fit=crop",
      },
    ],
  },
];

// ---------- GALLERY ----------
export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=1200&q=80&auto=format&fit=crop",
    alt: "Bowl of Indonesian bakmi noodles",
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&q=80&auto=format&fit=crop",
    alt: "Coffee cup on café table",
  },
  {
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80&auto=format&fit=crop",
    alt: "Warm café interior lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80&auto=format&fit=crop",
    alt: "Noodles lifted with chopsticks",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
    alt: "Friends dining together",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80&auto=format&fit=crop",
    alt: "Café moment with coffee and pastry",
  },
  {
    src: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=1200&q=80&auto=format&fit=crop",
    alt: "Iced coffee glass close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80&auto=format&fit=crop",
    alt: "Restaurant table setting",
  },
  {
    src: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=1200&q=80&auto=format&fit=crop",
    alt: "Crispy snack close-up",
  },
];

// ---------- REVIEWS (placeholders only — do not fabricate real reviews) ----------
export const reviewPlaceholders = [
  {
    name: "Guest Review",
    text: "[Customer testimonial placeholder — replace with a verified review from Google Maps.]",
    rating: 5,
  },
  {
    name: "Guest Review",
    text: "[Customer testimonial placeholder — replace with a verified review from Google Maps.]",
    rating: 4,
  },
  {
    name: "Guest Review",
    text: "[Customer testimonial placeholder — replace with a verified review from Google Maps.]",
    rating: 4,
  },
];
