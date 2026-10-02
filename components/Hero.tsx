import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Flower, CodeTag, Note, Palette, Sparkle, Teacup } from "./Stickers";

const name = "chantele".split("");
const loop = ["building", "learning", "debugging", "tea break"];

function Sticker({ children, className, d, dur = 6, rot = 5 }: { children: ReactNode; className: string; d: number; rot?: number; dur?: number }) {
  return (
    <span aria-hidden="true" className={`sticker pop absolute ${className}`} style={{ "--d": d } as CSSProperties}>
      <span className="float block" style={{ "--dur": `${dur}s`, "--rot": `${rot}deg` } as CSSProperties}>
        {children}
      </span>
    </span>
  );
}

function Marquee() {
  const half = Array.from({ length: 2 }).flatMap(() => loop);
  return (
    <div className="marquee overflow-hidden border-y border-ink bg-ink text-paper">
      <p className="sr-only">Building, learning, debugging, tea break, repeat.</p>
      <div className="marquee-track py-4" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold leading-none tracking-[-0.03em]">
            {half.map((word, i) => (
              <span key={i} className="flex items-center">
                <span>{word}</span>
                <span className="px-5 text-sun md:px-8">✿</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="flex min-h-svh flex-col bg-blush pt-16">
      <div className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col items-center justify-center px-6 py-12 text-center md:px-10">
        <p className="hero-in font-hand text-3xl text-burnt md:text-4xl" style={{ "--d": 150 } as CSSProperties}>
          <span className="inline-block -rotate-3">hi, welcome! I&apos;m</span>
        </p>

        <div className="relative mb-20 mt-3 w-fit md:mb-28">
          <h1 aria-label="Chantele" className="flex text-[clamp(3.25rem,18vw,19rem)] font-extrabold leading-[0.8] tracking-[-0.055em]">
            {name.map((letter, i) => (
              <span key={i} className="rise" aria-hidden="true">
                <span style={{ "--d": 250 + i * 70 } as CSSProperties}>
                  <span className="letter">{letter}</span>
                </span>
              </span>
            ))}
          </h1>

          <Sticker d={900} dur={7} className="-left-[3%] -top-[42%]"><Flower className="w-14 sm:w-24 lg:w-36" /></Sticker>
          <Sticker d={1000} dur={6} rot={-6} className="-right-[2%] -top-[52%]"><Teacup className="w-14 sm:w-24 lg:w-36" /></Sticker>
          <Sticker d={1100} dur={5} className="left-[44%] -top-[40%]"><Sparkle className="w-7 sm:w-10 lg:w-14" /></Sticker>
          <Sticker d={1200} dur={6.5} rot={-7} className="-bottom-[44%] -left-[5%]"><Note className="w-12 sm:w-20 lg:w-32" /></Sticker>
          <Sticker d={1300} dur={7.5} className="-bottom-[40%] left-[38%]"><CodeTag className="w-14 sm:w-24 lg:w-32" /></Sticker>
          <Sticker d={1400} dur={6} rot={6} className="-bottom-[46%] -right-[4%]"><Palette className="w-12 sm:w-20 lg:w-32" /></Sticker>
        </div>

        <div className="hero-in max-w-3xl" style={{ "--d": 1600 } as CSSProperties}>
          <p className="text-[clamp(1.75rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            building software with curiosity.
          </p>
          <p className="mt-4 text-xl leading-snug">
            Final-year ICT student. Software developer <span className="in-progress font-semibold">in progress.</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="#work" className="border border-ink bg-ink px-6 py-3 font-semibold text-paper transition-colors duration-200 hover:border-burnt hover:bg-burnt">
              See my work
            </Link>
            <a href="mailto:chantelemucuio@gmail.com" className="border border-ink bg-paper px-6 py-3 font-semibold transition-colors duration-200 hover:bg-ink hover:text-paper">
              Let&apos;s talk
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">Java · Python · Spring Boot · Django · Next.js</p>
          <p className="mt-2 font-hand text-2xl text-burnt">also fluent in &ldquo;have you tried turning it off and on again?&rdquo;</p>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
