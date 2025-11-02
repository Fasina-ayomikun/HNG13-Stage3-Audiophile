export type ProductBrief = {
  slug: string;
  title: string;
  overline?: string;
  copy: string;
  image: string;
  reversed?: boolean;
};

export type CategoryKey = "headphones" | "speakers" | "earphones";

export const CATEGORY_DATA: Record<
  CategoryKey,
  { hero: string; products: ProductBrief[] }
> = {
  headphones: {
    hero: "HEADPHONES",
    products: [
      {
        slug: "/headphones/xx99-mark-two",
        title: "XX99 MARK II HEADPHONES",
        overline: "NEW PRODUCT",
        copy: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium experience with studio-quality sound.",
        image:
          "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
      },
      {
        slug: "/headphones/xx99-mark-one",
        title: "XX99 MARK I HEADPHONES",
        copy: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles and creators.",
        image:
          "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
        reversed: true,
      },
      {
        slug: "/headphones/xx59",
        title: "XX59 HEADPHONES",
        copy: "Lightweight and comfortable with a lively sound—great for everyday listening at home or on the move.",
        image:
          "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
      },
    ],
  },

  speakers: {
    hero: "SPEAKERS",
    products: [
      {
        slug: "/speakers/zx9-speaker",
        title: "ZX9 SPEAKER",
        overline: "NEW PRODUCT",
        copy: "A flagship design delivering room-filling, remarkably accurate sound.",
        image:
          "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
      },
      {
        slug: "/speakers/zx7-speaker",
        title: "ZX7 SPEAKER",
        copy: "Elegant design with versatile placement and a balanced sound signature.",
        image:
          "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
        reversed: true,
      },
    ],
  },

  earphones: {
    hero: "EARPHONES",
    products: [
      {
        slug: "/earphones/yx1-earphones",
        title: "YX1 WIRELESS EARPHONES",
        overline: "NEW PRODUCT",
        copy: "Compact, comfortable, and tuned for clarity—your daily carry earphones.",
        image:
          "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
      },
    ],
  },
};
