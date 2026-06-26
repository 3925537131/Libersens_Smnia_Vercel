import Reveal from "../Reveal";

const BELIEFS = [
  { num: "0.1", label: "Our belief", text: "Desire is not a problem to fix." },
  { num: "0.2", label: "Our design", text: "The bedroom. Nothing else." },
  { num: "0.3", label: "Our promise", text: "Discreet. Refundable. Patient." },
];

const META = [
  { k: "Embodied Intimacy", v: "A body that responds, not performs." },
  { k: "Mimetic Motion", v: "Movement learned from being held." },
  { k: "Love Machine", v: "Engineered to be wanted, never used." },
];

export default function Beliefs() {
  return (
    <section className="section dark beliefs">
      <div className="wrap">
        {BELIEFS.map((b, i) => (
          <Reveal key={b.num} className="belief" delay={i}>
            <div className="index">
              <span className="num">{b.num}</span>
              <span className="lbl muted">{b.label}</span>
            </div>
            <h3>{b.text}</h3>
          </Reveal>
        ))}

        <div className="meta">
          {META.map((m, i) => (
            <Reveal key={m.k} className="meta__item" delay={i}>
              <div className="rule" />
              <div className="k muted">{`0.4 / How we talk`}</div>
              <div style={{ fontSize: 18, margin: "4px 0 8px" }}>{m.k}</div>
              <div className="v muted">{m.v}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
