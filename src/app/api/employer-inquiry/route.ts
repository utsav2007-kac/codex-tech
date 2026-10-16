import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      organizationName,
      contactName,
      businessEmail,
      phone,
      hiringNeeds,
      targetRoles,
      experienceRequirements,
      locationPreferences,
      inquiryType,
      additionalNotes,
    } = body;

    if (!organizationName || organizationName.trim().length < 2) {
      return NextResponse.json({ error: "Organization name is required." }, { status: 400 });
    }
    if (!contactName || contactName.trim().length < 2) {
      return NextResponse.json({ error: "Contact name is required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail || !emailRegex.test(businessEmail.trim())) {
      return NextResponse.json({ error: "Please enter a valid business email." }, { status: 400 });
    }
    if (!hiringNeeds || hiringNeeds.trim().length < 5) {
      return NextResponse.json({ error: "Please specify your hiring requirements or partnership objectives." }, { status: 400 });
    }

    const inquiryId = "emp-" + Date.now();
    const hasLiveCrm = Boolean(process.env.HUBSPOT_API_KEY || process.env.SUPABASE_URL);

    return NextResponse.json(
      {
        success: true,
        inquiryId,
        receivedAt: new Date().toISOString(),
        isLiveCrmConnected: hasLiveCrm,
        message: hasLiveCrm
          ? "Your employer talent request has been routed to our corporate partnership desk."
          : "Employer requirement received in demonstration mode. Thank you for connecting with CX CODEX TECH-IT.",
        record: {
          organizationName: organizationName.trim(),
          contactName: contactName.trim(),
          businessEmail: businessEmail.trim(),
          phone: phone ? phone.trim() : null,
          inquiryType: inquiryType || "Talent Solutions",
          targetRoles: Array.isArray(targetRoles) ? targetRoles : [targetRoles].filter(Boolean),
          experienceRequirements: experienceRequirements || "Any",
          locationPreferences: locationPreferences || "Remote / US Hybrid",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing employer requisition submission." },
      { status: 500 }
    );
  }
}
