import { academics, currently, likes, links } from "@/lib/content";
import { MaskHeading } from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <>
      <section id="about" className="border-t border-ink py-24 md:py-36">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <SectionLabel n="03" label="About me" />
            </div>
            <div className="lg:col-span-9">
              <MaskHeading
                lines={["Behind", "the build."]}
                className="text-[clamp(2.6rem,6.5vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.045em]"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="max-w-[34rem] space-y-6 text-xl leading-[1.45] lg:col-span-5 lg:col-start-4">
              <p>
                I&apos;m Chantele, a final-year Diploma in ICT student at Sol
                Plaatje University who genuinely enjoys figuring out how things
                work.
              </p>
              <p>
                I&apos;m interested in software development, backend systems
                and the space between an idea and a working product. So far
                that has meant REST APIs with Java and Spring Boot,
                database-driven apps with MySQL, and web apps with Django and
                Next.js.
              </p>
              <p>
                I&apos;m still learning. I&apos;m still experimenting. And I&apos;m
                still figuring out better ways to build.
              </p>
              <p className="font-hand text-3xl leading-tight text-burnt">
                And honestly, I&apos;m enjoying the process.
              </p>
              <p className="pt-2 text-base">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link font-semibold"
                >
                  Explore my GitHub ↗︎
                </a>
              </p>
            </div>

            <div className="space-y-12 lg:col-span-4 lg:col-start-9">
              <div className="border border-ink bg-paper p-6 shadow-[6px_6px_0_0_var(--ink)]">
                <p className="inline bg-sun px-2 font-hand text-2xl">
                  currently
                </p>
                <dl className="mt-5">
                  {currently.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-col gap-0.5 border-t border-ink/25 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <dt className="font-bold">{label}</dt>
                      <dd className="text-muted sm:text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.08em]">
                  Results so far
                </h3>
                <dl className="mt-4">
                  {academics.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-baseline gap-3 py-2"
                    >
                      <dt>{label}</dt>
                      <span
                        aria-hidden="true"
                        className="flex-1 translate-y-[-0.2em] border-b border-dotted border-ink/50"
                      />
                      <dd className="text-2xl font-extrabold tracking-[-0.03em]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A little personality */}
      <section
        aria-label="A little personality"
        className="overflow-hidden border-y border-ink bg-sun py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <p className="font-hand text-3xl">off the clock</p>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-[0.35em] text-[clamp(2.75rem,10vw,9rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">
            {["tea", "code", "debug", "repeat <3"].map((word, i, all) => (
              <span key={word} className="flex items-baseline gap-[0.35em]">
                <span className="inline-block transition-transform duration-300 hover:-rotate-2 hover:translate-x-1">
                  {word}
                </span>
                {i < all.length - 1 && (
                  <span aria-hidden="true" className="font-light text-ink/40">
                    /
                  </span>
                )}
              </span>
            ))}
          </p>

          <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-ink pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {likes.map(([label, text]) => (
              <div key={label}>
                <dt className="font-hand text-3xl">{label}</dt>
                <dd className="mt-1 leading-snug">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
