"use client";

import { useCart } from "./CartProvider";
import { CloseIcon } from "./icons";
import { formatMoney } from "@/lib/format";

export default function CartDrawer() {
  const { lines, isOpen, close, total, currency, updateQty, removeItem } = useCart();

  function checkout() {
    // With a live Shopify Storefront cart, swap this for the cart's checkoutUrl.
    alert("Checkout connects to Shopify once Storefront credentials are set.");
  }

  return (
    <>
      <div className={`cart-overlay ${isOpen ? "open" : ""}`} onClick={close} />
      <aside className={`cart ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <div className="cart__head">
          <h3>Your bag {lines.length > 0 && `(${lines.length})`}</h3>
          <button className="cart__close" aria-label="Close cart" onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <div className="cart__body">
          {lines.length === 0 ? (
            <p className="cart__empty">Your bag is empty.<br />The bedroom awaits.</p>
          ) : (
            lines.map((l) => (
              <div className="cart-line" key={l.variantId}>
                <img className="cart-line__img" src={l.image || "/img/product-aura.svg"} alt={l.title} />
                <div>
                  <p className="cart-line__title">{l.title}</p>
                  {l.variantTitle && l.variantTitle !== "Default" && (
                    <span className="cart-line__variant">{l.variantTitle}</span>
                  )}
                  <div className="cart-line__qty">
                    <button onClick={() => updateQty(l.variantId, l.qty - 1)} aria-label="Decrease">−</button>
                    <span>{l.qty}</span>
                    <button onClick={() => updateQty(l.variantId, l.qty + 1)} aria-label="Increase">+</button>
                  </div>
                  <button className="cart-line__remove" onClick={() => removeItem(l.variantId)}>Remove</button>
                </div>
                <div className="cart-line__price">{formatMoney(parseFloat(l.price) * l.qty, l.currency)}</div>
              </div>
            ))
          )}
        </div>

        {lines.length > 0 && (
          <div className="cart__foot">
            <div className="cart__total">
              <span>Subtotal</span>
              <span>{formatMoney(total, currency)}</span>
            </div>
            <button className="btn" onClick={checkout}>Checkout</button>
            <p className="cart__note">Discreet packaging · Neutral billing name</p>
          </div>
        )}
      </aside>
    </>
  );
}
