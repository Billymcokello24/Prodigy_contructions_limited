import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden bg-graphite pb-20 pt-44 text-paper">
      <div className="absolute inset-0">
        {image ? (
          <>
            <img src={image} alt="" aria-hidden className="h-full w-full object-cover opacity-45" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg,#0c100eeb 0%,#0c100ea6 43%,#0c100e1f 75%),linear-gradient(0deg,rgba(12,16,14,.55) 0%,transparent 45%)",
              }}
            />
          </>
        ) : (
          <div className="h-full w-full bg-graphite" />
        )}
      </div>
      <div className="page relative z-10">
        {eyebrow ? <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-orange">{eyebrow}</p> : null}
        <h1 className="display max-w-4xl">{title}</h1>
        {subtitle ? <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70">{subtitle}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
        <div className="mt-12 flex items-center border-t border-white/30 pt-3 font-mono text-[0.5rem] uppercase tracking-widest text-paper/60">
          <span>PRODIGY CONSTRUCTION LIMITED</span>
        </div>
      </div>
    </section>
  );
}
