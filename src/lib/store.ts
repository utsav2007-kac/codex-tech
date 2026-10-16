"use client";

import { useEffect, useState } from "react";
import {
  UserProfile,
  StoredAssessmentResult,
  CareerGoal,
  CandidateApplication,
  BookedAppointment,
  UserDocument,
} from "./types";

const INITIAL_PROFILE: UserProfile = {
  id: "demo-user-01",
  fullName: "Alex Morgan",
  email: "alex.morgan.demo@cxcodextech.com",
  phone: "+1 (555) 234-5678",
  currentTitle: "Full Stack Engineer",
  targetRole: "Senior Cloud / Backend Engineer",
  experienceLevel: "Mid-Level (2-5 yrs)",
  location: "Jersey City, NJ",
  targetLocations: ["New York, NY", "Austin, TX", "Remote USA"],
  visaStatus: "F-1 OPT / STEM OPT",
  profileCompletion: 85,
  createdAt: "2026-02-10T10:00:00Z",
  updatedAt: "2026-04-12T14:30:00Z",
};

const INITIAL_GOALS: CareerGoal[] = [
  {
    id: "g1",
    userId: "demo-user-01",
    title: "Finalize ATS-Optimized Resume Rebrand",
    targetDate: "2026-04-30",
    status: "completed",
    category: "Branding",
    createdAt: "2026-02-15T09:00:00Z",
  },
  {
    id: "g2",
    userId: "demo-user-01",
    title: "Conduct 2 Recorded Mock System Design Loops",
    targetDate: "2026-05-15",
    status: "in_progress",
    category: "Interviews",
    createdAt: "2026-03-01T11:00:00Z",
  },
  {
    id: "g3",
    userId: "demo-user-01",
    title: "Submit 30 Targeted Job Applications via Campaign Manager",
    targetDate: "2026-05-30",
    status: "in_progress",
    category: "Applications",
    createdAt: "2026-03-10T16:00:00Z",
  },
];

const INITIAL_APPLICATIONS: CandidateApplication[] = [
  {
    id: "app-1",
    userId: "demo-user-01",
    companyName: "CloudScale Systems",
    roleTitle: "Senior Backend Engineer (Go / AWS)",
    location: "New York, NY (Hybrid)",
    salaryRange: "$155,000 - $175,000",
    status: "technical_loop",
    appliedDate: "2026-04-02",
    notes: "Completed initial recruiter screen on April 6. Scheduled for 90-min technical loop next Tuesday.",
    jobUrl: "https://example.com/careers/backend-cloud",
  },
  {
    id: "app-2",
    userId: "demo-user-01",
    companyName: "Apex FinTech Global",
    roleTitle: "Distributed Systems Developer",
    location: "Remote USA",
    salaryRange: "$160,000 - $180,000",
    status: "recruiter_screen",
    appliedDate: "2026-04-09",
    notes: "Applied via CX CODEX TECH-IT targeted campaign. Recruiter outreach received.",
    jobUrl: "https://example.com/careers/distributed-apex",
  },
  {
    id: "app-3",
    userId: "demo-user-01",
    companyName: "Beacon Health Informatics",
    roleTitle: "Full Stack Engineer (React / Python)",
    location: "Boston, MA",
    salaryRange: "$140,000 - $155,000",
    status: "submitted",
    appliedDate: "2026-04-14",
    notes: "Application confirmed in company Workday portal.",
    jobUrl: "https://example.com/careers/beacon-fs",
  },
];

const INITIAL_ASSESSMENTS: StoredAssessmentResult[] = [
  {
    id: "as-1",
    userId: "demo-user-01",
    toolType: "resume-analyzer",
    toolName: "Resume Analyzer",
    score: 84,
    grade: "Competitive Foundation",
    summary: "Strong technical action vocabulary; add 2 more quantified commercial metrics.",
    details: { contactCompleteness: 95, sectionStructure: 90, actionVerbs: 85, quantifiedMetrics: 70, atsReadability: 80 },
    createdAt: "2026-04-10T14:15:00Z",
  },
  {
    id: "as-2",
    userId: "demo-user-01",
    toolType: "linkedin-profile-analyzer",
    toolName: "LinkedIn Profile Analyzer",
    score: 79,
    grade: "Marketable with Edits",
    summary: "Headline updated with target roles; About section narrative optimized for recruiter search.",
    details: { headlineClarity: 85, keywordCoverage: 80, valueProposition: 75, readabilityAndLength: 76 },
    createdAt: "2026-04-11T16:20:00Z",
  },
];

const INITIAL_APPOINTMENTS: BookedAppointment[] = [
  {
    id: "apt-1",
    userId: "demo-user-01",
    name: "Alex Morgan",
    email: "alex.morgan.demo@cxcodextech.com",
    phone: "+1 (555) 234-5678",
    consultationType: "Career Strategy Session",
    careerStage: "Experienced Tech Professional (3 yrs)",
    targetRole: "Senior Backend / Cloud Engineer",
    goals: "Targeting $160k+ US offers with H-1B transfer sponsorship",
    preferredDate: "2026-04-24",
    preferredTimeSlot: "02:00 PM EST",
    timeZone: "America/New_York (EST)",
    status: "confirmed",
    isDemoMode: true,
    notes: "Senior Advisor Assigned: CX Codex Strategy Desk",
    createdAt: "2026-04-14T09:30:00Z",
  },
];

const INITIAL_DOCS: UserDocument[] = [
  {
    id: "doc-1",
    userId: "demo-user-01",
    name: "Alex_Morgan_ATS_Resume_v3.pdf",
    fileType: "application/pdf",
    sizeBytes: 142500,
    uploadedAt: "2026-04-10T14:00:00Z",
    category: "Resume",
    contentSnippet: "Full Stack Engineer with 4 years building distributed systems in AWS and TypeScript...",
  },
  {
    id: "doc-2",
    userId: "demo-user-01",
    name: "System_Design_STAR_StoryBank.docx",
    fileType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    sizeBytes: 98400,
    uploadedAt: "2026-04-12T11:20:00Z",
    category: "Assessment Export",
    contentSnippet: "15 STAR stories covering production outages, microservice migration, and latency optimization...",
  },
];

export function useCandidateStore() {
  const [profile, setProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const [goals, setGoals] = useState<CareerGoal[]>(INITIAL_GOALS);
  const [applications, setApplications] = useState<CandidateApplication[]>(INITIAL_APPLICATIONS);
  const [assessments, setAssessments] = useState<StoredAssessmentResult[]>(INITIAL_ASSESSMENTS);
  const [appointments, setAppointments] = useState<BookedAppointment[]>(INITIAL_APPOINTMENTS);
  const [documents, setDocuments] = useState<UserDocument[]>(INITIAL_DOCS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedProfile = localStorage.getItem("cxcodex_profile");
      if (storedProfile) setProfile(JSON.parse(storedProfile));

      const storedGoals = localStorage.getItem("cxcodex_goals");
      if (storedGoals) setGoals(JSON.parse(storedGoals));

      const storedApps = localStorage.getItem("cxcodex_apps");
      if (storedApps) setApplications(JSON.parse(storedApps));

      const storedAssess = localStorage.getItem("cxcodex_assessments");
      if (storedAssess) setAssessments(JSON.parse(storedAssess));

      const storedApts = localStorage.getItem("cxcodex_appointments");
      if (storedApts) setAppointments(JSON.parse(storedApts));

      const storedDocs = localStorage.getItem("cxcodex_docs");
      if (storedDocs) setDocuments(JSON.parse(storedDocs));
    } catch {
      // Fallback to in-memory state
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem("cxcodex_profile", JSON.stringify(newProfile));
    } catch {}
  };

  const addGoal = (goal: Omit<CareerGoal, "id" | "userId" | "createdAt">) => {
    const newG: CareerGoal = {
      ...goal,
      id: "goal-" + Date.now(),
      userId: profile.id,
      createdAt: new Date().toISOString(),
    };
    const updated = [newG, ...goals];
    setGoals(updated);
    try {
      localStorage.setItem("cxcodex_goals", JSON.stringify(updated));
    } catch {}
  };

  const toggleGoalStatus = (goalId: string) => {
    const updated: CareerGoal[] = goals.map((g) => {
      if (g.id !== goalId) return g;
      const nextStatus: CareerGoal["status"] = g.status === "completed" ? "in_progress" : "completed";
      return { ...g, status: nextStatus };
    });
    setGoals(updated);
    try {
      localStorage.setItem("cxcodex_goals", JSON.stringify(updated));
    } catch {}
  };

  const addApplication = (app: Omit<CandidateApplication, "id" | "userId">) => {
    const newApp: CandidateApplication = {
      ...app,
      id: "app-" + Date.now(),
      userId: profile.id,
    };
    const updated = [newApp, ...applications];
    setApplications(updated);
    try {
      localStorage.setItem("cxcodex_apps", JSON.stringify(updated));
    } catch {}
  };

  const updateApplicationStatus = (appId: string, status: CandidateApplication["status"]) => {
    const updated = applications.map((a) => (a.id === appId ? { ...a, status } : a));
    setApplications(updated);
    try {
      localStorage.setItem("cxcodex_apps", JSON.stringify(updated));
    } catch {}
  };

  const addAssessmentResult = (result: Omit<StoredAssessmentResult, "id" | "userId" | "createdAt">) => {
    const newResult: StoredAssessmentResult = {
      ...result,
      id: "as-" + Date.now(),
      userId: profile.id,
      createdAt: new Date().toISOString(),
    };
    const updated = [newResult, ...assessments];
    setAssessments(updated);
    try {
      localStorage.setItem("cxcodex_assessments", JSON.stringify(updated));
    } catch {}
  };

  const addAppointment = (apt: Omit<BookedAppointment, "id" | "createdAt">) => {
    const newApt: BookedAppointment = {
      ...apt,
      id: "apt-" + Date.now(),
      createdAt: new Date().toISOString(),
    };
    const updated = [newApt, ...appointments];
    setAppointments(updated);
    try {
      localStorage.setItem("cxcodex_appointments", JSON.stringify(updated));
    } catch {}
    return newApt;
  };

  const addDocument = (doc: Omit<UserDocument, "id" | "userId" | "uploadedAt">) => {
    const newDoc: UserDocument = {
      ...doc,
      id: "doc-" + Date.now(),
      userId: profile.id,
      uploadedAt: new Date().toISOString(),
    };
    const updated = [newDoc, ...documents];
    setDocuments(updated);
    try {
      localStorage.setItem("cxcodex_docs", JSON.stringify(updated));
    } catch {}
  };

  const deleteDocument = (docId: string) => {
    const updated = documents.filter((d) => d.id !== docId);
    setDocuments(updated);
    try {
      localStorage.setItem("cxcodex_docs", JSON.stringify(updated));
    } catch {}
  };

  const purgeAllData = () => {
    localStorage.removeItem("cxcodex_profile");
    localStorage.removeItem("cxcodex_goals");
    localStorage.removeItem("cxcodex_apps");
    localStorage.removeItem("cxcodex_assessments");
    localStorage.removeItem("cxcodex_appointments");
    localStorage.removeItem("cxcodex_docs");
    setProfile(INITIAL_PROFILE);
    setGoals([]);
    setApplications([]);
    setAssessments([]);
    setAppointments([]);
    setDocuments([]);
  };

  return {
    isLoaded,
    profile,
    saveProfile,
    goals,
    addGoal,
    toggleGoalStatus,
    applications,
    addApplication,
    updateApplicationStatus,
    assessments,
    addAssessmentResult,
    appointments,
    addAppointment,
    documents,
    addDocument,
    deleteDocument,
    purgeAllData,
  };
}
