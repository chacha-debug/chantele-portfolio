"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "@/lib/content";

const items = [
  { id: "what-i-do", label: "What I do" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Say hello" },
];

export default function Nav({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const prefix = home ? "" : "/";

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (!home) return;
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => io.observe(section));

    const hero = document.getElementById("home");
    const heroIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive("");
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    if (hero) heroIo.observe(hero);

    return () => {
      io.disconnect();
      heroIo.disconnect();
    };
  }, [home]);

  // Mobile menu: lock scroll, close on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur-md">
      <a
        href="#main"
        className="absolute left-4 top-3 -translate-y-20 bg-ink px-3 py-2 text-sm text-paper focus:translate-y-0"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-6 md:px-10"
      >
        <Link
          href={home ? "#home" : "/"}
          onClick={() => setOpen(false)}
          className="text-xl font-extrabold tracking-[-0.04em]"
        >
          chantele
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`${prefix}#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                className={`u-link pb-0.5 text-[0.95rem] ${
                  active === item.id ? "u-link-on text-burnt" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-4 py-1.5 text-[0.95rem] transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="border border-ink px-4 py-1.5 text-sm md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink px-6 py-10 text-paper md:hidden dark-zone"
        >
          <ul className="flex flex-col">
            {items.map((item, i) => (
              <li key={item.id} className="border-b border-paper/20">
                <Link
                  href={`${prefix}#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5 text-4xl font-bold tracking-[-0.03em]"
                >
                  <span className="font-hand text-2xl text-burnt-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border border-paper px-6 py-3"
          >
            Resume ↗︎
          </a>
        </div>
      )}
    </header>
  );
}
