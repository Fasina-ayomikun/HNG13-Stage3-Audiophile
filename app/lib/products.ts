export type CategoryKey = "headphones" | "speakers" | "earphones";

export type InBoxItem = { qty: number; label: string };

export type Product = {
  slug: string;
  category: CategoryKey;
  name: string;
  new?: boolean;
  price: number;
  description: string;
  hero: string;
  gallery: [string, string, string];
  features: string;
  inBox: InBoxItem[];
  alsoLike: Array<{
    name: string;
    slug: string;
    image: string;
    category: CategoryKey;
  }>;
};

export const PRODUCTS: Product[] = [
  {
    slug: "xx99-mark-two",
    category: "headphones",
    name: "XX99 MARK II HEADPHONES",
    new: true,
    price: 299900,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    hero: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    gallery: [
      "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
      "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
      "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
    ],
    features:
      "Featuring a genuine leather head strap and premium earbuds, these headphones deliver superior comfort and exceptional noise isolation.\n\nThe 50mm dynamic drivers create a balanced depth and precision of studio-quality sound.",
    inBox: [
      { qty: 1, label: "Headphone Unit" },
      { qty: 2, label: "Replacement Earcups" },
      { qty: 1, label: "User Manual" },
      { qty: 1, label: "3.5mm 5m Audio Cable" },
      { qty: 1, label: "Travel Bag" },
    ],
    alsoLike: [
      {
        name: "XX99 MARK I",
        slug: "xx99-mark-one",
        image: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        category: "headphones",
      },
      {
        name: "XX59",
        slug: "xx59",
        image: "/assets/shared/desktop/image-xx59-headphones.jpg",
        category: "headphones",
      },
      {
        name: "ZX9 SPEAKER",
        slug: "zx9-speaker",
        image: "/assets/shared/desktop/image-zx9-speaker.jpg",
        category: "speakers",
      },
    ],
  },

  {
    slug: "xx99-mark-one",
    category: "headphones",
    name: "XX99 MARK I HEADPHONES",
    price: 175000,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles and music enthusiasts alike.",
    hero: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
    gallery: [
      "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
      "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
      "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
    ],
    features:
      "Boasting a closed-back design and premium materials, the XX99 Mark I delivers an immersive experience that’s both powerful and balanced.\n\nIts 50mm drivers provide exceptional clarity and depth across all genres of music.",
    inBox: [
      { qty: 1, label: "Headphone Unit" },
      { qty: 2, label: "Replacement Earcups" },
      { qty: 1, label: "User Manual" },
      { qty: 1, label: "3.5mm 5m Audio Cable" },
    ],
    alsoLike: [
      {
        name: "XX59",
        slug: "xx59",
        image: "/assets/shared/desktop/image-xx59-headphones.jpg",
        category: "headphones",
      },
      {
        name: "XX99 MARK II",
        slug: "xx99-mark-two",
        image: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
        category: "headphones",
      },
      {
        name: "ZX9 SPEAKER",
        slug: "zx9-speaker",
        image: "/assets/shared/desktop/image-zx9-speaker.jpg",
        category: "speakers",
      },
    ],
  },

  {
    slug: "xx59",
    category: "headphones",
    name: "XX59 HEADPHONES",
    price: 89900,
    description:
      "Enjoy your audio almost anywhere and customize it to your tastes with the XX59 headphones. Lightweight and comfortable with remarkable sound performance.",
    hero: "/assets/product-xx59-headphones/desktop/image-product.jpg",
    gallery: [
      "/assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
      "/assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
      "/assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
    ],
    features:
      "The XX59 headphones feature soft, breathable ear cushions and precision-tuned acoustic drivers for a balanced audio experience.\n\nDesigned for versatility, they are perfect for casual listening and critical playback alike.",
    inBox: [
      { qty: 1, label: "Headphone Unit" },
      { qty: 2, label: "Replacement Earcups" },
      { qty: 1, label: "User Manual" },
      { qty: 1, label: "3.5mm 5m Audio Cable" },
    ],
    alsoLike: [
      {
        name: "XX99 MARK II",
        slug: "xx99-mark-two",
        image: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
        category: "headphones",
      },
      {
        name: "XX99 MARK I",
        slug: "xx99-mark-one",
        image: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        category: "headphones",
      },
      {
        name: "ZX7 SPEAKER",
        slug: "zx7-speaker",
        image: "/assets/shared/desktop/image-zx7-speaker.jpg",
        category: "speakers",
      },
    ],
  },

  {
    slug: "zx9-speaker",
    category: "speakers",
    name: "ZX9 SPEAKER",
    new: true,
    price: 450000,
    description:
      "Upgrade your sound system with the all new ZX9 speaker. It’s a statement piece for any living room, offering deep bass and crystal clarity.",
    hero: "/assets/product-zx9-speaker/desktop/image-product.jpg",
    gallery: [
      "/assets/product-zx9-speaker/desktop/image-gallery-1.jpg",
      "/assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
      "/assets/product-zx9-speaker/desktop/image-gallery-3.jpg",
    ],
    features:
      "Connect via Bluetooth or analog inputs for seamless listening. Built with dual subwoofers for powerful bass and balanced sound.\n\nThe ZX9 is crafted from high-grade materials, delivering stunning acoustics and style in equal measure.",
    inBox: [
      { qty: 2, label: "Speaker Units" },
      { qty: 2, label: "Speaker Cloth Panels" },
      { qty: 1, label: "User Manual" },
      { qty: 1, label: "3.5mm Audio Cable" },
      { qty: 1, label: "10m Optical Cable" },
    ],
    alsoLike: [
      {
        name: "ZX7 SPEAKER",
        slug: "zx7-speaker",
        image: "/assets/shared/desktop/image-zx7-speaker.jpg",
        category: "speakers",
      },
      {
        name: "XX99 MARK I",
        slug: "xx99-mark-one",
        image: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        category: "headphones",
      },
      {
        name: "XX59",
        slug: "xx59",
        image: "/assets/shared/desktop/image-xx59-headphones.jpg",
        category: "headphones",
      },
    ],
  },
  {
    slug: "zx7-speaker",
    category: "speakers",
    name: "ZX7 SPEAKER",
    price: 350000,
    description:
      "Stream high-fidelity sound wirelessly with exceptional clarity and depth. The ZX7 is a stylish speaker that performs in any space.",
    hero: "/assets/product-zx7-speaker/desktop/image-product.jpg",
    gallery: [
      "/assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
      "/assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
      "/assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
    ],
    features:
      "The ZX7 features high-end drivers and an acoustic cabinet designed for accurate sound reproduction.\n\nIts minimalist form blends with any decor while producing room-filling audio with effortless detail.",
    inBox: [
      { qty: 2, label: "Speaker Units" },
      { qty: 2, label: "Speaker Cloth Panels" },
      { qty: 1, label: "User Manual" },
      { qty: 1, label: "3.5mm Audio Cable" },
    ],
    alsoLike: [
      {
        name: "ZX9 SPEAKER",
        slug: "zx9-speaker",
        image: "/assets/shared/desktop/image-zx9-speaker.jpg",
        category: "speakers",
      },
      {
        name: "XX99 MARK I",
        slug: "xx99-mark-one",
        image: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        category: "headphones",
      },
      {
        name: "xx59 headPHONES",
        slug: "xx59",
        image: "/assets/shared/desktop/image-xx59-headphones.jpg",
        category: "headphones",
      },
    ],
  },

  {
    slug: "yx1-earphones",
    category: "earphones",
    name: "YX1 WIRELESS EARPHONES",
    new: true,
    price: 59900,
    description:
      "Tailor your listening experience with multiple EQ profiles and enjoy all-day comfort with the new YX1 Wireless Earphones.",
    hero: "/assets/product-yx1-earphones/desktop/image-product.jpg",
    gallery: [
      "/assets/product-yx1-earphones/desktop/image-gallery-1.jpg",
      "/assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
      "/assets/product-yx1-earphones/desktop/image-gallery-3.jpg",
    ],
    features:
      "The YX1 Wireless Earphones deliver premium sound and all-day battery life with quick-charge technology.\n\nTheir ergonomic design and IPX4 rating ensure comfort and durability for everyday use.",
    inBox: [
      { qty: 2, label: "Earphone Units" },
      { qty: 6, label: "Multi-size Ear Tips" },
      { qty: 1, label: "Charging Case" },
      { qty: 1, label: "USB-C Charging Cable" },
      { qty: 1, label: "User Manual" },
    ],
    alsoLike: [
      {
        name: "XX99 MARK I",
        slug: "xx99-mark-one",
        image: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        category: "headphones",
      },
      {
        name: "ZX9 SPEAKER",
        slug: "zx9-speaker",
        image: "/assets/shared/desktop/image-zx9-speaker.jpg",
        category: "speakers",
      },
      {
        name: "ZX7 SPEAKER",
        slug: "zx7-speaker",
        image: "/assets/shared/desktop/image-zx7-speaker.jpg",
        category: "speakers",
      },
    ],
  },
];

export const CATEGORY_LABEL: Record<CategoryKey, string> = {
  headphones: "HEADPHONES",
  speakers: "SPEAKERS",
  earphones: "EARPHONES",
};

export const findByCategoryAndSlug = (category: CategoryKey, slug: string) =>
  PRODUCTS.find((p) => p.category === category && p.slug === slug);
