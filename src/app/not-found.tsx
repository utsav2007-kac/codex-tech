import React from "react";
import Link from "next/link";
import { Compass, Home, Search, ArrowRight, Gauge, Briefcase } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xs">
        <div className="w-16 h-16 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border border-blue-100">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600">
            Error 404 · Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Looking for Career Momentum?
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The page you requested may have moved or been updated. Choose a destination below to continue your career acceleration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-left">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 transition group"
          >
            <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center justify-between">
              <span>Homepage</span>
              <Home className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Explore services, tools, and reviews</p>
          </Link>

          <Link
            href="/tools"
            className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 transition group"
          >
            <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center justify-between">
              <span>Career Assessment Tools</span>
              <Gauge className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Resume & LinkedIn diagnostic scoring</p>
          </Link>

          <Link
            href="/services"
            className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 transition group"
          >
            <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center justify-between">
              <span>7 Core Services</span>
              <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Interview prep, branding & placement</p>
          </Link>

          <Link
            href="/book-consultation"
            className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 transition group"
          >
            <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center justify-between">
              <span>Book Strategy Session</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Schedule a 1-on-1 advisor audit</p>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-xs">
          <Link href="/sitemap" className="text-slate-500 hover:text-blue-600 font-semibold">
            View Full Website Sitemap
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/contact" className="text-slate-500 hover:text-blue-600 font-semibold">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
