"use client";

import { useState } from "react";
import { areas } from "@/lib/content";

export default function Areas() {
  const [active, setActive] = useState(0);
  const current = areas[active];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <p className="mb-6 font-hand text-2xl text-burnt">
          hover or tap an area to look closer ↓
        </p>

        <ul className="border-t border-ink">
          {areas.map((area, i) => {
            const isActive = i === active;
            return (
              <li key={area.title} className="border-b border-ink">
                <button
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline gap-4 py-5 text-left md:gap-6 md:py-6"
                >
                  <span
                    className={`w-8 shrink-0 font-hand text-2xl transition-colors ${
                      isActive ? "text-burnt" : "text-faint"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`block flex-1 transition-all duration-300 ease-out ${
                      isActive ? "translate-x-3" : "group-hover:translate-x-1"
                    }`}
                  >
                    <span
                      className={`block text-[clamp(2rem,5vw,4.25rem)] font-extrabold leading-none tracking-[-0.04em] transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-faint"
                      }`}
                    >
                      {area.title}
                    </span>
                    <span className="mt-2 block max-w-md text-[0.95rem] text-muted">
                      {area.summary}
                    </span>
                  </span>
                </button>

                {/* Small screens: the detail opens inside the row */}
                {isActive && (
                  <div className="swap pb-6 pl-12 lg:hidden">
                    <p className="max-w-md text-muted">{area.detail}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-lg font-semibold">
                      {area.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Large screens: a panel that changes as you move through the list */}
      <aside
        aria-live="polite"
        className="relative hidden lg:col-span-5 lg:block"
      >
        <div className="sticky top-28 border border-ink bg-sun p-8 shadow-[8px_8px_0_0_var(--ink)]">
          <div key={current.title} className="swap">
            <p className="font-hand text-2xl">inside: {current.title.toLowerCase()}</p>
            <p className="mt-4 max-w-sm text-lg leading-snug">{current.detail}</p>
            <ul className="mt-8 flex flex-col text-[1.7rem] font-extrabold leading-tight tracking-[-0.03em]">
              {current.tools.map((tool) => (
                <li key={tool} className="border-t border-ink/30 py-1.5">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
