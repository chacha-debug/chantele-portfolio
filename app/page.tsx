"use client";

import { useState } from "react";

const projects = [
  {
    title: "Logistics Management Platform",
    description:
      "A RESTful logistics management system for managing customers, drivers, shipments, deliveries and shipment status history.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
    href: "/projects/logistics",
    github: "https://github.com/chacha-debug/logistics-management-api",
    live: "https://logistics-api-4rr3.onrender.com/",
    image: "/projects/logistics.png",
  },
  {
    title: "Recall",
    description:
      "A developer-focused knowledge and problem-solving platform for recording, organising and revisiting technical solutions.",
    technologies: ["Next.js", "TypeScript"],
    href: "/projects/recall",
    github: "https://github.com/chacha-debug/recall",
    live: "https://recall-three-iota.vercel.app/",
    image: "/projects/recall.png",
  },
  {
    title: "Community Reporta",
    description:
      "A community service delivery platform for reporting potholes, water leaks and other community issues in South Africa.",
    technologies: ["Python", "Django"],
    href: "/projects/community-reporting",
    github: "https://github.com/chacha-debug/community-reporta",
    live: "https://community-reporta.vercel.app/",
    image: "/projects/community-reporta.png",
  },
];

const skills = [
  "Java",
  "Python",
  "Spring Boot",
  "Django",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "MySQL",
  "REST APIs",
  "Git & GitHub",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Chantele<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Contact
            </a>

            <a
              href="/Chantele-Mucuio-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-300 hover:text-white"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-300 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-300 hover:text-white"
              >
                Skills
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-300 hover:text-white"
              >
                Contact
              </a>

              <a
                href="/Chantele-Mucuio-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400"
              >
                Resume ↗
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Software Developer
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Hi, I&apos;m{" "}
              <span className="text-zinc-400">
                Chantele.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              I&apos;m a final-year ICT student at Sol Plaatje University,
              focused on building reliable software, backend systems and
              modern web applications.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-400"
              >
                View my work
              </a>

              <a
                href="https://github.com/chacha-debug"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub ↗
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500">
              <span>Java</span>
              <span>Python</span>
              <span>Spring Boot</span>
              <span>Django</span>
              <span>Next.js</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-600">
            <span className="h-px w-10 bg-zinc-700" />
            Scroll to explore
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Section heading */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                About me
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Building software
                <br />
                with purpose.
              </h2>
            </div>

            {/* About content */}
            <div>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                I&apos;m a final-year Diploma in ICT student at Sol Plaatje University
                with a strong interest in software development and backend engineering.
                I enjoy turning problems into practical software through clean code,
                structured thinking and continuous learning.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                My experience includes building REST APIs with Java and Spring Boot,
                database-driven applications with MySQL, web applications with Django,
                and modern interfaces with React and Next.js. I&apos;m particularly
                interested in understanding how systems work behind the interface,
                from application logic and data models to validation, APIs and
                debugging.
              </p>

              <div className="mt-10">
                <a
                  href="https://github.com/chacha-debug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-400"
                >
                  Explore my GitHub
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Academic highlights */}
          <div className="mt-24 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-white/10 px-6 py-8 sm:border-r lg:border-b-0">
              <p className="text-3xl font-semibold text-white">98%</p>
              <p className="mt-2 text-sm text-zinc-500">
                Programming I
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-8 lg:border-b-0 lg:border-r">
              <p className="text-3xl font-semibold text-white">94%</p>
              <p className="mt-2 text-sm text-zinc-500">
                Web Development I
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-8 sm:border-r lg:border-b-0">
              <p className="text-3xl font-semibold text-white">88%</p>
              <p className="mt-2 text-sm text-zinc-500">
                Application Development
              </p>
            </div>

            <div className="px-6 py-8">
              <p className="text-3xl font-semibold text-white">2×</p>
              <p className="mt-2 text-sm text-zinc-500">
                Dean&apos;s List
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                Selected work
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Things I&apos;ve built.
              </h2>
            </div>

            <p className="max-w-md text-zinc-500 md:text-right">
              A selection of projects where I&apos;ve worked with backend
              systems, databases, APIs and modern web technologies.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-20 space-y-24">

            {/* Logistics */}
            <article className="group">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

                <a
                  href="/projects/logistics"
                  className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
                >
                  <div className="group overflow-hidden">
                    <img
                      src="/projects/logistics.png"
                      alt="Logistics Management Platform"
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </a>

                <div>
                  <p className="text-sm text-zinc-600">01</p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    Logistics Management Platform
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-500">
                    A RESTful logistics management system for managing
                    customers, drivers, shipments, deliveries and shipment
                    status history.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "MySQL", "REST API"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-6">
                    <a
                      href="/projects/logistics"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                    >
                      View project ↗
                    </a>

                    <a
                      href="https://github.com/chacha-debug/logistics-management-api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Recall */}
            <article className="group">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                <div className="order-2 lg:order-1">
                  <p className="text-sm text-zinc-600">02</p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    Recall
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-500">
                    A developer-focused knowledge and problem-solving platform
                    for recording, organising and revisiting technical solutions.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "React", "Tailwind CSS"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-8 flex gap-6">
                    <a
                      href="/projects/recall"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                    >
                      View project ↗
                    </a>

                    <a
                      href="https://github.com/chacha-debug/recall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <a
                  href="/projects/recall"
                  className="order-1 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 lg:order-2"
                >
                  <div className="group overflow-hidden">
                    <img
                      src="/projects/recall.png"
                      alt="Recall project"
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </a>
              </div>
            </article>

            {/* Community Reporta */}
            <article className="group">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

                <a
                  href="/projects/community-reporting"
                  className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
                >
                  <div className="group overflow-hidden">
                    <img
                      src="/projects/community-reporta.png"
                      alt="Community Reporta"
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </a>

                <div>
                  <p className="text-sm text-zinc-600">03</p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    Community Reporta
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-500">
                    A community service delivery platform for reporting
                    potholes, water leaks and other community issues in
                    South Africa.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Python", "Django", "HTML", "CSS", "JavaScript"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-8 flex gap-6">
                    <a
                      href="/projects/community-reporting"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                    >
                      View project ↗
                    </a>

                    <a
                      href="https://github.com/chacha-debug/community-reporta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Skills
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Tools I use to build.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              My current technical toolkit is centred around backend development,
              databases, APIs and modern web applications.
            </p>
          </div>

          <div className="mt-20 divide-y divide-white/10 border-y border-white/10">
            <div className="grid gap-6 py-8 md:grid-cols-[180px_1fr]">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                Backend
              </h3>

              <div>
                <p className="text-lg text-white">
                  Java · Python · Spring Boot · Django
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                  Object-oriented programming, application logic, REST APIs,
                  backend services and server-side development.
                </p>
              </div>
            </div>

            <div className="grid gap-6 py-8 md:grid-cols-[180px_1fr]">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                Frontend
              </h3>

              <div>
                <p className="text-lg text-white">
                  HTML · CSS · JavaScript · TypeScript · React · Next.js
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                  Responsive interfaces, component-based development and modern
                  web application development.
                </p>
              </div>
            </div>

            <div className="grid gap-6 py-8 md:grid-cols-[180px_1fr]">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                Data & APIs
              </h3>

              <div>
                <p className="text-lg text-white">
                  MySQL · Relational Databases · REST APIs · DTOs · Validation · OpenAPI
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                  Database-driven applications, data modelling, API design,
                  validation and API documentation.
                </p>
              </div>
            </div>

            <div className="grid gap-6 py-8 md:grid-cols-[180px_1fr]">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                Engineering
              </h3>

              <div>
                <p className="text-lg text-white">
                  Git · GitHub · OOP · Debugging · API Testing · Layered Architecture
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                  Version control, debugging, structured application design,
                  testing and maintainable software development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Get in touch
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Let&apos;s build something.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">
              I&apos;m currently interested in software development
              opportunities, internships and projects where I can continue
              learning and contribute to real-world solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:chantelemucuio@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-400"
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/chantele-mucuio-409918382/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-medium text-white">
              Chantele Mucuio<span className="text-cyan-400">.</span>
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Software Development · Johannesburg
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
            <a
              href="https://github.com/chacha-debug"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/chantele-mucuio-409918382/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="/Chantele-Mucuio-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-white/5 pt-6">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Chantele Mucuio. Built with Next.js.
          </p>
        </div>
      </footer>
    </main>
  );
}

