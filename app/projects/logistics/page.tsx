import Link from "next/link";

const technologies = [
  "Java",
  "Spring Boot",
  "MySQL",
  "REST API",
  "JPA",
  "OpenAPI",
];

const features = [
  "Customer Management",
  "Driver Management",
  "Shipment Management",
  "Delivery Management",
  "Status Tracking",
  "Status History",
  "Search & Filtering",
  "Validation",
  "Exception Handling",
  "Dynamic Shipping Fees",
];

export default function LogisticsProject() {
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
            Featured project · 01
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl">
            Logistics Management
            <br />
            Platform
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
            A RESTful logistics management system designed to manage
            customers, drivers, shipments, deliveries and shipment
            status history.
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
              href="https://logistics-api-4rr3.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Live demo ↗
            </a>

            <a
              href="https://github.com/chacha-debug/logistics-management-api"
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
            src="/projects/logistics.png"
            alt="Logistics Management Platform"
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
                From logistics problem
                <br />
                to working API.
              </h2>
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-sm font-medium text-white">
                  The problem
                </p>

                <p className="mt-4 leading-7 text-zinc-500">
                  Logistics operations involve multiple entities and
                  constantly changing shipment information. The system
                  needed a structured way to manage these relationships
                  while keeping shipment status and delivery information
                  accessible.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  The solution
                </p>

                <p className="mt-4 leading-7 text-zinc-500">
                  I built a Spring Boot REST API backed by MySQL. The
                  application separates controllers, services and
                  repositories and uses DTOs, validation and centralized
                  exception handling to create a structured backend.
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
            What it does.
          </h2>

          <div className="mt-16 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="border-b border-white/10 px-6 py-7 first:pl-0 sm:nth-[2n+1]:pl-0 lg:nth-[3n+1]:pl-0"
              >
                <span className="text-xs text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-3 text-sm text-zinc-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Architecture
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight">
                Structured for
                <br />
                maintainability.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                ["Controller", "Handles HTTP requests and API responses."],
                ["Service", "Contains application and business logic."],
                ["Repository", "Handles database persistence through JPA."],
                ["MySQL", "Stores relational logistics data."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="border-t border-white/10 py-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                    <p className="font-medium text-white">{title}</p>

                    <p className="max-w-lg text-sm leading-6 text-zinc-500 sm:text-right">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Engineering
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight">
            What I practised.
          </h2>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {[
              "Object-Oriented Programming",
              "Layered Architecture",
              "Relational Database Design",
              "REST API Development",
              "DTOs",
              "Validation",
              "Exception Handling",
              "API Testing",
              "OpenAPI Documentation",
            ].map((item) => (
              <span key={item} className="text-zinc-500">
                {item}
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
            This project strengthened my understanding of backend
            development, API design, relational databases and the
            importance of separating application responsibilities.
            It also gave me practical experience debugging API behaviour,
            validating input and designing a system that can be extended
            as requirements grow.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-zinc-600">
            Interested in the implementation?
          </p>

          <div className="mt-5 flex flex-wrap gap-6">
            <a
              href="https://github.com/chacha-debug/logistics-management-api"
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