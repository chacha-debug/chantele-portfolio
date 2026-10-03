import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/content";
import { Footer } from "./Contact";
import Drift from "./Drift";
import Nav from "./Nav";
import { MaskHeading, Wipe } from "./Reveal";

const accentBg = {
  burnt: "bg-pink",
  sun: "bg-sky",
  brick: "bg-matcha",
} as const;

const h2 =
  "text-[clamp(2.25rem,4.6vw,4.25rem)] font-extrabold leading-[0.97] tracking-[-0.045em]";

function Section({
  children,
  first = false,
}: {
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <section className={`${first ? "" : "border-t border-ink"} py-20 md:py-28`}>
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">{children}</div>
    </section>
  );
}

export default function ProjectPage({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Nav />
      <main id="main" className="pt-16">
        {/* Header */}
        <section className="pb-16 pt-12 md:pb-24 md:pt-20">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10">
            <Link href="/#work" className="u-link text-sm font-semibold">
              ← All work
            </Link>

            <p className="mt-10 flex items-baseline gap-2 text-sm uppercase tracking-[0.08em]">
              <span className="font-hand text-2xl normal-case tracking-normal text-burnt">
                {project.number}
              </span>
              <span aria-hidden="true">/</span>
              {project.tag}
            </p>

            <h1 className="mt-5">
              {project.titleLines.map((line, i) => (
                <span key={line} className="rise block">
                  <span
                    className="block text-[clamp(3rem,10.5vw,10rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em]"
                    style={{ "--d": 100 + i * 120 } as React.CSSProperties}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <p className="max-w-xl text-2xl leading-snug lg:col-span-6">
                {project.description}
              </p>

              <div className="lg:col-span-4 lg:col-start-9">
                <ul className="flex flex-wrap gap-x-5 gap-y-1 font-semibold">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink bg-ink px-6 py-3 font-semibold text-paper transition-colors duration-200 hover:border-burnt hover:bg-burnt"
                  >
                    Live demo ↗︎
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink px-6 py-3 font-semibold transition-colors duration-200 hover:bg-ink hover:text-paper"
                  >
                    View source ↗︎
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot */}
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10">
            <div className="relative">
              <Wipe
                className={`absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4`}
              >
                <span className={`block h-full w-full ${accentBg[project.accent]}`} />
              </Wipe>
              <Drift className="relative">
                <Wipe delay={250}>
                  <div
                    className="relative overflow-hidden border border-ink bg-paper"
                    style={{
                      aspectRatio:
                        project.image.width / project.image.height / 0.95,
                    }}
                  >
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      className="drift-img absolute inset-x-0 -top-[2.5%] h-auto w-full object-cover"
                    />
                  </div>
                </Wipe>
              </Drift>
            </div>
          </div>
        </section>

        {/* Overview */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <p className="mb-5 text-sm uppercase tracking-[0.08em]">
                Overview
              </p>
              <MaskHeading lines={project.overview.heading} className={h2} />
            </div>
            <div className="space-y-10 lg:col-span-5 lg:col-start-8">
              {project.overview.blocks.map((block) => (
                <div key={block.label}>
                  <h3 className="inline bg-sun px-2 font-hand text-2xl">
                    {block.label}
                  </h3>
                  <p className="mt-4 max-w-xl text-xl leading-[1.45]">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Highlights */}
        <Section>
          <p className="mb-5 text-sm uppercase tracking-[0.08em]">
            {project.highlights.label}
          </p>
          <MaskHeading lines={project.highlights.heading} className={h2} />

          <ul className="mt-14 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
            {project.highlights.items.map((item, i) => (
              <li
                key={item.title}
                className="border-b border-ink/30 py-6 sm:pr-8"
              >
                {project.highlights.numbered && (
                  <span className="font-hand text-2xl text-burnt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <p className="text-xl font-bold tracking-[-0.02em]">
                  {item.title}
                </p>
                {item.description && (
                  <p className="mt-2 max-w-xs text-muted">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </Section>

        {/* Breakdown */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <p className="mb-5 text-sm uppercase tracking-[0.08em]">
                {project.breakdown.label}
              </p>
              <MaskHeading lines={project.breakdown.heading} className={h2} />
            </div>
            <dl className="lg:col-span-5 lg:col-start-8">
              {project.breakdown.items.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-1 border-t border-ink py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <dt className="text-2xl font-extrabold tracking-[-0.03em]">
                    {item.title}
                  </dt>
                  <dd className="max-w-xs text-muted sm:text-right">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Practised */}
        <Section>
          <p className="mb-5 text-sm uppercase tracking-[0.08em]">
            Development
          </p>
          <MaskHeading lines={["What I practised."]} className={h2} />
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xl font-semibold">
            {project.practised.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        {/* Reflection */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <p className="mb-5 text-sm uppercase tracking-[0.08em]">
                Reflection
              </p>
              <MaskHeading lines={["What I", "learned."]} className={h2} />
            </div>
            <p className="max-w-2xl text-2xl leading-[1.4] lg:col-span-5 lg:col-start-8">
              {project.reflection}
            </p>
          </div>
        </Section>

        {/* Next project */}
        <section className="dark-zone bg-ink text-paper">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto block max-w-[1500px] px-6 py-20 md:px-10 md:py-28"
          >
            <p className="font-hand text-3xl text-sun">up next</p>
            <p className="mt-4 text-[clamp(2.5rem,8vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] transition-transform duration-500 ease-out group-hover:translate-x-4">
              {next.title} <span className="text-burnt-bright">→</span>
            </p>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
