import Reveal from "../Reveal";

export default function Statement() {
  return (
    <section id="overview" className="section dark statement">
      <div className="wrap statement__grid">
        <div className="index">
          <span className="num">00</span>
          <span className="lbl muted">Overview</span>
        </div>
        <Reveal>
          <h2>
            Libersens is the first lab to engineer intimacy robotics — an
            intelligent presence, built mind-first, designed to be wanted.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
