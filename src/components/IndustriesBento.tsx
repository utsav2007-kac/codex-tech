"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  Cpu,
  ShieldCheck,
  HeartPulse,
  Cloud,
  ArrowRight,
  DollarSign,
  MapPin,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import TiltCard from "@/components/TiltCard";

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  "fintech-banking": <DollarSign className="w-5 h-5" />,
  "cloud-infrastructure": <Cloud className="w-5 h-5" />,
  "ai-data-intelligence": <Cpu className="w-5 h-5" />,
  "cybersecurity-identity": <ShieldCheck className="w-5 h-5" />,
  "healthtech-informatics": <HeartPulse className="w-5 h-5" />,
  "enterprise-saas": <Layers className="w-5 h-5" />,
};

const INDUSTRY_GRADIENTS: Record<string, string> = {
  "fintech-banking": "from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/20 group-hover:border-emerald-500/40",
  "cloud-infrastructure": "from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/20 group-hover:border-blue-500/40",
  "ai-data-intelligence": "from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/20 group-hover:border-purple-500/40",
  "cybersecurity-identity": "from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/20 group-hover:border-amber-500/40",
  "healthtech-informatics": "from-rose-500/10 via-rose-500/5 to-transparent border-rose-500/20 group-hover:border-rose-500/40",
  "enterprise-saas": "from-cyan-500/10 via-cyan-500/5 to-transparent border-cyan-500/20 group-hover:border-cyan-500/40",
};

export default function IndustriesBento() {
  const [activeFilter, setActiveFilter] = useState<"all" | "high-comp" | "critical">("all");

  const industries = SITE_CONFIG.industries || [];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              US Tech Domain Specializations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tailored Engineering Pipelines for High-Growth US Industries
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              We align technical candidates and corporate requisitions across six mission-critical technology sectors, combining deep architectural domain benchmarks with verified compensation data.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-sm font-semibold text-white transition-all group"
            >
              <span>Explore All 6 Verticals</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const isFeatured = idx === 0 || idx === 2;
            const icon = INDUSTRY_ICONS[ind.id] || <TrendingUp className="w-5 h-5" />;
            const gradientClass = INDUSTRY_GRADIENTS[ind.id] || "from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/20";

            return (
              <TiltCard key={ind.slug} maxTilt={7} className="h-full">
                <div
                  className={`group relative rounded-2xl bg-slate-900/80 border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/50 backdrop-blur-sm overflow-hidden h-full ${gradientClass}`}
                >
                  {/* Subtle top-right ambient flare */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar with Icon & Demand */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {ind.activeDemand.split("(")[0].trim()}
                    </span>
                  </div>

                  {/* Kicker & Title */}
                  <div className="text-[11px] font-bold tracking-widest text-cyan-400/80 uppercase mb-1.5">
                    {ind.kicker}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-2">
                    {ind.shortDesc}
                  </p>

                  {/* Metrics Badge Strip */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/60 border border-white/5 mb-6 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Avg Compensation</div>
                      <div className="font-bold text-emerald-400 mt-0.5">{ind.avgComp}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-medium">Primary Hubs</div>
                      <div className="font-medium text-slate-300 truncate mt-0.5">{ind.hiringHubs[0]}, {ind.hiringHubs[1]}</div>
                    </div>
                  </div>

                  {/* Stack Pills */}
                  <div className="mb-6">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      In-Demand Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.inDemandStacks.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {ind.inDemandStacks.length > 5 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-400">
                          +{ind.inDemandStacks.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Requisitions & Roadmap</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-slate-400">
                    {ind.keyRoles.length} Featured Roles
                  </span>
                </div>
              </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Bottom Institutional Assurance */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-indigo-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Need a specialized vertical not listed here?</div>
              <div className="text-xs text-slate-400">We place engineers in Embedded Systems, Autonomous Vehicles, and GovTech through custom candidate sourcing sprints.</div>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white shrink-0 transition-colors"
          >
            Inquire for Custom Sector
          </Link>
        </div>
      </div>
    </section>
  );
}
