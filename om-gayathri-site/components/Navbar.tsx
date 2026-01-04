import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-2 py-0 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 -ml-2">
          <Image
            src="/logo.png"
            alt="Om Gayathri Agencies"
            width={440}
            height={120}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-brand-ink hover:text-brand-teal"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-brand-ink hover:text-brand-teal"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-brand-ink hover:text-brand-teal"
          >
            Contact
          </Link>

          {/* Call button */}
          <a
            href="tel:+919440323243"
            className="hidden sm:inline-flex items-center rounded-xl px-5 py-2 text-sm font-semibold bg-brand-teal text-white shadow-soft hover:opacity-95"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}