import { NextRequest, NextResponse } from "next/server";
import { CMS_ADMIN_PASSWORD, listCollections } from "@/lib/cms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const token = request.headers.get("x-admin-token");
  if (token !== CMS_ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ collections: listCollections() });
}