import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Eye, CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Accessibility Statement | CX CODEX TECH-IT",
  description:
    "CX CODEX TECH-IT's commitment to digital accessibility, WCAG 2.1 AA conformance, and universal candidate usability.",
};

export default function AccessibilityPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5" /> Universal Design
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Accessibility Statement
          </h1>
          <p className="text-sm text-slate-500">
            Conforming to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Our Commitment</h2>
            <p>
              CX CODEX TECH-IT is committed to ensuring digital accessibility for people of all abilities, including individuals using screen readers, keyboard-only navigation, speech recognition software, and screen magnifiers. We continually refine the user experience and apply relevant accessibility standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Conformance Standards</h2>
            <p>
              This website has been architected to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Key implementations include:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Full Keyboard Navigability
                </div>
                <p className="text-[11px] text-slate-600">
                  All interactive controls, modals, accordions, and diagnostic forms are fully accessible via Tab, Shift+Tab, and Enter/Space.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> High-Contrast Typography
                </div>
                <p className="text-[11px] text-slate-600">
                  Text colors achieve a minimum contrast ratio of 4.5:1 against their backgrounds for effortless legibility.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Semantic HTML5 & ARIA
                </div>
                <p className="text-[11px] text-slate-600">
                  Descriptive landmark roles, labels, and aria-expanded attributes facilitate screen reader orientation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Skip-to-Content Mechanism
                </div>
                <p className="text-[11px] text-slate-600">
                  Keyboard users can immediately bypass repetitive header navigation via the dedicated top skip link.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Accessibility Feedback & Assistance</h2>
            <p>
              We welcome feedback on the accessibility of CX CODEX TECH-IT. If you encounter any accessibility barriers or require assistive accommodations for career advisory sessions, please contact us:
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950">
              Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-700 underline font-semibold">{siteConfig.contact.email}</a> · Telephone: {siteConfig.contact.phone}
            </div>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-200 flex justify-between text-xs text-slate-500">
          <Link href="/disclaimer" className="hover:text-blue-600 font-semibold">
            ← Disclaimer
          </Link>
          <Link href="/contact" className="hover:text-blue-600 font-semibold">
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  );
}
