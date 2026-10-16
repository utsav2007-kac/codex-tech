import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Building2, Users2, ShieldCheck, CheckCircle2, ArrowRight, Zap, Target } from "lucide-react";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Employer & Recruiting Partner Portal | CX CODEX TECH-IT",
  description:
    "Partner with CX CODEX TECH-IT for interview-ready, pre-vetted technology talent. Tailored talent solutions, fast hiring turnarounds, and enterprise MSP collaboration.",
};

export default function EmployersPage() {
  const employerPillars = [
    {
      title: "Talent Solutions",
      desc: "Contract, contract-to-hire, and direct placement of thoroughly assessed engineers and architects.",
      link: "/employers/talent-solutions",
    },
    {
      title: "Hire Talent",
      desc: "Access candidate rosters across full-stack engineering, cloud architecture, and data pipelines.",
      link: "/employers/hire-talent",
    },
    {
      title: "Recruiting Partners",
      desc: "Collaborate with Tier-1 staffing firms, MSP managers, and prime vendor networks across the US.",
      link: "/employers/recruiting-partners",
    },
    {
      title: "Submit Requirement",
      desc: "Dispatch your open job requisition directly to our technical matching and sourcing desk.",
      link: "/employers/submit-requirement",
    },
    {
      title: "Partner With Us",
      desc: "Strategic placement alliances for universities, international organizations, and corporate partners.",
      link: "/employers/partner-with-us",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Enterprise & Staffing Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Interview-Ready Tech Talent. <br />
            <span className="grad-text">Vetted for High Performance.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Eliminate candidate noise. CX CODEX TECH-IT provides thoroughly benchmarked software engineers, cloud architects, and data leads trained in US commercial communication.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/employers/submit-requirement"
              className="blob-button px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider shadow-md shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Submit Hiring Requirement</span>
              <span className="text-blue-200">↗</span>
            </Link>
            <Link
              href="/employers/hire-talent"
              className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors"
            >
              Review Available Talent
            </Link>
          </div>
        </div>
      </div>

      {/* 5 Employer Portal Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {employerPillars.map((p, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 block mb-3">
                PORTAL / 0{idx + 1}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{p.desc}</p>
            </div>
            <Link
              href={p.link}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 pt-3 border-t border-slate-200"
            >
              <span>Access {p.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      {/* Why Employers Partner with CX Codex */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              THE CX CODEX VETTING STANDARD
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Pre-Vetted Candidates. Zero Time Wasted.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Every candidate submitted to your hiring desk has completed verified technical assessments, recorded behavioral mock loops, and full compliance checks.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <Zap className="w-6 h-6 text-amber-400" />
              <h4 className="text-sm font-bold">48-Hour Turnaround</h4>
              <p className="text-xs text-slate-400">Receive vetted profiles within 48 hours of requirement submission.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h4 className="text-sm font-bold">E-Verify & I-9 Ready</h4>
              <p className="text-xs text-slate-400">All work authorization documents and background credentials verified in advance.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <Target className="w-6 h-6 text-blue-400" />
              <h4 className="text-sm font-bold">85%+ Interview Pass Rate</h4>
              <p className="text-xs text-slate-400">STAR-trained candidates who articulate commercial trade-offs clearly to hiring managers.</p>
            </div>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
