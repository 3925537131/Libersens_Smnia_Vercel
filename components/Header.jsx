"use client";

import { useState } from "react";
import Link from "next/link";
import Mark from "./Mark";
import { useCart } from "./CartProvider";
import { CartIcon, SearchIcon, BurgerIcon, CloseIcon } from "./icons";

const NAV = [
  { label: "Love Machine", href: "/products/model-l" },
  { label: "Shop", href: "/shop" },
  { label: "Encounters", href: "/stories" },
  { label: "Stories", href: "/stories" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <button
            className="burger header__actions"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <BurgerIcon />
          </button>

          <Link href="/" className="logo">
            <Mark />
            <span>Libersens</span>
          </Link>

          <nav className="nav">
            {NAV.map((n) => (
              <Link key={n.label} href={n.href}>{n.label}</Link>
            ))}
          </nav>

          <div className="header__actions">
            <Link href="/shop" aria-label="Search"><SearchIcon /></Link>
            <button aria-label="Open cart" onClick={open}>
              <CartIcon />
              {count > 0 && <span className="cart-count">{count}</span>}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-menu__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <CloseIcon />
        </button>
        {NAV.map((n) => (
          <Link key={n.label} href={n.href} onClick={() => setMenuOpen(false)}>
            {n.label}
          </Link>
        ))}
      </div>
    </>
  );
}
