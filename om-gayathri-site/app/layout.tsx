import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Om Gayathri Agencies | Mechanical & Civil Contractors",
  description:
    "Om Gayathri Agencies – Mechanical & Civil Contractors based in Kondapalli, Andhra Pradesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Top contact bar */}
        <TopBar />

        {/* Main navigation */}
        <Navbar />

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
<footer className="mt-16 bg-[#4FA4CB]">
  <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-white">
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2005–2026 Om Gayathri Agencies.</p>
      <p>
        Plot No.16, Industrial Development Area, Kondapalli, NTR District,
        Andhra Pradesh – 521228
      </p>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}