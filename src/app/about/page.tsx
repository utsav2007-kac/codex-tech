import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  ShieldCheck,
  Target,
  Users2,
  Building,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "About Us | CX CODEX TECH-IT — US Career Infrastructure",
  description:
    "Learn about CX CODEX TECH-IT's mission, support philosophy, verified history, global offices in Noida, Goa, and Coleman MI, and our commitment to career transparency.",
};

export default function AboutPage() {
  const principles = [
    { title: "Personalized Over Mass Volume", desc: "No automated bot blast applications. Every campaign is human-curated around your exact skills and visa parameters." },
    { title: "Skills Over Credentials", desc: "Demonstrated production capability, software architecture, and grit matter far more to modern US engineering teams than traditional degrees." },
    { title: "Honest Market Transparency", desc: "We never guarantee employment offers, visa grants, or fabricate statistics. We provide real infrastructure and measurable positioning." },
    { title: "Continuous Candidate Ownership", desc: "You retain 100% control over where your resume is submitted, what roles you accept, and all personal data." },
    { title: "Holistic Career Architecture", desc: "Branding, technical depth, behavioral storytelling, and offer negotiation work together as a single interlocking pipeline." },
    { title: "Post-Placement Support", desc: "Our relationship doesn't stop at the offer letter. We provide 6–12 months of onboarding care to ensure your first year in the role is a success." },
    { title: "E-Verify & US Regulatory Compliance", desc: "We operate in full compliance with US Department of Homeland Security and Social Security Administration standards." },
  ];

  const milestones = [
    { year: "2021", title: "Foundation & Candidate Guidance", desc: "Started as a dedicated career mentorship advisory for STEM graduates navigating OPT/CPT transitions in the US." },
    { year: "2023", title: "Global Expansion & Delivery Centers", desc: "Established our Noida Global Operations Center and Panaji Goa branch, scaling our technical interview coaching network." },
    { year: "2024", title: "US Onsite Presence in Michigan", desc: "Opened our Coleman, Michigan onsite office to interface directly with US corporate clients, MSP networks, and prime vendors." },
    { year: "2026", title: "Career Infrastructure Platform", desc: "Rebuilt the platform with transparent heuristic assessment tools, dedicated job campaign tracking, and comprehensive post-placement support." },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            About CX CODEX TECH-IT
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Career infrastructure for the <br />
            <span className="grad-text">global technology market.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            CX CODEX TECH-IT was founded with a singular conviction: talented professionals deserve more than generic recruiters and automated job bots. We provide the personalized strategy, ATS-certified rebranding, and client exposure needed to win in the United States.
          </p>
        </div>
      </div>

      {/* Mission & Philosophy Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Core Mission</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To empower ambitious technical talent with the strategic positioning, interview mastery, and hiring market connections necessary to build long-term, high-impact careers in the US tech ecosystem.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Our Support Philosophy</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We treat your career transition as an engineering problem: diagnose weaknesses with honest metrics, rebuild assets to exact specifications, run targeted campaigns with verifiable feedback, and provide continuous support through onboarding.
            </p>
          </div>
        </div>
      </div>

      {/* 7 Core Principles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            HOW WE OPERATE
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Our 7 Service Principles
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((pr, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5"
            >
              <span className="text-xs font-mono font-bold text-blue-600">
                PRINCIPLE 0{idx + 1}
              </span>
              <h3 className="text-base font-bold text-slate-900">{pr.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pr.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Company Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Verified Milestones
          </h2>
        </div>

        <div className="space-y-6">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="text-2xl font-black text-blue-600 font-mono w-24 shrink-0">
                {m.year}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">{m.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Three Global Offices Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid lg:grid-cols-3 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-2">
              India · Head Office
            </span>
            <div className="text-xl font-bold mb-1">Noida Center</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              G-172, Sector 63 Rd, Sector 63, Noida, Uttar Pradesh 201309
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-2">
              India · Branch Office
            </span>
            <div className="text-xl font-bold mb-1">Goa Office</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              EDC Complex, Patto Plaza, Panaji, Goa 403001
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              USA · Onsite Office
            </span>
            <div className="text-xl font-bold mb-1">Michigan Hub</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              112 Fraser St., Coleman, MI 48618
            </p>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
