import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Users2, CheckCircle2, ArrowRight, ShieldCheck, Code2, Database, Cloud } from "lucide-react";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Hire Pre-Vetted Tech Talent | CX CODEX TECH-IT Employer Portal",
  description:
    "Hire interview-ready software engineers, cloud architects, and data leads vetted through rigorous live technical assessments and mock loops.",
};

export default function HireTalentPage() {
  const candidatePools = [
    {
      category: "Full Stack & Cloud Engineers",
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      stack: "React, Next.js, TypeScript, Node.js, Python, AWS, Docker",
      experience: "3 to 8+ Years",
      highlight: "Trained in Google XYZ quantified metric formatting and microservices trade-offs.",
    },
    {
      category: "Data Engineers & Analytics Leads",
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      stack: "Python, PySpark, Snowflake, dbt, SQL, Kafka, BigQuery",
      experience: "3 to 7+ Years",
      highlight: "Experience architecting high-throughput streaming and lakehouse data infrastructures.",
    },
    {
      category: "DevOps & Cloud Infrastructure",
      icon: <Cloud className="w-6 h-6 text-sky-600" />,
      stack: "Kubernetes, Terraform, AWS, Azure, CI/CD, Linux, Prometheus",
      experience: "4 to 9+ Years",
      highlight: "Focus on 99.99% uptime SLAs, infrastructure-as-code, and container orchestration.",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Available Candidate Roster
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Review Interview-Ready Candidate Pools.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every candidate represented by CX CODEX TECH-IT has completed verified skills audits, mock interview loops, and work authorization checks.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-24">
        {candidatePools.map((pool, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                {pool.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-900">{pool.category}</h2>
              <div className="text-xs text-slate-500 font-semibold">{pool.experience}</div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-mono">
                {pool.stack}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{pool.highlight}</p>
            </div>

            <Link
              href="/employers/submit-requirement"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center block transition-colors shadow-xs"
            >
              Request Profiles for This Pool ↗
            </Link>
          </div>
        ))}
      </div>

      <FinalCta />
    </div>
  );
}
