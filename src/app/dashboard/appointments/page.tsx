"use client";

import React from "react";
import Link from "next/link";
import DashboardShell from "@/components/DashboardShell";
import { useCandidateStore } from "@/lib/store";
import {
  CalendarCheck,
  Clock,
  Video,
  ShieldCheck,
  Plus,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export default function AppointmentsPage() {
  const { appointments } = useCandidateStore();

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Advisory Sessions & Consultations
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Confirmed 1-on-1 strategy sessions with CX CODEX TECH-IT senior career advisors and talent partners.
            </p>
          </div>
          <Link
            href="/book-consultation"
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" /> Schedule New Session
          </Link>
        </div>

        {appointments.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-300 text-center space-y-4">
            <CalendarCheck className="w-12 h-12 text-slate-400 mx-auto" />
            <h2 className="text-base font-bold text-slate-800">No Advisory Sessions Scheduled</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Book a confidential 30-minute career audit with a CX Codex placement strategist to review your target market.
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              Book 1-on-1 Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider border border-emerald-100">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Confirmed Appointment
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      {apt.consultationType}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Candidate Stage: <strong>{apt.careerStage}</strong> · Target Role:{" "}
                      <strong>{apt.targetRole}</strong>
                    </p>
                  </div>

                  <div className="text-left sm:text-right bg-blue-50/80 p-3 sm:p-3.5 rounded-2xl border border-blue-100 shrink-0">
                    <div className="text-xs font-extrabold text-blue-900">
                      {new Date(apt.preferredDate).toLocaleDateString(undefined, {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="text-sm font-black text-blue-700 flex items-center sm:justify-end gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5" /> {apt.preferredTimeSlot}
                    </div>
                    <div className="text-[10px] text-blue-600 font-mono mt-0.5">{apt.timeZone}</div>
                  </div>
                </div>

                {apt.goals && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Agenda & Goals
                    </div>
                    <p className="text-xs text-slate-700">{apt.goals}</p>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span>{apt.notes || "Senior Career Strategist Assigned"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
                      <Video className="w-3.5 h-3.5 text-blue-600" /> Zoom link emailed 1 hr before
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
