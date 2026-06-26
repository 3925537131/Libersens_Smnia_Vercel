"use client";

import { useState } from "react";
import Reveal from "../Reveal";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e) {
    e.preventDefault();
    // Wire to Shopify/Klaviyo here; for now we just acknowledge.
    if (email) setDone(true);
  }

  return (
    <>
      <div className="band" />
      <section className="section dark signup">
        <div className="wrap">
          <p className="signup__eyebrow">Stay close.</p>
          <Reveal><h2 style={{ margin: "0 0 40px" }}>Tell me first.</h2></Reveal>
          {done ? (
            <p style={{ color: "var(--pink-soft)" }}>You're on the list. We'll be discreet.</p>
          ) : (
            <form className="signup__form" onSubmit={submit}>
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn">Notify me</button>
            </form>
          )}
          <p className="signup__note">By subscribing you confirm you're 18+</p>
        </div>
      </section>
    </>
  );
}
