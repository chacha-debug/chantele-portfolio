"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Marks an element as "armed" (hidden) until it scrolls into view, then "in".
 * Anything already on screen at load is left alone, and reduced-motion users
 * never see the hidden state at all.
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) return;

    el.dataset.reveal = "armed";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "in";
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

/** A heading whose lines rise out of a mask, one after another. */
export function MaskHeading({
  lines,
  as: Tag = "h2",
  className = "",
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={line} className="ml">
            <span className="ml-in" style={{ "--i": i } as CSSProperties}>
              {line}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

/** Content that is uncovered with a left-to-right wipe. */
export function Wipe({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`wipe ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
