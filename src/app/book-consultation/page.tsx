"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { useCandidateStore } from "@/lib/store";

export default function BookConsultationPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Step 1: Consultation Type
  const [consultationType, setConsultationType] = useState<string>("Career Strategy Session");

  // Step 2: Candidate Details
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [careerStage, setCareerStage] = useState("Mid-Level Professional (3-5 yrs)");
  const [targetRole, setTargetRole] = useState("");
  const [goals, setGoals] = useState("");

  // Step 3: Date, Time & TimeZone
  const [selectedDate, setSelectedDate] = useState("2026-04-24");
  const [selectedSlot, setSelectedSlot] = useState("02:00 PM EST");
  const [timeZone, setTimeZone] = useState("America/New_York (EST)");

  // Step 4 & 5: Submission & Status
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [bookingConfirmation, setBookingConfirmation] = useState<any>(null);

  const { addAppointment } = useCandidateStore();

  const consultationTypes = [
    {
      title: "Career Strategy Session",
      duration: "45 Minutes",
      desc: "One-on-one discovery mapping your skills, target US role titles, and a 60-day action plan.",
    },
    {
      title: "Resume & ATS Audit",
      duration: "30 Minutes",
      desc: "Live line-by-line inspection of your current resume structure and ATS parsing vulnerabilities.",
    },
    {
      title: "US Market Placement Briefing",
      duration: "45 Minutes",
      desc: "Deep-dive into client MSP pipelines, sponsorship feasibility, and target salary brackets.",
    },
    {
      title: "Executive Career Architecture",
      duration: "60 Minutes",
      desc: "High-level guidance for Staff, Principal, and Engineering Management transitions.",
    },
  ];

  const availableSlots = [
    "10:00 AM EST",
    "11:30 AM EST",
    "02:00 PM EST",
    "03:30 PM EST",
    "05:00 PM EST",
    "07:30 PM EST",
  ];

  const handleNextStep1 = () => setStep(2);

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      setErrorMsg("Please fill in your name, email, and phone number.");
      return;
    }
    setErrorMsg("");
    setStep(3);
  };

  const handleNextStep3 = () => setStep(4);

  const handleFinalSubmit = async () => {
    if (!consent) {
      setErrorMsg("Please consent to scheduling communications.");
      return;
    }
    setErrorMsg("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          consultationType,
          careerStage,
          targetRole,
          goals,
          preferredDate: selectedDate,
          preferredTimeSlot: selectedSlot,
          timeZone,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setBookingConfirmation(data);
        // Persist into candidate dashboard store
        addAppointment({
          name: fullName,
          email,
          phone,
          consultationType: consultationType as any,
          careerStage,
          targetRole,
          goals,
          preferredDate: selectedDate,
          preferredTimeSlot: selectedSlot,
          timeZone,
          status: "confirmed",
          isDemoMode: !data.isLiveCalendarConnected,
        });
        setStep(5);
      } else {
        setErrorMsg(data.error || "Unable to reserve slot. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wizard Header & Progress Steps */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            Consultation Booking Wizard
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Schedule Your Free Career Consultation
          </h1>
          <p className="text-slate-600 text-sm mt-2">
            Step {step} of 5 · Confidential advisory session with a senior US career strategist.
          </p>

          {/* Stepper Bar */}
          <div className="flex items-center justify-between max-w-xs mx-auto mt-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                    step >= s
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {s}
                </div>
                {s < 5 && (
                  <div
                    className={`w-8 sm:w-10 h-0.5 ${
                      step > s ? "bg-blue-600" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* STEP 1: Consultation Type */}
        {step === 1 && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Step 1: Select Consultation Format
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {consultationTypes.map((c) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setConsultationType(c.title)}
                  className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                    consultationType === c.title
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-white text-slate-900 border-slate-200 hover:border-blue-400"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">{c.title}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          consultationType === c.title
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {c.duration}
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        consultationType === c.title ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {c.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={handleNextStep1}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl transition-colors shadow-md shadow-blue-500/25 flex items-center gap-2"
              >
                <span>Continue to Your Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Candidate Details */}
        {step === 2 && (
          <form
            onSubmit={handleNextStep2}
            className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-5 shadow-sm"
          >
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-lg font-bold text-slate-900">
                Step 2: Candidate Background
              </h2>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex.morgan@example.com"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Phone Number (for calendar reminders) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (201) 772-2853"
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Career Seniority
                </label>
                <select
                  value={careerStage}
                  onChange={(e) => setCareerStage(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option>Student / Recent Graduate</option>
                  <option>Mid-Level Professional (3-5 yrs)</option>
                  <option>Senior Engineer (5-8 yrs)</option>
                  <option>Staff / Principal (8+ yrs)</option>
                  <option>Career Switcher</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Target Role & Primary Stack
              </label>
              <input
                type="text"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                placeholder="e.g. Senior Backend Cloud Engineer (Go / AWS)"
                className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Primary Goal for this Session
              </label>
              <textarea
                rows={3}
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="What is your biggest current obstacle? (e.g. low recruiter response, passing system design loops, H-1B transfer timelines)..."
                className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            {errorMsg && <p className="text-xs text-rose-500 font-semibold">{errorMsg}</p>}

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl transition-colors shadow-md shadow-blue-500/25 flex items-center gap-2"
              >
                <span>Select Date & Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Date, Time & Timezone */}
        {step === 3 && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-lg font-bold text-slate-900">
                Step 3: Select Date & Time
              </h2>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Preferred Appointment Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Time Zone
                </label>
                <select
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option>America/New_York (EST)</option>
                  <option>America/Chicago (CST)</option>
                  <option>America/Los_Angeles (PST)</option>
                  <option>Asia/Kolkata (IST)</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">
                Available Time Slots ({timeZone}):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold text-center border transition-all ${
                      selectedSlot === slot
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-white text-slate-800 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleNextStep3}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl transition-colors shadow-md shadow-blue-500/25 flex items-center gap-2"
              >
                <span>Review Booking Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Review and Consent */}
        {step === 4 && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-lg font-bold text-slate-900">
                Step 4: Review Your Booking
              </h2>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs text-slate-700">
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500">Session Type:</span>
                <span className="font-bold text-slate-900">{consultationType}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500">Candidate:</span>
                <span className="font-bold text-slate-900">{fullName} ({email})</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500">Phone:</span>
                <span className="font-bold text-slate-900">{phone}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500">Scheduled Date:</span>
                <span className="font-bold text-slate-900">{selectedDate}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500">Time Slot:</span>
                <span className="font-bold text-blue-600">{selectedSlot} ({timeZone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Role:</span>
                <span className="font-bold text-slate-900">{targetRole || "General Tech Transition"}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="bookingConsent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="bookingConsent" className="text-xs text-slate-600 leading-snug">
                I confirm that the contact information provided is accurate and consent to receive appointment notifications and reminders from CX CODEX TECH-IT.
              </label>
            </div>

            {errorMsg && <p className="text-xs text-rose-500 font-semibold">{errorMsg}</p>}

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                ← Back
              </button>
              <button
                type="button"
                disabled={submitting}
                onClick={handleFinalSubmit}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider rounded-xl transition-colors shadow-md shadow-blue-500/25 disabled:opacity-50"
              >
                {submitting ? "Confirming Slot..." : "Confirm & Book Slot ↗"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: Final Result & Honest Status */}
        {step === 5 && (
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 text-center space-y-6 shadow-sm animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Consultation Slot Reserved
            </h2>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 max-w-md mx-auto text-xs text-slate-700 space-y-2 text-left">
              <div>
                <strong className="text-slate-900">Session:</strong> {consultationType}
              </div>
              <div>
                <strong className="text-slate-900">Date & Time:</strong> {selectedDate} at {selectedSlot}
              </div>
              <div>
                <strong className="text-slate-900">Time Zone:</strong> {timeZone}
              </div>
              <div>
                <strong className="text-slate-900">Candidate:</strong> {fullName}
              </div>
              <div>
                <strong className="text-slate-900">Reference ID:</strong>{" "}
                <span className="font-mono text-blue-600">{bookingConfirmation?.appointmentId}</span>
              </div>
            </div>

            {/* Honest Demo Mode / Integration Notice (Section 14 & 3) */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 max-w-lg mx-auto leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-blue-600 inline mr-1.5" />
              <strong>Integration Status:</strong> {bookingConfirmation?.notice}
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/dashboard/appointments"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider transition-colors shadow-xs"
              >
                View in Candidate Dashboard ↗
              </Link>
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setBookingConfirmation(null);
                }}
                className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
              >
                Book Another Slot
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
