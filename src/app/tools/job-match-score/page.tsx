"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Target,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Save,
  Check,
} from "lucide-react";
import { calculateJobMatchScore, JobMatchResult } from "@/lib/assessmentEngine";
import { useCandidateStore } from "@/lib/store";

export default function JobMatchScorePage() {
  const [targetJobTitle, setTargetJobTitle] = useState("Senior Backend Engineer");
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<JobMatchResult | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [saved, setSaved] = useState(false);

  const { addAssessmentResult } = useCandidateStore();

  const handleMatch = () => {
    if (!resumeText.trim() || !jobDescription.trim()) return;
    setAnalyzing(true);
    setSaved(false);

    const res = calculateJobMatchScore({
      resumeText,
      targetJobTitle,
      jobDescription,
    });
    setResult(res);
    setAnalyzing(false);
  };

  const handleSave = () => {
    if (!result) return;
    addAssessmentResult({
      toolType: "job-match-score",
      toolName: "Job Match Score",
      score: result.matchPercentage,
      grade: result.grade,
      summary: `Matched ${targetJobTitle}: ${result.matchPercentage}% overlap. Matching: ${result.matchingKeywords.length}, Missing: ${result.missingKeywords.length}.`,
      details: {
        matchingKeywords: result.matchingKeywords,
        missingKeywords: result.missingKeywords,
        experienceAlignment: result.experienceAlignment,
      },
    });
    setSaved(true);
  };

  const loadSample = () => {
    setTargetJobTitle("Senior Cloud Backend Engineer");
    setResumeText(`Alex Morgan
alex.morgan@cxcodextech.com | New York, NY | +1 (201) 772-2853
Senior Software Engineer with 5 years building cloud applications in Go, Python, and TypeScript on AWS.
Experience:
• Architected 10+ microservices deployed on AWS ECS with Docker and Kubernetes.
• Built high-performance data pipelines with PostgreSQL, Redis, and Kafka.
• Implemented automated CI/CD pipelines with GitHub Actions and Terraform.`);

    setJobDescription(`Job Description: Senior Cloud Backend Engineer
Location: Remote USA
We are looking for a Senior Cloud Backend Engineer to join our core platform team.
Requirements:
• 4+ years of professional software engineering experience.
• Strong hands-on expertise with Python, Golang, and TypeScript.
• Deep understanding of AWS, Docker, Kubernetes, and Terraform.
• Experience with Kafka, Redis, PostgreSQL, and distributed systems.
• Proven track record with CI/CD, microservices architecture, and GraphQL APIs.
• Excellent communication skills and Agile team collaboration.`);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            Resume ↔ Role Fit Scoring
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Job Match Score & Keyword Gap Analyzer
          </h1>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Compare your resume directly against an active US job requisition to identify keyword gaps, skills alignment, and actionable resume adjustments before applying.
          </p>
        </div>

        {!result && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Input Requisition & Resume:
              </span>
              <button
                type="button"
                onClick={loadSample}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 underline"
              >
                Load Sample Job & Resume
              </button>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Target Role Title
              </label>
              <input
                type="text"
                value={targetJobTitle}
                onChange={(e) => setTargetJobTitle(e.target.value)}
                placeholder="e.g. Senior Cloud Backend Engineer"
                className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Job Description Text
                </label>
                <textarea
                  rows={10}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the employer's full job description, qualifications, and requirements..."
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Your Current Resume Text
                </label>
                <textarea
                  rows={10}
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste your current resume content here..."
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                disabled={!resumeText.trim() || !jobDescription.trim() || analyzing}
                onClick={handleMatch}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl transition-colors shadow-md shadow-blue-500/25 disabled:opacity-50"
              >
                {analyzing ? "Computing Keyword Vectors..." : "Calculate Job Match Fit ↗"}
              </button>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {result && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Score Summary Banner */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Role Fit Compatibility Diagnostic
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Status: {result.grade}
                </h2>
                <p className="text-xs text-slate-300 max-w-md">
                  {result.experienceAlignment}. Identified {result.matchingKeywords.length} overlapping technical tokens and {result.missingKeywords.length} missing keywords.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-indigo-400">{result.matchPercentage}%</div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Role Match
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{saved ? "Saved to Dashboard!" : "Save Result"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setResult(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Compare Another Role</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Keyword Comparison Lists */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  Matching Keywords ({result.matchingKeywords.length})
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.matchingKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold"
                    >
                      ✓ {kw}
                    </span>
                  ))}
                  {result.matchingKeywords.length === 0 && (
                    <p className="text-xs text-slate-500">No major stack keywords matched yet.</p>
                  )}
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
                  <AlertCircle className="w-4 h-4" />
                  Missing / Under-represented ({result.missingKeywords.length})
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.missingKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold"
                    >
                      ! {kw}
                    </span>
                  ))}
                  {result.missingKeywords.length === 0 && (
                    <p className="text-xs text-emerald-600 font-semibold">
                      Zero high-value keyword gaps detected!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Tactical Optimization Tips */}
            <div className="bg-blue-50/70 p-6 sm:p-8 rounded-3xl border border-blue-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                Targeted Resume Optimization Advice
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-blue-950">
                {result.resumeOptimizationTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 text-white">
              <div>
                <div className="text-sm font-bold">Want human job campaign management?</div>
                <div className="text-xs text-slate-400">
                  Our search managers curate high-match opportunities and tailor applications specifically for each requisition.
                </div>
              </div>
              <Link
                href="/services/custom-job-campaigns"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide transition-colors shrink-0"
              >
                Custom Job Campaigns ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
