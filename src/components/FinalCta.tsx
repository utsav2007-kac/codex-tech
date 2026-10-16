"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Your Next Career Move</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-6">
          Don’t just get a job. <br />
          <span className="grad-text">Build your international career.</span>
        </h2>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Schedule a one-on-one session with our senior career strategists. We will evaluate your profile, assess target US salary bands, and build a personalized action roadmap.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book-consultation"
            className="blob-button w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2"
          >
            <span>Book Your Free Slot Now</span>
            <span className="text-blue-200">↗</span>
          </Link>
          <Link
            href="/how-it-works"
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors shadow-xs"
          >
            Review The Full Process
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free 30-Minute Intake Assessment
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Confidential Profile Review
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Obligation or Hidden Fees
          </span>
        </div>
      </div>
    </section>
  );
}
