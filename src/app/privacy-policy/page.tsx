import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, Globe, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | CX CODEX TECH-IT",
  description:
    "CX CODEX TECH-IT's commitment to candidate confidentiality, data minimization, ATS document security, and international privacy standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Candidate Privacy Commitment
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: April 14, 2026 · Effective Immediately for all CX CODEX TECH-IT domains and services.
          </p>
        </div>

        {/* Content sections */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              1. Introduction & Scope
            </h2>
            <p>
              CX CODEX TECH-IT (“CX Codex”, “we”, “our”, or “us”) operates the career advisory, placement acceleration, and recruitment platform located at cxcodextech.com. This Privacy Policy details how we collect, store, process, and protect personal and professional information provided by job seekers, candidates, corporate partners, and website visitors.
            </p>
            <p>
              We treat candidate confidentiality as sacred. Under no circumstance do we sell, rent, or monetize your resume or identity to unauthorized data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Candidate Information:</strong> Name, email address, phone number, location, target roles, salary expectations, LinkedIn profile URL, work authorization status (including OPT/CPT, STEM OPT, H-1B, Green Card, or Citizen).
              </li>
              <li>
                <strong>Career Documents:</strong> Resumes, CVs, cover letters, portfolios, technical project descriptions, and interview responses uploaded to our assessment tools or shared during advisory sessions.
              </li>
              <li>
                <strong>Employer Inquiries:</strong> Corporate organization names, hiring manager contact information, role requisitions, compensation budgets, and hiring timelines.
              </li>
              <li>
                <strong>Diagnostic Heuristics:</strong> Data processed through our client-side analyzers (Resume Analyzer, LinkedIn Profile Analyzer, Job Match Score, Interview Readiness) for candidate feedback and benchmark reporting.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              3. Purpose and Legal Basis of Processing
            </h2>
            <p>We process your data strictly to fulfill the following legitimate career objectives:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Delivering bespoke career acceleration, interview coaching, and resume optimization services.</li>
              <li>Submitting pre-vetted candidate profiles to corporate partners with your express consent.</li>
              <li>Validating work authorization compliance under E-Verify, SSA, and US Department of Homeland Security regulations.</li>
              <li>Scheduling 1-on-1 strategy consultations and sending calendar invites.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              4. Data Retention & Erasure (GDPR / CCPA)
            </h2>
            <p>
              You maintain total ownership of your professional data. Candidates may at any time request an export of their data or an irreversible deletion of their records by contacting our Data Protection Officer or by using the local storage purge controls in the candidate portal.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <strong>Local Browser Sandbox:</strong> Diagnostic tools on this website operate in transparent local-first mode. Uploaded resumes and pasted texts can be wiped immediately by clearing your browser cache or executing the purge function in Account Settings.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              5. Contact Our Privacy Team
            </h2>
            <p>
              If you have any questions, inquiries, or privacy requests regarding your personal records, please reach out to:
            </p>
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 space-y-1">
              <div><strong>CX CODEX TECH-IT — Legal & Privacy Compliance</strong></div>
              <div>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-700 underline font-semibold">{siteConfig.contact.email}</a></div>
              <div>Telephone: {siteConfig.contact.phone}</div>
              <div>Offices: Noida (UP, India), Goa (India), Coleman (MI, USA)</div>
            </div>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-200 flex justify-between text-xs text-slate-500">
          <Link href="/terms-and-conditions" className="hover:text-blue-600 font-semibold">
            Terms & Conditions →
          </Link>
          <Link href="/" className="hover:text-blue-600 font-semibold">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
