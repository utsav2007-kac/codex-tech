"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckSquare,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  ListTodo,
  HelpCircle,
  ArrowRight,
  Save,
  Check,
} from "lucide-react";
import { evaluateInterviewReadiness, InterviewReadinessResult } from "@/lib/assessmentEngine";
import { useCandidateStore } from "@/lib/store";

export default function InterviewReadinessPage() {
  const [targetRole, setTargetRole] = useState("Full Stack Software Engineer");
  const [experienceLevel, setExperienceLevel] = useState("Mid-Level (3-5 years)");
  const [interviewType, setInterviewType] = useState("Technical + Behavioral (Full Loop)");
  const [skillsOrTech, setSkillsOrTech] = useState("React, Node.js, TypeScript, AWS, PostgreSQL");
  const [areasOfConcern, setAreasOfConcern] = useState("System design scaling trade-offs and behavioral conflict stories.");

  const [result, setResult] = useState<InterviewReadinessResult | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [saved, setSaved] = useState(false);

  const { addAssessmentResult } = useCandidateStore();

  const handleEvaluate = () => {
    if (!targetRole.trim()) return;
    setAnalyzing(true);
    setSaved(false);

    const res = evaluateInterviewReadiness({
      targetRole,
      experienceLevel,
      interviewType,
      skillsOrTech,
      areasOfConcern,
    });
    setResult(res);
    setAnalyzing(false);
  };

  const handleSave = () => {
    if (!result) return;
    addAssessmentResult({
      toolType: "interview-readiness",
      toolName: "Interview Readiness",
      score: result.overallScore,
      grade: result.readinessTier,
      summary: `Score: ${result.overallScore}/100. Target role: ${targetRole}. Technical & behavioral checklists generated.`,
      details: {
        readinessTier: result.readinessTier,
        studyTracks: result.priorityStudyTracks,
      },
    });
    setSaved(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            Technical & Behavioral Audit
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Interview Readiness Evaluator
          </h1>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Generate customized technical checklists, behavioral preparation tasks, STAR framework coaching prompts, and high-yield interview questions for your exact target role.
          </p>
        </div>

        {!result && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Interview Parameters:
            </span>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Target Role
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

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Interview Loop Format
                </label>
                <select
                  value={interviewType}
                  onChange={(e) => setInterviewType(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option>Technical + Behavioral (Full Loop)</option>
                  <option>Live Coding & Data Structures</option>
                  <option>System Design & Architecture Panel</option>
                  <option>Hiring Manager Behavioral / Executive</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Key Technologies & Stack
                </label>
                <input
                  type="text"
                  value={skillsOrTech}
                  onChange={(e) => setSkillsOrTech(e.target.value)}
                  placeholder="e.g. React, Python, AWS, PostgreSQL"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Primary Areas of Concern (Optional)
              </label>
              <textarea
                rows={3}
                value={areasOfConcern}
                onChange={(e) => setAreasOfConcern(e.target.value)}
                placeholder="Mention specific areas where you feel less prepared (e.g. system design trade-offs, salary negotiation, behavioral stories)..."
                className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                disabled={!targetRole.trim() || analyzing}
                onClick={handleEvaluate}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl transition-colors shadow-md shadow-blue-500/25 disabled:opacity-50"
              >
                {analyzing ? "Synthesizing Checklists..." : "Evaluate Interview Readiness ↗"}
              </button>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {result && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Score Banner */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Readiness Diagnostic Tier
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Status: {result.readinessTier}
                </h2>
                <p className="text-xs text-slate-300 max-w-md">
                  Target Role: {targetRole} · {experienceLevel}. Custom checklists and STAR practice scenarios prepared below.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-emerald-400">{result.overallScore}</div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Readiness Index
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
                    <span>Re-evaluate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Checklists */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Technical Preparation Checklist */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                    Technical Preparation Checklist
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">5 Tasks</span>
                </div>
                <div className="space-y-2.5">
                  {result.technicalPreparationChecklist.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 flex items-start gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <div className="flex-1">
                        <div className="font-semibold leading-snug">{item.task}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-slate-400 font-mono uppercase">
                            {item.category}
                          </span>
                          <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200">
                            {item.priority} Priority
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Behavioral Preparation Checklist */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
                    Behavioral & STAR Checklist
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">5 Tasks</span>
                </div>
                <div className="space-y-2.5">
                  {result.behavioralPreparationChecklist.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 flex items-start gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <div className="flex-1">
                        <div className="font-semibold leading-snug">{item.task}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-slate-400 font-mono uppercase">
                            {item.category}
                          </span>
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                            {item.priority} Priority
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Practice Questions with STAR Guidance */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block">
                Targeted Practice Questions & STAR Framework Structure
              </span>

              <div className="space-y-4">
                {result.practiceQuestions.map((q, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        Question 0{idx + 1} · {q.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{q.question}</h3>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
                      <strong className="text-blue-700">STAR Response Blueprint:</strong>{" "}
                      {q.starFrameworkGuidance}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 text-white">
              <div>
                <div className="text-sm font-bold">Schedule a 1-on-1 Recorded Mock Interview</div>
                <div className="text-xs text-slate-400">
                  Experience a realistic 60-minute panel simulation with line-by-line constructive feedback.
                </div>
              </div>
              <Link
                href="/services/interview-preparation"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide transition-colors shrink-0"
              >
                Mock Interview Coaching ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
