"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "libersens-cart";

export function CartProvider({ children }) {
  const [lines, setLines] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted cart on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setLines(JSON.parse(saved));
    } catch {}
    setHydrated(true);
  }, []);

  // Persist on change.
  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addItem = useCallback((item) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.variantId === item.variantId);
      if (i > -1) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + (item.qty || 1) };
        return next;
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
    setIsOpen(true);
  }, []);

  const updateQty = useCallback((variantId, qty) => {
    setLines((prev) =>
      prev
        .map((l) => (l.variantId === variantId ? { ...l, qty } : l))
        .filter((l) => l.qty > 0)
    );
  }, []);

  const removeItem = useCallback((variantId) => {
    setLines((prev) => prev.filter((l) => l.variantId !== variantId));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const total = lines.reduce((s, l) => s + parseFloat(l.price) * l.qty, 0);
  const currency = lines[0]?.currency || "USD";

  const value = {
    lines, count, total, currency, isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    addItem, updateQty, removeItem, clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
