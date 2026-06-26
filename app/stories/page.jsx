import Reveal from "@/components/Reveal";

export const metadata = { title: "Stories — Libersens" };

const STORIES = [
  { tag: "Encounter", title: "The first evening", body: "What it's like the night she arrives — unboxing, the first voice, the first silence she chooses to keep." },
  { tag: "Field note", title: "On mimetic motion", body: "How movement learned from being held becomes a language two people can share without words." },
  { tag: "Letter", title: "Built mind-first", body: "Why we engineered the intelligence before the body — and what that changes about wanting." },
];

export default function StoriesPage() {
  return (
    <section className="section light">
      <div className="wrap page-head">
        <span className="eyebrow muted">Encounters & Stories</span>
        <h1>Close reading.</h1>
        <p>Dispatches from the lab and the bedroom. Field notes on desire, design, and the presence we're building.</p>
      </div>
      <div className="wrap" style={{ paddingBottom: 120 }}>
        <div style={{ display: "grid", gap: 1, gridTemplateColumns: "1fr" }}>
          {STORIES.map((s, i) => (
            <Reveal key={s.title} delay={i}>
              <article style={{ borderTop: "1px solid rgba(10,10,11,0.12)", padding: "44px 0", display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
                <span className="eyebrow muted">{s.tag}</span>
                <div>
                  <h2 style={{ fontWeight: 400, fontSize: "clamp(24px,3vw,40px)", letterSpacing: "-0.02em", margin: "0 0 14px" }}>{s.title}</h2>
                  <p className="muted" style={{ maxWidth: "52ch", lineHeight: 1.6, margin: 0 }}>{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
