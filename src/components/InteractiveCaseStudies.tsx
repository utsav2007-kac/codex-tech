"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  DollarSign,
  Building,
  Calendar,
  Clock,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  User,
  Sparkles,
} from "lucide-react";

interface CaseStudy {
  id: string;
  name: string;
  role: string;
  companyCategory: string;
  location: string;
  compensation: string;
  velocity: string;
  visaStatus: string;
  situation: string;
  intervention: string;
  results: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "anu",
    name: "Janagam Anu",
    role: "Technical Consultant (Cloud & Infrastructure)",
    companyCategory: "Managed Staffing / Tier-1 MSP",
    location: "United States (Hybrid)",
    compensation: "$75 / hr ($156,000 annualized)",
    velocity: "58 Days to Placement",
    visaStatus: "STEM OPT / E-Verify Verified",
    situation:
      "Struggling with interview confidence and converting recruiter phone screens into technical rounds despite strong core capabilities. Tight F-1 OPT timeline creating acute employment deadline pressure.",
    intervention:
      "CX Codex rebuilt her technical narrative around commercial deliverables, scheduled 4 recorded mock interview sessions with real-time feedback, and introduced her directly to partner MSP hiring managers.",
    results: [
      "Secured hourly consulting placement at Managed Staffing USA within 58 days.",
      "100% compliant I-9 and STEM OPT reporting completed smoothly.",
      "Ongoing quarterly post-placement mentorship provided for on-the-job standups.",
    ],
  },
  {
    id: "praveen",
    name: "Praveen Kumar",
    role: "Senior Cloud & Go Backend Architect",
    companyCategory: "Distributed FinTech SaaS",
    location: "Austin, TX (Remote USA)",
    compensation: "$168,000 Base + $18,000 Bonus + Equity",
    velocity: "45 Days to Placement",
    visaStatus: "H-1B Transfer Sponsorship",
    situation:
      "Had 5 years of backend engineering experience overseas, but was receiving lowball $110k offers from predatory third-party agencies due to poorly formatted resume and lack of US system design framing.",
    intervention:
      "Re-engineered resume using the Google XYZ formula, updated LinkedIn for boolean recruiter search, and coached him through high-concurrency microservice design loops.",
    results: [
      "Multiple competitive offers secured; negotiated base salary up from $145k to $168k.",
      "Direct employer-sponsored H-1B transfer petition filed and approved.",
      "First-year onboarding roadmap ensured strong performance review.",
    ],
  },
  {
    id: "sneha",
    name: "Sneha Reddy",
    role: "Data & Analytics Platform Engineer",
    companyCategory: "FinTech Informatics Global",
    location: "New York, NY",
    compensation: "$152,000 Base + 401(k) Match",
    velocity: "70 Days to Placement",
    visaStatus: "F-1 OPT to STEM Extension",
    situation:
      "Recent MS Data Science graduate competing with thousands of applicants. Generic academic projects on her resume were getting filtered out by Workday ATS parsers.",
    intervention:
      "Guided her to build a production-grade data pipeline repo showcasing dbt, Snowflake, and streaming Kafka. Provided 1-on-1 behavioral interview training for behavioral STAR questions.",
    results: [
      "Bypassed initial recruiter screens with a 92% ATS parsing score.",
      "Converted 3 interview loops into 2 written offers within 10 weeks.",
      "Joined New York fintech leader with full STEM OPT extension sponsorship.",
    ],
  },
];

export default function InteractiveCaseStudies() {
  const [activeTab, setActiveTab] = useState<string>("anu");
  const selected = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Candidate Outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Real Candidates. Real Offers. Measurable Velocity.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            See how our tailored career infrastructure, ATS rebuilding, and direct partner networks transform job hunts into high-compensation placements.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveTab(c.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2.5 cursor-pointer border ${
                activeTab === c.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                  activeTab === c.id ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                {c.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <span>{c.name}</span>
              <span className="text-[11px] opacity-70 hidden sm:inline">({c.role.split(" ")[0]})</span>
            </button>
          ))}
        </div>

        {/* Case Study Card */}
        <div className="bg-slate-50/80 p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Summary Profile */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600">
                  {selected.companyCategory}
                </span>
                <h3 className="text-2xl font-black text-slate-900">{selected.name}</h3>
                <div className="text-sm font-bold text-slate-700">{selected.role}</div>
                <div className="text-xs text-slate-500">{selected.location}</div>
              </div>

              {/* Key Metrics Pill Grid */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Compensation Secured
                  </div>
                  <div className="text-lg font-black text-emerald-600 mt-0.5">
                    {selected.compensation}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Placement Velocity
                  </div>
                  <div className="text-base font-black text-slate-900 mt-0.5">
                    {selected.velocity}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Work Authorization
                  </div>
                  <div className="text-xs font-bold text-blue-700 mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>{selected.visaStatus}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Situation, Intervention, Results */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-rose-700 flex items-center gap-1.5 mb-2">
                  <span>The Challenge & Market Friction</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-rose-50/50 p-4 rounded-xl border border-rose-100">
                  {selected.situation}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-700 flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>The CX Codex Strategic Intervention</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  {selected.intervention}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Outcomes & Results</span>
                </h4>
                <ul className="space-y-2">
                  {selected.results.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Ready to achieve similar velocity for your career?
                </span>
                <Link
                  href="/book-consultation"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition inline-flex items-center gap-1.5"
                >
                  Schedule Your Free Strategy Call <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
