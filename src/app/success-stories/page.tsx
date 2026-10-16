import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Quote, CheckCircle2, Building, Calendar, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Candidate Success Stories & Placements | CX CODEX TECH-IT",
  description:
    "Read verified placement outcomes and testimonials from candidates supported by CX CODEX TECH-IT into US engineering, cloud, and data roles.",
};

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: "Kanishka Shekhar",
      role: "Software Engineer",
      company: "Pethealth Inc.",
      location: "United States",
      timeline: "3.5 Months to Placement",
      quote:
        "The LinkedIn branding and profile optimization done by CX CODEX brought me visibility in the market. Their soft skills training gave me the edge I needed to secure my role at Pethealth Inc.",
      category: "Software Engineering & Soft Skills",
      keyPillars: ["LinkedIn Rebranding", "Soft Skills Coaching", "ATS Resume"],
    },
    {
      name: "CX Codex Candidate",
      role: "Cloud Infrastructure Architect",
      company: "US Enterprise Healthcare Client",
      location: "Remote USA",
      timeline: "2.5 Months to Placement",
      quote:
        "CX Codex helped me understand how to present my experience for the US market. The preparation and interview support made the entire process much more structured.",
      category: "Cloud Architecture & System Design",
      keyPillars: ["System Design Coaching", "Custom Job Campaign", "Offer Negotiation"],
    },
    {
      name: "CX Codex Candidate",
      role: "Senior Data Engineer (Snowflake / PySpark)",
      company: "Financial Technology Partner",
      location: "New York, NY",
      timeline: "4 Months to Placement",
      quote:
        "The process felt personal rather than generic. From profile positioning to interview preparation, I always knew what the next step was.",
      category: "Data Engineering & Pipeline Scaling",
      keyPillars: ["Technical Deep-Dive", "Behavioral STAR Stories", "Onboarding Advisory"],
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Verified Outcomes & Testimonials
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Real Candidates. <br />
            <span className="grad-text">Verified US Career Outcomes.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every candidate testimonial represents real preparation, measurable profile transformation, and structured interview support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-24">
        {stories.map((st, idx) => (
          <div
            key={idx}
            className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{st.category}</span>
              </div>
              <p className="text-base sm:text-lg text-slate-800 italic leading-relaxed">
                &ldquo;{st.quote}&rdquo;
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {st.keyPillars.map((p, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700"
                  >
                    ✓ {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{st.name}</h3>
                <div className="text-xs text-blue-600 font-semibold">{st.role}</div>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>Placed at: {st.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{st.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FinalCta />
    </div>
  );
}
