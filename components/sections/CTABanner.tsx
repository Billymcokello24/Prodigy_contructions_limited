import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";

type HomeContent = typeof siteContent;

export default function CTABanner({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
}: {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  const c = content<HomeContent>("home");
  return (
    <section className="bg-paper py-24">
      <div className="page flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div>
          <p className="kicker text-orange">Start a conversation</p>
          <h2 className="display-md mt-4 max-w-xl">{title ?? c.ctaTitle}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            {subtitle ?? c.ctaText}
          </p>
        </div>
        <Link href={primaryHref ?? c.ctaHref} className="btn btn-dark flex items-center gap-2 shrink-0">
          {primaryLabel ?? c.ctaLabel} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
