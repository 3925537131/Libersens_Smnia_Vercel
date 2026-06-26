import Reveal from "@/components/Reveal";

export const metadata = { title: "About — Libersens" };

export default function AboutPage() {
  return (
    <>
      <section className="section light">
        <div className="wrap page-head">
          <span className="eyebrow muted">About</span>
          <h1>A new presence.</h1>
          <p>Libersens is a lab engineering intimacy robotics — an intelligent presence, built mind-first, designed to be wanted, never used.</p>
        </div>
      </section>

      <section className="section dark statement">
        <div className="wrap statement__grid">
          <div className="index"><span className="num">00</span><span className="lbl muted">Mission</span></div>
          <Reveal>
            <h2>We believe desire is not a problem to fix. It is a relationship to design — patiently, discreetly, and on your terms.</h2>
          </Reveal>
        </div>
      </section>

      <section className="section light feature">
        <div className="wrap feature__grid">
          <div className="feature__title">
            <span className="eyebrow muted">Principles</span>
            <Reveal><h2 style={{ margin: "14px 0 0" }}>How we work.</h2></Reveal>
          </div>
          <Reveal className="feature__body">
            <p className="muted">Discreet by default — plain boxes, neutral billing, on-device voice. Nothing leaves the room.</p>
            <p className="muted">Refundable and patient — a 30-day return and a company that will never rush the moment.</p>
            <p className="muted">One room — the bedroom, and nothing else. Focus is the whole product.</p>
            <div className="feature__specs">
              <span>Founded 2026</span>
              <span>Mind-first</span>
              <span>18+</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
