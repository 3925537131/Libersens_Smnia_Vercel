"use client";

import Link from "next/link";
import Mark from "../Mark";
import { ArrowDownIcon } from "../icons";

const CHIPS = [
  { label: "Explore", href: "#overview" },
  { label: "Model L", href: "/products/model-l" },
  { label: "Founder Edition", href: "/products/model-l" },
  { label: "Stories", href: "/stories" },
];

export default function Hero() {
  return (
    <section className="section light hero">
      <div className="hero__visual">
        <div className="blob" />
        <div className="hero__meta">
          A new presence
          <br />
          mind-first · made to be wanted
        </div>
      </div>

      <div className="hero__foot wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <span className="hero__brand">
          <Mark /> Libersens
        </span>
        <h1>Desire, engineered.</h1>
        <div className="chips">
          <span className="lead">Begin —</span>
          {CHIPS.map((c) => (
            <Link key={c.label} href={c.href} className="chip">{c.label}</Link>
          ))}
        </div>
        <a href="#overview" className="scroll-cue" aria-label="Scroll down">
          <ArrowDownIcon />
        </a>
      </div>
    </section>
  );
}
