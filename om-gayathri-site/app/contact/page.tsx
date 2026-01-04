export default function Contact() {
  const address =
    "Plot No.16, Industrial Development Area, Kondapalli, NTR District, Andhra Pradesh 521228";

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 text-brand-muted">
        Reach out for enquiries, quotations, and site visits.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Contact Details */}
        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Contact details</h2>

          <div className="mt-5 space-y-4 text-sm">
            {/* Email */}
            <div>
              <div className="text-brand-muted">Email</div>
              <a
                className="font-semibold text-brand-teal hover:underline"
                href="mailto:info@omgayathriagencies.com"
              >
                info@omgayathriagencies.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="text-brand-muted">Phone</div>
              <a
                className="font-semibold text-brand-teal hover:underline"
                href="tel:+919440323243"
              >
                +91 94403 23243
              </a>
            </div>

            {/* Address */}
            <div>
              <div className="text-brand-muted">Address</div>
              <div className="font-semibold">{address}</div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-3xl border border-black/5 bg-white p-2 shadow-soft overflow-hidden">
          <iframe
            title="Om Gayathri Agencies Location"
            src={mapSrc}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}