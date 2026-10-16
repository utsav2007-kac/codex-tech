import React from "react";
import { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | CX CODEX TECH-IT",
  description:
    "Explore answers regarding CX CODEX TECH-IT career support plans, ATS resume rebrand specifications, timelines, employer vetting, and data privacy.",
};

export default function FaqPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Knowledge Base & Answers
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Frequently Asked Questions. <br />
            <span className="grad-text">Direct & Truthful Information.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Search our complete repository of candidate and employer answers regarding pricing, timelines, interview preparation, and placement support.
          </p>
        </div>
      </div>

      <FaqAccordion />
      <FinalCta />
    </div>
  );
}
