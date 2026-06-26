// Shopify Storefront API client with a graceful mock fallback.
//
// When SHOPIFY_STORE_DOMAIN + SHOPIFY_STOREFRONT_ACCESS_TOKEN are present,
// data comes from the live store. Otherwise the site falls back to the
// auto-generated catalogue in lib/mock-data.js so everything renders.

import { MOCK_PRODUCTS, findMockProduct } from "./mock-data";

const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const API_VERSION = "2024-10";

export const isShopifyConfigured = Boolean(DOMAIN && TOKEN);

async function shopifyFetch(query, variables = {}) {
  const endpoint = `https://${DOMAIN}/api/${API_VERSION}/graphql.json`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Shopify ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

// ---- normalisers (flatten Shopify edges into plain objects) ----
function normalizeProduct(p) {
  if (!p) return null;
  return {
    id: p.id,
    handle: p.handle,
    title: p.title,
    subtitle: p.productType || "",
    description: p.description,
    featuredImage: p.featuredImage,
    images: (p.images?.edges || []).map((e) => e.node),
    priceRange: p.priceRange,
    tags: p.tags || [],
    availableForSale: p.availableForSale,
    options: p.options || [],
    variants: (p.variants?.edges || []).map((e) => e.node),
  };
}

const PRODUCT_FRAGMENT = `
  id
  handle
  title
  productType
  description
  tags
  availableForSale
  featuredImage { url altText }
  images(first: 6) { edges { node { url altText } } }
  priceRange { minVariantPrice { amount currencyCode } }
  options { name values }
  variants(first: 20) {
    edges { node { id title availableForSale price { amount currencyCode } } }
  }
`;

export async function getProducts() {
  if (!isShopifyConfigured) return MOCK_PRODUCTS;
  try {
    const data = await shopifyFetch(`
      query { products(first: 24) { edges { node { ${PRODUCT_FRAGMENT} } } } }
    `);
    return data.products.edges.map((e) => normalizeProduct(e.node));
  } catch (e) {
    console.error("getProducts fell back to mock:", e.message);
    return MOCK_PRODUCTS;
  }
}

export async function getProduct(handle) {
  if (!isShopifyConfigured) return findMockProduct(handle);
  try {
    const data = await shopifyFetch(
      `query ($handle: String!) { product(handle: $handle) { ${PRODUCT_FRAGMENT} } }`,
      { handle }
    );
    return normalizeProduct(data.product);
  } catch (e) {
    console.error("getProduct fell back to mock:", e.message);
    return findMockProduct(handle);
  }
}
