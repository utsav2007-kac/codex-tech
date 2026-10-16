"use client";

import React from "react";
import Link from "next/link";
import DashboardShell from "@/components/DashboardShell";
import { useCandidateStore } from "@/lib/store";
import { Gauge, ArrowRight, Clock, Plus, Award } from "lucide-react";

export default function DashboardAssessmentsPage() {
  const { assessments } = useCandidateStore();

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Diagnostic Assessment History
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Transparent, explainable benchmark evaluations calculated by CX Codex’s proprietary scoring engine.
            </p>
          </div>
          <Link
            href="/tools"
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" /> Run New Evaluation
          </Link>
        </div>

        {assessments.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-300 text-center space-y-4">
            <Gauge className="w-12 h-12 text-slate-400 mx-auto" />
            <h2 className="text-base font-bold text-slate-800">No Assessment Records Yet</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Run one of our 4 heuristic tools to analyze your resume, optimize LinkedIn visibility, or check interview readiness.
            </p>
            <Link
              href="/tools/resume-analyzer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              Analyze Resume Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {assessments.map((as) => (
              <div
                key={as.id}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-1.5 border border-blue-100">
                      <Award className="w-3.5 h-3.5" /> {as.toolName}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">{as.grade}</h3>
                    <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" /> Recorded:{" "}
                      {new Date(as.createdAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                    <span className="text-2xl sm:text-3xl font-black text-blue-600">{as.score}</span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Composite / 100
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                  {as.summary}
                </p>

                {as.details && (
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Component Breakdown
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {Object.entries(as.details).map(([k, v]) => (
                        <div key={k} className="p-2.5 rounded-xl border border-slate-100 bg-white">
                          <div className="text-[10px] font-semibold text-slate-500 uppercase truncate">
                            {k.replace(/([A-Z])/g, " $1")}
                          </div>
                          <div className="text-sm font-black text-slate-900 mt-0.5">
                            {typeof v === "number" ? `${v}%` : String(v)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
