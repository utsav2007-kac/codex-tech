"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Shield,
  ExternalLink,
} from "lucide-react";
import { Linkedin, Instagram, Facebook } from "@/components/LinkedInIcon";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubscribed(true);
        setEmail("");
      } else {
        setErrorMsg("Unable to subscribe right now. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Value Strip */}
        <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 rounded-3xl p-8 sm:p-10 mb-16 border border-slate-800/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3 border border-blue-400/30">
                <Shield className="w-3.5 h-3.5" />
                US Career Intelligence Briefing
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Stay updated on US hiring trends & tech requisitions.
              </h3>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Get monthly deep-dives on ATS algorithm updates, corporate MSP pipelines, salary benchmarks, and interview frameworks delivered to your inbox.
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 p-4 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium">
                    Thank you! You are subscribed to CX CODEX TECH-IT market briefings.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your professional email"
                      className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 flex-1"
                      required
                      aria-label="Email for newsletter subscription"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-blue-600/30"
                    >
                      {submitting ? "Subscribing..." : "Subscribe"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {errorMsg && <p className="text-rose-400 text-xs">{errorMsg}</p>}
                  <p className="text-slate-400 text-[11px]">
                    No spam. Unsubscribe at any time. Read our{" "}
                    <Link href="/privacy-policy" className="underline hover:text-slate-300">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800 text-sm">
          {/* Brand & Mission */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4 focus:outline-none">
              <div className="relative h-12 w-52 bg-white/95 px-3 py-1.5 rounded-xl border border-white/20 shadow-md">
                <Image
                  src="/logo-transparent.png"
                  alt="CX CODEX TECH-IT — We Deliver Jobs Faster"
                  fill
                  sizes="208px"
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-5">
              {SITE_CONFIG.name} — {SITE_CONFIG.tagline}. High-velocity technical staffing, career acceleration, and enterprise talent acquisition delivering interview-ready engineering leaders across the United States.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CX CODEX TECH-IT on LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CX CODEX TECH-IT on Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CX CODEX TECH-IT on Facebook"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 hover:border-blue-600 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* E-Verify & Federal Badges */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-xs space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white tracking-wide uppercase">
                  E-Verify Participant
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                CX CODEX TECH-IT participates in E-Verify in full compliance with DHS and Social Security Administration (SSA) guidelines.
              </p>
            </div>
          </div>

          {/* Column: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SITE_CONFIG.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-blue-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Tools & Plans */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Career Tools
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 mb-6">
              {SITE_CONFIG.tools.map((t) => (
                <li key={t.slug}>
                  <Link href={`/tools/${t.slug}`} className="hover:text-blue-400 transition-colors">
                    {t.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tools" className="text-blue-400 font-semibold hover:underline">
                  Tools Overview ↗
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Support Plans
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/plans/us-career-ready" className="hover:text-blue-400 transition-colors">
                  US Career Ready
                </Link>
              </li>
              <li>
                <Link href="/plans/us-career-accelerator" className="hover:text-blue-400 transition-colors">
                  US Career Accelerator
                </Link>
              </li>
              <li>
                <Link href="/plans/career-support-partner" className="hover:text-blue-400 transition-colors">
                  Career Support Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Company & Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-blue-400 transition-colors">
                  Tech Industries Hub
                </Link>
              </li>
              <li>
                <Link href="/refer-earn" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-medium text-emerald-400">
                  <span>Refer & Earn</span>
                  <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold">$1,000</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-blue-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-blue-400 transition-colors">
                  Compare Plans
                </Link>
              </li>
              <li>
                <Link href="/employers" className="hover:text-blue-400 transition-colors">
                  Employers & Partners
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-blue-400 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-blue-400 transition-colors">
                  Global Offices
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400 transition-colors">
                  Careers at CX Codex
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors">
                  Comprehensive FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Career Advice & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Career Advice
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 mb-6">
              <li>
                <Link href="/career-advice/resume-writing" className="hover:text-blue-400 transition-colors">
                  Resume Writing
                </Link>
              </li>
              <li>
                <Link href="/career-advice/linkedin-optimization" className="hover:text-blue-400 transition-colors">
                  LinkedIn Optimization
                </Link>
              </li>
              <li>
                <Link href="/career-advice/interview-preparation" className="hover:text-blue-400 transition-colors">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link href="/career-advice/us-job-market" className="hover:text-blue-400 transition-colors">
                  US Job Market
                </Link>
              </li>
              <li>
                <Link href="/career-advice/career-transition" className="hover:text-blue-400 transition-colors">
                  Career Transition
                </Link>
              </li>
              <li>
                <Link href="/career-advice/technical-skills" className="hover:text-blue-400 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-blue-400 transition-colors">
                  Downloadable Templates
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Direct Contact
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  WhatsApp Advisory ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Offices Strip */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-medium text-slate-300">
            <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
            <span>Verified Global Offices:</span>
          </div>
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px]">
            <span>
              <strong className="text-slate-300">Noida Global Center:</strong> Sector 63, Noida, UP 201309
            </span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span>
              <strong className="text-slate-300">Goa Office:</strong> EDC Patto Plaza, Panaji 403001
            </span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span>
              <strong className="text-slate-300">USA Onsite Office:</strong> 112 Fraser St., Coleman, MI 48618
            </span>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>© 2026 CX CODEX TECH-IT. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-300">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="hover:text-slate-300">
              Accessibility
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-300">
              Disclaimer
            </Link>
            <Link href="/sitemap" className="hover:text-slate-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Bottom Reminder / Booking Pill */}
      <div className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-full bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl text-xs">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <div>
          <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
            Ready to explore?
          </span>
          <span className="font-semibold text-white">Book Free Career Consultation</span>
        </div>
        <Link
          href="/book-consultation"
          className="ml-2 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
        >
          Book ↗
        </Link>
      </div>
    </footer>
  );
}
