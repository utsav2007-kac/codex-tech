"use client";

import React from "react";
import { User, Cpu, Briefcase, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function CareerFlowBridge() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              01 / THE CX CODEX CONNECTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              From raw talent <br />
              <span className="grad-text">to US market opportunity.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            CX CODEX TECH-IT transforms individual ambition into market opportunity — connecting qualified candidates directly with competitive US career pathways. We Deliver Jobs Faster.
          </p>
        </div>

        {/* The Career Flow Visual Bridge */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="text-center mb-10">
            <span className="px-3.5 py-1 rounded-full bg-blue-100/70 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
              The CX Codex Career Flow
            </span>
            <div className="text-xs font-mono text-slate-500 mt-2">
              TALENT → CX CODEX TECH-IT → FAST-TRACK PLACEMENT
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center relative">
            {/* Node 1: Talent */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3 relative text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-blue-600 shadow-sm">
                <User className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                01 / CANDIDATE TALENT
              </span>
              <h3 className="text-base font-extrabold text-slate-900">Your Foundational Skills</h3>
              <p className="text-xs text-slate-500">
                Experience · Technical Potential · Work Ethic · Career Ambition
              </p>
            </div>

            {/* Node 2: CX Codex Core */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white p-7 rounded-2xl border border-slate-800 shadow-xl space-y-3 relative text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto text-white shadow-lg shadow-blue-500/30">
                <Cpu className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block">
                02 / CX CODEX ENGINE
              </span>
              <h3 className="text-base font-extrabold text-white">We Deliver Jobs Faster</h3>
              <p className="text-xs text-slate-300">
                Strategy · ATS Rebranding · Skills Preparation · Interview Coaching · Placement Channels
              </p>
            </div>

            {/* Node 3: Job Opportunity */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3 relative text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                <Briefcase className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                03 / CAREER OUTCOME
              </span>
              <h3 className="text-base font-extrabold text-slate-900">Secured US Tech Role</h3>
              <p className="text-xs text-slate-500">
                Right Stack · Right Compensation · Right Growth Pipeline
              </p>
            </div>
          </div>

          {/* Bottom 4 Milestones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200">
            <div className="space-y-1">
              <div className="text-xs font-bold text-blue-600">01 / INTAKE</div>
              <div className="text-xs font-semibold text-slate-800">Talent enters system</div>
              <div className="text-[11px] text-slate-500">Comprehensive profile audit</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-blue-600">02 / REBRAND</div>
              <div className="text-xs font-semibold text-slate-800">CX Codex positions & trains</div>
              <div className="text-[11px] text-slate-500">ATS resume + mock loops</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-blue-600">03 / CAMPAIGN</div>
              <div className="text-xs font-semibold text-slate-800">Curated opportunities matched</div>
              <div className="text-[11px] text-slate-500">Targeted application pipeline</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-emerald-600">04 / GROWTH</div>
              <div className="text-xs font-semibold text-slate-800">Career moves forward</div>
              <div className="text-[11px] text-slate-500">6–12 months onboarding care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
