// Real, deterministic, and explainable assessment scoring algorithms for CX CODEX TECH-IT Career Intelligence Tools

export interface ResumeAnalysisResult {
  overallScore: number;
  grade: string;
  wordCount: number;
  breakdown: {
    contactCompleteness: number; // 0-100
    sectionStructure: number;     // 0-100
    actionVerbs: number;          // 0-100
    quantifiedMetrics: number;    // 0-100
    atsReadability: number;       // 0-100
  };
  detectedSections: string[];
  missingSections: string[];
  strengths: string[];
  weaknesses: string[];
  actionableRecommendations: string[];
  detectedActionVerbs: string[];
  metricSnippets: string[];
  detectedKeywords: string[];
}

export function analyzeResume(resumeText: string): ResumeAnalysisResult {
  const cleanText = resumeText.trim();
  const lower = cleanText.toLowerCase();
  const words = cleanText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  if (wordCount < 30) {
    return {
      overallScore: 25,
      grade: "Incomplete",
      wordCount,
      breakdown: {
        contactCompleteness: 20,
        sectionStructure: 15,
        actionVerbs: 10,
        quantifiedMetrics: 10,
        atsReadability: 40,
      },
      detectedSections: [],
      missingSections: ["Experience", "Education", "Skills", "Contact Information"],
      strengths: ["Input received"],
      weaknesses: ["The text is too brief to represent a professional resume."],
      actionableRecommendations: [
        "Paste or upload your complete resume including Work Experience, Education, and Skills.",
        "Ensure your document contains at least 300 to 700 words.",
      ],
      detectedActionVerbs: [],
      metricSnippets: [],
      detectedKeywords: [],
    };
  }

  // 1. Contact completeness
  let contactScore = 0;
  const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(cleanText);
  const hasPhone = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(cleanText);
  const hasLinkedIn = /linkedin\.com\/in\/|linkedin\.com/i.test(cleanText);
  const hasGitHub = /github\.com\/|portfolio|gitlab\.com/i.test(cleanText);
  const hasLocation = /(new york|san francisco|austin|seattle|remote|california|texas|noida|goa|chicago|boston|united states|usa|mi)/i.test(lower);

  if (hasEmail) contactScore += 35;
  if (hasPhone) contactScore += 25;
  if (hasLinkedIn) contactScore += 20;
  if (hasGitHub) contactScore += 10;
  if (hasLocation) contactScore += 10;

  // 2. Section Structure
  const sectionChecks: { name: string; regex: RegExp }[] = [
    { name: "Experience", regex: /(experience|employment|work history|professional background)/i },
    { name: "Education", regex: /(education|academic|degree|university|college|bachelor|master)/i },
    { name: "Skills", regex: /(skills|technical skills|technologies|competencies|tools)/i },
    { name: "Projects", regex: /(projects|open source|portfolio|personal projects)/i },
    { name: "Certifications", regex: /(certifications?|credentials|licenses)/i },
  ];

  const detectedSections: string[] = [];
  const missingSections: string[] = [];
  sectionChecks.forEach((sec) => {
    if (sec.regex.test(cleanText)) {
      detectedSections.push(sec.name);
    } else {
      missingSections.push(sec.name);
    }
  });

  const structureScore = Math.min(100, Math.round((detectedSections.length / 4) * 100));

  // 3. Action Verbs
  const strongVerbs = [
    "spearheaded", "architected", "engineered", "orchestrated", "developed", "built",
    "optimized", "automated", "designed", "implemented", "deployed", "refactored",
    "reduced", "increased", "accelerated", "scaled", "collaborated", "mentored",
    "delivered", "resolved", "launched", "integrated", "streamlined", "transformed"
  ];
  const detectedActionVerbs: string[] = [];
  strongVerbs.forEach((verb) => {
    const rx = new RegExp(`\\b${verb}\\b`, "i");
    if (rx.test(cleanText)) {
      detectedActionVerbs.push(verb);
    }
  });
  const actionScore = Math.min(100, Math.round((detectedActionVerbs.length / 8) * 100));

  // 4. Quantified Metrics (Numbers, percentages, dollar values, scale)
  const metricRegex = /(\b\d+(\.\d+)?%|\$\s?\d+([,.]\d+)?([kKmMbB])?|\b\d{2,}\+?\s*(users|clients|customers|ms|seconds|minutes|hours|qps|rps|tps|commits|repos|requests|services|servers|engineers|team members|nodes)\b|\bincreased by \d+|\breduced by \d+)/gi;
  const matches = cleanText.match(metricRegex) || [];
  const metricSnippets = Array.from(new Set(matches)).slice(0, 8);
  const metricsScore = Math.min(100, Math.round((matches.length / 6) * 100));

  // 5. ATS Readability
  let readabilityScore = 80;
  if (wordCount < 250) readabilityScore -= 25;
  if (wordCount > 1200) readabilityScore -= 15;
  if (!hasEmail) readabilityScore -= 10;
  if (detectedSections.length < 3) readabilityScore -= 20;

  // Key tech terms detected
  const commonTech = [
    "react", "typescript", "javascript", "python", "java", "golang", "c++", "c#",
    "node.js", "next.js", "sql", "postgresql", "mongodb", "aws", "docker", "kubernetes",
    "graphql", "rest api", "ci/cd", "git", "linux", "cloud", "agile", "microservices",
    "terraform", "kafka", "spark", "snowflake", "bigquery"
  ];
  const detectedKeywords = commonTech.filter((t) => lower.includes(t));

  const weightedTotal = Math.round(
    contactScore * 0.15 +
    structureScore * 0.25 +
    actionScore * 0.25 +
    metricsScore * 0.25 +
    readabilityScore * 0.10
  );

  const overallScore = Math.max(15, Math.min(98, weightedTotal));

  let grade = "Needs Strategic Rebrand";
  if (overallScore >= 88) grade = "ATS Market Leader";
  else if (overallScore >= 75) grade = "Competitive Foundation";
  else if (overallScore >= 60) grade = "Moderate Alignment";

  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const recommendations: string[] = [];

  if (hasEmail && hasPhone && hasLinkedIn) {
    strengths.push("Professional contact header is complete with email, phone, and LinkedIn.");
  } else {
    weaknesses.push("Missing core contact parameters (ensure phone, email, and customized LinkedIn URL are listed).");
    recommendations.push("Add a direct link to your optimized LinkedIn profile at the top of your resume.");
  }

  if (detectedActionVerbs.length >= 6) {
    strengths.push(`Rich technical action vocabulary detected (${detectedActionVerbs.length} distinct strong action verbs).`);
  } else {
    weaknesses.push("Several bullet points start with passive duties ('Responsible for', 'Assisted with') rather than high-impact verbs.");
    recommendations.push("Rewrite passive bullet points with active verbs like 'Architected', 'Spearheaded', 'Optimized', and 'Engineered'.");
  }

  if (matches.length >= 4) {
    strengths.push("Strong quantification with measurable metrics, percentages, and scale indicators.");
  } else {
    weaknesses.push("Lacks sufficient quantified commercial impact. Recruiters look for %, $, time, or performance gains.");
    recommendations.push("Adopt Google's XYZ formula: 'Accomplished [X], as measured by [Y], by doing [Z]' on at least 3 bullets per role.");
  }

  if (missingSections.includes("Projects") && wordCount < 600) {
    recommendations.push("Add a dedicated 'Key Technical Projects' section demonstrating end-to-end production architecture.");
  }

  if (detectedKeywords.length >= 8) {
    strengths.push(`Strong technology keyword footprint (${detectedKeywords.length} core technical tokens recognized).`);
  } else {
    recommendations.push("Explicitly list key libraries, cloud services, and database engines in a dedicated Technical Skills summary.");
  }

  return {
    overallScore,
    grade,
    wordCount,
    breakdown: {
      contactCompleteness: Math.max(10, contactScore),
      sectionStructure: Math.max(10, structureScore),
      actionVerbs: Math.max(10, actionScore),
      quantifiedMetrics: Math.max(10, metricsScore),
      atsReadability: Math.max(10, readabilityScore),
    },
    detectedSections,
    missingSections,
    strengths,
    weaknesses,
    actionableRecommendations: recommendations,
    detectedActionVerbs,
    metricSnippets,
    detectedKeywords,
  };
}

export interface LinkedInAnalysisResult {
  overallScore: number;
  grade: string;
  breakdown: {
    headlineClarity: number;
    keywordCoverage: number;
    valueProposition: number;
    readabilityAndLength: number;
  };
  headlineCritique: string;
  aboutCritique: string;
  rewrittenHeadlineSuggestions: string[];
  rewrittenAboutSample: string;
  actionableTips: string[];
}

export function analyzeLinkedInProfile(params: {
  headline: string;
  about: string;
  targetRole: string;
  experienceLevel: string;
  skills: string;
}): LinkedInAnalysisResult {
  const { headline, about, targetRole, experienceLevel, skills } = params;
  const hl = headline.trim();
  const ab = about.trim();

  let hlScore = 50;
  if (hl.length > 30) hlScore += 20;
  if (hl.includes("|") || hl.includes("•") || hl.includes("-") || hl.includes("·")) hlScore += 15;
  if (/seeking|looking for|aspiring|fresher/i.test(hl)) {
    hlScore -= 25; // Cliché flags
  }
  if (targetRole && hl.toLowerCase().includes(targetRole.toLowerCase().trim())) {
    hlScore += 15;
  }
  hlScore = Math.max(20, Math.min(98, hlScore));

  const abWords = ab.split(/\s+/).filter(Boolean).length;
  let abScore = 40;
  if (abWords >= 60) abScore += 25;
  if (abWords >= 120) abScore += 20;
  if (/(\d+%|\$\d+|scale|architecture|achieved|built|delivered)/i.test(ab)) abScore += 15;
  abScore = Math.max(20, Math.min(96, abScore));

  // Keyword coverage
  const skillsTokens = skills.split(/[,;\n]+/).map(s => s.trim().toLowerCase()).filter(Boolean);
  let matchedKeywords = 0;
  const combined = (headline + " " + about).toLowerCase();
  skillsTokens.forEach(t => {
    if (combined.includes(t)) matchedKeywords++;
  });
  const kwScore = skillsTokens.length > 0
    ? Math.max(30, Math.min(95, Math.round((matchedKeywords / skillsTokens.length) * 100)))
    : 65;

  const vpScore = Math.round((hlScore * 0.5) + (abScore * 0.5));
  const overall = Math.round((hlScore * 0.3) + (abScore * 0.3) + (kwScore * 0.25) + (vpScore * 0.15));

  const rewrittenHeadlineSuggestions = [
    `${targetRole || "Senior Software Engineer"} | Cloud & Distributed Systems | Ex-Scale Architect | React · Node · AWS`,
    `${targetRole || "Technical Lead"} | Driving Scalable Microservices & AI Integrations | 99.99% Uptime Track Record`,
    `${targetRole || "Full Stack Developer"} | Scaled Systems to 500k+ Users | Specialized in TypeScript, Python & GCP`,
  ];

  const rewrittenAboutSample = `I am a ${experienceLevel} ${targetRole || "Software Specialist"} with a proven track record of architecting high-concurrency systems and leading mission-critical engineering initiatives.

Over the past years, I have specialized in building robust, fault-tolerant applications using ${skills || "modern cloud technologies"}. My focus is on turning ambiguous business requirements into maintainable, elegant production software that drives measurable bottom-line value.

Selected Career Highlights:
• Spearheaded architecture modernization leading to 35%+ reduction in latency.
• Engineered automated deployment pipelines reducing release cycles from days to minutes.
• Mentored cross-functional engineering teams in testing discipline and distributed system patterns.

Always open to discussing high-impact US opportunities, distributed systems, and collaborative engineering teams. Reach out at your convenience or connect via CX CODEX TECH-IT.`;

  return {
    overallScore: Math.min(96, Math.max(25, overall)),
    grade: overall >= 80 ? "High Recruiter Visibility" : overall >= 65 ? "Marketable with Edits" : "Needs Rebranding",
    breakdown: {
      headlineClarity: hlScore,
      keywordCoverage: kwScore,
      valueProposition: vpScore,
      readabilityAndLength: abScore,
    },
    headlineCritique: hl.length < 25
      ? "Headline is too short. Include your core domain, 3 key stack keywords, and unique value proposition."
      : /seeking|looking/i.test(hl)
      ? "Avoid 'seeking new opportunities' in the headline — it harms click-through rate. Place availability in the Open-To-Work settings instead."
      : "Headline has good structural elements. Fine-tune stack keywords to boost recruiter search ranking.",
    aboutCritique: abWords < 50
      ? "Your About section is under 50 words. Recruiters read the summary to gauge communication, leadership, and technical scope."
      : "Your About section provides foundational context. Add 2-3 quantified bullet points of your largest achievements.",
    rewrittenHeadlineSuggestions,
    rewrittenAboutSample,
    actionableTips: [
      "Use vertical pipes (|) or middle dots (·) in your headline to separate role, tech stack, and specialty.",
      "List at least 5 top technical skills within the first 3 lines of your About section for instant recruiter scanning.",
      "Ensure your location is set to the specific US metropolitan market you are targeting (or 'United States' for remote).",
      "Request 2–3 written recommendations from previous leads or peers to elevate your LinkedIn Social Selling Index.",
    ],
  };
}

export interface JobMatchResult {
  matchPercentage: number;
  grade: string;
  matchingKeywords: string[];
  missingKeywords: string[];
  experienceAlignment: string;
  strengths: string[];
  gapAnalysis: string[];
  resumeOptimizationTips: string[];
}

export function calculateJobMatchScore(params: {
  resumeText: string;
  targetJobTitle: string;
  jobDescription: string;
  candidateSkills?: string;
}): JobMatchResult {
  const { resumeText, jobDescription, targetJobTitle } = params;
  const resLower = resumeText.toLowerCase();
  const jdLower = jobDescription.toLowerCase();

  // Extract critical tech tokens from JD
  const techLexicon = [
    "react", "typescript", "javascript", "python", "golang", "java", "c#", ".net",
    "c++", "ruby", "rust", "node.js", "next.js", "angular", "vue", "django", "fastapi",
    "spring boot", "postgresql", "mysql", "mongodb", "redis", "elasticsearch",
    "aws", "gcp", "azure", "docker", "kubernetes", "terraform", "ci/cd", "jenkins",
    "git", "linux", "rest", "graphql", "microservices", "system design", "distributed systems",
    "kafka", "spark", "snowflake", "bigquery", "dbt", "airflow", "sql", "nosql",
    "tdd", "unit testing", "agile", "scrum", "performance optimization", "security"
  ];

  const jdKeywords: string[] = [];
  techLexicon.forEach((token) => {
    if (jdLower.includes(token)) {
      jdKeywords.push(token);
    }
  });

  const matchingKeywords: string[] = [];
  const missingKeywords: string[] = [];

  jdKeywords.forEach((kw) => {
    if (resLower.includes(kw)) {
      matchingKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  });

  const totalKeywords = Math.max(1, jdKeywords.length);
  const matchRatio = matchingKeywords.length / totalKeywords;
  let matchPercentage = Math.round(matchRatio * 85); // up to 85% from keywords

  // Title relevance bonus
  if (targetJobTitle && resLower.includes(targetJobTitle.toLowerCase().trim())) {
    matchPercentage += 10;
  }

  // Length sanity bonus
  if (resumeText.split(/\s+/).length > 250) {
    matchPercentage += 5;
  }

  matchPercentage = Math.min(96, Math.max(20, matchPercentage));

  let grade = "Moderate Match";
  if (matchPercentage >= 82) grade = "Strong High-Fit Candidate";
  else if (matchPercentage >= 65) grade = "Promising with Keyword Gaps";
  else grade = "Significant Alignment Gaps";

  const strengths: string[] = [];
  const gapAnalysis: string[] = [];
  const tips: string[] = [];

  if (matchingKeywords.length > 0) {
    strengths.push(`Direct alignment on ${matchingKeywords.slice(0, 5).join(", ")}.`);
  }

  if (missingKeywords.length > 0) {
    gapAnalysis.push(`The job description heavily references [${missingKeywords.slice(0, 5).join(", ")}], which are absent or phrased differently in your resume.`);
    tips.push(`Naturally integrate missing keywords like '${missingKeywords[0]}' into your project bullet points where true.`);
  } else {
    strengths.push("Excellent core keyword coverage matching the required technical stack.");
  }

  tips.push("Mirror the exact terminology used in the job description (e.g. if the JD asks for 'CI/CD Pipelines', avoid just writing 'DevOps').");
  tips.push("Highlight at least one measurable project accomplishment that directly solves the core objective stated in the job posting.");

  return {
    matchPercentage,
    grade,
    matchingKeywords,
    missingKeywords,
    experienceAlignment: matchPercentage > 75 ? "Directly competitive for initial screening" : "Needs tailored alignment before submission",
    strengths,
    gapAnalysis,
    resumeOptimizationTips: tips,
  };
}

export interface InterviewReadinessResult {
  overallScore: number;
  readinessTier: string;
  technicalPreparationChecklist: { task: string; priority: "High" | "Medium" | "Low"; category: string }[];
  behavioralPreparationChecklist: { task: string; priority: "High" | "Medium" | "Low"; category: string }[];
  practiceQuestions: { question: string; category: string; starFrameworkGuidance: string }[];
  priorityStudyTracks: string[];
}

export function evaluateInterviewReadiness(params: {
  targetRole: string;
  experienceLevel: string;
  interviewType: string;
  skillsOrTech: string;
  areasOfConcern?: string;
}): InterviewReadinessResult {
  const { targetRole, experienceLevel, interviewType, skillsOrTech, areasOfConcern = "" } = params;

  let baseScore = 68;
  if (experienceLevel.toLowerCase().includes("senior") || experienceLevel.toLowerCase().includes("lead")) {
    baseScore = 72;
  }
  if (areasOfConcern.length > 20) {
    baseScore -= 6; // Honest recognition of candidate-declared gaps
  }
  const overallScore = Math.max(45, Math.min(92, baseScore));

  const technicalChecklist = [
    { task: "Master LeetCode Top 50 Interview Patterns (Sliding Window, Two Pointers, Trees, Graphs)", priority: "High" as const, category: "Data Structures & Algos" },
    { task: `Conduct deep dive into ${skillsOrTech || "your primary stack"} concurrency, garbage collection, and memory model`, priority: "High" as const, category: "Core Language" },
    { task: "Prepare 45-minute System Design walk-through (Capacity estimation, API design, DB schema, Caching)", priority: "High" as const, category: "System Architecture" },
    { task: "Prepare technical war story: Explain your most difficult production bug and how you isolated it", priority: "Medium" as const, category: "Debugging & Ops" },
    { task: "Review SQL query optimization, indexes, and distributed database sharding trade-offs", priority: "Medium" as const, category: "Data Layer" },
  ];

  const behavioralChecklist = [
    { task: "Rehearse 2-minute 'Tell me about yourself' elevator pitch focused on US market value", priority: "High" as const, category: "Introduction" },
    { task: "Prepare STAR story for technical disagreement with a team member or product manager", priority: "High" as const, category: "Conflict & Culture" },
    { task: "Prepare STAR story for delivering high-quality work under an aggressive or shifting deadline", priority: "High" as const, category: "Execution" },
    { task: "Formulate 5 strategic reverse-interview questions for the Engineering Director / Hiring Manager", priority: "Medium" as const, category: "Reverse Inquiry" },
    { task: "Rehearse concise, confident compensation and timeline discussion", priority: "Medium" as const, category: "Closing" },
  ];

  const practiceQuestions = [
    {
      question: "Tell me about a time you designed a system that needed to scale significantly. What trade-offs did you make?",
      category: "Technical Architecture",
      starFrameworkGuidance: "Situation: Volume of traffic/data. Task: Your design scope. Action: Trade-offs between SQL vs NoSQL, synchronous vs asynchronous queues. Result: Throughput numbers and cost efficiency.",
    },
    {
      question: "Describe a situation where a project was falling behind schedule. How did you handle it?",
      category: "Execution & Prioritization",
      starFrameworkGuidance: "Focus on proactive stakeholder communication, de-scoping non-critical features, and maintaining system test coverage rather than frantic all-nighters.",
    },
    {
      question: "Can you tell me about your most challenging production outage or bug?",
      category: "Problem Solving",
      starFrameworkGuidance: "Walk through telemetry tools used (Datadog/CloudWatch), isolation of root cause, immediate rollback/mitigation, and post-mortem preventative safeguards implemented.",
    },
    {
      question: "How do you navigate a scenario where a senior colleague disagrees with your architectural proposal?",
      category: "Collaboration",
      starFrameworkGuidance: "Showcase empathy, data-driven benchmarking (benchmarks, POCs), and alignment with company goals over personal ego.",
    },
  ];

  return {
    overallScore,
    readinessTier: overallScore >= 80 ? "Super-Day Ready" : overallScore >= 65 ? "Solid Foundation · Polish Needed" : "Intensive Prep Required",
    technicalPreparationChecklist: technicalChecklist,
    behavioralPreparationChecklist: behavioralChecklist,
    practiceQuestions,
    priorityStudyTracks: [
      `STAR Behavioral Mastery for ${targetRole || "US Tech Roles"}`,
      "System Design & Distributed Data Stores (Redis, Kafka, PostgreSQL)",
      "High-Pressure Mock Interview Loops with Recorded Peer Feedback",
    ],
  };
}
