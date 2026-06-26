# Libersens

Brand site for **Libersens** — intimacy robotics, "Desire, engineered."
Built with **Next.js 15 (App Router) + React 19**, deployed on **Vercel**, with
**Shopify** as the headless commerce backend.

The design is an editorial clone of the Somnia reference aesthetic: near-black
`#0a0a0b`, cream `#f0f0f2`, hot-pink `#f24a7d`, Helvetica-Neue typography,
scroll-reveal animations, and a slide-out cart.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Connecting Shopify (the backend)

The catalogue, product pages, and cart all run on **auto-generated demo data**
until you provide Storefront API credentials. To go live:

1. In Shopify admin → **Settings → Apps and sales channels → Develop apps** →
   create an app → enable the **Storefront API** and copy the public access token.
2. Copy `.env.example` to `.env` (locally) and add the same two variables in the
   **Vercel project → Settings → Environment Variables**:

   ```
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=xxxxxxxxxxxxxxxx
   ```

3. Redeploy. `lib/shopify.js` detects the credentials and pulls live products;
   if a request fails it transparently falls back to the demo data so the site
   never breaks.

To complete real checkout, swap the `checkout()` stub in
`components/CartDrawer.jsx` for a Storefront `cartCreate`/`cartLinesAdd` mutation
and redirect to the returned `checkoutUrl`. The cart state layer
(`components/CartProvider.jsx`) is already structured for this.

## Structure

```
app/                 routes (home, /shop, /products/[handle], /stories, /about)
components/          Header, Footer, CartDrawer, ProductForm, Reveal, icons…
components/home/     homepage sections (Hero, Statement, Beliefs, BigType…)
lib/                 shopify.js (API + fallback), mock-data.js, format.js
public/img/          placeholder product art (SVG)
```

## Deploy

Push to the connected GitHub repo; Vercel builds automatically. Set the two env
vars above in the Vercel dashboard for live commerce.
