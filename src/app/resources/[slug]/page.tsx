import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Download, CheckCircle2, ShieldCheck, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE_CONFIG.resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const res = SITE_CONFIG.resources.find((r) => r.slug === resolved.slug);
  if (!res) return { title: "Resource Not Found" };

  return {
    title: `${res.title} | CX CODEX TECH-IT Resources`,
    description: res.description,
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const resolved = await params;
  const res = SITE_CONFIG.resources.find((r) => r.slug === resolved.slug);

  if (!res) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Resources</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {res.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700">
              {res.format}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {res.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {res.description}
          </p>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Asset Highlights & Usage Notes:
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Verified against 2026 ATS parsing specifications (Workday, Greenhouse, Taleo).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Includes editable formulas and fillable worksheet sections.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>No paywall or credit card required. Free for candidate use.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#download"
              className="blob-button w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider shadow-md shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download {res.format} ↗</span>
            </a>
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-300 text-slate-800 text-xs font-semibold text-center hover:bg-slate-100"
            >
              Discuss With an Advisor
            </Link>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
