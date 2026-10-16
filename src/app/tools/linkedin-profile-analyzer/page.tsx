"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Save,
  Copy,
  Check,
} from "lucide-react";
import { Linkedin } from "@/components/LinkedInIcon";
import { analyzeLinkedInProfile, LinkedInAnalysisResult } from "@/lib/assessmentEngine";
import { useCandidateStore } from "@/lib/store";

export default function LinkedInAnalyzerPage() {
  const [headline, setHeadline] = useState("");
  const [about, setAbout] = useState("");
  const [targetRole, setTargetRole] = useState("Senior Full Stack Engineer");
  const [experienceLevel, setExperienceLevel] = useState("Mid-Level (3-5 years)");
  const [skills, setSkills] = useState("React, TypeScript, Node.js, AWS, PostgreSQL, Docker");

  const [result, setResult] = useState<LinkedInAnalysisResult | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copiedHeadline, setCopiedHeadline] = useState<number | null>(null);
  const [copiedAbout, setCopiedAbout] = useState(false);

  const { addAssessmentResult } = useCandidateStore();

  const handleAnalyze = () => {
    if (!headline.trim() || !about.trim()) return;
    setAnalyzing(true);
    setSaved(false);

    const res = analyzeLinkedInProfile({
      headline,
      about,
      targetRole,
      experienceLevel,
      skills,
    });
    setResult(res);
    setAnalyzing(false);
  };

  const handleSave = () => {
    if (!result) return;
    addAssessmentResult({
      toolType: "linkedin-profile-analyzer",
      toolName: "LinkedIn Profile Analyzer",
      score: result.overallScore,
      grade: result.grade,
      summary: `Score: ${result.overallScore}/100. Target role: ${targetRole}.`,
      details: result.breakdown as unknown as Record<string, unknown>,
    });
    setSaved(true);
  };

  const loadSample = () => {
    setHeadline("Software Engineer looking for new opportunities | Ex-Startup Developer");
    setAbout(
      "I am a passionate software developer who loves coding and learning new tech stacks. I have worked on web applications using JavaScript and React. Looking to join a forward-thinking US engineering team where I can add value."
    );
    setTargetRole("Senior Frontend / Full Stack Engineer");
    setExperienceLevel("Mid-Level (3-5 years)");
    setSkills("React, TypeScript, Next.js, GraphQL, Tailwind CSS, Jest");
  };

  const copyToClipboard = (text: string, type: "headline" | "about", idx?: number) => {
    navigator.clipboard.writeText(text);
    if (type === "headline" && idx !== undefined) {
      setCopiedHeadline(idx);
      setTimeout(() => setCopiedHeadline(null), 2000);
    } else {
      setCopiedAbout(true);
      setTimeout(() => setCopiedAbout(false), 2000);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            Recruiter Search & Positioning Scanner
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            LinkedIn Profile Analyzer & Optimizer
          </h1>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Evaluate how US tech recruiters view your headline, About section, and core skills keywords in LinkedIn Recruiter boolean searches.
          </p>
        </div>

        {!result && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Input Profile Parameters:
              </span>
              <button
                type="button"
                onClick={loadSample}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 underline"
              >
                Load Sample Profile Data
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Target Role Title
                </label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  placeholder="e.g. Senior Backend Engineer"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Experience Seniority
                </label>
                <select
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option>Entry-Level / Graduate</option>
                  <option>Mid-Level (3-5 years)</option>
                  <option>Senior (5-8 years)</option>
                  <option>Lead / Principal (8+ years)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Current LinkedIn Headline
              </label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="Paste your current headline exactly as shown on LinkedIn..."
                className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Current LinkedIn About Summary
              </label>
              <textarea
                rows={6}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Paste your complete LinkedIn About section..."
                className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Core Stack Keywords (Comma Separated)
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g. React, Node.js, AWS, Kubernetes, PostgreSQL"
                className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                disabled={!headline.trim() || !about.trim() || analyzing}
                onClick={handleAnalyze}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl transition-colors shadow-md shadow-blue-500/25 disabled:opacity-50"
              >
                {analyzing ? "Evaluating Positioning..." : "Analyze LinkedIn Presence ↗"}
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
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  LinkedIn Positioning Diagnostic
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Status: {result.grade}
                </h2>
                <p className="text-xs text-slate-300 max-w-md">
                  Evaluated headline click-through rate, keyword indexing density, and achievement framing.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-sky-400">{result.overallScore}</div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Score / 100
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
                    <span>Edit / Retry</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 4 Parameter Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Headline Clarity
                </span>
                <div className="text-xl font-extrabold text-slate-900">
                  {result.breakdown.headlineClarity}%
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Keyword Coverage
                </span>
                <div className="text-xl font-extrabold text-slate-900">
                  {result.breakdown.keywordCoverage}%
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Value Proposition
                </span>
                <div className="text-xl font-extrabold text-slate-900">
                  {result.breakdown.valueProposition}%
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Readability & Depth
                </span>
                <div className="text-xl font-extrabold text-slate-900">
                  {result.breakdown.readabilityAndLength}%
                </div>
              </div>
            </div>

            {/* Rewritten Headline Suggestions */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                  Optimized Headline Variations (Ready to Copy)
                </span>
                <span className="text-[11px] text-slate-400">
                  Format: Role | Core Stack | Quantified Scale
                </span>
              </div>

              <div className="space-y-3">
                {result.rewrittenHeadlineSuggestions.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 font-mono">
                      {hl}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(hl, "headline", idx)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 shrink-0"
                    >
                      {copiedHeadline === idx ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedHeadline === idx ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Rewritten About Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block">
                  Sample Rewritten About Section
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(result.rewrittenAboutSample, "about")}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 shrink-0"
                >
                  {copiedAbout ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAbout ? "Copied Full Text" : "Copy Template"}</span>
                </button>
              </div>

              <pre className="p-5 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                {result.rewrittenAboutSample}
              </pre>
            </div>

            {/* Next Steps CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 text-white">
              <div>
                <div className="text-sm font-bold">Want human LinkedIn rebranding by our advisors?</div>
                <div className="text-xs text-slate-400">
                  We rewrite your complete profile, create a custom banner, and configure recruiter discoverability.
                </div>
              </div>
              <Link
                href="/services/linkedin-profile-rebranding"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide transition-colors shrink-0"
              >
                LinkedIn Rebranding Service ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
