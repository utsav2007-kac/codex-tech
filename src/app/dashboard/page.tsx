"use client";

import React from "react";
import Link from "next/link";
import DashboardShell from "@/components/DashboardShell";
import { useCandidateStore } from "@/lib/store";
import {
  Gauge,
  Briefcase,
  Compass,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function DashboardOverviewPage() {
  const { profile, goals, applications, assessments, appointments } = useCandidateStore();

  const completedGoals = goals.filter((g) => g.status === "completed").length;
  const inProgressGoals = goals.filter((g) => g.status === "in_progress").length;
  const recentAssessments = assessments.slice(0, 3);
  const activeApplications = applications.slice(0, 4);

  return (
    <DashboardShell>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3 border border-blue-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              Candidate Flight Deck
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Welcome back, {profile.fullName.split(" ")[0]}
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Targeting: <strong className="text-white">{profile.targetRole}</strong> in{" "}
              {profile.targetLocations?.join(", ") || "USA"}. Your personalized search metrics are tracking
              in real-time.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/tools"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm inline-flex items-center gap-1.5"
              >
                <Gauge className="w-4 h-4" /> Run New Assessment
              </Link>
              <Link
                href="/dashboard/applications"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition border border-white/10 inline-flex items-center gap-1.5"
              >
                Track Applications <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <div className="text-slate-500 text-xs font-medium mb-1 flex items-center justify-between">
              <span>Profile Score</span>
              <Gauge className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-black text-slate-900">{profile.profileCompletion}%</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Ready for outreach
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <div className="text-slate-500 text-xs font-medium mb-1 flex items-center justify-between">
              <span>Milestones</span>
              <Compass className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-2xl font-black text-slate-900">
              {completedGoals}/{goals.length}
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              {inProgressGoals} active sprints
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <div className="text-slate-500 text-xs font-medium mb-1 flex items-center justify-between">
              <span>Live Submissions</span>
              <Briefcase className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-slate-900">{applications.length}</div>
            <div className="text-[11px] text-blue-600 font-medium mt-1">
              {applications.filter((a) => a.status === "technical_loop").length} in interview loops
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <div className="text-slate-500 text-xs font-medium mb-1 flex items-center justify-between">
              <span>Strategy Sessions</span>
              <CalendarCheck className="w-4 h-4 text-violet-600" />
            </div>
            <div className="text-2xl font-black text-slate-900">{appointments.length}</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              Next: {appointments[0]?.preferredDate || "Schedule now"}
            </div>
          </div>
        </div>

        {/* Middle Two Column: Recent Assessments & Active Applications */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Assessments */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-blue-600" /> Assessment Diagnostics
              </h2>
              <Link
                href="/dashboard/assessments"
                className="text-xs text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
              >
                View all <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {recentAssessments.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-xs">
                No diagnostic assessments completed yet.
                <div className="mt-3">
                  <Link
                    href="/tools/resume-analyzer"
                    className="inline-block px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold"
                  >
                    Analyze Resume
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {recentAssessments.map((as) => (
                  <div
                    key={as.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{as.toolName}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{as.summary}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-base font-black text-blue-600">{as.score}/100</div>
                      <span className="text-[10px] font-semibold text-slate-500 uppercase">{as.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Active Job Applications */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" /> Active Application Pipeline
              </h2>
              <Link
                href="/dashboard/applications"
                className="text-xs text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
              >
                Manage <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {activeApplications.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-xs">
                No active applications in pipeline.
                <div className="mt-3">
                  <Link
                    href="/dashboard/applications"
                    className="inline-block px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold"
                  >
                    Add Submission
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {activeApplications.map((app) => (
                  <div
                    key={app.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">{app.companyName}</div>
                      <div className="text-[11px] text-slate-600 truncate">{app.roleTitle}</div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shrink-0 ${
                        app.status === "technical_loop"
                          ? "bg-purple-100 text-purple-700"
                          : app.status === "recruiter_screen"
                          ? "bg-amber-100 text-amber-800"
                          : app.status === "offer_extended"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {app.status.replace("_", " ")}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Milestone Roadmap Callout */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-600" /> Career Sprint Checklist
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Active milestones assigned by your CX Codex Career Advisor.
              </p>
            </div>
            <Link
              href="/dashboard/career-plan"
              className="text-xs text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 self-start sm:self-auto"
            >
              Sprint Planner <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase mb-2">
                    <span>{goal.category}</span>
                    <span
                      className={
                        goal.status === "completed" ? "text-emerald-600" : "text-amber-600"
                      }
                    >
                      {goal.status === "completed" ? "Completed" : "In Progress"}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 leading-snug">{goal.title}</h3>
                </div>
                <div className="text-[10px] text-slate-400 mt-3 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Target: {goal.targetDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
