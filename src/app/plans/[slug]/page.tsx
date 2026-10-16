import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Check, Star, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { SITE_CONFIG, PlanItem } from "@/config/site";
import FinalCta from "@/components/FinalCta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE_CONFIG.plans.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const plan = SITE_CONFIG.plans.find((p) => p.slug === resolved.slug);
  if (!plan) return { title: "Plan Not Found" };

  return {
    title: `${plan.name} Career Support Plan | CX CODEX TECH-IT`,
    description: plan.tagline,
  };
}

export default async function PlanDetailPage({ params }: PageProps) {
  const resolved = await params;
  const plan = SITE_CONFIG.plans.find((p) => p.slug === resolved.slug);

  if (!plan) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            {plan.commitment} · {plan.supportScope}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {plan.name}
          </h1>
          <p className="text-xl font-medium text-slate-700 leading-snug">
            {plan.tagline}
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <strong className="text-slate-900 block mb-0.5">Ideal Candidate Profile:</strong>
            {plan.idealFor}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/book-consultation"
              className="blob-button px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider shadow-md shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Schedule Strategy Call for {plan.name}</span>
              <span className="text-blue-200">↗</span>
            </Link>
            <Link
              href="/plans"
              className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors"
            >
              Compare All 3 Plans
            </Link>
          </div>
        </div>
      </div>

      {/* Included Features and Deliverables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Features */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Included Program Features
            </h2>
            <div className="space-y-3">
              {plan.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
            <h2 className="text-2xl font-bold">
              Tangible Program Deliverables
            </h2>
            <div className="space-y-3">
              {plan.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Pricing & Terms Disclosure
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {plan.pricingNote} We do not utilize deceptive scarcity claims or hidden recurring charges.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
