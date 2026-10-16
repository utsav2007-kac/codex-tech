import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Handshake, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Recruiting Partners & MSP Collaboration | CX CODEX TECH-IT",
  description:
    "Collaborate with CX CODEX TECH-IT as a Tier-1 staffing supplier, MSP vendor, or recruiting agency. High candidate submittal-to-interview ratios.",
};

export default function RecruitingPartnersPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Staffing Alliances
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Recruiting Partners & MSP Channel Collaboration.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We partner with premier US staffing agencies, Managed Service Providers (MSPs), and direct vendor managers to supply high-caliber, responsive technology candidates.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 mb-24">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Why Recruiting Desks Rely on CX Codex</h2>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Zero ghosting: our candidates maintain active communication with dedicated campaign managers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>ATS-tested resumes with verified bullet metrics ready for immediate client submission.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>I-9 and work authorization documents pre-vetted to prevent compliance roadblocks.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Connect with Our Partner Desk</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Let us know what requisitions your staffing firm manages. We will coordinate submittals matching your rate card and vendor agreements.
            </p>
          </div>
          <Link
            href="/employers/submit-requirement"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center transition-colors shadow-xs"
          >
            Initiate Partner Collaboration ↗
          </Link>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
