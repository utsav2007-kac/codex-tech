"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Gauge,
  Compass,
  Briefcase,
  CalendarCheck,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import { useCandidateStore } from "@/lib/store";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { profile } = useCandidateStore();

  const navItems = [
    { label: "Overview", href: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: "My Profile", href: "/dashboard/profile", icon: <User className="w-4 h-4" /> },
    { label: "Assessment Results", href: "/dashboard/assessments", icon: <Gauge className="w-4 h-4" /> },
    { label: "Career Plan & Goals", href: "/dashboard/career-plan", icon: <Compass className="w-4 h-4" /> },
    { label: "Job Applications", href: "/dashboard/applications", icon: <Briefcase className="w-4 h-4" /> },
    { label: "Appointments", href: "/dashboard/appointments", icon: <CalendarCheck className="w-4 h-4" /> },
    { label: "Documents", href: "/dashboard/documents", icon: <FileText className="w-4 h-4" /> },
    { label: "Account Settings", href: "/dashboard/settings", icon: <Settings className="w-4 h-4" /> },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Demo Context Bar */}
        <div className="mb-6 p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-blue-950">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Candidate Portal Active</strong> — Local session mode. User records are securely isolated and persisted in your browser.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{profile.fullName}</span>
            <span className="text-blue-400">·</span>
            <span className="font-mono text-[11px] text-blue-700">{profile.email}</span>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden mb-4 flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Candidate Portal Menu
          </span>
          <button
            type="button"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-700"
          >
            {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar */}
          <aside
            className={`lg:col-span-3 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xs space-y-6 ${
              mobileNavOpen ? "block" : "hidden lg:block"
            }`}
          >
            {/* Candidate Summary Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center">
                {profile.fullName.split(" ").map((n) => n[0]).join("") || "W"}
              </div>
              <div className="font-bold text-sm text-slate-900 leading-tight">
                {profile.fullName}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">{profile.currentTitle || "Tech Professional"}</div>
              <div className="pt-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase mb-1">
                  <span>Profile Strength</span>
                  <span className="text-blue-600">{profile.profileCompletion}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${profile.profileCompletion}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight
                    className={`w-3 h-3 ${isActive(item.href) ? "text-blue-400" : "text-slate-400"}`}
                  />
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                href="/book-consultation"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center block transition-colors"
              >
                Book New Session ↗
              </Link>
              <Link
                href="/login"
                className="w-full py-2 rounded-xl text-slate-500 hover:text-rose-600 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </Link>
            </div>
          </aside>

          {/* Main Dashboard Content Area */}
          <main className="lg:col-span-9 space-y-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
