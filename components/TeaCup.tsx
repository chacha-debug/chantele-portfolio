"use client";

import { useState } from "react";

export default function TeaCup() {
  const [cups, setCups] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setCups((n) => n + 1)}
      className="group flex flex-col items-center"
    >
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="w-28 transition-transform duration-300 group-hover:-rotate-6 group-active:scale-90 md:w-36"
      >
        <g fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round">
          <path className="steam" d="M42 40 C34 30 50 24 42 10" />
          <path className="steam" style={{ animationDelay: "-0.7s" }} d="M62 40 C54 30 70 24 62 10" />
        </g>
        <path d="M88 58 H98 C110 58 110 82 92 84" fill="none" stroke="#2a1b3d" strokeWidth="5" />
        <path d="M20 50 H90 V70 C90 92 74 104 55 104 C36 104 20 92 20 70 Z" fill="#fff" stroke="#2a1b3d" strokeWidth="4" />
        <ellipse cx="55" cy="50" rx="35" ry="6" fill="#b5651d" stroke="#2a1b3d" strokeWidth="4" />
        <path d="M55 88 C44 80 42 70 49 68 C52 67 55 70 55 70 C55 70 58 67 61 68 C68 70 66 80 55 88 Z" fill="#ff7bb0" />
        <ellipse cx="55" cy="108" rx="42" ry="7" fill="#ffd23f" stroke="#2a1b3d" strokeWidth="4" />
      </svg>
      <span className="font-hand text-2xl leading-none" aria-live="polite">
        cups poured: {cups}
        {cups >= 5 && " (send help)"}
      </span>
    </button>
  );
}
