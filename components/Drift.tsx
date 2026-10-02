"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Publishes --p (0 → 1) on its wrapper as the element crosses the viewport.
 * Children opt in with the .drift-y or .drift-img classes (see globals.css).
 */
export default function Drift({
  children,
  className = "",
  amount = 40,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let visible = false;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - rect.top) / (vh + rect.height);
      el.style.setProperty("--p", Math.min(1, Math.max(0, p)).toFixed(4));
    };

    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) onScroll();
      },
      { rootMargin: "100px 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`drift ${className}`}
      style={{ "--amt": `${amount}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}
