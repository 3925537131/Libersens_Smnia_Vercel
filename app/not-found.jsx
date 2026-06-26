import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section light" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(60px,14vw,160px)", fontWeight: 400, letterSpacing: "-0.04em", color: "var(--pink-soft)", margin: 0 }}>404</h1>
        <p className="muted" style={{ marginBottom: 28 }}>This page stepped out of the room.</p>
        <Link href="/" className="btn">Back home</Link>
      </div>
    </section>
  );
}
