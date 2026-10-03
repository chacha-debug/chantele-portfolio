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

  // Highlight the section currently in view.
  useEffect(() => {
    if (!home) return;

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach((section) => io.observe(section));

    const hero = document.getElementById("home");

    const heroIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive("");
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    if (hero) {
      heroIo.observe(hero);
    }

    return () => {
      io.disconnect();
      heroIo.disconnect();
    };
  }, [home]);

  // Mobile menu behaviour.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    // Prevent the page behind the menu from scrolling.
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Close mobile menu if the screen becomes desktop-sized.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur-md">
      {/* Skip link */}
      <a
        href="#main"
        className="absolute left-4 top-3 -translate-y-20 bg-ink px-3 py-2 text-sm text-paper focus:translate-y-0"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6 md:px-10"
      >
        {/* Logo / Name */}
        <Link
          href={home ? "#home" : "/"}
          onClick={() => setOpen(false)}
          className="text-lg font-extrabold tracking-[-0.04em] sm:text-xl"
        >
          chantele mucuio
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-9 md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`${prefix}#${item.id}`}
                aria-current={
                  active === item.id ? "location" : undefined
                }
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

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="border border-ink px-4 py-2 text-sm transition-colors duration-200 active:bg-ink active:text-paper md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ink text-paper transition-all duration-300 ease-out md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="min-h-full px-5 py-8 sm:px-6 sm:py-10">
          <ul className="flex flex-col">
            {items.map((item, i) => (
              <li
                key={item.id}
                className="border-b border-paper/20"
              >
                <Link
                  href={`${prefix}#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 py-5 text-3xl font-bold tracking-[-0.03em] sm:text-4xl"
                >
                  <span className="font-hand text-xl text-burnt-bright sm:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border border-paper px-6 py-3 transition-colors duration-200 active:bg-paper active:text-ink"
          >
            Resume ↗︎
          </a>
        </div>
      </div>
    </header>
  );
}