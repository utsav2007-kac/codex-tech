import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, Scale, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Disclaimer & Legal Notices | CX CODEX TECH-IT",
  description:
    "Important legal notices regarding compensation benchmarks, immigration guidance, and corporate affiliations at CX CODEX TECH-IT.",
};

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" /> Legal Notice & Disclosures
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Disclaimer & Disclosures
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: April 14, 2026 · Transparent boundaries regarding career advice and representations.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" /> 1. No Legal or Formal Immigration Counsel
            </h2>
            <p>
              CX CODEX TECH-IT is a career technology advisory and talent placement consultancy. We are <strong>not a law firm</strong> and do not provide licensed legal or immigration advice. While our advisors and talent partners possess extensive practical experience regarding F-1 OPT/CPT, STEM OPT, and H-1B transfer requirements, any guidance provided is for informational and educational career planning purposes only.
            </p>
            <p className="text-xs text-slate-500 italic">
              Candidates should consult licensed immigration attorneys regarding specific petition filings, visa classifications, or formal adjudications with USCIS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" /> 2. Compensation & Placement Estimates
            </h2>
            <p>
              Salary ranges, compensation estimates, and interview turnaround timelines referenced throughout cxcodextech.com are compiled from aggregated US and Indian tech industry benchmarks, public BLS reports, and past cohort averages.
            </p>
            <p>
              Individual compensation packages vary significantly based on geographic location, technical interview performance, hiring budget cycles, and candidate experience. CX CODEX TECH-IT makes no representation or warranty of a specific guaranteed starting salary.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Corporate Affiliations & Trademarks</h2>
            <p>
              All product names, logos, company trademarks, and brand names displayed on this website (such as Google, Amazon, Microsoft, Meta, Snowflake, etc.) are the property of their respective owners. Their display is solely for descriptive identification and career benchmarking. Such identification does not imply affiliation with, sponsorship by, or endorsement from these trademark holders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Diagnostic Scoring Tools</h2>
            <p>
              Scores provided by our interactive tools (Resume Analyzer, LinkedIn Profile Analyzer, Job Match Score, Interview Readiness) are algorithmic heuristics designed for educational career improvement. A high score does not guarantee employment, nor does a low score preclude successful hiring.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-200 flex justify-between text-xs text-slate-500">
          <Link href="/terms-and-conditions" className="hover:text-blue-600 font-semibold">
            ← Terms & Conditions
          </Link>
          <Link href="/contact" className="hover:text-blue-600 font-semibold">
            Contact Legal Team →
          </Link>
        </div>
      </div>
    </div>
  );
}
