"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Building2, ShieldCheck, ArrowRight } from "lucide-react";

export default function SubmitRequirementPage() {
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [targetRoles, setTargetRoles] = useState("Full Stack Engineer, Cloud Architect");
  const [experience, setExperience] = useState("Senior (5+ years)");
  const [location, setLocation] = useState("Remote USA / Hybrid");
  const [hiringNeeds, setHiringNeeds] = useState("");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseDetails, setResponseDetails] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setErrorMsg("Please agree to the privacy and communication consent policy.");
      return;
    }
    setErrorMsg("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/employer-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organizationName: orgName,
          contactName,
          businessEmail: email,
          phone,
          targetRoles: targetRoles.split(",").map((r) => r.trim()),
          experienceRequirements: experience,
          locationPreferences: location,
          hiringNeeds,
          additionalNotes: notes,
          inquiryType: "Submit Requirement",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setResponseDetails(data);
      } else {
        setErrorMsg(data.error || "Submission failed. Please check inputs.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            Employer Talent Requisition Desk
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Submit Open Tech Requirements
          </h1>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Dispatch your open software engineering, data, and cloud roles directly to our technical vetting team. We match benchmarked candidates within 48 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Requirement Successfully Dispatched
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {responseDetails?.message || "Thank you. Our corporate talent desk will review your specifications."}
            </p>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-700 inline-block">
              Inquiry Reference ID: {responseDetails?.inquiryId}
            </div>
            <div className="pt-4 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold"
              >
                Submit Another Requirement
              </button>
              <Link
                href="/employers"
                className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold"
              >
                Back to Employer Portal
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Organization / Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g. Apex Cloud Systems"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Contact Person Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Business Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah.jenkins@company.com"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Direct Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Target Roles / Stack *
                </label>
                <input
                  type="text"
                  required
                  value={targetRoles}
                  onChange={(e) => setTargetRoles(e.target.value)}
                  placeholder="e.g. Senior Go / AWS Backend Engineer, Data Architect"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Experience Tier
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option>Mid-Level (3-5 years)</option>
                  <option>Senior (5-8 years)</option>
                  <option>Lead / Principal (8+ years)</option>
                  <option>Any Qualified Tier</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Location & Work Arrangement
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Remote USA, Hybrid (New York, NY), or Austin, TX"
                className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Hiring Needs & Job Description Summary *
              </label>
              <textarea
                rows={5}
                required
                value={hiringNeeds}
                onChange={(e) => setHiringNeeds(e.target.value)}
                placeholder="Describe project context, core deliverables, required technical competencies, and target start date..."
                className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-start gap-2.5 pt-2">
              <input
                type="checkbox"
                id="consentCheck"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="consentCheck" className="text-xs text-slate-600 leading-snug">
                I authorize CX CODEX TECH-IT to contact our hiring team regarding pre-vetted candidate profiles matching these specifications. We respect your confidentiality.
              </label>
            </div>

            {errorMsg && <p className="text-xs text-rose-500 font-semibold">{errorMsg}</p>}

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl transition-colors shadow-md shadow-blue-500/25 disabled:opacity-50"
              >
                {submitting ? "Dispatching Requisition..." : "Submit Hiring Requirement ↗"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
