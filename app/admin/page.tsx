"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  LayoutDashboard,
  Lock,
  Save,
  RefreshCw,
  Upload,
  Image as ImageIcon,
  ChevronDown,
  Plus,
  Trash2,
  FileJson2,
  Rows3,
} from "lucide-react";

const PASSWORD_KEY = "prodigy_cms_auth";

interface CollectionMeta {
  key: string;
  label: string;
  count: number;
}

/** Server-provided schema (generated at build/runtime by lib/cms-schemas). */
type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "select"
  | "image"
  | "url"
  | "stringArray"
  | "objectArray"
  | "object";

interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  options?: string[];
  fields?: FieldDef[];
}

interface CollectionSchema {
  kind: "object" | "array";
  fields: FieldDef[];
}

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(PASSWORD_KEY);
  } catch {
    return null;
  }
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [collections, setCollections] = useState<CollectionMeta[]>([]);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setChecking(false);
      return;
    }
    fetch("/api/admin/collections", { headers: { "x-admin-token": token } })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("unauthorized"))))
      .then((data) => {
        setCollections(data.collections);
        setAuthed(true);
        setChecking(false);
      })
      .catch(() => setChecking(false));
  }, []);

  const login = async (password: string) => {
    const res = await fetch("/api/admin/collections", {
      headers: { "x-admin-token": password } as Record<string, string>,
    });
    if (res.ok) {
      try {
        sessionStorage.setItem(PASSWORD_KEY, password);
      } catch {
        /* ignore */
      }
      setCollections((await res.json()).collections);
      setAuthed(true);
    }
    return res.ok;
  };

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-graphite font-mono text-sm text-paper">
        Checking session…
      </div>
    );
  }

  if (!authed) {
    return (
      <LoginGate
        onLogin={async (p) => {
          const ok = await login(p);
          return ok;
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <AdminShell collections={collections} />
    </div>
  );
}

function LoginGate({ onLogin }: { onLogin: (password: string) => Promise<boolean> }) {
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const ok = await onLogin(pass);
    if (!ok) setError("Incorrect password.");
    setBusy(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-graphite">
      <div className="w-full max-w-md px-6">
        <div className="mb-10 flex items-center justify-between border-b border-white/15 pb-5">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold uppercase tracking-wide text-paper">
              Prodigy
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-orange">
              Content Management
            </span>
          </div>
          <Link
            href="/"
            className="font-mono text-[0.6rem] uppercase tracking-widest text-paper/60 hover:text-orange"
          >
            ← Back
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center bg-orange">
            <Lock className="h-5 w-5 text-white" />
          </span>
          <h1 className="font-display text-2xl font-bold uppercase text-paper">Admin access</h1>
        </div>
        <p className="mt-3 font-mono text-xs leading-relaxed text-paper/60">
          Enter the administrator password to manage website content.
        </p>
        <form onSubmit={submit} className="mt-8">
          <label
            className="field-label"
            style={{ color: "rgba(255,255,255,0.5)" }}
            htmlFor="pw"
          >
            Password
          </label>
          <input
            id="pw"
            type="password"
            autoFocus
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="form-input-dark font-mono text-sm"
            placeholder="••••••••••"
          />
          {error ? <p className="mt-3 font-mono text-xs text-orange">{error}</p> : null}
          <button
            type="submit"
            disabled={busy || !pass}
            className="btn mt-6 w-full justify-center"
          >
            {busy ? "Checking…" : "Unlock dashboard"}
          </button>
        </form>
        <p className="mt-10 border-t border-white/10 pt-6 font-mono text-[0.55rem] uppercase tracking-widest text-paper/40">
          Default password: prodigy-admin · configurable via CMS_ADMIN_PASSWORD
        </p>
      </div>
    </div>
  );
}

function AdminShell({ collections }: { collections: CollectionMeta[] }) {
  const [activeKey, setActiveKey] = useState<string>("site");
  const [mode, setMode] = useState<"form" | "json">("form");
  const [data, setData] = useState<unknown>(null);
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [editorText, setEditorText] = useState("");

  const activeMeta = useMemo(
    () => collections.find((c) => c.key === activeKey),
    [collections, activeKey],
  );

  useEffect(() => {
    if (!activeKey) return;
    setLoaded(false);
    setStatus("");
    fetch(`/api/cms?key=${activeKey}`)
      .then((r) => r.json())
      .then((json) => {
        setData(json.data ?? null);
        setEditorText(JSON.stringify(json.data ?? null, null, 2));
        setLoaded(true);
      })
      .catch(() => setStatus("Failed to load collection."));
  }, [activeKey]);

  const handleSave = async () => {
    setSaving(true);
    setStatus("");
    let payload: unknown;
    try {
      payload = mode === "json" ? JSON.parse(editorText) : data;
    } catch {
      setStatus("Invalid JSON — not saved.");
      setSaving(false);
      return;
    }
    const res = await fetch(`/api/cms?key=${activeKey}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": getToken() ?? "",
      } as Record<string, string>,
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setEditorText(JSON.stringify(payload, null, 2));
      setStatus("Saved ✓");
    } else {
      setStatus("Save failed.");
    }
    setSaving(false);
  };

  const handleReset = () => {
    if (!confirm("Reset this collection to its built-in defaults?")) return;
    fetch(`/api/cms?key=${activeKey}&__reset=1`, {
      headers: { "x-admin-token": getToken() ?? "" } as Record<string, string>,
    })
      .then(() => fetch(`/api/cms?key=${activeKey}`))
      .then((r) => r.json())
      .then((j) => {
        setData(j.data ?? null);
        setEditorText(JSON.stringify(j.data ?? null, null, 2));
        setStatus("Reset to defaults.");
      })
      .catch(() => setStatus("Reset failed."));
  };

  return (
    <div>
      <header className="border-b border-line bg-white/40">
        <div className="page flex h-16 items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl font-bold uppercase tracking-wide">Prodigy</span>
            <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.25em] text-orange sm:inline">
              Content Management
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden font-mono text-[0.6rem] uppercase tracking-widest text-smoke md:inline">
              {activeMeta ? `${activeMeta.label} · ${activeMeta.count} items` : ""}
            </span>
            <Link
              href="/"
              className="flex items-center gap-1 font-mono text-[0.6rem] uppercase tracking-widest text-smoke hover:text-orange"
            >
              View site <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </header>

      <div className="page grid gap-8 py-8 lg:grid-cols-[260px_1fr]">
        <aside>
          <div className="border border-line">
            <div className="flex items-center gap-2 border-b border-line bg-limestone px-4 py-3">
              <LayoutDashboard className="h-3.5 w-3.5 text-orange" />
              <span className="font-mono text-[0.6rem] uppercase tracking-widest">Collections</span>
            </div>
            <nav className="divide-y divide-line">
              {collections.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveKey(c.key)}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left font-mono text-[0.65rem] uppercase tracking-wider transition-colors ${
                    activeKey === c.key ? "bg-graphite text-paper" : "text-graphite hover:bg-limestone"
                  }`}
                >
                  <span>{c.label}</span>
                  <span className="text-[0.55rem] opacity-60">{c.count}</span>
                </button>
              ))}
            </nav>
          </div>
          <button
            onClick={handleReset}
            className="mt-4 flex w-full items-center justify-center gap-2 border border-line py-2.5 font-mono text-[0.6rem] uppercase tracking-widest text-smoke transition-colors hover:border-orange hover:text-orange"
          >
            <RefreshCw className="h-3 w-3" /> Reset active to defaults
          </button>
        </aside>

        <section>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
            <h2 className="font-display text-xl font-bold uppercase">{activeMeta?.label ?? activeKey}</h2>
            <div className="flex flex-wrap items-center gap-3">
              {status ? (
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-orange">{status}</span>
              ) : null}
              <div className="flex border border-line">
                <button
                  onClick={() => setMode("form")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-widest transition-colors ${
                    mode === "form" ? "bg-graphite text-paper" : "text-smoke hover:text-orange"
                  }`}
                >
                  <Rows3 className="h-3 w-3" /> Form
                </button>
                <button
                  onClick={() => setMode("json")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-widest transition-colors ${
                    mode === "json" ? "bg-graphite text-paper" : "text-smoke hover:text-orange"
                  }`}
                >
                  <FileJson2 className="h-3 w-3" /> JSON
                </button>
              </div>
              <button onClick={handleSave} disabled={saving} className="btn btn-sm flex items-center gap-2">
                <Save className="h-3 w-3" /> {saving ? "Saving…" : "Save"}
              </button>
            </div>
          </div>

          {!loaded ? (
            <p className="py-12 text-center font-mono text-xs text-smoke">Loading…</p>
          ) : mode === "form" ? (
            <FormEditor
              collectionKey={activeKey}
              collectionLabel={activeMeta?.label ?? activeKey}
              data={data}
              onChange={setData}
            />
          ) : (
            <div className="mt-6 border border-line bg-white/40">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-smoke">JSON editor</span>
                <span className="font-mono text-[0.5rem] uppercase tracking-widest text-smoke">
                  all fields editable
                </span>
              </div>
              <textarea
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                spellCheck={false}
                className="h-[480px] w-full resize-y bg-paper p-4 font-mono text-xs leading-relaxed text-graphite focus:outline-none"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Schema-driven form editor                                           */
/* ------------------------------------------------------------------ */

function FormEditor({
  collectionKey,
  collectionLabel,
  data,
  onChange,
}: {
  collectionKey: string;
  collectionLabel: string;
  data: unknown;
  onChange: (next: unknown) => void;
}) {
  const [schema, setSchema] = useState<CollectionSchema | null>(null);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch(`/api/schemas?key=${collectionKey}`, {
      headers: { "x-admin-token": getToken() ?? "" } as Record<string, string>,
    })
      .then((r) => r.json())
      .then((s) => {
        setSchema(s.schema);
        setCollapsed({});
      })
      .catch(() => setSchema(null));
  }, [collectionKey]);

  if (!schema) {
    return (
      <p className="py-12 text-center font-mono text-xs text-smoke">Building editor…</p>
    );
  }

  if (Array.isArray(data)) {
    const items = data as Record<string, unknown>[];
    const updateItem = (index: number, value: Record<string, unknown>) => {
      onChange(items.map((it, i) => (i === index ? value : it)));
    };
    const removeItem = (index: number) => {
      onChange(items.filter((_, i) => i !== index));
    };
    const addItem = () => {
      onChange([...items, blankObject(schema.fields)]);
    };
    const move = (index: number, dir: -1 | 1) => {
      const target = index + dir;
      if (target < 0 || target >= items.length) return;
      const next = [...items];
      [next[index], next[target]] = [next[target], next[index]];
      onChange(next);
    };

    return (
      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-smoke">
            {items.length} {items.length === 1 ? "item" : "items"} in {collectionLabel}
          </p>
          <button onClick={addItem} className="btn btn-sm btn-dark-outline flex items-center gap-1.5">
            <Plus className="h-3 w-3" /> Add item
          </button>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => {
            const displayName =
              typeof item?.name === "string" && item.name
                ? item.name
                : typeof item?.title === "string" && item.title
                  ? item.title
                  : typeof item?.question === "string" && item.question
                    ? item.question
                    : `Item ${i + 1}`;
            const isOpen = collapsed[String(i)] !== true;
            return (
              <div key={String(item?.slug ?? i)} className="border border-line bg-white/40">
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <button
                    onClick={() => setCollapsed((c) => ({ ...c, [String(i)]: !isOpen }))}
                    className="flex items-center gap-3 text-left"
                  >
                    <span className="font-mono text-[0.55rem] uppercase tracking-widest text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm font-bold uppercase text-graphite">{displayName}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-smoke transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => move(i, -1)}
                      className="border border-line px-2 py-1 font-mono text-[0.55rem] uppercase text-smoke hover:text-orange"
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => move(i, 1)}
                      className="border border-line px-2 py-1 font-mono text-[0.55rem] uppercase text-smoke hover:text-orange"
                      title="Move down"
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => removeItem(i)}
                      className="flex items-center gap-1 border border-orange/40 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-widest text-orange hover:bg-orange hover:text-white"
                    >
                      <Trash2 className="h-3 w-3" /> Remove
                    </button>
                  </div>
                </div>
                {isOpen ? (
                  <div className="px-4 py-4">
                    <FieldFields
                      fields={schema.fields}
                      value={item}
                      onChange={(v) => updateItem(i, v)}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <button
          onClick={addItem}
          className="mt-6 flex w-full items-center justify-center gap-2 border border-dashed border-line py-3 font-mono text-xs uppercase tracking-widest text-smoke hover:border-orange hover:text-orange"
        >
          <Plus className="h-3.5 w-3.5" /> Add another item
        </button>
      </div>
    );
  }

  const objectData = (data ?? {}) as Record<string, unknown>;
  return (
    <div className="mt-6">
      <FieldFields fields={schema.fields} value={objectData} onChange={onChange} />
    </div>
  );
}

function blankObject(fields: FieldDef[]): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const f of fields) {
    out[f.key] = blankValue(f);
  }
  return out;
}

function blankValue(field: FieldDef): unknown {
  switch (field.type) {
    case "boolean":
      return false;
    case "number":
      return 0;
    case "stringArray":
      return [];
    case "objectArray":
      return [];
    case "object":
      return blankObject(field.fields ?? []);
    default:
      return "";
  }
}

/** Renders every field in a schema (recursively for nested structures). */
function FieldFields({
  fields,
  value,
  onChange,
}: {
  fields: FieldDef[];
  value: Record<string, unknown>;
  onChange: (next: Record<string, unknown>) => void;
}) {
  const setField = (key: string, v: unknown) => onChange({ ...value, [key]: v });
  return (
    <div className="grid gap-4">
      {fields.map((field) => (
        <Field
          key={field.key}
          field={field}
          value={value?.[field.key]}
          onChange={(v) => setField(field.key, v)}
        />
      ))}
    </div>
  );
}

function Field({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  switch (field.type) {
    case "object": {
      const obj = (value ?? {}) as Record<string, unknown>;
      return (
        <div className="rounded border border-line/70 bg-limestone/30 p-3">
          <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-widest text-graphite">
            {field.label}
          </p>
          <FieldFields fields={field.fields ?? []} value={obj} onChange={onChange} />
        </div>
      );
    }
    case "objectArray": {
      const arr = (Array.isArray(value) ? value : []) as Record<string, unknown>[];
      const setItem = (i: number, v: Record<string, unknown>) => {
        onChange(arr.map((it, idx) => (idx === i ? v : it)));
      };
      const addItem = () => {
        onChange([...arr, blankObject(field.fields ?? [])]);
      };
      const removeItem = (i: number) => onChange(arr.filter((_, idx) => idx !== i));
      return (
        <div className="rounded border border-dashed border-line bg-white/30 p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-graphite">{field.label}</p>
            <button onClick={addItem} className="btn btn-sm btn-dark-outline flex items-center gap-1.5">
              <Plus className="h-3 w-3" /> Add
            </button>
          </div>
          {arr.length === 0 ? (
            <p className="py-3 text-center font-mono text-xs text-smoke">No items — add one above.</p>
          ) : (
            <div className="space-y-2">
              {arr.map((item, i) => (
                <div key={i} className="border border-line bg-paper p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-[0.55rem] uppercase tracking-widest text-orange">
                      {field.label} {i + 1}
                    </span>
                    <button
                      onClick={() => removeItem(i)}
                      className="flex items-center gap-1 font-mono text-[0.55rem] uppercase tracking-widest text-orange"
                    >
                      <Trash2 className="h-3 w-3" /> Remove
                    </button>
                  </div>
                  <FieldFields fields={field.fields ?? []} value={item} onChange={(v) => setItem(i, v)} />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    case "stringArray": {
      const arr = (Array.isArray(value) ? value : []) as string[];
      const text = arr.join("\n");
      const update = (raw: string) =>
        onChange(
          raw
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean),
        );
      const addItem = () => onChange([...arr, ""]);
      return (
        <div>
          <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-graphite">
            {field.label}
          </span>
          <textarea
            value={text}
            onChange={(e) => update(e.target.value)}
            rows={Math.min(6, Math.max(2, arr.length + 1))}
            spellCheck={false}
            placeholder="One item per line"
            className="field-textarea"
          />
          <button
            onClick={addItem}
            className="mt-1 font-mono text-[0.55rem] uppercase tracking-widest text-orange hover:text-graphite"
          >
            + Add line
          </button>
        </div>
      );
    }
    case "image":
      return (
        <ImageField
          field={field}
          value={typeof value === "string" ? value : ""}
          onChange={(v) => onChange(v)}
        />
      );
    case "boolean":
      return (
        <label className="flex items-center gap-3 border border-line bg-white/40 px-3 py-2.5">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            className="h-4 w-4 accent-orange"
          />
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-graphite">
            {field.label}
          </span>
        </label>
      );
    case "number":
      return (
        <label className="block">
          <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-graphite">
            {field.label}
          </span>
          <input
            type="number"
            value={typeof value === "number" ? value : 0}
            onChange={(e) => onChange(Number(e.target.value))}
            className="form-input"
          />
        </label>
      );
    case "select":
      return (
        <label className="block">
          <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-graphite">
            {field.label}
          </span>
          <select
            value={typeof value === "string" ? value : ""}
            onChange={(e) => onChange(e.target.value)}
            className="form-input"
          >
            {(field.options ?? []).map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      );
    case "url":
      return (
        <label className="block">
          <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-graphite">
            {field.label}
          </span>
          <input
            type="text"
            value={typeof value === "string" ? value : ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/page-or-https://…"
            className="form-input"
          />
        </label>
      );
    case "textarea":
      return (
        <label className="block">
          <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-graphite">
            {field.label}
          </span>
          <textarea
            value={typeof value === "string" ? value : ""}
            onChange={(e) => onChange(e.target.value)}
            rows={4}
            spellCheck={false}
            className="field-textarea"
          />
        </label>
      );
    default:
      return (
        <label className="block">
          <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-graphite">
            {field.label}
          </span>
          <input
            type="text"
            value={typeof value === "string" ? value : ""}
            onChange={(e) => onChange(e.target.value)}
            className="form-input"
          />
        </label>
      );
  }
}

/** Image field with live preview, URL input, local upload and media library picker. */
function ImageField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: string;
  onChange: (url: string) => void;
}) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [uploads, setUploads] = useState<{ url: string; filename: string }[]>([]);
  const [uploadError, setUploadError] = useState("");

  const uploadFile = async (file: File) => {
    setUploading(true);
    setUploadError("");
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/uploads", {
        method: "POST",
        headers: { "x-admin-token": getToken() ?? "" } as Record<string, string>,
        body,
      });
      const json = await res.json();
      if (res.ok) {
        onChange(json.url);
      } else {
        setUploadError(json.error ?? "Upload failed.");
      }
    } catch {
      setUploadError("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const toggleLibrary = async () => {
    if (!showLibrary) {
      try {
        const res = await fetch("/api/uploads", {
          headers: { "x-admin-token": getToken() ?? "" } as Record<string, string>,
        });
        if (res.ok) setUploads((await res.json()).uploads ?? []);
      } catch {
        /* ignore */
      }
    }
    setShowLibrary((s) => !s);
  };

  return (
    <div>
      <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-graphite">
        {field.label}
      </span>
      <div className="flex items-start gap-3">
        <div className="h-16 w-24 shrink-0 border border-line bg-limestone/50">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <ImageIcon className="h-4 w-4 text-smoke" />
            </div>
          )}
        </div>
        <div className="grid flex-1 gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/uploads/image.jpg or https://…"
            className="form-input"
          />
          <div className="flex flex-wrap items-center gap-2">
            <input
              ref={fileInput}
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) uploadFile(f);
                e.target.value = "";
              }}
            />
            <button
              onClick={() => fileInput.current?.click()}
              disabled={uploading}
              className="btn btn-sm btn-dark-outline flex items-center gap-1.5"
            >
              <Upload className="h-3 w-3" /> {uploading ? "Uploading…" : "Upload"}
            </button>
            <button
              onClick={toggleLibrary}
              className="btn btn-sm btn-dark-outline flex items-center gap-1.5"
            >
              <ImageIcon className="h-3 w-3" /> Media library
            </button>
            {value ? (
              <button
                onClick={() => onChange("")}
                className="font-mono text-[0.55rem] uppercase tracking-widest text-orange"
              >
                Clear
              </button>
            ) : null}
          </div>
          {uploadError ? <p className="font-mono text-[0.6rem] text-orange">{uploadError}</p> : null}
          {showLibrary ? (
            <div className="max-h-56 overflow-y-auto border border-line bg-paper p-2">
              {uploads.length === 0 ? (
                <p className="p-2 font-mono text-xs text-smoke">No uploads yet.</p>
              ) : (
                <div className="grid grid-cols-4 gap-1.5">
                  {uploads.map((u) => (
                    <button
                      key={u.url}
                      onClick={() => {
                        onChange(u.url);
                        setShowLibrary(false);
                      }}
                      className="group relative aspect-square overflow-hidden border border-line hover:border-orange"
                      title={u.filename}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={u.url}
                        alt={u.filename}
                        className="h-full w-full object-cover transition-opacity group-hover:opacity-60"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}