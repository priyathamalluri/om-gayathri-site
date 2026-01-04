import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://omgayathriagencies.com"),
  title: {
    default: "Om Gayathri Agencies | Mechanical & Civil Contractors",
    template: "%s | Om Gayathri Agencies",
  },
  description:
    "Om Gayathri Agencies provides petroleum, mechanical and civil works across India with a focus on quality execution, safety, and reliable project delivery.",
  keywords: [
    "Om Gayathri Agencies",
    "petroleum works",
    "civil works",
    "mechanical contractors",
    "industrial works",
    "Kondapalli contractors",
    "Andhra Pradesh contractors",
    "pipeline works",
    "fabrication",
    "site development",
  ],
  verification: {
    google: "ZHPL6ZqjJyEbhh0nGnMUpp6ekdo0ueYp8AfWGbvYW4k",
  },
  openGraph: {
    type: "website",
    url: "https://omgayathriagencies.com",
    title: "Om Gayathri Agencies | Mechanical & Civil Contractors",
    description:
      "Petroleum, mechanical and civil works with reliable execution and quality workmanship across India.",
    siteName: "Om Gayathri Agencies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Gayathri Agencies | Mechanical & Civil Contractors",
    description:
      "Petroleum, mechanical and civil works with reliable execution and quality workmanship across India.",
  },

  // ✅ Add this later when Google Search Console gives you the code:
  // verification: {
  //   google: "PASTE_GOOGLE_VERIFICATION_CODE_HERE",
  // },
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