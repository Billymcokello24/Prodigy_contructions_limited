import { NextRequest, NextResponse } from "next/server";
import { getCollectionSchema } from "@/lib/cms-schemas";
import { CMS_ADMIN_PASSWORD, type CollectionKey } from "@/lib/cms";

export const dynamic = "force-dynamic";

/**
 * Serves a JSON-serializable field schema for a collection so the admin form
 * editor can render the right input for every field without touching code.
 */
export function GET(request: NextRequest) {
  if (request.headers.get("x-admin-token") !== CMS_ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const key = request.nextUrl.searchParams.get("key");
  if (!key) return NextResponse.json({ error: "Missing key" }, { status: 400 });
  return NextResponse.json({ schema: getCollectionSchema(key as CollectionKey) });
}