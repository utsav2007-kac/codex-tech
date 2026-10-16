import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CX CODEX TECH-IT — We Deliver Jobs Faster | US Tech Job Market",
    template: "%s | CX CODEX TECH-IT",
  },
  description:
    "CX CODEX TECH-IT provides high-velocity career infrastructure, technical staffing, and US market placement support — We Deliver Jobs Faster.",
  keywords: [
    "CX CODEX TECH-IT",
    "CX Codex",
    "We Deliver Jobs Faster",
    "US tech careers",
    "resume rebranding",
    "ATS optimization",
    "interview preparation",
    "IT staffing US",
    "OPT STEM placement",
    "tech jobs USA",
  ],
  authors: [{ name: "CX CODEX TECH-IT" }],
  creator: "CX CODEX TECH-IT",
  metadataBase: new URL("https://cxcodextech.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cxcodextech.com",
    title: "CX CODEX TECH-IT — We Deliver Jobs Faster",
    description:
      "High-velocity technical staffing, career acceleration, and enterprise talent acquisition — We Deliver Jobs Faster.",
    siteName: "CX CODEX TECH-IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "CX CODEX TECH-IT — We Deliver Jobs Faster",
    description: "High-velocity technical staffing, career acceleration, and enterprise talent acquisition.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`h-full scroll-smooth ${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans" suppressHydrationWarning>
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
