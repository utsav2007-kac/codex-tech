"use client";

import React, { useState } from "react";
import DashboardShell from "@/components/DashboardShell";
import { useCandidateStore } from "@/lib/store";
import { User, Save, CheckCircle2, ShieldCheck, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function ProfilePage() {
  const { profile, saveProfile } = useCandidateStore();
  const [formData, setFormData] = useState({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <DashboardShell>
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Candidate Profile & Targeting
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Configure your career profile, search parameters, and work authorization preferences.
            </p>
          </div>
          {savedSuccess && (
            <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Changes saved locally!
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Identity & Contact Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" /> Personal & Contact Details
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Legal Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone || ""}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Current Primary Location</label>
                <input
                  type="text"
                  value={formData.location || ""}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="e.g. Jersey City, NJ or Dallas, TX"
                />
              </div>
            </div>
          </div>

          {/* Professional Target Role Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" /> Career Target Positioning
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Current Professional Title</label>
                <input
                  type="text"
                  value={formData.currentTitle || ""}
                  onChange={(e) => setFormData({ ...formData, currentTitle: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="e.g. Software Engineer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Job Title</label>
                <input
                  type="text"
                  value={formData.targetRole || ""}
                  onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="e.g. Senior Cloud Architect / DevOps Lead"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Experience Tier</label>
                <select
                  value={formData.experienceLevel || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      experienceLevel: (e.target.value || undefined) as any,
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                >
                  <option value="Student / Entry">Student / Entry-Level (0-2 yrs)</option>
                  <option value="Mid-Level (2-5 yrs)">Mid-Level Professional (2-5 yrs)</option>
                  <option value="Senior (5-8 yrs)">Senior Specialist (5-8 yrs)</option>
                  <option value="Staff / Lead (8+ yrs)">Staff / Lead / Architect (8+ yrs)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Authorization / Visa Status</label>
                <select
                  value={formData.visaStatus || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      visaStatus: (e.target.value || undefined) as any,
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                >
                  <option value="US Citizen / Green Card">US Citizen / Permanent Resident (GC)</option>
                  <option value="F-1 OPT / STEM OPT">F-1 OPT / STEM OPT (E-Verify required)</option>
                  <option value="H-1B Transfer">H-1B Cap-Subject or Transfer</option>
                  <option value="Requires Sponsorship">Requires International Sponsorship</option>
                  <option value="Other">Other Authorization Status</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Target Metro Areas (comma-separated)
              </label>
              <input
                type="text"
                value={formData.targetLocations?.join(", ") || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    targetLocations: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="e.g. New York NY, Austin TX, Remote USA, San Francisco CA"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Used to match job alerts, salary benchmarks, and local hiring market trends.
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-500">
              Last saved: {new Date(formData.updatedAt).toLocaleDateString()}
            </span>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save Profile Preferences
            </button>
          </div>
        </form>
      </div>
    </DashboardShell>
  );
}
