import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | CX CODEX TECH-IT",
  description:
    "Terms of service, candidate advisory guidelines, and corporate agreements governing CX CODEX TECH-IT services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" /> Service Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: April 14, 2026 · Governs engagement between CX CODEX TECH-IT and users of cxcodextech.com.
          </p>
        </div>

        {/* Content sections */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or utilizing the services provided by CX CODEX TECH-IT (“CX CODEX TECH-IT”, “we”, or “us”), including our assessment tools, advisory consultations, and candidate portals, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Career Advisory Services & Placement Disclaimer</h2>
            <p>
              CX CODEX TECH-IT provides professional career coaching, resume rebranding, technical interview preparation, and placement marketing support. 
            </p>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-2">
              <div className="font-bold flex items-center gap-2 text-amber-900">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" /> Ethical Placement Guarantee Notice
              </div>
              <p>
                In strict compliance with US labor standards, federal immigration law, and Indian labor statutes, CX CODEX TECH-IT does not sell job guarantees, manipulate interview results, or manufacture fraudulent employment backgrounds. Final hiring decisions rest exclusively with prospective employers. Our role is to optimize your competitiveness, interview readiness, and market visibility.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Candidate Responsibilities & Truth in Application</h2>
            <p>
              Candidates agree to submit accurate, truthful educational credentials, work histories, and immigration/visa statuses. Misrepresentation of identity, legal right to work, or fabricated references constitutes grounds for immediate termination of services without refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Diagnostic Assessment Tools</h2>
            <p>
              Our automated and heuristic evaluation tools (Resume Analyzer, LinkedIn Profile Analyzer, Job Match Score, and Interview Readiness) provide educational scoring benchmarks based on established technical hiring best practices. These scores are advisory diagnostics and do not guarantee interview invites from specific third-party organizations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">5. Intellectual Property</h2>
            <p>
              All proprietary methodologies, scoring algorithms, career roadmaps, course curricula, and website designs are the intellectual property of CX CODEX TECH-IT. You are granted a limited, personal, non-transferable license to utilize these materials for your individual job search.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">6. Dispute Resolution & Contact</h2>
            <p>
              These terms are governed by the applicable laws of Michigan, United States, and Uttar Pradesh, India, depending on the jurisdiction of service execution. For questions regarding our terms, contact:
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-600 font-semibold">{siteConfig.contact.email}</a> · Telephone: {siteConfig.contact.phone}
            </div>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-200 flex justify-between text-xs text-slate-500">
          <Link href="/privacy-policy" className="hover:text-blue-600 font-semibold">
            ← Privacy Policy
          </Link>
          <Link href="/disclaimer" className="hover:text-blue-600 font-semibold">
            Disclaimer →
          </Link>
        </div>
      </div>
    </div>
  );
}
