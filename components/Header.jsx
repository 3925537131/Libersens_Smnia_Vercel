"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Mark from "./Mark";
import { useCart } from "./CartProvider";
import { CartIcon, SearchIcon, BurgerIcon, CloseIcon } from "./icons";

// Each item rolls to its `alt` word on hover (à la somnia: Stories → Mythos).
const NAV = [
  { label: "Love Machine", alt: "Her", href: "/products/model-l" },
  { label: "Shop", alt: "Shells", href: "/shop" },
  { label: "Encounters", alt: "Closer", href: "/stories" },
  { label: "Stories", alt: "Mythos", href: "/stories" },
  { label: "About", alt: "Origin", href: "/about" },
];

function NavLink({ item, onClick }) {
  return (
    <Link href={item.href} className="nav__item" onClick={onClick}>
      <span className="nav__roll">
        <span>{item.label}</span>
        <span aria-hidden="true">{item.alt}</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const { count, open } = useCart();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
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

  // Search popup: focus on open, close on outside-click or Escape.
  useEffect(() => {
    if (!searchOpen) return;
    searchInputRef.current?.focus();
    const onDown = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setSearchOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [searchOpen]);

  function onSearchSubmit(e) {
    e.preventDefault();
    const q = query.trim();
    setSearchOpen(false);
    // Search isn't wired to a backend yet — route to the shop with the query.
    router.push(q ? `/shop?q=${encodeURIComponent(q)}` : "/shop");
  }

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
              <NavLink key={n.label} item={n} />
            ))}
          </nav>

          <div className="header__actions">
            <div className="search" ref={searchRef}>
              <button
                aria-label="Search"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen((v) => !v)}
              >
                {searchOpen ? <CloseIcon /> : <SearchIcon />}
              </button>
              <form
                className={`search__pop ${searchOpen ? "open" : ""}`}
                onSubmit={onSearchSubmit}
                role="search"
              >
                <SearchIcon />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Libersens…"
                  aria-label="Search Libersens"
                />
              </form>
            </div>
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
