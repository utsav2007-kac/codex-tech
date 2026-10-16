import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Compass, FileText, Code2, Users2, Send, CheckCircle2, ArrowRight } from "lucide-react";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "How It Works | 7-Stage Candidate Journey | CX CODEX TECH-IT",
  description:
    "Explore our complete 7-stage US tech career journey: Discovery, Roadmap, Rebranding, Skills, Interview Prep, Campaign & Offer Onboarding.",
};

export default function HowItWorksPage() {
  const stages = [
    {
      num: "01",
      name: "Discovery & Profile Audit",
      tagline: "Assess your current baseline, work history, and target US role objectives.",
      candidateGives: "Current resume, LinkedIn URL, target roles, salary baseline, and visa status (OPT/CPT/H-1B).",
      codexGives: "Detailed diagnostic evaluation across ATS readiness, keyword density, and US hiring viability.",
      deliverable: "Intake Evaluation Report & 30-Minute Alignment Call.",
      nextMilestone: "Transition into Strategic Career Mapping.",
    },
    {
      num: "02",
      name: "Strategic Career Mapping",
      tagline: "Define 2–3 high-probability target titles and build a 60-day sprint roadmap.",
      candidateGives: "Preferences on company size, tech stack specializations, and remote vs hybrid locations.",
      codexGives: "Competitor analysis of active US requisitions, salary bands, and market sponsor trends.",
      deliverable: "12-Page US Career Strategy Roadmap & Target Company Benchmark List.",
      nextMilestone: "Profile Rebranding Execution.",
    },
    {
      num: "03",
      name: "Resume & Profile Rebranding",
      tagline: "Rebuild your resume and LinkedIn into high-converting recruiter assets.",
      candidateGives: "Detailed metrics on past projects (latency, cost savings, user scale, team size).",
      codexGives: "Full rewrite into Google XYZ metric syntax, ATS compliance check, and custom LinkedIn banner.",
      deliverable: "ATS-Certified Word & PDF Resume, LinkedIn Copy Deck, and Custom Header Banner.",
      nextMilestone: "Technical Deep-Dive and Story Banking.",
    },
    {
      num: "04",
      name: "Skill & Architecture Mentorship",
      tagline: "Bridge gaps in distributed systems, modern cloud tools, and coding patterns.",
      candidateGives: "Commitment to 5–10 hours per week of hands-on coding and architectural exercises.",
      codexGives: "Curated Blind-75 pattern curriculum, enterprise system design blueprints, and mentor code reviews.",
      deliverable: "Completed Capstone Projects & System Design Master Cheat Sheets.",
      nextMilestone: "High-Pressure Mock Interview Loops.",
    },
    {
      num: "05",
      name: "Interview Preparation & STAR Loops",
      tagline: "Master behavioral, situational, and technical interviews under real conditions.",
      candidateGives: "Participation in recorded 60-minute mock interview sessions with our coaches.",
      codexGives: "Timestamped rubric grading communication conciseness, technical depth, and cultural alignment.",
      deliverable: "15-Story STAR Behavioral Story Bank & Recorded Mock Interview Video Breakdown.",
      nextMilestone: "Active Job Search Campaign.",
    },
    {
      num: "06",
      name: "Targeted Job Campaign & Applications",
      tagline: "Execute curated outreach across top US requisitions and partner networks.",
      candidateGives: "Approval of weekly curated shortlists before any application is submitted.",
      codexGives: "Handpicked application tailoring, hiring manager outreach, and Kanban pipeline management.",
      deliverable: "Weekly 25–40 Curated Opportunities & Real-Time Application Kanban Tracker.",
      nextMilestone: "Offer Evaluation & Background Checks.",
    },
    {
      num: "07",
      name: "Offer Evaluation & Onboarding Advisory",
      tagline: "Navigate offer terms, benefits packages, I-9 compliance, and your first 90 days.",
      candidateGives: "Written offer letters, compensation packages, and contract terms for legal review.",
      codexGives: "Levels.fyi salary benchmarking, counter-offer scripting, and onboarding survival guides.",
      deliverable: "Comprehensive Offer Comparison Matrix & 90-Day Workplace Blueprint.",
      nextMilestone: "Quarterly Performance Review Mentorship (6–12 months).",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            Lifecycle Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            The 7-Stage Candidate Journey. <br />
            <span className="grad-text">From Talent to US Placement.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A transparent breakdown of each stage: what you contribute, what CX Codex delivers, the concrete output produced, and your exact next milestone.
          </p>
        </div>
      </div>

      {/* 7 Stages Stack */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-24">
        {stages.map((st) => (
          <div
            key={st.num}
            className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center font-mono">
                  {st.num}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{st.name}</h2>
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Next: {st.nextMilestone}
              </span>
            </div>

            <p className="text-sm text-slate-700 font-medium">{st.tagline}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  What You Contribute:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">{st.candidateGives}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                  What CX Codex Provides:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">{st.codexGives}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex items-center gap-3 text-xs sm:text-sm text-blue-950 font-semibold">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Concrete Milestone Output: {st.deliverable}</span>
            </div>
          </div>
        ))}
      </div>

      <FinalCta />
    </div>
  );
}
