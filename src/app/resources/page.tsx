import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Download, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Free Career Templates & Resources | CX CODEX TECH-IT",
  description:
    "Download free ATS resume templates, STAR behavioral interview workbooks, and salary negotiation cheat sheets.",
};

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Downloadable Career Assets
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Free Career Resources & <br />
            <span className="grad-text">Battle-Tested Templates.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Download our curated ATS resume checklists, behavioral interview workbooks, and LinkedIn headline templates directly to your device.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 mb-24">
        {SITE_CONFIG.resources.map((res) => (
          <div
            key={res.slug}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors"
          >
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px]">
                  {res.category}
                </span>
                <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700">
                  {res.format}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 leading-snug">{res.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{res.description}</p>
            </div>

            <Link
              href={`/resources/${res.slug}`}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <span>Access & Download Resource</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      <FinalCta />
    </div>
  );
}
