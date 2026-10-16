"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Clock, Calendar, ArrowRight, Tag, BookOpen } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import FinalCta from "@/components/FinalCta";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", ...Array.from(new Set(SITE_CONFIG.blogs.map((b) => b.category)))];

  const filteredBlogs = SITE_CONFIG.blogs.filter((b) => {
    const matchesCat = selectedCat === "All" || b.category === selectedCat;
    const matchesSearch =
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const featured = SITE_CONFIG.blogs[0];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            CX CODEX TECH-IT Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Engineering Career Intelligence. <br />
            <span className="grad-text">Analysis & Tactical Guides.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            In-depth breakdowns of modern applicant tracking systems, LinkedIn Recruiter boolean algorithms, compensation trends, and interview loop dynamics.
          </p>
        </div>
      </div>

      {/* Featured Article Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-blue-400">
              <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Featured Analysis
              </span>
              <span>{featured.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              {featured.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {featured.readTime}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {featured.publishedAt}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href={`/blogs/${featured.slug}`}
              className="blob-button px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <span>Read Full Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles by title, keywords, or tags (e.g. ATS, STAR, Recruiter, Salary)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                selectedCat === cat
                  ? "bg-slate-950 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filteredBlogs.map((b) => (
          <div
            key={b.slug}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all group"
          >
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px]">
                  {b.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {b.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {b.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {b.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {b.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-slate-600 font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/blogs/${b.slug}`}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 pt-4 border-t border-slate-200"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      <FinalCta />
    </div>
  );
}
