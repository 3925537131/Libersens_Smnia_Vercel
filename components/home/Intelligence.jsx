import Link from "next/link";
import Reveal from "../Reveal";

export default function Intelligence() {
  return (
    <section className="section light feature">
      <div className="wrap feature__grid">
        <div className="feature__title">
          <span className="eyebrow muted">Intelligence</span>
          <Reveal><h2 style={{ margin: "14px 0 0" }}>She reads the moment.</h2></Reveal>
        </div>
        <Reveal className="feature__body">
          <p className="muted">
            A perception hub reads warmth, weight, and rhythm. Voice is processed
            locally — nothing leaves the room. Safety monitoring runs underneath
            every gesture, always on, never seen.
          </p>
          <p className="muted">
            She learns the shape of your evenings and meets them. Updates arrive
            over the air, quietly, the way a presence should change: slowly, and
            for the better.
          </p>
          <div className="feature__specs">
            <span>22 kg</span>
            <span>22 DOF</span>
            <span>On-device voice</span>
            <span>OTA updates</span>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/products/model-l" className="link">
              <span className="dot" /> Meet Model L
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
