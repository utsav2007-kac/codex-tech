"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Compass,
  FileText,
  Code2,
  Users2,
  Send,
  Globe2,
  Gauge,
  Sparkles,
  ArrowRight,
  Briefcase,
  Building2,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import { Linkedin } from "@/components/LinkedInIcon";
import { SITE_CONFIG } from "@/config/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [employersOpen, setEmployersOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setToolsOpen(false);
    setEmployersOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setToolsOpen(false);
        setEmployersOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const isDark = pathname === "/" && !isScrolled;

  const linkClass = (path: string) => {
    if (isActive(path)) {
      return isDark
        ? "text-cyan-400 font-bold bg-white/10"
        : "text-blue-600 font-semibold bg-blue-50/60";
    }
    return isDark
      ? "text-slate-200 hover:text-white hover:bg-white/10"
      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50";
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? "bg-slate-950/85 backdrop-blur-md border-b border-white/10 py-4 text-white"
          : isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3 text-slate-900"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label={`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`}
          >
            <div className="relative h-11 w-44 sm:w-52 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20 shadow-md group-hover:shadow-lg transition-all group-hover:scale-[1.02]">
              <Image
                src="/logo-transparent.png"
                alt="CX CODEX TECH-IT — We Deliver Jobs Faster"
                fill
                priority
                sizes="(max-width: 640px) 176px, 208px"
                className="object-contain p-1"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors ${linkClass("/")}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${linkClass("/services")}`}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 border-b border-slate-100">
                    Candidate Services
                  </div>
                  {SITE_CONFIG.services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {s.title}
                        </div>
                        <div className="text-[11px] text-slate-600 line-clamp-1">{s.shortDesc}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center px-2">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      View all 12 services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Link */}
            <Link
              href="/industries"
              className={`px-3 py-2 rounded-lg transition-colors ${linkClass("/industries")}`}
            >
              Industries
            </Link>

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${linkClass("/tools")}`}
                aria-expanded={toolsOpen}
                onClick={() => setToolsOpen(!toolsOpen)}
              >
                Tools
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
              </button>

              {toolsOpen && (
                <div className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 border-b border-slate-100 flex items-center justify-between">
                    <span>Career Intelligence Tools</span>
                    <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">
                      Free Preview
                    </span>
                  </div>
                  {SITE_CONFIG.tools.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tools/${t.slug}`}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Gauge className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {t.title}
                        </div>
                        <div className="text-[11px] text-slate-600 line-clamp-1">{t.badge}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100 px-2">
                    <Link
                      href="/tools"
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                    >
                      Explore all tools hub <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/how-it-works"
              className={`px-3 py-2 rounded-lg transition-colors ${linkClass("/how-it-works")}`}
            >
              How It Works
            </Link>

            <Link
              href="/plans"
              className={`px-3 py-2 rounded-lg transition-colors ${linkClass("/plans")}`}
            >
              Plans
            </Link>

            {/* Refer & Earn with Reward Badge */}
            <Link
              href="/refer-earn"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${linkClass("/refer-earn")}`}
            >
              <span>Refer & Earn</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold tracking-wide">
                $1k
              </span>
            </Link>

            {/* Employers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEmployersOpen(true)}
              onMouseLeave={() => setEmployersOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${linkClass("/employers")}`}
                aria-expanded={employersOpen}
                onClick={() => setEmployersOpen(!employersOpen)}
              >
                Employers
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${employersOpen ? "rotate-180" : ""}`} />
              </button>

              {employersOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 border-b border-slate-100">
                    Employer & Partner Desk
                  </div>
                  <Link
                    href="/employers/talent-solutions"
                    className="p-2.5 rounded-xl hover:bg-slate-50 block group"
                  >
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600">
                      Talent Solutions
                    </div>
                    <div className="text-[11px] text-slate-600">Enterprise technology staffing</div>
                  </Link>
                  <Link
                    href="/employers/hire-talent"
                    className="p-2.5 rounded-xl hover:bg-slate-50 block group"
                  >
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600">
                      Hire Talent
                    </div>
                    <div className="text-[11px] text-slate-600">Review interview-ready tech talent</div>
                  </Link>
                  <Link
                    href="/employers/recruiting-partners"
                    className="p-2.5 rounded-xl hover:bg-slate-50 block group"
                  >
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600">
                      Recruiting Partners
                    </div>
                    <div className="text-[11px] text-slate-600">MSP and prime vendor channels</div>
                  </Link>
                  <Link
                    href="/employers/submit-requirement"
                    className="p-2.5 rounded-xl hover:bg-slate-50 block group"
                  >
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600">
                      Submit Requirement
                    </div>
                    <div className="text-[11px] text-slate-600">Send an open role requisition</div>
                  </Link>
                  <Link
                    href="/employers/partner-with-us"
                    className="p-2.5 rounded-xl hover:bg-slate-50 block group"
                  >
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600">
                      Partner With Us
                    </div>
                    <div className="text-[11px] text-slate-600">Strategic placement alliances</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/career-advice"
              className={`px-3 py-2 rounded-lg transition-colors ${linkClass("/career-advice")}`}
            >
              Career Advice
            </Link>

            <Link
              href="/blogs"
              className={`px-3 py-2 rounded-lg transition-colors ${linkClass("/blogs")}`}
            >
              Blogs
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/dashboard"
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors border ${
                isDark
                  ? "text-slate-200 hover:text-white hover:bg-white/10 border-white/20"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50 border-slate-200"
              }`}
            >
              Candidate Portal
            </Link>
            <Link
              href="/book-consultation"
              className="blob-button btn-shimmer px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold tracking-wide shadow-md shadow-blue-500/25 flex items-center gap-1.5"
            >
              <span>Book Your Slot</span>
              <span className="text-cyan-300">↗</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/book-consultation"
              className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold sm:hidden"
            >
              Book
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isDark ? "text-white hover:bg-white/10" : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white border-t border-slate-200 overflow-y-auto px-6 py-6 flex flex-col gap-5 z-40 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <div className="py-2 border-b border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Services
              </div>
              <div className="grid gap-2 pl-2">
                {SITE_CONFIG.services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="text-sm text-slate-700 hover:text-blue-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-2 border-b border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Career Tools
              </div>
              <div className="grid gap-2 pl-2">
                {SITE_CONFIG.tools.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/tools/${t.slug}`}
                    className="text-sm text-slate-700 hover:text-blue-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/industries"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100 flex items-center justify-between"
              onClick={() => setMobileOpen(false)}
            >
              <span>Industries & Sectors</span>
              <span className="text-xs text-blue-600 font-bold">6 Domains</span>
            </Link>
            <Link
              href="/how-it-works"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/plans"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              Plans & Support
            </Link>
            <Link
              href="/refer-earn"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100 flex items-center justify-between"
              onClick={() => setMobileOpen(false)}
            >
              <span>Refer & Earn</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">$1,000 Reward</span>
            </Link>
            <Link
              href="/employers"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              Employer Portal
            </Link>
            <Link
              href="/career-advice"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              Career Advice
            </Link>
            <Link
              href="/blogs"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              Blogs & Insights
            </Link>
            <Link
              href="/resources"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              Free Resources
            </Link>
            <Link
              href="/faq"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-base font-semibold py-2 text-slate-900 border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              Contact & Offices
            </Link>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/dashboard"
              className="w-full text-center py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800"
              onClick={() => setMobileOpen(false)}
            >
              Candidate Dashboard
            </Link>
            <Link
              href="/book-consultation"
              className="w-full text-center py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              Book Free Consultation ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
