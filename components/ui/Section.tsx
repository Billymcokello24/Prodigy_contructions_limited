import type { ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 mb-10 ${alignCls}`}>
      {eyebrow ? (
        <span className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-accent" : "text-accent"}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"} max-w-2xl`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`max-w-2xl text-base leading-relaxed ${dark ? "text-slate-300" : "text-muted"}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}