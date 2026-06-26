// Libersens mark — a circle with a sweeping orbit line (echoes the Somnia mark).
export default function Mark({ className = "mark" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 20c4 4 18 4 22-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="3.4" fill="currentColor" />
    </svg>
  );
}
