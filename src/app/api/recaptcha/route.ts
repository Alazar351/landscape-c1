import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { recaptchaToken } = await req.json();

  if (!recaptchaToken) {
    return NextResponse.json(
      { success: false, message: "No token provided" },
      { status: 400 },
    );
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { success: false, message: "reCaptcha secret key not set" },
      { status: 500 },
    );
  }

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const response = await fetch(verifyUrl, {
      method: "POST",
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Verification successful",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Verification failed" },
        { status: 400 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error verifying token" },
      { status: 500 },
    );
  }
}
