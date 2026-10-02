import type { CSSProperties } from "react";

const ink = "#2a1b3d";
const petals = [0, 60, 120, 180, 240, 300];

type FlowerProps = {
  x: number;
  y: number;
  s: number;
  petal: string;
  heart: string;
  d: number;
};

const flowers: FlowerProps[] = [
  { x: -4, y: -26, s: 1.1, petal: "#ffffff", heart: "#ffd23f", d: 1100 },
  { x: 20, y: -42, s: 0.7, petal: "#ff7a3d", heart: "#ffffff", d: 1250 },
  { x: 58, y: -38, s: 0.95, petal: "#6c3ce0", heart: "#ffd23f", d: 1400 },
  { x: 90, y: -20, s: 1.2, petal: "#ffd23f", heart: "#e5304f", d: 1200 },
  { x: -7, y: 62, s: 0.8, petal: "#e5304f", heart: "#ffd23f", d: 1500 },
  { x: 34, y: 84, s: 0.65, petal: "#ffffff", heart: "#ff7a3d", d: 1650 },
  { x: 84, y: 70, s: 1, petal: "#ffffff", heart: "#6c3ce0", d: 1350 },
];

const glyphs = [
  { t: "\u266a", x: 10, y: 20, d: 1800, c: "#6c3ce0" },
  { t: "</>", x: 45, y: -12, d: 2600, c: "#2a1b3d" },
  { t: "\u266b", x: 72, y: 12, d: 3400, c: "#6c3ce0" },
  { t: "{ }", x: 96, y: 58, d: 4200, c: "#2a1b3d" },
  { t: "\u266c", x: 22, y: 92, d: 5000, c: "#6c3ce0" },
  { t: "=>", x: 62, y: 98, d: 5800, c: "#2a1b3d" },
];

export default function Garden() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-3 -inset-y-10 md:-inset-x-8"
    >
      {flowers.map((f) => (
        <div
          key={`${f.x}-${f.y}`}
          className="bloom absolute"
          style={
            {
              left: `${f.x}%`,
              top: `${f.y}%`,
              width: `calc(clamp(2.5rem, 7vw, 6.5rem) * ${f.s})`,
              "--d": f.d,
            } as CSSProperties
          }
        >
          <svg
            viewBox="0 0 100 100"
            className="sway block w-full"
            style={{ animationDuration: `${5 + f.s * 2}s` }}
          >
            {petals.map((r) => (
              <ellipse
                key={r}
                cx="50"
                cy="27"
                rx="14"
                ry="23"
                fill={f.petal}
                stroke={ink}
                strokeWidth="3"
                transform={`rotate(${r} 50 50)`}
              />
            ))}
            <circle cx="50" cy="50" r="13" fill={f.heart} stroke={ink} strokeWidth="3" />
          </svg>
        </div>
      ))}

      {glyphs.map((g) => (
        <span
          key={g.t}
          className="note absolute font-bold"
          style={
            {
              left: `${g.x}%`,
              top: `${g.y}%`,
              color: g.c,
              fontSize: "clamp(1.4rem, 3.4vw, 2.8rem)",
              "--d": g.d,
            } as CSSProperties
          }
        >
          {g.t}
        </span>
      ))}
    </div>
  );
}
