export interface ServiceItem {
  slug: string;
  id: string;
  title: string;
  kicker: string;
  tag: string;
  shortDesc: string;
  heroHeadline: string;
  targetAudience: string[];
  problemsAddressed: string[];
  benefits: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}

export interface PlanItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  popular?: boolean;
  idealFor: string;
  commitment: string;
  features: string[];
  deliverables: string[];
  supportScope: string;
  pricingNote: string;
}

export interface OfficeItem {
  id: string;
  city: string;
  state: string;
  country: string;
  role: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  mapQuery: string;
  whatsapp: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  kicker: string;
  shortDesc: string;
  heroHeadline: string;
  avgComp: string;
  activeDemand: string;
  keyRoles: string[];
  inDemandStacks: string[];
  hiringHubs: string[];
  challengesAddressed: string[];
  codexIntervention: string[];
  deliverables: string[];
}

export const SITE_CONFIG = {
  name: "CX CODEX TECH-IT",
  shortName: "CX Codex",
  tagline: "We Deliver Jobs Faster",
  description:
    "CX CODEX TECH-IT is premier career infrastructure and technical staffing for the global technology market — We Deliver Jobs Faster. Comprehensive strategy, ATS resume optimization, interview readiness, and fast-track placement support.",
  url: "https://cxcodextech.com",
  logo: "/logo-transparent.png",
  logoCropped: "/logo-cropped.png",
  logoDark: "/logo-dark.png",
  phone: "+1 (201) 772-2853",
  email: "info@cxcodextech.com",
  contact: {
    email: "info@cxcodextech.com",
    phone: "+1 (201) 772-2853",
  },
  whatsappUrl: "https://wa.me/12017722853",
  socials: {
    linkedin: "https://www.linkedin.com/company/cxcodextech",
    instagram: "https://www.instagram.com/cxcodextech/",
    facebook: "https://www.facebook.com/cxcodextech",
  },
  offices: [
    {
      id: "noida",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      role: "Global Operations & Delivery Center",
      address: "G-172, Sector 63 Rd, G Block, Sector 63, Noida, Uttar Pradesh 201309",
      hours: "Mon–Fri · 10 AM – 7 PM IST",
      phone: "+1 (201) 772-2853",
      email: "info@cxcodextech.com",
      mapQuery: "G-172, Sector 63 Rd, G Block, Sector 63, Noida, Uttar Pradesh 201309",
      whatsapp: "https://wa.me/12017722853",
    },
    {
      id: "goa",
      city: "Panaji",
      state: "Goa",
      country: "India",
      role: "Branch Office",
      address: "EDC Complex, Patto Plaza, Panaji, Goa 403001",
      hours: "Mon–Fri · 10 AM – 6 PM IST",
      phone: "+1 (201) 772-2853",
      email: "info@cxcodextech.com",
      mapQuery: "Panaji, Goa 403001",
      whatsapp: "https://wa.me/12017722853",
    },
    {
      id: "michigan",
      city: "Coleman",
      state: "Michigan",
      country: "United States",
      role: "US Onsite Office",
      address: "112 Fraser St., Coleman, MI 48618",
      hours: "Mon–Fri · 9 AM – 6 PM EST",
      phone: "+1 (201) 772-2853",
      email: "info@cxcodextech.com",
      mapQuery: "112 Fraser St., Coleman, MI 48618",
      whatsapp: "https://wa.me/12017722853",
    },
  ] as OfficeItem[],

  stats: [
    { value: "2,200+", label: "Professionals Guided" },
    { value: "2–4", label: "Months Typical Campaign" },
    { value: "6–12", label: "Months Post-Placement Care" },
    { value: "USA", label: "Client & MSP Networks" },
  ],

  services: [
    {
      slug: "career-strategy-planning",
      id: "career-strategy",
      title: "Career Strategy & Planning",
      kicker: "01 / STRATEGY",
      tag: "Strategy",
      shortDesc: "One-on-one career mapping around your skills, target US roles, market demand, and realistic milestones.",
      heroHeadline: "Define your competitive edge in the US tech market with a tailored roadmap.",
      targetAudience: [
        "International professionals seeking structured entry to the US market",
        "Recent STEM graduates transitioning from OPT/CPT to full-time roles",
        "Experienced software engineers aiming for senior or staff-level positioning",
        "Professionals pivoting into cloud, data engineering, AI, or cybersecurity",
      ],
      problemsAddressed: [
        "Unclear role targeting leading to low recruiter response rates",
        "Mismatch between overseas experience and US employer expectations",
        "Lack of realistic timeline and milestone breakdown for the hiring cycle",
        "Disorganized job applications across inconsistent job titles",
      ],
      benefits: [
        "Clarity on which 2–3 target titles offer the highest conversion probability",
        "Personalized SWOT analysis mapping your current skills to open job requisitions",
        "Step-by-step milestone timeline from profile reboot to offer negotiation",
        "Dedicated mentor checkpoint calls to keep your momentum high",
      ],
      deliverables: [
        "Comprehensive 12-page US Career Strategy Manifesto",
        "Target Role Benchmark Matrix with top 20 hiring companies",
        "Skills Gap Analysis & Recommended 60-Day Sprint Plan",
        "One-on-one 60-minute Strategy Alignment Session with a Senior Advisor",
      ],
      process: [
        { step: "01", title: "Intake & Profile Audit", desc: "We review your work history, education, visa timeline, and career ambitions." },
        { step: "02", title: "Market Feasibility Mapping", desc: "Analyze current US hiring volumes, salary bands, and sponsor trends for your stack." },
        { step: "03", title: "Strategic Roadmap Blueprint", desc: "Synthesize target titles, positioning pillars, and priority skill sprints." },
        { step: "04", title: "1-on-1 Milestone Review", desc: "Finalize the timeline and transition directly into profile rebranding." },
      ],
      faqs: [
        { q: "How long does the Career Strategy process take?", a: "Typically 3 to 5 business days from your initial intake call to the completed roadmap review." },
        { q: "Does CX CODEX TECH-IT guarantee a job offer?", a: "No reputable career partner can legally or ethically guarantee an employment offer. We provide structured infrastructure, profile optimization, and campaign guidance to maximize your market competitiveness." },
      ],
      relatedServices: ["resume-rebranding", "linkedin-profile-rebranding", "custom-job-campaigns"],
    },
    {
      slug: "resume-rebranding",
      id: "resume-rebranding",
      title: "Resume Rebranding & ATS Optimization",
      kicker: "02 / RESUME",
      tag: "Resume",
      shortDesc: "Rebuild your resume from the ground up — ATS-compliant, keyword-rich, and focused on quantified impact.",
      heroHeadline: "Transform your resume into a high-converting door opener for US tech recruiters.",
      targetAudience: [
        "Candidates receiving automated ATS rejections within 24 hours of applying",
        "Software developers whose resumes list tools without quantified business impact",
        "Mid-career tech leads needing clean, executive 2-page formatting",
        "Foreign-credentialed professionals adapting formats for US recruiters",
      ],
      problemsAddressed: [
        "Tables, columns, or graphic icons confusing ATS parsers (Workday, Greenhouse, Lever)",
        "Passive bullet points that describe job duties rather than business metrics (STAR/XYZ format)",
        "Under-represented technical keywords matching active job requisitions",
        "Unexplained timeline gaps or distracting non-relevant details",
      ],
      benefits: [
        "Engineered for 90%+ pass rate through modern parsing algorithms",
        "Bullet points converted to Google's XYZ formula: 'Accomplished [X], as measured by [Y], by doing [Z]'",
        "Two tailored versions: Core ATS-Optimized Word/PDF and Executive Human-Reader version",
        "Unlimited revisions within 14 days of initial draft delivery",
      ],
      deliverables: [
        "Fully ATS-compliant Microsoft Word (.docx) and PDF versions",
        "Customizable Cover Letter template aligned with your core narrative",
        "ATS Scan Diagnostic Report detailing keyword densities and parsing fidelity",
        "Bullet-point achievement library for future role customization",
      ],
      process: [
        { step: "01", title: "Deep Dive Questioning", desc: "Extract your quantified achievements, architecture decisions, and business impact." },
        { step: "02", title: "Drafting & ATS Structuring", desc: "Rebuild content using clean, parser-friendly hierarchy, tags, and metrics." },
        { step: "03", title: "Keyword Optimization", desc: "Inject role-specific keywords verified against current US job descriptions." },
        { step: "04", title: "Iterative Polish", desc: "Two rounds of direct feedback to ensure you are 100% confident in every line." },
      ],
      faqs: [
        { q: "What format will I receive my completed resume in?", a: "You will receive both an editable Microsoft Word (.docx) file and an ATS-tested clean PDF." },
        { q: "Will my resume pass Taleo, Workday, and Greenhouse?", a: "Yes, our templates are designed with linear semantic hierarchy, standard fonts, and zero unparsable columns or textboxes." },
      ],
      relatedServices: ["linkedin-profile-rebranding", "job-match-score", "career-strategy-planning"],
    },
    {
      slug: "linkedin-profile-rebranding",
      id: "linkedin-rebranding",
      title: "LinkedIn Profile Rebranding",
      kicker: "03 / LINKEDIN",
      tag: "LinkedIn",
      shortDesc: "Expert-led LinkedIn positioning so recruiters actively discover you, understand your value, and reach out.",
      heroHeadline: "Turn your LinkedIn presence into an inbound recruiter magnet in the US market.",
      targetAudience: [
        "Engineers who rely solely on cold applications and receive zero recruiter InMails",
        "Professionals with outdated headlines that list only generic student or junior titles",
        "International talent wanting to signal US-market readiness and availability",
        "Specialists whose About section lacks personal storytelling and technical depth",
      ],
      problemsAddressed: [
        "Low LinkedIn Recruiter search ranking due to missing algorithmic search keywords",
        "Bland headlines ('Software Engineer looking for opportunities') that fail to convert clicks",
        "Unused featured section, skills endorsement gaps, and blank recommendation sections",
        "Privacy settings improperly configured for proactive US recruiter outreach",
      ],
      benefits: [
        "Optimized for LinkedIn Recruiter boolean search algorithms",
        "Compelling first-person executive summary that establishes authority",
        "Engaging banner, headline, and featured project visual recommendations",
        "Step-by-step engagement playbook for organic US recruiter visibility",
      ],
      deliverables: [
        "Complete copy document: Headline, About, Experience bullets, Skills list",
        "Custom high-resolution LinkedIn background banner designed for your role",
        "LinkedIn Search Optimization Checklist (Open to Work settings, Location filters)",
        "Direct outreach templates to message hiring managers and recruiters",
      ],
      process: [
        { step: "01", title: "Visibility Audit", desc: "Assess current SSI score, keyword density, and search query presence." },
        { step: "02", title: "Narrative & Headline Crafting", desc: "Design a high-CTR headline communicating exact domain, stack, and value." },
        { step: "03", title: "Complete Section Rewrite", desc: "Draft engaging About section, achievement-driven experience, and top 50 skills." },
        { step: "04", title: "Deployment & Settings Walkthrough", desc: "Guide you through updating your profile and toggling recruiter-only settings." },
      ],
      faqs: [
        { q: "Do you need my LinkedIn login password?", a: "Never. We provide a complete copy deck with exact instructions so you remain in total control of your account security." },
        { q: "Can I use this if I am currently employed and need discretion?", a: "Yes, we teach you how to signal availability to external recruiters without alerting your current employer's internal talent team." },
      ],
      relatedServices: ["resume-rebranding", "career-strategy-planning", "custom-job-campaigns"],
    },
    {
      slug: "skill-development",
      id: "skill-development",
      title: "Skill Development & Technical Mentorship",
      kicker: "04 / SKILLS",
      tag: "Skills",
      shortDesc: "Targeted technical, architectural, and communication preparation built around the exact roles you target.",
      heroHeadline: "Bridge technical gaps with targeted mentorship from experienced industry practitioners.",
      targetAudience: [
        "Engineers needing to upgrade from legacy stacks to modern cloud/microservices architectures",
        "Data analysts transitioning into production Data Engineering (Spark, Snowflake, dbt)",
        "Backend developers seeking hands-on system design and distributed systems confidence",
        "Candidates needing improved verbal technical communication and whiteboard articulation",
      ],
      problemsAddressed: [
        "Book knowledge without real-world production trade-off understanding",
        "Struggling through open-ended architectural and system design interviews",
        "Lacking verifiable portfolio projects deployed on AWS, GCP, or Azure",
        "Difficulty articulating architectural rationale in concise American English",
      ],
      benefits: [
        "Curated curriculum focused strictly on high-yield interview questions",
        "Real-world enterprise system design case studies (Uber, Netflix, Twitter architecture)",
        "Hands-on code reviews and portfolio project enhancement",
        "Weekly technical check-ins with dedicated mentors",
      ],
      deliverables: [
        "Personalized 60-Day Technical Preparation Curriculum",
        "Curated LeetCode/HackerRank Pattern Mastery Guide (Blind 75 & Grind 169)",
        "System Design Cheat Sheets & High-Availability Architectural Templates",
        "Recorded 1-on-1 Code Review & Architecture Feedback Sessions",
      ],
      process: [
        { step: "01", title: "Diagnostic Assessment", desc: "Identify strengths and blind spots across coding, data structures, and system design." },
        { step: "02", title: "Custom Study Track", desc: "Assign targeted modules matching your target role requirements." },
        { step: "03", title: "Live Mentor Sessions", desc: "Deep dive into real-world scenario challenges and technical defense." },
        { step: "04", title: "Capstone Project Review", desc: "Polish GitHub repositories with professional READMEs and architecture diagrams." },
      ],
      faqs: [
        { q: "Is this a generic coding bootcamp?", a: "No. It is specialized, high-intensity mentorship for candidates who already possess technical foundations and need to align with senior US market expectations." },
        { q: "What technical tracks do you support?", a: "Full-Stack Web (React/Node/Go/Python/Java), Cloud & DevOps (AWS/Kubernetes/Terraform), Data Engineering (SQL/Python/Snowflake/Spark), and QA Automation." },
      ],
      relatedServices: ["interview-preparation", "career-strategy-planning", "resume-rebranding"],
    },
    {
      slug: "interview-preparation",
      id: "interview-preparation",
      title: "Interview Preparation & Mock Coaching",
      kicker: "05 / INTERVIEW",
      tag: "Interview",
      shortDesc: "Master behavioral, situational, and technical interviews with recorded mock sessions and STAR framework coaching.",
      heroHeadline: "Walk into every recruiter screen and technical loop with calm, unwavering confidence.",
      targetAudience: [
        "Candidates getting first-round screens but repeatedly failing the hiring manager stage",
        "Non-native English speakers wanting to eliminate rambling and speak with conciseness",
        "Engineers dreading behavioral questions like 'Tell me about a time you had a conflict'",
        "Professionals preparing for multi-stage super-days and on-site panel interviews",
      ],
      problemsAddressed: [
        "Unstructured answers that fail to highlight personal leadership and metric impact",
        "Performance anxiety and freezing during live coding or whiteboard rounds",
        "Inability to ask compelling reverse-interview questions to executive interviewers",
        "Weak salary negotiation positioning when the verbal offer is extended",
      ],
      benefits: [
        "Master the STAR (Situation, Task, Action, Result) method with 25+ rehearsed stories",
        "Detailed rubric scoring across communication clarity, technical depth, and cultural add",
        "Realistic simulation of US corporate interview panel dynamics",
        "Pre-interview briefing 30 minutes before high-stakes client rounds",
      ],
      deliverables: [
        "Personalized Behavioral Interview Master Story Bank (15+ vetted STAR scenarios)",
        "Recorded 60-Minute Mock Interview with Timestamped Performance Breakdown",
        "Post-Interview Follow-Up & Strategic Thank-You Note Email Templates",
        "Offer Evaluation & Salary Negotiation Scripting Guide",
      ],
      process: [
        { step: "01", title: "Story Excavation", desc: "Transform your past projects into compelling high-stakes executive stories." },
        { step: "02", title: "Simulated Mock Loop", desc: "Experience a rigorous 60-minute mock interview under real exam conditions." },
        { step: "03", title: "Timestamped Rubric Analysis", desc: "Review where your answers lagged, were ambiguous, or missed key impact metrics." },
        { step: "04", title: "Final Polish & Pep Briefing", desc: "Tune pacing, tone, and confidence right before your real employer interview." },
      ],
      faqs: [
        { q: "Are the mock interviews recorded?", a: "Yes, you receive private cloud video access to your mock session with line-by-line constructive feedback." },
        { q: "Do you help with salary negotiation?", a: "Yes, our advisors help you benchmark fair market value on Levels.fyi/Radford and provide word-for-word counter-offer scripts." },
      ],
      relatedServices: ["skill-development", "us-market-placement-support", "custom-job-campaigns"],
    },
    {
      slug: "custom-job-campaigns",
      id: "custom-job-campaigns",
      title: "Custom Job Campaigns & Targeted Applications",
      kicker: "06 / CAMPAIGN",
      tag: "Campaign",
      shortDesc: "Targeted, curated opportunities built around your strengths — not mass-applying to hundreds of dead postings.",
      heroHeadline: "Execute a disciplined, data-driven job search campaign across premier US opportunities.",
      targetAudience: [
        "Busy working professionals with zero time to browse 50 job boards every evening",
        "Job seekers exhausted by 500+ generic 'Easy Apply' submissions with zero replies",
        "International professionals needing filtered roles with known sponsorship openness",
        "Specialists seeking roles across remote, hybrid, and specific US metropolitan hubs",
      ],
      problemsAddressed: [
        "Mass-application fatigue and 'black hole' ATS submission tracking",
        "Wasting time on ghost job listings that companies keep open without hiring budgets",
        "Missing the critical first 48-hour application window when fresh roles go live",
        "Disorganized tracking of multiple recruiter conversations across disparate portals",
      ],
      benefits: [
        "Daily human-curated opportunity matching tailored to your salary and visa parameters",
        "Applications submitted within hours of listing to guarantee early candidate queue placement",
        "Centralized Kanban dashboard tracking every application status, contact, and date",
        "Strict consent protocol: we never apply without your explicit role confirmation",
      ],
      deliverables: [
        "Dedicated Job Campaign Manager assigned to your search",
        "Weekly Curated Shortlist of 25–40 high-probability US requisitions",
        "Live Interactive Application Kanban Tracker with real-time status updates",
        "Hiring Manager Boolean Search & Outreach List for warm networking",
      ],
      process: [
        { step: "01", title: "Search Parameter Definition", desc: "Establish strict salary floors, locations, tech stacks, and company stages." },
        { step: "02", title: "Daily Sourcing & Filtering", desc: "Filter through verified openings, hiring team updates, and partner boards." },
        { step: "03", title: "Targeted Submission", desc: "Customize key resume highlights for each role and submit through official channels." },
        { step: "04", title: "Pipeline Tracking & Follow-up", desc: "Monitor response rates, trigger polite recruiter follow-ups, and schedule interviews." },
      ],
      faqs: [
        { q: "Do you use bots to auto-apply to thousands of jobs?", a: "No. Bot spam leads to automated blacklists. Every application is reviewed by human search specialists to ensure perfect alignment." },
        { q: "Do I have to approve jobs before you apply?", a: "Yes! You retain 100% control over which companies receive your resume and credentials." },
      ],
      relatedServices: ["us-market-placement-support", "resume-rebranding", "interview-preparation"],
    },
    {
      slug: "us-market-placement-support",
      id: "placement-support",
      title: "US Market Exposure & Placement Support",
      kicker: "07 / PLACEMENT",
      tag: "Placement",
      shortDesc: "Market positioning, client and MSP network exposure, offer evaluation, and comprehensive post-placement onboarding.",
      heroHeadline: "Connect with verified hiring channels and thrive through your first year in the US market.",
      targetAudience: [
        "Candidates seeking access to corporate MSPs, Fortune 500 vendors, and Tier-1 staffing networks",
        "Job seekers who need experienced offer evaluation, benefits review, and background check guidance",
        "Newly placed employees navigating US workplace culture, standups, and performance milestones",
        "International hires wanting 6–12 months of sustained career advisory after joining",
      ],
      problemsAddressed: [
        "Difficulty breaking through to hidden corporate MSP and direct-vendor contract-to-hire pipelines",
        "Confusion around complex US offer letters, W2 vs C2C terms, health benefits, and PTO structures",
        "Anxiety during the first 90 days of onboarding and high-visibility team integrations",
        "Sudden isolation once a placement occurs without ongoing career mentorship",
      ],
      benefits: [
        "Direct visibility across CX CODEX TECH-IT's US client and recruiting partner ecosystem",
        "Comprehensive offer breakdown, compensation modeling, and legal clause review",
        "Step-by-step guidance through I-9 verification, background checks, and drug screens",
        "Ongoing 6 to 12 months post-placement check-ins to support your first performance review",
      ],
      deliverables: [
        "Candidate Placement Briefing Package distributed to verified US partner accounts",
        "Offer Evaluation Matrix comparing base, bonus, 401(k), and equity packages",
        "First 90 Days Onboarding Survival Blueprint for high-performing US tech teams",
        "Quarterly Post-Placement Check-in Calls during your first full employment year",
      ],
      process: [
        { step: "01", title: "Candidate Readiness Certification", desc: "Verify resume, LinkedIn, and mock interview benchmark scores." },
        { step: "02", title: "Partner Network Submission", desc: "Circulate profile to active recruiters, MSP managers, and client hiring desks." },
        { step: "03", title: "Offer Review & Formalities", desc: "Audit written offer terms, assist with I-9 verification and background check documentation." },
        { step: "04", title: "Post-Placement Mentorship", desc: "Quarterly advisory sessions to support your on-the-job excellence and career expansion." },
      ],
      faqs: [
        { q: "Is CX CODEX TECH-IT an employer of record or a staffing agency?", a: "CX CODEX TECH-IT provides career infrastructure and placement partnership. Depending on the engagement, we connect candidates with client direct-hire roles or partner staffing arrangements." },
        { q: "Do you sponsor H-1B visas directly?", a: "CX CODEX TECH-IT does not make immigration guarantees. We connect candidates with employers and MSP partners who have established immigration sponsorship programs where authorized by law." },
      ],
      relatedServices: ["custom-job-campaigns", "interview-preparation", "career-strategy-planning"],
    },
    {
      slug: "job-placement",
      id: "job-placement",
      title: "Job Placement & Direct Hire Solutions",
      kicker: "08 / DIRECT PLACEMENT",
      tag: "Placement",
      shortDesc: "End-to-end direct hire placement connecting verified tech talent with Tier-1 enterprise employers and corporate MSP channels.",
      heroHeadline: "Accelerate your US job placement with targeted introductions and interview loops.",
      targetAudience: [
        "Software engineers, cloud architects, and data leads seeking permanent US placement",
        "STEM OPT candidates needing verified corporate employers compliant with federal regulations",
        "Experienced professionals looking to break into $140k–$220k compensation bands",
      ],
      problemsAddressed: [
        "Endless resume black holes with zero recruiter follow-ups",
        "Unclear salary benchmark data leading to undervalued compensation packages",
        "Difficulties accessing closed vendor / MSP hiring pipelines",
      ],
      benefits: [
        "Direct presentation to vetted hiring managers and MSP vendor managers",
        "Pre-interview briefing packages with hiring manager interview priorities",
        "Negotiation coaching on base salary, sign-on bonus, and equity grants",
      ],
      deliverables: [
        "Verified Candidate Placement Dossier",
        "Target Employer Submission Tracker",
        "Direct Interview Coordination & Follow-up Desk",
        "Written Offer Audit and Negotiation Advisory",
      ],
      process: [
        { step: "01", title: "Technical Verification", desc: "Benchmark coding, system design, and behavioral STAR stories." },
        { step: "02", title: "Target Pipeline Curation", desc: "Identify 15-25 active corporate requisitions matching your exact stack." },
        { step: "03", title: "Direct Partner Submission", desc: "Submit your profile directly to decision-makers with personalized endorsements." },
        { step: "04", title: "Offer Finalization", desc: "Review employment contracts, health benefits, and onboarding roadmaps." },
      ],
      faqs: [
        { q: "How quickly do candidates get placed?", a: "Most candidates complete their campaigns and secure written offers within 45 to 90 days." },
        { q: "Are roles remote or onsite?", a: "We place talent in remote USA, hybrid, and onsite roles across major US tech hubs including New York, Austin, Bay Area, and Chicago." },
      ],
      relatedServices: ["recruitment-staffing", "career-strategy-planning", "placement-support"],
    },
    {
      slug: "recruitment-staffing",
      id: "recruitment-staffing",
      title: "Technical Staffing & Contractor Sourcing",
      kicker: "09 / STAFFING",
      tag: "Staffing",
      shortDesc: "Scalable W2, 1099, and C2C contract staffing providing agile engineering capacity for high-growth tech firms.",
      heroHeadline: "Deploy elite contract engineering teams without hiring delays or compliance friction.",
      targetAudience: [
        "US employers requiring rapid engineering capacity for critical sprint milestones",
        "MSP programs seeking compliant Tier-1 staffing suppliers with transparent markups",
        "Specialized contract software developers, DevOps engineers, and cloud architects",
      ],
      problemsAddressed: [
        "Lengthy 60+ day recruitment cycles for niche technical skill sets",
        "Payroll, worker classification, and state compliance overhead",
        "High attrition rates among unvetted contractor hires",
      ],
      benefits: [
        "48-hour delivery of fully vetted, interview-ready engineering candidates",
        "E-Verify and background verification guaranteed on all deployed talent",
        "Flexible contract-to-hire options with transparent conversion terms",
      ],
      deliverables: [
        "48-Hour Shortlist with technical code review recordings",
        "Complete I-9 & E-Verify Compliance Package",
        "Automated Timesheet & Bi-Weekly Billing Infrastructure",
        "Dedicated Account Delivery Manager",
      ],
      process: [
        { step: "01", title: "Requisition Intake", desc: "Define technical deliverables, team culture, and budget parameters." },
        { step: "02", title: "Precision Matching", desc: "Filter through CX Codex's active network of 2,200+ pre-assessed engineers." },
        { step: "03", title: "Client Interviews", desc: "Direct video interviews with your engineering leadership team." },
        { step: "04", title: "Rapid Onboarding", desc: "Complete background checks, equipment setup, and day-one standup integration." },
      ],
      faqs: [
        { q: "What contract durations do you support?", a: "We support short-term projects (3 to 6 months), long-term contracts (12+ months), and contract-to-hire models." },
        { q: "How do you verify contractor qualifications?", a: "Every engineer passes our proprietary 4-pillar benchmark: code evaluation, system design audit, reference check, and background verification." },
      ],
      relatedServices: ["job-placement", "talent-acquisition", "background-verification-compliance"],
    },
    {
      slug: "talent-acquisition",
      id: "talent-acquisition",
      title: "Full-Cycle Talent Acquisition Solutions",
      kicker: "10 / TALENT ACQUISITION",
      tag: "Enterprise",
      shortDesc: "Comprehensive executive and technical talent acquisition partnerships embedded directly into your hiring workflow.",
      heroHeadline: "Build world-class engineering organizations with institutional talent acquisition support.",
      targetAudience: [
        "High-growth startups scaling from Series A to Series C",
        "Enterprise technology organizations modernizing legacy tech stacks",
        "Hiring managers seeking senior, staff, and principal engineering leaders",
      ],
      problemsAddressed: [
        "Internal recruiting teams overwhelmed by low-quality outbound applicant volume",
        "Difficulty assessing specialized domain expertise (Distributed Systems, GenAI, MLOps)",
        "High cost-per-hire and agency fee inflation without performance accountability",
      ],
      benefits: [
        "Reduced time-to-hire by 65% with curated pipeline delivery",
        "Rigorous technical pre-screening by practicing senior architects",
        "Guaranteed 90-day replacement warranty on all permanent placements",
      ],
      deliverables: [
        "Custom Talent Acquisition Pipeline Dashboard",
        "Technical Competency Rubric Reports for every candidate",
        "Market Compensation Benchmarking Reports",
        "Executive Offer Closing Strategy Sessions",
      ],
      process: [
        { step: "01", title: "Strategy Session", desc: "Map team objectives, tech stack roadmap, and compensation benchmarks." },
        { step: "02", title: "Targeted Sourcing", desc: "Deploy boolean sourcing, talent intelligence databases, and private networks." },
        { step: "03", title: "Architect-Led Screening", desc: "Our senior technical advisors conduct in-depth coding and architectural interviews." },
        { step: "04", title: "Placement & Closing", desc: "Facilitate candidate debriefs, offer structuring, and candidate acceptance." },
      ],
      faqs: [
        { q: "What roles do you specialize in?", a: "Software Engineering (Go, Java, Python, TypeScript), Cloud Architecture, SRE/DevOps, Data Engineering, Machine Learning, and Cybersecurity." },
        { q: "Do you offer retained or contingent searches?", a: "We offer flexible engagement models tailored to your volume and executive seniority requirements." },
      ],
      relatedServices: ["recruitment-staffing", "job-placement", "background-verification-compliance"],
    },
    {
      slug: "it-training-skill-development",
      id: "it-training",
      title: "IT Training & Commercial Skill Sprints",
      kicker: "11 / UPSKILLING",
      tag: "Training",
      shortDesc: "Intensive 4 to 8-week production workshops covering Kubernetes, Terraform, Go microservices, dbt, Snowflake, and system design.",
      heroHeadline: "Bridge the gap between theoretical knowledge and production-grade engineering excellence.",
      targetAudience: [
        "Junior and mid-level developers transitioning into cloud-native engineering",
        "Computer science graduates lacking enterprise CI/CD and deployment experience",
        "Engineers pivoting from legacy stacks into modern cloud, data, and AI ecosystems",
      ],
      problemsAddressed: [
        "Coursework projects that fail to impress senior hiring managers",
        "Lack of hands-on experience with production outages, scaling bottlenecks, and monitoring",
        "Inability to articulate trade-offs in high-stakes system design interview loops",
      ],
      benefits: [
        "Build 3 production-grade portfolio projects deployed live to AWS/GCP",
        "Weekly 1-on-1 code reviews with practicing senior engineers",
        "Direct integration into CX Codex's candidate placement pipeline upon sprint graduation",
      ],
      deliverables: [
        "Production Git Repositories with real-world infrastructure code",
        "System Design Blueprint Library (20+ enterprise architecture patterns)",
        "Technical Readiness Benchmark Certificate",
        "Recorded Mock Interview Loops with line-by-line feedback",
      ],
      process: [
        { step: "01", title: "Baseline Diagnostic", desc: "Assess algorithmic, architectural, and cloud fundamentals." },
        { step: "02", title: "Architecture Sprints", desc: "Build distributed microservices with containerization and IaC." },
        { step: "03", title: "Production Hardening", desc: "Implement observability (Prometheus/Grafana), security, and CI/CD." },
        { step: "04", title: "Interview Simulation", desc: "Execute multi-round technical interview loops with senior staff mentors." },
      ],
      faqs: [
        { q: "Are courses live or self-paced?", a: "All tracks feature live weekend architectural deep dives combined with asynchronous coding sprints and 1-on-1 office hours." },
        { q: "What is the expected weekly time commitment?", a: "8 to 12 hours per week, designed specifically for working professionals and full-time students." },
      ],
      relatedServices: ["technical-skill-preparation", "interview-preparation", "career-strategy-planning"],
    },
    {
      slug: "background-verification-compliance",
      id: "background-verification",
      title: "Background Verification & US Work Authorization",
      kicker: "12 / COMPLIANCE",
      tag: "Compliance",
      shortDesc: "Rigorous E-Verify, SSA verification, criminal background auditing, and Form I-9 compliance management for candidates and employers.",
      heroHeadline: "Institutional compliance safeguards ensuring 100% audit-proof hiring.",
      targetAudience: [
        "US employers and corporate MSPs needing reliable background clearance",
        "International STEM OPT and H-1B candidates requiring verified I-9 processing",
        "Staffing firms seeking centralized background check management",
      ],
      problemsAddressed: [
        "Delayed candidate start dates due to slow 3rd-party background screening turnaround",
        "Severe fines and legal liabilities from improper Form I-9 completion",
        "Fraudulent employment claims or falsified candidate documentation",
      ],
      benefits: [
        "Fast 48 to 72-hour average background turnaround timeline",
        "Direct E-Verify electronic employment verification integration",
        "Comprehensive 7-year county, state, and federal criminal records checks",
      ],
      deliverables: [
        "Comprehensive Background Check Dossier",
        "Electronic Form I-9 & E-Verify Case Audit Record",
        "Education & Degree Credential Verification Report",
        "Previous Employment & Reference Verification Summary",
      ],
      process: [
        { step: "01", title: "Candidate Consent & Intake", desc: "Secure electronic authorization and encrypted identity documents." },
        { step: "02", title: "Federal & State Verification", desc: "Initiate E-Verify queries, SSN traces, and criminal history sweeps." },
        { step: "03", title: "Education & Credential Audit", desc: "Direct verification with accredited universities and registrar clearinghouses." },
        { step: "04", title: "Compliance Package Delivery", desc: "Deliver audit-ready compliance package to employer HR/MSP desks." },
      ],
      faqs: [
        { q: "Is CX CODEX TECH-IT an enrolled E-Verify employer?", a: "Yes. CX CODEX TECH-IT is a fully registered E-Verify participant adhering to federal Department of Homeland Security standards." },
        { q: "How are candidate records secured?", a: "All personal identifiers and documents are encrypted with AES-256 at rest and TLS 1.3 in transit." },
      ],
      relatedServices: ["recruitment-staffing", "talent-acquisition", "job-placement"],
    },
  ] as ServiceItem[],

  industries: [
    {
      id: "fintech-banking",
      slug: "fintech-financial-services",
      title: "FinTech & Financial Services",
      kicker: "01 / INDUSTRY",
      shortDesc: "High-frequency trading, payment rails, digital assets, and core banking infrastructure requiring low latency and ultra-high reliability.",
      heroHeadline: "Placing elite engineers across US capital markets, payment platforms, and digital banking leaders.",
      avgComp: "$165,000 – $225,000",
      activeDemand: "Extremely High (420+ Partner Requisitions)",
      keyRoles: [
        "Senior Distributed Systems Engineer (Go / Java)",
        "Low-Latency Trading Infrastructure Architect",
        "FinTech Security & PCI-DSS Compliance Engineer",
        "Quantitative Data & Risk Analytics Engineer",
      ],
      inDemandStacks: ["Go", "Java 21", "Kafka", "PostgreSQL", "Redis", "AWS Cloud", "gRPC", "Docker"],
      hiringHubs: ["New York, NY", "Chicago, IL", "Charlotte, NC", "Austin, TX", "Remote USA"],
      challengesAddressed: [
        "Strict regulatory frameworks requiring zero-tolerance security standards",
        "Microsecond latency constraints demanding deep systems knowledge",
        "Complex legacy modernization into event-driven cloud microservices",
      ],
      codexIntervention: [
        "Benchmark candidates on concurrent data structures and transactional isolation",
        "Verify candidate understanding of FinTech audit trails and security compliance",
        "Direct submission to Tier-1 financial MSPs and Wall Street tech vendors",
      ],
      deliverables: [
        "FinTech Architectural Case Study Portfolio",
        "Low-Latency Concurrency Benchmark Score",
        "Targeted Submission to 15+ Top Financial Tech Desks",
      ],
    },
    {
      id: "cloud-infrastructure",
      slug: "cloud-infrastructure-devops",
      title: "Cloud Infrastructure, SRE & Platform Engineering",
      kicker: "02 / INDUSTRY",
      shortDesc: "Multi-cloud architecture, platform engineering, Kubernetes orchestration, and automated CI/CD for enterprise scale.",
      heroHeadline: "Connecting world-class cloud architects and SREs with high-velocity tech firms.",
      avgComp: "$160,000 – $215,000",
      activeDemand: "Critical Demand (580+ Active Openings)",
      keyRoles: [
        "Senior Site Reliability Engineer (SRE)",
        "Cloud Platform & Infrastructure Architect (AWS/GCP)",
        "Kubernetes & Container Orchestration Specialist",
        "DevSecOps & Infrastructure as Code (IaC) Lead",
      ],
      inDemandStacks: ["Kubernetes", "Terraform", "AWS / GCP", "Python", "Go", "Prometheus", "ArgoCD", "Helm"],
      hiringHubs: ["San Francisco, CA", "Seattle, WA", "Austin, TX", "New York, NY", "Remote USA"],
      challengesAddressed: [
        "Cloud sprawl and spiraling infrastructure operational costs (FinOps)",
        "Production reliability risks during major deployment cycles",
        "Shortage of architects who understand deep Linux internals and networking",
      ],
      codexIntervention: [
        "1-on-1 production outage post-mortem simulations with senior mentors",
        "Terraform & Kubernetes cluster architecture portfolio review",
        "Direct presentation to enterprise cloud MSP hiring managers",
      ],
      deliverables: [
        "Multi-Cloud Production Portfolio Repo",
        "Terraform Enterprise Best-Practices Audit Score",
        "Targeted Outreach to 20+ Enterprise Infrastructure Teams",
      ],
    },
    {
      id: "ai-data-intelligence",
      slug: "ai-data-engineering",
      title: "Artificial Intelligence, Data Engineering & MLOps",
      kicker: "03 / INDUSTRY",
      shortDesc: "Enterprise LLM integration, lakehouse data pipelines, real-time streaming, and MLOps at planetary scale.",
      heroHeadline: "Powering the future of enterprise intelligence with pre-vetted AI and data engineers.",
      avgComp: "$170,000 – $235,000",
      activeDemand: "Exponential Growth (650+ Active Roles)",
      keyRoles: [
        "Senior Data Platform Engineer (Snowflake / dbt)",
        "Machine Learning Infrastructure (MLOps) Architect",
        "Real-Time Streaming Pipeline Developer (Spark / Flink)",
        "Generative AI & Vector Search Systems Engineer",
      ],
      inDemandStacks: ["Python", "Snowflake", "dbt", "PySpark", "Kafka", "Vector DBs (Pinecone/Milvus)", "LangChain", "Databricks"],
      hiringHubs: ["San Francisco, CA", "New York, NY", "Boston, MA", "Seattle, WA", "Remote USA"],
      challengesAddressed: [
        "Unreliable data lakes leading to dirty metrics and broken models",
        "High inference latency and GPU compute budget waste",
        "Shortage of data engineers who bridge software engineering with data modeling",
      ],
      codexIntervention: [
        "Verify end-to-end data pipeline code quality and testing practices",
        "Coach on modern Lakehouse architectures, medallion patterns, and dbt models",
        "Connect directly with AI startup founders and Fortune 500 Chief Data Officers",
      ],
      deliverables: [
        "Full-Stack Data Engineering Pipeline Showcase",
        "Distributed Computing & SQL Optimization Benchmark",
        "Placement Match into Verified Enterprise Data Teams",
      ],
    },
    {
      id: "cybersecurity-identity",
      slug: "cybersecurity-risk-compliance",
      title: "Cybersecurity, Zero Trust & Risk Compliance",
      kicker: "04 / INDUSTRY",
      shortDesc: "Threat intelligence, cloud posture management (CSPM), identity governance (IAM), and compliance with SOC 2, FedRAMP & ISO 27001.",
      heroHeadline: "Securing modern enterprise ecosystems with elite cybersecurity and compliance talent.",
      avgComp: "$155,000 – $210,000",
      activeDemand: "Very High (380+ Openings)",
      keyRoles: [
        "Cloud Security & DevSecOps Specialist",
        "Identity & Access Management (IAM) Architect",
        "Security Operations Center (SOC) Lead / Threat Hunter",
        "Information Security Compliance & GRC Director",
      ],
      inDemandStacks: ["Splunk", "AWS Security Hub", "Prisma Cloud", "Okta", "Python", "CrowdStrike", "Terraform", "Linux"],
      hiringHubs: ["Washington, DC / Northern VA", "New York, NY", "Dallas, TX", "Denver, CO", "Remote USA"],
      challengesAddressed: [
        "Rising frequency of sophisticated credential-based attacks and ransomware",
        "Complex multi-cloud environments with misconfigured permission boundaries",
        "Strict regulatory scrutiny requiring ongoing audit readiness",
      ],
      codexIntervention: [
        "Audit candidate proficiency in threat modeling and incident response",
        "Train on least-privilege IAM policies and automated compliance scanning",
        "Introduce candidates to security-first enterprise defense contractors and fintechs",
      ],
      deliverables: [
        "Cloud Security Architecture Audit Portfolio",
        "Threat Modeling & STAR Incident Storybank",
        "Fast-Track Submission to Vetted US Security Teams",
      ],
    },
    {
      id: "healthtech-informatics",
      slug: "healthtech-informatics",
      title: "HealthTech, Healthcare Systems & Informatics",
      kicker: "05 / INDUSTRY",
      shortDesc: "HIPAA-compliant cloud architecture, electronic medical records (EHR) interoperability, telemedicine, and healthcare analytics.",
      heroHeadline: "Bridging healthcare innovation with high-caliber software and data engineering.",
      avgComp: "$150,000 – $195,000",
      activeDemand: "Steady High Demand (310+ Roles)",
      keyRoles: [
        "Healthcare Full Stack Engineer (React / Python)",
        "Clinical Data & HL7/FHIR Integration Specialist",
        "HIPAA Cloud Security & Infrastructure Lead",
        "Biomedical Analytics & Research Software Developer",
      ],
      inDemandStacks: ["Python", "TypeScript", "FHIR / HL7", "PostgreSQL", "AWS HealthLake", "React", "Docker", "Terraform"],
      hiringHubs: ["Boston, MA", "Nashville, TN", "Minneapolis, MN", "Research Triangle, NC", "Remote USA"],
      challengesAddressed: [
        "Rigid regulatory compliance (HIPAA, HITECH, FDA Software as a Medical Device)",
        "Fragmented legacy EHR systems with poor API documentation",
        "Urgent need for patient data privacy combined with high availability",
      ],
      codexIntervention: [
        "Coach candidates on FHIR interoperability and encrypted data handling",
        "Prepare STAR answers highlighting clinical data integrity and uptime",
        "Direct connection to top healthtech vendors and hospital networks",
      ],
      deliverables: [
        "HIPAA-Compliant Microservice Sample Architecture",
        "Clinical Data Integration Readiness Assessment",
        "Direct Placement Support with HealthTech Hiring Managers",
      ],
    },
    {
      id: "enterprise-saas",
      slug: "enterprise-saas",
      title: "Enterprise SaaS, E-Commerce & Scaled Systems",
      kicker: "06 / INDUSTRY",
      shortDesc: "High-concurrency web platforms, microservices architecture, multi-tenant billing systems, and global content delivery.",
      heroHeadline: "Staffing engineering organizations that power mission-critical software used by millions.",
      avgComp: "$155,000 – $215,000",
      activeDemand: "High Volume (500+ Active Roles)",
      keyRoles: [
        "Senior Full Stack Engineer (React / Next.js / Node)",
        "Distributed Backend Engineer (Java / Go)",
        "Microservices & API Platform Architect",
        "High-Traffic Database & Cache Optimization Specialist",
      ],
      inDemandStacks: ["TypeScript", "Next.js", "Go", "Java", "PostgreSQL", "Redis", "Kafka", "AWS Cloud"],
      hiringHubs: ["San Francisco, CA", "New York, NY", "Austin, TX", "Seattle, WA", "Remote USA"],
      challengesAddressed: [
        "Scaling relational and distributed databases to millions of monthly active users",
        "Maintaining high availability (99.99%) during high-traffic flash sales and peak events",
        "Managing technical debt while shipping rapid commercial features",
      ],
      codexIntervention: [
        "Benchmark candidates on system design, database indexing, and caching layers",
        "Refine resume bullets to demonstrate commercial revenue and user-scale impact",
        "Targeted introductions to SaaS hiring managers and enterprise tech vendors",
      ],
      deliverables: [
        "Full-Stack High-Concurrency Portfolio Review",
        "System Design Mock Interview Recording with Senior Staff Mentor",
        "Direct Placement Pipeline into Top Tier-1 SaaS Companies",
      ],
    },
  ] as IndustryItem[],

  plans: [
    {
      id: "us-career-ready",
      slug: "us-career-ready",
      name: "US Career Ready",
      tagline: "For candidates who need a robust foundation before entering the US market.",
      idealFor: "Entry to mid-level professionals and STEM graduates seeking a professional launchpad.",
      commitment: "4–6 Weeks Structured Sprints",
      pricingNote: "Transparent pricing confirmed upon intake profile evaluation.",
      supportScope: "Foundation & Positioning",
      features: [
        "1-on-1 Comprehensive Career Strategy Session",
        "Complete ATS Resume Rebrand (Word & PDF)",
        "LinkedIn Profile Optimization Deck & Banner",
        "Personalized 60-Day Action Roadmap",
        "Access to Assessment Tools & Rubric Reports",
        "Email & Asynchronous Advisor Support",
      ],
      deliverables: [
        "ATS-Certified Resume in Word & PDF",
        "Custom LinkedIn Header & Profile Rewrite",
        "US Tech Market Readiness Evaluation Report",
        "Standard Interview Preparation Starter Guide",
      ],
    },
    {
      id: "us-career-accelerator",
      slug: "us-career-accelerator",
      name: "US Career Accelerator",
      popular: true,
      tagline: "For candidates who want structured preparation, targeted applications, and interview coaching.",
      idealFor: "Engineers, analysts, and project managers aiming for high-velocity US job placement.",
      commitment: "8–12 Weeks Active Campaign",
      pricingNote: "Customized according to target seniority and search parameters.",
      supportScope: "Comprehensive Preparation & Campaign Execution",
      features: [
        "Everything in US Career Ready",
        "Dedicated Job Campaign Manager",
        "Weekly Hand-Curated Application Shortlists (25–40 roles)",
        "2 One-on-One Recorded Technical/Behavioral Mock Interviews",
        "STAR Story Bank Development & Review",
        "System Design or Stack-Specific Mentorship Sessions",
        "Real-time Application Kanban Board Access",
        "Priority Slack / WhatsApp Advisor Access",
      ],
      deliverables: [
        "Executive ATS Resume & Cover Letter Suite",
        "Rebranded LinkedIn Presence with Recruiter Optimization",
        "Two 60-Min Recorded Mock Interviews with Rubrics",
        "Customized Application Pipeline Management",
        "Salary Negotiation & Counter-Offer Playbook",
      ],
    },
    {
      id: "career-support-partner",
      slug: "career-support-partner",
      name: "Career Support Partner",
      tagline: "For candidates who want hands-on, end-to-end guidance through placement and beyond.",
      idealFor: "Senior professionals, career switchers, and international talent requiring maximum support.",
      commitment: "Up to 6 Months Campaign + 12 Months Post-Placement Care",
      pricingNote: "Retainer & performance-aligned structures available upon consultation.",
      supportScope: "End-to-End Partnership & Onboarding Support",
      features: [
        "Everything in US Career Accelerator",
        "Direct Visibility Across CX CODEX TECH-IT US Client & MSP Networks",
        "Unlimited Mock Interviews prior to Client Rounds",
        "Pre-Interview Strategy Pep Calls before critical super-days",
        "Complete Written Offer & Benefits Evaluation",
        "I-9 Verification, Onboarding, and Background Check Advisory",
        "6–12 Months Post-Placement Career Advisory & Review Support",
        "Executive Mentor Assigned for Ongoing Check-ins",
      ],
      deliverables: [
        "Full Career Infrastructure & Multi-Version Resume Portfolio",
        "Comprehensive Partner Network Candidate Briefing",
        "Unlimited On-Demand Interview Coaching",
        "Formal Offer Negotiation Support",
        "Year-One Workplace Success Blueprint",
      ],
    },
  ] as PlanItem[],

  tools: [
    {
      id: "resume-analyzer",
      slug: "resume-analyzer",
      title: "Resume Analyzer",
      badge: "ATS + KEYWORDS",
      tag: "Resume",
      headline: "Scan your resume against modern ATS parsing rules and recruiter criteria.",
      description: "Upload a PDF/DOCX or paste resume text for a granular breakdown of contact completeness, structure, active verbs, quantified results, and keyword density.",
      metrics: ["Contact & Layout", "Action Verbs", "Quantified Metrics", "ATS Readability", "Keyword Match"],
    },
    {
      id: "linkedin-profile-analyzer",
      slug: "linkedin-profile-analyzer",
      title: "LinkedIn Profile Analyzer",
      badge: "POSITIONING + VISIBILITY",
      tag: "LinkedIn",
      headline: "Evaluate how recruiters see your LinkedIn headline, About section, and core skills.",
      description: "Analyze your headline clarity, keyword coverage, and professional positioning to unlock higher search rankings in LinkedIn Recruiter.",
      metrics: ["Headline Strength", "Keyword Presence", "Value Proposition", "Readability", "Call to Action"],
    },
    {
      id: "job-match-score",
      slug: "job-match-score",
      title: "Job Match Score",
      badge: "RESUME ↔ ROLE FIT",
      tag: "Match",
      headline: "Compare your resume directly against an active US job description.",
      description: "Get an explainable match percentage, missing keyword alerts, hard/soft skill breakdown, and tactical recommendations to bridge the gap before applying.",
      metrics: ["Hard Skills Overlap", "Experience Level Alignment", "Missing High-Value Keywords", "Domain Relevance"],
    },
    {
      id: "interview-readiness",
      slug: "interview-readiness",
      title: "Interview Readiness",
      badge: "TECHNICAL + BEHAVIORAL",
      tag: "Readiness",
      headline: "Assess your readiness across behavioral loops and technical problem-solving.",
      description: "Input your target role, years of experience, and key concerns to receive an instant customized preparation checklist, 10 STAR practice questions, and prioritized study tracks.",
      metrics: ["STAR Framework Readiness", "Technical Depth", "Conciseness Score", "Confidence Index"],
    },
  ],

  audiences: [
    {
      slug: "students-graduates",
      id: "students",
      title: "Students & Fresh Graduates",
      badge: "01 / EARLY CAREER",
      tagline: "Build your first professional bridge into the competitive US tech workforce.",
      challenges: [
        "Overcoming the 'need experience to get experience' circular barrier",
        "Translating academic coursework and capstone projects into commercial value",
        "Managing tight OPT, CPT, and F-1 grace period employment countdowns",
        "Navigating entry-level ATS filters that screen out generic student resumes",
      ],
      solutions: [
        "Rebuilding resumes around real-world software architecture and Git contributions",
        "Targeted applications to employers actively hiring junior STEM talent",
        "Intensive behavioral coaching to outshine other entry-level applicants",
        "Structured timeline planning aligned with your USCIS work authorization windows",
      ],
      recommendedPlan: "us-career-ready",
      recommendedTools: ["resume-analyzer", "interview-readiness"],
    },
    {
      slug: "experienced-professionals",
      id: "experienced",
      title: "Experienced Professionals",
      badge: "02 / PROFESSIONALS",
      tagline: "Position your senior expertise for higher-visibility and compensation in the US market.",
      challenges: [
        "Executive resumes that read like dense task lists rather than strategic business leadership",
        "Struggling to break into top-tier compensation brackets ($150k–$250k+)",
        "Outdated LinkedIn profiles that don't trigger inbound recruiter inquiries",
        "Navigating complex multi-stage behavioral super-days and system design panels",
      ],
      solutions: [
        "Architect-level resume branding highlighting cost savings, scale, and team leadership",
        "Targeted job campaigns across high-growth enterprise and mid-market innovators",
        "Advanced distributed systems and architectural mock interview preparation",
        "Strategic salary negotiation and multiple-offer leverage consulting",
      ],
      recommendedPlan: "us-career-accelerator",
      recommendedTools: ["linkedin-profile-analyzer", "job-match-score"],
    },
    {
      slug: "career-switchers",
      id: "switchers",
      title: "Career Switchers",
      badge: "03 / CAREER SWITCH",
      tagline: "Translate your existing domain strengths into an in-demand technology career.",
      challenges: [
        "Recruiters viewing past non-tech experience as irrelevant noise",
        "Imposter syndrome during technical interviews with computer science graduates",
        "Difficulty explaining career pivots in a 60-second elevator pitch",
        "Building a credible portfolio without 5 years of commercial software titles",
      ],
      solutions: [
        "Functional, hybrid resume rebranding showcasing transferable domain authority",
        "Cohesive career narrative tying your past industry to your new tech specialization",
        "Mentorship on enterprise case studies and practical production deployment",
        "Curated job campaigns targeting companies where your industry background is an asset",
      ],
      recommendedPlan: "us-career-accelerator",
      recommendedTools: ["job-match-score", "resume-analyzer"],
    },
    {
      slug: "international-professionals",
      id: "international",
      title: "International Professionals",
      badge: "04 / GLOBAL TALENT",
      tagline: "Navigate US hiring standards, communication nuances, and market expectations.",
      challenges: [
        "Foreign resume formats (photos, marital status, DOB) instantly rejected by US compliance",
        "Unfamiliarity with American behavioral interview expectations and self-advocacy",
        "Identifying US employers open to visa transfers (H-1B, L-1, TN, O-1)",
        "Cultural hesitation in marketing personal accomplishments proactively",
      ],
      solutions: [
        "Strict adaptation to US EEOC-compliant, single-page or two-page resume formats",
        "American corporate communication and STAR storytelling masterclasses",
        "Targeted campaigns filtering for sponsorship-friendly employers and MSP networks",
        "End-to-end guidance from offer review through US relocation and onboarding",
      ],
      recommendedPlan: "career-support-partner",
      recommendedTools: ["linkedin-profile-analyzer", "interview-readiness"],
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "Kanishka Shekhar",
      role: "Placed at Pethealth Inc.",
      avatar: "KS",
      quote:
        "The LinkedIn branding and profile optimization done by CX CODEX brought me visibility in the market. Their soft skills training gave me the edge I needed to secure my role at Pethealth Inc.",
      verified: true,
      category: "Software Engineering",
    },
    {
      id: "t2",
      name: "CX Codex Candidate",
      role: "Career Transition Support · Cloud Solutions",
      avatar: "WC",
      quote:
        "CX Codex helped me understand how to present my experience for the US market. The preparation and interview support made the entire process much more structured.",
      verified: true,
      category: "Cloud Architecture",
    },
    {
      id: "t3",
      name: "CX Codex Candidate",
      role: "Placement Journey · Senior Data Engineer",
      avatar: "WC",
      quote:
        "The process felt personal rather than generic. From profile positioning to interview preparation, I always knew what the next step was.",
      verified: true,
      category: "Data Engineering",
    },
  ],

  blogs: [
    {
      slug: "how-to-beat-modern-ats-systems-in-2026",
      title: "How to Beat Modern ATS Systems in 2026: The Definitive Tech Guide",
      excerpt: "Why graphics, columns, and buzzword stuffing destroy your chances — and how linear semantic resumes pass Workday, Taleo, and Greenhouse with 95%+ fidelity.",
      category: "Resume Writing",
      author: "CX Codex Editorial Team",
      publishedAt: "March 15, 2026",
      readTime: "7 min read",
      tags: ["ATS", "Resume Tips", "Tech Jobs", "Hiring Algorithms"],
      content: `
Modern Applicant Tracking Systems (ATS) have evolved significantly. While older systems relied strictly on naive exact-string matching, contemporary platforms such as Workday, Greenhouse, and Lever utilize semantic parsers and contextual embeddings to classify candidates.

### 1. The Myth of the "Fancy" Template
Many candidates turn to Canva or design software to build resumes featuring dual columns, graphic progress bars for skills (e.g., 'Python: 4/5 dots'), and custom iconography. To a modern ATS parser, these graphical artifacts produce scrambled text streams, merging your company name with your university degrees or dropping your contact details entirely.

### 2. The XYZ Formula for Technical Bullet Points
Google's famously recommended formula remains the gold standard for high-converting resumes:
> "Accomplished [X], as measured by [Y], by doing [Z]."

Compare these two statements:
- **Weak**: "Worked on microservices for the payment gateway using Java and Spring Boot."
- **Strong**: "Re-architected payment checkout pipeline into 4 event-driven Spring Boot microservices, reducing transaction latency by 38% and supporting 15,000 peak concurrent orders."

### 3. Contextual Keyword Integration
Rather than pasting an invisible block of keywords at the bottom of the page, weave technologies directly into your accomplishments:
- Mention how **Docker** and **Kubernetes** were used in your deployment pipeline.
- Detail the scale of **PostgreSQL** or **MongoDB** clusters you administered.
- Specify your cloud provider (**AWS / GCP / Azure**) and the exact managed services leveraged.
      `,
    },
    {
      slug: "linkedin-recruiter-search-optimization-guide",
      title: "Optimizing Your LinkedIn Profile for US Tech Recruiters",
      excerpt: "Step-by-step instructions on boolean keywords, headline algorithms, and the 'Open to Work' hidden settings that double your recruiter InMails.",
      category: "LinkedIn Optimization",
      author: "CX Codex Career Advisory",
      publishedAt: "March 22, 2026",
      readTime: "6 min read",
      tags: ["LinkedIn", "Personal Branding", "Recruiter Search", "Job Hunt"],
      content: `
US recruiters rarely scroll casually through LinkedIn; they use LinkedIn Recruiter enterprise licenses with strict boolean search queries. If your profile lacks the exact tokens they filter by, you effectively do not exist in their talent pool.

### 1. Your Headline is Your Click-Through Rate
A headline like *"Software Engineer Seeking Opportunities"* signals low demand. Instead, structure your headline with:
\`[Current Title / Core Domain] | [Key Stack] | [Quantified Specialization or Impact]\`
*Example*: \`Senior Full Stack Engineer | React, TypeScript, Node.js, AWS | Scaled High-Traffic SaaS to 2M+ MAU\`

### 2. The About Section: A Narrative That Sells
Use the first three lines of your About section to state:
1. Who you are and your primary technical identity.
2. The scale and complexity of systems you build.
3. The specific roles you are currently excited to explore.

Keep paragraphs short (2–3 sentences) to maintain readability on mobile screens.
      `,
    },
    {
      slug: "cracking-the-behavioral-interview-star-technique",
      title: "Mastering the STAR Technique in High-Stakes Tech Interviews",
      excerpt: "Learn how to structure stories about technical conflict, production outages, and tight deadlines to win over hiring managers.",
      category: "Interview Preparation",
      author: "CX Codex Mock Coaching Desk",
      publishedAt: "April 2, 2026",
      readTime: "8 min read",
      tags: ["STAR Method", "Behavioral Interview", "Soft Skills", "Engineering Culture"],
      content: `
Many brilliant technical candidates fail their interview loops not because they couldn't write code, but because they couldn't clearly articulate how they solve problems, resolve interpersonal disagreements, or handle ambiguity.

### The STAR Framework Breakdown
- **Situation (15%)**: Briefly set the context. What was the company, the business objective, and the immediate constraint?
- **Task (15%)**: What was your specific responsibility? Avoid saying 'we did'; specify what *you* owned.
- **Action (50%)**: The meat of your answer. Walk through the technical trade-offs you evaluated, how you communicated with stakeholders, and how you executed.
- **Result (20%)**: Always close with numbers and business learnings. What was the uptime, latency improvement, or revenue impact?

Prepare at least 6 core stories that can be adapted to questions about leadership, failure, conflict, and tight deadlines.
      `,
    },
    {
      slug: "navigating-the-us-tech-job-market-in-2026",
      title: "The 2026 US Tech Job Market: Trends, MSPs, and Sourcing Strategies",
      excerpt: "A deep dive into remote vs hybrid trends, the rise of managed service providers (MSPs), and how smart candidates secure interviews.",
      category: "US Job Market",
      author: "CX Codex Market Intelligence",
      publishedAt: "April 10, 2026",
      readTime: "9 min read",
      tags: ["US Job Market", "MSP", "Tech Salaries", "Hiring Trends"],
      content: `
The US technology hiring landscape has matured into a multi-tiered ecosystem. Beyond direct company job portals, a substantial percentage of technical hiring occurs through Managed Service Providers (MSPs), vendor management systems (VMS), and prime vendor networks.

### Key Market Realities:
1. **The First 48-Hour Window**: 70% of candidate interviews are scheduled from applications submitted within the first 48 hours of a job opening going live.
2. **Domain Specialization Outweighs Generalism**: Companies are hiring for specific domain knowledge (FinTech, HealthTech, AI infrastructure) rather than generic 'developer' titles.
3. **Hybrid Alignment**: While remote opportunities exist, candidates open to hybrid arrangements in major tech corridors (Bay Area, NYC, Dallas, Austin, Chicago, Atlanta) experience significantly higher interview velocity.
      `,
    },
  ],

  resources: [
    {
      slug: "ats-resume-checklist-2026",
      title: "The Ultimate 2026 ATS Resume Checklist",
      category: "Checklists & Templates",
      format: "PDF Guide & Checklist",
      description: "A 25-point audit checklist covering typography, parsing headers, bullet metrics, and formatting pitfalls before submitting your resume.",
      readTime: "5 min read",
    },
    {
      slug: "behavioral-interview-star-workbook",
      title: "STAR Behavioral Interview Master Workbook",
      category: "Interview Workbooks",
      format: "Interactive Workbook",
      description: "A structured worksheet designed to help you extract, draft, and rehearse 15 high-impact stories across common behavioral interview competencies.",
      readTime: "12 min read",
    },
    {
      slug: "linkedin-headline-and-about-templates",
      title: "20 High-Converting LinkedIn Headlines & About Templates",
      category: "Profile Branding",
      format: "Copy Templates Deck",
      description: "Plug-and-play LinkedIn headline formulas and About section blueprints tailored for frontend, backend, data, and DevOps engineers.",
      readTime: "8 min read",
    },
    {
      slug: "us-tech-salary-negotiation-script",
      title: "US Tech Salary Negotiation & Counter-Offer Scripts",
      category: "Offer & Compensation",
      format: "Script Library",
      description: "Word-for-word scripts for phone calls and emails to negotiate base salary, sign-on bonuses, and equity grants without risking the offer.",
      readTime: "6 min read",
    },
  ],

  faqs: [
    {
      category: "General",
      q: "How can I get started with CX CODEX TECH-IT?",
      a: "Simply schedule a free career consultation through our website. During the call, we assess your background, current positioning, and US market goals, and recommend the most effective support plan.",
    },
    {
      category: "General",
      q: "Do I need a four-year degree to work with CX CODEX TECH-IT?",
      a: "No. CX CODEX TECH-IT values demonstrated skills, commercial experience, and technical potential over formal degrees. Non-traditional backgrounds, bootcamps, and career switchers can all achieve strong outcomes in the US market with the right positioning.",
    },
    {
      category: "General",
      q: "Who is CX CODEX TECH-IT built for?",
      a: "We support students and fresh graduates, experienced professionals, career switchers, and international talent who want a structured, confident path into the US technology job market.",
    },
    {
      category: "Timeline & Results",
      q: "How long does it typically take to get placed?",
      a: "Most candidates complete their campaigns and secure opportunities within 2 to 4 months. The exact timeline depends on your technical domain, responsiveness, market conditions, and interview performance.",
    },
    {
      category: "Services & Support",
      q: "Does CX CODEX TECH-IT submit job applications on my behalf?",
      a: "In our US Career Accelerator and Career Support Partner plans, our dedicated job campaign managers curate, tailor, and submit targeted applications. We adhere strictly to an authorization protocol: we never apply to any company without your explicit prior approval.",
    },
    {
      category: "International & Visa",
      q: "Do you provide visa or immigration guarantees?",
      a: "No. CX CODEX TECH-IT does not provide legal advice or guarantee immigration outcomes. We assist you in identifying employers and staffing partners who sponsor work authorizations (such as OPT STEM extensions, H-1B transfers, or green cards) in compliance with US immigration laws.",
    },
    {
      category: "Employers & Partners",
      q: "How can employers and recruiting partners collaborate with CX CODEX TECH-IT?",
      a: "Employers and staffing partners can submit hiring requirements through our Employer Portal. We provide thoroughly vetted, interview-ready candidates across software engineering, cloud, data, and cybersecurity.",
    },
    {
      category: "Pricing & Terms",
      q: "How does pricing work for CX CODEX TECH-IT support plans?",
      a: "Pricing is transparent and customized to your career stage, target seniority, and the scope of mentorship required. We provide an exact quote and scope of deliverables after reviewing your initial intake assessment.",
    },
  ],
};

export const siteConfig = SITE_CONFIG;
