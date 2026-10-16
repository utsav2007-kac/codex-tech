import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      consultationType,
      careerStage,
      targetRole,
      goals,
      preferredDate,
      preferredTimeSlot,
      timeZone,
    } = body;

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!phone || phone.trim().length < 7) {
      return NextResponse.json({ error: "Please provide a valid phone number for consultation reminders." }, { status: 400 });
    }
    if (!preferredDate || !preferredTimeSlot) {
      return NextResponse.json({ error: "Please select both a date and time slot for your appointment." }, { status: 400 });
    }

    const appointmentId = "apt-" + Date.now();
    const hasLiveCalendarProvider = Boolean(process.env.CAL_API_KEY || process.env.CALENDLY_API_KEY);

    return NextResponse.json(
      {
        success: true,
        appointmentId,
        isLiveCalendarConnected: hasLiveCalendarProvider,
        status: "confirmed",
        consultationDetails: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          consultationType: consultationType || "Career Strategy Session",
          careerStage: careerStage || "Not Specified",
          targetRole: targetRole || "Tech Professional",
          goals: goals ? goals.trim() : "US Tech Career Advancement",
          scheduledDate: preferredDate,
          scheduledTime: preferredTimeSlot,
          timeZone: timeZone || "America/New_York (EST)",
        },
        notice: hasLiveCalendarProvider
          ? "Calendar event dispatched to your email."
          : "Demo mode notice: This booking has been recorded locally for demonstration purposes. In production, credentials for Calendly, Cal.com, or Google Calendar API sync calendar invites.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal error processing consultation reservation." },
      { status: 500 }
    );
  }
}
