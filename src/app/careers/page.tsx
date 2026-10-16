import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Briefcase, CheckCircle2, ArrowRight, HeartHandshake, MapPin } from "lucide-react";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Careers at CX CODEX TECH-IT | Join Our Global Team",
  description:
    "Explore open career opportunities at CX CODEX TECH-IT across career strategy, technical mentorship, and US employer partnerships.",
};

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Technical Interview Coach (Distributed Systems & Cloud)",
      department: "Mentorship & Delivery",
      location: "Remote / Noida Delivery Center",
      type: "Full-Time",
      description: "Conduct recorded mock interviews, review candidate system architectures, and coach engineers on high-concurrency design patterns.",
    },
    {
      title: "US Talent Campaign Manager",
      department: "Job Campaigns & Placements",
      location: "Remote / Coleman, MI",
      type: "Full-Time",
      description: "Manage candidate requisition pipelines, tailor applications with strict consent protocols, and interface with US recruiting desks.",
    },
    {
      title: "ATS Resume & Executive Branding Specialist",
      department: "Career Strategy",
      location: "Remote / Panaji, Goa",
      type: "Full-Time",
      description: "Transform raw software engineering project descriptions into quantified Google XYZ metric formats optimized for modern ATS parsers.",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Join Our Mission
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Build the Future of <br />
            <span className="grad-text">Global Career Infrastructure.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Help ambitious international engineers and professionals achieve their full potential in the US market. Work with a collaborative, high-standards team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mb-24">
        {openings.map((job, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-300 transition-colors"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-600">
                <span>{job.department}</span>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3.5 h-3.5" /> {job.location}
                </span>
                <span>·</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {job.type}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">{job.title}</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{job.description}</p>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider transition-colors shrink-0 text-center"
            >
              Apply for Role ↗
            </Link>
          </div>
        ))}
      </div>

      <FinalCta />
    </div>
  );
}
