"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Gift,
  DollarSign,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Clock,
  Send,
  Building2,
  ChevronDown,
} from "lucide-react";

export default function ReferAndEarnPage() {
  const [referralType, setReferralType] = useState<"candidate" | "employer">("candidate");
  const [candidateCount, setCandidateCount] = useState<number>(2);
  const [employerCount, setEmployerCount] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    referrerLinkedin: "",
    referralName: "",
    referralEmail: "",
    referralPhone: "",
    referralRole: "",
    referralLinkedin: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralId, setReferralId] = useState("");

  const calculateReward = () => {
    if (referralType === "candidate") {
      return candidateCount * 1000;
    } else {
      return employerCount * 2500;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const genId = `REF-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferralId(genId);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-dot-grid-dark opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Gift className="w-3.5 h-3.5" />
              Institutional Referral Rewards Program
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">$1,000 to $2,500+</span> for Every Verified Placement
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              Help your talented friends, colleagues, or engineering managers connect with CX CODEX TECH-IT. We reward community leaders and alumni with direct cash payouts upon successful candidate placement or enterprise hiring partner onboarding.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Candidate Placement</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">$1,000</div>
              <div className="text-xs text-slate-400 mt-0.5">Paid per successful hire</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Employer Intro</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-1">$2,500+</div>
              <div className="text-xs text-slate-400 mt-0.5">Per signed client contract</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Paid to Date</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">$180,000+</div>
              <div className="text-xs text-slate-400 mt-0.5">Disbursed to community referrers</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Payout Speed</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1">30 Days</div>
              <div className="text-xs text-slate-400 mt-0.5">Direct ACH or Wire transfer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Reward Calculator & How It Works */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interactive Calculator */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Referral Payout Estimator</h3>
                  <p className="text-xs text-slate-400 mt-1">Calculate your potential referral earnings in real time</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  $
                </div>
              </div>

              {/* Toggle Referral Type */}
              <div className="flex rounded-xl bg-slate-950 p-1.5 border border-slate-800 mb-8">
                <button
                  type="button"
                  onClick={() => setReferralType("candidate")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    referralType === "candidate"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  Candidate Referrals ($1,000/ea)
                </button>
                <button
                  type="button"
                  onClick={() => setReferralType("employer")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    referralType === "employer"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  Employer Requisitions ($2,500/ea)
                </button>
              </div>

              {/* Slider */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-300">
                    {referralType === "candidate" ? "Number of Engineers Placed" : "Number of Hiring Clients Intro'd"}:
                  </span>
                  <span className="text-cyan-400 font-bold text-lg">
                    {referralType === "candidate" ? candidateCount : employerCount}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={referralType === "candidate" ? candidateCount : employerCount}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if (referralType === "candidate") {
                      setCandidateCount(val);
                    } else {
                      setEmployerCount(val);
                    }
                  }}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>1</span>
                  <span>5</span>
                  <span>10+</span>
                </div>
              </div>

              {/* Estimated Payout Display */}
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Estimated Direct Reward
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1">
                    ${calculateReward().toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Guaranteed direct electronic disbursement
                  </div>
                </div>
                <a
                  href="#referral-form"
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5"
                >
                  <span>Submit Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: How It Works in 4 Steps */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-cyan-400 text-xs font-semibold uppercase">
                <Clock className="w-3.5 h-3.5" />
                Transparent Workflow
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                How CX CODEX TECH-IT's Referral Payout Process Works
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We believe in total transparency. There are no complicated point systems, arbitrary delays, or fine-print traps.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  {
                    step: "01",
                    title: "Submit Your Referral",
                    desc: "Fill out the simple 90-second form below with your details and your friend's or company's contact info.",
                  },
                  {
                    step: "02",
                    title: "Priority Intake & Fast-Track",
                    desc: "Your referral receives priority booking for our diagnostic tools, career audits, or technical sourcing teams.",
                  },
                  {
                    step: "03",
                    title: "Verification & Offer Acceptance",
                    desc: "The candidate accepts a verified US tech job offer, or the employer signs an active staffing contract.",
                  },
                  {
                    step: "04",
                    title: "Cash Disbursement within 30 Days",
                    desc: "You receive your $1,000 or $2,500+ cash reward directly via ACH, Wire, or PayPal following their first month.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-cyan-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Submission Form Section */}
      <section id="referral-form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold text-white">Referral Successfully Registered!</h3>
                <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                  Thank you for submitting your referral. Your unique tracking reference is:
                </p>
                <div className="inline-block px-5 py-2.5 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-400 font-mono font-bold text-lg">
                  {referralId}
                </div>
                <p className="text-slate-400 text-xs max-w-md mx-auto">
                  Our team will reach out to your referral within 24 hours. A confirmation email with payout tracking has been dispatched to {formData.referrerEmail}.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
                >
                  Submit Another Referral
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Step 1 of 1 · Simple Intake
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Submit a Candidate or Employer Referral
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2">
                    Fill out your information and your referral's details. All submissions are governed by our confidential privacy policy.
                  </p>
                </div>

                {/* Section A: Your Information */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider border-b border-slate-800 pb-2">
                    Your Information (Referrer)
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.referrerName}
                        onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.referrerEmail}
                        onChange={(e) => setFormData({ ...formData, referrerEmail: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Your Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.referrerPhone}
                        onChange={(e) => setFormData({ ...formData, referrerPhone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Your LinkedIn Profile URL
                      </label>
                      <input
                        type="url"
                        value={formData.referrerLinkedin}
                        onChange={(e) => setFormData({ ...formData, referrerLinkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Section B: Referral Information */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider border-b border-slate-800 pb-2">
                    Referral Details (Candidate or Company)
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Referral Name / Company Contact *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.referralName}
                        onChange={(e) => setFormData({ ...formData, referralName: e.target.value })}
                        placeholder="e.g. Priya Patel or Apex Systems HR"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Referral Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.referralEmail}
                        onChange={(e) => setFormData({ ...formData, referralEmail: e.target.value })}
                        placeholder="e.g. priya@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Target Role / Technical Domain
                      </label>
                      <input
                        type="text"
                        value={formData.referralRole}
                        onChange={(e) => setFormData({ ...formData, referralRole: e.target.value })}
                        placeholder="e.g. Senior Cloud Engineer / Java Full Stack"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Referral LinkedIn / Website
                      </label>
                      <input
                        type="url"
                        value={formData.referralLinkedin}
                        onChange={(e) => setFormData({ ...formData, referralLinkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/referral"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Additional Notes or Context
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about their background, current visa status (if known), or why they are looking for a new role..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Your payout is tracked and secured under reference agreement.</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Referral Now</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Program Terms & FAQs */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Referral Program Terms & Frequently Asked Questions
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Everything you need to know about eligibility, payouts, and tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                Who is eligible to participate?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Anyone worldwide can refer! You do not need to be an existing CX CODEX TECH-IT client. We disburse referral fees to friends, alumni, mentors, and corporate recruiters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                When and how do I receive the payout?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Payments are disbursed 30 days after the candidate completes their first month of active employment or once the client pays their first invoice. Payouts are made via direct ACH or international bank wire.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                Is there any limit to my referral earnings?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                No limit. If you refer 10 engineers who secure placements, you receive $10,000 in cash. Several alumni and community leaders earn recurring monthly supplemental income through our program.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                What if the candidate was already in your system?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Referral bonuses apply to new candidates not actively engaged with CX CODEX TECH-IT in the last 6 months. If duplicate referrals are received, the earliest timestamped submission gets credited.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
