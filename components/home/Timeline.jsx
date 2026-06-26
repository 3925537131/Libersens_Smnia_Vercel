import Reveal from "../Reveal";

const DATES = [
  {
    title: "Presale — August 2026",
    body: "Reservations open exclusively at libersens.com. The first run is limited to 1,000 units worldwide.",
  },
  {
    title: "Delivery — Q2 2027",
    body: "First deliveries arrive in a plain box, with a neutral billing name. United States, then Japan, then Europe.",
  },
];

export default function Timeline() {
  return (
    <section className="section light timeline">
      <div className="wrap timeline__head">
        <div className="timeline__title">
          <span className="eyebrow muted">The road</span>
          <Reveal><h2 style={{ margin: 0 }}>Two dates that matter.</h2></Reveal>
        </div>
        <div className="dates">
          {DATES.map((d, i) => (
            <Reveal className="date" key={d.title} delay={i}>
              <h4>{d.title}</h4>
              <p className="muted">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
