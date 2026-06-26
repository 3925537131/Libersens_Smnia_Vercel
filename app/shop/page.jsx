import Link from "next/link";
import { getProducts } from "@/lib/shopify";
import { formatMoney } from "@/lib/format";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Shop — Libersens" };

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <section className="section light">
      <div className="wrap page-head">
        <span className="eyebrow muted">Shell Store</span>
        <h1>The collection.</h1>
        <p>Every Libersens object is engineered for one room. Choose your presence.</p>
      </div>

      <div className="wrap">
        <div className="grid-products">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i % 3}>
              <Link href={`/products/${p.handle}`} className="pcard">
                {p.tags?.[0] && <span className="pcard__tag">{p.tags[0]}</span>}
                <div className="pcard__media">
                  <img src={p.featuredImage?.url} alt={p.featuredImage?.altText || p.title} />
                </div>
                <h3 className="pcard__title">{p.title}</h3>
                <p className="pcard__sub">{p.subtitle}</p>
                <p className="pcard__price">
                  {formatMoney(
                    p.priceRange.minVariantPrice.amount,
                    p.priceRange.minVariantPrice.currencyCode
                  )}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
