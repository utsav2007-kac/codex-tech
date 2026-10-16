"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileSearch,
  Upload,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Save,
} from "lucide-react";
import { analyzeResume, ResumeAnalysisResult } from "@/lib/assessmentEngine";
import { useCandidateStore } from "@/lib/store";

export default function ResumeAnalyzerPage() {
  const [resumeText, setResumeText] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<ResumeAnalysisResult | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [savedMessage, setSavedMessage] = useState(false);

  const { addAssessmentResult } = useCandidateStore();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit. Please upload a smaller document.");
      return;
    }

    setFileName(file.name);

    // Read plain text if text file or extract text
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        setResumeText(content);
      }
    };
    reader.readAsText(file);
  };

  const handleAnalyze = async () => {
    if (!resumeText.trim()) return;
    setAnalyzing(true);
    setSavedMessage(false);

    // Run deterministic analysis
    const analysis = analyzeResume(resumeText);
    setResult(analysis);
    setAnalyzing(false);
  };

  const handleSaveToDashboard = () => {
    if (!result) return;
    addAssessmentResult({
      toolType: "resume-analyzer",
      toolName: "Resume Analyzer",
      score: result.overallScore,
      grade: result.grade,
      summary: `Score: ${result.overallScore}/100. Action verbs: ${result.detectedActionVerbs.length}. Metrics: ${result.metricSnippets.length}.`,
      details: result.breakdown as unknown as Record<string, unknown>,
    });
    setSavedMessage(true);
  };

  const handleReset = () => {
    setResumeText("");
    setResult(null);
    setFileName(null);
    setSavedMessage(false);
  };

  const loadSampleResume = () => {
    const sample = `Alex Morgan
alex.morgan@cxcodextech.com | +1 (201) 772-2853 | New York, NY | linkedin.com/in/alexmorgan-tech | github.com/alexmorgan

SUMMARY
Results-driven Senior Full Stack Software Engineer with 5+ years of experience architecting cloud-native web applications, distributed microservices, and high-throughput data pipelines using TypeScript, React, Node.js, and AWS.

EXPERIENCE
Senior Software Engineer | Apex Cloud Solutions | New York, NY
June 2023 – Present
• Architected 14 event-driven Node.js/TypeScript microservices deployed on AWS EKS, reducing API response times by 38% for 450,000 active daily users.
• Spearheaded automated CI/CD pipeline modernization using GitHub Actions and Terraform, accelerating release velocity from weekly sprints to 4 deployments per day.
• Optimized PostgreSQL query performance and caching strategies using Redis clusters, saving $45,000 in monthly infrastructure computing overhead.
• Mentored 6 mid-level and junior software engineers in test-driven development (TDD), elevating overall code coverage from 64% to 92%.

Software Engineer | Beacon Digital Systems | Boston, MA
August 2020 – May 2023
• Engineered customer-facing React dashboard featuring responsive data visualization components, increasing monthly active user engagement by 27%.
• Refactored legacy monolithic backend into decoupled RESTful services, supporting peak order volumes of 12,000 transactions per minute.
• Implemented OAuth2 and JWT authentication mechanisms in full compliance with SOC2 and GDPR security guidelines.

TECHNICAL SKILLS
Languages: TypeScript, JavaScript, Python, Golang, SQL, HTML5, CSS3
Frameworks & Libraries: React, Next.js, Node.js, Express, FastAPI, Tailwind CSS
Cloud & DevOps: AWS (ECS, Lambda, S3, RDS), Docker, Kubernetes, Terraform, Git, CI/CD
Databases: PostgreSQL, MongoDB, Redis, Snowflake

EDUCATION
Bachelor of Science in Computer Science | Northeastern University | Boston, MA
Graduation: May 2020 | Magna Cum Laude`;

    setResumeText(sample);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            ATS & Keyword Parser
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            ATS Resume Analyzer & Heuristic Scanner
          </h1>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Evaluate contact completeness, structural headings, Google XYZ action syntax, and technical keyword density against modern US applicant tracking systems.
          </p>
        </div>

        {/* Input Screen */}
        {!result && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-sm">
            {/* File Upload Box */}
            <div className="p-6 border-2 border-dashed border-slate-300 rounded-2xl bg-white text-center hover:border-blue-400 transition-colors">
              <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-bold text-slate-900 mb-1">
                Upload Resume Document (.txt, .md, .docx text)
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Maximum file size: 5MB. File is parsed locally in your browser.
              </p>
              <label className="inline-block px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs cursor-pointer transition-colors">
                Select File From Device
                <input
                  type="file"
                  accept=".txt,.md,.rtf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              {fileName && (
                <div className="text-xs text-emerald-600 font-bold mt-2">
                  Loaded: {fileName}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Or Paste Resume Text Directly:
              </span>
              <button
                type="button"
                onClick={loadSampleResume}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 underline"
              >
                Load Sample Tech Resume
              </button>
            </div>

            <textarea
              rows={12}
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your complete resume text here including Contact info, Experience, Education, and Technical Skills..."
              className="w-full p-4 rounded-2xl bg-white border border-slate-300 text-xs sm:text-sm font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-500">
                Word Count: {resumeText.trim().split(/\s+/).filter(Boolean).length} words
              </span>
              <button
                type="button"
                disabled={!resumeText.trim() || analyzing}
                onClick={handleAnalyze}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl transition-colors shadow-md shadow-blue-500/25 disabled:opacity-50"
              >
                {analyzing ? "Running Parsing Heuristics..." : "Scan & Analyze Resume ↗"}
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
                  Parsing Diagnostic Result
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Status: {result.grade}
                </h2>
                <p className="text-xs text-slate-300 max-w-md">
                  Evaluated {result.wordCount} words against contact completeness, semantic headings, Google XYZ action verbs, and quantifiable metrics.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-400">{result.overallScore}</div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Score / 100
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={handleSaveToDashboard}
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{savedMessage ? "Saved to Dashboard!" : "Save Result"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Edit / Retry</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 5 Category Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Contact Info
                </span>
                <div className="text-xl font-extrabold text-slate-900">
                  {result.breakdown.contactCompleteness}%
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Section Layout
                </span>
                <div className="text-xl font-extrabold text-slate-900">
                  {result.breakdown.sectionStructure}%
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Action Verbs
                </span>
                <div className="text-xl font-extrabold text-slate-900">
                  {result.breakdown.actionVerbs}%
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Quantified Metrics
                </span>
                <div className="text-xl font-extrabold text-slate-900">
                  {result.breakdown.quantifiedMetrics}%
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  ATS Readability
                </span>
                <div className="text-xl font-extrabold text-slate-900">
                  {result.breakdown.atsReadability}%
                </div>
              </div>
            </div>

            {/* Strengths & Weaknesses Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  Validated Strengths
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {result.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                  <AlertTriangle className="w-4 h-4" />
                  Improvement Areas
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {result.weaknesses.map((w, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actionable Recommendations */}
            <div className="bg-blue-50/70 p-6 sm:p-8 rounded-3xl border border-blue-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                CX Codex Strategic Recommendations
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-blue-950">
                {result.actionableRecommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 text-white">
              <div>
                <div className="text-sm font-bold">Need a complete ATS Resume Rebuild?</div>
                <div className="text-xs text-slate-400">
                  Our professional branding team rewrites your resume into Google XYZ metric format.
                </div>
              </div>
              <Link
                href="/services/resume-rebranding"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide transition-colors shrink-0"
              >
                Explore Resume Rebranding ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
