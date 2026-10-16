"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  FileCheck2,
  Code2,
  Users2,
  Send,
  Building,
  ArrowRight,
  ShieldCheck,
  Award,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import { Linkedin } from "@/components/LinkedInIcon";
import { SITE_CONFIG } from "@/config/site";
import TiltCard from "@/components/TiltCard";

export default function ServicesGrid() {
  const serviceIcons = [
    <Compass key="1" className="w-5 h-5" />,
    <FileCheck2 key="2" className="w-5 h-5" />,
    <Linkedin key="3" className="w-5 h-5" />,
    <Code2 key="4" className="w-5 h-5" />,
    <Users2 key="5" className="w-5 h-5" />,
    <Send key="6" className="w-5 h-5" />,
    <Building key="7" className="w-5 h-5" />,
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              03 / CANDIDATE SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Everything you need to <br />
              <span className="grad-text">compete in the US tech market.</span>
            </h2>
          </div>
          <div className="space-y-2 max-w-md">
            <p className="text-slate-600 text-sm leading-relaxed">
              A structured career support system covering strategy, ATS-ready resumes, LinkedIn positioning, technical mentorship, interview readiness, and placement guidance.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Explore all services matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {SITE_CONFIG.services.map((srv, idx) => (
            <TiltCard key={srv.slug} maxTilt={7} className="h-full">
              <Link
                href={`/services/${srv.slug}`}
                className={`h-full rounded-3xl p-7 border transition-all flex flex-col justify-between group hover:shadow-xl ${
                  idx === 0
                    ? "bg-gradient-to-br from-blue-900 to-slate-950 text-white border-slate-800"
                    : "bg-slate-50/70 border-slate-200/90 hover:bg-white text-slate-900"
                }`}
              >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-xs font-mono font-bold ${
                      idx === 0 ? "text-blue-300" : "text-slate-400"
                    }`}
                  >
                    {srv.kicker}
                  </span>
                  <div
                    className={`p-3 rounded-2xl ${
                      idx === 0 ? "bg-blue-600 text-white" : "bg-white text-blue-600 shadow-xs border border-slate-200/70"
                    }`}
                  >
                    {serviceIcons[idx]}
                  </div>
                </div>

                <h3
                  className={`text-xl font-bold tracking-tight mb-2.5 ${
                    idx === 0 ? "text-white" : "text-slate-900 group-hover:text-blue-600"
                  } transition-colors`}
                >
                  {srv.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed mb-6 ${
                    idx === 0 ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {srv.shortDesc}
                </p>

                {/* Key Deliverables Pill List */}
                <div className="space-y-1.5 mb-6">
                  {srv.deliverables.slice(0, 2).map((d, i) => (
                    <div
                      key={i}
                      className={`text-[11px] flex items-center gap-2 ${
                        idx === 0 ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${idx === 0 ? "text-blue-400" : "text-blue-600"}`} />
                      <span className="line-clamp-1">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`pt-4 border-t flex items-center justify-between text-xs font-bold ${
                  idx === 0
                    ? "border-slate-800 text-blue-300 group-hover:text-white"
                    : "border-slate-200/80 text-blue-600 group-hover:text-blue-700"
                }`}
              >
                <span>View Full Service Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            </TiltCard>
          ))}
        </div>

        {/* Why CX CODEX TECH-IT Section */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              WHY CX CODEX TECH-IT MATTERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              People first. Opportunity next.
            </h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              CX CODEX TECH-IT bridges the gap between top global talent and leading US organizations through direct market exposure, client and MSP access, and complete offer-to-onboarding support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Access to US Employers</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with hiring managers across IT, cloud infrastructure, healthcare tech, and financial systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Skills Over Formal Degrees</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We value demonstrated technical capability and commercial grit over traditional four-year degrees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Personalized Mentorship</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Dedicated career advisors and technical leads guide your journey from initial intake to performance review.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">A Partner That Cares</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We build long-term relationships, not single transactional placements, keeping you supported as you grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
