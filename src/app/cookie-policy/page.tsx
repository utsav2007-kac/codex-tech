import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | CX CODEX TECH-IT",
  description:
    "How CX CODEX TECH-IT uses essential session cookies and client-side storage to deliver candidate services without advertising trackers.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Cookie className="w-3.5 h-3.5" /> Transparent Tracking Standards
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: April 14, 2026 · We prioritize privacy and zero invasive advertising pixels.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. What Are Cookies & Web Storage?</h2>
            <p>
              Cookies and local browser storage are small text files or key-value entries stored on your device when you browse websites. They enable the platform to remember your navigation choices, assessment inputs, and authenticated candidate state across pages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Our Minimal Tracking Philosophy</h2>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
              <div className="font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" /> Zero Invasive Advertising Trackers
              </div>
              <p>
                CX CODEX TECH-IT does not deploy third-party advertising retargeting trackers, Facebook/Meta conversion pixels, or invasive behavioral profiling cookies. Your job search is your private business.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Types of Cookies We Utilize</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-xs mb-1">Strictly Necessary Cookies</div>
                <p className="text-xs text-slate-600">
                  Required for core platform navigation, form CSRF protection, and security headers.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-xs mb-1">Candidate Session Local Storage</div>
                <p className="text-xs text-slate-600">
                  Stores your active assessment results, job application status updates, and milestone progress locally in your browser sandbox without sending them to third-party ad networks.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Managing Your Cookies</h2>
            <p>
              You can control or clear cookies at any time via your browser settings. You can also purge all CX CODEX TECH-IT stored records by visiting your{" "}
              <Link href="/dashboard/settings" className="text-blue-600 font-bold underline">
                Account Settings
              </Link>{" "}
              and clicking “Purge All Local Data”.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-200 flex justify-between text-xs text-slate-500">
          <Link href="/privacy-policy" className="hover:text-blue-600 font-semibold">
            ← Privacy Policy
          </Link>
          <Link href="/accessibility" className="hover:text-blue-600 font-semibold">
            Accessibility Statement →
          </Link>
        </div>
      </div>
    </div>
  );
}
