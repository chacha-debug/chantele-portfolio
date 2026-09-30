import Link from "next/link";

const technologies = [
  "Python",
  "Django",
  "HTML",
  "CSS",
  "JavaScript",
];

const features = [
  ["01", "Issue Reporting", "A digital way to report community service delivery issues."],
  ["02", "Pothole Reports", "Support for reporting potholes and road-related problems."],
  ["03", "Water Leak Reports", "A way to report water leaks within the community."],
  ["04", "Issue Categories", "Organising reports around different types of community issues."],
  ["05", "Digital Records", "Replacing informal reporting with structured digital information."],
  ["06", "Community Focus", "Designed around practical local service delivery problems."],
];

const skills = [
  "Python",
  "Django",
  "HTML",
  "CSS",
  "JavaScript",
  "Web Development",
  "Problem Solving",
  "Git & GitHub",
];

export default function CommunityReportingProject() {
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
            Featured project · 03
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl">
            Community
            <br />
            Reporta
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
            A community service delivery platform for reporting potholes,
            water leaks and other community issues in South Africa.
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
              href="https://community-reporta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Live demo ↗
            </a>

            <a
              href="https://github.com/chacha-debug/community-reporta"
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
            src="/projects/community-reporta.png"
            alt="Community Reporta project"
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
                Turning a community
                <br />
                problem into a web system.
              </h2>
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-sm font-medium text-white">
                  The problem
                </p>

                <p className="mt-4 leading-7 text-zinc-500">
                  Community service delivery issues such as potholes and
                  water leaks need to be communicated clearly so that
                  problems can be recorded and followed up.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  The solution
                </p>

                <p className="mt-4 leading-7 text-zinc-500">
                  Community Reporta provides a digital platform focused
                  on reporting different types of community issues and
                  organising the information in a more structured way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Functionality
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight">
            Built around reporting.
          </h2>

          <div className="mt-16 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([number, title, description]) => (
              <div
                key={number}
                className="border-b border-white/10 px-0 py-8 sm:px-6 sm:first:pl-0 lg:nth-[3n+1]:pl-0"
              >
                <span className="text-xs text-zinc-700">
                  {number}
                </span>

                <h3 className="mt-4 text-sm font-medium text-white">
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
                Built with
                <br />
                Django.
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["Python", "Primary programming language."],
                ["Django", "Web framework used to build the application."],
                ["HTML", "Structure and content of the interface."],
                ["CSS", "Visual styling and responsive presentation."],
                ["JavaScript", "Client-side interactivity."],
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

      {/* Development */}
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
            This project gave me practical experience using Django to
            turn a real-world community problem into a web application.
            It strengthened my understanding of web development,
            application structure, user-focused problem solving and
            building software around a specific community need.
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
              href="https://github.com/chacha-debug/community-reporta"
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