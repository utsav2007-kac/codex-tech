import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FileText, Users2, Globe2, RefreshCw, Code2, ArrowRight } from "lucide-react";
import { Linkedin } from "@/components/LinkedInIcon";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Career Advice & Strategy Guides | CX CODEX TECH-IT",
  description:
    "Expert tech career guides covering modern ATS parsing, LinkedIn Recruiter optimization, behavioral STAR storytelling, and the US technology market.",
};

export default function CareerAdviceHubPage() {
  const categories = [
    {
      slug: "resume-writing",
      title: "Resume Writing & ATS Optimization",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      desc: "How to format single-page technical resumes, beat Workday and Greenhouse parsers, and craft Google XYZ bullets.",
    },
    {
      slug: "linkedin-optimization",
      title: "LinkedIn Recruiter Positioning",
      icon: <Linkedin className="w-6 h-6 text-sky-600" />,
      desc: "Turn your LinkedIn into an inbound recruiter magnet with boolean search keywords, compelling About stories, and Open-to-Work configurations.",
    },
    {
      slug: "interview-preparation",
      title: "Interview Preparation & STAR Loops",
      icon: <Users2 className="w-6 h-6 text-indigo-600" />,
      desc: "Master behavioral questions, technical conflict stories, system design walkthroughs, and executive panel screens.",
    },
    {
      slug: "us-job-market",
      title: "US Tech Job Market Trends",
      icon: <Globe2 className="w-6 h-6 text-emerald-600" />,
      desc: "Understand Managed Service Providers (MSPs), remote vs hybrid salary bands, and the critical 48-hour application window.",
    },
    {
      slug: "career-transition",
      title: "Career Transition & Pivoting",
      icon: <RefreshCw className="w-6 h-6 text-amber-600" />,
      desc: "Translate past non-traditional or overseas experience into an in-demand technology specialty without restarting from scratch.",
    },
    {
      slug: "technical-skills",
      title: "Technical Skills & Architecture",
      icon: <Code2 className="w-6 h-6 text-rose-600" />,
      desc: "Curated Blind-75 pattern mastery, distributed systems trade-offs, and portfolio capstone presentation.",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Advisory & Market Knowledge
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Career Advice & Strategy Guides. <br />
            <span className="grad-text">Tactical Knowledge for US Tech.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Written by senior tech recruiters, former hiring managers, and career strategists. Real, tested playbooks without generic corporate clichés.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                {cat.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-900">{cat.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
            </div>

            <Link
              href={`/career-advice/${cat.slug}`}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 pt-4 border-t border-slate-200"
            >
              <span>Explore Category Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      <FinalCta />
    </div>
  );
}
