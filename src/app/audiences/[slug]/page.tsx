import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, GraduationCap, Briefcase, RefreshCw, Globe } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE_CONFIG.audiences.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const aud = SITE_CONFIG.audiences.find((a) => a.slug === resolved.slug);
  if (!aud) return { title: "Audience Page Not Found" };

  return {
    title: `${aud.title} Career Support | CX CODEX TECH-IT`,
    description: aud.tagline,
  };
}

export default async function AudienceDetailPage({ params }: PageProps) {
  const resolved = await params;
  const aud = SITE_CONFIG.audiences.find((a) => a.slug === resolved.slug);

  if (!aud) {
    notFound();
  }

  const recommendedPlan = SITE_CONFIG.plans.find((p) => p.slug === aud.recommendedPlan);

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            {aud.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {aud.title}
          </h1>
          <p className="text-xl font-medium text-slate-700 leading-snug">
            {aud.tagline}
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/book-consultation"
              className="blob-button px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider shadow-md shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Book Strategy Call for {aud.title}</span>
              <span className="text-blue-200">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">
              Core Market Challenges
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Barriers Faced By {aud.title}
            </h2>
            <div className="space-y-3">
              {aud.challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
              CX Codex Tactical Solutions
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              How We Engineer Your Advantage
            </h2>
            <div className="space-y-3">
              {aud.solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Support Plan & Tools */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
              Recommended Support Plan
            </span>
            <h3 className="text-3xl font-bold">
              {recommendedPlan?.name || "US Career Accelerator"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {recommendedPlan?.tagline} Includes personalized strategy, resume rebrand, mock interviews, and tailored job campaigns.
            </p>
            <div className="pt-2">
              <Link
                href={`/plans/${recommendedPlan?.slug || "us-career-accelerator"}`}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors inline-block"
              >
                Review Full Plan Details ↗
              </Link>
            </div>
          </div>

          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Key Assessment Tools to Run:
            </span>
            <div className="grid gap-3">
              {aud.recommendedTools.map((tl) => (
                <Link
                  key={tl}
                  href={`/tools/${tl}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 text-xs font-semibold flex items-center justify-between text-white transition-colors"
                >
                  <span className="capitalize">{tl.replace(/-/g, " ")}</span>
                  <span className="text-blue-400 font-bold">Run Free Diagnostic ↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
