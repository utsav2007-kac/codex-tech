import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Handshake, Globe2, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Strategic Partnerships | CX CODEX TECH-IT",
  description:
    "Form strategic career and placement alliances with CX CODEX TECH-IT. University programs, global talent incubators, and enterprise technology ecosystems.",
};

export default function PartnerWithUsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Institutional Alliances
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Partner With CX CODEX TECH-IT.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Collaborate with our team to bridge global education and commercial employment in the United States. We partner with universities, bootcamps, and international talent organizations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-24">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
            University & STEM Programs
          </div>
          <h2 className="text-lg font-bold text-slate-900">OPT & F-1 Career Bridges</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Equip graduating international cohorts with real-world ATS resumes, system design mentorship, and compliant job search strategies.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Tech Bootcamps & Accelerators
          </div>
          <h2 className="text-lg font-bold text-slate-900">Career Placement Infrastructure</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Integrate our 7-stage candidate lifecycle to improve graduate placement velocity and starting compensation in the US.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Corporate Hiring Desks
          </div>
          <h2 className="text-lg font-bold text-slate-900">Enterprise Talent Pipelines</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Build sustained talent pipelines of engineers trained on your specific technology stack, frameworks, and architecture patterns.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Link
          href="/contact"
          className="blob-button px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl shadow-lg shadow-blue-500/25"
        >
          Discuss Strategic Alliance ↗
        </Link>
      </div>

      <FinalCta />
    </div>
  );
}
