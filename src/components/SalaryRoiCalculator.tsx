"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DollarSign,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Award,
} from "lucide-react";

interface RoleData {
  title: string;
  baseMin: number;
  baseMax: number;
  bonusPct: number;
  timelineDays: string;
  topSkills: string[];
}

const ROLES: Record<string, Record<string, RoleData>> = {
  "cloud-devops": {
    "0-2": {
      title: "Associate Cloud / DevOps Engineer",
      baseMin: 95000,
      baseMax: 120000,
      bonusPct: 10,
      timelineDays: "60–75 Days",
      topSkills: ["Docker", "AWS Essentials", "Linux Shell", "GitHub Actions", "Terraform Basics"],
    },
    "2-5": {
      title: "Mid-Level Cloud & Platform Engineer",
      baseMin: 135000,
      baseMax: 165000,
      bonusPct: 12,
      timelineDays: "50–70 Days",
      topSkills: ["Kubernetes (EKS/GKE)", "Terraform IaC", "CI/CD Pipelines", "Python/Go", "AWS Solutions"],
    },
    "5-8": {
      title: "Senior DevOps / SRE Architect",
      baseMin: 165000,
      baseMax: 195000,
      bonusPct: 15,
      timelineDays: "45–65 Days",
      topSkills: ["Multi-Cloud Architecture", "Distributed Tracing", "Zero-Trust Security", "FinOps", "SLOs/SLAs"],
    },
    "8+": {
      title: "Staff Platform Architect / Principal SRE",
      baseMin: 195000,
      baseMax: 240000,
      bonusPct: 20,
      timelineDays: "40–60 Days",
      topSkills: ["Enterprise Platform Engineering", "Kubernetes Operator SDK", "Cost Governance", "Executive Alignment"],
    },
  },
  "fullstack-backend": {
    "0-2": {
      title: "Junior Full Stack / Backend Engineer",
      baseMin: 90000,
      baseMax: 115000,
      bonusPct: 8,
      timelineDays: "65–85 Days",
      topSkills: ["TypeScript", "Node.js", "React / Next.js", "PostgreSQL", "REST APIs"],
    },
    "2-5": {
      title: "Full Stack Engineer (Go / Java / Python)",
      baseMin: 130000,
      baseMax: 160000,
      bonusPct: 12,
      timelineDays: "50–75 Days",
      topSkills: ["Microservices", "Event-Driven Kafka", "Redis Caching", "GraphQL", "AWS Cloud"],
    },
    "5-8": {
      title: "Senior Distributed Systems Engineer",
      baseMin: 160000,
      baseMax: 190000,
      bonusPct: 15,
      timelineDays: "45–65 Days",
      topSkills: ["High-Concurrency Systems", "Database Sharding", "System Design", "gRPC", "DDD"],
    },
    "8+": {
      title: "Staff Software Engineer / Technical Lead",
      baseMin: 190000,
      baseMax: 235000,
      bonusPct: 20,
      timelineDays: "40–60 Days",
      topSkills: ["Architecture Reviews", "Cross-Team Leadership", "Resilience Engineering", "Mentorship"],
    },
  },
  "data-ai": {
    "0-2": {
      title: "Junior Data / ML Engineer",
      baseMin: 95000,
      baseMax: 120000,
      bonusPct: 10,
      timelineDays: "60–80 Days",
      topSkills: ["SQL Mastery", "Python Pandas", "Airflow DAGs", "Data Warehousing", "Git"],
    },
    "2-5": {
      title: "Data Engineer / Analytics Engineer",
      baseMin: 135000,
      baseMax: 165000,
      bonusPct: 12,
      timelineDays: "50–70 Days",
      topSkills: ["dbt", "Snowflake / BigQuery", "Spark / PySpark", "Streaming Kafka", "AWS Redshift"],
    },
    "5-8": {
      title: "Senior Data & AI Platform Engineer",
      baseMin: 165000,
      baseMax: 200000,
      bonusPct: 15,
      timelineDays: "45–65 Days",
      topSkills: ["Vector Databases", "LLM Fine-Tuning", "Databricks Lakehouse", "Data Mesh", "MLOps"],
    },
    "8+": {
      title: "Principal Data Architect / Head of AI Infra",
      baseMin: 200000,
      baseMax: 250000,
      bonusPct: 20,
      timelineDays: "40–60 Days",
      topSkills: ["Enterprise GenAI Strategy", "Lakehouse Governance", "Global Pipeline Scale", "ROI Modeling"],
    },
  },
  cybersecurity: {
    "0-2": {
      title: "Associate SOC / Security Analyst",
      baseMin: 90000,
      baseMax: 115000,
      bonusPct: 10,
      timelineDays: "60–75 Days",
      topSkills: ["SIEM (Splunk/Sentinel)", "Network Forensics", "Vulnerability Scanning", "CompTIA Sec+"],
    },
    "2-5": {
      title: "Cloud Security Engineer / DevSecOps",
      baseMin: 135000,
      baseMax: 165000,
      bonusPct: 12,
      timelineDays: "50–70 Days",
      topSkills: ["IAM Governance", "SAST/DAST", "Container Security", "Prisma Cloud", "AWS GuardDuty"],
    },
    "5-8": {
      title: "Senior Information Security Architect",
      baseMin: 165000,
      baseMax: 195000,
      bonusPct: 15,
      timelineDays: "45–65 Days",
      topSkills: ["Zero-Trust Frameworks", "SOC 2 / ISO 27001", "Threat Modeling", "Incident Response Lead"],
    },
    "8+": {
      title: "Principal Security Architect / Deputy CISO",
      baseMin: 195000,
      baseMax: 245000,
      bonusPct: 20,
      timelineDays: "40–60 Days",
      topSkills: ["Board Security Strategy", "Enterprise Risk Management", "Cloud Posture Leadership"],
    },
  },
};

export default function SalaryRoiCalculator() {
  const [domain, setDomain] = useState<string>("cloud-devops");
  const [experience, setExperience] = useState<string>("2-5");
  const [metroMultiplier, setMetroMultiplier] = useState<number>(1.0); // 1.0 = National, 1.15 = Tier 1 Metros

  const currentRole = ROLES[domain][experience];
  const adjustedMin = Math.round(currentRole.baseMin * metroMultiplier);
  const adjustedMax = Math.round(currentRole.baseMax * metroMultiplier);
  const totalCompEst = Math.round(adjustedMax * (1 + currentRole.bonusPct / 100));

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
            <TrendingUp className="w-3.5 h-3.5" /> 2026 US Tech Market Benchmarks
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Interactive US Tech Salary & Placement ROI Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Discover real-time compensation projections, placement timelines, and high-converting technical skills tailored to your domain and experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Your Engineering Domain:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "cloud-devops", label: "Cloud & DevOps" },
                  { id: "fullstack-backend", label: "Full Stack & Go" },
                  { id: "data-ai", label: "Data & GenAI" },
                  { id: "cybersecurity", label: "Security & DevSecOps" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDomain(item.id)}
                    className={`p-3 rounded-2xl text-xs font-bold transition text-left border cursor-pointer ${
                      domain === item.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                2. Experience Level:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: "0-2", label: "0–2 Yrs" },
                  { id: "2-5", label: "2–5 Yrs" },
                  { id: "5-8", label: "5–8 Yrs" },
                  { id: "8+", label: "8+ Yrs" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setExperience(item.id)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition text-center border cursor-pointer ${
                      experience === item.id
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                3. Target Geographic Market:
              </label>
              <select
                value={metroMultiplier}
                onChange={(e) => setMetroMultiplier(parseFloat(e.target.value))}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value={1.0}>National US Benchmark (Remote & Hybrid)</option>
                <option value={1.15}>Tier 1 Tech Hubs (NYC, San Francisco Bay Area, Seattle)</option>
                <option value={1.05}>Growth Metros (Austin, Dallas, Boston, Atlanta, Chicago)</option>
                <option value={0.95}>Secondary Markets & Low Cost-of-Living Zones</option>
              </select>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Calculated using aggregate 2026 US Department of Labor reports, corporate MSP rate cards, and CX CODEX TECH-IT cohort placements.
              </span>
            </div>
          </div>

          {/* Results Dynamic Dashboard Column */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400">
                  Target Role Benchmark
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {currentRole.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5" />
                <span>Placement Velocity: {currentRole.timelineDays}</span>
              </div>
            </div>

            {/* Compensation Showcase Card */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium mb-1">Target Base Salary Range:</div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  ${adjustedMin.toLocaleString()} – ${adjustedMax.toLocaleString()}
                </div>
                <div className="text-[11px] text-cyan-300 font-semibold mt-1">W2 Hourly Equivalent: ${Math.round(adjustedMin / 2080)}–${Math.round(adjustedMax / 2080)}/hr</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium mb-1">Total Compensation Potential:</div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                  Up to ${totalCompEst.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-300 font-semibold mt-1">Base + ~{currentRole.bonusPct}% Annual Target Bonus & Equity</div>
              </div>
            </div>

            {/* In-Demand High-Converting Skills */}
            <div className="space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>High-Converting Keywords Demanded by US Recruiters:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentRole.topSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-white tracking-wide"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Card */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300">
                Want to position your resume to convert at the top of this compensation bracket?
              </div>
              <Link
                href="/book-consultation"
                className="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 shrink-0"
              >
                <span>Get Customized Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
