import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "cms.db");

let db: DatabaseSync | null = null;

/** In-memory SQLite (for builds / PRs where a persistent DB isn't desired). */
const USE_MEMORY = process.env.CMS_DB_MEMORY === "1";

function open(): DatabaseSync {
  if (db) return db;
  if (!USE_MEMORY && !fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  db = new DatabaseSync(USE_MEMORY ? ":memory:" : DB_FILE);
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec(`
    CREATE TABLE IF NOT EXISTS collections (
      key TEXT PRIMARY KEY,
      data TEXT NOT NULL,
      updated_at INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS uploads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename TEXT NOT NULL,
      url TEXT NOT NULL,
      mime TEXT NOT NULL,
      size INTEGER NOT NULL,
      created_at INTEGER NOT NULL
    );
  `);
  return db;
}

function now(): number {
  return Date.now();
}

/** Read the JSON stored for a collection, or null when missing. */
export function dbGetCollection(key: string): unknown | null {
  const row = open()
    .prepare("SELECT data FROM collections WHERE key = ?")
    .get(key) as { data: string } | undefined;
  if (!row) return null;
  try {
    return JSON.parse(row.data);
  } catch {
    return null;
  }
}

/** Insert or replace a collection's JSON. */
export function dbSetCollection(key: string, data: unknown): void {
  open()
    .prepare(
      `INSERT INTO collections (key, data, updated_at) VALUES (?, ?, ?)
       ON CONFLICT(key) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`,
    )
    .run(key, JSON.stringify(data), now());
}

/** Delete a collection row (falls back to built-in defaults thereafter). */
export function dbClearCollection(key: string): void {
  open().prepare("DELETE FROM collections WHERE key = ?").run(key);
}

/** List all collection keys present in the DB. */
export function dbListKeys(): string[] {
  const rows = open().prepare("SELECT key FROM collections").all() as { key: string }[];
  return rows.map((r) => r.key);
}

/** Insert an upload record; returns its id. */
export function dbAddUpload(file: { filename: string; url: string; mime: string; size: number }): number {
  const res = open()
    .prepare("INSERT INTO uploads (filename, url, mime, size, created_at) VALUES (?, ?, ?, ?, ?)")
    .run(file.filename, file.url, file.mime, file.size, now());
  return Number(res.lastInsertRowid);
}

/** List uploads, newest first. */
export function dbListUploads(): {
  id: number;
  filename: string;
  url: string;
  mime: string;
  size: number;
  created_at: number;
}[] {
  return open()
    .prepare("SELECT id, filename, url, mime, size, created_at FROM uploads ORDER BY created_at DESC, id DESC")
    .all() as {
    id: number;
    filename: string;
    url: string;
    mime: string;
    size: number;
    created_at: number;
  }[];
}

/** Migrate legacy content/*.json overrides into the DB on first run. */
export function dbMigrateLegacy(key: string, file: string): boolean {
  if (!fs.existsSync(file)) return false;
  try {
    const raw = JSON.parse(fs.readFileSync(file, "utf-8"));
    dbSetCollection(key, raw);
    return true;
  } catch {
    return false;
  }
}

/** Whether any collection row exists (used to decide seeding). */
export function dbHasAny(): boolean {
  const row = open().prepare("SELECT COUNT(*) AS n FROM collections").get() as { n: number };
  return row.n > 0;
}