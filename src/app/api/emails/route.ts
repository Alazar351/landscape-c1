import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(req: NextRequest) {
  try {
    const { name, emailAddress, subject, message } = await req.json();

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    } as SMTPTransport.Options);

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.CLIENT_EMAIL,
      subject: "Client Inquiry",
      html: `
    <h3>Client Inquiry<h3/>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${emailAddress}</li>
        <li>Subject: ${subject}</li>
        <li>Message: ${message}</li>
    </ul>
    `,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Email failed to send", error: error.message },
      { status: 500 },
    );
  }
}
