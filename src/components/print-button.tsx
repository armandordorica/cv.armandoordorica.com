"use client";

export function PrintButton() {
  return (
    <button className="print-button" onClick={() => window.print()} type="button">
      <span>Print profile</span>
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M5 7V2h10v5M5 14H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M5 11h10v7H5v-7Z" />
      </svg>
    </button>
  );
}
