import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Compass, FileCheck2, Code2, Users2, Send, Building, CheckCircle2, ArrowRight } from "lucide-react";
import { Linkedin } from "@/components/LinkedInIcon";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Candidate Career Services | US Technology Market",
  description:
    "Explore our complete suite of 7 career support services: Career Strategy, ATS Resume Rebranding, LinkedIn Positioning, Technical Mentorship, Interview Coaching, Job Campaigns, and US Placement Support.",
};

export default function ServicesIndexPage() {
  const serviceIcons = [
    <Compass key="1" className="w-6 h-6 text-blue-600" />,
    <FileCheck2 key="2" className="w-6 h-6 text-indigo-600" />,
    <Linkedin key="3" className="w-6 h-6 text-sky-600" />,
    <Code2 key="4" className="w-6 h-6 text-blue-600" />,
    <Users2 key="5" className="w-6 h-6 text-emerald-600" />,
    <Send key="6" className="w-6 h-6 text-violet-600" />,
    <Building key="7" className="w-6 h-6 text-amber-600" />,
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Services Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/80">
            End-To-End Infrastructure
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Specialized Career Services <br />
            <span className="grad-text">Engineered for the US Job Market.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every service is designed as an interlocking pillar of your career journey — from initial profile reconstruction and technical confidence to targeted outreach and onboarding.
          </p>
        </div>
      </div>

      {/* Services Grid with Detailed Deliverables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {SITE_CONFIG.services.map((srv, idx) => (
          <div
            key={srv.slug}
            id={srv.slug}
            className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {serviceIcons[idx]}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-slate-400 block">
                    {srv.kicker}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">{srv.title}</h2>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">{srv.shortDesc}</p>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Core Deliverables:
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {srv.deliverables.map((del, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white border border-slate-200/70 text-xs text-slate-700 flex items-center gap-2 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                Target Audience:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {srv.targetAudience.slice(0, 3).map((aud, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href={`/services/${srv.slug}`}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5"
                >
                  <span>Explore Full Service Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/book-consultation"
                  className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs text-center transition-colors"
                >
                  Inquire on This Service
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FinalCta />
    </div>
  );
}
