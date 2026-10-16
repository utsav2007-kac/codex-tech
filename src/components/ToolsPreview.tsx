"use client";

import React from "react";
import Link from "next/link";
import { FileSearch, Target, CheckSquare, ArrowRight, Gauge, Sparkles } from "lucide-react";
import { Linkedin } from "@/components/LinkedInIcon";
import { SITE_CONFIG } from "@/config/site";
import TiltCard from "@/components/TiltCard";

export default function ToolsPreview() {
  const toolIcons = [
    <FileSearch key="1" className="w-5 h-5" />,
    <Linkedin key="2" className="w-5 h-5" />,
    <Target key="3" className="w-5 h-5" />,
    <CheckSquare key="4" className="w-5 h-5" />,
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              04 / CAREER INTELLIGENCE TOOLS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Try the tools. <br />
              <span className="grad-text">See exactly where you stand.</span>
            </h2>
          </div>
          <div className="space-y-2 max-w-md">
            <p className="text-slate-600 text-sm leading-relaxed">
              Instant, deterministic assessments based on modern ATS algorithms and US recruiter criteria — with full dedicated tools on each individual page.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Explore all intelligence tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Tool Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.tools.map((tl, idx) => (
            <TiltCard key={tl.slug} maxTilt={8} className="h-full">
              <div
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between h-full"
              >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1} / {tl.tag.toUpperCase()}
                  </span>
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    {toolIcons[idx]}
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {tl.badge}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{tl.title}</h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {tl.description}
                </p>

                {/* Evaluated Metrics List */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    Scoring Parameters:
                  </span>
                  {tl.metrics.slice(0, 3).map((m, i) => (
                    <div key={i} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <Link
                  href={`/tools/${tl.slug}`}
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition-colors shadow-xs"
                >
                  Try Free ↗
                </Link>
                <Link
                  href={`/tools/${tl.slug}`}
                  className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs text-center transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
