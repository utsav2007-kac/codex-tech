import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to CX CODEX TECH-IT US Market Intelligence briefings.",
        email: email.trim(),
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Newsletter subscription failed." }, { status: 500 });
  }
}
