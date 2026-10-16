import { NextResponse } from "next/server";
import {
  analyzeResume,
  analyzeLinkedInProfile,
  calculateJobMatchScore,
  evaluateInterviewReadiness,
} from "@/lib/assessmentEngine";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { toolType, payload } = body;

    if (!toolType) {
      return NextResponse.json({ error: "Missing toolType parameter." }, { status: 400 });
    }

    if (toolType === "resume-analyzer") {
      const { resumeText } = payload || {};
      if (!resumeText || typeof resumeText !== "string") {
        return NextResponse.json({ error: "Please provide resume text for analysis." }, { status: 400 });
      }
      const result = analyzeResume(resumeText);
      return NextResponse.json({ success: true, toolType, result }, { status: 200 });
    }

    if (toolType === "linkedin-profile-analyzer") {
      const { headline, about, targetRole, experienceLevel, skills } = payload || {};
      if (!headline || !about) {
        return NextResponse.json({ error: "Both Headline and About section are required for LinkedIn evaluation." }, { status: 400 });
      }
      const result = analyzeLinkedInProfile({
        headline,
        about,
        targetRole: targetRole || "Software Engineer",
        experienceLevel: experienceLevel || "Mid-Level",
        skills: skills || "",
      });
      return NextResponse.json({ success: true, toolType, result }, { status: 200 });
    }

    if (toolType === "job-match-score") {
      const { resumeText, targetJobTitle, jobDescription, candidateSkills } = payload || {};
      if (!resumeText || !jobDescription) {
        return NextResponse.json({ error: "Both resume text and job description are required for matching." }, { status: 400 });
      }
      const result = calculateJobMatchScore({
        resumeText,
        targetJobTitle: targetJobTitle || "",
        jobDescription,
        candidateSkills,
      });
      return NextResponse.json({ success: true, toolType, result }, { status: 200 });
    }

    if (toolType === "interview-readiness") {
      const { targetRole, experienceLevel, interviewType, skillsOrTech, areasOfConcern } = payload || {};
      if (!targetRole) {
        return NextResponse.json({ error: "Target role is required for interview readiness scoring." }, { status: 400 });
      }
      const result = evaluateInterviewReadiness({
        targetRole,
        experienceLevel: experienceLevel || "Mid-Level",
        interviewType: interviewType || "Technical + Behavioral",
        skillsOrTech: skillsOrTech || "Full Stack",
        areasOfConcern: areasOfConcern || "",
      });
      return NextResponse.json({ success: true, toolType, result }, { status: 200 });
    }

    return NextResponse.json({ error: "Unsupported assessment tool type." }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Server evaluation error in assessment pipeline." }, { status: 500 });
  }
}
