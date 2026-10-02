"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("chantele-intro-seen");

    if (hasVisited) {
      setVisible(false);
      return;
    }

    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2100);

    const hideTimer = setTimeout(() => {
      sessionStorage.setItem("chantele-intro-seen", "true");
      setVisible(false);
    }, 2700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#f7f1e8] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        exiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full max-w-5xl px-6 text-center">
        <p className="animate-intro-fade text-[11px] font-medium uppercase tracking-[0.45em] text-[#756863]">
          Welcome
        </p>

        <div className="relative mt-8 inline-block">
          <h1 className="animate-intro-name text-[clamp(4rem,13vw,10rem)] font-semibold leading-none tracking-[-0.07em] text-[#241a17]">
            Chantele
            <span className="text-[#d9684a]">.</span>
          </h1>

          <span className="intro-underline absolute -bottom-4 left-1/2 h-[3px] w-[82%] -translate-x-1/2 origin-left rounded-full bg-[#241a17]" />
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#b0a29a]">
          <span>Building things</span>
          <span className="h-1 w-1 rounded-full bg-[#d9684a]" />
          <span>With curiosity</span>
        </div>
      </div>
    </div>
  );
}