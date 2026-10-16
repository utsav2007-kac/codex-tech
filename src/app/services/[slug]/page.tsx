import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Compass,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG, ServiceItem } from "@/config/site";
import FinalCta from "@/components/FinalCta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Normalize slug mappings (supporting both prompt canonical names and legacy short URLs)
function resolveService(slug: string): ServiceItem | undefined {
  const normalized = slug.toLowerCase().trim();
  const directMatch = SITE_CONFIG.services.find((s) => s.slug === normalized || s.id === normalized);
  if (directMatch) return directMatch;

  // Custom alias mapping
  if (normalized === "career-strategy") {
    return SITE_CONFIG.services.find((s) => s.slug === "career-strategy-planning");
  }
  if (normalized === "linkedin-rebranding") {
    return SITE_CONFIG.services.find((s) => s.slug === "linkedin-profile-rebranding");
  }
  if (normalized === "job-campaign") {
    return SITE_CONFIG.services.find((s) => s.slug === "custom-job-campaigns");
  }
  if (normalized === "placement-support") {
    return SITE_CONFIG.services.find((s) => s.slug === "us-market-placement-support");
  }

  return undefined;
}

export async function generateStaticParams() {
  const slugs = [
    "career-strategy-planning",
    "career-strategy",
    "resume-rebranding",
    "linkedin-profile-rebranding",
    "linkedin-rebranding",
    "skill-development",
    "interview-preparation",
    "custom-job-campaigns",
    "job-campaign",
    "us-market-placement-support",
    "placement-support",
  ];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = resolveService(resolvedParams.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | CX CODEX TECH-IT US Career Services`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} — CX CODEX TECH-IT`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = resolveService(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            {service.kicker}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-xl font-medium text-slate-700 leading-snug">
            {service.heroHeadline}
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/book-consultation"
              className="blob-button px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider shadow-md shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Book Strategy Session on This Service</span>
              <span className="text-blue-200">↗</span>
            </Link>
            <Link
              href="/services"
              className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors"
            >
              Back to All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Target Audience & Problems Addressed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Target Audience */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-3">
              Target Audience
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              Who This Service Is Engineered For
            </h2>
            <ul className="space-y-3">
              {service.targetAudience.map((aud, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{aud}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problems Addressed */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-3">
              Pain Points Solved
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              Hurdles Eliminating Your Conversion
            </h2>
            <ul className="space-y-3">
              {service.problemsAddressed.map((prob, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Core Deliverables & Benefits */}
      <div className="bg-slate-900 text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                Guaranteed Concrete Outputs
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                What You Walk Away With
              </h2>
              <div className="space-y-3">
                {service.deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-sm font-semibold flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Strategic Benefits
              </span>
              <h3 className="text-2xl font-bold">Why It Changes Your Results</h3>
              <ul className="space-y-3">
                {service.benefits.map((ben, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Execution Framework
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Step-by-Step Delivery Process
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Every engagement follows a documented methodology with clear milestones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((p) => (
            <div
              key={p.step}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 space-y-3 relative"
            >
              <div className="text-2xl font-black text-blue-600 font-mono">{p.step}</div>
              <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Specific Section Highlights */}
      {service.slug === "resume-rebranding" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
              Illustrative Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Before vs. After: Re-engineering Technical Bullets
            </h2>
            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-rose-950/40 border border-rose-900/60 space-y-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                  Typical Before (Passive Duty)
                </span>
                <p className="text-xs text-slate-300 font-mono leading-relaxed">
                  &ldquo;Responsible for writing backend APIs in Python and maintaining Postgres database tables for user data.&rdquo;
                </p>
                <div className="text-[11px] text-rose-300/80 pt-2 border-t border-rose-900/40">
                  ✗ Zero scale context · No business impact metrics · Passive verb
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-900/60 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  CX Codex Rebranded (XYZ Metric Format)
                </span>
                <p className="text-xs text-slate-100 font-mono leading-relaxed">
                  &ldquo;Architected 12 asynchronous FastAPI microservices and optimized PostgreSQL indexing, reducing average API response latency by 42% across 3.5M daily queries.&rdquo;
                </p>
                <div className="text-[11px] text-emerald-300 pt-2 border-t border-emerald-900/40">
                  ✓ High-impact action verb · Quantified metric · Scalability context
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {service.slug === "custom-job-campaigns" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
            <div className="space-y-1">
              <h2 className="text-base font-bold text-blue-950">
                CX Codex Strict Application Authorization Policy
              </h2>
              <p className="text-xs text-blue-900 leading-relaxed">
                We never submit applications on your behalf without your explicit prior authorization. Every company name, job requisition, and target location is presented to you for review before submission.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Service FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Frequently Asked Questions on {service.title}
          </h2>
        </div>
        <div className="space-y-3">
          {service.faqs.map((f, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-sm mb-1">{f.q}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
