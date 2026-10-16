"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gauge, Sparkles, ArrowRight, ShieldCheck, Check } from "lucide-react";

export default function SignalDashboard() {
  const [activeMetric, setActiveMetric] = useState<1 | 2 | 3>(1);

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial glows and orbit rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-indigo-500/15 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              01 / CAREER INTELLIGENCE SIGNAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Get ready for the US market. <br />
              <span className="grad-text-light">Know exactly what to improve.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            We help you understand how your resume, profile, skills, and interview readiness stack up against live requisitions — then build a practical plan to land the right opportunity.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Big Score Box */}
            <div className="lg:col-span-4 bg-slate-950/80 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  US Career Readiness
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-white tracking-tight">84</span>
                  <span className="text-lg text-slate-500 font-semibold">/100</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full w-[84%]" />
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Strong foundation. Your profile is marketable — sharpen your positioning and quantified metrics to unlock high-visibility opportunities.
              </p>

              <Link
                href="/tools"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1.5"
              >
                <span>Improve My US Career Readiness</span>
                <span className="text-blue-200">↗</span>
              </Link>
            </div>

            {/* Middle Orbital Visual */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center py-6">
              <div className="relative w-52 h-52 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: "30s" }} />
                <div className="absolute inset-4 rounded-full border border-dashed border-indigo-400/20" />
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-700 via-indigo-600 to-slate-900 flex flex-col items-center justify-center text-center p-3 shadow-xl shadow-blue-500/30 animate-signal-pulse">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">CX CODEX</span>
                  <span className="text-xs font-black text-white">CAREER SIGNAL</span>
                </div>
              </div>
              <span className="text-[11px] text-slate-400 mt-2 font-mono">
                Telemetry: Continuous Market Evaluation
              </span>
            </div>

            {/* Right Interactive Metrics Column */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setActiveMetric(1)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  activeMetric === 1
                    ? "bg-slate-800/90 border-blue-500 text-white shadow-md"
                    : "bg-slate-950/60 border-slate-800 hover:bg-slate-800/50 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-blue-400">01 / PROFILE</span>
                  <span className="text-xl font-black text-white">84%</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">Positioning & Visibility</div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-[84%]" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveMetric(2)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  activeMetric === 2
                    ? "bg-slate-800/90 border-blue-500 text-white shadow-md"
                    : "bg-slate-950/60 border-slate-800 hover:bg-slate-800/50 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-blue-400">02 / MATCH</span>
                  <span className="text-xl font-black text-white">91%</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">Skills & US Role Fit</div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full w-[91%]" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveMetric(3)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  activeMetric === 3
                    ? "bg-slate-800/90 border-blue-500 text-white shadow-md"
                    : "bg-slate-950/60 border-slate-800 hover:bg-slate-800/50 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-blue-400">03 / READINESS</span>
                  <span className="text-xl font-black text-white">76%</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">Technical + Behavioral Loop</div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[76%]" />
                </div>
              </button>
            </div>
          </div>

          {/* Bottom Career Steps Flow */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span className="text-blue-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> 01 PROFILE
            </span>
            <span className="text-slate-600">→</span>
            <span className="text-blue-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> 02 PREPARE
            </span>
            <span className="text-slate-600">→</span>
            <span className="text-blue-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> 03 MATCH
            </span>
            <span className="text-slate-600">→</span>
            <span className="text-blue-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> 04 INTERVIEW
            </span>
            <span className="text-slate-600">→</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 05 OPPORTUNITY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
