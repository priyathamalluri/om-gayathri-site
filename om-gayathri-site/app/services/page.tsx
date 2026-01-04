import Link from "next/link";

const services = [
  "Petroleum works",
  "Civil works",
  "Industrial maintenance",
  "Structural fabrication support",
  "Pipeline & fitting works",
  "Site development & civil execution",
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-brand-ink">
            Services
          </h1>

          <Link
            href="/contact"
            className="rounded-full bg-[#4FA4CB] px-6 py-3 text-white font-semibold hover:opacity-95"
          >
            Enquiry
          </Link>
        </div>

        <p className="mt-4 text-brand-ink/70 max-w-2xl">
          We provide dependable petroleum and civil works services with focus on
          quality, safety, and timely execution.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s}
              className="rounded-lg border border-black/10 bg-white p-6 shadow-soft"
            >
              <div className="h-2 w-16 rounded-full bg-[#4FA4CB]" />
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{s}</h3>
              <p className="mt-2 text-sm text-brand-ink/70">
                Contact us for details, estimation, and project execution
                support.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}