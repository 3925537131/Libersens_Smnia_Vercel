"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [onDark, setOnDark] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();

  // Transparent header: sample the background sitting just below the bar and
  // flip the text to white over dark sections, dark over light ones.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let raf = null;

    const update = () => {
      raf = null;
      const x = Math.round(window.innerWidth / 2);
      const y = header.offsetHeight + 2;
      header.style.pointerEvents = "none";
      let el = document.elementFromPoint(x, y);
      header.style.pointerEvents = "";

      let dark = false;
      while (el) {
        const bg = getComputedStyle(el).backgroundColor;
        const m = bg.match(/rgba?\(([^)]+)\)/);
        if (m) {
          const p = m[1].split(",").map((n) => parseFloat(n));
          const a = p[3] === undefined ? 1 : p[3];
          if (a > 0.2) {
            const lum = 0.299 * p[0] + 0.587 * p[1] + 0.114 * p[2];
            dark = lum < 128;
            break;
          }
        }
        el = el.parentElement;
      }
      setOnDark(dark);
    };

    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };

    // Let the new route paint before sampling.
    const t = setTimeout(update, 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(t);
      if (raf != null) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <>
      <header ref={headerRef} className={`header ${onDark ? "header--on-dark" : ""}`}>
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
