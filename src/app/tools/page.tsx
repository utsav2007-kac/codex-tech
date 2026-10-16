import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FileSearch, Target, CheckSquare, Gauge, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { Linkedin } from "@/components/LinkedInIcon";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Career Intelligence Assessment Tools | Free Preview",
  description:
    "Evaluate your US tech market readiness with our deterministic assessment suite: Resume Analyzer, LinkedIn Profile Analyzer, Job Match Score, and Interview Readiness.",
};

export default function ToolsHubPage() {
  const toolIcons = [
    <FileSearch key="1" className="w-6 h-6 text-blue-600" />,
    <Linkedin key="2" className="w-6 h-6 text-sky-600" />,
    <Target key="3" className="w-6 h-6 text-indigo-600" />,
    <CheckSquare key="4" className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            Free Career Intelligence Suite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Benchmark Your Profile Against <br />
            <span className="grad-text">US Market Standards.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            All four tools accept real inputs, execute deterministic heuristic scoring, and provide transparent, actionable recommendations — with zero fake random scores.
          </p>
        </div>
      </div>

      {/* 4 Tool Showcase Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 mb-20">
        {SITE_CONFIG.tools.map((t, idx) => (
          <div
            key={t.slug}
            className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                  {t.badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {toolIcons[idx]}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.title}</h2>
              <p className="text-sm font-medium text-slate-700 mb-4">{t.headline}</p>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{t.description}</p>

              <div className="space-y-2 mb-8 p-4 rounded-2xl bg-white border border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Evaluated Parameters:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {t.metrics.map((m, i) => (
                    <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
              <Link
                href={`/tools/${t.slug}`}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition-colors shadow-md shadow-blue-500/20"
              >
                Launch {t.title} ↗
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Methodology & Privacy Guarantee Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Transparent Scoring Methodology
            </div>
            <h3 className="text-2xl font-bold">Never Random. Fully Explainable.</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our tools do not generate random vanity numbers or claim that unconfigured AI reviewed your document. The algorithms check structural headings, Google XYZ action syntax, keyword density, and US compliance standards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs text-slate-400">
            <div className="font-bold text-white text-sm">Privacy & Data Retention Guarantee</div>
            <p>
              Your inputs are evaluated on-demand in your session. We do not sell your personal data or retain resumes without your explicit dashboard consent.
            </p>
            <div className="pt-1 text-slate-400">
              Need full advisory support?{" "}
              <Link href="/book-consultation" className="text-blue-400 font-semibold hover:underline">
                Schedule a Strategy Call ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
