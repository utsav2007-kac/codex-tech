import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Building2,
  DollarSign,
  MapPin,
  TrendingUp,
  Cpu,
  ShieldCheck,
  HeartPulse,
  Cloud,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Briefcase,
  Users,
  Compass,
  FileCheck,
} from "lucide-react";
import { SITE_CONFIG, IndustryItem } from "@/config/site";
import FinalCta from "@/components/FinalCta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  "fintech-banking": <DollarSign className="w-8 h-8" />,
  "cloud-infrastructure": <Cloud className="w-8 h-8" />,
  "ai-data-intelligence": <Cpu className="w-8 h-8" />,
  "cybersecurity-identity": <ShieldCheck className="w-8 h-8" />,
  "healthtech-informatics": <HeartPulse className="w-8 h-8" />,
  "enterprise-saas": <Layers className="w-8 h-8" />,
};

function resolveIndustry(slug: string): IndustryItem | undefined {
  const normalized = slug.toLowerCase().trim();
  const direct = SITE_CONFIG.industries?.find(
    (i) => i.slug === normalized || i.id === normalized
  );
  if (direct) return direct;

  // Common aliases
  if (normalized === "fintech" || normalized === "banking") {
    return SITE_CONFIG.industries?.find((i) => i.id === "fintech-banking");
  }
  if (normalized === "cloud" || normalized === "devops") {
    return SITE_CONFIG.industries?.find((i) => i.id === "cloud-infrastructure");
  }
  if (normalized === "ai" || normalized === "ml" || normalized === "data") {
    return SITE_CONFIG.industries?.find((i) => i.id === "ai-data-intelligence");
  }
  if (normalized === "cybersecurity" || normalized === "security") {
    return SITE_CONFIG.industries?.find((i) => i.id === "cybersecurity-identity");
  }
  if (normalized === "healthtech" || normalized === "healthcare") {
    return SITE_CONFIG.industries?.find((i) => i.id === "healthtech-informatics");
  }
  if (normalized === "saas" || normalized === "enterprise-saas-cloud") {
    return SITE_CONFIG.industries?.find((i) => i.id === "enterprise-saas");
  }

  return undefined;
}

export async function generateStaticParams() {
  const industries = SITE_CONFIG.industries || [];
  const slugs: string[] = [];

  industries.forEach((ind) => {
    slugs.push(ind.slug);
    if (ind.id && ind.id !== ind.slug) {
      slugs.push(ind.id);
    }
  });

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = resolveIndustry(resolvedParams.slug);

  if (!industry) {
    return { title: "Industry Sector Not Found | CX CODEX TECH-IT" };
  }

  return {
    title: `${industry.title} Tech Placement & Staffing | CX CODEX TECH-IT`,
    description: `${industry.heroHeadline} Learn about average compensation (${industry.avgComp}), in-demand stacks, and targeted role profiles.`,
    keywords: [
      industry.title,
      `${industry.title} US Jobs`,
      "Tech Staffing US",
      "Engineering Placement",
      ...industry.inDemandStacks,
    ],
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const industry = resolveIndustry(resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  const icon = INDUSTRY_ICONS[industry.id] || <TrendingUp className="w-8 h-8" />;
  const otherIndustries = (SITE_CONFIG.industries || []).filter((i) => i.slug !== industry.slug);

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24">
      {/* Hero Header */}
      <section className="relative py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-dot-grid-dark opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-cyan-400 transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">{industry.title}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                {industry.kicker}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {industry.title}
              </h1>

              <p className="text-xl sm:text-2xl font-medium text-cyan-300/90 leading-snug">
                {industry.heroHeadline}
              </p>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                {industry.shortDesc}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-consultation"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  <span>Candidate Career Acceleration</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/employers"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span>Request Requisition Pipeline</span>
                </Link>
              </div>
            </div>

            {/* Quick Metrics Widget */}
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-400">Market Status</div>
                    <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {industry.activeDemand}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Target Base Compensation
                  </div>
                  <div className="text-2xl font-black text-white mt-1 text-emerald-400">
                    {industry.avgComp}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Median based on verified 2024-2025 US offers
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Primary US Tech Hubs
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.hiringHubs.map((hub) => (
                      <span
                        key={hub}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 font-medium"
                      >
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Work Authorization:</span>
                    <span className="text-cyan-400 font-semibold">OPT / H-1B / E-Verify</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. In-Demand Roles & Technical Stacks */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-5 h-5 text-cyan-400" />
                Featured Role Requisitions
              </h2>
              <div className="space-y-4">
                {industry.keyRoles.map((role, idx) => (
                  <div
                    key={role}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-blue-500/10 text-cyan-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{role}</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Actively requested across CX Codex client networks and prime MSP accounts.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-5 h-5 text-indigo-400" />
                Required Technology Stacks
              </h2>
              <p className="text-sm text-slate-400 mb-6">
                Hiring managers in this sector expect deep architectural familiarity and hands-on production code in these core frameworks:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {industry.inDemandStacks.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-700/80 text-sm font-mono text-cyan-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-slate-300 leading-relaxed">
                💡 <span className="font-semibold text-white">Need an upskilling sprint?</span> Our IT Training & Skill Development practice offers accelerated weekend workshops covering these exact technologies.
              </div>
            </div>
          </div>

          {/* 2. Industry Challenges vs CX CODEX TECH-ITnical Intervention */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-rose-950/15 border border-rose-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                Industry-Specific Hiring Challenges
              </h2>
              <p className="text-sm text-slate-400 mb-6">
                Why generic applicants consistently struggle to convert interviews in this sector:
              </p>
              <ul className="space-y-4">
                {industry.challengesAddressed.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span className="text-sm text-slate-300 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-950/15 border border-emerald-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                CX Codex Strategic Technical Intervention
              </h2>
              <p className="text-sm text-slate-400 mb-6">
                How we position our candidates to stand out as top-tier domain specialists:
              </p>
              <ul className="space-y-4">
                {industry.codexIntervention.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Guaranteed Deliverables for this Sector */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-cyan-400" />
              Dedicated Sector Deliverables
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {industry.deliverables.map((del, idx) => (
                <div
                  key={del}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3"
                >
                  <div className="text-xs font-mono font-bold text-cyan-400">
                    PHASE 0{idx + 1}
                  </div>
                  <div className="text-base font-semibold text-white">{del}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Customized directly for {industry.title.split(",")[0]} hiring loops and technical evaluations.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Cross-Navigation to Other Industries */}
          <div className="pt-8">
            <h3 className="text-lg font-bold text-white mb-4">
              Explore Other Specialized Sectors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {otherIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-between group"
                >
                  <span className="truncate">{ind.title.split(",")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Final CTA */}
      <FinalCta />
    </div>
  );
}
