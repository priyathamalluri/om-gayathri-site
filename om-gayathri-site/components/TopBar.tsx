export default function TopBar() {
  return (
    <div className="bg-[#4FA4CB] text-white text-sm font-medium">
      <div className="mx-auto max-w-6xl px-4 py-2 flex justify-end">

        <div className="flex items-center gap-6">
          {/* Email */}
          <div className="flex items-center gap-2">
            <span className="text-3xl leading-none relative -top-[px]">✉</span>
            <a
              href="mailto:raju@omgayathriagencies.com"
              className="hover:underline"
            >
              raju@omgayathriagencies.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <span className="text-xl">☎</span>
            <a
              href="tel:+919440323243"
              className="hover:underline"
            >
              +91 94403 23243
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}