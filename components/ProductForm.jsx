"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import { formatMoney } from "@/lib/format";

export default function ProductForm({ product }) {
  const { addItem } = useCart();
  const [variant, setVariant] = useState(product.variants[0]);
  const hasChoices = product.variants.length > 1;

  function add() {
    addItem({
      variantId: variant.id,
      title: product.title,
      variantTitle: variant.title,
      price: variant.price.amount,
      currency: variant.price.currencyCode,
      image: product.featuredImage?.url,
    });
  }

  return (
    <>
      {hasChoices && (
        <div className="product__options">
          <p className="label">{product.options[0]?.name || "Option"}</p>
          <div className="swatches">
            {product.variants.map((v) => (
              <button
                key={v.id}
                className={`swatch ${v.id === variant.id ? "active" : ""}`}
                onClick={() => setVariant(v)}
              >
                {v.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <button className="btn" onClick={add} disabled={!variant.availableForSale}>
        {variant.availableForSale ? "Add to bag" : "Sold out"} ·{" "}
        {formatMoney(variant.price.amount, variant.price.currencyCode)}
      </button>
    </>
  );
}
