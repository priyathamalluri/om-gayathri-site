import Link from "next/link";

const services = [
  {
    title: "Petroleum Works",
    description:
      "End-to-end petroleum infrastructure services including installation, maintenance, and safety-compliant execution for industrial facilities.",
  },
  {
    title: "Civil Works",
    description:
      "Comprehensive civil construction services covering foundations, industrial buildings, roads, and site development with quality workmanship.",
  },
  {
    title: "Industrial Maintenance",
    description:
      "Routine and preventive industrial maintenance services ensuring smooth operations, safety compliance, and reduced downtime.",
  },
  {
    title: "Structural Fabrication Support",
    description:
      "Structural steel fabrication and erection support for industrial plants, warehouses, and heavy-duty structures.",
  },
  {
    title: "Pipeline & Fitting Works",
    description:
      "Design, installation, and maintenance of pipelines, fittings, and flow systems ensuring operational efficiency and safety standards.",
  },
  {
    title: "Site Development & Civil Execution",
    description:
      "Complete site development services including groundwork, leveling, drainage, and civil execution for industrial projects.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-brand-ink">
            Services
          </h1>

          <Link
            href="/contact"
            className="rounded-full bg-[#4FA4CB] px-6 py-3 text-white font-semibold hover:opacity-95"
          >
            Enquire
          </Link>
        </div>

        {/* Intro */}
        <p className="mt-4 text-brand-ink/70 max-w-2xl">
          We provide dependable petroleum and civil works services with a strong
          focus on quality, safety, and timely execution across industrial and
          commercial projects.
        </p>

        {/* Services Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-black/10 bg-white p-6 shadow-soft"
            >
              <div className="h-2 w-16 rounded-full bg-[#4FA4CB]" />
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-brand-ink/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}