import { NextRequest, NextResponse } from "next/server";
import { saveCollection, clearCollection, CMS_ADMIN_PASSWORD, CollectionKey } from "@/lib/cms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function authorized(request: NextRequest) {
  return request.headers.get("x-admin-token") === CMS_ADMIN_PASSWORD;
}

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  if (!key || !(key in (await import("@/lib/cms")).DEFAULT_COLLECTIONS)) {
    return NextResponse.json({ error: "Missing or invalid key" }, { status: 400 });
  }
  const reset = request.nextUrl.searchParams.get("__reset");
  if (reset === "1" && authorized(request)) {
    clearCollection(key as CollectionKey);
  }
  // Return deep-merged content so the admin editor always sees every field.
  const { content } = await import("@/lib/content");
  return NextResponse.json({ key, data: content(key as CollectionKey) });
}

export async function PUT(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  if (!key) return NextResponse.json({ error: "Missing key" }, { status: 400 });
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const result = await saveCollection(key, body);
    if (!result.ok) return NextResponse.json({ error: result.error }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Invalid payload" },
      { status: 400 },
    );
  }
}