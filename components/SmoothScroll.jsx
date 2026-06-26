"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Adds the slowed, inertial wheel-scroll feel (à la somnia-web-phi.vercel.app).
// Lenis drives the real scroll position, so position:sticky, anchor links and
// IntersectionObserver-based fade-ins all keep working.
export default function SmoothScroll() {
  useEffect(() => {
    // Respect users who prefer reduced motion — skip smoothing entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let raf;
    function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // Smoothly handle in-page anchor links (e.g. the hero scroll cue → #overview).
    function onAnchorClick(e) {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -76 });
    }
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
