import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

interface PageProps {
  params: Promise<{ category: string }>;
}

const CATEGORY_MAP: Record<string, { title: string; desc: string; categoryFilter: string }> = {
  "resume-writing": {
    title: "Resume Writing & ATS Optimization",
    desc: "Tactical guidelines on linear semantic hierarchy, Google XYZ metrics, and ATS parsing algorithms.",
    categoryFilter: "Resume Writing",
  },
  "linkedin-optimization": {
    title: "LinkedIn Recruiter Optimization",
    desc: "Boolean keywords, headline formulas, and discoverability settings to increase recruiter InMails.",
    categoryFilter: "LinkedIn Optimization",
  },
  "interview-preparation": {
    title: "Interview Preparation & STAR Mastery",
    desc: "Structure high-impact behavioral answers and master live coding and architecture screens.",
    categoryFilter: "Interview Preparation",
  },
  "us-job-market": {
    title: "US Job Market Intelligence",
    desc: "Navigate MSP networks, prime vendor systems, salary bands, and the 48-hour submission window.",
    categoryFilter: "US Job Market",
  },
  "career-transition": {
    title: "Career Transition & Pivoting Strategies",
    desc: "How to translate non-traditional and international experience into competitive US technology positioning.",
    categoryFilter: "Career Transition",
  },
  "technical-skills": {
    title: "Technical Skills & Architecture Mastery",
    desc: "High-yield LeetCode patterns, system design trade-offs, and production engineering standards.",
    categoryFilter: "Technical Skills",
  },
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const config = CATEGORY_MAP[resolved.category];
  if (!config) return { title: "Category Not Found" };

  return {
    title: `${config.title} | CX CODEX TECH-IT Career Advice`,
    description: config.desc,
  };
}

export default async function CareerAdviceCategoryPage({ params }: PageProps) {
  const resolved = await params;
  const config = CATEGORY_MAP[resolved.category];

  if (!config) {
    notFound();
  }

  // Find related blogs or articles
  const matchingBlogs = SITE_CONFIG.blogs.filter(
    (b) => b.category.toLowerCase().includes(config.categoryFilter.toLowerCase()) || resolved.category === "resume-writing"
  );

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Career Advice / {config.categoryFilter}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {config.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {config.desc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Featured Deep Dives in This Category</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {matchingBlogs.map((b) => (
            <div
              key={b.slug}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-colors"
            >
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{b.readTime}</span>
                  <span>·</span>
                  <span>{b.publishedAt}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-snug">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.excerpt}</p>
              </div>

              <Link
                href={`/blogs/${b.slug}`}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 pt-4 border-t border-slate-200"
              >
                <span>Read Complete Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
