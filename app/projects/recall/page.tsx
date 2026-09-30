import Link from "next/link";

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Vercel",
];

const focusAreas = [
  ["01", "Knowledge Organisation", "A structured way to record and revisit technical knowledge."],
  ["02", "Problem Solving", "A space for documenting solutions and learning from previous problems."],
  ["03", "Developer Experience", "A clean interface designed around developers and their workflow."],
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Responsive UI",
  "Reusable Components",
  "Modern Frontend Development",
  "Git & GitHub",
  "Deployment",
];

export default function RecallProject() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <span className="text-sm font-medium">
            Chantele<span className="text-cyan-400">.</span>
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-24 pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Featured project · 02
          </p>

          <h1 className="mt-6 text-6xl font-semibold tracking-tight sm:text-8xl">
            Recall
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
            A developer-focused knowledge and problem-solving platform
            for recording, organising and revisiting technical solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="https://recall-three-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Live demo ↗
            </a>

            <a
              href="https://github.com/chacha-debug/recall"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              View source ↗
            </a>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
          <img
            src="/projects/recall.png"
            alt="Recall project"
            className="w-full"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Overview
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight">
                Turning technical
                <br />
                knowledge into a tool.
              </h2>
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-sm font-medium text-white">
                  The idea
                </p>

                <p className="mt-4 leading-7 text-zinc-500">
                  Developers regularly encounter problems that they may
                  need to solve again later. Recall was created around the
                  idea of keeping useful technical knowledge organised
                  and easy to revisit.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  The approach
                </p>

                <p className="mt-4 leading-7 text-zinc-500">
                  I built the project using Next.js, TypeScript, React and
                  Tailwind CSS, focusing on a clean interface and a
                  modern frontend development workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Project focus
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight">
            Designed around learning.
          </h2>

          <div className="mt-16 grid border-t border-white/10 md:grid-cols-3">
            {focusAreas.map(([number, title, description]) => (
              <div
                key={number}
                className="border-b border-white/10 px-0 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="text-xs text-zinc-700">
                  {number}
                </span>

                <h3 className="mt-5 text-lg font-medium text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Technology
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight">
                Built with a
                <br />
                modern stack.
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["Next.js", "Application framework and project structure."],
                ["TypeScript", "Type-safe development and clearer code."],
                ["React", "Component-based user interface development."],
                ["Tailwind CSS", "Responsive styling and visual design."],
                ["Vercel", "Deployment of the application."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="flex flex-col gap-2 py-6 sm:flex-row sm:justify-between"
                >
                  <p className="font-medium text-white">
                    {title}
                  </p>

                  <p className="max-w-lg text-sm leading-6 text-zinc-500 sm:text-right">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Development
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight">
            What I practised.
          </h2>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {skills.map((skill) => (
              <span key={skill} className="text-zinc-500">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Reflection
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight">
            What I learned.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-500">
            Recall gave me practical experience building with a modern
            React-based stack. It strengthened my understanding of
            component-based development, TypeScript, responsive design,
            project structure and deploying a web application.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-zinc-600">
            Want to explore the project?
          </p>

          <div className="mt-5 flex flex-wrap gap-6">
            <a
              href="https://github.com/chacha-debug/recall"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium text-white transition hover:text-cyan-400"
            >
              View the source ↗
            </a>

            <Link
              href="/"
              className="text-2xl font-medium text-zinc-600 transition hover:text-white"
            >
              Back to portfolio →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}