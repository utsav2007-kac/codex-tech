import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageSquare, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import OfficesShowcase from "@/components/OfficesShowcase";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Global Office Locations | Noida, Goa & Michigan | CX CODEX TECH-IT",
  description:
    "Explore CX CODEX TECH-IT verified global office locations in Noida, Uttar Pradesh; Panaji, Goa; and Coleman, Michigan.",
};

export default function LocationsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Verified Physical Presence
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Our Global Office Locations. <br />
            <span className="grad-text">Connecting Talent to the US Market.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Operating from delivery centers in India and our onsite presence in Michigan, we support candidates globally and interface directly with US employers and MSP networks.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-24">
        {SITE_CONFIG.offices.map((office) => (
          <div
            key={office.id}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  {office.country}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] font-semibold text-slate-600">
                  {office.role}
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900">
                {office.city}, {office.state}
              </h2>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{office.hours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href={`tel:${office.phone}`} className="hover:text-blue-600">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href={`mailto:${office.email}`} className="hover:text-blue-600">
                    {office.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href={office.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <OfficesShowcase />
      <FinalCta />
    </div>
  );
}
