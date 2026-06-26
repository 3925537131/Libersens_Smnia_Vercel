// Auto-generated demo catalogue. Used until the Shopify Storefront API
// credentials are set in env. Shapes mirror what lib/shopify.js returns
// so the UI is identical whether data is mock or live.

export const MOCK_PRODUCTS = [
  {
    id: "gid://mock/Product/1",
    handle: "model-l",
    title: "Model L",
    subtitle: "The Love Machine",
    description:
      "Libersens' flagship presence. Engineered mind-first, Model L stays close — an intelligent companion designed to be wanted, not used.",
    featuredImage: { url: "/img/product-model-l.svg", altText: "Model L" },
    images: [{ url: "/img/product-model-l.svg", altText: "Model L" }],
    priceRange: { minVariantPrice: { amount: "4800.0", currencyCode: "USD" } },
    tags: ["Founder Edition", "Limited"],
    availableForSale: true,
    options: [{ name: "Finish", values: ["Porcelain", "Graphite"] }],
    variants: [
      { id: "gid://mock/Variant/1", title: "Porcelain", availableForSale: true, price: { amount: "4800.0", currencyCode: "USD" } },
      { id: "gid://mock/Variant/2", title: "Graphite", availableForSale: true, price: { amount: "4800.0", currencyCode: "USD" } },
    ],
  },
  {
    id: "gid://mock/Product/2",
    handle: "aura",
    title: "Aura",
    subtitle: "Ambient presence",
    description:
      "A quieter companion for the bedside. Aura reads the room — warmth, light, and a voice that knows when to stay silent.",
    featuredImage: { url: "/img/product-aura.svg", altText: "Aura" },
    images: [{ url: "/img/product-aura.svg", altText: "Aura" }],
    priceRange: { minVariantPrice: { amount: "1200.0", currencyCode: "USD" } },
    tags: ["New"],
    availableForSale: true,
    options: [{ name: "Finish", values: ["Blush", "Slate"] }],
    variants: [
      { id: "gid://mock/Variant/3", title: "Blush", availableForSale: true, price: { amount: "1200.0", currencyCode: "USD" } },
      { id: "gid://mock/Variant/4", title: "Slate", availableForSale: true, price: { amount: "1200.0", currencyCode: "USD" } },
    ],
  },
  {
    id: "gid://mock/Product/3",
    handle: "lume",
    title: "Lume",
    subtitle: "The wearable",
    description:
      "Discreet, skin-warm, always paired. Lume keeps the connection with you when you leave the room.",
    featuredImage: { url: "/img/product-lume.svg", altText: "Lume" },
    images: [{ url: "/img/product-lume.svg", altText: "Lume" }],
    priceRange: { minVariantPrice: { amount: "340.0", currencyCode: "USD" } },
    tags: ["Accessory"],
    availableForSale: true,
    options: [{ name: "Band", values: ["Sand", "Onyx"] }],
    variants: [
      { id: "gid://mock/Variant/5", title: "Sand", availableForSale: true, price: { amount: "340.0", currencyCode: "USD" } },
      { id: "gid://mock/Variant/6", title: "Onyx", availableForSale: true, price: { amount: "340.0", currencyCode: "USD" } },
    ],
  },
  {
    id: "gid://mock/Product/4",
    handle: "shell-care-kit",
    title: "Shell Care Kit",
    subtitle: "Maintenance ritual",
    description:
      "Everything to keep a Libersens shell pristine — cleanser, conditioning balm, and a microfibre wrap.",
    featuredImage: { url: "/img/product-kit.svg", altText: "Shell Care Kit" },
    images: [{ url: "/img/product-kit.svg", altText: "Shell Care Kit" }],
    priceRange: { minVariantPrice: { amount: "90.0", currencyCode: "USD" } },
    tags: ["Accessory"],
    availableForSale: true,
    options: [{ name: "Title", values: ["Default"] }],
    variants: [
      { id: "gid://mock/Variant/7", title: "Default", availableForSale: true, price: { amount: "90.0", currencyCode: "USD" } },
    ],
  },
];

export function findMockProduct(handle) {
  return MOCK_PRODUCTS.find((p) => p.handle === handle) || null;
}
