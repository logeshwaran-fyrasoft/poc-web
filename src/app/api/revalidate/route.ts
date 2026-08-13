import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// Simulates a webhook your real backend/CMS would call whenever content
// actually changes. Instead of waiting for a timer, the backend hits this
// URL directly and Next.js regenerates ONLY the tagged data instantly.
//
// Usage:
//   GET http://localhost:3000/api/revalidate?secret=demo123&tag=pooja-essentials
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const tag = request.nextUrl.searchParams.get("tag");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }
  if (!tag) {
    return NextResponse.json({ error: "Missing tag param" }, { status: 400 });
  }

  revalidateTag(tag, "max");

  return NextResponse.json({ revalidated: true, tag, now: new Date().toISOString() });
}