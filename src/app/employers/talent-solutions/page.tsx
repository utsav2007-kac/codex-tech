import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Building2, Users2, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Talent Solutions for Tech Employers | CX CODEX TECH-IT",
  description:
    "Flexible engagement models: Contract, Contract-to-Hire, and Direct Hire software engineers and technical leaders vetted for US tech stacks.",
};

export default function TalentSolutionsPage() {
  const models = [
    { title: "Direct Hire Placement", desc: "Full-time software engineering and technical leadership hires. Retained or contingent arrangements with a 90-day guarantee." },
    { title: "Contract-to-Hire", desc: "Evaluate technical and cultural fit on real project deliverables for 3 to 6 months before converting to permanent status." },
    { title: "Project-Based Technical Staffing", desc: "Assemble specialized agile teams for cloud migrations, microservice refactoring, and data engineering sprints." },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Employer Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Flexible Tech Talent Engagement Models.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Scale your engineering capacity with pre-screened talent across frontend, distributed backend, DevOps, cloud architecture, and data analytics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-24">
        {models.map((m, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <span className="text-xs font-mono font-bold text-blue-600 block">MODEL 0{idx + 1}</span>
            <h2 className="text-xl font-bold text-slate-900">{m.title}</h2>
            <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Link
          href="/employers/submit-requirement"
          className="blob-button px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl shadow-lg shadow-blue-500/25"
        >
          Submit Requisition to Talent Desk ↗
        </Link>
      </div>

      <FinalCta />
    </div>
  );
}
