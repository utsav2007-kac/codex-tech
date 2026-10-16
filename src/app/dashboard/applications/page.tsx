"use client";

import React, { useState } from "react";
import DashboardShell from "@/components/DashboardShell";
import { useCandidateStore } from "@/lib/store";
import { CandidateApplication } from "@/lib/types";
import {
  Briefcase,
  Plus,
  Building2,
  MapPin,
  DollarSign,
  Calendar,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export default function ApplicationsPage() {
  const { applications, addApplication, updateApplicationStatus } = useCandidateStore();
  const [filter, setFilter] = useState<string>("all");
  const [showAddModal, setShowAddModal] = useState(false);

  // New application form
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [status, setStatus] = useState<CandidateApplication["status"]>("submitted");

  const filteredApps = applications.filter((app) => {
    if (filter === "all") return true;
    return app.status === filter;
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !role) return;
    addApplication({
      companyName: company.trim(),
      roleTitle: role.trim(),
      location: location.trim() || "USA Remote",
      salaryRange: salary.trim() || "Market Competitive",
      status,
      appliedDate: new Date().toISOString().split("T")[0],
      notes: notes.trim(),
      jobUrl: jobUrl.trim(),
    });
    setCompany("");
    setRole("");
    setLocation("");
    setSalary("");
    setNotes("");
    setJobUrl("");
    setShowAddModal(false);
  };

  const statusColors: Record<CandidateApplication["status"], { bg: string; text: string }> = {
    draft: { bg: "bg-slate-100", text: "text-slate-700" },
    submitted: { bg: "bg-blue-100", text: "text-blue-800" },
    recruiter_screen: { bg: "bg-amber-100", text: "text-amber-800" },
    technical_loop: { bg: "bg-purple-100", text: "text-purple-800" },
    final_round: { bg: "bg-indigo-100", text: "text-indigo-800" },
    offer_extended: { bg: "bg-emerald-100", text: "text-emerald-800" },
    declined: { bg: "bg-slate-100", text: "text-slate-600" },
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Job Application Tracker
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Live submission management pipeline. Track interviews, feedback, and compensation offers.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm inline-flex items-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Add Application
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Applications" },
            { id: "submitted", label: "Submitted" },
            { id: "recruiter_screen", label: "Recruiter Screen" },
            { id: "technical_loop", label: "Technical Loop" },
            { id: "final_round", label: "Final Round" },
            { id: "offer", label: "Offer Received" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                filter === tab.id
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pipeline List */}
        {filteredApps.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-300 text-center space-y-3">
            <Briefcase className="w-10 h-10 text-slate-400 mx-auto" />
            <p className="text-xs font-bold text-slate-700">No applications in this category.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-slate-900 truncate">
                      {app.companyName}
                    </span>
                    {app.jobUrl && (
                      <a
                        href={app.jobUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-blue-600"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-slate-700">{app.roleTitle}</div>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {app.location}
                    </span>
                    {app.salaryRange && (
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3" /> {app.salaryRange}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Applied {app.appliedDate}
                    </span>
                  </div>
                  {app.notes && (
                    <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mt-2">
                      {app.notes}
                    </p>
                  )}
                </div>

                {/* Status Dropdown */}
                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Status:</span>
                  <select
                    value={app.status}
                    onChange={(e) =>
                      updateApplicationStatus(
                        app.id,
                        e.target.value as CandidateApplication["status"]
                      )
                    }
                    className={`text-xs font-extrabold px-3 py-1.5 rounded-xl border border-slate-200 cursor-pointer ${
                      statusColors[app.status]?.bg || "bg-slate-100"
                    } ${statusColors[app.status]?.text || "text-slate-800"}`}
                  >
                    <option value="submitted">Submitted</option>
                    <option value="recruiter_screen">Recruiter Screen</option>
                    <option value="technical_loop">Technical Loop</option>
                    <option value="final_round">Final Round</option>
                    <option value="offer_extended">Offer Extended</option>
                    <option value="declined">Declined / Archived</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Application Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-blue-600" /> Track New Opportunity
                </h2>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAdd} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Datadog"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Role Title</label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Senior Cloud Engineer"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. New York, NY (Hybrid)"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Compensation</label>
                    <input
                      type="text"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      placeholder="e.g. $160k - $175k"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Job Post Link</label>
                  <input
                    type="url"
                    value={jobUrl}
                    onChange={(e) => setJobUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Initial Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as CandidateApplication["status"])}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white"
                  >
                    <option value="submitted">Submitted</option>
                    <option value="recruiter_screen">Recruiter Screen</option>
                    <option value="technical_loop">Technical Loop</option>
                    <option value="final_round">Final Round</option>
                    <option value="offer_extended">Offer Received</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Notes / Next Steps</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Notes on recruiter feedback, prep materials, or schedule..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
                  >
                    Track Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
