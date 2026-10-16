import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Compass, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "HTML Sitemap | CX CODEX TECH-IT",
  description: "Complete index of all public pages, tools, services, and candidate resources at CX CODEX TECH-IT.",
};

export default function SitemapPage() {
  const sections = [
    {
      title: "Core Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us & Leadership", href: "/about" },
        { label: "How It Works (7-Stage Journey)", href: "/how-it-works" },
        { label: "Verified Success Stories", href: "/success-stories" },
        { label: "Global Locations & Offices", href: "/locations" },
        { label: "Careers at CX CODEX TECH-IT", href: "/careers" },
        { label: "Contact Us & Regional Desks", href: "/contact" },
        { label: "Frequently Asked Questions", href: "/faq" },
        { label: "Book 1-on-1 Strategy Consultation", href: "/book-consultation" },
      ],
    },
    {
      title: "Career Acceleration Services",
      links: siteConfig.services.map((s) => ({
        label: s.title,
        href: `/services/${s.slug}`,
      })),
    },
    {
      title: "Diagnostic Career Tools",
      links: siteConfig.tools.map((t) => ({
        label: `${t.title} (Interactive Tool)`,
        href: `/tools/${t.slug}`,
      })),
    },
    {
      title: "Structured Career Support Plans",
      links: siteConfig.plans.map((p) => ({
        label: `${p.name} Plan`,
        href: `/plans/${p.slug}`,
      })),
    },
    {
      title: "Candidate Audiences",
      links: siteConfig.audiences.map((a) => ({
        label: a.title,
        href: `/audiences/${a.slug}`,
      })),
    },
    {
      title: "Employer & Partner Portals",
      links: [
        { label: "Employer Overview", href: "/employers" },
        { label: "Enterprise Talent Solutions", href: "/employers/talent-solutions" },
        { label: "Hire Pre-Vetted Tech Talent", href: "/employers/hire-talent" },
        { label: "Recruiting Partners Network", href: "/employers/recruiting-partners" },
        { label: "Submit Requisition / Job Order", href: "/employers/submit-requirement" },
        { label: "Become a Recruiting Partner", href: "/employers/partner-with-us" },
      ],
    },
    {
      title: "Career Advice & Knowledge Base",
      links: [
        { label: "Career Advice Hub", href: "/career-advice" },
        { label: "ATS & Resume Writing Advice", href: "/career-advice/resume-branding" },
        { label: "LinkedIn & Market Presence", href: "/career-advice/linkedin-optimization" },
        { label: "Coding & System Design Interview Prep", href: "/career-advice/interview-prep" },
        { label: "US Tech Salary Negotiation Tactics", href: "/career-advice/salary-negotiation" },
        { label: "F-1 OPT, STEM OPT & H-1B Advice", href: "/career-advice/visa-work-authorization" },
        { label: "Career Transitions & Switchers", href: "/career-advice/career-switching" },
        { label: "Blogs & Technical Guides", href: "/blogs" },
        { label: "Candidate Guides & Downloads", href: "/resources" },
      ],
    },
    {
      title: "Candidate Portal (Authenticated)",
      links: [
        { label: "Candidate Dashboard Overview", href: "/dashboard" },
        { label: "Profile & Search Target Settings", href: "/dashboard/profile" },
        { label: "Saved Assessment Results", href: "/dashboard/assessments" },
        { label: "Career Sprint Milestones", href: "/dashboard/career-plan" },
        { label: "Live Job Application Pipeline", href: "/dashboard/applications" },
        { label: "Booked Strategy Sessions", href: "/dashboard/appointments" },
        { label: "Document Vault", href: "/dashboard/documents" },
        { label: "Account & Data Settings", href: "/dashboard/settings" },
        { label: "Candidate Sign In", href: "/login" },
        { label: "Create Candidate Account", href: "/signup" },
      ],
    },
    {
      title: "Legal, Security & Compliance",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Accessibility Statement", href: "/accessibility" },
        { label: "Disclaimer & Legal Disclosures", href: "/disclaimer" },
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> Site Index
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Complete Website Directory & Sitemap
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl">
            A comprehensive, structured index of all 45+ public pages, diagnostic engines, service offerings, and candidate portals across cxcodextech.com.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200 space-y-3">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-200">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition flex items-center justify-between group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {link.label}
                      </span>
                      <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
