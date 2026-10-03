import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/content";
import Drift from "./Drift";
import { MaskHeading, Wipe } from "./Reveal";
import SectionLabel from "./SectionLabel";

const accentBg = {
  burnt: "bg-pink",
  sun: "bg-sky",
  brick: "bg-matcha",
} as const;

function Feature({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const href = `/work/${project.slug}`;

  return (
    <article className="border-t border-ink pt-5 md:pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="flex items-baseline gap-2 text-sm uppercase tracking-[0.08em]">
          <span className="font-hand text-2xl normal-case tracking-normal text-burnt">
            {project.number}
          </span>
          <span aria-hidden="true">/</span>
          {project.tag}
        </p>
      </div>

      <Link href={href} className="group mt-5 block">
        <MaskHeading
          as="h3"
          lines={project.titleLines}
          className="text-[clamp(2.6rem,8.2vw,8rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] transition-transform duration-500 ease-out group-hover:translate-x-3"
        />
        <span className="sr-only"> — view project</span>
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div
          className={`group/img relative lg:col-span-9 ${
            flip ? "lg:order-2" : ""
          }`}
        >
          <Wipe
            className={`absolute inset-0 transition-transform duration-500 ease-out ${
              flip
                ? "-translate-x-3 translate-y-3 group-hover/img:-translate-x-5 group-hover/img:translate-y-5"
                : "translate-x-3 translate-y-3 group-hover/img:translate-x-5 group-hover/img:translate-y-5"
            }`}
          >
            <span className={`block h-full w-full ${accentBg[project.accent]}`} />
          </Wipe>

          <Drift className="relative">
            <Wipe delay={250}>
              <Link
                href={href}
                tabIndex={-1}
                className="relative block overflow-hidden border border-ink bg-paper"
                style={{
                  aspectRatio: project.image.width / project.image.height / 0.95,
                }}
              >
                <Image
                  src={project.image.src}
                  width={project.image.width}
                  height={project.image.height}
                  alt={project.image.alt}
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="drift-img absolute inset-x-0 -top-[2.5%] h-auto w-full"
                />
              </Link>
            </Wipe>
          </Drift>
        </div>

        <div className={`lg:col-span-3 ${flip ? "lg:order-1" : ""}`}>
          <p className="text-lg leading-snug">{project.blurb}</p>

          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[0.95rem] font-semibold">
            {project.homeStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="mt-6 border-l-2 border-burnt pl-4">
            <p className="text-sm text-muted">What I figured out</p>
            <p className="mt-1 font-hand text-[1.55rem] leading-[1.1] text-burnt">
              {project.figured}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            <Link href={href} className="u-link">
              View project →
            </Link>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link"
            >
              GitHub ↗︎
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link"
            >
              Live ↗︎
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel n="02" label="Selected work" />
          </div>
          <div className="lg:col-span-9">
            <MaskHeading
              lines={["Things I\u2019ve been", "building & figuring out."]}
              className="text-[clamp(2.6rem,6.5vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.045em]"
            />
            <p className="mt-6 max-w-xl text-xl leading-snug text-muted">
              A collection of projects that helped me learn how software works
              beyond the interface.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-28 md:mt-28 md:space-y-40">
          {projects.map((project, i) => (
            <Feature key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
