"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, Briefcase, RefreshCw, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function AudienceSelector() {
  const [selectedSlug, setSelectedSlug] = useState("students-graduates");

  const currentAudience =
    SITE_CONFIG.audiences.find((a) => a.slug === selectedSlug) || SITE_CONFIG.audiences[0];

  const getIcon = (slug: string) => {
    switch (slug) {
      case "students-graduates":
        return <GraduationCap className="w-5 h-5" />;
      case "experienced-professionals":
        return <Briefcase className="w-5 h-5" />;
      case "career-switchers":
        return <RefreshCw className="w-5 h-5" />;
      case "international-professionals":
        return <Globe className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              02 / IS CX CODEX FOR YOU?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Wherever you are in your career, <br />
              <span className="grad-text">there is a concrete next step.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            CX CODEX TECH-IT tailors career strategy, profile positioning, and job search campaigns for candidates at every stage of the technology journey.
          </p>
        </div>

        {/* Audience Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {SITE_CONFIG.audiences.map((aud) => (
            <button
              key={aud.slug}
              type="button"
              onClick={() => setSelectedSlug(aud.slug)}
              className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                selectedSlug === aud.slug
                  ? "bg-slate-950 border-slate-950 text-white shadow-lg"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100/80 text-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`p-2 rounded-xl ${
                    selectedSlug === aud.slug ? "bg-blue-600 text-white" : "bg-white text-slate-700 border border-slate-200"
                  }`}
                >
                  {getIcon(aud.slug)}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    selectedSlug === aud.slug ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {aud.badge}
                </span>
              </div>
              <div className="font-bold text-sm leading-snug">{aud.title}</div>
            </button>
          ))}
        </div>

        {/* Detailed Selected Audience Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  {currentAudience.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  {currentAudience.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2">{currentAudience.tagline}</p>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Challenges Solved:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {currentAudience.challenges.map((c, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  CX Codex Strategic Support:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {currentAudience.solutions.map((s, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  Recommended Support Framework
                </span>
                <div className="text-lg font-extrabold text-slate-900 capitalize">
                  {currentAudience.recommendedPlan.replace(/-/g, " ")}
                </div>
                <p className="text-xs text-slate-500">
                  Engineered specifically to solve the hurdles faced by {currentAudience.title.toLowerCase()}.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                  Recommended Assessment Tools:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentAudience.recommendedTools.map((t) => (
                    <Link
                      key={t}
                      href={`/tools/${t}`}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 hover:text-blue-600 hover:border-blue-400 transition-colors"
                    >
                      {t.replace(/-/g, " ")} ↗
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href={`/audiences/${currentAudience.slug}`}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center block transition-colors shadow-md shadow-blue-500/20"
                >
                  Explore Complete {currentAudience.title} Guide ↗
                </Link>
                <Link
                  href="/book-consultation"
                  className="w-full py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs text-center block transition-colors"
                >
                  Book Free Intake Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
