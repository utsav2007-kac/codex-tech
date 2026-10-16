"use client";

import React, { useState } from "react";
import DashboardShell from "@/components/DashboardShell";
import { useCandidateStore } from "@/lib/store";
import {
  Settings,
  Bell,
  Shield,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function SettingsPage() {
  const { purgeAllData } = useCandidateStore();
  const [purged, setPurged] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Preference switches
  const [jobAlerts, setJobAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [recruiterOutreach, setRecruiterOutreach] = useState(true);

  const handlePurge = () => {
    purgeAllData();
    setShowConfirm(false);
    setPurged(true);
    setTimeout(() => setPurged(false), 4000);
  };

  return (
    <DashboardShell>
      <div className="max-w-3xl space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Account & Privacy Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your communication preferences, security parameters, and data retention policies.
          </p>
        </div>

        {purged && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            All candidate records, local history, and browser storage have been wiped cleanly.
          </div>
        )}

        {/* Communication Preferences */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-5">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
            <Bell className="w-4 h-4 text-blue-600" /> Notifications & Alerts
          </h2>

          <div className="space-y-4">
            <label className="flex items-start justify-between gap-4 cursor-pointer">
              <div>
                <div className="text-xs font-bold text-slate-900">Job Match & Target Market Alerts</div>
                <div className="text-[11px] text-slate-500">
                  Receive instant alerts when verified tech roles matching your salary and visa status open up.
                </div>
              </div>
              <input
                type="checkbox"
                checked={jobAlerts}
                onChange={(e) => setJobAlerts(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded-md border-slate-300 focus:ring-blue-500 mt-0.5 cursor-pointer"
              />
            </label>

            <label className="flex items-start justify-between gap-4 cursor-pointer">
              <div>
                <div className="text-xs font-bold text-slate-900">Weekly Career Sprint Digest</div>
                <div className="text-[11px] text-slate-500">
                  A Monday morning summary of interview milestones, application statuses, and coach feedback.
                </div>
              </div>
              <input
                type="checkbox"
                checked={weeklyDigest}
                onChange={(e) => setWeeklyDigest(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded-md border-slate-300 focus:ring-blue-500 mt-0.5 cursor-pointer"
              />
            </label>

            <label className="flex items-start justify-between gap-4 cursor-pointer">
              <div>
                <div className="text-xs font-bold text-slate-900">Partner Employer Direct Inquiries</div>
                <div className="text-[11px] text-slate-500">
                  Allow vetted CX Codex recruiting partners to review your anonymized candidate profile.
                </div>
              </div>
              <input
                type="checkbox"
                checked={recruiterOutreach}
                onChange={(e) => setRecruiterOutreach(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded-md border-slate-300 focus:ring-blue-500 mt-0.5 cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Security & Access */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-600" /> Security & Session Privacy
          </h2>

          <div className="text-xs text-slate-600 space-y-2">
            <p>
              Your session runs in <strong>Isolated Browser Sandbox Mode</strong>. No external third-party tracking cookies or ad pixels are loaded.
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Authentication Token: <strong>Active Demo Bearer</strong></span>
              <span className="font-mono text-emerald-600 font-bold">256-Bit Encrypted</span>
            </div>
          </div>
        </div>

        {/* GDPR Danger Zone */}
        <div className="bg-rose-50/50 p-6 sm:p-8 rounded-3xl border border-rose-200 space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-rose-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600" /> Data Retention & GDPR Purge
          </h2>

          <p className="text-xs text-rose-800/80 leading-relaxed">
            In accordance with international privacy regulations (GDPR, CCPA) and candidate privacy rights, you have full authority to purge all stored profile details, mock applications, assessments, and cached files from your browser.
          </p>

          <div>
            <button
              type="button"
              onClick={() => setShowConfirm(true)}
              className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" /> Purge All Local Data
            </button>
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirm && (
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 text-rose-600">
                <AlertTriangle className="w-6 h-6 shrink-0" />
                <h3 className="text-base font-bold text-slate-900">Confirm Complete Data Purge</h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                This action will permanently delete all your local assessment history, active application pipelines, sprint goals, and profile updates. This cannot be undone.
              </p>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handlePurge}
                  className="px-5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700"
                >
                  Yes, Purge Everything
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
