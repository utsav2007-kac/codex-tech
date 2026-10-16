"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageSquare, Globe2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import ThreeTechGlobe from "@/components/ThreeTechGlobe";

export default function OfficesShowcase() {
  const [indiaTab, setIndiaTab] = useState<"noida" | "goa">("noida");

  const noidaOffice = SITE_CONFIG.offices.find((o) => o.id === "noida")!;
  const goaOffice = SITE_CONFIG.offices.find((o) => o.id === "goa")!;
  const usOffice = SITE_CONFIG.offices.find((o) => o.id === "michigan")!;

  const activeIndiaOffice = indiaTab === "noida" ? noidaOffice : goaOffice;

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
              GLOBAL PRESENCE & ACCESSIBILITY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Three offices. <span className="text-blue-400">One dedicated team.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Operating across key time zones to support international talent transitions and coordinate directly with US client partners.
          </p>
        </div>

        {/* 3D Global Infrastructure Map Showcase */}
        <div className="mb-14 rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md relative overflow-hidden">
          <div className="lg:w-1/2 space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Interactive 3D Transatlantic Delivery Grid</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Seamlessly Synchronizing Across Global Timezones
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Drag, rotate, and interact with our live 3D operational network. We maintain physical offices in Michigan (USA), Noida (NCR), and Panaji (Goa) with direct secure data pipelines into US Fortune 500 MSP networks.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono">
                🇺🇸 Coleman, Michigan (US HQ)
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono">
                🇮🇳 Noida (Delivery Center)
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono">
                🇮🇳 Goa (Operations Center)
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center">
            <ThreeTechGlobe />
          </div>
        </div>

        {/* 2 Big Regional Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: India Operations (Noida / Goa toggle) */}
          <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 shadow-2xl backdrop-blur-md flex flex-col justify-between space-y-6">
            <div>
              {/* Header with Flag & Tabs */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-7 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-xs text-amber-300">
                    IN
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">India Operations</h3>
                    <span className="text-xs text-slate-400">2 Verified Office Hubs</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex p-1 bg-slate-950 rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIndiaTab("noida")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                      indiaTab === "noida"
                        ? "bg-orange-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Noida
                  </button>
                  <button
                    type="button"
                    onClick={() => setIndiaTab("goa")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                      indiaTab === "goa"
                        ? "bg-orange-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Goa
                  </button>
                </div>
              </div>

              {/* Location details */}
              <div className="space-y-4 pt-6">
                <div>
                  <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider block mb-1">
                    {activeIndiaOffice.role}
                  </span>
                  <div className="text-2xl font-black text-white">
                    {activeIndiaOffice.city}, {activeIndiaOffice.state}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{activeIndiaOffice.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{activeIndiaOffice.hours}</span>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs">
                  <a
                    href={`tel:${activeIndiaOffice.phone}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>{activeIndiaOffice.phone}</span>
                  </a>
                  <a
                    href={`mailto:${activeIndiaOffice.email}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-orange-400" />
                    <span>{activeIndiaOffice.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeIndiaOffice.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href={activeIndiaOffice.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: US Onsite Office (Coleman, Michigan) */}
          <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 shadow-2xl backdrop-blur-md flex flex-col justify-between space-y-6">
            <div>
              {/* Header with US Flag */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-7 rounded bg-blue-500/20 border border-blue-500/40 flex items-center justify-center font-bold text-xs text-blue-300">
                    US
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">United States</h3>
                    <span className="text-xs text-slate-400">Onsite Office Hub</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Michigan
                </span>
              </div>

              {/* Location details */}
              <div className="space-y-4 pt-6">
                <div>
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block mb-1">
                    {usOffice.role}
                  </span>
                  <div className="text-2xl font-black text-white">
                    {usOffice.city}, {usOffice.state}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{usOffice.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{usOffice.hours}</span>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs">
                  <a
                    href={`tel:${usOffice.phone}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{usOffice.phone}</span>
                  </a>
                  <a
                    href={`mailto:${usOffice.email}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>{usOffice.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(usOffice.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href={usOffice.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
