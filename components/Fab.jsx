"use client";

import { ChatIcon } from "./icons";

export default function Fab() {
  return (
    <button
      className="fab"
      aria-label="Talk to Libersens"
      onClick={() => alert("Concierge chat coming soon.")}
    >
      <ChatIcon />
    </button>
  );
}
