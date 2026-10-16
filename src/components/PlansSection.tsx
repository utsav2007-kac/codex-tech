"use client";

import React from "react";
import Link from "next/link";
import { Check, Star, ArrowRight, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function PlansSection() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              05 / SUPPORT LEVELS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Choose the level of <br />
              <span className="grad-text">support you need.</span>
            </h2>
          </div>
          <div className="space-y-2 max-w-md">
            <p className="text-slate-600 text-sm leading-relaxed">
              Start with the core foundation or choose comprehensive campaign execution and post-placement care.
            </p>
            <Link
              href="/plans"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Compare all 3 plans in detail</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {SITE_CONFIG.plans.map((p, idx) => (
            <div
              key={p.slug}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all relative ${
                p.popular
                  ? "bg-slate-900 text-white border-slate-800 shadow-2xl lg:-translate-y-2"
                  : "bg-slate-50 border-slate-200 text-slate-900 shadow-sm"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-bold ${
                      p.popular ? "text-blue-400" : "text-slate-500"
                    }`}
                  >
                    0{idx + 1} / {idx === 0 ? "START" : idx === 1 ? "BUILD" : "PARTNER"}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      p.popular
                        ? "bg-slate-800 text-slate-300 border border-slate-700"
                        : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    {p.commitment}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-extrabold tracking-tight mb-2 ${
                    p.popular ? "text-white" : "text-slate-950"
                  }`}
                >
                  {p.name}
                </h3>

                <p
                  className={`text-xs leading-relaxed mb-6 ${
                    p.popular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {p.tagline}
                </p>

                {/* Scope pill */}
                <div
                  className={`p-3 rounded-2xl mb-6 text-xs font-medium ${
                    p.popular
                      ? "bg-slate-800/80 border border-slate-700 text-blue-200"
                      : "bg-white border border-slate-200/80 text-blue-700"
                  }`}
                >
                  <span className="font-bold block text-[10px] uppercase tracking-wider mb-0.5">
                    Focus:
                  </span>
                  {p.supportScope}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block ${
                      p.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Included Architecture:
                  </span>
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          p.popular ? "text-emerald-400" : "text-blue-600"
                        }`}
                      />
                      <span className={p.popular ? "text-slate-200" : "text-slate-700"}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-800/50">
                <div className="text-[11px] text-center font-medium opacity-80">
                  {p.pricingNote}
                </div>
                <Link
                  href={`/plans/${p.slug}`}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold text-center block transition-all shadow-md ${
                    p.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  Explore Plan Details ↗
                </Link>
                <Link
                  href="/book-consultation"
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold text-center block transition-colors ${
                    p.popular
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
