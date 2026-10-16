// Central database entities and data models (Section 18 database specification)

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  currentTitle?: string;
  targetRole?: string;
  experienceLevel?: "Student / Entry" | "Mid-Level (2-5 yrs)" | "Senior (5-8 yrs)" | "Staff / Lead (8+ yrs)";
  location?: string;
  targetLocations?: string[];
  visaStatus?: "US Citizen / Green Card" | "F-1 OPT / STEM OPT" | "H-1B Transfer" | "Requires Sponsorship" | "Other";
  profileCompletion: number;
  createdAt: string;
  updatedAt: string;
}

export interface StoredAssessmentResult {
  id: string;
  userId: string;
  toolType: "resume-analyzer" | "linkedin-profile-analyzer" | "job-match-score" | "interview-readiness";
  toolName: string;
  score: number;
  grade: string;
  summary: string;
  details: Record<string, unknown>;
  createdAt: string;
}

export interface CareerGoal {
  id: string;
  userId: string;
  title: string;
  targetDate: string;
  status: "not_started" | "in_progress" | "completed";
  category: "Strategy" | "Branding" | "Skills" | "Applications" | "Interviews";
  createdAt: string;
}

export interface CandidateApplication {
  id: string;
  userId: string;
  companyName: string;
  roleTitle: string;
  location: string;
  salaryRange?: string;
  status: "draft" | "submitted" | "recruiter_screen" | "technical_loop" | "final_round" | "offer_extended" | "declined";
  appliedDate: string;
  notes?: string;
  jobUrl?: string;
}

export interface BookedAppointment {
  id: string;
  userId?: string;
  name: string;
  email: string;
  phone: string;
  consultationType: "Career Strategy Session" | "Resume & ATS Audit" | "US Market Placement Briefing" | "Executive Coaching";
  careerStage: string;
  targetRole: string;
  goals: string;
  preferredDate: string;
  preferredTimeSlot: string;
  timeZone: string;
  status: "confirmed" | "completed" | "rescheduled" | "cancelled";
  isDemoMode: boolean;
  notes?: string;
  createdAt: string;
}

export interface UserDocument {
  id: string;
  userId: string;
  name: string;
  fileType: "application/pdf" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "text/plain";
  sizeBytes: number;
  uploadedAt: string;
  category: "Resume" | "Cover Letter" | "Portfolio" | "Certification" | "Assessment Export";
  contentSnippet?: string;
}

export interface EmployerInquiry {
  id: string;
  organizationName: string;
  contactName: string;
  businessEmail: string;
  phone?: string;
  hiringNeeds: string;
  targetRoles: string[];
  experienceRequirements: string;
  locationPreferences: string;
  inquiryType: "Talent Solutions" | "Recruiting Partner" | "Submit Requirement" | "Partnership with CX Codex";
  additionalNotes?: string;
  createdAt: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  category: "General Inquiry" | "Career Support Plans" | "Assessment Tools" | "Employer Solutions" | "Media & Partnerships";
  message: string;
  createdAt: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  source: string;
}
