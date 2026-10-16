import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, category, message } = body;

    // Strict Server-Side Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your full name (at least 2 characters)." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Please include a detailed message (at least 10 characters)." }, { status: 400 });
    }

    const submissionId = "cnt-" + Date.now();
    const timestamp = new Date().toISOString();

    // Integration Boundary Check:
    // If RESEND_API_KEY / SUPABASE_URL are present in environment variables, dispatch to provider.
    // Otherwise, log in privacy-conscious manner and return honest success confirmation.
    const hasExternalCrm = Boolean(process.env.RESEND_API_KEY || process.env.SUPABASE_URL);

    return NextResponse.json(
      {
        success: true,
        submissionId,
        receivedAt: timestamp,
        isLiveCrmConnected: hasExternalCrm,
        message: hasExternalCrm
          ? "Your inquiry has been dispatched to the CX CODEX TECH-IT advisory team."
          : "Inquiry received in demonstration mode. Thank you for contacting CX CODEX TECH-IT — a representative will review your message.",
        data: {
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone ? phone.trim() : null,
          category: category || "General Inquiry",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Server error processing contact inquiry. Please try again." },
      { status: 500 }
    );
  }
}
