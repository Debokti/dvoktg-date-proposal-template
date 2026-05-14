import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "missing-key");
const notifyEmail = process.env.NOTIFY_EMAIL || "test@example.com";

export async function GET() {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFY_EMAIL) {
    console.log("TRACK VIEW: Target has opened and viewed the proposal. (Resend API key or NOTIFY_EMAIL not set, logging to console instead)");
    return NextResponse.json({ success: true, message: "Logged to console" });
  }

  try {
    const data = await resend.emails.send({
      from: "Date Proposal App <onboarding@resend.dev>",
      to: [notifyEmail],
      subject: "Proposal Viewed!",
      text: "Target has opened and viewed the proposal.",
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending track-view email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
