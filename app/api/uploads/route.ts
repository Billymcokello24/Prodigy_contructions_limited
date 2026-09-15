import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { CMS_ADMIN_PASSWORD } from "@/lib/cms";
import { dbAddUpload, dbListUploads } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

function authorized(request: NextRequest): boolean {
  return request.headers.get("x-admin-token") === CMS_ADMIN_PASSWORD;
}

const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "image/avif": "avif",
  "application/pdf": "pdf",
};

export async function GET(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ uploads: dbListUploads() });
}

export async function POST(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    const ext = ALLOWED_TYPES[file.type];
    if (!ext) {
      return NextResponse.json({ error: `File type not allowed: ${file.type}` }, { status: 400 });
    }
    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json({ error: "File exceeds 8 MB limit" }, { status: 400 });
    }

    const safeBase = file.name.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/\.(jpg|png|webp|gif|svg|avif|pdf)$/i, "") || "upload";
    const filename = `${safeBase}-${Date.now()}.${ext}`;
    if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

    const bytes = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(path.join(UPLOAD_DIR, filename), bytes);

    const url = `/uploads/${filename}`;
    const id = dbAddUpload({ filename, url, mime: file.type, size: file.size });
    return NextResponse.json({ ok: true, id, url, filename });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Upload failed" },
      { status: 500 },
    );
  }
}