"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, FileEdit, GraduationCap, Send, Users, CheckCircle } from "lucide-react";

export default function JourneyTimeline() {
  const steps = [
    {
      num: "01",
      tag: "UNDERSTAND",
      title: "Career Strategy & Planning",
      desc: "One-on-one discovery to dissect your career goals, technical strengths, and target US role parameters. We build a personalized roadmap tailored to you.",
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      link: "/services/career-strategy-planning",
    },
    {
      num: "02",
      tag: "REBRAND",
      title: "Resume & Profile Rebranding",
      desc: "We rebuild your resume, LinkedIn, and digital footprint from the ground up, guaranteeing ATS compliance, XYZ metrics, and recruiter discoverability.",
      icon: <FileEdit className="w-5 h-5 text-indigo-600" />,
      link: "/services/resume-rebranding",
    },
    {
      num: "03",
      tag: "PREPARE",
      title: "Skill Preparation & Mentorship",
      desc: "Personalized study tracks, high-yield algorithm practice, system design architectures, and technical deep-dives with experienced mentors.",
      icon: <GraduationCap className="w-5 h-5 text-sky-600" />,
      link: "/services/skill-development",
    },
    {
      num: "04",
      tag: "CAMPAIGN",
      title: "Custom Job Campaigns",
      desc: "Dedicated search managers hand-curate verified openings matching your salary floor and visa needs. Handpicked applications — never spam auto-applying.",
      icon: <Send className="w-5 h-5 text-violet-600" />,
      link: "/services/custom-job-campaigns",
    },
    {
      num: "05",
      tag: "INTERVIEW",
      title: "Pre-Interview Assistance",
      desc: "Rigorous 60-minute mock interviews, 15+ rehearsed STAR behavioral stories, and pre-interview briefings before high-stakes client super-days.",
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      link: "/services/interview-preparation",
    },
    {
      num: "06",
      tag: "ONBOARDING",
      title: "Offer Review & Onboarding",
      desc: "We help you evaluate offer letters, negotiate base and bonus structures, navigate background checks, and guide your first year on the job.",
      icon: <CheckCircle className="w-5 h-5 text-amber-600" />,
      link: "/services/us-market-placement-support",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              02 / HOW WE EMPOWER YOUR CAREER
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Your journey. <br />
              <span className="grad-text">Built entirely around you.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            Because every candidate has a distinct background and timeline, CX Codex crafts a structured journey designed to give you clarity, confidence, and continuous support.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {st.num} / {st.tag}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    {st.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {st.desc}
                </p>
              </div>

              <Link
                href={st.link}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 pt-3 border-t border-slate-100"
              >
                <span>Explore {st.tag.toLowerCase()} support</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Full Process CTA Link */}
        <div className="mt-12 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            <span>Read full 7-stage candidate lifecycle walkthrough</span>
            <span className="text-blue-600">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
