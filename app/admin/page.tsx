"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, LayoutDashboard, Lock, Save, RefreshCw, ChevronDown } from "lucide-react";

const PASSWORD_KEY = "prodigy_cms_auth";

interface CollectionMeta {
  key: string;
  label: string;
  count: number;
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
          <Link href="/" className="font-mono text-[0.6rem] uppercase tracking-widest text-paper/60 hover:text-orange">
            ← Back
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center bg-orange">
            <Lock className="h-5 w-5 text-white" />
          </span>
          <h1 className="font-display text-2xl font-bold uppercase text-paper">
            Admin access
          </h1>
        </div>
        <p className="mt-3 font-mono text-xs leading-relaxed text-paper/60">
          Enter the administrator password to manage website content.
        </p>
        <form onSubmit={submit} className="mt-8">
          <label className="field-label" style={{ color: "rgba(255,255,255,0.5)" }} htmlFor="pw">
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
      </div>
    </div>
  );
}

function AdminShell({ collections }: { collections: CollectionMeta[] }) {
  const [activeKey, setActiveKey] = useState<string>("site");
  const [data, setData] = useState<unknown>(null);
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [editorText, setEditorText] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const dirty = useRef(false);
  const missKey = (c: string) => setActiveKey(c);

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
    try {
      const parsed = JSON.parse(editorText);
      setSaving(true);
      setStatus("");
      const res = await fetch(`/api/cms?key=${activeKey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-token": getToken() ?? "" } as Record<string, string>,
        body: JSON.stringify(parsed),
      });
      if (res.ok) {
        setData(parsed);
        dirty.current = false;
        setStatus("Saved ✓");
      } else {
        setStatus("Save failed.");
      }
    } catch {
      setStatus("Invalid JSON — not saved.");
    } finally {
      setSaving(false);
    }
  };

  const handleCreateItem = () => {
    if (Array.isArray(data)) {
      const next = [...(data as unknown[]), {}];
      setData(next);
      setEditorText(JSON.stringify(next, null, 2));
      dirty.current = true;
      setStatus("New item added — fill in fields and save.");
    }
  };

  const handleRemoveItem = (index: number) => {
    if (Array.isArray(data)) {
      const next = (data as unknown[]).filter((_, i) => i !== index);
      setData(next);
      setEditorText(JSON.stringify(next, null, 2));
      dirty.current = true;
      setStatus("Item removed — save to persist.");
    }
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
        dirty.current = false;
        setStatus("Reset to defaults.");
      })
      .catch(() => setStatus("Reset failed."));
  };

  return (
    <div>
      <header className="border-b border-line bg-white/40">
        <div className="page flex h-16 items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl font-bold uppercase tracking-wide">
              Prodigy
            </span>
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
              <span className="font-mono text-[0.6rem] uppercase tracking-widest">
                Collections
              </span>
            </div>
            <nav className="divide-y divide-line">
              {collections.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveKey(c.key)}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left font-mono text-[0.65rem] uppercase tracking-wider transition-colors ${
                    activeKey === c.key
                      ? "bg-graphite text-paper"
                      : "text-graphite hover:bg-limestone"
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
          <div className="flex items-center justify-between border-b border-line pb-4">
            <h2 className="font-display text-xl font-bold uppercase">
              {activeMeta?.label ?? activeKey}
            </h2>
            <div className="flex items-center gap-3">
              {status ? (
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-orange">
                  {status}
                </span>
              ) : null}
              <button onClick={handleCreateItem} className="btn btn-sm btn-dark-outline">
                + New {Array.isArray(data) ? "item" : "entry"}
              </button>
              <button onClick={handleSave} disabled={saving} className="btn btn-sm flex items-center gap-2">
                <Save className="h-3 w-3" /> {saving ? "Saving…" : "Save"}
              </button>
            </div>
          </div>

          {!loaded ? (
            <p className="py-12 text-center font-mono text-xs text-smoke">Loading…</p>
          ) : (
            <>
              <div className="flex items-center justify-end gap-4 pb-3 pt-5 font-mono text-[0.55rem] uppercase tracking-widest text-smoke">
                <button
                  onClick={() => setExpanded((e) => ({ ...e, schema: !e.schema }))}
                  className="flex items-center gap-1 hover:text-orange"
                >
                  <ChevronDown className="h-3 w-3" /> Data preview
                </button>
              </div>

              {/* Array collections: show item list with inline expand/collapse */}
              {Array.isArray(data) ? (
                <div className="divide-y divide-line border border-line bg-white/40">
                  {(data as Record<string, unknown>[]).map((item, i) => {
                    const open = !!expanded[i];
                    return (
                      <div key={i}>
                        <button
                          onClick={() => setExpanded((e) => ({ ...e, [i]: !open }))}
                          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-limestone/60"
                        >
                          <span className="font-mono text-[0.65rem] uppercase tracking-wider text-graphite">
                            <span className="mr-3 text-orange">{String(i + 1).padStart(2, "0")}</span>
                            {String(item?.slug ?? item?.name ?? item?.title ?? "—")}
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="font-mono text-[0.5rem] uppercase tracking-widest text-smoke">
                              {Object.keys(item ?? {}).length} fields
                            </span>
                            <ChevronDown
                              className={`h-3.5 w-3.5 text-smoke transition-transform ${open ? "rotate-180" : ""}`}
                            />
                          </span>
                        </button>
                        {open ? (
                          <div className="border-t border-line px-4 pb-4 pt-3">
                            <FieldInspector value={item} />
                            <button
                              onClick={() => handleRemoveItem(i)}
                              className="mt-3 border border-orange/40 px-3 py-1.5 font-mono text-[0.55rem] uppercase tracking-widest text-orange hover:bg-orange hover:text-white"
                            >
                              Remove item
                            </button>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="border border-line bg-white/40 p-4">
                  <FieldInspector value={data as Record<string, unknown>} />
                </div>
              )}

              <div className="mt-8 border border-line bg-white/40">
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-smoke">
                    JSON editor
                  </span>
                  <span className="font-mono text-[0.5rem] uppercase tracking-widest text-smoke">
                    all fields editable
                  </span>
                </div>
                <textarea
                  value={editorText}
                  onChange={(e) => {
                    setEditorText(e.target.value);
                    dirty.current = true;
                  }}
                  spellCheck={false}
                  className="h-[420px] w-full resize-y bg-paper p-4 font-mono text-xs leading-relaxed text-graphite focus:outline-none"
                />
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

/** Renders a flat key→value field grid for an item or object. */
function FieldInspector({ value }: { value: Record<string, unknown> | undefined }) {
  if (!value) return <p className="font-mono text-xs text-smoke">Empty item.</p>;
  const entries = Object.entries(value);
  if (entries.length === 0)
    return <p className="font-mono text-xs text-smoke">Empty object — add fields in the JSON editor.</p>;
  return (
    <div className="grid gap-2">
      {entries.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[140px_1fr] items-baseline gap-3 border-b border-line/60 pb-1.5 last:border-0">
          <span className="break-all font-mono text-[0.55rem] uppercase tracking-widest text-orange">{k}</span>
          <span className="break-all font-mono text-xs text-graphite">
            {typeof v === "object" && v !== null
              ? Array.isArray(v)
                ? `[array · ${(v as unknown[]).length}]`
                : `{object · ${Object.keys(v as Record<string, unknown>).length}}`
              : String(v ?? "—")}
          </span>
        </div>
      ))}
    </div>
  );
}