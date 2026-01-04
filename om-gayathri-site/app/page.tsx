import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import Image from "next/image";
import { Factory, Users, Calendar, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="space-y-0">
      {/* ================= Slider ================= */}
      <HeroSlider />

      {/* ================= About Company ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-brand-ink">
                WELCOME TO <br />
                <span className="block">OM GAYATHRI AGENCIES</span>
              </h2>

              <ul className="mt-6 space-y-4 text-base sm:text-lg text-brand-ink/80">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4FA4CB]" />
                  We undertake petroleum and civil works for industrial and
                  commercial projects with reliable execution.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4FA4CB]" />
                  Our experienced team ensures quality workmanship, safety, and
                  timely project completion.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4FA4CB]" />
                  Based in Kondapalli, Andhra Pradesh, serving clients across
                  India.
                </li>
              </ul>

              <div className="mt-10">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md bg-[#4FA4CB] px-8 py-4 text-white font-semibold shadow-soft hover:opacity-95"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg border border-black/10 bg-black/5">
                <div className="relative h-[260px] sm:h-[340px] lg:h-[380px]">
                  <Image
                    src="/company-image.png"
                    alt="Om Gayathri Agencies facility in Kondapalli"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Accent bar */}
                <div className="absolute bottom-3 right-3 h-4 w-0 bg-[#4FA4CB]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Glimpse of Our Company ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          {/* Heading */}
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-semibold text-brand-ink">
              Glimpse{" "}
              <span className="text-[#4FA4CB] font-normal">of Our Company</span>
            </h3>

            <p className="mt-5 text-brand-ink/80 max-w-4xl mx-auto text-base sm:text-lg">
              Om Gayathri Agencies provides comprehensive petroleum and civil
              contracting solutions, supported by experienced professionals and a
              commitment to quality, reliability, and operational excellence.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-lg border border-black/10 bg-white p-8 text-center shadow-soft">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-black/15">
                <Factory className="h-10 w-10 text-[#4FA4CB]" />
              </div>
              <div className="mt-6 text-sm text-gray-500">Nature of Business</div>
              <div className="mt-2 text-lg font-semibold text-brand-ink">
                Petroleum and Civil Works
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-black/10 bg-white p-8 text-center shadow-soft">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-black/15">
                <Users className="h-10 w-10 text-[#4FA4CB]" />
              </div>
              <div className="mt-6 text-sm text-gray-500">
                Number of Employees
              </div>
              <div className="mt-2 text-lg font-semibold text-brand-ink">
                100 person
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-black/10 bg-white p-8 text-center shadow-soft">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-black/15">
                <Calendar className="h-10 w-10 text-[#4FA4CB]" />
              </div>
              <div className="mt-6 text-sm text-gray-500">
                Year of Establishment
              </div>
              <div className="mt-2 text-lg font-semibold text-brand-ink">2005</div>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg border border-black/10 bg-white p-8 text-center shadow-soft">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-black/15">
                <Globe className="h-10 w-10 text-[#4FA4CB]" />
              </div>
              <div className="mt-6 text-sm text-gray-500">Market Covered</div>
              <div className="mt-2 text-lg font-semibold text-brand-ink">
                All India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Enquiry Button Section ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-brand-ink">
            Have a Project in Mind?
          </h3>

          <p className="mt-4 text-brand-ink/70 max-w-2xl mx-auto text-base sm:text-lg">
            Reach out to Om Gayathri Agencies for petroleum and civil works
            enquiries. Our team will get back to you promptly.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#4FA4CB] px-10 py-4 text-white text-lg font-semibold shadow-soft hover:opacity-95"
            >
              Enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}