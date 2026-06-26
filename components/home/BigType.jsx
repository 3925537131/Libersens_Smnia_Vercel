import Reveal from "../Reveal";

export default function BigType() {
  return (
    <section className="section dark bigtype">
      <div className="bigtype__cue">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f7bcd0" strokeWidth="1.5">
          <path d="M12 21s-7-4.4-9.3-8.2C1 9.9 2.4 6 6 6c2 0 3.2 1.1 4 2.3C10.8 7.1 12 6 14 6c3.6 0 5 3.9 3.3 6.8C19 16.6 12 21 12 21Z" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="bigtype__label muted">Meet her — the</p>
      <Reveal>
        <h2 className="bigtype__word">Love<br />Machine</h2>
      </Reveal>
    </section>
  );
}
