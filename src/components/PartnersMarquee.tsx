"use client";

import React from "react";

export default function PartnersMarquee() {
  const partnersRow1 = [
    "Walmart Global Tech",
    "Deloitte Consulting",
    "Wipro Technologies",
    "Cognizant",
    "IBM Enterprise",
    "Capgemini",
    "PayPal",
    "HCL Technologies",
  ];

  const partnersRow2 = [
    "Bank of America",
    "Google Cloud Ecosystem",
    "Amazon Web Services",
    "Microsoft Azure Partner",
    "Oracle Cloud",
    "Salesforce AppExchange",
    "Cisco Systems",
    "Pethealth Inc.",
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
          08 / HIRING ECOSYSTEM & CLIENT CHANNELS
        </span>
        <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
          Positioned for the companies <span className="grad-text">actively hiring.</span>
        </h2>
        <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2">
          Career guidance and placement campaigns aligned with top US enterprise MSP networks, Fortune 500 vendors, and high-growth technology innovators.
        </p>
      </div>

      {/* Row 1 Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="animate-marquee gap-6 items-center">
          {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((partner, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs font-bold tracking-wide uppercase shrink-0 shadow-xs flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 Reverse Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="animate-marquee-reverse gap-6 items-center">
          {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs font-bold tracking-wide uppercase shrink-0 shadow-xs flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
