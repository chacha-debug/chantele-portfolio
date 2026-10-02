import { links } from "@/lib/content";
import { MaskHeading } from "./Reveal";
import SectionLabel from "./SectionLabel";

export function Contact() {
  return (
    <section
      id="contact"
      className="dark-zone bg-ink py-24 text-paper md:py-36"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel n="04" label="Say hello" dark />
          </div>
          <div className="lg:col-span-9">
            <MaskHeading
              lines={["Got an idea?", "Let\u2019s build", "something."]}
              className="text-[clamp(2.75rem,8vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em]"
            />
            <p className="mt-8 max-w-xl text-xl leading-snug text-paper/75">
              I&apos;m always interested in software, projects, internships and
              interesting problems worth solving.
            </p>

            <a
              href={`mailto:${links.email}`}
              className="u-link mt-10 inline-block text-[clamp(1.3rem,4.4vw,3.5rem)] font-bold tracking-[-0.03em] [overflow-wrap:anywhere]"
            >
              {links.email}
            </a>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-lg font-semibold">
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link"
                >
                  GitHub ↗︎
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link"
                >
                  LinkedIn ↗︎
                </a>
              </li>
              <li>
                <a
                  href={links.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link"
                >
                  Resume ↗︎
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="dark-zone bg-ink text-paper">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 border-t border-paper/20 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-hand text-2xl text-sun">
          Built with curiosity, too much debugging &amp; 🍵
        </p>
        <p className="text-sm text-paper/60">
          © {new Date().getFullYear()} Chantele Mucuio · Johannesburg
        </p>
      </div>
    </footer>
  );
}
