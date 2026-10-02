const s = { stroke: "#1d1c1a", strokeWidth: 4, strokeLinejoin: "round", strokeLinecap: "round" } as const;

export function Flower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g className="spin">
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse key={r} cx="50" cy="26" rx="13" ry="19" fill="#ff6b9a" transform={`rotate(${r} 50 50)`} {...s} strokeWidth={3} />
        ))}
        <circle cx="50" cy="50" r="12" fill="#f0c230" {...s} strokeWidth={3} />
      </g>
    </svg>
  );
}

export function Teacup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g className="steam" stroke="#1d1c1a" strokeWidth="4" strokeLinecap="round">
        <path d="M34 36 Q28 28 34 20 Q40 12 34 6" />
        <path d="M50 36 Q44 28 50 20 Q56 12 50 6" />
        <path d="M66 36 Q60 28 66 20 Q72 12 66 6" />
      </g>
      <path d="M78 54 Q96 54 94 66 Q92 76 76 74" {...s} />
      <path d="M18 46 H78 V62 Q78 82 48 82 Q18 82 18 62 Z" fill="#8fd16a" {...s} />
      <ellipse cx="48" cy="87" rx="34" ry="6" fill="#f0c230" {...s} strokeWidth={3} />
    </svg>
  );
}

export function Note({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M34 72 V30 L76 22 V64" {...s} strokeWidth={5} />
      <path d="M34 30 L76 22 V36 L34 44 Z" fill="#1d1c1a" {...s} />
      <ellipse cx="25" cy="74" rx="12" ry="9" fill="#7cc4f2" {...s} />
      <ellipse cx="67" cy="66" rx="12" ry="9" fill="#7cc4f2" {...s} />
    </svg>
  );
}

export function Palette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M50 10 C20 10 6 34 10 56 C14 82 40 92 54 88 C64 85 58 72 66 68 C76 64 92 70 92 52 C92 28 76 10 50 10Z" fill="#fff5e6" {...s} />
      <circle cx="30" cy="40" r="7" fill="#ff6b9a" {...s} strokeWidth={3} />
      <circle cx="52" cy="28" r="7" fill="#f0c230" {...s} strokeWidth={3} />
      <circle cx="74" cy="40" r="7" fill="#7cc4f2" {...s} strokeWidth={3} />
      <circle cx="28" cy="62" r="7" fill="#8fd16a" {...s} strokeWidth={3} />
    </svg>
  );
}

export function CodeTag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 70" className={className} fill="none">
      <rect x="6" y="6" width="88" height="58" rx="10" fill="#1d1c1a" stroke="#1d1c1a" strokeWidth="4" />
      <text x="50" y="46" textAnchor="middle" fontSize="30" fontWeight="800" fill="#f0c230" fontFamily="ui-monospace, monospace">
        {"</>"}
      </text>
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M50 6 Q54 46 94 50 Q54 54 50 94 Q46 54 6 50 Q46 46 50 6Z" fill="#f0c230" {...s} />
    </svg>
  );
}
