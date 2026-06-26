import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/shopify";
import { formatMoney } from "@/lib/format";
import ProductForm from "@/components/ProductForm";

export async function generateMetadata({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  return { title: product ? `${product.title} — Libersens` : "Libersens" };
}

export default async function ProductPage({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  return (
    <section className="section light">
      <div className="wrap product">
        <div className="product__media">
          <img
            src={product.featuredImage?.url}
            alt={product.featuredImage?.altText || product.title}
          />
        </div>

        <div className="product__info">
          <p className="breadcrumb">
            <Link href="/shop">Shop</Link> / {product.title}
          </p>
          <h1>{product.title}</h1>
          {product.subtitle && (
            <p className="muted" style={{ marginTop: 10 }}>{product.subtitle}</p>
          )}
          <p className="product__price">
            {formatMoney(
              product.priceRange.minVariantPrice.amount,
              product.priceRange.minVariantPrice.currencyCode
            )}
          </p>
          <p className="product__desc">{product.description}</p>
          <ProductForm product={product} />
          <p className="cart__note" style={{ textAlign: "left", marginTop: 18 }}>
            Discreet packaging · Neutral billing name · 30-day return
          </p>
        </div>
      </div>
    </section>
  );
}
