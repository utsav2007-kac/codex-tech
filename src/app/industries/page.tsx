import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Building2,
  TrendingUp,
  Cpu,
  ShieldCheck,
  HeartPulse,
  Cloud,
  Layers,
  ArrowRight,
  DollarSign,
  MapPin,
  CheckCircle2,
  Sparkles,
  Users,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "US Technology Industries & Domain Verticals | CX CODEX TECH-IT",
  description:
    "Explore CX CODEX TECH-IT's specialized engineering placement and staffing pipelines across FinTech, Cloud/DevOps, AI & Data, Cybersecurity, HealthTech, and Enterprise SaaS.",
  keywords: [
    "US Tech Industries",
    "FinTech Engineering Jobs",
    "Cloud DevOps Placement",
    "AI Data Engineering Staffing",
    "Cybersecurity Talent US",
    "HealthTech Tech Jobs",
    "Enterprise SaaS Engineers",
  ],
};

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  "fintech-banking": <DollarSign className="w-6 h-6" />,
  "cloud-infrastructure": <Cloud className="w-6 h-6" />,
  "ai-data-intelligence": <Cpu className="w-6 h-6" />,
  "cybersecurity-identity": <ShieldCheck className="w-6 h-6" />,
  "healthtech-informatics": <HeartPulse className="w-6 h-6" />,
  "enterprise-saas": <Layers className="w-6 h-6" />,
};

export default function IndustriesOverviewPage() {
  const industries = SITE_CONFIG.industries || [];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-dot-grid-dark opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Building2 className="w-3.5 h-3.5" />
              US Market Sector Specializations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering Domain Expertise Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Critical US Tech Sectors</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              We bridge the gap between technical candidates and enterprise hiring desks across six specialized verticals. Each sector features dedicated architectural benchmarking, current compensation intelligence, and pre-vetted corporate MSP requisition pipelines.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Specialized Verticals</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-1">6 Core Domains</div>
              <div className="text-xs text-slate-400 mt-0.5">Fintech, Cloud, AI, Security, Health, SaaS</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Average Compensation</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">$165k – $235k</div>
              <div className="text-xs text-slate-400 mt-0.5">US Base + Bonus Tier Bands</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Active Requisitions</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1">2,800+ Roles</div>
              <div className="text-xs text-slate-400 mt-0.5">Direct MSP & Corporate Clients</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Compliance Assurance</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1">100% E-Verify</div>
              <div className="text-xs text-slate-400 mt-0.5">I-9 & Background Screened</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore Our Targeted Sector Pipelines
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Select an industry below to review targeted role profiles, compensation benchmarks, high-demand technology stacks, and active requisition opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => {
              const icon = INDUSTRY_ICONS[ind.id] || <TrendingUp className="w-6 h-6" />;
              return (
                <div
                  key={ind.slug}
                  className="rounded-3xl bg-slate-900/70 border border-slate-800 p-8 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 group"
                >
                  <div>
                    {/* Header with Icon and Demand */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                        {icon}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {ind.activeDemand.split("(")[0].trim()}
                      </span>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-2">
                      {ind.kicker}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {ind.shortDesc}
                    </p>

                    {/* Compensation & Hubs Block */}
                    <div className="space-y-2 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Target Base Comp:</span>
                        <span className="font-bold text-emerald-400">{ind.avgComp}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Key Tech Hubs:</span>
                        <span className="text-slate-300 font-medium truncate max-w-[160px] text-right">
                          {ind.hiringHubs.slice(0, 2).join(", ")}
                        </span>
                      </div>
                    </div>

                    {/* Key Roles */}
                    <div className="mb-6">
                      <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                        In-Demand Role Profiles
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-400">
                        {ind.keyRoles.slice(0, 3).map((role) => (
                          <li key={role} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stacks */}
                    <div className="mb-6">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Core Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.inDemandStacks.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-slate-800">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 text-sm font-semibold text-cyan-300 hover:text-white transition-all duration-200"
                    >
                      <span>Explore Sector & Requisitions</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Comparison Table */}
      <section className="py-20 bg-slate-900/40 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
              Market Intelligence Matrix
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2">
              US Technology Industry Benchmarks at a Glance
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Comparative analysis of compensation, typical interview loop turnaround, and key hiring hubs across our six specialization practices.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/70">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/90 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Industry Sector</th>
                  <th className="px-6 py-4">Typical Compensation</th>
                  <th className="px-6 py-4">Turnaround Time</th>
                  <th className="px-6 py-4">Primary Stacks</th>
                  <th className="px-6 py-4">Sponsorship Trend</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {industries.map((ind) => (
                  <tr key={ind.slug} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-6 py-4.5 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {ind.title.split(",")[0]}
                    </td>
                    <td className="px-6 py-4.5 font-semibold text-emerald-400">
                      {ind.avgComp}
                    </td>
                    <td className="px-6 py-4.5 text-slate-300">
                      2 to 4 weeks
                    </td>
                    <td className="px-6 py-4.5 font-mono text-xs text-slate-400">
                      {ind.inDemandStacks.slice(0, 3).join(", ")}
                    </td>
                    <td className="px-6 py-4.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-medium">
                        OPT / H-1B Supported
                      </span>
                    </td>
                    <td className="px-6 py-4.5 text-right">
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                      >
                        Details <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Two-Sided Conversion CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Candidate Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-950 border border-blue-500/20 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-semibold mb-4">
                  <Users className="w-3.5 h-3.5" />
                  For Technical Job Seekers
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Ready to Accelerate Your Career in These Sectors?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Get paired with a senior mentor who knows the exact hiring expectations, interview loops, and compensation ceilings for your target industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/book-consultation"
                    className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm text-center shadow-lg shadow-blue-600/30 transition-all"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    href="/tools/job-match-score"
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-sm text-center transition-colors"
                  >
                    Check Match Score
                  </Link>
                </div>
              </div>
            </div>

            {/* Employer Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-950 border border-indigo-500/20 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
                  <Briefcase className="w-3.5 h-3.5" />
                  For Employers & Staffing Partners
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Need Pre-Vetted Talent in These Domains?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Access a pipeline of 2,200+ pre-assessed engineers with verified code portfolios, 100% E-Verify compliance, and rapid 48-hour interview turnarounds.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/employers"
                    className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm text-center shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    Submit Hiring Requisition
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-sm text-center transition-colors"
                  >
                    Connect with Staffing Desk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
