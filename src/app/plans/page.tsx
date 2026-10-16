import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, Star, ArrowRight, Shield, HelpCircle, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Career Support Plans & Pricing | CX CODEX TECH-IT",
  description:
    "Compare our three structured US technology career support plans: US Career Ready, US Career Accelerator, and Career Support Partner. Transparent scope and dedicated mentorship.",
};

export default function PlansPage() {
  const comparisonMatrix = [
    { feature: "1-on-1 Strategy & US Market Mapping", ready: true, accelerator: true, partner: true },
    { feature: "Full ATS Resume Rebranding (Word & PDF)", ready: true, accelerator: true, partner: true },
    { feature: "LinkedIn Profile Rebranding & Banner", ready: true, accelerator: true, partner: true },
    { feature: "Access to All Assessment Tools & Rubrics", ready: true, accelerator: true, partner: true },
    { feature: "Dedicated Job Campaign Manager", ready: false, accelerator: true, partner: true },
    { feature: "Weekly Curated Application Shortlists (25–40 roles)", ready: false, accelerator: true, partner: true },
    { feature: "Targeted Application Submissions with Explicit Consent", ready: false, accelerator: true, partner: true },
    { feature: "Recorded 1-on-1 Technical / Behavioral Mock Interviews", ready: "Starter Guide", accelerator: "2 Sessions", partner: "Unlimited" },
    { feature: "System Design & Technical Architecture Mentorship", ready: false, accelerator: true, partner: true },
    { feature: "Direct Visibility Across CX Codex US Client & MSP Networks", ready: false, accelerator: false, partner: true },
    { feature: "Pre-Interview Briefing Calls before Client Loops", ready: false, accelerator: false, partner: true },
    { feature: "Offer Review, Benefits Modeling & Negotiation Scripts", ready: false, accelerator: true, partner: true },
    { feature: "6–12 Months Post-Placement Onboarding Advisory", ready: false, accelerator: false, partner: true },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            Structured Support Frameworks
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Transparent Career Plans. <br />
            <span className="grad-text">Engineered for Your Growth.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Choose the support tier that matches your career stage and speed. Every plan includes dedicated advisory, rigorous quality benchmarks, and zero hidden commitments.
          </p>
        </div>
      </div>

      {/* 3 Main Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 mb-24">
        {SITE_CONFIG.plans.map((p, idx) => (
          <div
            key={p.slug}
            className={`rounded-3xl p-8 border flex flex-col justify-between transition-all relative ${
              p.popular
                ? "bg-slate-900 text-white border-slate-800 shadow-2xl lg:-translate-y-2"
                : "bg-slate-50 border-slate-200 text-slate-900 shadow-sm"
            }`}
          >
            {p.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-current" />
                Most Popular Choice
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-mono font-bold ${
                    p.popular ? "text-blue-400" : "text-slate-500"
                  }`}
                >
                  0{idx + 1} / {idx === 0 ? "START" : idx === 1 ? "BUILD" : "PARTNER"}
                </span>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                    p.popular
                      ? "bg-slate-800 text-slate-300 border border-slate-700"
                      : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {p.commitment}
                </span>
              </div>

              <h2
                className={`text-2xl font-extrabold tracking-tight mb-2 ${
                  p.popular ? "text-white" : "text-slate-950"
                }`}
              >
                {p.name}
              </h2>

              <p
                className={`text-xs leading-relaxed mb-6 ${
                  p.popular ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {p.tagline}
              </p>

              <div
                className={`p-3.5 rounded-2xl mb-6 text-xs font-medium ${
                  p.popular
                    ? "bg-slate-800/80 border border-slate-700 text-blue-200"
                    : "bg-white border border-slate-200 text-blue-700"
                }`}
              >
                <span className="font-bold block text-[10px] uppercase tracking-wider mb-0.5">
                  Ideal For:
                </span>
                {p.idealFor}
              </div>

              <div className="space-y-3 mb-8">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider block ${
                    p.popular ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Included Features:
                </span>
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        p.popular ? "text-emerald-400" : "text-blue-600"
                      }`}
                    />
                    <span className={p.popular ? "text-slate-200" : "text-slate-700"}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-800/50">
              <div className="text-[11px] text-center font-medium opacity-80">
                {p.pricingNote}
              </div>
              <Link
                href={`/plans/${p.slug}`}
                className={`w-full py-3.5 rounded-xl text-xs font-bold text-center block transition-all shadow-md ${
                  p.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                View Full Plan Specifications ↗
              </Link>
              <Link
                href="/book-consultation"
                className={`w-full py-2.5 rounded-xl text-xs font-semibold text-center block transition-colors ${
                  p.popular
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Schedule Plan Strategy Session
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Full Comparison Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            FEATURE-BY-FEATURE BREAKDOWN
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Detailed Plan Comparison
          </h2>
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-4 sm:p-5 font-bold">Capabilities & Deliverables</th>
                  <th className="p-4 sm:p-5 font-bold text-center">US Career Ready</th>
                  <th className="p-4 sm:p-5 font-bold text-center text-blue-400">
                    US Career Accelerator
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-center">Career Support Partner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonMatrix.map((row, i) => (
                  <tr key={i} className="hover:bg-white transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.ready === "boolean" ? (
                        row.ready ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <span className="text-slate-400">—</span>
                        )
                      ) : (
                        <span className="text-xs font-semibold text-slate-700">{row.ready}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center bg-blue-50/40">
                      {typeof row.accelerator === "boolean" ? (
                        row.accelerator ? (
                          <Check className="w-4 h-4 text-blue-600 mx-auto" />
                        ) : (
                          <span className="text-slate-400">—</span>
                        )
                      ) : (
                        <span className="text-xs font-bold text-blue-700">
                          {row.accelerator}
                        </span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.partner === "boolean" ? (
                        row.partner ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <span className="text-slate-400">—</span>
                        )
                      ) : (
                        <span className="text-xs font-bold text-slate-900">{row.partner}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
