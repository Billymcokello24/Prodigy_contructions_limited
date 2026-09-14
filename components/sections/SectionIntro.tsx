import type { ReactNode } from "react";

/**
 * Editorial section intro row: index · heading · supporting copy.
 * Mirrors the reference `section-intro` grid.
 */
export default function SectionIntro({
  index,
  title,
  text,
  actions,
}: {
  index: string;
  title: ReactNode;
  text?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-12 grid items-end gap-6 lg:grid-cols-[220px_minmax(300px,1fr)_minmax(240px,440px)] lg:gap-8">
      <p className="section-index">{index}</p>
      <h2 className="display-sm max-w-xl">{title}</h2>
      <div>
        {text ? <p className="max-w-md text-base leading-relaxed text-muted">{text}</p> : null}
        {actions ? <div className="mt-5">{actions}</div> : null}
      </div>
    </div>
  );
}