import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { website, name = "", email = "", message = "" } = body || {};

    if (website) return NextResponse.json({ ok: true }, { status: 200 });
    if (!name || !email || !message) return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    if (!isValidEmail(email)) return NextResponse.json({ error: "Invalid email." }, { status: 400 });

    const lines = [
      `New Contact Request — WebistryDesk`,
      `--------------------------------`,
      `Name:    ${name}`,
      `Email:   ${email}`,
      ``,
      `Message:`,
      message,
    ];
    console.log(lines.join("\n"));

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
