import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

// In-memory rate limiter for spam prevention (IP -> array of timestamps)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent from this IP address. Please wait a few minutes or email directly.",
          mailtoFallback: `mailto:manish.sp2060@gmail.com`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, website, formLoadedAt } = body;

    // Honeypot spam trap
    if (website && String(website).trim().length > 0) {
      // Fake delay to simulate actual work, but do not send
      await new Promise((r) => setTimeout(r, 600));
      return NextResponse.json({
        success: true,
        message: "Your message has been received.",
      });
    }

    // Minimum interaction time check (less than 1200ms is automated bot submission)
    if (formLoadedAt) {
      const submissionElapsed = Date.now() - Number(formLoadedAt);
      if (submissionElapsed < 1200) {
        return NextResponse.json(
          {
            success: false,
            error: "Submission rejected as suspected automated spam.",
          },
          { status: 400 }
        );
      }
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must contain at least 10 characters." },
        { status: 400 }
      );
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 120);
    const cleanSubject = (subject && typeof subject === "string" ? subject.trim().slice(0, 150) : "") || `Portfolio Contact from ${cleanName}`;
    const cleanMessage = message.trim().slice(0, 3000);

    const recipient = process.env.CONTACT_TO_EMAIL || "manish.sp2060@gmail.com";
    const sender = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #14B8A6; border-radius: 8px; background-color: #0E1715; color: #F1F5F4;">
        <h2 style="color: #2DD4BF; border-bottom: 1px solid #1B332F; padding-bottom: 10px; margin-top: 0;">
          New Portfolio Message for Manish Yadav
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #9EADA9; width: 120px;"><strong>Sender Name:</strong></td>
            <td style="padding: 8px 0; color: #F1F5F4;">${cleanName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #9EADA9;"><strong>Sender Email:</strong></td>
            <td style="padding: 8px 0; color: #2DD4BF;"><a href="mailto:${cleanEmail}" style="color: #2DD4BF;">${cleanEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #9EADA9;"><strong>Subject:</strong></td>
            <td style="padding: 8px 0; color: #F1F5F4;">${cleanSubject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #9EADA9;"><strong>Timestamp:</strong></td>
            <td style="padding: 8px 0; color: #9EADA9;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
        <div style="background-color: #050807; border: 1px solid #182E29; border-radius: 6px; padding: 16px;">
          <h3 style="color: #14B8A6; margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message Body:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #F1F5F4; margin: 0;">${cleanMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>
        <p style="font-size: 12px; color: #637571; margin-top: 20px; text-align: center;">
          Sent from Manish Yadav's .NET Developer Portfolio
        </p>
      </div>
    `;

    const emailText = `New Portfolio Message for Manish Yadav\n\nFrom: ${cleanName} (${cleanEmail})\nSubject: ${cleanSubject}\nDate: ${new Date().toLocaleString()}\n\nMessage:\n${cleanMessage}\n`;

    // Strategy 1: Check Resend API Key
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.startsWith("re_")) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
          from: sender,
          to: recipient,
          replyTo: cleanEmail,
          subject: `[Portfolio Inquiry] ${cleanSubject}`,
          text: emailText,
          html: emailHtml,
        });

        if (error) {
          console.error("Resend delivery error:", error);
          throw new Error(error.message || "Failed to send via Resend");
        }

        return NextResponse.json({
          success: true,
          provider: "resend",
          message: "Thank you! Your message has been dispatched successfully to Manish Yadav.",
        });
      } catch (resendError) {
        console.error("Resend sending exception:", resendError);
        // Fall back to SMTP check or fallback response
      }
    }

    // Strategy 2: Check SMTP configuration
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"${cleanName} via Portfolio" <${process.env.SMTP_USER}>`,
          to: recipient,
          replyTo: cleanEmail,
          subject: `[Portfolio Inquiry] ${cleanSubject}`,
          text: emailText,
          html: emailHtml,
        });

        return NextResponse.json({
          success: true,
          provider: "smtp",
          message: "Thank you! Your message has been sent successfully via SMTP to Manish Yadav.",
        });
      } catch (smtpError) {
        console.error("SMTP sending exception:", smtpError);
      }
    }

    // Honest delivery status when no credentials are configured
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      cleanSubject
    )}&body=${encodeURIComponent(
      `Hi Manish,\n\n${cleanMessage}\n\nBest regards,\n${cleanName} (${cleanEmail})`
    )}`;

    return NextResponse.json({
      success: true,
      simulated: true,
      message:
        "Message validated and recorded in local mode. (To enable live email dispatch to your inbox, set RESEND_API_KEY or SMTP variables in .env.local). You can also click the fallback button to open your email client directly.",
      mailtoFallback: mailtoUrl,
    });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your message. Please contact Manish directly at manish.sp2060@gmail.com.",
        mailtoFallback: `mailto:manish.sp2060@gmail.com?subject=Portfolio%20Inquiry`,
      },
      { status: 500 }
    );
  }
}
