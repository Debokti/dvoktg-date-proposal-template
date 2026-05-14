import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "missing-key");
const notifyEmail = process.env.NOTIFY_EMAIL || "test@example.com";

export async function POST() {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFY_EMAIL) {
    console.log("NO BYPASS: Someone bypassed the evasion and clicked No! (logging to console — set RESEND_API_KEY and NOTIFY_EMAIL to get email alerts)");
    return NextResponse.json({ success: true, message: "Logged to console" });
  }

  try {
    const data = await resend.emails.send({
      from: "Date Proposal App <onboarding@resend.dev>",
      to: [notifyEmail],
      subject: "⚠️ Someone bypassed the No button!",
      text: "A sneaky person bypassed the evasion script and managed to click No. Frontend devs, am I right?",
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending no-click email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
