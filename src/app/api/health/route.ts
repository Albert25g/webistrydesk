import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "webistrydesk",
    version: "v-2025-08-15-1",
  });
}
