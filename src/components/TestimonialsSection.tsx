"use client";

import React from "react";
import Link from "next/link";
import { Quote, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              09 / VERIFIED OUTCOMES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Real professionals. <br />
              <span className="grad-text">Measurable career movement.</span>
            </h2>
          </div>
          <div className="space-y-2 max-w-md">
            <p className="text-slate-600 text-sm leading-relaxed">
              The goal isn’t just getting placed. It’s building the confidence, positioning, and infrastructure to advance through every milestone.
            </p>
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Explore full success stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SITE_CONFIG.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              <p className="text-sm text-slate-700 leading-relaxed italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                  <div className="text-[10px] text-blue-600 font-semibold uppercase tracking-wider mt-0.5">
                    {t.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
