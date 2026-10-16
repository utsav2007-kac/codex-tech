"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  FileCheck,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Building2,
  Users2,
  CalendarCheck,
  Award,
  Zap,
  Briefcase,
  Play,
  Flame,
} from "lucide-react";
import { Linkedin } from "@/components/LinkedInIcon";
import { SITE_CONFIG } from "@/config/site";
import ThreeHeroCanvas from "@/components/ThreeHeroCanvas";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";

export default function HeroSection() {
  const [activePersona, setActivePersona] = useState<"candidate" | "employer">("candidate");
  const [activeSignal, setActiveSignal] = useState<"resume" | "linkedin" | "match" | "interview">("resume");

  const candidateSignals = {
    resume: {
      score: "94/100",
      label: "ATS Readability Index",
      badge: "Tier-1 Tech Compliant",
      detail: "XYZ metrics detected; zero parsing roadblocks across Workday, Greenhouse & Taleo.",
      color: "from-blue-500 to-indigo-600",
    },
    linkedin: {
      score: "89/100",
      label: "Recruiter Search Visibility",
      badge: "High Inbound Intent",
      detail: "Boolean keywords indexed for Senior Cloud & Distributed Systems engineering roles.",
      color: "from-sky-500 to-blue-600",
    },
    match: {
      score: "92%",
      label: "Role Alignment Fit",
      badge: "Strong Interview Probability",
      detail: "Candidate matches 11 of 12 core requirements for US Mid-to-Senior Cloud requisitions.",
      color: "from-emerald-500 to-teal-600",
    },
    interview: {
      score: "88/100",
      label: "STAR Loop Readiness",
      badge: "FAANG / Tier-1 Ready",
      detail: "12 high-impact technical conflict and system outage stories benchmarked and verified.",
      color: "from-violet-500 to-purple-600",
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950 text-white min-h-[90vh] flex flex-col justify-center">
      {/* 3D Three.js Interactive Scrolling Canvas */}
      <ThreeHeroCanvas />

      {/* Ambient Aurora Glows */}
      <div className="hero-aurora w-[600px] h-[600px] bg-blue-600/20 -top-40 -left-40 pointer-events-none" />
      <div className="hero-aurora w-[650px] h-[650px] bg-indigo-600/15 top-20 right-[-150px] pointer-events-none" />
      <div className="hero-aurora w-[400px] h-[400px] bg-cyan-500/12 bottom-0 left-1/3 pointer-events-none" />

      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-grid-dark opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Dual Persona Switcher (Job Seekers vs Employers) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-2xl">
            <button
              type="button"
              onClick={() => setActivePersona("candidate")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activePersona === "candidate"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>💼 For Job Seekers & Tech Talent</span>
            </button>
            <button
              type="button"
              onClick={() => setActivePersona("employer")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activePersona === "employer"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🏢 For Employers & MSP Partners</span>
            </button>
          </div>
        </div>

        {/* Central Hero Headline */}
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-md shadow-inner animate-glow-border">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="tracking-wide font-medium">
              <strong className="text-white font-bold">CX CODEX TECH-IT</strong> · We Deliver Jobs Faster
            </span>
          </div>

          {activePersona === "candidate" ? (
            <>
              <h1 className="hero-title-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Land Your Next{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 text-glow-cyan">
                  US Tech Role
                </span>
                <br className="hidden sm:inline" />
                {" "}With{" "}
                <span className="relative inline-block px-3 py-0.5 mx-1">
                  <span className="absolute inset-0 bg-blue-600/30 rounded-xl border border-blue-400/50 -rotate-1 skew-x-2" />
                  <span className="relative text-white font-extrabold">Unfair</span>
                </span>{" "}
                Market Advantage.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
                Structured career acceleration, explainable ATS diagnostics, mock interview mastery, and direct corporate MSP placement for US and international tech professionals.
              </p>
            </>
          ) : (
            <>
              <h1 className="hero-title-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Hire Pre-Vetted,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 text-glow-cyan">
                  Deployment-Ready
                </span>
                <br className="hidden sm:inline" />
                {" "}US Engineering{" "}
                <span className="relative inline-block px-3 py-0.5 mx-1">
                  <span className="absolute inset-0 bg-emerald-600/30 rounded-xl border border-emerald-400/50 -rotate-1 skew-x-2" />
                  <span className="relative text-white font-extrabold">Talent</span>
                </span>.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
                Eliminate hiring friction with thoroughly screened software engineers, cloud architects, and data leads. Full work authorization verification under E-Verify.
              </p>
            </>
          )}

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-consultation"
              className="btn-shimmer w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.03] cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Free Strategy Audit (30 Min)</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <Link
              href="/tools"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm tracking-wide border border-slate-700/80 backdrop-blur-md flex items-center justify-center gap-2 transition hover:border-slate-500"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Run Free Career Diagnostics</span>
            </Link>
          </div>
        </div>

        {/* Floating Persona Showcase Grid (Inspired by NetBounce & CX Codex Rebuild) */}
        <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-6 items-center">
          {/* Left Floating Card: Candidate Win */}
          <div className="hidden lg:block lg:col-span-3">
            <TiltCard maxTilt={12} className="h-full">
              <div className="animate-float-slow p-5 rounded-3xl glass-panel-dark border border-white/10 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon" /> Placed in 48 Days
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">USA Role</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-base text-white shadow-md">
                    AM
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-white">Alex Morgan</div>
                    <div className="text-xs text-blue-300">Sr. Cloud & DevOps Engineer</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    Offer Secured:
                  </div>
                  <div className="text-xl font-black text-emerald-400">$165,000 / yr</div>
                  <div className="text-[10px] text-slate-400">W2 + Full Health Benefits + 401(k)</div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>STEM OPT & E-Verify Authorized</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Center Interactive Signal Cockpit */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
                    Live Career Flight Deck
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Interactive Diagnostic</span>
              </div>

              {/* 4 Interactive Tabs */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {[
                  { id: "resume", label: "ATS Scan", icon: <FileCheck className="w-4 h-4" /> },
                  { id: "linkedin", label: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
                  { id: "match", label: "Job Match", icon: <Target className="w-4 h-4" /> },
                  { id: "interview", label: "STAR Loop", icon: <Users2 className="w-4 h-4" /> },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveSignal(t.id as any)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition flex flex-col items-center gap-1 cursor-pointer ${
                      activeSignal === t.id
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                        : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {t.icon}
                    <span className="text-[10px] truncate">{t.label}</span>
                  </button>
                ))}
              </div>

              {/* Live Metric Display */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {candidateSignals[activeSignal].label}
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                      {candidateSignals[activeSignal].score}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-extrabold border border-blue-400/20">
                    {candidateSignals[activeSignal].badge}
                  </span>
                </div>

                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${candidateSignals[activeSignal].color} rounded-full transition-all duration-700`}
                    style={{
                      width:
                        activeSignal === "resume"
                          ? "94%"
                          : activeSignal === "linkedin"
                          ? "89%"
                          : activeSignal === "match"
                          ? "92%"
                          : "88%",
                    }}
                  />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {candidateSignals[activeSignal].detail}
                </p>

                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Explainable Heuristic
                  </span>
                  <Link
                    href={`/tools/${
                      activeSignal === "resume"
                        ? "resume-analyzer"
                        : activeSignal === "linkedin"
                        ? "linkedin-profile-analyzer"
                        : activeSignal === "match"
                        ? "job-match-score"
                        : "interview-readiness"
                    }`}
                    className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1"
                  >
                    Test Your Profile <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Card: Employer Partner */}
          <div className="hidden lg:block lg:col-span-3">
            <TiltCard maxTilt={12} className="h-full">
              <div className="animate-float-reverse p-5 rounded-3xl glass-panel-dark border border-white/10 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 border border-indigo-500/30">
                    <Building2 className="w-3 h-3 text-indigo-400" /> MSP Hiring Channel
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Tier-1 Network</span>
                </div>

                <div className="space-y-1">
                  <div className="font-extrabold text-sm text-white">Apex FinTech Requisition</div>
                  <div className="text-xs text-slate-400">3 Distributed Systems Roles</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Sourcing Velocity:</span>
                    <span className="text-cyan-400 font-bold">48 Hours</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Match Accuracy:</span>
                    <span className="text-emerald-400 font-bold">98.4%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Vetting:</span>
                    <span className="text-white font-bold">Technical Loop Passed</span>
                  </div>
                </div>

                <Link
                  href="/employers/hire-talent"
                  className="block text-center text-xs font-bold text-blue-400 hover:text-blue-300 transition"
                >
                  Explore Partner Requisitions →
                </Link>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* High-Trust Stats Bar with Animated Counter */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <AnimatedCounter
              end={2200}
              suffix="+"
              className="text-3xl sm:text-4xl font-black text-white"
            />
            <div className="text-xs text-slate-400 font-medium">Careers Accelerated</div>
          </div>
          <div className="space-y-1">
            <AnimatedCounter
              end={162000}
              prefix="$"
              className="text-3xl sm:text-4xl font-black text-cyan-400"
            />
            <div className="text-xs text-slate-400 font-medium">Avg US Starting Comp</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400">2–4 Mo</div>
            <div className="text-xs text-slate-400 font-medium">Avg Placement Velocity</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-indigo-400">6–12 Mo</div>
            <div className="text-xs text-slate-400 font-medium">Post-Placement Care</div>
          </div>
        </div>
      </div>
    </section>
  );
}
