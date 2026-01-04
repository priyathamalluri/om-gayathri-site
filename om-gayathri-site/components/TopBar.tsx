import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#4FA4CB] text-white text-sm font-medium">
      <div className="mx-auto max-w-6xl px-4 py-2 flex justify-end">
        <div className="flex items-center gap-6">

          {/* Email */}
          <a
            href="mailto:raju@omgayathriagencies.com"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail className="h-6 w-6" />
            raju@omgayathriagencies.com
          </a>

          {/* Phone */}
          <a
            href="tel:+919440323243"
            className="flex items-center gap-2 hover:underline"
          >
            <Phone className="h-5 w-5" />
            +91 94403 23243
          </a>

        </div>
      </div>
    </div>
  );
}