import Areas from "./Areas";
import { MaskHeading } from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="border-t border-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel n="01" label="What I do" />
          </div>
          <div className="lg:col-span-9">
            <MaskHeading
              lines={["More than just", "writing code."]}
              className="text-[clamp(2.6rem,6.5vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.045em]"
            />
            <p className="mt-6 max-w-xl text-xl leading-snug text-muted">
              I like figuring out how things work, then turning that
              understanding into software people can actually use.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <Areas />
        </div>
      </div>
    </section>
  );
}
